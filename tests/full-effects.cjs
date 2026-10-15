const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const h=fs.readFileSync('index.html','utf8'),a=fs.readFileSync('script.js','utf8'),policy=require('../mobile-policy.js');
function section(start,end){const i=h.indexOf(start);assert.ok(i>=0,start);const j=h.indexOf(end,i);assert.ok(j>i,end);return h.slice(i,j);}
for(const flag of [null,'high','lite'])assert.equal(policy.chooseTier({flag,memory:1,cores:1,saveData:true,effectiveType:'2g'}),'HIGH');
assert.equal(policy.chooseTier({flag:'off'}),'OFF');let changes=0;const monitor=new policy.Monitor('HIGH',()=>changes++);for(let i=0;i<600;i++)monitor.sample(.1);assert.equal(changes,0);assert.equal(policy.frameRate('LOW',true,true),Infinity);
const sizes=[],pixel=[];const ctx=vm.createContext({disposedFX:false,governorLevel:7,governor:{level:7},bloom:{},glass:{},warp:{},ambient:{},baseTier:'HIGH',devicePixelRatio:3,innerWidth:1440,metrics:{width:1440,height:900},renderer:{setPixelRatio:x=>pixel.push(x),setSize:(...x)=>sizes.push(x)},composer:{setPixelRatio:x=>pixel.push(x),setSize:(...x)=>sizes.push(x)},particleGeometry:{setDrawRange(a,b){this.count=b;}},particles:{},comet:{},S:{},hud:{},canvas:{dataset:{}},Math});
vm.runInContext(section('      function applyGovernor(level)','      function setTheme(')+';applyGovernor(7)',ctx);
assert.equal(ctx.governorLevel,0);assert.equal(ctx.bloom.enabled,true);assert.equal(ctx.glass.visible,true);assert.equal(ctx.warp.enabled,true);assert.equal(ctx.ambient.count,60);assert.equal(ctx.particleGeometry.count,700);assert.equal(ctx.comet.visible,true);assert.deepEqual(pixel,[1.5,1.5]);
ctx.metrics.width=390;ctx.innerWidth=390;vm.runInContext('applyGovernor(99)',ctx);assert.deepEqual(pixel.slice(-2),[2,2]);
let disposed=0,stops=0,fallbacks=0;const errCtx=vm.createContext({lastError:'',hardFailure:false,console:{error(){}},renderer:{getContext:()=>({isContextLost:()=>false})},desktopFX:{dispose(){disposed++;}},stop(){stops++;},document:{body:{classList:{remove(){}}}},reportScene(){fallbacks++;},window:{dispatchEvent(){}},CustomEvent:class{},String,Error});
vm.runInContext(section('      function failDesktop(error){','      renderer.debug.onShaderError='),errCtx);
vm.runInContext("failDesktop(new Error('temporary scene issue'))",errCtx);assert.equal(disposed,0);assert.equal(stops,0);assert.equal(fallbacks,0);
vm.runInContext("failDesktop(new Error('WebGL shader compile error'))",errCtx);assert.equal(disposed,1);assert.equal(stops,1);assert.equal(fallbacks,1);
const ensure=section('      function ensureDesktop(){','      connectLenis();measure();');assert.ok(!/constrained|innerWidth|hardwareConcurrency|deviceMemory/.test(ensure));assert.ok(!ensure.includes('||fxFlag||'));
const draw=section('      function draw(now)','      function requestStatic()');assert.ok(!/frameRate|downgrade|idle|overlayOpen/.test(draw));
assert.match(a,/function motionEnabled\(\)\{return true;\}/);assert.match(a,/duration:1.2/);assert.ok(!a.includes("readSession(CONFIG.introKey))return"));
console.log('PASS: full quality survives slow hardware/network, all governor inputs, mobile DPR, nonfatal scene errors, reduced motion policy; explicit flags and hard GPU fallback retained.');
