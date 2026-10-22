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
    append(...els) {
      for (const child of els) {
        child.parentElement = this;
        this.children.push(child);
      }
    },
    replaceChildren(...els) {
      for (const child of els) child.parentElement = this;
      this.children = els;
    },
    addEventListener(k, fn) { (this.listeners[k] ??= []).push(fn); },
    dispatchEvent(event) { for (const fn of this.listeners[event.type] || []) fn(event); },
    get innerHTML() { return this._innerHTML || ''; },
    set innerHTML(val) {
      this._innerHTML = val;
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
      add(c) { this.tokens.add(c); },
      remove(c) { this.tokens.delete(c); },
      toggle(c, force) {
        if (force !== undefined) { if (force) this.tokens.add(c); else this.tokens.delete(c); }
        else { if (this.tokens.has(c)) this.tokens.delete(c); else this.tokens.add(c); }
      },
      contains(c) { return this.tokens.has(c); }
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
      else if (sel.includes('.game-chip') && child.classList?.contains('game-chip')) match = true;
      else if (sel === '.price-reward' && child.classList?.contains('price-reward')) match = true;
      else if (sel === '.game-dropdown-select' && child.classList?.contains('game-dropdown-select')) match = true;
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
  window: { matchMedia: () => ({ matches: false }), dispatchEvent: () => {}, innerWidth: 1200, innerHeight: 800 },
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
  
  // --- 1. Test Garena panel & dropdown ---
  const garenaPanel = panelsEl.children.find(c => c.id === 'panel-garena');
  assert.ok(garenaPanel, 'panel-garena must exist');
  
  const garenaSelectorBox = garenaPanel.children.find(c => c.classList.contains('game-selector-box'));
  assert.ok(garenaSelectorBox, 'Garena game-selector-box must exist');
  
  const garenaSelect = garenaSelectorBox.querySelector('#game-select-garena');
  assert.ok(garenaSelect, '#game-select-garena dropdown must exist');
  assert.equal(garenaSelect.children.length, 6, 'Garena select must have 6 options (5 games + All)');
  
  const garenaTable = garenaPanel.children.find(c => c.classList.contains('price-table--reward'));
  assert.ok(garenaTable, 'Garena price-table--reward must exist');
  const garenaThs = garenaTable.children[0].children[0].children;
  assert.equal(garenaThs.length, 5, 'Garena table must have 5 columns');
  assert.equal(garenaThs[0].textContent, 'Mệnh giá');
  assert.equal(garenaThs[1].textContent, 'Giá phải trả');
  assert.ok(garenaThs[2].textContent.includes('Nhận trong game'), 'Col 3 is reward column');
  assert.equal(garenaThs[3].textContent, 'Tiết kiệm');
  assert.equal(garenaThs[4].textContent, 'Đặt thẻ');
  
  // Test Liên Quân rates (default)
  const garenaTbody = garenaTable.children[1];
  assert.equal(garenaTbody.children.length, 7, '7 denominations for Garena');
  const gRow100k = garenaTbody.children[4]; // 100k
  assert.equal(gRow100k.dataset.face, '100000');
  assert.equal(gRow100k.dataset.sale, '97000');
  const gRewardCell100k = gRow100k.children[2];
  assert.ok(gRewardCell100k.children[0].textContent.includes('204'), '100k Garena gives 204 Quan Huy');
  assert.ok(gRewardCell100k.children[0].textContent.includes('Quân Huy'), 'Unit is Quân Huy');

  // Test Free Fire switch
  switchGarenaGame('ff');
  assert.equal(garenaSelect.value, 'ff', 'Dropdown value syncs with switchGarenaGame');
  assert.ok(gRewardCell100k.children[0].textContent.includes('566'), '100k Garena gives 566 Kim Cuong');
  assert.ok(gRewardCell100k.children[0].textContent.includes('Kim Cương'), 'Unit is Kim Cương');

  // Test chip click on Free Fire
  const garenaChips = garenaSelectorBox.children.find(c => c.id === 'garena-quick-chips');
  assert.ok(garenaChips, 'Garena quick chips row exists for 1-tap mobile selection');
  const lqChip = garenaChips.children.find(c => c.dataset.game === 'lq');
  assert.ok(lqChip, 'LQ chip exists');
  lqChip.dispatchEvent({ type: 'click' });
  assert.equal(garenaSelect.value, 'lq', 'Clicking quick chip switches dropdown value');
  assert.ok(gRewardCell100k.children[0].textContent.includes('204'), '100k Garena switches back to 204 Quan Huy');

  // Test Delta Force switch
  switchGarenaGame('df');
  assert.equal(garenaSelect.value, 'df');
  assert.ok(gRewardCell100k.children[0].textContent.includes('410'), '100k Garena gives 410 Delta Coin');
  assert.ok(gRewardCell100k.children[0].textContent.includes('Delta Coin'), 'Unit is Delta Coin');

  // Test all games table for Garena
  switchGarenaGame('all');
  const garenaAllWrap = garenaPanel.children.find(c => c.classList.contains('all-games-table-wrap'));
  assert.ok(garenaAllWrap, 'garena all-games-table-wrap exists');
  assert.equal(garenaAllWrap.hidden, false, 'all-games-table-wrap is visible when all is selected');
  assert.equal(garenaTable.hidden, true, 'single table is hidden when all is selected');

  // Switch back to Liên Quân
  switchGarenaGame('lq');
  assert.equal(garenaAllWrap.hidden, true, 'all-games-table-wrap is hidden');
  assert.equal(garenaTable.hidden, false, 'single table is visible');

  // --- 2. Test Zing panel & dropdown (7 top games) ---
  const zingPanel = panelsEl.children.find(c => c.id === 'panel-zing');
  assert.ok(zingPanel, 'panel-zing exists');

  const zingSelectorBox = zingPanel.children.find(c => c.classList.contains('game-selector-box'));
  assert.ok(zingSelectorBox, 'Zing game-selector-box must exist');

  const zingSelect = zingSelectorBox.querySelector('#game-select-zing');
  assert.ok(zingSelect, '#game-select-zing dropdown must exist');
  assert.equal(zingSelect.children.length, 8, 'Zing select must have 8 options (7 games + All)');

  const zingTable = zingPanel.children.find(c => c.classList.contains('price-table--reward'));
  assert.ok(zingTable, 'Zing price-table--reward must exist');
  const zingThs = zingTable.children[0].children[0].children;
  assert.equal(zingThs.length, 5, 'Zing table must have 5 columns');
  assert.equal(zingThs[0].textContent, 'Mệnh giá');
  assert.equal(zingThs[1].textContent, 'Giá phải trả');
  assert.ok(zingThs[2].textContent.includes('Nhận trong game'), 'Col 3 is reward column');
  assert.equal(zingThs[3].textContent, 'Tiết kiệm');
  assert.equal(zingThs[4].textContent, 'Đặt thẻ');

  // Test VALORANT rates (default for Zing)
  const zingTbody = zingTable.children[1];
  assert.equal(zingTbody.children.length, 6, '6 denominations for Zing');
  const zRow100k = zingTbody.children[2]; // 100k
  assert.equal(zRow100k.dataset.face, '100000');
  assert.equal(zRow100k.dataset.sale, '99000');
  const zRewardCell100k = zRow100k.children[2];
  assert.ok(zRewardCell100k.children[0].textContent.includes('610'), '100k Zing gives 610 VP for VALORANT');
  assert.ok(zRewardCell100k.children[0].textContent.includes('VP'), 'Unit is VP');

  // Test switch to Tốc Chiến (Wild Cores)
  switchZingGame('wr');
  assert.equal(zingSelect.value, 'wr');
  assert.ok(zRewardCell100k.children[0].textContent.includes('525'), '100k Zing gives 525 Wild Cores');
  assert.ok(zRewardCell100k.children[0].textContent.includes('Wild Cores'), 'Unit is Wild Cores');

  // Test switch to PUBG Mobile VN (UC)
  switchZingGame('pubg');
  assert.equal(zingSelect.value, 'pubg');
  assert.ok(zRewardCell100k.children[0].textContent.includes('300'), '100k Zing gives 300 UC');
  assert.ok(zRewardCell100k.children[0].textContent.includes('UC'), 'Unit is UC');

  // Test switch to VLTK Mobile (Nguyên Bảo)
  switchZingGame('vltk');
  assert.equal(zingSelect.value, 'vltk');
  assert.ok(zRewardCell100k.children[0].textContent.includes('400'), '100k Zing gives 400 KNB');

  // Test switch to Kiếm Thế Origin (Nguyên Bảo)
  switchZingGame('kto');
  assert.equal(zingSelect.value, 'kto');
  assert.ok(zRewardCell100k.children[0].textContent.includes('400'), '100k Zing gives 400 KNB in Kiếm Thế');

  // Test switch to Play Together (Đá Quý)
  switchZingGame('pt');
  assert.equal(zingSelect.value, 'pt');
  assert.ok(zRewardCell100k.children[0].textContent.includes('110'), '100k Zing gives 110 Da Quy');

  // Test switch to Zing Xu
  switchZingGame('zx');
  assert.equal(zingSelect.value, 'zx');
  assert.ok(zRewardCell100k.children[0].textContent.includes('1.000'), '100k Zing gives 1.000 Zing Xu');

  // Test Zing all games table
  switchZingGame('all');
  const zingAllWrap = zingPanel.children.find(c => c.classList.contains('all-games-table-wrap'));
  assert.ok(zingAllWrap, 'zing all-games-table-wrap exists');
  assert.equal(zingAllWrap.hidden, false, 'all-games-table-wrap visible when all selected');
  assert.equal(zingTable.hidden, true, 'zing table hidden when all selected');

  // Switch back to VALORANT
  switchZingGame('val');
  assert.equal(zingAllWrap.hidden, true);
  assert.equal(zingTable.hidden, false);

  // --- 3. Test VCoin panel (NO dropdown, clean 4 columns) ---
  const vcoinPanel = panelsEl.children.find(c => c.id === 'panel-vcoin');
  assert.ok(vcoinPanel, 'panel-vcoin must exist');
  const vcoinSelectorBox = vcoinPanel.children.find(c => c.classList.contains('game-selector-box'));
  assert.equal(vcoinSelectorBox, undefined, 'VCoin must NOT have game-selector-box');
  
  const vcoinTable = vcoinPanel.children.find(c => c.classList.contains('price-table'));
  assert.ok(vcoinTable, 'VCoin price-table exists');
  assert.equal(vcoinTable.classList.contains('price-table--reward'), false, 'VCoin table is NOT price-table--reward');
  const vcoinThs = vcoinTable.children[0].children[0].children;
  assert.equal(vcoinThs.length, 4, 'VCoin table must have exactly 4 columns');
  assert.equal(vcoinThs[0].textContent, 'Mệnh giá');
  assert.equal(vcoinThs[1].textContent, 'Giá phải trả');
  assert.equal(vcoinThs[2].textContent, 'Tiết kiệm');
  assert.equal(vcoinThs[3].textContent, 'Đặt thẻ');

  // --- 4. Test Brand tab switching (must NEVER freeze on Garena) ---
  assert.equal(state.activeBrand, 'garena');
  assert.equal(garenaPanel.hidden, false);
  assert.equal(zingPanel.hidden, true);
  assert.equal(vcoinPanel.hidden, true);

  // Switch to Zing
  selectBrand('zing');
  assert.equal(state.activeBrand, 'zing');
  assert.equal(garenaPanel.hidden, true, 'Garena hidden after switching to Zing');
  assert.equal(zingPanel.hidden, false, 'Zing visible after switching to Zing');
  assert.equal(vcoinPanel.hidden, true, 'VCoin hidden after switching to Zing');

  // Switch to VCoin
  selectBrand('vcoin');
  assert.equal(state.activeBrand, 'vcoin');
  assert.equal(garenaPanel.hidden, true, 'Garena hidden after switching to VCoin');
  assert.equal(zingPanel.hidden, true, 'Zing hidden after switching to VCoin');
  assert.equal(vcoinPanel.hidden, false, 'VCoin visible after switching to VCoin');

  // Switch back to Garena
  selectBrand('garena');
  assert.equal(state.activeBrand, 'garena');
  assert.equal(garenaPanel.hidden, false, 'Garena visible after switching to Garena');
  assert.equal(zingPanel.hidden, true, 'Zing hidden after switching to Garena');
  assert.equal(vcoinPanel.hidden, true, 'VCoin hidden after switching to Garena');

  console.log('PASS: All dropdown game selectors, Zing 7 hot games, classic VCoin 4-col table, and brand tab switching verified successfully!');
`, ctx);
