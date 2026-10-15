# Desktop patch replacement blocks — F1–F15 / C1–C4

Applied to the existing site. `script.js` is byte-for-byte unchanged from the pre-patch snapshot. Blocks below are the final source, with complete shared factory functions in F2. Individual sections identify their file and owner. Do not apply the same shared function twice.

## F1 — index.html · createDesktopFX / raycaster


```js
raycaster.params.Line.threshold=.01;
```

## F2 — index.html · createDesktopFX (complete replacement)

Constructor rollback owns roots, listeners, composer, passes, resources, and added card children. This complete function also contains F1 and F3–F15 changes.

```js
function createDesktopFX(T,M,C) {
      const {renderer,scene,camera,group:cardsGroup,cards,coins,particles,particleGeometry,particlePositions,particleMaterial,glow,glowMaterial,brandLight,lights,textures,cardGeometry,faceGeometry,coinGeometry,coinSide,coinCap,sparkleTexture,canvasTexture:baseCanvasTexture,colors,metrics,own:baseOwn}=C;
      const fxResources=new Set(),removeListeners=[];
      const own=value=>{fxResources.add(value);return baseOwn(value);};
      const canvasTexture=(...args)=>{const texture=baseCanvasTexture(...args);fxResources.add(texture);return texture;};
      const original={fog:scene.fog,clearColor:renderer.getClearColor(new T.Color()).clone(),clearAlpha:renderer.getClearAlpha(),autoReset:renderer.info.autoReset,particleOpacity:particleMaterial.opacity};
      const listen=(target,name,fn,options)=>{target.addEventListener(name,fn,options);removeListeners.push(()=>target.removeEventListener(name,fn,options));};
      const roots=[],ownedPasses=[],tweens=[];
      const hud=C.hud,originalChildren=cards.map(card=>new Set(card.children));
      let composer=null,stepTrigger=null;
      const safely=fn=>{try{fn();}catch{}};
      function rollbackConstruction(){
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
      const baseTier=flag==='std'?'MEDIUM':flag==='max'?'HIGH':(navigator.hardwareConcurrency||4)>=8?'HIGH':'MEDIUM';
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
            r.update(dt,S,r);
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
      const introAllowed=!!window.gamecardIntro?.desktop&&performance.now()<window.gamecardIntro.deadline;
      const introStart=performance.now(),introLength=introAllowed?Math.min(1.65,(window.gamecardIntro.deadline-introStart)/1000):0;
      const deals=cards.map((card,i)=>({depth:new Spring(introAllowed?-9:0,11,.62),hover:new Spring(0,13,.7),rx:new Spring(),ry:new Spring(),spin:new Spring(introAllowed?Math.PI*3:0,10,.7),flip:new Spring(),landed:!introAllowed,index:i}));
      const backTexture=canvasTexture(1024,1448,(ctx,w,h)=>{ctx.fillStyle='#120d14';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#d9b77144';for(let i=-h;i<w;i+=70){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i+h,h);ctx.stroke();}ctx.fillStyle='#f5dcab';ctx.textAlign='center';ctx.font='80px Anton';ctx.fillText('MINHTHUAN',w/2,h*.47);ctx.fillText('GAMECARD',w/2,h*.55);ctx.font='26px sans-serif';ctx.fillText('YOUR NEXT LEVEL',w/2,h*.7);});
      const foilUniform={value:0};
      const savedMaterials=cards.map(card=>({face:card.userData.faceMaterial,body:card.userData.material,back:card.children[2].material}));
      const desktopFaces=[],desktopBodies=[],desktopBacks=[];
      cards.forEach(card=>{const face=own(card.userData.faceMaterial.clone());desktopFaces.push(face);desktopBodies.push(own(card.userData.material.clone()));face.iridescence=1;face.iridescenceIOR=1.35;face.sheen=.35;face.sheenColor=new T.Color(0xffeacc);face.onBeforeCompile=shader=>{shader.uniforms.fxTime=foilUniform;shader.fragmentShader='uniform float fxTime;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\nfloat sweep=pow(max(0.0,1.0-abs(vMapUv.x+vMapUv.y*.45-mod(fxTime*.38,1.7))/.075),4.0);totalEmissiveRadiance+=vec3(.3,.38,.5)*sweep;');};const foilCompile=face.onBeforeCompile;face.onBeforeCompile=shader=>{foilCompile(shader);shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>','outgoingLight=min(outgoingLight,vec3(.78));\n#include <opaque_fragment>');};face.customProgramCacheKey=()=> 'gamecard-foil-v2';face.needsUpdate=true;const back=own(new T.MeshPhysicalMaterial({map:backTexture,metalness:.35,roughness:.3,clearcoat:1}));desktopBacks.push(back);const lines=new T.LineSegments(own(new T.EdgesGeometry(cardGeometry,22)),own(new T.LineBasicMaterial({color:0xffdda8,transparent:true,opacity:.3})));card.add(lines);card.userData.rim=lines;lines.visible=false;});
      const slot=mesh(own(new T.TorusGeometry(.6,.025,6,48)),bright,heroRoot);slot.scale.set(1.8,.16,1);slot.position.set(0,1.5,.3);slot.visible=introAllowed;
      const stack=own(new T.InstancedMesh(coinGeometry,[coinSide,coinCap,coinCap],30));heroRoot.add(stack);stack.visible=introAllowed;
      const coinTrailData=new Float32Array(10*10*3),coinTrailGeo=own(new T.BufferGeometry());coinTrailGeo.setAttribute('position',new T.BufferAttribute(coinTrailData,3));const coinTrails=new T.Points(coinTrailGeo,own(new T.PointsMaterial({color:0xf5c542,size:.028,map:sparkleTexture,transparent:true,opacity:.25,blending:T.AdditiveBlending,depthWrite:false})));coinTrails.frustumCulled=false;heroRoot.add(coinTrails);
      function updateHero(dt){cards[1].visible=cards[2].visible=true;domToWorld('hero-art',0,cardsGroup.position);cardsGroup.scale.setScalar(anchorScale('hero-art',510)/3.65);heroRoot.position.copy(cardsGroup.position);heroRoot.scale.copy(cardsGroup.scale);portal.rotation.z=time*.12;arcs.rotation.z=-time*.17;portal.scale.setScalar(1+Math.sin(time*Math.PI/2)*.025);foilUniform.value=time;
        const introT=introLength?Math.min(1,(performance.now()-introStart)/1000/introLength):1;
        if(slot.visible){for(let i=0;i<30;i++){const x=(i%6-2.5)*.22,y=(Math.floor(i/6)-2)*.25;const k=T.MathUtils.smoothstep(introT,i*.012,.65+i*.009);scratch.position.set(x, T.MathUtils.lerp(3.5+i*.12,y,k),.35);scratch.rotation.set(Math.PI/2,0,introT*3);scratch.scale.setScalar(.42);scratch.updateMatrix();stack.setMatrixAt(i,scratch.matrix);}stack.instanceMatrix.needsUpdate=true;slot.visible=stack.visible=introT<.85;}
        for(let i=0;i<cards.length;i++){const d=deals[i],card=cards[i];d.depth.target=(performance.now()-introStart)/1000>i*.12?0:-9;d.spin.target=0;d.hover.target=hoverCard===i?1:0;const lift=moving?d.hover.step(dt):0;if(moving){card.position.z+=d.depth.step(dt);card.rotation.z+=d.spin.step(dt);card.rotation.x+=d.rx.step(dt);card.rotation.y+=d.ry.step(dt)+d.flip.step(dt);}card.position.y+=lift*.16;card.scale.setScalar(1+lift*.06);card.userData.rim.material.opacity=.2+lift*.65;if(moving&&!d.landed&&Math.abs(d.depth.value)<.035){d.landed=true;cardsGroup.updateMatrixWorld(true);card.getWorldPosition(v0);bursts.emit(v0,12,1.2,.23);shock(v0);}}
        if(introT>=1&&!hero.introDone){hero.introDone=true;window.dispatchEvent(new CustomEvent('desktop-intro-ready'));}
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
      function updateBenefits(dt){for(let i=0;i<icons.length;i++){const icon=icons[i],anchor=anchors.get(`benefit-${i+1}`),rect=anchor.rect;screenToWorld(rect.left+(i?41:14),rect.top+14,0,icon.group.position);icon.pop.target=benefits.age>=i*.09?1:0;const pop=moving?icon.pop.step(dt):1;icon.group.scale.setScalar(40*pxRatio(icon.group.position)*pop);icon.group.rotation.set(icon.hover?screenPointer.y*.1:0,(moving?icon.spin.step(dt)+Math.sin(time*.4+i)*.15:0),-(1-pop)*Math.PI/2);if(icon.check)icon.check.geometry.setDrawRange(0,Math.floor(icon.check.geometry.index.count*Math.min(1,benefits.age*1.8)));if(i===3&&moving)for(const child of icon.group.children)if(child.userData.dot!==undefined)child.position.y=Math.sin(time*4+child.userData.dot)*.035;}}

      /* D6 / Brand stages, denomination crossfade, savings column and order chest. */
      const pricing=director.add('pricing','.pricing',updatePricing,function(){this.group.visible=true;},()=>{stageParticles.clear();S.hoveredRow=null;rowStamp='';faceMix.snap(0);savingsSpring.snap(0);if(shownLabel)shownLabel.visible=false;}),stage=pricing.group;
      const gridMat=own(soft.clone());
      const grid=own(new T.InstancedMesh(own(new T.TorusGeometry(.23,.008,3,6)),gridMat,35));stage.add(grid);for(let i=0;i<35;i++){scratch.position.set((i%7-3)*.42,-1.2,Math.floor(i/7)*.34-1);scratch.rotation.set(Math.PI/2,0,0);scratch.scale.setScalar(1);scratch.updateMatrix();grid.setMatrixAt(i,scratch.matrix);}
      const stageShards=own(new T.InstancedMesh(gemGeo,blue,12));stage.add(stageShards);const stageCoins=own(new T.InstancedMesh(coinGeometry,[coinSide,coinCap,coinCap],18));stage.add(stageCoins);
      const rays=own(new T.InstancedMesh(own(new T.PlaneGeometry(.015,2.5)),soft,8));stage.add(rays);
      const stageParticles=new Pool(sparkGeo,bright,72,stage);let emberAt=0;
      const wipeMaterial=own(new T.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{t:{value:2},color:{value:new T.Color(colors.garena)}},vertexShader:vertex,fragmentShader:'uniform float t;uniform vec3 color;varying vec2 vUv;void main(){float r=length(vUv-.5)*2.;float a=(1.-smoothstep(.025,.15,abs(r-t)))*(1.-smoothstep(.8,1.2,t));gl_FragColor=vec4(color*1.4,a*.6);}'}));const wipe=mesh(own(new T.PlaneGeometry(4.4,4.4)),wipeMaterial,stage);wipe.position.z=.6;
      const savingsSpring=new Spring(0,11,.6),stackCoins=own(new T.InstancedMesh(coinGeometry,[coinSide,coinCap,coinCap],20));stage.add(stackCoins);
      const priceLabels=new Map();for(const label of ['-1K','-2K','-4K','-5K','-8K','-10K','-12K','-15K','-20K','-30K','-40K']){const object=text3D(label,.19,gold,stage);object.visible=false;priceLabels.set(label,object);}
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
      listen(window,'tabchange',event=>{S.activeBrand=event.detail.id;rowStamp='';overlayMaterial.opacity=0;faceMix.snap(0);savingsSpring.target=0;wipeMaterial.uniforms.t.value=0;wipeMaterial.uniforms.color.value.set(colors[S.activeBrand]);themeKey='';if(shownLabel)shownLabel.visible=false;});
      function updatePricing(dt){const r=pricing.rect,order=anchors.get('order-panel').rect;const x=order.left+order.width*.5;const y=order.top+105;screenToWorld(x,y,0,stage.position);cardsGroup.position.copy(stage.position);cardsGroup.position.y+=.15;cardsGroup.scale.setScalar(Math.min(1,195*pxRatio(cardsGroup.position)/2.4));cards[1].visible=cards[2].visible=false;
        stage.scale.setScalar(Math.min(1,200*pxRatio(stage.position)/4.4));stage.updateMatrixWorld(true);grid.visible=S.activeBrand==='garena';stageShards.visible=rays.visible=S.activeBrand==='zing';stageCoins.visible=S.activeBrand==='vcoin';grid.material.color.set(colors[S.activeBrand]);grid.position.y=Math.sin(time*1.8)*.06;
        for(let i=0;i<18;i++){const a=i/12*Math.PI*2+time*.35;scratch.position.set(Math.cos(a)*1.15,Math.sin(a)*.7,Math.sin(a)*.5-.3);scratch.rotation.set(time*.3+i,time*.2+i,0);scratch.scale.setScalar(.6);scratch.updateMatrix();if(i<12)stageShards.setMatrixAt(i,scratch.matrix);scratch.position.set((i%3-1)*.55,1.6-((time*.7+i*.19)%3),-.7);scratch.rotation.x=Math.PI/2;scratch.scale.setScalar(.32);scratch.updateMatrix();stageCoins.setMatrixAt(i,scratch.matrix);if(i<8){scratch.position.set((i-3.5)*.23,0,-.8);scratch.rotation.set(0,0,.16);scratch.scale.set(1,1,1);scratch.updateMatrix();rays.setMatrixAt(i,scratch.matrix);}}
        stageShards.instanceMatrix.needsUpdate=stageCoins.instanceMatrix.needsUpdate=rays.instanceMatrix.needsUpdate=true;
        if(moving&&time>emberAt){emberAt=time+.15;v0.set((Math.random()-.5)*2,-1.1,.1);stageParticles.emit(v0,2,.3,.4);}stageParticles.update(dt,-.13);
        wipeMaterial.uniforms.t.value=moving?wipeMaterial.uniforms.t.value+dt*1.4:2;overlayMaterial.opacity=moving?faceMix.step(dt):faceMix.target;const height=moving?savingsSpring.step(dt):savingsSpring.target;stackCoins.count=Math.max(0,Math.min(20,Math.ceil(height*6)));for(let i=0;i<stackCoins.count;i++){scratch.position.set(-.95,-.8+i*.07,0);scratch.rotation.set(Math.PI/2,0,0);scratch.scale.setScalar(.65);scratch.updateMatrix();stackCoins.setMatrixAt(i,scratch.matrix);}stackCoins.instanceMatrix.needsUpdate=true;if(shownLabel)shownLabel.position.set(-.95,-.6+stackCoins.count*.07,.12);
        const best=bestRows.get(S.activeBrand);if(best){const b=best.getBoundingClientRect();star.visible=b.top>0&&b.bottom<metrics.height;if(star.visible){screenToWorld(b.left-16,b.top+b.height*.5,0,v0);const starSize=65*pxRatio(v0)/stage.scale.x;stage.worldToLocal(v0);star.position.copy(v0);star.scale.setScalar(starSize);star.rotation.y=time;}}else star.visible=false;
      }
      listen(window,'addtocart',event=>{S.cartCount=event.detail.count;if(!active||!moving)return;const d=event.detail,f=flights[flightCursor++%flights.length],r=d.origin?.getBoundingClientRect();if(!r)return;screenToWorld(r.right-20,r.top+r.height*.5,.4,f.from);domToWorld('order-panel',.4,f.to,.5,.08);f.age=0;f.object.visible=f.line.visible=true;f.object.material.map=textures.get(d.id);f.object.scale.setScalar(.18);});

      /* D7 / Three-station timeline; camera rail is scrubbed without changing layout height. */
      let stationProgress=0;const steps=director.add('steps','.how',updateSteps,function(){this.group.visible=true;},()=>{for(const el of stepNodes){el.style.removeProperty('--station-emphasis');delete el._e;}}),stations=[];
      const routeGeometry=own(new T.BufferGeometry()),routeData=new Float32Array(61*3);routeGeometry.setAttribute('position',new T.BufferAttribute(routeData,3));const route=new T.Line(routeGeometry,lineMaterial);route.frustumCulled=false;steps.group.add(route);
      const stepRail=new T.CatmullRomCurve3([new T.Vector3(-.15,.03,0),new T.Vector3(0,.08,-.12),new T.Vector3(.15,.02,0)]);
      const phoneTexture=canvasTexture(512,800,(ctx,w,h)=>{ctx.fillStyle='#08291d';ctx.fillRect(0,0,w,h);ctx.fillStyle='#92ffce';ctx.textAlign='center';ctx.font='bold 48px sans-serif';ctx.fillText('CHUYEN TIEN',w/2,340);ctx.fillText('OK',w/2,410);});
      for(let i=0;i<3;i++){const g=new T.Group();steps.group.add(g);stations.push(g);if(i===0){for(let j=0;j<3;j++){const material=own(new T.MeshStandardMaterial({map:textures.get(['garena','zing','vcoin'][j]),metalness:.25,roughness:.4}));const card=mesh(faceGeometry,material,g);card.scale.setScalar(.25);card.userData.carousel=j;}}else{const phone=mesh(cardGeometry,metal(0x20232b),g);phone.scale.set(.32,.36,2);const screen=mesh(faceGeometry,own(new T.MeshBasicMaterial({map:phoneTexture})),g);screen.scale.set(.28,.32,1);screen.position.z=.1;if(i===1){const bank=mesh(cardGeometry,green,g);bank.scale.set(.3,.15,1);bank.rotation.z=-.15;bank.position.set(-.85,.22,0);}else{text3D('XXXX-XXXX-XXXX',.07,white,g).position.set(0,0,.12);}}}
      const transferCoins=own(new T.InstancedMesh(coinGeometry,[coinSide,coinCap,coinCap],16));stations[1].add(transferCoins);
      const codeTexture=canvasTexture(1024,512,(ctx,w,h)=>{ctx.fillStyle='#083528';ctx.fillRect(0,0,w,h);ctx.fillStyle='#baffdd';ctx.textAlign='center';ctx.font='bold 53px monospace';ctx.fillText('XXXX-XXXX-XXXX',w/2,h/2);});const delivered=mesh(faceGeometry,own(new T.MeshStandardMaterial({map:codeTexture,metalness:.4,roughness:.3})),stations[2]);delivered.scale.set(.38,.19,1);delivered.position.z=.2;
      const glyphs=[];for(let i=0;i<12;i++){const glyph=text3D(i%3?'X':'-',.09,bright,stations[2]);glyphs.push(glyph);}
      const stepNodes=Array.from(document.querySelectorAll('.how-step'));
      stepTrigger=window.ScrollTrigger?.create({trigger:steps.element,start:'top bottom',end:'bottom top',scrub:.5,onUpdate:self=>{stationProgress=self.progress;}});
      function updateSteps(){const p=stationProgress||steps.local;stepRail.getPoint(p,v3);for(let i=0;i<3;i++){const a=anchors.get(`step-${i+1}`),r=a.rect;screenToWorld(r.left+r.width*.68,r.top+59,0,stations[i].position);stations[i].scale.setScalar(90*pxRatio(stations[i].position));stations[i].rotation.y=(p*3-i-1)*.16+v3.x;const selected=Math.max(0,1-Math.abs(p*3-i-.5));const e=(.82+selected*.18).toFixed(2);if(stepNodes[i]._e!==e){stepNodes[i]._e=e;stepNodes[i].style.setProperty('--station-emphasis',e);}if(i===0){for(const card of stations[0].children){const angle=card.userData.carousel*Math.PI*2/3+time*.45;card.position.set(Math.cos(angle)*.45,0,Math.sin(angle)*.3);card.rotation.y=-angle*.2;}}}
        for(let i=0;i<16;i++){const t=(time*.45+i/16)%1;scratch.position.set(-.8*(1-t),.2+Math.sin(t*Math.PI)*.4,.1);scratch.rotation.set(Math.PI/2,time+i,0);scratch.scale.setScalar(.18);scratch.updateMatrix();transferCoins.setMatrixAt(i,scratch.matrix);}transferCoins.instanceMatrix.needsUpdate=true;delivered.rotation.y=Math.PI*2*T.MathUtils.smoothstep(p,.66,.9);for(let i=0;i<glyphs.length;i++){const t=T.MathUtils.smoothstep(p,.6+i*.006,.86+i*.006);glyphs[i].position.set((i-5.5)*.037*t,Math.sin(time+i)*(1-t)*.45,.15);glyphs[i].scale.setScalar(1-t);}
        for(let i=0;i<61;i++){const t=i/60,from=stations[t<.5?0:1].position,to=stations[t<.5?1:2].position,k=t<.5?t*2:(t-.5)*2;v0.copy(from).lerp(to,k);routeData[i*3]=v0.x;routeData[i*3+1]=v0.y-.4+Math.sin(k*Math.PI)*.1;routeData[i*3+2]=-.2;}routeGeometry.attributes.position.needsUpdate=true;routeGeometry.setDrawRange(0,Math.max(2,Math.floor(p*61)));}

      /* D8 / Payment miniatures and success check: generic labels, actual DOM numbers. */
      const payment=director.add('payment','.payment',updatePayment,function(){this.group.visible=true;},()=>{for(const obj of paymentObjects){obj.age=5;obj.pulse.snap(1);obj.check.visible=false;}}),paymentObjects=[];
      for(const id of ['momo','vcb']){const g=new T.Group();payment.group.add(g);const el=anchors.get('payment-'+id).element,number=el.querySelector('.payment-card__number').textContent;const map=canvasTexture(1024,512,(ctx,w,h)=>{ctx.fillStyle=id==='momo'?'#92204f':'#154b36';ctx.fillRect(0,0,w,h);ctx.fillStyle='#ffffff';ctx.font='bold 80px sans-serif';ctx.fillText(id==='momo'?'MOMO':'VIETCOMBANK',65,140);ctx.font='65px monospace';ctx.shadowColor='#000';ctx.shadowOffsetY=3;ctx.fillText(number,65,310);});const card=mesh(cardGeometry,id==='momo'?pink:green,g);card.rotation.z=Math.PI/2;card.scale.set(.35,.44,1);const face=mesh(own(new T.PlaneGeometry(1.04,.56)),own(new T.MeshPhysicalMaterial({map,clearcoat:1,metalness:.35,roughness:.3})),g);face.position.z=.06;const check=mesh(tube([[-.17,0,0],[-.04,-.1,0],[.19,.16,0]],.03),green,g);check.position.set(0,.45,.2);check.visible=false;paymentObjects.push({id,group:g,check,pulse:new Spring(1,12,.6),age:5});}
      listen(window,'copysuccess',event=>{if(!active||!moving)return;const obj=paymentObjects.find(p=>p.id===event.detail.id);if(!obj)return;obj.age=0;obj.pulse.velocity=5;obj.check.visible=true;obj.group.getWorldPosition(v0);shock(v0);bursts.emit(v0,22,1,.25);});
      function updatePayment(dt){for(const obj of paymentObjects){const a=anchors.get('payment-'+obj.id),r=a.rect;screenToWorld(r.right-75,r.top+80,0,obj.group.position);obj.group.scale.setScalar(95*pxRatio(obj.group.position)*(moving?obj.pulse.step(dt):1));obj.group.rotation.set(moving?screenPointer.y*.08:0,moving?Math.sin(time*.5)*.12+screenPointer.x*.1:0,-.1);obj.age+=dt;obj.check.visible=obj.age<1.8;obj.check.geometry.setDrawRange(0,Math.floor(obj.check.geometry.index.count*Math.min(1,obj.age*3)));obj.check.scale.setScalar(Math.min(1,(1.8-obj.age)*3));}}

      /* D9 / Calm reading region; Director still gives it a real group and theme. */
      function updateReading(){cursorLight.intensity=0;streaks.visible=comet.visible=false;warp.uniforms.amount.value=0;}
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
      function applyGovernor(level){if(disposedFX)return;level=Math.max(0,Math.min(7,Math.trunc(Number(level)||0)));governorLevel=governor.level=level;bloom.enabled=level<1;glass.visible=baseTier==='HIGH'&&level<2;warp.enabled=level<3;ambient.count=level<4?(baseTier==='HIGH'?60:40):30;const dpr=level>=5?1:Math.min(devicePixelRatio,baseTier==='HIGH'?1.5:1.25);renderer.setPixelRatio(dpr);renderer.setSize(metrics.width,metrics.height,false);composer.setPixelRatio(dpr);composer.setSize(metrics.width,metrics.height);particleGeometry.setDrawRange(0,level>=6?350:700);comet.visible=level<7&&pointerValid;S.tier=level>=4?'MEDIUM':baseTier;hud.governor=String(level);hud.tier=S.tier;hud.particles=String(particleGeometry.drawRange.count);}
      function setTheme(name){const key=name==='pricing'?S.activeBrand:name;if(key===themeKey)return;themeKey=key;const value=name==='pricing'?colors[S.activeBrand]:name==='steps'?0x49dc9c:0xf5c542;colorTemp.set(value);themeTween?.kill();const dest={r:colorTemp.r,g:colorTemp.g,b:colorTemp.b};if(moving&&window.gsap)themeTween=window.gsap.to(themeColor,{...dest,duration:1.2,ease:'power2.inOut'});else themeColor.copy(colorTemp);}
      const fog=new T.FogExp2(0x151014,.025);scene.fog=fog;
      function updateGlobals(dt){const calm=theme==='faq'||theme==='reading',speed=Math.min(1,Math.abs(S.velocity)/55);curve.getPoint(T.MathUtils.clamp(S.progress,0,1),cameraPoint);if(theme==='steps'){stepRail.getPoint(T.MathUtils.clamp(stationProgress,0,1),v3);cameraPoint.add(v3);}rig.x.target=cameraPoint.x;rig.y.target=cameraPoint.y;rig.z.target=cameraPoint.z;rig.roll.target=moving&&!calm?S.direction*speed*.009:0;rig.fov.target=moving?45+speed*7:45;camera.position.set(rig.x.step(dt),rig.y.step(dt),rig.z.step(dt));camera.rotation.z=rig.roll.step(dt);if(moving&&!calm){camera.position.x+=Math.sin(time*31)*speed*.003;camera.position.y+=Math.cos(time*27)*speed*.002;}camera.fov=rig.fov.step(dt);cameraDirty=true;syncCamera();screenToWorld((screenPointer.x+1)*metrics.width/2,(1-screenPointer.y)*metrics.height/2,.25,pointerWorld);
        fog.color.copy(themeColor).multiplyScalar(.0004).add(backgroundColor);renderer.setClearColor(fog.color,1);glowMaterial.color.copy(themeColor);brandLight.color.copy(themeColor);ambientMat.color.copy(themeColor);for(let i=0;i<lights.length;i++){lights[i].color.copy(themeColor);lights[i].intensity=calm?.6:2.4;}cursorLight.position.copy(pointerWorld);cursorLight.intensity=pointerValid&&moving&&!calm?1.7:0;glow.visible=hero.live||pricing.live||closing.live;
        for(let i=0;i<ambient.count;i++){const a=ambientSeed[i];scratch.position.set(a.x+camera.position.x,a.y+Math.sin(time*.15+a.spin)*.16,a.z);scratch.rotation.set(time*.08+a.spin,time*.06+a.spin,0);scratch.scale.setScalar(a.size*(calm?.45:1));scratch.updateMatrix();ambient.setMatrixAt(i,scratch.matrix);if(i<12){scratch.scale.setScalar(a.size*.23);scratch.updateMatrix();rings.setMatrixAt(i,scratch.matrix);}if(i<4){scratch.position.z=-1;scratch.scale.setScalar(1.4);scratch.updateMatrix();glass.setMatrixAt(i,scratch.matrix);}}ambient.instanceMatrix.needsUpdate=rings.instanceMatrix.needsUpdate=glass.instanceMatrix.needsUpdate=true;
        const warpAmount=moving&&!calm?Math.min(1,speed+warpBoost):0;streaks.visible=warpAmount>.008;streakMat.opacity=warpAmount*.45;for(let i=0;i<48&&streaks.visible;i++){const a=i*2.39996,r=1.1+(i%7)*.46,z=2-((i*.37+time*(1+warpAmount*7))%7);scratch.position.set(Math.cos(a)*r,Math.sin(a)*r,z);scratch.rotation.set(0,0,-a+Math.PI/2);scratch.scale.set(1,.05+warpAmount*1.2,1);scratch.updateMatrix();streaks.setMatrixAt(i,scratch.matrix);}streaks.instanceMatrix.needsUpdate=true;warpBoost=Math.max(0,warpBoost-dt*1.2);warp.uniforms.amount.value=governorLevel<3?warpAmount*.0025:0;grade.uniforms.time.value=time;grade.uniforms.grain.value=moving?.024:0;
        comet.visible=moving&&pointerValid&&!calm&&governorLevel<7;if(comet.visible){for(let i=23;i>0;i--){const k=i*3,p=(i-1)*3;cometPositions[k]+=(cometPositions[p]-cometPositions[k])*.5;cometPositions[k+1]+=(cometPositions[p+1]-cometPositions[k+1])*.5;cometPositions[k+2]=.3;}cometPositions[0]=pointerWorld.x;cometPositions[1]=pointerWorld.y;cometPositions[2]=.3;cometGeometry.attributes.position.needsUpdate=true;}
        if(moving&&pointerValid&&!calm){for(let i=0;i<particleGeometry.drawRange.count*3;i+=3){const dx=particlePositions[i]-pointerWorld.x,dy=particlePositions[i+1]-pointerWorld.y,d2=dx*dx+dy*dy+.05;if(d2<2){const force=(held?-1:1)*.2/d2;particleSpeed[i]+=dx*force*dt;particleSpeed[i+1]+=dy*force*dt;}particleSpeed[i]*=.96;particleSpeed[i+1]*=.96;particlePositions[i]+=particleSpeed[i]*dt;particlePositions[i+1]+=particleSpeed[i+1]*dt;}}particleMaterial.opacity=calm?.13:.4;
      }
      function updateEvents(dt){bursts.update(dt,.6);coinBursts.update(dt,2.8);confetti.update(dt,1.8);for(const ring of shocks){ring.age+=dt;ring.object.visible=ring.age<ring.duration;if(ring.object.visible){const t=ring.age/ring.duration;ring.object.scale.setScalar(.12+t*2);ring.object.material.opacity=(1-t)*.6;}}
        for(const f of flights){if(f.age>=1)continue;f.age=Math.min(1,f.age+dt/.85);const t=f.age,k=1-Math.pow(1-t,3);domToWorld('order-panel',.4,f.to,.5,.08);f.object.position.copy(f.from).lerp(f.to,k);f.object.position.y+=Math.sin(k*Math.PI)*1.1;f.object.rotation.set(k*.5,k*Math.PI*2,-k*.2);for(let i=0;i<24;i++){const u=Math.max(0,k-i*.015);v0.copy(f.from).lerp(f.to,u);v0.y+=Math.sin(u*Math.PI)*1.1;f.trail[i*3]=v0.x;f.trail[i*3+1]=v0.y;f.trail[i*3+2]=v0.z;}f.line.geometry.attributes.position.needsUpdate=true;if(t>=1){f.object.visible=f.line.visible=false;bursts.emit(f.to,18,1,.2);shock(f.to);chestLife=1.8;lidSpring.target=-1.25;const el=anchors.get('order-panel').element;el.classList.remove('fx-order-pulse');void el.offsetWidth;el.classList.add('fx-order-pulse');clearTimeout(orderPulseTimer);orderPulseTimer=setTimeout(()=>el.classList.remove('fx-order-pulse'),700);}}
        chestLife=Math.max(0,chestLife-dt);chest.visible=chestLife>0;if(chest.visible){domToWorld('order-panel',.2,chest.position,.86,.08);chest.position.x+=.18;chest.scale.setScalar(.65);if(chestLife<.8)lidSpring.target=0;chestLid.rotation.x=lidSpring.step(dt);}}
      function setCardMode(on){for(let i=0;i<cards.length;i++){const card=cards[i],saved=savedMaterials[i];if(on){desktopFaces[i].map=saved.face.map;desktopBodies[i].color.copy(saved.body.color);card.userData.faceMaterial=desktopFaces[i];card.userData.material=desktopBodies[i];card.children[2].material=desktopBacks[i];}else{saved.face.map=desktopFaces[i].map;saved.body.color.copy(desktopBodies[i].color);card.userData.faceMaterial=saved.face;card.userData.material=saved.body;card.children[2].material=saved.back;}card.children[0].material=card.userData.material;card.children[1].material=card.userData.faceMaterial;}}
      function enabled(){return innerWidth>=1100&&(navigator.hardwareConcurrency||4)>4&&(navigator.deviceMemory||8)>4&&flag!=='min';}
      function update(dt,clock,smoothed,isMoving){if(disposedFX)return false;const next=enabled();if(next!==active){active=next;document.body.classList.toggle('showpiece-ready',active);for(const root of roots)root.visible=active;if(active){setCardMode(true);applyGovernor(governorLevel);director.measure();}else{for(const r of scenes){if(r.live)r.exit();r.live=false;}setCardMode(false);camera.fov=42;camera.position.x=camera.position.y=camera.rotation.z=0;camera.updateProjectionMatrix();scene.fog=null;renderer.setClearColor(0x07070b,0);hud.tier='LOW';cards.forEach((card,i)=>{card.visible=true;card.scale.setScalar(1);card.userData.faceMaterial.iridescence=0;card.userData.faceMaterial.sheen=0;card.children[2].material=savedMaterials[i].back;card.userData.rim.visible=false;});faceOverlay.visible=false;}}
        if(!active)return false;scene.fog=fog;moving=isMoving;time=clock;S.progress=smoothed.progress;S.velocity=smoothed.velocity;S.direction=Math.sign(S.velocity);S.activeBrand=canvas.dataset.brand||S.activeBrand;for(const a of anchors.values())a.rect=a.element.getBoundingClientRect();
        if(!moving){held=false;S.isDragging=false;hoverCard=-1;themeTween?.kill();}
        // The base brand tween advances in half turns; keep the new branded front facing out after its edge-on texture swap.
        cards[0].rotation.y=Math.atan(Math.tan(cards[0].rotation.y));
        updateGlobals(moving?dt:1/60);theme=director.update(moving?dt:0);setTheme(theme);cardsGroup.visible=hero.live||pricing.live||closing.live;coins.visible=cardsGroup.visible;glow.visible=cardsGroup.visible;for(let i=0;i<cards.length;i++){cards[i].userData.rim.visible=hero.live;}faceOverlay.visible=pricing.live;
        if(moving)updateEvents(dt);else{eventRoot.visible=false;streaks.visible=comet.visible=false;cursorLight.intensity=0;}if(moving)eventRoot.visible=true;
        hud.phase=theme;hud.tier=S.tier;return true;
      }
      function render(dt,wallDt=dt){if(disposedFX||!active)return;renderer.info.reset();composer.render(dt);frameCalls=renderer.info.render.calls;frameTriangles=renderer.info.render.triangles;hud.drawCalls=String(frameCalls);hud.triangles=String(frameTriangles);if(moving)governor.sample(wallDt);}
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
```

## F2 / F9 — index.html · createScene (complete replacement)

Includes failure isolation, guarded construction, base rendering fallback, one shared HUD flush clock, and cleanup.

```js
function createScene(T, RoomEnvironment) {
      const resources = new Set();
      const cleanup = [];
      const own = resource => (resources.add(resource), resource);
      const listen = (target, name, callback, options) => {
        target.addEventListener(name, callback, options);
        cleanup.push(() => target.removeEventListener(name, callback, options));
      };
      let renderer, environment;
      try {
        renderer = new T.WebGLRenderer({ canvas, antialias:true, alpha:true, powerPreference:innerWidth<1100?'low-power':'high-performance' });
        renderer.outputColorSpace = T.SRGBColorSpace;
        renderer.toneMapping = T.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.1;
        renderer.setClearColor(0x07070b, 0);
        renderer.shadowMap.enabled = false;
        const pmrem = new T.PMREMGenerator(renderer);
        const room = new RoomEnvironment();
        try { environment = own(pmrem.fromScene(room, 0.04)); }
        finally { room.dispose(); pmrem.dispose(); }
      } catch (error) { renderer?.dispose(); for (const resource of resources) resource.dispose(); throw error; }

      const scene = new T.Scene();
      scene.environment = environment.texture;
      const camera = new T.PerspectiveCamera(42, 1, .1, 70);
      camera.position.set(0, 0, 6.6);
      scene.add(new T.HemisphereLight(0xe9f1ff, 0x25202b, 1.5));
      const key = new T.DirectionalLight(0xfff3de, 3.2); key.position.set(-3, 5, 6); scene.add(key);
      const colors = { garena:0xe11d1d, zing:0x1e6fff, vcoin:0xff8a00 };
      const lights = Object.values(colors).map(color => { const light = new T.PointLight(color, 4, 14, 2); scene.add(light); return light; });
      const brandLight = new T.PointLight(colors.garena, 3, 10, 2); brandLight.position.set(1, 1, 4); scene.add(brandLight);
      const group = new T.Group(); scene.add(group);
      const cards = [], textures = new Map();
      const brandIds = ['garena', 'zing', 'vcoin'];
      const cardData = window.gamecardApp.cards;
      let seed = 190917;
      const random = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
      const mobile = () => innerWidth < 1100;
      const fxFlag=new URLSearchParams(location.search).get('3d');
      let mobileTier=window.MobileFX.chooseTier({flag:fxFlag,memory:navigator.deviceMemory??4,cores:navigator.hardwareConcurrency??6,saveData:navigator.connection?.saveData,effectiveType:navigator.connection?.effectiveType});
      const textureSize=mobile()&&mobileTier!=='HIGH'?512:1024;
      let overlayOpen=!!document.querySelector('dialog[open]'),lastActivity=performance.now(),orientationTimer,resizeWidth=innerWidth,resizeHeight=innerHeight;
      const mobileMonitor=new window.MobileFX.Monitor(mobileTier,tier=>{mobileTier=tier;if(tier==='OFF'){dispose();hud.tier='OFF';reportScene('fallback');}else applyQuality();});
      const constrained = (navigator.hardwareConcurrency || 4) <= 4 || (navigator.deviceMemory || 8) <= 4;
      let quality = mobile() || constrained ? 'low' : 'high';
      let downgraded = false, disposed = false, contextLost = false;
      let frame = 0, lastTime = 0, elapsed = 0, resizeTimer, staticPending = false;
      let currentBrand = 'garena', assignedBrand = 'garena', flipTween, colorTween;
      let animate = window.gamecardApp.motionEnabled();

      const pointer = new T.Vector2(), pointerSmooth = new T.Vector2();
      const target = { progress:0, scroll:0, velocity:0 }, smooth = { progress:0, scroll:0, velocity:0 };
      const flip = { angle:0 };
      const metrics = { width:innerWidth, height:innerHeight, heroTop:0, heroBottom:0, artX:.72, artTop:0, artHeight:500, artWidth:500, pricingX:.9 };
      let fpsFrames=0,fpsTime=0,slowSeconds=0,hudAt=-Infinity,hudTimer=0;
      const hud={};
      function flushHUD(now){
        if(now-hudAt<250){if(!animate&&!hudTimer)hudTimer=setTimeout(()=>{hudTimer=0;if(!disposed)flushHUD(performance.now());},Math.ceil(250-(now-hudAt)));return;}
        hudAt=now;hud.drawCalls=renderer.info.render.calls;hud.triangles=renderer.info.render.triangles;hud.progress=smooth.progress.toFixed(3);
        hud.resources=renderer.info.memory.geometries+'g/'+renderer.info.memory.textures+'t';
        for(const key of Object.keys(hud)){const value=String(hud[key]);if(canvas.dataset[key]!==value)canvas.dataset[key]=value;}
      }
      const scratch = new T.Object3D();
      const particleTint = new T.Color(), white = new T.Color(0xffffff);
      let detachScroll,desktopFX=null,desktopLoading=false;
      let desktopFailed=false;
      try {

      function canvasTexture(width, height, paint) {
        const surface = document.createElement('canvas'); surface.width = width; surface.height = height;
        const ctx = surface.getContext('2d'); if (!ctx) throw new Error('Canvas texture context unavailable');
        paint(ctx, width, height);
        const texture = own(new T.CanvasTexture(surface));
        texture.colorSpace = T.SRGBColorSpace;
        texture.anisotropy = Math.min(mobile()?4:Infinity,renderer.capabilities.getMaxAnisotropy());
        texture.generateMipmaps=true;
        if(mobile())texture.onUpdate=()=>{surface.width=surface.height=1;texture.onUpdate=null;};
        return texture;
      }
      function cardTexture(id) {
        return canvasTexture(textureSize, textureSize*1448/1024, (ctx, w, h) => {
          ctx.scale(textureSize/1024,textureSize/1024);w=1024;h=1448;
          const hex = '#' + colors[id].toString(16).padStart(6, '0');
          ctx.beginPath(); ctx.roundRect(0, 0, w, h, 62); ctx.clip();
          const gradient = ctx.createLinearGradient(0, 0, w, h);
          gradient.addColorStop(0, hex); gradient.addColorStop(1, '#100c18');
          ctx.fillStyle = gradient; ctx.fillRect(0, 0, w, h);
          ctx.strokeStyle = '#ffffff13'; ctx.lineWidth = 1;
          for (let x=0; x<w; x+=44) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
          for (let y=0; y<h; y+=44) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
          for (let i=0; i<5500; i++) { ctx.fillStyle = random()>.5?'#ffffff12':'#00000015'; ctx.fillRect(random()*w, random()*h, 2, 2); }
          ctx.save(); ctx.translate(w*.55,h*.45); ctx.rotate(-.42);
          const shine = ctx.createLinearGradient(-210,0,210,0); shine.addColorStop(0,'#ffffff00'); shine.addColorStop(.5,'#ffffff20'); shine.addColorStop(1,'#ffffff00');
          ctx.fillStyle = shine; ctx.fillRect(-210,-h,420,h*2); ctx.restore();
          ctx.strokeStyle = '#ffffff35'; ctx.lineWidth = 2; ctx.beginPath(); ctx.roundRect(28,28,w-56,h-56,43); ctx.stroke();
          ctx.fillStyle = '#ffffff'; ctx.font = '500 29px "Be Vietnam Pro", sans-serif';
          ctx.fillText('MINHTHUAN / GAMECARD', 72, 118);
          ctx.font = '400 50px "Be Vietnam Pro", sans-serif'; ctx.fillText('↗', 888, 126);
          ctx.font = '400 197px Anton, sans-serif'; ctx.textAlign = 'center';
          ctx.fillText(id.toUpperCase(), w/2, h*.54, w-135);
          const denomination = cardData.find(item=>item.id===id).items.find(([face])=>face===100000)?.[0] || 100000;
          ctx.font = '600 43px "Be Vietnam Pro", sans-serif';
          ctx.fillText(new Intl.NumberFormat('vi-VN').format(denomination)+'đ',w/2,h*.65);
          ctx.strokeStyle='#ffffff50';ctx.beginPath();ctx.moveTo(72,h-170);ctx.lineTo(w-72,h-170);ctx.stroke();
          ctx.textAlign='left';ctx.font='500 26px "Be Vietnam Pro", sans-serif';ctx.fillText('THẺ GAME ĐIỆN TỬ',72,h-107);
          ctx.textAlign='right';ctx.fillText('MT / '+id[0].toUpperCase(),w-72,h-107);
        });
      }
      const shape = new T.Shape();
      const x=.85, y=1.2, r=.12;
      shape.moveTo(-x+r,-y);shape.lineTo(x-r,-y);shape.quadraticCurveTo(x,-y,x,-y+r);
      shape.lineTo(x,y-r);shape.quadraticCurveTo(x,y,x-r,y);shape.lineTo(-x+r,y);
      shape.quadraticCurveTo(-x,y,-x,y-r);shape.lineTo(-x,-y+r);shape.quadraticCurveTo(-x,-y,-x+r,-y);
      const cardGeometry = own(new T.ExtrudeGeometry(shape,{depth:.06,bevelEnabled:true,bevelThickness:.014,bevelSize:.018,bevelSegments:3,steps:1,curveSegments:10}));
      cardGeometry.translate(0,0,-.03);
      const faceGeometry = own(new T.PlaneGeometry(1.69,2.39));
      brandIds.forEach(id => textures.set(id, cardTexture(id)));
      function makeCard(id) {
        const card = new T.Group();
        const material = own(new T.MeshPhysicalMaterial({color:colors[id],metalness:.35,roughness:.25,clearcoat:1,clearcoatRoughness:.15,envMapIntensity:.7,transparent:true}));
        const faceMaterial = own(new T.MeshPhysicalMaterial({map:textures.get(id),metalness:.12,roughness:.38,clearcoat:1,clearcoatRoughness:.15,envMapIntensity:.7,transparent:true}));
        const body = new T.Mesh(cardGeometry,material);card.add(body);
        const front = new T.Mesh(faceGeometry,faceMaterial);front.position.z=.051;card.add(front);
        const back = new T.Mesh(faceGeometry,faceMaterial);back.position.z=-.051;back.rotation.y=Math.PI;card.add(back);
        card.userData={id,material,faceMaterial};group.add(card);cards.push(card);return card;
      }
      brandIds.forEach(makeCard);

      const coinTexture = canvasTexture(512,512,(ctx,w,h)=>{
        const gradient=ctx.createRadialGradient(w*.38,h*.3,8,w/2,h/2,w*.6);gradient.addColorStop(0,'#fff0b0');gradient.addColorStop(.6,'#eab936');gradient.addColorStop(1,'#9b6611');
        ctx.fillStyle=gradient;ctx.fillRect(0,0,w,h);ctx.strokeStyle='#805711';ctx.lineWidth=10;
        for(const radius of [210,232]){ctx.beginPath();ctx.arc(w/2,h/2,radius,0,Math.PI*2);ctx.stroke();}
        ctx.fillStyle='#8d5f15';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='800 280px "Be Vietnam Pro", sans-serif';ctx.fillText('đ',w/2,h/2+10);
      });
      const coinGeometry = own(new T.CylinderGeometry(.24,.24,.055,48));
      const coinSide = own(new T.MeshStandardMaterial({color:0xf5c542,metalness:1,roughness:.25,envMapIntensity:1.2,transparent:true}));
      const coinCap = own(new T.MeshStandardMaterial({color:0xf5c542,map:coinTexture,bumpMap:coinTexture,bumpScale:.012,metalness:1,roughness:.25,envMapIntensity:1.2,transparent:true}));
      const coinCount=10;const coins=new T.InstancedMesh(coinGeometry,[coinSide,coinCap,coinCap],coinCount);coins.instanceMatrix.setUsage(T.DynamicDrawUsage);coins.frustumCulled=false;scene.add(coins);
      const coinSeeds=Array.from({length:coinCount},(_,i)=>({angle:i/coinCount*Math.PI*2,radius:1.9+random()*.65,speed:.1+random()*.12,depth:(random()-.5)*1.5,fall:random()}));
      const sparkleTexture=canvasTexture(32,32,(ctx,w,h)=>{const gradient=ctx.createRadialGradient(w/2,h/2,0,w/2,h/2,w/2);gradient.addColorStop(0,'#ffffff');gradient.addColorStop(.2,'#ffffffc0');gradient.addColorStop(1,'#ffffff00');ctx.fillStyle=gradient;ctx.fillRect(0,0,w,h);});
      const particlePositions=new Float32Array(700*3);
      for(let i=0;i<700;i++){particlePositions[i*3]=(random()-.5)*16;particlePositions[i*3+1]=(random()-.5)*10;particlePositions[i*3+2]=-1-random()*4;}
      const particleGeometry=own(new T.BufferGeometry());particleGeometry.setAttribute('position',new T.BufferAttribute(particlePositions,3));
      const particleMaterial=own(new T.PointsMaterial({color:0xffe2c2,size:.036,map:sparkleTexture,transparent:true,opacity:.48,blending:T.AdditiveBlending,depthWrite:false}));
      const particles=new T.Points(particleGeometry,particleMaterial);particles.frustumCulled=false;scene.add(particles);
      const glowMaterial=own(new T.SpriteMaterial({map:sparkleTexture,color:colors.garena,transparent:true,opacity:.12,blending:T.AdditiveBlending,depthWrite:false}));
      const glow=new T.Sprite(glowMaterial);scene.add(glow);

      function applyQuality() {
        if(mobile()){const budget=window.MobileFX.budgets[mobileTier];if(!budget)return;renderer.setPixelRatio(Math.min(devicePixelRatio,budget.dpr));renderer.setSize(metrics.width,metrics.height,false);particleGeometry.setDrawRange(0,budget.particles);coins.count=budget.coins;cards.forEach((card,i)=>card.visible=i<budget.cards);for(const light of lights)light.visible=mobileTier==='HIGH';hud.tier=mobileTier;canvas.dataset.quality=mobileTier;hud.particles=String(budget.particles);canvas.dataset.dpr=String(renderer.getPixelRatio());document.body.classList.toggle('mobile-low',mobileTier==='LOW');return;}
        document.body.classList.remove('mobile-low');cards.forEach(card=>card.visible=true);for(const light of lights)light.visible=true;
        const count=quality==='high'?700:quality==='low'?250:100;
        renderer.setPixelRatio(quality==='high'?Math.min(devicePixelRatio,1.75):1);
        renderer.setSize(metrics.width,metrics.height,false);
        particleGeometry.setDrawRange(0,count);coins.count=quality==='minimal'?8:coinCount;
        canvas.dataset.quality=quality;hud.particles=String(count);canvas.dataset.dpr=String(renderer.getPixelRatio());
      }
      function downgrade() {
        if(quality==='minimal')return;
        quality=quality==='high'?'low':'minimal';downgraded=true;slowSeconds=0;applyQuality();
      }
      function measure() {
        metrics.width=innerWidth;metrics.height=mobile()?Math.round(canvas.getBoundingClientRect().height)||innerHeight:innerHeight;resizeWidth=innerWidth;resizeHeight=innerHeight;
        const scroll=window.lenis?.scroll || 0;
        const hero=document.querySelector('.hero').getBoundingClientRect();
        const art=document.querySelector('.hero__art').getBoundingClientRect();
        metrics.heroTop=hero.top+scroll;metrics.heroBottom=hero.bottom+scroll;
        metrics.artX=(art.left+art.width/2)/metrics.width;metrics.artTop=art.top+scroll;metrics.artHeight=art.height;metrics.artWidth=art.width;
        const catalog=document.querySelector('.catalog').getBoundingClientRect();
        metrics.pricingX=Math.min(.95,(catalog.right+65)/metrics.width);
        camera.aspect=metrics.width/metrics.height;camera.updateProjectionMatrix();
        if(!downgraded)quality=mobile()||constrained?'low':'high';
        applyQuality();desktopFX?.resize();if(mobile())applyQuality();ensureDesktop();requestStatic();
      }
      function assignBrand(id) {
        const order=[id,...brandIds.filter(brand=>brand!==id)];
        cards.forEach((card,index)=>{const next=order[index];card.userData.id=next;card.userData.material.color.set(colors[next]);card.userData.faceMaterial.map=textures.get(next);card.userData.faceMaterial.needsUpdate=true;});
        assignedBrand=id;canvas.dataset.brand=id;
      }
      function onBrandChange(event) {
        const id=event.detail?.id;if(!brandIds.includes(id)||id===currentBrand)return;currentBrand=id;
        flipTween?.kill();colorTween?.kill();
        const color=new T.Color(colors[id]);
        if(animate&&window.gsap){
          const start=flip.angle, end=Math.ceil(start/Math.PI+1)*Math.PI;let swapped=false;
          flipTween=window.gsap.to(flip,{angle:end,duration:.9,ease:'power3.inOut',onUpdate:()=>{if(!swapped&&(flip.angle-start)/(end-start)>=.5){swapped=true;assignBrand(id);}},onComplete:()=>assignBrand(id)});
          colorTween=window.gsap.to(brandLight.color,{r:color.r,g:color.g,b:color.b,duration:.9,ease:'power3.inOut'});
        }else{assignBrand(id);brandLight.color.copy(color);flip.angle=Math.round(flip.angle/Math.PI)*Math.PI;requestStatic();}
      }
      const mix=(a,b,t)=>a+(b-a)*t;
      const range=(value,a,b)=>T.MathUtils.smoothstep(value,a,b);
      function pose(dt, time) {
        const smoothing=animate?1-Math.exp(-dt*(mobile()?7.7:9)):1;
        smooth.progress=mix(smooth.progress,target.progress,smoothing);smooth.scroll=mix(smooth.scroll,target.scroll,smoothing);smooth.velocity=mix(smooth.velocity,target.velocity,smoothing);
        if(mobile()&&!matchMedia('(hover:hover) and (pointer:fine)').matches)pointer.set(0,0);
        pointerSmooth.lerp(pointer,animate?1-Math.exp(-dt*5):1);
        const p=smooth.progress;
        const benefits=range(p,.12,.32), prices=range(p,.30,.40)*(1-range(p,.66,.74)), closing=range(p,.69,.94);
        hud.phase=p<.15?'hero':p<.35?'benefits':p<.7?'prices':'closing';
        const z=6.6+benefits*.6-closing*1.15;camera.position.z=animate?z:6.6;
        const visibleHeight=2*Math.tan(T.MathUtils.degToRad(camera.fov/2))*camera.position.z;
        const visibleWidth=visibleHeight*camera.aspect;
        const heroX=(metrics.artX-.5)*visibleWidth;
        const heroY=(.5-(metrics.artTop+metrics.artHeight*.51-smooth.scroll)/metrics.height)*visibleHeight;
        const fit=Math.min(metrics.artWidth/metrics.width*visibleWidth/3.65,metrics.artHeight/metrics.height*visibleHeight/3.3);
        const leaveHero=range(smooth.scroll,metrics.heroBottom*.36,metrics.heroBottom*.78);
        const sideX=(mobile()?.28:mix(.35,metrics.pricingX-.5,prices))*visibleWidth;
        const baseX=mix(heroX,sideX,leaveHero);
        const baseY=mix(heroY,0,leaveHero);
        group.position.set(mix(baseX,0,closing),mix(baseY,.1,closing),0);
        const scale=mix(Math.min(fit,1.35),mobile()?.64:.84,leaveHero);
        group.scale.setScalar(scale*(1-prices*.12+closing*.2));
        // Reduced motion: a still card composition anchored to the hero; no drift, fan motion or particles.
        if(!animate){group.position.set(heroX,heroY,0);group.scale.setScalar(Math.min(fit,1.35));}
        group.rotation.set(animate?pointerSmooth.y*.13:0,animate?pointerSmooth.x*.13:0,0);
        cards.forEach((card,index)=>{
          const side=index===1?-1:index===2?1:0;
          card.position.set(side*mix(.85,1.15,closing),side?mix(.28,.12,closing):-.12,side?-.45: .38);
          if(animate){card.position.x+=side*prices*.45;card.position.z-=side?prices*1.8:0;card.position.y+=Math.sin(time*.65+index*1.7)*.055;}
          const opacity=index===0?1:1-prices*.85;
          card.userData.material.opacity=opacity;card.userData.faceMaterial.opacity=opacity;
          card.rotation.set(animate?Math.sin(time*.4+index)*.025:0,side*-.24+(index===0?flip.angle+prices*Math.sin(time*.2)*.13:0),side*-.21);
          if(index===0&&animate&&prices>.1)card.rotation.y+=Math.sin(time*.28)*.08;
        });
        const heroVisible=smooth.scroll<metrics.heroBottom;
        if(!animate){group.visible=heroVisible;coins.visible=heroVisible;particles.visible=false;}
        else{group.visible=true;coins.visible=true;particles.visible=true;}
        glow.visible=group.visible;glow.position.copy(group.position);glow.position.z=-2;
        glow.scale.set(7*group.scale.x,6*group.scale.x,1);glowMaterial.color.copy(brandLight.color);
        for(let i=0;i<coinCount;i++){
          const coin=coinSeeds[i],a=coin.angle+(animate?time*coin.speed:0)+benefits*.6;
          const radius=coin.radius*group.scale.x;
          const orbitX=group.position.x+Math.cos(a)*radius;
          const orbitY=group.position.y+Math.sin(a)*radius*.64;
          const rainX=(coin.fall-.5)*visibleWidth*1.3;
          const rainY=(.5-((coin.fall+(animate?time*.075:0))%1))*visibleHeight*1.4;
          scratch.position.set(mix(orbitX,rainX,closing),mix(orbitY,rainY,closing),coin.depth+.3);
          scratch.rotation.set(Math.PI/2+(animate?time*.2:0)+i*.35,a*.5,i*.4+(animate?time*.12:0));scratch.scale.setScalar(Math.min(1,group.scale.x)*(.6+coin.fall*.35));scratch.updateMatrix();coins.setMatrixAt(i,scratch.matrix);
        }
        coins.instanceMatrix.needsUpdate=true;
        if(animate){const speed=(.065+Math.min(Math.abs(smooth.velocity),30)*.015)*(1+closing);for(let i=0;i<particleGeometry.drawRange.count;i++){particlePositions[i*3+1]+=dt*speed;if(particlePositions[i*3+1]>5)particlePositions[i*3+1]=-5;}particleGeometry.attributes.position.needsUpdate=true;}
        lights.forEach((light,index)=>{const a=(animate&&(!mobile()||mobileTier==='HIGH')?time*.2:0)+index*Math.PI*2/3;light.position.set(group.position.x+Math.cos(a)*3,Math.sin(a)*2,2.5);});
        brandLight.position.x=group.position.x+.8;
        if(mobile()){
          // All mobile decoration stays in the reserved hero artwork box.
          const portrait=metrics.width<metrics.height,spread=portrait?.55:.85;
          camera.position.z=portrait?Math.max(6.6,3.1/(2*Math.tan(T.MathUtils.degToRad(camera.fov/2))*camera.aspect)):6.6;
          const vh=2*Math.tan(T.MathUtils.degToRad(camera.fov/2))*camera.position.z,vw=vh*camera.aspect;
          group.position.set((metrics.artX-.5)*vw,(.5-(metrics.artTop+metrics.artHeight*.46-smooth.scroll)/metrics.height)*vh,0);
          group.scale.setScalar(Math.min(metrics.artWidth/metrics.width*vw/2.85,metrics.artHeight/metrics.height*vh/2.95)*(portrait?.85:1));
          group.rotation.set(0,animate?Math.sin(smooth.progress*Math.PI*2)*.12:0,0);
          for(let i=0;i<cards.length;i++){const side=i===1?-1:i===2?1:0;cards[i].visible=mobileTier!=='LOW'||i===0;cards[i].position.x=side*spread;cards[i].position.z=side?-.32:.3;cards[i].rotation.z=side*-.16;}
          group.visible=metrics.artTop-smooth.scroll<innerHeight&&metrics.artTop+metrics.artHeight-smooth.scroll>0;coins.visible=group.visible;particles.visible=animate&&group.visible&&mobileTier!=='LOW';
          glow.visible=group.visible;glow.position.copy(group.position);glow.position.z=-2;glow.scale.set(4*group.scale.x,3*group.scale.x,1);
          for(let i=0;i<coins.count;i++){const c=coinSeeds[i],angle=c.angle+(animate?time*c.speed:0);scratch.position.set(group.position.x+Math.cos(angle)*group.scale.x*1.35,group.position.y+Math.sin(angle)*group.scale.x*1.1,c.depth);scratch.rotation.set(Math.PI/2,angle,0);scratch.scale.setScalar(group.scale.x*.45);scratch.updateMatrix();coins.setMatrixAt(i,scratch.matrix);}coins.instanceMatrix.needsUpdate=true;
          if(mobileTier!=='HIGH')for(const light of lights)light.visible=false;
        }
        particleTint.set(colors[assignedBrand]).lerp(white,.65);particleMaterial.color.lerp(particleTint,.02);
      }
      function draw(now) {
        frame=0;if(disposed||contextLost||document.hidden)return;
        const idle=now-lastActivity>30000;
        if(mobile()&&animate){const cap=window.MobileFX.frameRate(mobileTier,overlayOpen,idle);if(lastTime&&now-lastTime<1000/cap-.5){frame=requestAnimationFrame(draw);return;}}
        const wallDt=lastTime?Math.max(.001,(now-lastTime)/1000):1/60;const dt=Math.min(wallDt,.1);lastTime=now;
        if(animate)elapsed+=dt;
        renderer.info.reset();
        pose(dt,elapsed);
        let desktopActive=false;
        if(desktopFX){try{desktopActive=desktopFX.update(dt,elapsed,smooth,animate);if(desktopActive)desktopFX.render(dt,wallDt);}catch(error){failDesktop(error);desktopActive=false;}}
        if(!desktopActive)renderer.render(scene,camera);
        if(canvas.dataset.status==='loading'||canvas.dataset.status==='restoring')reportScene(animate?'running':'static');
        if(mobile()&&animate){mobileMonitor.sample(wallDt,overlayOpen||idle);if(disposed)return;}
        if(animate){
          fpsFrames++;fpsTime+=wallDt;
          if(fpsTime>=.5){const fps=fpsFrames/fpsTime;hud.fps=String(Math.round(fps));slowSeconds=fps<40?slowSeconds+fpsTime:0;fpsFrames=0;fpsTime=0;if(!desktopActive&&!mobile()&&slowSeconds>=2)downgrade();}
          frame=requestAnimationFrame(draw);
        }else{hud.fps='static';}
        flushHUD(performance.now());
      }
      function requestStatic() {
        if(disposed||contextLost||document.hidden||animate||staticPending)return;
        staticPending=true;frame=requestAnimationFrame(now=>{staticPending=false;draw(now);});
      }
      function start() { if(disposed||contextLost||document.hidden||frame)return;lastTime=0;frame=requestAnimationFrame(draw); }
      function stop() { cancelAnimationFrame(frame);frame=0;lastTime=0;staticPending=false; }
      function syncPreference() {
        stop();animate=window.gamecardApp.motionEnabled();
        if(!animate){flipTween?.kill();colorTween?.kill();assignBrand(currentBrand);flip.angle=Math.round(flip.angle/Math.PI)*Math.PI;pointer.set(0,0);pointerSmooth.set(0,0);}
        reportScene(animate?'running':'static');start();
      }
      function connectLenis() {
        detachScroll?.();const lenis=window.lenis;
        if(!lenis?.on)return;
        const update=instance=>{if(Math.abs(instance.velocity)>.1)lastActivity=performance.now();target.progress=instance.progress;target.scroll=instance.scroll;target.velocity=instance.velocity;if(!animate)requestStatic();};
        detachScroll=lenis.on('scroll',update);update(lenis);Object.assign(smooth,target);
      }
      listen(window,'lenisready',connectLenis);
      listen(window,'brandchange',onBrandChange);
      listen(window,'motionchange',syncPreference);
      listen(window,'resize',()=>{if(mobile()&&!window.MobileFX.resizeNeeded(innerWidth,innerHeight,resizeWidth,resizeHeight))return;clearTimeout(resizeTimer);resizeTimer=setTimeout(measure,150);},{passive:true});
      listen(window,'orientationchange',()=>{clearTimeout(orientationTimer);orientationTimer=setTimeout(measure,250);},{passive:true});
      listen(window,'layoutready',measure);
      listen(window,'modalchange',event=>{overlayOpen=event.detail.open;mobileMonitor.reset();lastActivity=performance.now();});
      listen(window,'pointerdown',()=>lastActivity=performance.now(),{passive:true});
      listen(window,'keydown',()=>lastActivity=performance.now());
      listen(document,'visibilitychange',()=>{if(document.hidden)stop();else{fpsFrames=0;fpsTime=0;slowSeconds=0;mobileMonitor.reset();lastActivity=performance.now();start();}});
      listen(document.querySelector('.hero'),'pointermove',event=>{if(!animate||event.pointerType==='touch'||!matchMedia('(hover:hover) and (pointer:fine)').matches)return;const rect=document.querySelector('.hero').getBoundingClientRect();pointer.set(T.MathUtils.clamp((event.clientX-rect.left)/rect.width*2-1,-1,1),T.MathUtils.clamp((event.clientY-rect.top)/rect.height*2-1,-1,1));},{passive:true});
      listen(document.querySelector('.hero'),'pointerleave',()=>pointer.set(0,0));
      listen(canvas,'webglcontextlost',event=>{event.preventDefault();contextLost=true;stop();reportScene('fallback');});
      listen(canvas,'webglcontextrestored',()=>{canvas.dataset.status='restoring';bootScene();});
      function failDesktop(error){console.error('[Desktop FX] disabled:',error);desktopFailed=true;try{desktopFX?.dispose();}catch{}desktopFX=null;applyQuality();window.dispatchEvent(new CustomEvent('desktop-intro-ready'));}
      function ensureDesktop(){
        if(disposed||desktopFX||desktopLoading||desktopFailed||fxFlag||innerWidth<1100||constrained||new URLSearchParams(location.search).get('fx')==='min')return;
        desktopLoading=true;
        loadDesktopModules().then(modules=>{
          if(disposed)return;
          try{desktopFX=createDesktopFX(T,modules,{hud,renderer,scene,camera,group,cards,coins,particles,particleGeometry,particlePositions,particleMaterial,glow,glowMaterial,brandLight,lights,textures,cardGeometry,faceGeometry,coinGeometry,coinSide,coinCap,sparkleTexture,canvasTexture,colors,metrics,own,listen,requestStatic,release:resource=>resources.delete(resource)});}catch(error){failDesktop(error);}
          requestStatic();
        }).catch(error=>{failDesktop(error);requestStatic();}).finally(()=>desktopLoading=false);
      }
      connectLenis();measure();assignBrand(document.querySelector('[role="tab"][aria-selected="true"]')?.dataset.brand||'garena');currentBrand=assignedBrand;
      // Render successfully before removing the original CSS cards; import/WebGL failure never blanks the hero.
      try{pose(1/60,0);renderer.render(scene,camera);reportScene(animate?'running':'static');start();}
      catch(error){dispose();throw error;}
      function dispose() {
        if(disposed)return;disposed=true;desktopFX?.dispose();stop();clearTimeout(hudTimer);clearTimeout(resizeTimer);clearTimeout(orientationTimer);detachScroll?.();flipTween?.kill();colorTween?.kill();cleanup.forEach(remove=>remove());
        for(const resource of resources)resource.dispose();renderer.dispose();scene.clear();document.body.classList.remove('webgl-ready');
      }
      return { dispose };
      } catch(error) {
        disposed=true;desktopFX?.dispose();cancelAnimationFrame(frame);clearTimeout(hudTimer);clearTimeout(resizeTimer);clearTimeout(orientationTimer);detachScroll?.();flipTween?.kill();colorTween?.kill();cleanup.forEach(remove=>remove());
        for(const resource of resources)resource.dispose();renderer.dispose();scene.clear();
        throw error;
      }
    }
```

## F3 — index.html · PerformanceGovernor


```js
class PerformanceGovernor {
      constructor(apply){this.level=0;this.bad=0;this.good=0;this.seconds=0;this.frames=0;this.apply=apply;}
      sample(dt){this.seconds+=dt;this.frames++;if(this.seconds<.5)return;const fps=this.frames/this.seconds;this.bad=fps<45?this.bad+this.seconds:0;this.good=fps>=58?this.good+this.seconds:0;this.seconds=0;this.frames=0;if((this.bad>=2)&&this.level<7){this.level++;this.bad=this.good=0;this.apply(this.level);}else if(this.good>=10&&this.level>0){this.level--;this.bad=this.good=0;this.apply(this.level);}}
      reset(){this.bad=this.good=this.seconds=this.frames=0;}
    }
```

## F3 — index.html · createDesktopFX.render


```js
function render(dt,wallDt=dt){if(disposedFX||!active)return;renderer.info.reset();composer.render(dt);frameCalls=renderer.info.render.calls;frameTriangles=renderer.info.render.triangles;hud.drawCalls=String(frameCalls);hud.triangles=String(frameTriangles);if(moving)governor.sample(wallDt);}
```

## F4 — index.html · createDesktopFX.Director

The requested update method is preserved. The registered update wrapper advances scene age so the existing intro timing remains intact.

```js
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
            r.update(dt,S,r);
            const d=Math.abs(r.rect.top+r.rect.height*.5-metrics.height*.5);
            if(d<best){best=d;focus=r.name;}
          }
          return focus;
        }
      }
```

## F5 — index.html · createDesktopFX.updatePricing


```js
function updatePricing(dt){const r=pricing.rect,order=anchors.get('order-panel').rect;const x=order.left+order.width*.5;const y=order.top+105;screenToWorld(x,y,0,stage.position);cardsGroup.position.copy(stage.position);cardsGroup.position.y+=.15;cardsGroup.scale.setScalar(Math.min(1,195*pxRatio(cardsGroup.position)/2.4));cards[1].visible=cards[2].visible=false;
        stage.scale.setScalar(Math.min(1,200*pxRatio(stage.position)/4.4));stage.updateMatrixWorld(true);grid.visible=S.activeBrand==='garena';stageShards.visible=rays.visible=S.activeBrand==='zing';stageCoins.visible=S.activeBrand==='vcoin';grid.material.color.set(colors[S.activeBrand]);grid.position.y=Math.sin(time*1.8)*.06;
        for(let i=0;i<18;i++){const a=i/12*Math.PI*2+time*.35;scratch.position.set(Math.cos(a)*1.15,Math.sin(a)*.7,Math.sin(a)*.5-.3);scratch.rotation.set(time*.3+i,time*.2+i,0);scratch.scale.setScalar(.6);scratch.updateMatrix();if(i<12)stageShards.setMatrixAt(i,scratch.matrix);scratch.position.set((i%3-1)*.55,1.6-((time*.7+i*.19)%3),-.7);scratch.rotation.x=Math.PI/2;scratch.scale.setScalar(.32);scratch.updateMatrix();stageCoins.setMatrixAt(i,scratch.matrix);if(i<8){scratch.position.set((i-3.5)*.23,0,-.8);scratch.rotation.set(0,0,.16);scratch.scale.set(1,1,1);scratch.updateMatrix();rays.setMatrixAt(i,scratch.matrix);}}
        stageShards.instanceMatrix.needsUpdate=stageCoins.instanceMatrix.needsUpdate=rays.instanceMatrix.needsUpdate=true;
        if(moving&&time>emberAt){emberAt=time+.15;v0.set((Math.random()-.5)*2,-1.1,.1);stageParticles.emit(v0,2,.3,.4);}stageParticles.update(dt,-.13);
        wipeMaterial.uniforms.t.value=moving?wipeMaterial.uniforms.t.value+dt*1.4:2;overlayMaterial.opacity=moving?faceMix.step(dt):faceMix.target;const height=moving?savingsSpring.step(dt):savingsSpring.target;stackCoins.count=Math.max(0,Math.min(20,Math.ceil(height*6)));for(let i=0;i<stackCoins.count;i++){scratch.position.set(-.95,-.8+i*.07,0);scratch.rotation.set(Math.PI/2,0,0);scratch.scale.setScalar(.65);scratch.updateMatrix();stackCoins.setMatrixAt(i,scratch.matrix);}stackCoins.instanceMatrix.needsUpdate=true;if(shownLabel)shownLabel.position.set(-.95,-.6+stackCoins.count*.07,.12);
        const best=bestRows.get(S.activeBrand);if(best){const b=best.getBoundingClientRect();star.visible=b.top>0&&b.bottom<metrics.height;if(star.visible){screenToWorld(b.left-16,b.top+b.height*.5,0,v0);const starSize=65*pxRatio(v0)/stage.scale.x;stage.worldToLocal(v0);star.position.copy(v0);star.scale.setScalar(starSize);star.rotation.y=time;}}else star.visible=false;
      }
```

## F6 — index.html · createDesktopFX / grid material


```js
const gridMat=own(soft.clone());
      const grid=own(new T.InstancedMesh(own(new T.TorusGeometry(.23,.008,3,6)),gridMat,35));stage.add(grid);for(let i=0;i<35;i++){scratch.position.set((i%7-3)*.42,-1.2,Math.floor(i/7)*.34-1);scratch.rotation.set(Math.PI/2,0,0);scratch.scale.setScalar(1);scratch.updateMatrix();grid.setMatrixAt(i,scratch.matrix);}
```

## F7 — index.html · createDesktopFX.text3D


```js
function text3D(label,size,material,parent){if(!/^[\x20-\x7e]*$/.test(label))throw new Error('3D text must be ASCII');let geometry;if(M.font){geometry=own(new M.TextGeometry(label,{font:M.font,size,height:.045,curveSegments:3,bevelEnabled:true,bevelThickness:.008,bevelSize:.006,bevelSegments:1}));geometry.computeBoundingBox();geometry.translate(-(geometry.boundingBox.max.x+geometry.boundingBox.min.x)/2,0,0);}else{geometry=own(new T.PlaneGeometry(size*label.length*.62,size));const tex=canvasTexture(512,128,(ctx)=>{ctx.fillStyle='#f5c542';ctx.font='bold 90px sans-serif';ctx.textAlign='center';ctx.fillText(label,256,99);});material=own(new T.MeshBasicMaterial({map:tex,transparent:true}));}return mesh(geometry,material,parent);}
```

## F8 — index.html · createDesktopFX.updateBenefits


```js
function updateBenefits(dt){for(let i=0;i<icons.length;i++){const icon=icons[i],anchor=anchors.get(`benefit-${i+1}`),rect=anchor.rect;screenToWorld(rect.left+(i?41:14),rect.top+14,0,icon.group.position);icon.pop.target=benefits.age>=i*.09?1:0;const pop=moving?icon.pop.step(dt):1;icon.group.scale.setScalar(40*pxRatio(icon.group.position)*pop);icon.group.rotation.set(icon.hover?screenPointer.y*.1:0,(moving?icon.spin.step(dt)+Math.sin(time*.4+i)*.15:0),-(1-pop)*Math.PI/2);if(icon.check)icon.check.geometry.setDrawRange(0,Math.floor(icon.check.geometry.index.count*Math.min(1,benefits.age*1.8)));if(i===3&&moving)for(const child of icon.group.children)if(child.userData.dot!==undefined)child.position.y=Math.sin(time*4+child.userData.dot)*.035;}}
```

## F9 — index.html · createScene.flushHUD

The complete createScene replacement, including its shared hudAt/hudTimer declarations and all HUD producers, is supplied in F2 / F9 above. Desktop producers are in the complete createDesktopFX block.

```js
function flushHUD(now){
        if(now-hudAt<250){if(!animate&&!hudTimer)hudTimer=setTimeout(()=>{hudTimer=0;if(!disposed)flushHUD(performance.now());},Math.ceil(250-(now-hudAt)));return;}
        hudAt=now;hud.drawCalls=renderer.info.render.calls;hud.triangles=renderer.info.render.triangles;hud.progress=smooth.progress.toFixed(3);
        hud.resources=renderer.info.memory.geometries+'g/'+renderer.info.memory.textures+'t';
        for(const key of Object.keys(hud)){const value=String(hud[key]);if(canvas.dataset[key]!==value)canvas.dataset[key]=value;}
      }
```

## F10 — index.html · createDesktopFX.updateSteps


```js
function updateSteps(){const p=stationProgress||steps.local;stepRail.getPoint(p,v3);for(let i=0;i<3;i++){const a=anchors.get(`step-${i+1}`),r=a.rect;screenToWorld(r.left+r.width*.68,r.top+59,0,stations[i].position);stations[i].scale.setScalar(90*pxRatio(stations[i].position));stations[i].rotation.y=(p*3-i-1)*.16+v3.x;const selected=Math.max(0,1-Math.abs(p*3-i-.5));const e=(.82+selected*.18).toFixed(2);if(stepNodes[i]._e!==e){stepNodes[i]._e=e;stepNodes[i].style.setProperty('--station-emphasis',e);}if(i===0){for(const card of stations[0].children){const angle=card.userData.carousel*Math.PI*2/3+time*.45;card.position.set(Math.cos(angle)*.45,0,Math.sin(angle)*.3);card.rotation.y=-angle*.2;}}}
        for(let i=0;i<16;i++){const t=(time*.45+i/16)%1;scratch.position.set(-.8*(1-t),.2+Math.sin(t*Math.PI)*.4,.1);scratch.rotation.set(Math.PI/2,time+i,0);scratch.scale.setScalar(.18);scratch.updateMatrix();transferCoins.setMatrixAt(i,scratch.matrix);}transferCoins.instanceMatrix.needsUpdate=true;delivered.rotation.y=Math.PI*2*T.MathUtils.smoothstep(p,.66,.9);for(let i=0;i<glyphs.length;i++){const t=T.MathUtils.smoothstep(p,.6+i*.006,.86+i*.006);glyphs[i].position.set((i-5.5)*.037*t,Math.sin(time+i)*(1-t)*.45,.15);glyphs[i].scale.setScalar(1-t);}
        for(let i=0;i<61;i++){const t=i/60,from=stations[t<.5?0:1].position,to=stations[t<.5?1:2].position,k=t<.5?t*2:(t-.5)*2;v0.copy(from).lerp(to,k);routeData[i*3]=v0.x;routeData[i*3+1]=v0.y-.4+Math.sin(k*Math.PI)*.1;routeData[i*3+2]=-.2;}routeGeometry.attributes.position.needsUpdate=true;routeGeometry.setDrawRange(0,Math.max(2,Math.floor(p*61)));}
```

## F11 — index.html · createDesktopFX.Pool


```js
class Pool {
        constructor(geometry,material,capacity,parent){this.capacity=capacity;this.cursor=0;this.armed=false;this.mesh=own(new T.InstancedMesh(geometry,material,capacity));this.mesh.instanceMatrix.setUsage(T.DynamicDrawUsage);this.mesh.frustumCulled=false;this.mesh.count=capacity;this.mesh.visible=false;parent.add(this.mesh);this.items=Array.from({length:capacity},()=>({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,total:1,size:1,spin:0,bounce:false}));this.live=0;for(let i=0;i<capacity;i++){scratch.scale.setScalar(0);scratch.updateMatrix();this.mesh.setMatrixAt(i,scratch.matrix);}}
        emit(position,n,force=2,size=.6,bounce=false,palette=null){this.armed=true;for(let i=0;i<Math.min(n,this.capacity);i++){const a=this.items[this.cursor];a.x=position.x;a.y=position.y;a.z=position.z;a.vx=(Math.random()-.5)*force;a.vy=(.3+Math.random())*force;a.vz=(Math.random()-.5)*force*.4;a.total=a.life=1.1+Math.random()*1.3;a.size=size*(.6+Math.random()*.5);a.spin=Math.random()*6;a.bounce=bounce;if(palette)this.mesh.setColorAt(this.cursor,palette[Math.floor(Math.random()*palette.length)]);this.cursor=(this.cursor+1)%this.capacity;}if(palette&&this.mesh.instanceColor)this.mesh.instanceColor.needsUpdate=true;}
        update(dt,gravity=1.5){if(!this.live&&!this.armed)return;this.armed=false;this.live=0;for(let i=0;i<this.capacity;i++){const a=this.items[i];if(a.life>0){a.life=Math.max(0,a.life-dt);a.vy-=gravity*dt;a.x+=a.vx*dt;a.y+=a.vy*dt;a.z+=a.vz*dt;if(a.bounce&&a.y< -2){a.y=-2;a.vy=Math.abs(a.vy)*.4;}this.live++;scratch.position.set(a.x,a.y,a.z);scratch.rotation.set(a.spin+time*2,time+a.spin,a.spin+time);scratch.scale.setScalar(a.size*Math.min(1,a.life/.4));}else scratch.scale.setScalar(0);scratch.updateMatrix();this.mesh.setMatrixAt(i,scratch.matrix);}this.mesh.visible=this.live>0;this.mesh.instanceMatrix.needsUpdate=true;this.armed=this.live>0;}
        clear(){this.armed=true;for(let i=0;i<this.capacity;i++)this.items[i].life=0;this.update(0);}
      }
```

## F12 — index.html · createDesktopFX.updatePricing

Center follows the order panel; the 4.4-unit widest stage plane is capped at 200 projected pixels. Existing card scaling is preserved.

```js
function updatePricing(dt){const r=pricing.rect,order=anchors.get('order-panel').rect;const x=order.left+order.width*.5;const y=order.top+105;screenToWorld(x,y,0,stage.position);cardsGroup.position.copy(stage.position);cardsGroup.position.y+=.15;cardsGroup.scale.setScalar(Math.min(1,195*pxRatio(cardsGroup.position)/2.4));cards[1].visible=cards[2].visible=false;
        stage.scale.setScalar(Math.min(1,200*pxRatio(stage.position)/4.4));stage.updateMatrixWorld(true);grid.visible=S.activeBrand==='garena';stageShards.visible=rays.visible=S.activeBrand==='zing';stageCoins.visible=S.activeBrand==='vcoin';grid.material.color.set(colors[S.activeBrand]);grid.position.y=Math.sin(time*1.8)*.06;
        for(let i=0;i<18;i++){const a=i/12*Math.PI*2+time*.35;scratch.position.set(Math.cos(a)*1.15,Math.sin(a)*.7,Math.sin(a)*.5-.3);scratch.rotation.set(time*.3+i,time*.2+i,0);scratch.scale.setScalar(.6);scratch.updateMatrix();if(i<12)stageShards.setMatrixAt(i,scratch.matrix);scratch.position.set((i%3-1)*.55,1.6-((time*.7+i*.19)%3),-.7);scratch.rotation.x=Math.PI/2;scratch.scale.setScalar(.32);scratch.updateMatrix();stageCoins.setMatrixAt(i,scratch.matrix);if(i<8){scratch.position.set((i-3.5)*.23,0,-.8);scratch.rotation.set(0,0,.16);scratch.scale.set(1,1,1);scratch.updateMatrix();rays.setMatrixAt(i,scratch.matrix);}}
        stageShards.instanceMatrix.needsUpdate=stageCoins.instanceMatrix.needsUpdate=rays.instanceMatrix.needsUpdate=true;
        if(moving&&time>emberAt){emberAt=time+.15;v0.set((Math.random()-.5)*2,-1.1,.1);stageParticles.emit(v0,2,.3,.4);}stageParticles.update(dt,-.13);
        wipeMaterial.uniforms.t.value=moving?wipeMaterial.uniforms.t.value+dt*1.4:2;overlayMaterial.opacity=moving?faceMix.step(dt):faceMix.target;const height=moving?savingsSpring.step(dt):savingsSpring.target;stackCoins.count=Math.max(0,Math.min(20,Math.ceil(height*6)));for(let i=0;i<stackCoins.count;i++){scratch.position.set(-.95,-.8+i*.07,0);scratch.rotation.set(Math.PI/2,0,0);scratch.scale.setScalar(.65);scratch.updateMatrix();stackCoins.setMatrixAt(i,scratch.matrix);}stackCoins.instanceMatrix.needsUpdate=true;if(shownLabel)shownLabel.position.set(-.95,-.6+stackCoins.count*.07,.12);
        const best=bestRows.get(S.activeBrand);if(best){const b=best.getBoundingClientRect();star.visible=b.top>0&&b.bottom<metrics.height;if(star.visible){screenToWorld(b.left-16,b.top+b.height*.5,0,v0);const starSize=65*pxRatio(v0)/stage.scale.x;stage.worldToLocal(v0);star.position.copy(v0);star.scale.setScalar(starSize);star.rotation.y=time;}}else star.visible=false;
      }
```

## F13 — index.html · createDesktopFX.layoutBand / resize / dispose


```js
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
```

## F13 — index.html · createDesktopFX creation and fonts-ready hook


```js
for(const root of roots)root.visible=false;director.measure();layoutBand();document.fonts?.ready.then(()=>{if(!disposedFX)layoutBand();});return {update,render,resize,dispose,domToWorld,S,apply:applyGovernor,get active(){return active;}};
```

## F14 — index.html · head module preloads


```html
<link rel="modulepreload" href="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js">
<link rel="modulepreload" href="https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/EffectComposer.js">
<link rel="modulepreload" href="https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/UnrealBloomPass.js">
```

## F14 — index.html · bootScene


```js
async function bootScene() {
      if(innerWidth>=1100&&(navigator.hardwareConcurrency||4)>4)loadDesktopModules().catch(()=>{});
      const id = ++bootId;
      if(new URLSearchParams(location.search).get('3d')==='off'){canvas.dataset.tier='OFF';reportScene('fallback');return;}
      try {
        if (!window.gamecardApp) await new Promise(resolve => window.addEventListener('gamecard-ready', resolve, { once:true }));
        const [THREE, { RoomEnvironment }] = await Promise.all([
          import('three'), import('three/addons/environments/RoomEnvironment.js')
        ]);
        await Promise.race([document.fonts.ready, new Promise(resolve => setTimeout(resolve, 1500))]);
        if (id !== bootId || pageInactive) return;
        sceneController?.dispose();
        sceneController = createScene(THREE, RoomEnvironment);
      } catch (error) {
        if (id !== bootId || pageInactive) return;
        sceneController?.dispose(); sceneController = null;
        reportScene('fallback');
        console.warn('[WebGL] CSS card fallback:', error.message);
      }
    }
```

## F15 — index.html · hero scene exit


```js
const hero=director.add('hero','.hero',updateHero,function(){this.group.visible=true;},()=>{hoverCard=-1;held=false;S.isDragging=false;dragCard=-1;clearTimeout(clickTimer);cards.forEach(c=>c.scale.setScalar(1));}),heroRoot=hero.group;
```

## F15 — index.html · confetti material, palette, emission

Pool.emit, including per-instance color assignment and instanceColor.needsUpdate, is supplied in full under F11. The existing tabchange/activeBrand midpoint behavior is preserved.

```js
const eventRoot=makeRoot(),confettiMat=own(new T.MeshStandardMaterial({color:0xffffff,metalness:.6,roughness:.3,side:T.DoubleSide}));
const confettiPalette=[0xf5c542,0xe11d1d,0x1e6fff,0xff8a00,0xffffff].map(color=>new T.Color(color));
function celebrate(count=400){if(!active||!moving)return;closing.group.getWorldPosition(v0);coinBursts.emit(v0,Math.floor(count*.3),3,.45,true);confetti.emit(v0,Math.ceil(count*.7),3.4,.8,true,confettiPalette);shock(v0);}
```

## C1 — style.css · desktop rules


```css
@media(min-width:1100px){
.showpiece-ready .order-panel{padding-top:234px;background:linear-gradient(#0000 210px,#111116 210px)}
}
```

## C2 — style.css · desktop rules


```css
@media(min-width:1100px){
.showpiece-ready .payment{background:linear-gradient(90deg,rgba(7,7,11,.9),rgba(7,7,11,.3))}
.showpiece-ready .payment-card{background:linear-gradient(100deg,#14141bf5 55%,#14141b80)}
}
```

## C3 — style.css · desktop rules

Replace the old hard-coded .showpiece-ready .how background rule.

```css
@media(min-width:1100px){
.showpiece-ready .how{background:linear-gradient(var(--text) var(--band-a,55%),transparent var(--band-a,55%) var(--band-b,70%),var(--text) var(--band-b,70%))}
.showpiece-ready .how-step{border-top-color:#ffffff40}
.showpiece-ready .how-step__arrow{color:var(--text)}
}
```

## C4 — style.css · layout and paint rules


```css
html{scrollbar-gutter:stable}
.webgl-ready .catalog{backdrop-filter:none;background:linear-gradient(#ffffff0f,#ffffff0f),linear-gradient(#09090ef2,#09090eef)}
.showpiece-ready .grain{display:none}
```

## Fixes not applied

None of F1–F15 or C1–C4 was omitted. Acceptance limitations are recorded separately in `desktop-patch-validation.md`; applying all requested blocks does not mean all visual/performance acceptance conditions have passed.
