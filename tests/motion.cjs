/* Regression checks for the persistent scroll engine. Run: node tests/motion.cjs */
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(require('node:path').join(__dirname, '../script.js'), 'utf8').split('/* 09 / Boot')[0];

function scenario(reduced) {
  const calls = { instances: [], ticker: 0, stopped: 0, started: 0, modal: false };
  const classes = new Set();
  class FakeLenis {
    constructor(options) { this.options = options; this.scroll = 0; this.progress = 0; this.velocity = 0; this.isStopped = false; calls.instances.push(this); }
    on() { return () => {}; } off() {} resize() {}
    stop() { this.isStopped = true; calls.stopped++; }
    start() { this.isStopped = false; calls.started++; }
    destroy() { this.destroyed = true; }
  }
  const root = { dataset:{}, style: { removeProperty() {} }, classList: { add: c => classes.add(c), remove: c => classes.delete(c), toggle() {} } };
  const document = { hidden: false, documentElement: root, body: root, querySelector: selector => selector === 'dialog[open]' && calls.modal ? {} : null, querySelectorAll: () => [], addEventListener() {}, dispatchEvent() {} };
  const window = { Lenis: FakeLenis, matchMedia: query => ({ matches: query.includes('reduced-motion') && reduced, addEventListener() {} }), addEventListener() {}, dispatchEvent() {}, ScrollTrigger: { update() {}, refresh() {} } };
  const context = vm.createContext({ window, document, Lenis: FakeLenis, Intl, URL, URLSearchParams, location: { search: '' }, console, CustomEvent: class { constructor(type, options) { this.type = type; this.detail = options?.detail; } }, setTimeout, clearTimeout, performance, gsap: { registerPlugin() {}, ticker: { add() { calls.ticker++; }, remove() {}, lagSmoothing() {} } }, ScrollTrigger: window.ScrollTrigger });
  vm.runInContext(source, context);
  vm.runInContext('initLenis()', context);
  assert.ok(window.lenis instanceof FakeLenis, `Lenis must initialize when reduced motion = ${reduced}`);
  assert.equal(calls.instances.length, 1);
  assert.equal(window.lenis.options.duration, 1.2);
  assert.equal(window.lenis.options.autoRaf, true);
  assert.equal(window.lenis.options.syncTouch, false);
  assert.equal(window.lenis.options.respectReducedMotion, false, 'Keep the full-effects duration instead of library bypass');
  assert.equal(window.lenis.options.anchors.offset, -72);
  assert.equal(window.lenis.options.lerp, undefined);
  assert.equal(window.lenis.options.easing, undefined);
  assert.equal(calls.ticker, 0, 'No second Lenis RAF driver');
  vm.runInContext('initLenis()', context);
  assert.equal(calls.instances.length, 1, 'Repeated initialization must reuse the instance');
  const original = window.lenis;
  vm.runInContext('stopMotion()', context);
  assert.equal(window.lenis, original, 'Pausing decoration must preserve Lenis');
  assert.ok(!original.destroyed);
  calls.modal = true; vm.runInContext('syncModalLock()', context); assert.ok(original.isStopped);
  calls.modal = false; vm.runInContext('syncModalLock()', context); assert.ok(!original.isStopped);
}
scenario(true);
scenario(false);
console.log('PASS: Lenis in both motion modes; one instance and one driver; modal restart; decorative pause isolation.');
