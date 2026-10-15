function createDesktopFX(T,M,C) {
      const {renderer,scene,camera,group:cardsGroup,cards,coins,particles,particleGeometry,particlePositions,particleMaterial,glow,glowMaterial,brandLight,lights,textures,cardGeometry,faceGeometry,coinGeometry,coinSide,coinCap,sparkleTexture,canvasTexture:baseCanvasTexture,colors,metrics,own:baseOwn}=C;
      const fxResources=new Set(),removeListeners=[];
      const own=value=>{fxResources.add(value);return baseOwn(value);};
      const canvasTexture=(...args)=>{const texture=baseCanvasTexture(...args);fxResources.add(texture);return texture;};
      const original={fog:scene.fog,clearColor:renderer.getClearColor(new T.Color()).clone(),clearAlpha:renderer.getClearAlpha(),autoReset:renderer.info.autoReset,particleOpacity:particleMaterial.opacity};
      const listen=(target,name,fn,options)=>{target.addEventListener(name,fn,options);removeListeners.push(()=>target.removeEventListener(name,fn,options));};
      const roots=[],ownedPasses=[],tweens=[];
      const hud=C.hud,originalLights=lights.map(light=>({color:light.color.clone(),intensity:light.intensity,visible:light.visible})),originalChildren=cards.map(card=>new Set(card.children));
      let composer=null,stepTrigger=null;
      const safely=fn=>{try{fn();}catch{}};
      function restoreLights(){lights.forEach((light,i)=>{light.color.copy(originalLights[i].color);light.intensity=originalLights[i].intensity;light.visible=originalLights[i].visible;});}
      function rollbackConstruction(){
        restoreLights();
        for(const remove of removeListeners)safely(remove);
        safely(()=>stepTrigger?.kill());
        for(const tween of tweens)safely(()=>tween.kill());
        for(const pass of ownedPasses)safely(()=>pass.dispose?.());
        safely(()=>composer?.dispose());
        for(const root of roots)safely(()=>scene.remove(root));
        for(let i=0;i<cards.length;i++)for(const child of [...cards[i].children])if(!originalChildren[i].has(child))cards[i].remove(child);
        for(const resource of fxResources){safely(()=>C.release?.(resource));safely(()=>resource.dispose?.());}
        fxResources.clear();scene.fog=original.fog;renderer.setClearColor(original.clearColor,original.clearAlpha);renderer.info.autoReset=original.autoReset;
      }
      try {
      const V=()=>new T.Vector3(),scratch=new T.Object3D(),v0=V(),v1=V(),v2=V(),v3=V(),rayOrigin=V(),rayDirection=V(),cameraPoint=V();
      const pointerWorld=V(),screenPointer=new T.Vector2(),raycaster=new T.Raycaster(),hits=[];
      raycaster.params.Line.threshold=.01;
      const backgroundColor=new T.Color(0x07070b);
      const colorTemp=new T.Color(),themeColor=new T.Color(0xf5c542);
      const params=new URLSearchParams(location.search),flag=params.get('fx');
      const baseTier='HIGH';
      const S={progress:0,velocity:0,direction:0,pointer:screenPointer,isDragging:false,activeBrand:'garena',hoveredRow:null,cartCount:0,tier:baseTier};
      const anchors=new Map(),scenes=[],sceneByName=new Map(),materials=[];
      let active=false,disposedFX=false,moving=true,time=0,theme='hero',themeTween=null,themeKey='',hoverCard=-1,dragCard=-1,downX=0,downY=0,lastX=0,lastY=0,held=false,pointerValid=false;
      let orderPulseTimer=0,frameCalls=0,frameTriangles=0,governorLevel=0,warpBoost=0,clickTimer=0,flightCursor=0;
      const interactive='a,button,input,textarea,select,summary,[role="tab"],.glass,.catalog,.order-panel,.payment-card';
      const cameraForward=V(),distanceVector=V();let cameraDirty=true;
      function syncCamera(){if(!cameraDirty)return;camera.updateProjectionMatrix();camera.updateMatrixWorld();camera.getWorldDirection(cameraForward);cameraDirty=false;}
      function pxRatio(point){syncCamera();const distance=point?Math.abs(distanceVector.copy(point).sub(camera.position).dot(cameraForward)):Math.abs(camera.position.z/cameraForward.z);return 2*Math.tan(T.MathUtils.degToRad(camera.fov*.5))*Math.max(.01,distance)/metrics.height;}
      const mesh=(geometry,material,parent)=>{const m=new T.Mesh(geometry,material);parent?.add(m);return m;};
      const basic=(color,opacity=1)=>own(new T.MeshBasicMaterial({color,transparent:opacity<1,opacity,depthWrite:opacity===1}));
      const metal=(color,emissive=0)=>{const m=own(new T.MeshPhysicalMaterial({color,metalness:.65,roughness:.28,clearcoat:1,emissive,emissiveIntensity:.8}));materials.push(m);return m;};
      const gold=metal(0xf5c542),red=metal(colors.garena),blue=metal(colors.zing),green=metal(0x49dc9c),pink=metal(0xf252a4),white=metal(0xe9f3ff);
      const bright=own(new T.MeshBasicMaterial({color:new T.Color(2.4,1.5,.3),transparent:true,opacity:.65,blending:T.AdditiveBlending,depthWrite:false}));
      const lineMaterial=own(new T.LineBasicMaterial({color:0xf5c542,transparent:true,opacity:.35,blending:T.AdditiveBlending,depthWrite:false}));
      const soft=own(new T.MeshBasicMaterial({color:0xf5c542,transparent:true,opacity:.25,blending:T.AdditiveBlending,depthWrite:false}));
      const unitBox=own(new T.BoxGeometry(1,1,1)),gemGeo=own(new T.OctahedronGeometry(.16,0)),ringGeo=own(new T.TorusGeometry(1,.014,6,64)),sparkGeo=own(new T.PlaneGeometry(.025,.025));
      function makeRoot(){const g=new T.Group();scene.add(g);roots.push(g);return g;}
      function track(name,element){const anchor={name,element,rect:null,point:V()};anchors.set(name,anchor);return anchor;}
      document.querySelectorAll('[data-3d-anchor]').forEach(el=>track(el.dataset['3dAnchor'],el));
      track('hero-art',document.querySelector('.hero__art'));track('ribbon',document.querySelector('.marquee'));track('closing-art',document.querySelector('.closing'));
      function screenToWorld(x,y,z,out){syncCamera();rayOrigin.copy(camera.position);rayDirection.set(x/metrics.width*2-1,1-y/metrics.height*2,.5).unproject(camera).sub(rayOrigin).normalize();return out.copy(rayOrigin).addScaledVector(rayDirection,(z-rayOrigin.z)/rayDirection.z);}
      function domToWorld(el,z,out,fx=.5,fy=.5){const a=typeof el==='string'?anchors.get(el):el;const r=a?.rect||a?.element?.getBoundingClientRect();if(!r)return out.set(0,-100,z);return screenToWorld(r.left+r.width*fx,r.top+r.height*fy,z,out);}
      function anchorScale(anchor,pixels){const a=anchors.get(anchor);domToWorld(a,0,a.point);return Math.min(pixels,a?.rect?.width||pixels)*pxRatio(a.point);}
      function tube(points,radius=.018){return own(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),28,radius,5,false));}
      function extrude(points,depth=.08){const shape=new T.Shape();points.forEach((p,i)=>i?shape.lineTo(...p):shape.moveTo(...p));shape.closePath();return own(new T.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelSize:.02,bevelThickness:.015,bevelSegments:2,steps:1}));}
      function text3D(label,size,material,parent){if(!/^[\x20-\x7e]*$/.test(label))throw new Error('3D text must be ASCII');let geometry;if(M.font){geometry=own(new M.TextGeometry(label,{font:M.font,size,height:.045,curveSegments:3,bevelEnabled:true,bevelThickness:.008,bevelSize:.006,bevelSegments:1}));geometry.computeBoundingBox();geometry.translate(-(geometry.boundingBox.max.x+geometry.boundingBox.min.x)/2,0,0);}else{geometry=own(new T.PlaneGeometry(size*label.length*.62,size));const tex=canvasTexture(512,128,(ctx)=>{ctx.fillStyle='#f5c542';ctx.font='bold 90px sans-serif';ctx.textAlign='center';ctx.fillText(label,256,99);});material=own(new T.MeshBasicMaterial({map:tex,transparent:true}));}return mesh(geometry,material,parent);}

      /* D0 / Pool: bounded instancing. No transient meshes on events or during updates. */
      class Pool {
        constructor(geometry,material,capacity,parent){this.capacity=capacity;this.cursor=0;this.armed=false;this.mesh=own(new T.InstancedMesh(geometry,material,capacity));this.mesh.instanceMatrix.setUsage(T.DynamicDrawUsage);this.mesh.frustumCulled=false;this.mesh.count=capacity;this.mesh.visible=false;parent.add(this.mesh);this.items=Array.from({length:capacity},()=>({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,total:1,size:1,spin:0,bounce:false}));this.live=0;for(let i=0;i<capacity;i++){scratch.scale.setScalar(0);scratch.updateMatrix();this.mesh.setMatrixAt(i,scratch.matrix);}}
        emit(position,n,force=2,size=.6,bounce=false,palette=null){this.armed=true;for(let i=0;i<Math.min(n,this.capacity);i++){const a=this.items[this.cursor];a.x=position.x;a.y=position.y;a.z=position.z;a.vx=(Math.random()-.5)*force;a.vy=(.3+Math.random())*force;a.vz=(Math.random()-.5)*force*.4;a.total=a.life=1.1+Math.random()*1.3;a.size=size*(.6+Math.random()*.5);a.spin=Math.random()*6;a.bounce=bounce;if(palette)this.mesh.setColorAt(this.cursor,palette[Math.floor(Math.random()*palette.length)]);this.cursor=(this.cursor+1)%this.capacity;}if(palette&&this.mesh.instanceColor)this.mesh.instanceColor.needsUpdate=true;}
        update(dt,gravity=1.5){if(!this.live&&!this.armed)return;this.armed=false;this.live=0;for(let i=0;i<this.capacity;i++){const a=this.items[i];if(a.life>0){a.life=Math.max(0,a.life-dt);a.vy-=gravity*dt;a.x+=a.vx*dt;a.y+=a.vy*dt;a.z+=a.vz*dt;if(a.bounce&&a.y< -2){a.y=-2;a.vy=Math.abs(a.vy)*.4;}this.live++;scratch.position.set(a.x,a.y,a.z);scratch.rotation.set(a.spin+time*2,time+a.spin,a.spin+time);scratch.scale.setScalar(a.size*Math.min(1,a.life/.4));}else scratch.scale.setScalar(0);scratch.updateMatrix();this.mesh.setMatrixAt(i,scratch.matrix);}this.mesh.visible=this.live>0;this.mesh.instanceMatrix.needsUpdate=true;this.armed=this.live>0;}
        clear(){this.armed=true;for(let i=0;i<this.capacity;i++)this.items[i].life=0;this.update(0);}
      }
      const confettiPalette=[0xf5c542,0xe11d1d,0x1e6fff,0xff8a00,0xffffff].map(color=>new T.Color(color));
      const eventRoot=makeRoot(),confettiMat=own(new T.MeshStandardMaterial({color:0xffffff,metalness:.6,roughness:.3,side:T.DoubleSide}));
      const bursts=new Pool(gemGeo,bright,100,eventRoot),coinBursts=new Pool(coinGeometry,[coinSide,coinCap,coinCap],120,eventRoot),confetti=new Pool(own(new T.PlaneGeometry(.07,.13)),confettiMat,280,eventRoot);
      const shocks=Array.from({length:6},()=>{const material=bright.clone();own(material);const object=mesh(ringGeo,material,eventRoot);object.visible=false;return {object,age:9,duration:.75};});let shockCursor=0;
      function shock(position){const r=shocks[shockCursor++%shocks.length];r.age=0;r.object.position.copy(position);r.object.visible=true;}
      const flights=Array.from({length:5},()=>{const mat=own(new T.MeshPhysicalMaterial({map:textures.get('garena'),clearcoat:1,roughness:.3,transparent:true}));const object=mesh(faceGeometry,mat,eventRoot);object.visible=false;return {object,age:2,from:V(),to:V(),trail:new Float32Array(24*3),line:null};});
      for(const f of flights){const geometry=own(new T.BufferGeometry());geometry.setAttribute('position',new T.BufferAttribute(f.trail,3));f.line=new T.Line(geometry,lineMaterial);f.line.frustumCulled=false;f.line.visible=false;eventRoot.add(f.line);}

      /* D1 / Core post-processing: linear HDR chain with an opaque, fog-matched background. */
      const vertex='varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}';
      composer=new M.EffectComposer(renderer);const renderPass=new M.RenderPass(scene,camera);ownedPasses.push(renderPass);
      const bloom=new M.UnrealBloomPass(new T.Vector2(metrics.width,metrics.height),.4,.3,.85);ownedPasses.push(bloom);
      const warp=new M.ShaderPass({uniforms:{tDiffuse:{value:null},amount:{value:0},phase:{value:0}},vertexShader:vertex,fragmentShader:'uniform sampler2D tDiffuse;uniform float amount;uniform float phase;varying vec2 vUv;void main(){vec2 d=vUv-.5;vec2 uv=vUv+d*length(d)*amount*3.;vec4 c=texture2D(tDiffuse,uv);c.r=texture2D(tDiffuse,uv+vec2(amount,0.)).r;c.b=texture2D(tDiffuse,uv-vec2(amount,0.)).b;gl_FragColor=c;}'});ownedPasses.push(warp);
      const grade=new M.ShaderPass({uniforms:{tDiffuse:{value:null},time:{value:0},grain:{value:.024}},vertexShader:vertex,fragmentShader:'uniform sampler2D tDiffuse;uniform float time;uniform float grain;varying vec2 vUv;void main(){vec4 c=texture2D(tDiffuse,vUv);float n=fract(sin(dot(vUv+fract(time),vec2(12.9898,78.233)))*43758.5453)-.5;float vignette=1.-.23*smoothstep(.1,.72,length(vUv-.5));c.rgb=c.rgb*vignette+n*grain*max(c.rgb,vec3(.004));gl_FragColor=c;}'});ownedPasses.push(grade);
      const output=new M.OutputPass();ownedPasses.push(output);for(const pass of ownedPasses)composer.addPass(pass);
      renderer.info.autoReset=false;

      /* D1 / Ambient instancing, glass accents, streaks and comet. */
      const ambientRoot=makeRoot(),ambientMat=metal(0xd3ae6f),glassMat=own(new T.MeshPhysicalMaterial({color:0xb2ddff,metalness:0,roughness:.08,transmission:.75,thickness:.22,ior:1.45,clearcoat:1}));
      const ambient=own(new T.InstancedMesh(gemGeo,ambientMat,60));ambient.frustumCulled=false;ambientRoot.add(ambient);
      const rings=own(new T.InstancedMesh(ringGeo,soft,12));rings.frustumCulled=false;ambientRoot.add(rings);
      const glass=own(new T.InstancedMesh(gemGeo,glassMat,4));glass.frustumCulled=false;ambientRoot.add(glass);
      const ambientSeed=Array.from({length:60},(_,i)=>({x:(i%2?-1:1)*(5.1+Math.random()*3.2),y:(Math.random()-.5)*12,z:-2-(i%3)*2,spin:Math.random()*6,size:.3+Math.random()*.8}));
      const streakMat=own(new T.MeshBasicMaterial({color:0xd6ecff,transparent:true,opacity:0,blending:T.AdditiveBlending,depthWrite:false}));
      const streaks=own(new T.InstancedMesh(own(new T.PlaneGeometry(.012,1)),streakMat,48));streaks.frustumCulled=false;ambientRoot.add(streaks);
      const cometPositions=new Float32Array(24*3),cometGeometry=own(new T.BufferGeometry());cometGeometry.setAttribute('position',new T.BufferAttribute(cometPositions,3));const cometMaterial=own(new T.PointsMaterial({color:0xffdda1,map:sparkleTexture,size:.06,opacity:.65,transparent:true,blending:T.AdditiveBlending,depthWrite:false}));const comet=new T.Points(cometGeometry,cometMaterial);comet.frustumCulled=false;ambientRoot.add(comet);
      const cursorLight=new T.PointLight(0xe6efff,0,6,2);scene.add(cursorLight);roots.push(cursorLight);
      const particleSpeed=new Float32Array(particlePositions.length);
      const curve=new T.CatmullRomCurve3([new T.Vector3(0,0,6.6),new T.Vector3(.18,.1,6.9),new T.Vector3(-.12,.04,6.7),new T.Vector3(.1,-.08,6.9),new T.Vector3(0,0,6.2)]);
      const rig={x:new Spring(),y:new Spring(),z:new Spring(6.6),roll:new Spring(0,5,.95),fov:new Spring(45,6,.9)};

      /* D0 / Director: section progress ranges are measured, never hard-coded page heights. */
      class Director {
        add(name,selector,update,enter=function(){this.group.visible=true;},exit=function(){this.group.visible=false;}){const element=document.querySelector(selector),object=makeRoot();object.visible=false;const record={name,element,group:object,start:0,end:1,rect:null,live:false,age:0,local:0,update:(dt,state,r)=>{r.age+=dt;update(dt,state,r);},enter,exit};scenes.push(record);sceneByName.set(name,record);return record;}
        measure(){const scroll=window.lenis?.scroll||0,limit=window.lenis?.limit||1;for(const r of scenes){const box=r.element.getBoundingClientRect();r.start=(box.top+scroll-metrics.height)/limit;r.end=(box.bottom+scroll)/limit;}}
        update(dt){
          for(const r of scenes)r.rect=r.element.getBoundingClientRect();
          let focus='hero',best=Infinity;
          for(const r of scenes){
            const on=r.rect.bottom>-80&&r.rect.top<metrics.height+80;
            r.local=T.MathUtils.clamp((metrics.height-r.rect.top)/(metrics.height+r.rect.height),0,1);
            if(on!==r.live){r.live=on;r.age=0;if(on)r.enter();else r.exit();}
            r.group.visible=on;
            if(!on)continue;
            try{r.update(dt,S,r);}catch(error){if(/webgl|shader|context lost/i.test(error.message||''))throw error;if(r.lastError!==error.message){console.error('[Full FX] '+r.name+':',error);r.lastError=error.message;}}
            const d=Math.abs(r.rect.top+r.rect.height*.5-metrics.height*.5);
            if(d<best){best=d;focus=r.name;}
          }
          return focus;
        }
      }
      const director=new Director();

      /* D2–D3 / Hero, foil, portal, lightning, deals and direct manipulation. */
      const hero=director.add('hero','.hero',updateHero,function(){this.group.visible=true;},()=>{hoverCard=-1;held=false;S.isDragging=false;dragCard=-1;clearTimeout(clickTimer);cards.forEach(c=>c.scale.setScalar(1));}),heroRoot=hero.group;
      const portal=mesh(own(new T.TorusGeometry(1.75,.025,8,96)),bright,heroRoot);portal.position.z=-.7;
      const arcs=own(new T.InstancedMesh(own(new T.TorusGeometry(1.86,.012,4,12,.14)),soft,28));heroRoot.add(arcs);
      for(let i=0;i<28;i++){scratch.position.set(0,0,-.65);scratch.rotation.set(0,0,i/28*Math.PI*2);scratch.scale.setScalar(1);scratch.updateMatrix();arcs.setMatrixAt(i,scratch.matrix);}
      const lightningData=new Float32Array(18*6),lightningGeo=own(new T.BufferGeometry());lightningGeo.setAttribute('position',new T.BufferAttribute(lightningData,3));const lightningMat=own(new T.LineBasicMaterial({color:new T.Color(1.4,1.8,2.5),transparent:true,opacity:0,blending:T.AdditiveBlending}));const lightning=new T.LineSegments(lightningGeo,lightningMat);heroRoot.add(lightning);let boltStamp=-1;
      const introAllowed=true;
      let introStart=null,introClock=0;const introLength=1.65;
      const deals=cards.map((card,i)=>({depth:new Spring(introAllowed?-9:0,11,.62),hover:new Spring(0,13,.7),rx:new Spring(),ry:new Spring(),spin:new Spring(introAllowed?Math.PI*3:0,10,.7),flip:new Spring(),landed:!introAllowed,index:i}));
      const backTexture=canvasTexture(1024,1448,(ctx,w,h)=>{ctx.fillStyle='#120d14';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#d9b77144';for(let i=-h;i<w;i+=70){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i+h,h);ctx.stroke();}ctx.fillStyle='#f5dcab';ctx.textAlign='center';ctx.font='80px Anton';ctx.fillText('MINHTHUAN',w/2,h*.47);ctx.fillText('GAMECARD',w/2,h*.55);ctx.font='26px sans-serif';ctx.fillText('YOUR NEXT LEVEL',w/2,h*.7);});
      const foilUniform={value:0};
      const savedMaterials=cards.map(card=>({face:card.userData.faceMaterial,body:card.userData.material,back:card.children[2].material}));
      const desktopFaces=[],desktopBodies=[],desktopBacks=[];
      cards.forEach(card=>{const face=own(card.userData.faceMaterial.clone());desktopFaces.push(face);desktopBodies.push(own(card.userData.material.clone()));face.iridescence=1;face.iridescenceIOR=1.35;face.sheen=.35;face.sheenColor=new T.Color(0xffeacc);face.onBeforeCompile=shader=>{shader.uniforms.fxTime=foilUniform;shader.fragmentShader='uniform float fxTime;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\nfloat sweep=pow(max(0.0,1.0-abs(vMapUv.x+vMapUv.y*.45-mod(fxTime*.38,1.7))/.075),4.0);totalEmissiveRadiance+=vec3(.3,.38,.5)*sweep;');};const foilCompile=face.onBeforeCompile;face.onBeforeCompile=shader=>{foilCompile(shader);shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>','outgoingLight=min(outgoingLight,vec3(.78));\n#include <opaque_fragment>');};face.customProgramCacheKey=()=> 'gamecard-foil-v2';face.needsUpdate=true;const back=own(new T.MeshPhysicalMaterial({map:backTexture,metalness:.35,roughness:.3,clearcoat:1}));desktopBacks.push(back);const lines=new T.LineSegments(own(new T.EdgesGeometry(cardGeometry,22)),own(new T.LineBasicMaterial({color:0xffdda8,transparent:true,opacity:.3})));card.add(lines);card.userData.rim=lines;lines.visible=false;});
      const slot=mesh(own(new T.TorusGeometry(.6,.025,6,48)),bright,heroRoot);slot.scale.set(1.8,.16,1);slot.position.set(0,1.5,.3);slot.visible=introAllowed;
      const stack=own(new T.InstancedMesh(coinGeometry,[coinSide,coinCap,coinCap],30));heroRoot.add(stack);stack.visible=introAllowed;
      const coinTrailData=new Float32Array(10*10*3),coinTrailGeo=own(new T.BufferGeometry());coinTrailGeo.setAttribute('position',new T.BufferAttribute(coinTrailData,3));const coinTrails=new T.Points(coinTrailGeo,own(new T.PointsMaterial({color:0xf5c542,size:.028,map:sparkleTexture,transparent:true,opacity:.25,blending:T.AdditiveBlending,depthWrite:false})));coinTrails.frustumCulled=false;heroRoot.add(coinTrails);
      function updateHero(dt){cards[1].visible=cards[2].visible=true;domToWorld('hero-art',0,cardsGroup.position);const art=anchors.get('hero-art').rect;cardsGroup.scale.setScalar(Math.min(art.width/3.65,art.height/3.6)*pxRatio(cardsGroup.position));heroRoot.position.copy(cardsGroup.position);heroRoot.scale.copy(cardsGroup.scale);portal.rotation.z=time*.12;arcs.rotation.z=-time*.17;portal.scale.setScalar(1+Math.sin(time*Math.PI/2)*.025);foilUniform.value=time;
        if(introStart===null){introStart=performance.now();hud.intro='playing';window.dispatchEvent(new CustomEvent('desktop-intro-start'));}
        introClock+=dt;const introT=Math.min(1,introClock/introLength);
        if(slot.visible){for(let i=0;i<30;i++){const x=(i%6-2.5)*.22,y=(Math.floor(i/6)-2)*.25;const k=T.MathUtils.smoothstep(introT,i*.012,.65+i*.009);scratch.position.set(x, T.MathUtils.lerp(3.5+i*.12,y,k),.35);scratch.rotation.set(Math.PI/2,0,introT*3);scratch.scale.setScalar(.42);scratch.updateMatrix();stack.setMatrixAt(i,scratch.matrix);}stack.instanceMatrix.needsUpdate=true;slot.visible=stack.visible=introT<.85;}
        for(let i=0;i<cards.length;i++){const d=deals[i],card=cards[i];d.depth.target=introClock>i*.12?0:-9;d.spin.target=0;d.hover.target=hoverCard===i?1:0;const lift=moving?d.hover.step(dt):0;if(moving){card.position.z+=d.depth.step(dt);card.rotation.z+=d.spin.step(dt);card.rotation.x+=d.rx.step(dt);card.rotation.y+=d.ry.step(dt)+d.flip.step(dt);}card.position.y+=lift*.16;card.scale.setScalar(1+lift*.06);card.userData.rim.material.opacity=.2+lift*.65;if(moving&&!d.landed&&Math.abs(d.depth.value)<.035){d.landed=true;cardsGroup.updateMatrixWorld(true);card.getWorldPosition(v0);bursts.emit(v0,12,1.2,.23);shock(v0);}}
        if(introT>=1&&!hero.introDone){hero.introDone=true;hud.intro='complete';window.dispatchEvent(new CustomEvent('desktop-intro-ready'));}
        const pulse=time%4.4,stamp=Math.floor(time*10);lightningMat.opacity=pulse<.28&&moving?.55:0;if(lightningMat.opacity&&stamp!==boltStamp){boltStamp=stamp;for(let i=0;i<18;i++){const a=i*6,x=-1.9+i*.21;lightningData[a]=x;lightningData[a+1]=Math.sin(i*1.7+stamp)*.24;lightningData[a+2]=-.6;lightningData[a+3]=x+.21;lightningData[a+4]=Math.sin((i+1)*1.7+stamp)*.24;lightningData[a+5]=-.6;}lightningGeo.attributes.position.needsUpdate=true;}
        for(let i=0;i<10;i++)for(let j=0;j<10;j++){const k=(i*10+j)*3,a=i/10*Math.PI*2+time*.17-j*.018;coinTrailData[k]=Math.cos(a)*2.15;coinTrailData[k+1]=Math.sin(a)*1.4;coinTrailData[k+2]=.2-j*.012;}coinTrailGeo.attributes.position.needsUpdate=true;
      }

      /* D4 / Möbius-style ribbon. DOM footprint remains, fallback text only is hidden. */
      const ribbon=director.add('ribbon','.marquee',updateRibbon),ribbonTexture=canvasTexture(2048,256,(ctx,w,h)=>{ctx.fillStyle='#e11d1d';ctx.fillRect(0,0,w,h);ctx.fillStyle='#fff7e9';ctx.font='74px Anton';ctx.textBaseline='middle';ctx.fillText('NẠP GAME RẺ HƠN  ·  GARENA  ·  ZING  ·  VCOIN  ·',35,h/2);});ribbonTexture.wrapS=T.RepeatWrapping;
      const ribbonGeometry=own(new T.PlaneGeometry(7,1.05,80,5));const ribbonBase=new Float32Array(ribbonGeometry.attributes.position.array);const ribbonMaterial=own(new T.MeshStandardMaterial({map:ribbonTexture,side:T.DoubleSide,metalness:.3,roughness:.4}));const band=mesh(ribbonGeometry,ribbonMaterial,ribbon.group);
      function updateRibbon(){domToWorld('ribbon',0,ribbon.group.position);const rect=anchors.get('ribbon').rect;ribbon.group.scale.setScalar(rect.width*pxRatio(ribbon.group.position)/7);ribbon.group.rotation.z=-.065;const a=ribbonGeometry.attributes.position.array;for(let i=0;i<a.length;i+=3){const x=ribbonBase[i],y=ribbonBase[i+1],angle=x*.35+Math.sin(time*.45)*.12+Math.min(Math.abs(S.velocity),35)*.002;a[i]=x;a[i+1]=y*Math.cos(angle);a[i+2]=y*Math.sin(angle)+Math.sin(x*.7+time*.2)*.08;}ribbonGeometry.attributes.position.needsUpdate=true;ribbonTexture.offset.x=moving?time*.05+S.progress*.7:0;}

      /* D5 / Four extruded, DOM-anchored icons; keyboard focus equals pointer hover. */
      const benefits=director.add('benefits','.benefits',updateBenefits,()=>{for(const i of icons){i.pop.snap(0);i.pop.target=0;}},()=>{for(const i of icons)i.hover=false;}),icons=[];
      const tagShape=new T.Shape();tagShape.moveTo(-.4,-.35);tagShape.lineTo(.18,-.35);tagShape.lineTo(.47,0);tagShape.lineTo(.18,.35);tagShape.lineTo(-.4,.35);tagShape.closePath();const hole=new T.Path();hole.absarc(.26,0,.06,0,Math.PI*2,true);tagShape.holes.push(hole);
      const discountGeo=own(new T.ExtrudeGeometry(tagShape,{depth:.09,bevelEnabled:true,bevelSegments:2,bevelSize:.015,bevelThickness:.012,steps:1}));
      for(let i=0;i<4;i++){const g=new T.Group();benefits.group.add(g);const icon={group:g,pop:new Spring(1,12,.58),spin:new Spring(0,9,.7),hover:false,index:i,check:null};icons.push(icon);if(i===0){mesh(discountGeo,red,g);text3D('%',.43,gold,g).position.set(-.07,-.17,.13);}else if(i===1){mesh(extrude([[-.05,.55],[-.39,-.05],[-.08,-.05],[-.19,-.52],[.4,.15],[.08,.15]]),bright,g);const arc=mesh(ringGeo,soft,g);arc.scale.setScalar(.56);}else if(i===2){mesh(extrude([[-.4,.4],[0,.53],[.4,.4],[.3,-.14],[0,-.5],[-.3,-.14]]),blue,g);icon.check=mesh(tube([[-.2,0,.15],[-.04,-.17,.15],[.24,.22,.15]],.04),bright,g);}else{const bubble=mesh(cardGeometry,green,g);bubble.scale.set(.48,.27,.7);mesh(extrude([[-.3,-.15],[-.26,-.4],[-.02,-.15]]),green,g);for(let j=0;j<3;j++){const dot=mesh(own(new T.SphereGeometry(.055,8,6)),white,g);dot.position.set((j-1)*.2,0,.14);dot.userData.dot=j;}const ring=mesh(ringGeo,soft,g);ring.scale.setScalar(.55);text3D('24/7',.17,white,g).position.set(0,-.26,.14);}
        const el=anchors.get(`benefit-${i+1}`).element;const enter=()=>{if(!active||!moving)return;icon.hover=true;icon.spin.target+=Math.PI*2;domToWorld(`benefit-${i+1}`,0,v0,.06,.2);bursts.emit(v0,8,.6,.15);};const leave=()=>icon.hover=false;listen(el,'pointerenter',enter);listen(el,'pointerleave',leave);listen(el,'focus',enter);listen(el,'blur',leave);
      }
      function updateBenefits(dt){for(let i=0;i<icons.length;i++){const icon=icons[i],anchor=anchors.get(`benefit-${i+1}`),rect=anchor.rect;const svg=anchor.element.querySelector('svg').getBoundingClientRect();screenToWorld(svg.left+svg.width/2,svg.top+svg.height/2,0,icon.group.position);icon.pop.target=benefits.age>=i*.09?1:0;const pop=moving?icon.pop.step(dt):1;icon.group.scale.setScalar(40*pxRatio(icon.group.position)*pop);icon.group.rotation.set(icon.hover?screenPointer.y*.1:0,(moving?icon.spin.step(dt)+Math.sin(time*.4+i)*.15:0),-(1-pop)*Math.PI/2);if(icon.check)icon.check.geometry.setDrawRange(0,Math.floor(icon.check.geometry.index.count*Math.min(1,benefits.age*1.8)));if(i===3&&moving)for(const child of icon.group.children)if(child.userData.dot!==undefined)child.position.y=Math.sin(time*4+child.userData.dot)*.035;}}

      /* D6 / Brand stages, denomination crossfade, savings column and order chest. */
      const pricing=director.add('pricing','.pricing',updatePricing,function(){this.group.visible=true;},()=>{stageParticles.clear();S.hoveredRow=null;rowStamp='';faceMix.snap(0);savingsSpring.snap(0);if(shownLabel)shownLabel.visible=false;}),stage=pricing.group;
      const gridMat=own(soft.clone());
      const grid=own(new T.InstancedMesh(own(new T.TorusGeometry(.23,.008,3,6)),gridMat,35));stage.add(grid);for(let i=0;i<35;i++){scratch.position.set((i%7-3)*.42,-1.2,Math.floor(i/7)*.34-1);scratch.rotation.set(Math.PI/2,0,0);scratch.scale.setScalar(1);scratch.updateMatrix();grid.setMatrixAt(i,scratch.matrix);}
      const stageShards=own(new T.InstancedMesh(gemGeo,blue,12));stage.add(stageShards);const stageCoins=own(new T.InstancedMesh(coinGeometry,[coinSide,coinCap,coinCap],18));stage.add(stageCoins);
      const rays=own(new T.InstancedMesh(own(new T.PlaneGeometry(.015,2.5)),soft,8));stage.add(rays);
      const stageParticles=new Pool(sparkGeo,bright,72,stage);let emberAt=0;
      const wipeMaterial=own(new T.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{t:{value:2},color:{value:new T.Color(colors.garena)}},vertexShader:vertex,fragmentShader:'uniform float t;uniform vec3 color;varying vec2 vUv;void main(){float r=length(vUv-.5)*2.;float a=(1.-smoothstep(.025,.15,abs(r-t)))*(1.-smoothstep(.8,1.2,t));gl_FragColor=vec4(color*1.4,a*.6);}'}));const wipe=mesh(own(new T.PlaneGeometry(4.4,4.4)),wipeMaterial,stage);wipe.position.z=.6;
      const savingsSpring=new Spring(0,11,.6),stackCoins=own(new T.InstancedMesh(coinGeometry,[coinSide,coinCap,coinCap],20));stackCoins.frustumCulled=false;stage.add(stackCoins);
      const priceLabels=new Map();for(const label of ['-1K','-2K','-4K','-5K','-8K','-10K','-12K','-15K','-20K','-30K','-40K']){const object=text3D(label,.34,bright,stage);object.visible=false;priceLabels.set(label,object);}
      let shownLabel=null,rowStamp='',faceMix=new Spring(0,10,.9),faceOverlay=null,denominationTextures=new Map();
      // Build once: 20 small, mipmapped denomination overlays, never redraw textures in a frame.
      for(const brand of window.gamecardApp.cards)for(const [face,sale] of brand.items){const tex=canvasTexture(512,256,(ctx,w,h)=>{ctx.fillStyle='#'+colors[brand.id].toString(16).padStart(6,'0');ctx.fillRect(0,0,w,h);ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font='600 65px "Be Vietnam Pro"';ctx.fillText(new Intl.NumberFormat('vi-VN').format(face)+'đ',w/2,100);ctx.font='24px "Be Vietnam Pro"';ctx.fillText('Giá bán '+new Intl.NumberFormat('vi-VN').format(sale)+'đ',w/2,172);});denominationTextures.set(brand.id+face,tex);}
      const overlayMaterial=own(new T.MeshBasicMaterial({map:denominationTextures.values().next().value,transparent:true,opacity:0,depthWrite:false}));faceOverlay=mesh(own(new T.PlaneGeometry(1.4,.63)),overlayMaterial,cards[0]);faceOverlay.position.set(0,-.4,.065);
      const bestRows=new Map();for(const id of ['garena','zing','vcoin'])bestRows.set(id,document.querySelector('#panel-'+id+' tr[data-best="true"]'));
      const starShape=[];for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2,r=i%2?.12:.25;starShape.push([Math.cos(a)*r,Math.sin(a)*r]);}const star=mesh(extrude(starShape,.045),gold,stage);
      const chest=new T.Group();eventRoot.add(chest);chest.visible=false;const chestBody=mesh(cardGeometry,metal(0x4d2414),chest);chestBody.scale.set(.29,.18,4.5);chestBody.rotation.x=Math.PI/2;
      const chestLid=new T.Group();chestLid.position.set(0,.2,-.17);chest.add(chestLid);const lid=mesh(unitBox,gold,chestLid);lid.scale.set(.54,.075,.36);lid.position.z=.15;for(const x of [-.17,.17]){const band=mesh(unitBox,gold,chest);band.scale.set(.045,.34,.4);band.position.set(x,.03,0);}const lidSpring=new Spring(0,12,.62);let chestLife=0;
      function onRow(event){if(!active||!event.detail)return;const d=event.detail,key=d.id+d.face;if(key===rowStamp)return;rowStamp=key;S.hoveredRow=d;savingsSpring.target=(d.saved/d.face)*55;shownLabel&&(shownLabel.visible=false);shownLabel=priceLabels.get('-'+d.saved/1000+'K')||null;if(shownLabel)shownLabel.visible=d.saved>0;overlayMaterial.map=denominationTextures.get(key);faceMix.snap(0);faceMix.target=1;requestStaticFX();}
      listen(window,'rowhover',onRow);
      listen(window,'tabchange',event=>{rowStamp='';S.hoveredRow=null;overlayMaterial.opacity=0;faceMix.snap(0);savingsSpring.target=0;wipeMaterial.uniforms.t.value=0;wipeMaterial.uniforms.color.value.set(colors[S.activeBrand]);themeKey='';if(shownLabel)shownLabel.visible=false;});
      function updatePricing(dt){const r=pricing.rect,order=innerWidth<1100?document.querySelector('#panel-'+S.activeBrand+' .catalog-brand').getBoundingClientRect():anchors.get('order-panel').rect;const x=order.left+order.width*.5;const y=order.top+115;
        screenToWorld(x,y,0,stage.position);screenToWorld(x+35,y,0,cardsGroup.position);cardsGroup.rotation.set(0,0,0);cards[0].position.set(0,0,.38);cards[0].rotation.z=0;cardsGroup.scale.setScalar(Math.min(1,180*pxRatio(cardsGroup.position)/2.4));cards[1].visible=cards[2].visible=false;
        if(!S.hoveredRow||S.hoveredRow.id!==S.activeBrand){const row=document.querySelector('#panel-'+S.activeBrand+' tr[data-face="100000"]')||bestRows.get(S.activeBrand);if(row)onRow({detail:{id:S.activeBrand,face:+row.dataset.face,sale:+row.dataset.sale,saved:+row.dataset.saved,row}});}
        stage.scale.setScalar(Math.min(1,200*pxRatio(stage.position)/4.4));stage.updateMatrixWorld(true);grid.visible=S.activeBrand==='garena';stageShards.visible=rays.visible=S.activeBrand==='zing';stageCoins.visible=S.activeBrand==='vcoin';grid.material.color.set(colors[S.activeBrand]);grid.position.y=Math.sin(time*1.8)*.06;
        for(let i=0;i<18;i++){const a=i/12*Math.PI*2+time*.35;scratch.position.set(Math.cos(a)*1.15,Math.sin(a)*.7,Math.sin(a)*.5-.3);scratch.rotation.set(time*.3+i,time*.2+i,0);scratch.scale.setScalar(.6);scratch.updateMatrix();if(i<12)stageShards.setMatrixAt(i,scratch.matrix);scratch.position.set((i%3-1)*.55,1.6-((time*.7+i*.19)%3),-.7);scratch.rotation.x=Math.PI/2;scratch.scale.setScalar(.32);scratch.updateMatrix();stageCoins.setMatrixAt(i,scratch.matrix);if(i<8){scratch.position.set((i-3.5)*.23,0,-.8);scratch.rotation.set(0,0,.16);scratch.scale.set(1,1,1);scratch.updateMatrix();rays.setMatrixAt(i,scratch.matrix);}}
        stageShards.instanceMatrix.needsUpdate=stageCoins.instanceMatrix.needsUpdate=rays.instanceMatrix.needsUpdate=true;
        if(moving&&time>emberAt){emberAt=time+.15;v0.set((Math.random()-.5)*2,-1.1,.1);stageParticles.emit(v0,2,.3,.4);}stageParticles.update(dt,-.13);
        wipeMaterial.uniforms.t.value=moving?wipeMaterial.uniforms.t.value+dt*1.4:2;overlayMaterial.opacity=moving?faceMix.step(dt):faceMix.target;const height=moving?savingsSpring.step(dt):savingsSpring.target;stackCoins.count=Math.max(0,Math.min(20,Math.ceil(height*6)));for(let i=0;i<stackCoins.count;i++){scratch.position.set(-1.65,-.8+i*.07,.5);scratch.rotation.set(Math.PI/2,0,0);scratch.scale.setScalar(.65);scratch.updateMatrix();stackCoins.setMatrixAt(i,scratch.matrix);}stackCoins.instanceMatrix.needsUpdate=true;if(shownLabel)shownLabel.position.set(-1.65,-.45+stackCoins.count*.07,.55);
        const best=bestRows.get(S.activeBrand);if(best){const b=best.getBoundingClientRect();star.visible=b.top>0&&b.bottom<metrics.height;if(star.visible){screenToWorld(b.left-16,b.top+b.height*.5,0,v0);const starSize=65*pxRatio(v0)/stage.scale.x;stage.worldToLocal(v0);star.position.copy(v0);star.scale.setScalar(starSize);star.rotation.y=time;}}else star.visible=false;
      }
      function flightTarget(out){const el=innerWidth<1100?document.querySelector('#cart-toggle'):anchors.get('order-panel').element;const r=el.getBoundingClientRect();return screenToWorld(r.left+r.width*.5,r.top+Math.min(105,r.height*.5),.4,out);}
      listen(window,'addtocart',event=>{S.cartCount=event.detail.count;if(!active||!moving)return;const d=event.detail,f=flights[flightCursor++%flights.length],r=d.origin?.getBoundingClientRect();if(!r)return;screenToWorld(r.right-20,r.top+r.height*.5,.4,f.from);flightTarget(f.to);f.age=0;f.object.visible=f.line.visible=true;f.object.material.map=textures.get(d.id);f.object.scale.setScalar(.18);});

      /* D7 / Three-station timeline; camera rail is scrubbed without changing layout height. */
      let stationProgress=0;const steps=director.add('steps','.how',updateSteps,function(){this.group.visible=true;},()=>{for(const el of stepNodes){el.style.removeProperty('--station-emphasis');delete el._e;}}),stations=[];
      const routeGeometry=own(new T.BufferGeometry()),routeData=new Float32Array(61*3);routeGeometry.setAttribute('position',new T.BufferAttribute(routeData,3));const route=new T.Line(routeGeometry,lineMaterial);route.frustumCulled=false;steps.group.add(route);
      const stepRail=new T.CatmullRomCurve3([new T.Vector3(-.15,.03,0),new T.Vector3(0,.08,-.12),new T.Vector3(.15,.02,0)]);
      const phoneTexture=canvasTexture(512,800,(ctx,w,h)=>{ctx.fillStyle='#08291d';ctx.fillRect(0,0,w,h);ctx.fillStyle='#92ffce';ctx.textAlign='center';ctx.font='bold 48px sans-serif';ctx.fillText('CHUYEN TIEN',w/2,340);ctx.fillText('OK',w/2,410);});
      for(let i=0;i<3;i++){const g=new T.Group();steps.group.add(g);stations.push(g);if(i===0){for(let j=0;j<3;j++){const material=own(new T.MeshBasicMaterial({map:textures.get(['garena','zing','vcoin'][j]),side:T.DoubleSide}));const card=mesh(faceGeometry,material,g);card.frustumCulled=false;card.scale.setScalar(.36);card.userData.carousel=j;}}else{const phone=mesh(cardGeometry,metal(0x20232b),g);phone.scale.set(.32,.36,2);const screen=mesh(faceGeometry,own(new T.MeshBasicMaterial({map:phoneTexture})),g);screen.scale.set(.28,.32,1);screen.position.z=.1;if(i===1){const bank=mesh(cardGeometry,green,g);bank.scale.set(.3,.15,1);bank.rotation.z=-.15;bank.position.set(-.85,.22,0);}else{text3D('XXXX-XXXX-XXXX',.07,white,g).position.set(0,0,.12);}}}
      const transferCoins=own(new T.InstancedMesh(coinGeometry,[coinSide,coinCap,coinCap],16));stations[1].add(transferCoins);
      const codeTexture=canvasTexture(1024,512,(ctx,w,h)=>{ctx.fillStyle='#083528';ctx.fillRect(0,0,w,h);ctx.fillStyle='#baffdd';ctx.textAlign='center';ctx.font='bold 53px monospace';ctx.fillText('XXXX-XXXX-XXXX',w/2,h/2);});const delivered=mesh(faceGeometry,own(new T.MeshStandardMaterial({map:codeTexture,metalness:.4,roughness:.3})),stations[2]);delivered.scale.set(.38,.19,1);delivered.position.z=.2;
      const glyphs=[];for(let i=0;i<12;i++){const glyph=text3D(i%3?'X':'-',.09,bright,stations[2]);glyphs.push(glyph);}
      const stepNodes=Array.from(document.querySelectorAll('.how-step'));
      stepTrigger=window.ScrollTrigger?.create({trigger:steps.element,start:'top bottom',end:'bottom top',scrub:.5,onUpdate:self=>{stationProgress=self.progress;}});
      function updateSteps(){const p=stationProgress||steps.local;stepRail.getPoint(p,v3);for(let i=0;i<3;i++){const a=anchors.get(`step-${i+1}`),r=a.rect;screenToWorld(r.left+r.width*.68,r.top+59,0,stations[i].position);stations[i].scale.setScalar(Math.min(90,r.width*.3)*pxRatio(stations[i].position));stations[i].rotation.y=(p*3-i-1)*.16+v3.x;const selected=Math.max(0,1-Math.abs(p*3-i-.5));const e=(.82+selected*.18).toFixed(2);if(stepNodes[i]._e!==e){stepNodes[i]._e=e;stepNodes[i].style.setProperty('--station-emphasis',e);}if(i===0){for(const card of stations[0].children){const angle=card.userData.carousel*Math.PI*2/3+time*.45;card.position.set(Math.cos(angle)*.45,0,Math.sin(angle)*.3);card.rotation.y=-angle*.2;}}}
        for(let i=0;i<16;i++){const t=(time*.45+i/16)%1;scratch.position.set(-.8*(1-t),.2+Math.sin(t*Math.PI)*.4,.1);scratch.rotation.set(Math.PI/2,time+i,0);scratch.scale.setScalar(.18);scratch.updateMatrix();transferCoins.setMatrixAt(i,scratch.matrix);}transferCoins.instanceMatrix.needsUpdate=true;delivered.rotation.y=Math.PI*2*T.MathUtils.smoothstep(p,.66,.9);for(let i=0;i<glyphs.length;i++){const t=T.MathUtils.smoothstep(p,.6+i*.006,.86+i*.006);glyphs[i].position.set((i-5.5)*.037*t,Math.sin(time+i)*(1-t)*.45,.15);glyphs[i].scale.setScalar(1-t);}
        for(let i=0;i<61;i++){const t=i/60,from=stations[t<.5?0:1].position,to=stations[t<.5?1:2].position,k=t<.5?t*2:(t-.5)*2;v0.copy(from).lerp(to,k);routeData[i*3]=v0.x;routeData[i*3+1]=v0.y-.4+Math.sin(k*Math.PI)*.1;routeData[i*3+2]=-.2;}routeGeometry.attributes.position.needsUpdate=true;routeGeometry.setDrawRange(0,Math.max(2,Math.floor(p*61)));}

      /* D8 / Payment miniatures and success check: generic labels, actual DOM numbers. */
      const payment=director.add('payment','.payment',updatePayment,function(){this.group.visible=true;},()=>{for(const obj of paymentObjects){obj.age=5;obj.pulse.snap(1);obj.check.visible=false;}}),paymentObjects=[];
      for(const id of ['momo','vcb']){const g=new T.Group();payment.group.add(g);const el=anchors.get('payment-'+id).element,number=el.querySelector('.payment-card__number').textContent;const map=canvasTexture(1024,512,(ctx,w,h)=>{ctx.fillStyle=id==='momo'?'#92204f':'#154b36';ctx.fillRect(0,0,w,h);ctx.fillStyle='#ffffff';ctx.font='bold 80px sans-serif';ctx.fillText(id==='momo'?'MOMO':'VIETCOMBANK',65,140);ctx.font='65px monospace';ctx.shadowColor='#000';ctx.shadowOffsetY=3;ctx.fillText(number,65,310);});const card=mesh(cardGeometry,id==='momo'?pink:green,g);card.rotation.z=Math.PI/2;card.scale.set(.35,.44,1);const face=mesh(own(new T.PlaneGeometry(1.04,.56)),own(new T.MeshPhysicalMaterial({map,clearcoat:1,metalness:.35,roughness:.3})),g);face.position.z=.06;const check=mesh(tube([[-.17,0,0],[-.04,-.1,0],[.19,.16,0]],.03),green,g);check.position.set(0,.45,.2);check.visible=false;paymentObjects.push({id,group:g,check,pulse:new Spring(1,12,.6),age:5});}
      listen(window,'copysuccess',event=>{if(!active||!moving)return;const obj=paymentObjects.find(p=>p.id===event.detail.id);if(!obj)return;obj.age=0;obj.pulse.velocity=5;obj.check.visible=true;obj.group.getWorldPosition(v0);shock(v0);bursts.emit(v0,22,1,.25);});
      function updatePayment(dt){for(const obj of paymentObjects){const a=anchors.get('payment-'+obj.id),r=a.rect;screenToWorld(r.right-75,r.top+80,0,obj.group.position);obj.group.scale.setScalar(95*pxRatio(obj.group.position)*(moving?obj.pulse.step(dt):1));obj.group.rotation.set(moving?screenPointer.y*.08:0,moving?Math.sin(time*.5)*.12+screenPointer.x*.1:0,-.1);obj.age+=dt;obj.check.visible=obj.age<1.8;obj.check.geometry.setDrawRange(0,Math.floor(obj.check.geometry.index.count*Math.min(1,obj.age*3)));obj.check.scale.setScalar(Math.min(1,(1.8-obj.age)*3));}}

      /* D9 / Calm reading region; Director still gives it a real group and theme. */
      function updateReading(){}
      const faq=director.add('faq','.faq',updateReading),reading=director.add('reading','.why',updateReading);

      /* D10 / Finale: ASCII title, pooled 400-piece celebration, repeat only on CTA intent. */
      const closing=director.add('closing','.closing',updateClosing),save=text3D('SAVE',1,gold,closing.group);save.position.y=-.3;const finaleRing=mesh(own(new T.TorusGeometry(2.1,.025,6,72)),bright,closing.group);finaleRing.position.z=-.4;let finaleFired=false,ctaStamp=-10;
      function celebrate(count=400){if(!active||!moving)return;closing.group.getWorldPosition(v0);coinBursts.emit(v0,Math.floor(count*.3),3,.45,true);confetti.emit(v0,Math.ceil(count*.7),3.4,.8,true,confettiPalette);shock(v0);}
      const closingCTA=document.querySelector('.closing__actions .button');const finaleIntent=()=>{if(time-ctaStamp>1.4){ctaStamp=time;celebrate(60);}};listen(closingCTA,'pointerenter',finaleIntent);listen(closingCTA,'focus',finaleIntent);
      function updateClosing(){const r=closing.rect;screenToWorld(metrics.width*.78,r.top+r.height*.2,0,closing.group.position);closing.group.scale.setScalar(Math.min(.78,metrics.width*.25*pxRatio(closing.group.position)/3.2));save.rotation.y=Math.sin(time*.35)*.18;finaleRing.rotation.z=time*.17;if(!finaleFired&&(metrics.height-r.top)/Math.min(r.height,metrics.height)>=.4){finaleFired=true;celebrate();}cardsGroup.position.copy(closing.group.position);cardsGroup.position.y-=.2;cardsGroup.scale.setScalar(closing.group.scale.x*.43);for(let i=0;i<cards.length;i++){cards[i].visible=true;cards[i].position.set(Math.cos(time*.25+i*2.094)*3,-.2,Math.sin(time*.25+i*2.094)*.65);cards[i].rotation.y=-Math.sin(time*.25+i*2.094)*.3;}}
      listen(document.querySelector('.back-top'),'click',()=>{if(active&&moving)warpBoost=1;});

      /* D1 / Window input never owns UI clicks; raycasting is event-driven, not per frame. */
      function blocked(event){return !!event.target.closest?.(interactive)||event.pointerType==='touch';}
      function pick(event){syncCamera();cardsGroup.updateMatrixWorld(true);hits.length=0;screenPointer.set(event.clientX/metrics.width*2-1,1-event.clientY/metrics.height*2);raycaster.setFromCamera(screenPointer,camera);raycaster.intersectObjects(cardsGroup.children,true,hits);if(!hits.length)return -1;let node=hits[0].object;while(node.parent&&node.parent!==cardsGroup)node=node.parent;return cards.indexOf(node);}
      listen(window,'pointermove',event=>{if(!active||!moving||event.pointerType==='touch')return;pointerValid=!blocked(event);screenPointer.set(event.clientX/metrics.width*2-1,1-event.clientY/metrics.height*2);if(S.isDragging){const d=deals[dragCard];d.ry.target+=(event.clientX-lastX)*.007;d.rx.target+=(event.clientY-lastY)*.005;d.ry.velocity=(event.clientX-lastX)*.06;lastX=event.clientX;lastY=event.clientY;}else hoverCard=pointerValid&&hero.live?pick(event):-1;},{passive:true});
      listen(window,'pointerdown',event=>{if(!active||!moving||blocked(event)||event.button!==0)return;downX=lastX=event.clientX;downY=lastY=event.clientY;dragCard=hero.live?pick(event):-1;S.isDragging=dragCard>=0;held=dragCard<0;},{passive:true});
      listen(window,'pointerup',event=>{if(!active)return;const dragged=Math.hypot(event.clientX-downX,event.clientY-downY)>6;if(S.isDragging){const d=deals[dragCard];d.rx.target=d.ry.target=0;if(!dragged){clearTimeout(clickTimer);const selected=dragCard;clickTimer=setTimeout(()=>{deals[selected].flip.target+=Math.PI;},230);}}if(held&&moving){shock(pointerWorld);bursts.emit(pointerWorld,18,2,.18);for(let i=0;i<particlePositions.length;i+=3){const dx=particlePositions[i]-pointerWorld.x,dy=particlePositions[i+1]-pointerWorld.y,dist=Math.max(.1,Math.hypot(dx,dy));if(dist<1.4){particleSpeed[i]+=dx/dist*2;particleSpeed[i+1]+=dy/dist*2;}}}held=false;S.isDragging=false;dragCard=-1;},{passive:true});
      listen(window,'pointercancel',()=>{held=false;S.isDragging=false;dragCard=-1;});
      listen(window,'dblclick',event=>{if(!active||!moving||blocked(event)||!hero.live)return;const i=pick(event);if(i>=0){clearTimeout(clickTimer);cards[i].getWorldPosition(v0);coinBursts.emit(v0,22,2,.35);shock(v0);}});
      listen(window,'blur',()=>{held=false;S.isDragging=false;pointerValid=false;hoverCard=-1;});
      function requestStaticFX(){C.requestStatic();}

      /* D11 / Degrade one feature at a time; recover only after ten stable seconds. */
      const governor=new PerformanceGovernor(applyGovernor);
      function applyGovernor(level){
        if(disposedFX)return;governorLevel=governor.level=0;bloom.enabled=true;glass.visible=true;warp.enabled=true;ambient.count=60;
        const dpr=Math.min(devicePixelRatio,innerWidth<1100?2:1.5);renderer.setPixelRatio(dpr);renderer.setSize(metrics.width,metrics.height,false);composer.setPixelRatio(dpr);composer.setSize(metrics.width,metrics.height);
        particleGeometry.setDrawRange(0,700);particles.visible=true;comet.visible=true;S.tier=baseTier;hud.governor='0';hud.tier='HIGH';hud.particles='700';canvas.dataset.dpr=String(dpr);
        hud.fxFeatures='bloom:1 glass:1 warp:1 ambient:60 particles:700 comet:1';
      }

      function setTheme(name){const key=name==='pricing'?S.activeBrand:name;if(key===themeKey)return;themeKey=key;const value=name==='pricing'?colors[S.activeBrand]:name==='steps'?0x49dc9c:0xf5c542;colorTemp.set(value);themeTween?.kill();const dest={r:colorTemp.r,g:colorTemp.g,b:colorTemp.b};if(moving&&window.gsap)themeTween=window.gsap.to(themeColor,{...dest,duration:1.2,ease:'power2.inOut'});else themeColor.copy(colorTemp);}
      const fog=new T.FogExp2(0x151014,.025);scene.fog=fog;
      function updateGlobals(dt){const calm=false,speed=Math.min(1,Math.abs(S.velocity)/55);curve.getPoint(T.MathUtils.clamp(S.progress,0,1),cameraPoint);if(theme==='steps'){stepRail.getPoint(T.MathUtils.clamp(stationProgress,0,1),v3);cameraPoint.add(v3);}rig.x.target=cameraPoint.x;rig.y.target=cameraPoint.y;rig.z.target=cameraPoint.z;rig.roll.target=moving&&!calm?S.direction*speed*.009:0;rig.fov.target=moving?45+speed*7:45;camera.position.set(rig.x.step(dt),rig.y.step(dt),rig.z.step(dt));camera.rotation.z=rig.roll.step(dt);if(moving&&!calm){camera.position.x+=Math.sin(time*31)*speed*.003;camera.position.y+=Math.cos(time*27)*speed*.002;}camera.fov=rig.fov.step(dt);cameraDirty=true;syncCamera();screenToWorld((screenPointer.x+1)*metrics.width/2,(1-screenPointer.y)*metrics.height/2,.25,pointerWorld);
        fog.color.copy(themeColor).multiplyScalar(.0004).add(backgroundColor);renderer.setClearColor(fog.color,1);glowMaterial.color.copy(themeColor);brandLight.color.copy(themeColor);ambientMat.color.copy(themeColor);for(let i=0;i<lights.length;i++){lights[i].color.copy(themeColor);lights[i].intensity=calm?.6:2.4;}cursorLight.position.copy(pointerWorld);cursorLight.intensity=pointerValid&&moving&&!calm?1.7:0;glow.visible=hero.live||pricing.live||closing.live;
        for(let i=0;i<ambient.count;i++){const a=ambientSeed[i];screenToWorld(metrics.width*((a.x<0?.08:.92)+Math.sin(a.spin)*.035),metrics.height*((a.y+6)/12+Math.sin(time*.15+a.spin)*.02),a.z,scratch.position);scratch.rotation.set(time*.08+a.spin,time*.06+a.spin,0);scratch.scale.setScalar(a.size*45*pxRatio(scratch.position));scratch.updateMatrix();ambient.setMatrixAt(i,scratch.matrix);if(i<12){scratch.scale.setScalar(a.size*12*pxRatio(scratch.position));scratch.updateMatrix();rings.setMatrixAt(i,scratch.matrix);}if(i<4){scratch.scale.setScalar(80*pxRatio(scratch.position));scratch.updateMatrix();glass.setMatrixAt(i,scratch.matrix);}}ambient.instanceMatrix.needsUpdate=rings.instanceMatrix.needsUpdate=glass.instanceMatrix.needsUpdate=true;
        const warpAmount=moving&&!calm?Math.min(1,speed+warpBoost):0;streaks.visible=warpAmount>.008;streakMat.opacity=warpAmount*.45;for(let i=0;i<48&&streaks.visible;i++){const a=i*2.39996,r=1.1+(i%7)*.46,z=2-((i*.37+time*(1+warpAmount*7))%7);scratch.position.set(Math.cos(a)*r,Math.sin(a)*r,z);scratch.rotation.set(0,0,-a+Math.PI/2);scratch.scale.set(1,.05+warpAmount*1.2,1);scratch.updateMatrix();streaks.setMatrixAt(i,scratch.matrix);}streaks.instanceMatrix.needsUpdate=true;warpBoost=Math.max(0,warpBoost-dt*1.2);warp.uniforms.amount.value=governorLevel<3?warpAmount*.0025:0;grade.uniforms.time.value=time;grade.uniforms.grain.value=moving?.024:0;
        comet.visible=true;if(!pointerValid)screenToWorld(metrics.width*(.5+Math.sin(time*.35)*.38),metrics.height*(.5+Math.cos(time*.27)*.32),.3,pointerWorld);if(comet.visible){for(let i=23;i>0;i--){const k=i*3,p=(i-1)*3;cometPositions[k]+=(cometPositions[p]-cometPositions[k])*.5;cometPositions[k+1]+=(cometPositions[p+1]-cometPositions[k+1])*.5;cometPositions[k+2]=.3;}cometPositions[0]=pointerWorld.x;cometPositions[1]=pointerWorld.y;cometPositions[2]=.3;cometGeometry.attributes.position.needsUpdate=true;}
        if(moving&&pointerValid&&!calm){for(let i=0;i<particleGeometry.drawRange.count*3;i+=3){const dx=particlePositions[i]-pointerWorld.x,dy=particlePositions[i+1]-pointerWorld.y,d2=dx*dx+dy*dy+.05;if(d2<2){const force=(held?-1:1)*.2/d2;particleSpeed[i]+=dx*force*dt;particleSpeed[i+1]+=dy*force*dt;}particleSpeed[i]*=.96;particleSpeed[i+1]*=.96;particlePositions[i]+=particleSpeed[i]*dt;particlePositions[i+1]+=particleSpeed[i+1]*dt;}}particleMaterial.opacity=calm?.13:.4;
      }
      function updateEvents(dt){bursts.update(dt,.6);coinBursts.update(dt,2.8);confetti.update(dt,1.8);for(const ring of shocks){ring.age+=dt;ring.object.visible=ring.age<ring.duration;if(ring.object.visible){const t=ring.age/ring.duration;ring.object.scale.setScalar(.12+t*2);ring.object.material.opacity=(1-t)*.6;}}
        for(const f of flights){if(f.age>=1)continue;f.age=Math.min(1,f.age+dt/.85);const t=f.age,k=1-Math.pow(1-t,3);flightTarget(f.to);f.object.position.copy(f.from).lerp(f.to,k);f.object.position.y+=Math.sin(k*Math.PI)*1.1;f.object.rotation.set(k*.5,k*Math.PI*2,-k*.2);for(let i=0;i<24;i++){const u=Math.max(0,k-i*.015);v0.copy(f.from).lerp(f.to,u);v0.y+=Math.sin(u*Math.PI)*1.1;f.trail[i*3]=v0.x;f.trail[i*3+1]=v0.y;f.trail[i*3+2]=v0.z;}f.line.geometry.attributes.position.needsUpdate=true;if(t>=1){f.object.visible=f.line.visible=false;bursts.emit(f.to,18,1,.2);shock(f.to);chestLife=1.8;lidSpring.target=-1.25;const el=anchors.get('order-panel').element;el.classList.remove('fx-order-pulse');void el.offsetWidth;el.classList.add('fx-order-pulse');clearTimeout(orderPulseTimer);orderPulseTimer=setTimeout(()=>el.classList.remove('fx-order-pulse'),700);}}
        chestLife=Math.max(0,chestLife-dt);chest.visible=chestLife>0;if(chest.visible){flightTarget(chest.position);chest.position.x+=.18;chest.scale.setScalar(.65);if(chestLife<.8)lidSpring.target=0;chestLid.rotation.x=lidSpring.step(dt);}}
      function setCardMode(on){for(let i=0;i<cards.length;i++){const card=cards[i],saved=savedMaterials[i];if(on){desktopFaces[i].map=saved.face.map;desktopBodies[i].color.copy(saved.body.color);card.userData.faceMaterial=desktopFaces[i];card.userData.material=desktopBodies[i];card.children[2].material=desktopBacks[i];}else{saved.face.map=desktopFaces[i].map;saved.body.color.copy(desktopBodies[i].color);card.userData.faceMaterial=saved.face;card.userData.material=saved.body;card.children[2].material=saved.back;}card.children[0].material=card.userData.material;card.children[1].material=card.userData.faceMaterial;}}
      function enabled(){return flag!=='min';}
      function update(dt,clock,smoothed,isMoving){if(disposedFX)return false;const next=enabled();if(next!==active){active=next;document.body.classList.toggle('showpiece-ready',active);for(const root of roots)root.visible=active;if(active){setCardMode(true);applyGovernor(governorLevel);director.measure();}else{for(const r of scenes){if(r.live)r.exit();r.live=false;}setCardMode(false);restoreLights();camera.fov=42;camera.position.x=camera.position.y=camera.rotation.z=0;camera.updateProjectionMatrix();scene.fog=null;renderer.setClearColor(0x07070b,0);hud.tier='LOW';cards.forEach((card,i)=>{card.visible=true;card.scale.setScalar(1);card.userData.faceMaterial.iridescence=0;card.userData.faceMaterial.sheen=0;card.children[2].material=savedMaterials[i].back;card.userData.rim.visible=false;});faceOverlay.visible=false;}}
        if(!active)return false;scene.fog=fog;moving=isMoving;time=clock;S.progress=smoothed.progress;S.velocity=smoothed.velocity;S.direction=Math.sign(S.velocity);S.activeBrand=canvas.dataset.brand||S.activeBrand;for(const a of anchors.values())a.rect=a.element.getBoundingClientRect();
        if(!moving){held=false;S.isDragging=false;hoverCard=-1;themeTween?.kill();}
        // The base brand tween advances in half turns; keep the new branded front facing out after its edge-on texture swap.
        cards[0].rotation.y=Math.atan(Math.tan(cards[0].rotation.y));
        updateGlobals(moving?dt:1/60);theme=director.update(moving?dt:0);setTheme(theme);cardsGroup.visible=hero.live||pricing.live||closing.live;coins.visible=cardsGroup.visible;glow.visible=cardsGroup.visible;for(let i=0;i<cards.length;i++){cards[i].userData.rim.visible=hero.live;}faceOverlay.visible=pricing.live;
        if(moving)updateEvents(dt);else{eventRoot.visible=false;streaks.visible=comet.visible=false;cursorLight.intensity=0;}if(moving)eventRoot.visible=true;
        hud.phase=theme;hud.tier=S.tier;return true;
      }
      const debugFX=params.has('debug'),debugSeen=new Set();let debugAt=0;
      function debugCheck(){
        if(!debugFX||performance.now()-debugAt<1000)return;debugAt=performance.now();hud.reducedMotion=String(matchMedia('(prefers-reduced-motion: reduce)').matches);hud.fxFeatures=`bloom:${+bloom.enabled} glass:${+glass.visible} warp:${+warp.enabled} ambient:${ambient.count} particles:${particleGeometry.drawRange.count} comet:${+comet.visible}`;
        const check=(name,ok)=>{if(!ok&&!debugSeen.has(name)){debugSeen.add(name);console.warn('[Full FX] missing: '+name);}};
        check('station 01 anchor',!!anchors.get('step-1')?.element);check('station 01 cards',stations[0].children.length===3);
        check('saving data',!!document.querySelector('#panel-'+S.activeBrand+' [data-saved]'));
        if(steps.live){steps.group.updateMatrixWorld(true);for(const card of stations[0].children)check('station 01 finite transform',card.matrixWorld.elements.every(Number.isFinite));hud.reducedMotion=String(matchMedia('(prefers-reduced-motion: reduce)').matches);hud.station01=stations[0].children.filter(c=>c.visible&&c.matrixWorld.elements.every(Number.isFinite)).length;}
        if(pricing.live){check('coin column',stackCoins.count>0||!S.hoveredRow?.saved);check('saving badge',!!shownLabel?.visible||!S.hoveredRow?.saved);hud.savings=(S.hoveredRow?.saved||0)+':'+stackCoins.count+':'+!!shownLabel?.visible;}
      }
      function render(dt,wallDt=dt){if(disposedFX||!active)return;renderer.info.reset();composer.render(dt);frameCalls=renderer.info.render.calls;frameTriangles=renderer.info.render.triangles;hud.drawCalls=String(frameCalls);hud.triangles=String(frameTriangles);if(moving)governor.sample(wallDt);debugCheck();}
      function layoutBand(){const s=document.querySelector('.how__steps');if(!s)return;const h=steps.element.getBoundingClientRect(),r=s.getBoundingClientRect();steps.element.style.setProperty('--band-a',(r.top-h.top-8)+'px');steps.element.style.setProperty('--band-b',(r.top-h.top+128)+'px');}
      function resize(){if(disposedFX)return;cameraDirty=true;syncCamera();director.measure();layoutBand();if(active)applyGovernor(governorLevel);}
      function dispose(){
        if(disposedFX)return;disposedFX=true;
        steps.element.style.removeProperty('--band-a');steps.element.style.removeProperty('--band-b');
        for(const r of scenes){if(r.live)safely(()=>r.exit());r.live=false;}
        if(active)safely(()=>setCardMode(false));active=false;
        cardsGroup.visible=coins.visible=glow.visible=true;
        for(const card of cards){card.visible=true;card.scale.setScalar(1);}
        camera.fov=42;camera.position.x=camera.position.y=camera.rotation.z=0;camera.updateProjectionMatrix();camera.updateMatrixWorld();
        clearTimeout(clickTimer);clearTimeout(orderPulseTimer);safely(()=>themeTween?.kill());
        rollbackConstruction();particleMaterial.opacity=original.particleOpacity;
        anchors.get('order-panel').element.classList.remove('fx-order-pulse');document.body.classList.remove('showpiece-ready');
        for(const el of stepNodes){el.style.removeProperty('--station-emphasis');delete el._e;}
      }
      listen(document,'visibilitychange',()=>governor.reset());listen(window,'motionchange',()=>{held=false;S.isDragging=false;clearTimeout(clickTimer);governor.reset();});
      for(const root of roots)root.visible=false;director.measure();layoutBand();document.fonts?.ready.then(()=>{if(!disposedFX)layoutBand();});return {update,render,resize,dispose,domToWorld,S,apply:applyGovernor,get active(){return active;}};
      }catch(error){rollbackConstruction();throw error;}
    }
