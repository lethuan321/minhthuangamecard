/* Run with node tests/verify.cjs. No third-party test dependencies. */
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(require('node:path').join(__dirname,'../script.js'),'utf8').split('/* 09 / Boot')[0];
const memory = new Map();
let selected = false, removed = false, focused = false;
const context = vm.createContext({
  Intl, URL, console, assert, setTimeout, clearTimeout,
  window: { matchMedia: () => ({ matches: false }) },
  sessionStorage: { getItem:k=>memory.get(k)||null,setItem:(k,v)=>memory.set(k,v) },
  navigator: { clipboard: { writeText:async()=>{throw Error('Clipboard unavailable');} } },
  document: { activeElement:{focus:()=>{focused=true;}},querySelectorAll:()=>[],body:{append(){}},
    createElement:()=>({style:{},setAttribute(){},select(){selected=true;},setSelectionRange(){},remove(){removed=true;}}),
    execCommand:command=>command==='copy' }
});
vm.runInContext(source,context);
vm.runInContext(`
const expected = [
[[5000,5000],[10000,10000],[20000,19000],[50000,48000],[100000,96000],[200000,190000],[500000,480000]],
[[20000,20000],[50000,49000],[100000,98000],[200000,195000],[500000,485000],[1000000,970000]],
[[20000,20000],[50000,48000],[100000,96000],[200000,192000],[300000,288000],[500000,480000],[1000000,960000]]];
assert.equal(JSON.stringify(CARDS.map(c=>c.items)),JSON.stringify(expected));
assert.equal(CARDS.reduce((n,c)=>n+c.items.length,0),20);
assert.equal(money(1000000),'1.000.000đ');
state.cart=[{brand:'garena',face:100000,qty:2},{brand:'zing',face:50000,qty:1},{brand:'vcoin',face:1000000,qty:1}];
assert.equal(JSON.stringify(totals()),JSON.stringify({face:1250000,sale:1201000,saved:49000,count:4}));
state.method='vcb';const message=orderMessage();
assert.ok(message.includes('Thẻ Garena 100.000đ × 2: 192.000đ'));
assert.ok(message.includes('Tổng: 1.201.000đ'));
assert.ok(message.includes('Tiết kiệm: 49.000đ'));
assert.ok(message.includes('Vietcombank'));
saveCart();state.cart=[];state.method='momo';restoreCart();assert.equal(totals().count,4);assert.equal(state.method,'vcb');
writeSession(CONFIG.storageKey,JSON.stringify({method:'__proto__',cart:[{brand:'bad',face:100,qty:1},{brand:'garena',face:20000,qty:-1},{brand:'garena',face:20000,qty:0.5},{brand:'garena',face:20000,qty:999},{brand:'garena',face:20000,qty:5}]}));
state.cart=[];restoreCart();assert.equal(state.cart.length,1);assert.equal(state.cart[0].qty,99);assert.equal(state.method,'momo');
writeSession(CONFIG.storageKey,'{broken');state.cart=[];restoreCart();assert.equal(state.cart.length,0);
assert.equal(safeUrl('javascript:alert(1)'),'#lien-he');
assert.ok(safeUrl(CONFIG.contactUrl).startsWith('https://www.facebook.com/'));
`,context);
(async()=>{assert.equal(await vm.runInContext("copyText('0376271084')",context),true);assert.ok(selected&&removed&&focused);context.document.execCommand=()=>false;assert.equal(await vm.runInContext("copyText('9376271084')",context),false);console.log('PASS: 20 poster prices; mixed-order totals; Vietnamese currency; order text; session restore and validation; safe links; clipboard fallback and failure.');})().catch(error=>{console.error(error);process.exitCode=1;});
