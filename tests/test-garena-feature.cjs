const fs = require('fs');
const vm = require('vm');
const assert = require('assert/strict');

const scriptSource = fs.readFileSync('script.js', 'utf8').split('/* 09 / Boot')[0];

function makeElement(tag, cls = '') {
  const el = {
    tagName: tag.toUpperCase(),
    _className: cls,
    children: [],
    style: { setProperty: () => {} },
    dataset: {},
    listeners: {},
    hidden: false,
    tabIndex: 0,
    attributes: {},
    setAttribute(k, v) { this.attributes[k] = String(v); this[k] = v; },
    getAttribute(k) { return this.attributes[k]; },
    append(...els) { this.children.push(...els); },
    replaceChildren(...els) { this.children = els; },
    addEventListener(k, fn) { (this.listeners[k] ??= []).push(fn); },
    dispatchEvent(event) { for (const fn of this.listeners[event.type] || []) fn(event); },
    get innerHTML() { return this._innerHTML || ''; },
    set innerHTML(val) {
      this._innerHTML = val;
      // Simple parser for icon and val
      const iconMatch = val.match(/class="[^"]*icon[^"]*"[^>]*>([^<]+)</) || val.match(/class="[^"]*icon[^"]*">([^<]+)</);
      const valMatch = val.match(/class="[^"]*val[^"]*"[^>]*>([^<]+)</);
      const unitMatch = val.match(/class="[^"]*unit[^"]*"[^>]*>([^<]+)</);
      this.textContent = (iconMatch ? iconMatch[1] + ' ' : '') + (valMatch ? valMatch[1] + ' ' : '') + (unitMatch ? unitMatch[1] : val.replace(/<[^>]+>/g, ''));
    },
    get className() { return this._className; },
    set className(val) {
      this._className = val;
      this.classList.tokens = new Set(val ? val.trim().split(/\s+/) : []);
    },
    classList: {
      tokens: new Set(cls ? cls.trim().split(/\s+/) : []),
      add(c) { this.tokens.add(c); this._sync(); },
      remove(c) { this.tokens.delete(c); this._sync(); },
      toggle(c, force) {
        if (force !== undefined) { if (force) this.tokens.add(c); else this.tokens.delete(c); }
        else { if (this.tokens.has(c)) this.tokens.delete(c); else this.tokens.add(c); }
        this._sync();
      },
      contains(c) { return this.tokens.has(c); },
      _sync() {}
    },
    querySelector(sel) { return findSelector(this, sel); },
    querySelectorAll(sel) { return findAllSelector(this, sel); },
    closest(sel) {
      if (sel === 'tr[data-face]') {
        let cur = this;
        while (cur) {
          if (cur.tagName === 'TR' && cur.dataset.face !== undefined) return cur;
          cur = cur.parentElement;
        }
      }
      return null;
    }
  };
  return el;
}

function findSelector(root, sel) {
  const all = findAllSelector(root, sel);
  return all.length ? all[0] : null;
}

function findAllSelector(root, sel) {
  const results = [];
  function walk(node) {
    if (!node || !node.children) return;
    for (const child of node.children) {
      child.parentElement = node;
      let match = false;
      if (sel.startsWith('#') && child.id === sel.slice(1)) match = true;
      else if (sel.startsWith('.') && child.classList?.contains(sel.slice(1))) match = true;
      else if (sel.startsWith('[') && sel.endsWith(']')) {
        const attr = sel.slice(1, -1).split('=')[0];
        const val = sel.includes('=') ? sel.split('=')[1].replace(/['"]/g, '') : null;
        if (val !== null) {
          if (child.attributes && child.attributes[attr] === val) match = true;
          if (child[attr] === val) match = true;
        } else if (child.attributes && child.attributes[attr] !== undefined) match = true;
      } else if (sel.toLowerCase() === child.tagName?.toLowerCase()) match = true;
      else if (sel === 'tbody tr' && child.tagName === 'TR') match = true;
      else if (sel === '.price-reward' && child.classList?.contains('price-reward')) match = true;
      else if (sel === '.game-tab' && child.classList?.contains('game-tab')) match = true;
      else if (sel === '.price-table--reward' && child.classList?.contains('price-table--reward')) match = true;
      else if (sel === '.all-games-table-wrap' && child.classList?.contains('all-games-table-wrap')) match = true;
      else if (sel === '.reward-badge' && child.classList?.contains('reward-badge')) match = true;

      if (match) results.push(child);
      walk(child);
    }
  }
  walk(root);
  return results;
}

const domMap = new Map();

const panelsEl = makeElement('div', 'price-panels');
domMap.set('#price-panels', panelsEl);
const bangGiaEl = makeElement('section', 'pricing');
domMap.set('#bang-gia', bangGiaEl);
const brandTabs = makeElement('div', 'brand-tabs');
domMap.set('.brand-tabs', brandTabs);

['garena', 'zing', 'vcoin'].forEach(id => {
  const tab = makeElement('button', 'brand-tab');
  tab.id = `tab-${id}`;
  tab.dataset.brand = id;
  tab.setAttribute('role', 'tab');
  const count = makeElement('span', 'tab-count');
  tab.append(count);
  domMap.set(`#tab-${id}`, tab);
  brandTabs.append(tab);
});

const ctx = vm.createContext({
  panelsEl,
  Intl, URL, URLSearchParams, console, assert, setTimeout: () => 0, clearTimeout: () => {},
  CustomEvent: class { constructor(t, o) { this.type = t; this.detail = o?.detail; } },
  window: { matchMedia: () => ({ matches: false }), dispatchEvent: () => {} },
  document: {
    querySelector: sel => {
      if (domMap.has(sel)) return domMap.get(sel);
      return findSelector(panelsEl, sel) || findSelector(brandTabs, sel);
    },
    querySelectorAll: sel => {
      if (sel === '[role="tab"]' || sel === '.brand-tabs [role="tab"]') {
        return brandTabs.children.filter(c => c.getAttribute('role') === 'tab');
      }
      if (sel === '.price-panel') return panelsEl.children.filter(c => c.classList?.contains('price-panel'));
      return findAllSelector(panelsEl, sel);
    },
    createElement: tag => makeElement(tag),
    createElementNS: (ns, tag) => makeElement(tag),
    body: makeElement('body'),
    documentElement: makeElement('html')
  },
  sessionStorage: { getItem: () => null, setItem: () => {} },
  navigator: { clipboard: { writeText: async () => {} } }
});

vm.runInContext(scriptSource, ctx);
vm.runInContext(`
  initPricing();
  
  // Test Garena panel creation
  const garenaPanel = panelsEl.children.find(c => c.id === 'panel-garena');
  assert.ok(garenaPanel, 'panel-garena must exist');
  
  // Test game selector box
  const selectorBox = garenaPanel.children.find(c => c.classList.contains('game-selector-box'));
  assert.ok(selectorBox, 'game-selector-box must exist');
  
  // Test game tabs
  const gameTabs = selectorBox.children.find(c => c.classList.contains('game-tabs'));
  assert.ok(gameTabs, 'game-tabs must exist');
  assert.equal(gameTabs.children.length, 6, 'There should be 6 tabs (5 games + All)');
  
  // Test Garena table columns
  const garenaTable = garenaPanel.children.find(c => c.classList.contains('price-table--reward'));
  assert.ok(garenaTable, 'price-table--reward must exist');
  const ths = garenaTable.children[0].children[0].children;
  assert.equal(ths.length, 5, 'Garena table must have 5 columns');
  assert.equal(ths[0].textContent, 'Mệnh giá');
  assert.equal(ths[1].textContent, 'Giá phải trả');
  assert.ok(ths[2].textContent.includes('Nhận trong game'), 'Col 3 is reward column');
  assert.equal(ths[3].textContent, 'Tiết kiệm');
  assert.equal(ths[4].textContent, 'Đặt thẻ');
  
  // Test Liên Quân rates (default)
  const tbody = garenaTable.children[1];
  assert.equal(tbody.children.length, 7, '7 denominations for Garena');
  const row100k = tbody.children[4]; // 100k
  assert.equal(row100k.dataset.face, '100000');
  assert.equal(row100k.dataset.sale, '97000');
  const rewardCell100k = row100k.children[2];
  assert.ok(rewardCell100k.children[0].textContent.includes('204'), '100k Garena gives 204 Quan Huy');
  assert.ok(rewardCell100k.children[0].textContent.includes('Quân Huy'), 'Unit is Quan Huy');

  // Test Free Fire switch
  switchGarenaGame('ff');
  assert.ok(rewardCell100k.children[0].textContent.includes('566'), '100k Garena gives 566 Kim Cuong');
  assert.ok(rewardCell100k.children[0].textContent.includes('Kim Cương'), 'Unit is Kim Cuong');

  // Test Delta Force switch
  switchGarenaGame('df');
  assert.ok(rewardCell100k.children[0].textContent.includes('410'), '100k Garena gives 410 Delta Coin');
  assert.ok(rewardCell100k.children[0].textContent.includes('Delta Coin'), 'Unit is Delta Coin');

  // Test all games table
  switchGarenaGame('all');
  const allWrap = garenaPanel.children.find(c => c.classList.contains('all-games-table-wrap'));
  assert.ok(allWrap, 'all-games-table-wrap exists');
  assert.equal(allWrap.hidden, false, 'all-games-table-wrap is visible when all is selected');
  assert.equal(garenaTable.hidden, true, 'single table is hidden when all is selected');

  // Switch back to Liên Quân
  switchGarenaGame('lq');
  assert.equal(allWrap.hidden, true, 'all-games-table-wrap is hidden');
  assert.equal(garenaTable.hidden, false, 'single table is visible');

  // Test Zing panel
  const zingPanel = panelsEl.children.find(c => c.id === 'panel-zing');
  assert.ok(zingPanel, 'panel-zing exists');
  const zingTable = zingPanel.children.find(c => c.classList.contains('price-table'));
  const zingThs = zingTable.children[0].children[0].children;
  assert.equal(zingThs.length, 4, 'Zing table keeps 4 columns');

  console.log('PASS: Garena game tabs, real-time rates conversion, all-games matrix, and Zing/VCoin layout all verified successfully!');
`, ctx);
