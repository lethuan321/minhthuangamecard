const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const h=fs.readFileSync('index.html','utf8');
function section(a,b){return h.slice(h.indexOf(a),h.indexOf(b,h.indexOf(a)));}
const primitives=section('    class Spring','    /* D0 / Desktop showpiece');
const ctx=vm.createContext({Math});vm.runInContext(primitives+';this.G=PerformanceGovernor;',ctx);const gov=new ctx.G(()=>{});for(let i=0;i<1200;i++)gov.sample(1/60,999,9999999);assert.equal(gov.level,0);
let writes=0,colors=0;const vec={set(){},setScalar(){}};const scratch={scale:vec,position:vec,rotation:vec,updateMatrix(){}};
class InstancedMesh{constructor(){this.instanceMatrix={setUsage(){}};this.instanceColor={};}setMatrixAt(){writes++;}setColorAt(){colors++;}}
const poolCtx=vm.createContext({T:{InstancedMesh,DynamicDrawUsage:1},own:x=>x,Array,Math,scratch,time:0});
vm.runInContext(section('      class Pool','      const confettiPalette')+';this.P=Pool;',poolCtx);
const pool=new poolCtx.P({}, {}, 4,{add(){}});writes=0;pool.update(1/60);assert.equal(writes,0);assert.equal(pool.mesh.visible,false);pool.emit({x:0,y:0,z:0},2,1,1,false,[{},{}]);assert.equal(colors,2);pool.update(3);pool.update(0);writes=0;pool.update(1/60);assert.equal(writes,0);pool.clear();assert.equal(writes,4);
const events=[],scenes=[],rects=[{top:20,bottom:90,height:70},{top:30,bottom:100,height:70}];let which=0;
const directorCtx=vm.createContext({document:{querySelector(){const i=which++;return {getBoundingClientRect(){events.push('read'+i);return rects[i];}};}},makeRoot:()=>({visible:false}),scenes,sceneByName:new Map(),metrics:{height:800},S:{progress:999},T:{MathUtils:{clamp:(x,a,b)=>Math.max(a,Math.min(b,x))}},Infinity,Math});
vm.runInContext(section('      class Director','      const director=')+';this.D=Director;',directorCtx);
const d=new directorCtx.D();d.add('one','one',()=>events.push('update0'));d.add('two','two',()=>events.push('update1'));d.update(.1);assert.deepEqual(events,['read0','read1','update0','update1']);assert.ok(scenes.every(s=>s.live));assert.equal(scenes[0].age,.1);rects[1].top=900;d.update(.1);assert.equal(scenes[1].group.visible,false);
let mutations=0;const data={};const hudCtx=vm.createContext({hudAt:-Infinity,hudTimer:0,animate:true,disposed:false,hud:{tier:'HIGH',phase:'hero'},renderer:{info:{render:{calls:4,triangles:100},memory:{geometries:3,textures:2}}},smooth:{progress:0},canvas:{dataset:new Proxy(data,{set(o,k,v){mutations++;o[k]=v;return true;}})},Object,String,Math});
vm.runInContext(section('      function flushHUD(now)','      const scratch ='),hudCtx);vm.runInContext('flushHUD(0)',hudCtx);const first=mutations;vm.runInContext("hud.phase='pricing';flushHUD(249)",hudCtx);assert.equal(mutations,first);vm.runInContext('flushHUD(250)',hudCtx);assert.equal(mutations,first+1);vm.runInContext('flushHUD(500)',hudCtx);assert.equal(mutations,first+1);
console.log('PASS: FPS-only governor; idle-free pooled writes and palette; two-pass position gating and age; changed-only HUD at 250ms.');
