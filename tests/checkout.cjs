const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),{webcrypto}=require('node:crypto');
const source=fs.readFileSync(require('node:path').join(__dirname,'../script.js'),'utf8').split('/* 09 / Boot')[0];
const events=[],copied=[],nodes=new Map();let stopped=0,started=0;
function node(){return {children:[],dataset:{},style:{},hidden:false,open:false,textContent:'',listeners:{},classList:{toggle(){},add(){},remove(){}},setAttribute(k,v){this[k]=v},append(...xs){this.children.push(...xs)},replaceChildren(...xs){this.children=xs},addEventListener(k,fn){(this.listeners[k]??=[]).push(fn)},showModal(){this.open=true},close(){this.open=false;for(const fn of this.listeners.close||[])fn()},getBoundingClientRect(){return {left:0,right:500,top:0,bottom:800}}};}
const ids=['qr-dialog','qr-close','qr-items','qr-face','qr-saved','qr-amount','qr-bank','qr-account','qr-code','qr-copy-account','qr-copy-amount','qr-copy-code','qr-image','qr-image-fallback','qr-bill','toast'];
for(const id of ids)nodes.set('#'+id,node());
const context=vm.createContext({Intl,URL,URLSearchParams,Uint8Array,crypto:webcrypto,console,assert,setTimeout:()=>0,clearTimeout(){},CustomEvent:class{constructor(type,options){this.type=type;this.detail=options.detail;}},window:{matchMedia:()=>({matches:false}),dispatchEvent:e=>events.push(e)},navigator:{clipboard:{writeText:async value=>copied.push(value)}},document:{querySelector:s=>s==='dialog[open]'?[...nodes.values()].find(n=>n.open):nodes.get(s),querySelectorAll:()=>[],body:node(),documentElement:node(),createElement:()=>node(),createElementNS:()=>node()},sessionStorage:{getItem:()=>null,setItem(){}}});
vm.runInContext(source,context);
vm.runInContext(`
assert.equal(CONFIG.sepay.enabled,false);
const zing=CARDS.find(brand=>brand.id==='zing');
assert.equal(String(zing.items.length).padStart(2,'0'),'06');
assert.equal(JSON.stringify(zing.items.map(([face,sale])=>face-sale)),JSON.stringify([0,1000,1000,3000,10000,25000]));
assert.equal(zing.items.filter(([face,sale])=>face-sale===Math.max(...zing.items.map(([f,s])=>f-s)))[0][0],1000000);
for(const [face,sale] of zing.items){
 const selection=[{brand:'zing',face,qty:1}];
 assert.equal(qrEligible(selection),face>=CONFIG.sepay.threshold);
 assert.equal(tryOpenQRPayment(selection),false);
 if(face>=CONFIG.sepay.threshold){assert.equal(buildQRPayment(selection).amount,sale);assert.equal(buildQRPayment([{brand:'zing',face,qty:2}]).amount,sale*2);}
}
assert.equal(new URL(buildQRPayment([{brand:'zing',face:1000000,qty:1}]).url).searchParams.get('amount'),'975000');
CONFIG.sepay.threshold=50000;assert.equal(qrEligible([{brand:'zing',face:50000,qty:1}]),true);CONFIG.sepay.threshold=100000;
const high=[{brand:'garena',face:100000,qty:2}],low=[{brand:'garena',face:50000,qty:1}];
assert.equal(qrEligible(low),false);assert.equal(qrEligible(high),true);assert.equal(qrEligible([...high,...low]),false);assert.equal(qrEligible([]),false);
assert.equal(tryOpenQRPayment(high),false);
const payment=buildQRPayment(high),url=new URL(payment.url);
assert.equal(payment.amount,194000);assert.equal(payment.saved,6000);assert.equal(url.origin,'https://qr.sepay.vn');assert.equal(url.searchParams.get('amount'),'194000');assert.equal(url.searchParams.get('acc'),'9376271084');assert.equal(url.searchParams.get('bank'),'Vietcombank');assert.match(payment.code,/^MTGC[A-Z0-9]{6}$/);assert.equal(url.searchParams.get('des'),payment.code);
for(let i=0;i<100;i++)assert.match(transferCode(),/^MTGC[A-Z0-9]{6}$/);
assert.throws(()=>buildQRPayment([{brand:'garena',face:100000,qty:0}]));assert.throws(()=>buildQRPayment([{brand:'garena',face:100000,qty:1.5}]));assert.throws(()=>buildQRPayment([{brand:'missing',face:100000,qty:1}]));
assert.throws(()=>buildQRPayment([{brand:'vcoin',face:1000000,qty:99},{brand:'zing',face:1000000,qty:99}]));
CONFIG.sepay.prefix='BAD PREFIX';assert.throws(()=>transferCode());CONFIG.sepay.prefix='MTGC';
initQRDialog();CONFIG.sepay.enabled=true;assert.equal(tryOpenQRPayment(low),false);assert.equal(tryOpenQRPayment([...high,...low]),false);assert.equal(tryOpenQRPayment(high),true);
for(const [face,sale] of zing.items){
 const opened=tryOpenQRPayment([{brand:'zing',face,qty:1}]);
 assert.equal(opened,face>=CONFIG.sepay.threshold);
 if(opened){assert.equal($('#qr-amount').textContent,money(sale));assert.equal($('#qr-copy-amount').dataset.copyValue,String(sale));}
}
tryOpenQRPayment(high);
assert.equal($('#qr-dialog').open,true);assert.equal($('#qr-amount').textContent,'194.000đ');assert.equal($('#qr-copy-amount').dataset.copyValue,'194000');assert.equal($('#qr-copy-account').dataset.copyValue,'9376271084');assert.equal($('#qr-items').children.length,1);
$('#qr-image').listeners.error[0]();assert.equal($('#qr-image').hidden,true);assert.equal($('#qr-image-fallback').hidden,false);assert.ok($('#qr-code').textContent);
`,context);
(async()=>{
 for(const field of ['account','amount','code'])await nodes.get('#qr-copy-'+field).listeners.click[0]();
 assert.equal(copied[0],'9376271084');assert.equal(copied[1],'194000');assert.match(copied[2],/^MTGC[A-Z0-9]{6}$/);
 assert.equal(events.filter(e=>e.type==='copysuccess').length,3);assert.ok(events.some(e=>e.type==='modalchange'&&e.detail.open));
 vm.runInContext("closeDialog($('#qr-dialog'))",context);assert.ok(events.some(e=>e.type==='modalchange'&&!e.detail.open));
 console.log('PASS: disabled/manual/mixed/high-value routing; exact QR amount and code; invalid amounts; image-error text fallback; three clipboard actions and existing modal/copy events.');
})().catch(error=>{console.error(error);process.exitCode=1});
