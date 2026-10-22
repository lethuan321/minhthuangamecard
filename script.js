/* 01 / EDIT HERE — shop, prices, copy and business assumptions */
const CONFIG = {
  shopName: 'Minh Thuận GameCard',
  contactUrl: 'https://m.me/1253052787885007',
  facebook: 'https://www.facebook.com/1253052787885007',
  instagram: 'https://instagram.com/minhthuan0917?srtk=bjk1b2Z2cmRwM25y',
  // TODO: Set the final HTTPS domain; no invented canonical or social image is published.
  siteUrl: 'https://minhthuangamecard.vercel.app',
  socialImage: '',
  payment: { momo: '0376271084', vcb: '9376271084', holder: 'Lê Minh Thuận' },
  // TODO: Enable only after this account is linked in SePay.
  // TODO: Payment confirmation requires a server webhook; until then, verify the customer's bill manually.
  sepay: { enabled:false, bank:'Vietcombank', account:'9376271084', threshold:100000, prefix:'MTGC' },
  orderMessageTemplate: 'Chào shop, mình muốn mua:\n{lines}\nTổng: {total}\nTiết kiệm: {saved}\nMình sẽ chuyển khoản qua {method} và gửi bill sau khi shop xác nhận đơn.',
  maxQuantity: 99,
  copyrightYear: 2026,
  storageKey: 'minhthuan-order-v1',
  introKey: 'minhthuan-intro-v1',
  motionKey: 'minhthuan-motion-v1',
  methods: { momo: 'MoMo', vcb: 'Vietcombank' },
  copy: {
    heroEyebrow: 'THẺ GAME CHÍNH HÃNG · GIÁ TỐT MỖI NGÀY',
    heroLine1: 'BẢNG GIÁ', heroLine2: 'THẺ GAME',
    heroTagline: 'Nạp game rẻ hơn.\nTiết kiệm hơn mỗi ngày.',
    heroDescription: 'Chọn thẻ bạn cần, xem ngay giá thật.\nNhận đơn 06:00–11:00 mỗi ngày · Phản hồi trong 5 phút.',
    heroProof: 'Giá công khai. Thanh toán rõ ràng.',
    pricingIntro: 'Mệnh giá rõ ràng, tiết kiệm cụ thể.\nChọn một thẻ hoặc ghép thành đơn của bạn.',
    pricingFootnote: 'Giá tính cho 01 thẻ. Mua số lượng lớn? Nhắn shop để hỏi ưu đãi.',
    whyIntro: 'Chuyện nạp game nên đơn giản.\nVà sự tin tưởng bắt đầu từ những điều rõ ràng.',
    howIntro: 'Không cần tạo tài khoản.\nChỉ cần một tin nhắn.',
    paymentBanner: 'Chuyển tiền xong, gửi bill.\nMinh Thuận gửi mã thẻ cho bạn!',
    paymentSafety: 'Chỉ chuyển khoản đúng số tài khoản trên trang này và kiểm tra lại trước khi xác nhận.',
    closingText: 'Nhận ưu đãi mỗi ngày!\nMinh Thuận luôn sẵn lòng hỗ trợ bạn.'
  },
  benefits: [
    ['tag', 'Chiết khấu rõ ràng', 'Xem ngay số tiền tiết kiệm'],
    ['bolt', 'Giao mã qua tin nhắn', 'Nhận thẻ sau khi xác nhận'],
    ['shield', 'Mua thẻ an tâm', 'Không cần mật khẩu game'],
    ['chat', 'Hỗ trợ tận tình', 'Kết nối trực tiếp với shop']
  ],
  // TODO: Confirm bulk discounts, response hours, delivery time and refund policy.
  // Delivery is described as manual; no unverified automatic/24-hour promise.
  reasons: [
    ['Giá tốt, nhìn là biết.', 'Mệnh giá, giá bán và tiền tiết kiệm được đặt cạnh nhau. Không cần tự tính, không cần hỏi lại.'],
    ['Mua nhiều? Cứ nhắn shop.', 'Bạn cần nhiều thẻ hoặc nhiều mệnh giá? Ghép đơn và hỏi Minh Thuận về ưu đãi hiện có.'],
    ['Thẻ chính hãng. Chọn đúng loại.', 'Kiểm tra loại thẻ và khả năng sử dụng cho trò chơi, khu vực của bạn trước khi mua.'],
    ['Gửi bill. Nhận mã qua chat.', 'Sau khi kiểm tra thanh toán, shop gửi mã thẻ qua cuộc trò chuyện của bạn.'],
    ['Có thắc mắc, có người hỗ trợ.', 'Nhắn Facebook hoặc Instagram để được hướng dẫn. Bạn không cần chia sẻ mật khẩu game.']
  ],
  steps: [
    ['Chọn mệnh giá', 'Chọn loại thẻ, mệnh giá và số lượng. Gửi nội dung đơn để shop xác nhận.'],
    ['Chuyển tiền', 'Sau khi shop xác nhận, thanh toán đúng số tiền qua MoMo hoặc Vietcombank.'],
    ['Gửi bill & nhận mã', 'Gửi ảnh giao dịch thành công trong chat. Shop kiểm tra và gửi mã thẻ cho bạn.']
  ],
  faq: [
    ['Bao lâu thì mình nhận được thẻ?', 'Shop gửi mã qua Messenger sau khi xác nhận thanh toán. Trong giờ mở cửa 06:00 – 11:00 mỗi ngày, Thuận phản hồi trong 5 phút.'],
    ['Nhận mã rồi, mình nạp thẻ thế nào?', 'Vào trang hoặc ứng dụng nạp chính thức của trò chơi, chọn đúng loại thẻ rồi làm theo hướng dẫn của nhà phát hành. Kiểm tra trò chơi và khu vực được hỗ trợ trước khi mua; không cung cấp mật khẩu cho shop.'],
    ['Nếu mã thẻ báo lỗi thì sao?', 'Giữ lại bill và chụp thông báo lỗi, sau đó nhắn lại đúng cuộc trò chuyện đã đặt hàng để shop kiểm tra. Không đăng công khai mã thẻ. Cách xử lý hoặc hoàn tiền sẽ được shop xác nhận theo tình trạng thực tế.'],
    ['Shop nhận thanh toán bằng hình thức nào?', 'Bạn có thể chuyển khoản MoMo hoặc Vietcombank (chủ tài khoản: Lê Minh Thuận). Số tài khoản hiển thị ở mục Thanh toán và gửi riêng trong chat khi chốt đơn.'],
    ['Mình liên hệ hỗ trợ ở đâu?', 'Bạn có thể nhắn trực tiếp qua Messenger Fanpage Minh Thuận GameCard (m.me/1253052787885007). Minh Thuận trực chat mỗi ngày 06:00 – 11:00.']
  ]
};
const CARDS = [
  { id: 'garena', name: 'Thẻ Garena', accent: '--garena', items: [[5000,5000],[10000,10000],[20000,19000],[50000,49000],[100000,97000],[200000,195000],[500000,485000]] },
  { id: 'zing', name: 'Thẻ Zing', accent: '--zing', items: [[20000,20000],[50000,49000],[100000,99000],[200000,197000],[500000,490000],[1000000,975000]] },
  { id: 'vcoin', name: 'Thẻ VCoin', accent: '--vcoin', items: [[20000,20000],[50000,48000],[100000,96000],[200000,192000],[300000,288000],[500000,480000],[1000000,960000]] }
];
const GARENA_GAMES = {
  lq: { id:'lq', name:'Liên Quân Mobile', shortName:'Liên Quân', icon:'⚔️', unit:'Quân Huy', unitShort:'QH', rates:{ 5000:'10', 10000:'20', 20000:'40', 50000:'102', 100000:'204', 200000:'408', 500000:'1.020' } },
  ff: { id:'ff', name:'Free Fire', shortName:'Free Fire', icon:'🔥', unit:'Kim Cương', unitShort:'KC', rates:{ 5000:'25', 10000:'51', 20000:'113', 50000:'283', 100000:'566', 200000:'1.132', 500000:'2.830' } },
  fco: { id:'fco', name:'FC Online', shortName:'FC Online', icon:'⚽', unit:'FC', unitShort:'FC', rates:{ 5000:'10', 10000:'20', 20000:'40', 50000:'102', 100000:'204', 200000:'408', 500000:'1.020' } },
  fcm: { id:'fcm', name:'FC Mobile', shortName:'FC Mobile', icon:'📱', unit:'FV', unitShort:'FV', rates:{ 5000:'10', 10000:'20', 20000:'40', 50000:'102', 100000:'204', 200000:'408', 500000:'1.020' } },
  df: { id:'df', name:'Delta Force', shortName:'Delta Force', icon:'🎯', unit:'Delta Coin', unitShort:'Coin', rates:{ 5000:'20', 10000:'40', 20000:'80', 50000:'200', 100000:'410', 200000:'820', 500000:'2.050' } }
};

/* 02 / Small shared utilities */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const moneyFormatter = new Intl.NumberFormat('vi-VN');
const money = value => `${moneyFormatter.format(value)}đ`;
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktopQuery = window.matchMedia('(min-width: 1100px)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const state = { cart: [], method: 'momo', activeBrand: 'garena', selectedGarenaGame: 'lq', lenis: null, motionContext: null, motionCleanups: [], motionPaused: false };
const icons = {
  tag: '<path d="M3 4h9l9 9-8 8-10-10V4Z"/><circle cx="8" cy="9" r="1.5"/>',
  bolt: '<path d="m14 2-9 12h6l-1 8 9-12h-6l1-8Z"/>',
  shield: '<path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z"/><path d="m8 12 3 3 5-6"/>',
  chat: '<path d="M21 11a9 9 0 0 1-9 9H4l-2 2V11a9 9 0 0 1 19 0Z"/><path d="M7 10h10M7 14h6"/>'
};
function el(tag, className, text) { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; }
function readSession(key) { try { return sessionStorage.getItem(key); } catch { return null; } }
function writeSession(key, value) { try { sessionStorage.setItem(key, value); } catch { /* Private browsing/file URLs may disable storage. */ } }
function safeUrl(value) { try { const parsed = new URL(value); return ['https:', 'http:'].includes(parsed.protocol) ? parsed.href : '#lien-he'; } catch { return '#lien-he'; } }
function externalLink(className, label, url = CONFIG.contactUrl) { const link = el('a', className, label); link.href = safeUrl(url); link.target = '_blank'; link.rel = 'noopener noreferrer'; return link; }
function product(brandId, face) { const brand = CARDS.find(item => item.id === brandId); const prices = brand?.items.find(item => item[0] === face); return prices ? { brand, face: prices[0], sale: prices[1] } : null; }
function totals(cart = state.cart) { return cart.reduce((sum, item) => { const card = product(item.brand, item.face); if (!card) return sum; sum.face += card.face * item.qty; sum.sale += card.sale * item.qty; sum.count += item.qty; sum.saved = sum.face - sum.sale; return sum; }, { face: 0, sale: 0, saved: 0, count: 0 }); }
/** Produce the exact text that customers can paste into their own chat. */
function orderMessage(cart = state.cart) {
  const sum = totals(cart);
  const values = { lines: cart.map(item => { const card = product(item.brand, item.face); return `• ${card.brand.name} ${money(item.face)} × ${item.qty}: ${money(card.sale * item.qty)}`; }).join('\n'), total: money(sum.sale), saved: money(sum.saved), method: CONFIG.methods[state.method] };
  return CONFIG.orderMessageTemplate.replace(/\{(lines|total|saved|method)\}/g, (_, key) => values[key]);
}
/** Copy under HTTPS or file://; a selectable dialog is the final fallback. */
async function copyText(value) {
  try { if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(value); return true; } } catch { /* Try the synchronous browser fallback. */ }
  const previous = document.activeElement;
  const textarea = el('textarea', 'clipboard-fallback'); textarea.value = value;
  textarea.setAttribute('readonly', ''); textarea.setAttribute('aria-label', 'Nội dung cần sao chép');
  Object.assign(textarea.style, { position: 'fixed', left: '0', top: '0', width: '1px', height: '1px', opacity: '0' });
  const host = $$('dialog[open]').at(-1) || document.body; host.append(textarea); textarea.select(); textarea.setSelectionRange(0, value.length);
  let success = false; try { success = document.execCommand('copy'); } catch { /* Manual selection remains available. */ }
  textarea.remove(); previous?.focus({ preventScroll: true }); return success;
}
let toastTimer;
function initToast() { $('#toast').textContent = ''; }
function toast(message) { clearTimeout(toastTimer); const node = $('#toast'); node.textContent = message; node.classList.add('is-visible'); toastTimer = setTimeout(() => node.classList.remove('is-visible'), 4200); }
function syncModalLock() {
  const open = !!$('dialog[open]');
  document.body.classList.toggle('modal-open', open);
  document.documentElement.classList.toggle('modal-locked',open);
  window.dispatchEvent(new CustomEvent('modalchange',{detail:{open}}));
  if (state.lenis) {
    if (open || document.hidden) state.lenis.stop();
    else state.lenis.start();
  }
}
function openDialog(dialog) { if (!dialog.open) dialog.showModal(); syncModalLock(); }
function closeDialog(dialog) { dialog.close(); syncModalLock(); }
function wireDialog(dialog, closeButton) {
  closeButton.addEventListener('click', () => closeDialog(dialog));
  dialog.addEventListener('close', syncModalLock);
  dialog.addEventListener('click', event => { if (event.target !== dialog) return; const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closeDialog(dialog); });
}

// Vector icon avoids mobile font/emoji substitution for the diagonal arrow.
function arrowUpRight() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  for (const [name, value] of Object.entries({class:'icon-arrow-up-right', viewBox:'0 0 24 24', width:'1em', height:'1em', fill:'none', stroke:'currentColor', 'stroke-width':'1.8', 'stroke-linecap':'round', 'stroke-linejoin':'round', 'aria-hidden':'true', focusable:'false'})) svg.setAttribute(name, value);
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M5 19 19 5M5 5h14v14'); svg.append(path); return svg;
}
function setArrowLabel(node, label) { node.textContent = label + ' '; node.append(arrowUpRight()); }

/* 03 / Config-driven content and metadata */
function initContent() {
  $$('[data-copy]').forEach(node => { const content = CONFIG.copy[node.dataset.copy]; if (content !== undefined) { node.textContent = content; node.style.whiteSpace = 'pre-line'; } });
  $$('[data-contact]').forEach(link => { link.href = safeUrl(CONFIG.contactUrl); });
  $$('[data-social]').forEach(link => { link.href = safeUrl(CONFIG[link.dataset.social]); });
  $('#copyright').textContent = `© ${CONFIG.copyrightYear} ${CONFIG.shopName}`;
  CONFIG.benefits.forEach(([icon, title, text],index) => { const item = el('article', 'benefit'); item.dataset['3dAnchor']=`benefit-${index+1}`; item.tabIndex=0; const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('viewBox','0 0 24 24'); svg.setAttribute('aria-hidden','true'); svg.innerHTML = icons[icon] || icons.tag; item.append(svg, el('h3','',title), el('p','',text)); $('#benefit-list').append(item); });
  CONFIG.reasons.forEach(([title, text]) => { const item = el('article', 'why-item'); const check = el('span', 'check', '✓'); check.setAttribute('aria-hidden', 'true'); const copy = el('div'); copy.append(el('h3','',title), el('p','',text)); item.append(check,copy); $('#why-list').append(item); });
  CONFIG.steps.forEach(([title, text], index) => { const item = el('li', 'how-step'); item.dataset['3dAnchor']=`step-${index+1}`; const number = el('span','how-step__number',String(index + 1).padStart(2,'0')); number.setAttribute('aria-hidden','true'); const arrow = el('span','how-step__arrow',index === CONFIG.steps.length - 1 ? '✓' : ''); arrow.setAttribute('aria-hidden','true'); if (index !== CONFIG.steps.length - 1) arrow.append(arrowUpRight()); item.append(number,arrow,el('h3','',title),el('p','',text)); $('#how-steps').append(item); });
  const siteUrl = CONFIG.siteUrl.startsWith('https://') ? safeUrl(CONFIG.siteUrl) : '';
  if (siteUrl) { const canonical = el('link'); canonical.rel = 'canonical'; canonical.href = siteUrl; const og = el('meta'); og.setAttribute('property','og:url'); og.content = siteUrl; document.head.append(canonical,og); }
  if (CONFIG.socialImage.startsWith('https://')) { const ogImage = el('meta'); ogImage.setAttribute('property','og:image'); ogImage.content = safeUrl(CONFIG.socialImage); document.head.append(ogImage); }
  const schema = { '@context':'https://schema.org', '@type':'Store', name:CONFIG.shopName, ...(siteUrl ? { url:siteUrl } : {}), sameAs:[safeUrl(CONFIG.facebook),safeUrl(CONFIG.instagram)], hasOfferCatalog:{ '@type':'OfferCatalog', name:'Bảng giá thẻ game', itemListElement:CARDS.map(brand => ({ '@type':'OfferCatalog', name:brand.name, itemListElement:brand.items.map(([face,sale]) => ({ '@type':'Offer', priceCurrency:'VND', price:sale, itemOffered:{ '@type':'Product', name:`${brand.name} ${money(face)}` } })) })) } };
  const json = el('script'); json.type = 'application/ld+json'; json.textContent = JSON.stringify(schema); document.head.append(json);
}

/* 04 / Header, mobile navigation and real anchor links */
function initHeader() {
  const header = $('#header'), menu = $('#mobile-menu'), toggle = $('#menu-toggle');
  let previousY = 0;
  const update = ({ direction = 0, scroll = 0 }) => {
    const hidden = direction > 0 && scroll > 180 && !$('dialog[open]') && !header.contains(document.activeElement);
    header.classList.toggle('is-scrolled', scroll > 40);
    if (Math.abs(scroll - previousY) > 2 || scroll < 80) {
      header.classList.toggle('is-hidden', hidden);
      document.body.classList.toggle('header-visible', !hidden);
    }
    previousY = scroll;
  };
  const attach = () => { state.lenis?.on('scroll', update); update(state.lenis || {}); };
  window.addEventListener('lenisready', attach);
  // Native fallback only. Lenis owns the scroll position whenever available.
  window.addEventListener('scroll', () => { if (!state.lenis) update({ scroll:window.scrollY, direction:Math.sign(window.scrollY-previousY) }); }, { passive:true });
  if (state.lenis) attach(); else update({ scroll:window.scrollY });
  toggle.addEventListener('click', () => { openDialog(menu); toggle.setAttribute('aria-expanded','true'); if (motionEnabled() && window.gsap) gsap.fromTo($$('nav a',menu),{ y:20,opacity:0 },{ y:0,opacity:1,duration:.4,stagger:.06,clearProps:'all' }); });
  wireDialog(menu,$('#menu-close'));
  menu.addEventListener('close', () => toggle.setAttribute('aria-expanded','false'));
  window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches && menu.open) closeDialog(menu); });
  // autoToggle resumes after its 1ms overflow transition. Replay the link only
  // after that resume; Lenis' native anchor handler remains the sole scroll owner.
  menu.addEventListener('click', event => {
    const anchor=event.target.closest('a[href^="#"]');if(!anchor||!menu.open)return;
    const lenis=state.lenis;
    if(!lenis?.isStopped){closeDialog(menu);return;}
    event.preventDefault();event.stopPropagation();
    let resumed=false;
    const resume=()=>{if(resumed||lenis.isStopped)return;resumed=true;lenis.off('scroll',resume);anchor.click();};
    lenis.on('scroll',resume);closeDialog(menu);if(!lenis.isStopped)resume();
  }, { capture:true });
}

/* 05 / Pricing — all arithmetic derives from CARDS */
function initPricing() {
  const panels = $('#price-panels');
  CARDS.forEach(brand => {
    const tab = $(`#tab-${brand.id}`); $('.tab-count',tab).textContent = String(brand.items.length).padStart(2,'0');
    const panel = el('div','price-panel'); panel.id = `panel-${brand.id}`; panel.setAttribute('role','tabpanel'); panel.setAttribute('aria-labelledby',tab.id); panel.tabIndex = 0; panel.hidden = brand.id !== state.activeBrand;
    const header = el('div','catalog-brand'); header.append(el('h3','',brand.name.toUpperCase()),el('p','',`${brand.items.length} mệnh giá · Chọn theo cách bạn chơi`)); panel.append(header);

    if (brand.id === 'garena') {
      const selectorBox = el('div', 'game-selector-box');
      const selectorHeader = el('div', 'game-selector-header');
      selectorHeader.innerHTML = '<span class="game-selector-badge">Quy đổi vật phẩm</span><span class="game-selector-title">Xem số vật phẩm nhận được theo game bạn chơi:</span>';
      const gameTabs = el('div', 'game-tabs');
      gameTabs.setAttribute('aria-label', 'Chọn game nạp thẻ Garena');

      Object.values(GARENA_GAMES).forEach(game => {
        const btn = el('button', `game-tab${state.selectedGarenaGame === game.id ? ' is-active' : ''}`);
        btn.type = 'button';
        btn.dataset.game = game.id;
        btn.setAttribute('aria-pressed', String(state.selectedGarenaGame === game.id));
        btn.innerHTML = `<span class="game-icon">${game.icon}</span><span class="game-name">${game.shortName}</span><span class="game-unit">(${game.unit})</span>`;
        btn.addEventListener('click', () => switchGarenaGame(game.id));
        gameTabs.append(btn);
      });

      const allBtn = el('button', `game-tab game-tab--all${state.selectedGarenaGame === 'all' ? ' is-active' : ''}`);
      allBtn.type = 'button';
      allBtn.dataset.game = 'all';
      allBtn.setAttribute('aria-pressed', String(state.selectedGarenaGame === 'all'));
      allBtn.innerHTML = '<span class="game-icon">📊</span><span class="game-name">Tất cả game</span>';
      allBtn.addEventListener('click', () => switchGarenaGame('all'));
      gameTabs.append(allBtn);

      selectorBox.append(selectorHeader, gameTabs);
      panel.append(selectorBox);

      const table = el('table', 'price-table price-table--reward');
      table.setAttribute('aria-label', 'Bảng giá Thẻ Garena và quy đổi vật phẩm');
      const thead = el('thead');
      const headRow = el('tr');
      const currentGame = GARENA_GAMES[state.selectedGarenaGame] || GARENA_GAMES.lq;
      ['Mệnh giá', 'Giá phải trả', `Nhận trong game (${currentGame.unit})`, 'Tiết kiệm', 'Đặt thẻ'].forEach((label, idx) => {
        const th = el('th', '', label);
        th.scope = 'col';
        if (idx === 2) th.id = 'garena-reward-th';
        headRow.append(th);
      });
      thead.append(headRow);
      table.append(thead);

      const tbody = el('tbody');
      const bestSaving = Math.max(...brand.items.map(([face, sale]) => face - sale));
      brand.items.forEach(([face, sale]) => {
        const saved = face - sale;
        const row = el('tr');
        row.dataset.brand = brand.id;
        row.dataset.best = String(saved === bestSaving && saved > 0);
        row.dataset.face = String(face);
        row.dataset.sale = String(sale);
        row.dataset.saved = String(saved);

        const faceCell = el('td', 'price-face');
        faceCell.append(el('span', 'price-face__value', money(face)));
        if (saved && saved === bestSaving) faceCell.append(el('span', 'best-tag', 'TIẾT KIỆM NHẤT'));

        const saleCell = el('td', 'price-pay');
        saleCell.append(el('strong', '', money(sale)));

        const rewardCell = el('td', 'price-reward');
        rewardCell.dataset.face = String(face);
        const badge = el('span', 'reward-badge');
        badge.innerHTML = `<span class="reward-icon">${currentGame.icon}</span><strong class="reward-val">${currentGame.rates[face] || '—'}</strong> <span class="reward-unit">${currentGame.unit}</span>`;
        rewardCell.append(badge);

        const saveCell = el('td', 'price-saved compare-price');
        const pill = el('span', `save-pill${saved ? '' : ' save-pill--neutral'}`, saved ? `Tiết kiệm ${money(saved)}` : 'Giữ nguyên');
        pill.title = saved ? `Tiết kiệm ${money(saved)}` : 'Giá phải trả bằng mệnh giá';
        saveCell.append(pill);

        const actionCell = el('td', 'price-actions');
        const actions = el('div', 'row-actions');
        const buy = externalLink('buy-button', 'Mua');
        setArrowLabel(buy, 'Mua');
        buy.setAttribute('aria-label', `Mua ${brand.name} ${money(face)}`);
        buy.dataset.contact = '';
        const selection = [{ brand: brand.id, face, qty: 1 }];
        if (CONFIG.sepay.enabled && qrEligible(selection)) {
          buy.textContent = 'Thanh toán QR';
          buy.setAttribute('aria-label', `Thanh toán QR ${brand.name} ${money(face)}`);
        }
        buy.addEventListener('click', event => {
          if (tryOpenQRPayment(selection)) { event.preventDefault(); return; }
          prepareOrderForChat(selection);
        });
        const add = el('button', 'add-button', '+ Thêm vào đơn');
        add.type = 'button';
        add.setAttribute('aria-label', `Thêm ${brand.name} ${money(face)} vào đơn`);
        add.addEventListener('click', () => addToCart(brand.id, face, row));
        actions.append(buy, add);
        actionCell.append(actions);

        row.append(faceCell, saleCell, rewardCell, saveCell, actionCell);
        tbody.append(row);
      });
      table.append(tbody);
      panel.append(table);

      const allWrap = el('div', 'all-games-table-wrap');
      allWrap.hidden = state.selectedGarenaGame !== 'all';
      const allTable = el('table', 'price-table all-games-table');
      allTable.setAttribute('aria-label', 'Bảng quy đổi tất cả game nạp thẻ Garena');
      const allThead = el('thead');
      const allHeadRow = el('tr');
      allHeadRow.innerHTML = `
        <th scope="col">Mệnh giá</th>
        <th scope="col">Giá phải trả</th>
        <th scope="col"><span class="matrix-th"><span class="matrix-icon">⚔️</span>LQ Mobile</span></th>
        <th scope="col"><span class="matrix-th"><span class="matrix-icon">🔥</span>Free Fire</span></th>
        <th scope="col"><span class="matrix-th"><span class="matrix-icon">⚽</span>FC Online</span></th>
        <th scope="col"><span class="matrix-th"><span class="matrix-icon">📱</span>FC Mobile</span></th>
        <th scope="col"><span class="matrix-th"><span class="matrix-icon">🎯</span>Delta Force</span></th>
        <th scope="col">Đặt thẻ</th>
      `;
      allThead.append(allHeadRow);
      allTable.append(allThead);

      const allTbody = el('tbody');
      brand.items.forEach(([face, sale]) => {
        const row = el('tr');
        row.dataset.brand = brand.id;
        row.dataset.face = String(face);
        row.dataset.sale = String(sale);
        row.dataset.saved = String(face - sale);

        const faceTd = el('td', 'price-face');
        faceTd.append(el('span', 'price-face__value', money(face)));

        const saleTd = el('td', 'price-pay');
        saleTd.append(el('strong', '', money(sale)));

        const lqTd = el('td', 'matrix-cell matrix-cell--lq', `${GARENA_GAMES.lq.rates[face]} QH`);
        const ffTd = el('td', 'matrix-cell matrix-cell--ff', `${GARENA_GAMES.ff.rates[face]} KC`);
        const fcoTd = el('td', 'matrix-cell matrix-cell--fco', `${GARENA_GAMES.fco.rates[face]} FC`);
        const fcmTd = el('td', 'matrix-cell matrix-cell--fcm', `${GARENA_GAMES.fcm.rates[face]} FV`);
        const dfTd = el('td', 'matrix-cell matrix-cell--df', `${GARENA_GAMES.df.rates[face]} Coin`);

        const actionTd = el('td', 'price-actions');
        const actions = el('div', 'row-actions');
        const buy = externalLink('buy-button', 'Mua');
        setArrowLabel(buy, 'Mua');
        buy.setAttribute('aria-label', `Mua ${brand.name} ${money(face)}`);
        buy.dataset.contact = '';
        const selection = [{ brand: brand.id, face, qty: 1 }];
        if (CONFIG.sepay.enabled && qrEligible(selection)) {
          buy.textContent = 'Thanh toán QR';
          buy.setAttribute('aria-label', `Thanh toán QR ${brand.name} ${money(face)}`);
        }
        buy.addEventListener('click', event => {
          if (tryOpenQRPayment(selection)) { event.preventDefault(); return; }
          prepareOrderForChat(selection);
        });
        const add = el('button', 'add-button', '+ Thêm vào đơn');
        add.type = 'button';
        add.setAttribute('aria-label', `Thêm ${brand.name} ${money(face)} vào đơn`);
        add.addEventListener('click', () => addToCart(brand.id, face, row));
        actions.append(buy, add);
        actionTd.append(actions);

        row.append(faceTd, saleTd, lqTd, ffTd, fcoTd, fcmTd, dfTd, actionTd);
        allTbody.append(row);
      });
      allTable.append(allTbody);
      allWrap.append(allTable);
      panel.append(allWrap);

      const note = el('div', 'garena-info-note');
      note.innerHTML = '<span>💡 <strong>Nạp chính thức</strong>: Nạp thẻ Garena tại trang web <a href="https://napthe.vn" target="_blank" rel="noopener noreferrer">napthe.vn</a> hoặc trực tiếp trong game. Tỷ lệ quy đổi vật phẩm được cập nhật chính xác theo tỷ lệ chuẩn của Garena.</span>';
      panel.append(note);

      const announceRow = event => {
        const row = event.target.closest('tr[data-face]');
        if (row) window.dispatchEvent(new CustomEvent('rowhover', { detail: { id: brand.id, face: +row.dataset.face, sale: +row.dataset.sale, saved: +row.dataset.saved, row } }));
      };
      tbody.addEventListener('pointerover', announceRow); tbody.addEventListener('pointerdown', announceRow); tbody.addEventListener('focusin', announceRow);
      allTbody.addEventListener('pointerover', announceRow); allTbody.addEventListener('pointerdown', announceRow); allTbody.addEventListener('focusin', announceRow);
    } else {
      const table = el('table', 'price-table'); table.setAttribute('aria-label', `Bảng giá ${brand.name}`);
      const thead = el('thead'); const headRow = el('tr'); ['Mệnh giá', 'Tiết kiệm', 'Giá phải trả', 'Đặt thẻ'].forEach(label => { const th = el('th', '', label); th.scope = 'col'; headRow.append(th); }); thead.append(headRow); table.append(thead);
      const tbody = el('tbody'); const bestSaving = Math.max(...brand.items.map(([face, sale]) => face - sale));
      brand.items.forEach(([face, sale]) => {
        const saved = face - sale;
        const row = el('tr'); row.dataset.brand = brand.id; row.dataset.best = String(saved === bestSaving && saved > 0); row.dataset.face = String(face); row.dataset.sale = String(sale); row.dataset.saved = String(saved);
        const faceCell = el('td', 'price-face'); faceCell.append(el('span', 'price-face__value', money(face))); const saleCell = el('td', 'price-pay'); saleCell.append(el('strong', '', money(sale)));
        const saveCell = el('td', 'price-saved compare-price'); const pill = el('span', `save-pill${saved ? '' : ' save-pill--neutral'}`, saved ? `Tiết kiệm ${money(saved)}` : 'Giữ nguyên'); pill.title = saved ? `Tiết kiệm ${money(saved)}` : 'Giá phải trả bằng mệnh giá'; saveCell.append(pill);
        if (saved && saved === bestSaving) faceCell.append(el('span', 'best-tag', 'TIẾT KIỆM NHẤT'));
        const actionCell = el('td', 'price-actions'); const actions = el('div', 'row-actions');
        const buy = externalLink('buy-button', 'Mua'); setArrowLabel(buy, 'Mua'); buy.setAttribute('aria-label', `Mua ${brand.name} ${money(face)}`); buy.dataset.contact = '';
        const selection = [{ brand: brand.id, face, qty: 1 }];
        if (CONFIG.sepay.enabled && qrEligible(selection)) { buy.textContent = 'Thanh toán QR'; buy.setAttribute('aria-label', `Thanh toán QR ${brand.name} ${money(face)}`); }
        buy.addEventListener('click', event => { if (tryOpenQRPayment(selection)) { event.preventDefault(); return; } prepareOrderForChat(selection); });
        const add = el('button', 'add-button', '+ Thêm vào đơn'); add.type = 'button'; add.setAttribute('aria-label', `Thêm ${brand.name} ${money(face)} vào đơn`); add.addEventListener('click', () => addToCart(brand.id, face, row));
        actions.append(buy, add); actionCell.append(actions); row.append(faceCell, saveCell, saleCell, actionCell); tbody.append(row);
      });
      table.append(tbody); panel.append(table);
      const announceRow = event => { const row = event.target.closest('tr[data-face]'); if (row) window.dispatchEvent(new CustomEvent('rowhover', { detail: { id: brand.id, face: +row.dataset.face, sale: +row.dataset.sale, saved: +row.dataset.saved, row } })); };
      tbody.addEventListener('pointerover', announceRow); tbody.addEventListener('pointerdown', announceRow); tbody.addEventListener('focusin', announceRow);
    }
    panels.append(panel);
    tab.addEventListener('click', () => selectBrand(brand.id));
  });
  const tabs = $('.brand-tabs [role="tab"]');
  $('.brand-tabs').addEventListener('keydown', event => { const current = tabs.indexOf(document.activeElement); if (current < 0) return; let next; if (event.key === 'ArrowRight') next = (current + 1) % tabs.length; if (event.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length; if (event.key === 'Home') next = 0; if (event.key === 'End') next = tabs.length - 1; if (next === undefined) return; event.preventDefault(); tabs[next].focus(); selectBrand(tabs[next].dataset.brand); });
}

function switchGarenaGame(gameId) {
  state.selectedGarenaGame = gameId;
  const isAll = gameId === 'all';
  const garenaPanel = $('#panel-garena');
  if (!garenaPanel) return;
  $$('.game-tab', garenaPanel).forEach(btn => {
    const active = btn.dataset.game === gameId;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  const mainTable = $('.price-table--reward', garenaPanel);
  const allWrap = $('.all-games-table-wrap', garenaPanel);
  if (isAll) {
    if (mainTable) mainTable.hidden = true;
    if (allWrap) allWrap.hidden = false;
  } else {
    if (mainTable) mainTable.hidden = false;
    if (allWrap) allWrap.hidden = true;
    const game = GARENA_GAMES[gameId];
    if (!game) return;
    const rewardTh = $('#garena-reward-th');
    if (rewardTh) rewardTh.textContent = `Nhận trong game (${game.unit})`;
    $$('.price-reward', mainTable).forEach(cell => {
      const face = cell.dataset.face;
      const count = game.rates[face] || '—';
      const badge = $('.reward-badge', cell);
      if (badge) {
        badge.innerHTML = `<span class="reward-icon">${game.icon}</span><strong class="reward-val">${count}</strong> <span class="reward-unit">${game.unit}</span>`;
        if (motionEnabled() && window.gsap) {
          gsap.fromTo(badge, { scale: 0.9, opacity: 0.7 }, { scale: 1, opacity: 1, duration: 0.22 });
        }
      }
    });
  }
}

function selectBrand(id) {
  state.activeBrand = id; const brand = CARDS.find(item => item.id === id); $('#bang-gia').style.setProperty('--accent',`var(${brand.accent})`);
  $('.brand-tabs [role="tab"]').forEach(tab => { const selected = tab.dataset.brand === id; tab.setAttribute('aria-selected',String(selected)); tab.tabIndex = selected ? 0 : -1; });
  $('.price-panel').forEach(panel => { panel.hidden = panel.id !== `panel-${id}`; });
  if (motionEnabled() && window.gsap) gsap.fromTo($('tbody tr',$(`#panel-${id}`)),{ y:8, opacity:.45 },{ y:0, opacity:1, duration:.35, stagger:.025, clearProps:'transform,opacity' });
  if(innerWidth<1100){const tab=$('#tab-'+id),strip=$('.brand-tabs');strip.scrollTo({left:tab.offsetLeft-(strip.clientWidth-tab.offsetWidth)/2,behavior:motionEnabled()?'smooth':'auto'});}
  refreshScroll();
  window.dispatchEvent(new CustomEvent('brandchange', { detail:{ id } }));
  window.dispatchEvent(new CustomEvent('tabchange',{detail:{id}}));
}

/* 06 / Order builder, persistence, preview and clipboard */
function saveCart() { writeSession(CONFIG.storageKey, JSON.stringify({ cart:state.cart, method:state.method })); }
function restoreCart() {
  try { const stored = JSON.parse(readSession(CONFIG.storageKey)); if (!stored || !Array.isArray(stored.cart)) return; state.method = Object.hasOwn(CONFIG.methods,stored.method) ? stored.method : 'momo';
    for (const item of stored.cart.slice(0,100)) { if (!item || !product(item.brand,item.face) || !Number.isInteger(item.qty) || item.qty < 1) continue; const existing = state.cart.find(line => line.brand === item.brand && line.face === item.face); const qty = Math.min(item.qty,CONFIG.maxQuantity); if (existing) existing.qty = Math.min(existing.qty+qty,CONFIG.maxQuantity); else state.cart.push({brand:item.brand,face:item.face,qty}); }
  } catch { state.cart = []; }
}
function addToCart(brand,face,origin=null) {
  const existing = state.cart.find(item => item.brand === brand && item.face === face);
  if (existing?.qty >= CONFIG.maxQuantity) { toast(`Mỗi mệnh giá tối đa ${CONFIG.maxQuantity} thẻ. Nhắn shop nếu bạn cần thêm nhé.`); return; }
  if (existing) existing.qty++; else state.cart.push({brand,face,qty:1}); renderCart(); saveCart(); toast(`Đã thêm ${product(brand,face).brand.name} ${money(face)} vào đơn.`);
  window.dispatchEvent(new CustomEvent('addtocart',{detail:{id:brand,face,count:totals().count,origin}}));
}
function changeQuantity(index,delta) { const item = state.cart[index]; if (!item) return; item.qty = Math.max(1,Math.min(CONFIG.maxQuantity,item.qty+delta)); renderCart(`quantity-${index}-${delta}`); saveCart(); }
function renderCart(focusId) {
  const container = $('#cart-items'); container.replaceChildren();
  if (!state.cart.length) { const empty = el('div','cart-empty'); const symbol = el('span','cart-empty__icon','+'); symbol.setAttribute('aria-hidden','true'); empty.append(symbol,el('p','','Một đơn hời đang chờ bạn.'),el('small','','Chọn “+ Thêm vào đơn” ở mệnh giá bạn muốn mua.')); container.append(empty); }
  state.cart.forEach((item,index) => {
    const card = product(item.brand,item.face); const row = el('div','cart-item'); const top = el('div','cart-item__top'); top.append(el('h4','',`${card.brand.name} · ${money(item.face)}`),el('span','cart-item__price',money(card.sale*item.qty)));
    const bottom = el('div','cart-item__bottom'), quantity = el('div','quantity'); quantity.setAttribute('role','group'); quantity.setAttribute('aria-label',`Số lượng ${card.brand.name} ${money(item.face)}`);
    const minus = el('button','','−'), plus = el('button','','+'), output = el('output','',String(item.qty));
    minus.id = `quantity-${index}--1`; plus.id = `quantity-${index}-1`; minus.setAttribute('aria-label',`Giảm số lượng ${card.brand.name} ${money(item.face)}`); plus.setAttribute('aria-label',`Tăng số lượng ${card.brand.name} ${money(item.face)}`); minus.disabled = item.qty <= 1; plus.disabled = item.qty >= CONFIG.maxQuantity;
    minus.addEventListener('click',()=>changeQuantity(index,-1)); plus.addEventListener('click',()=>changeQuantity(index,1)); quantity.append(minus,output,plus);
    const remove = el('button','remove-item','Xóa'); remove.setAttribute('aria-label',`Xóa ${card.brand.name} ${money(item.face)} khỏi đơn`); remove.addEventListener('click',()=>{state.cart.splice(index,1);renderCart();saveCart(); const next = $('.remove-item',container) || $('#preview-order'); if (!next.disabled) next.focus(); else $('#order-title').focus(); toast('Đã xóa thẻ khỏi đơn.');});
    bottom.append(quantity,remove); row.append(top,bottom); container.append(row);
  });
  const sum = totals(); $('#order-count').textContent = String(sum.count); $('#mobile-count').textContent = String(sum.count);
  $('#cart-face').textContent = money(sum.face); $('#cart-saved').textContent = money(sum.saved); $('#cart-total').textContent = money(sum.sale); $('#mobile-total').textContent = money(sum.sale);
  const sendOrder = $('#send-order');
  if (CONFIG.sepay.enabled && qrEligible(state.cart)) sendOrder.textContent = 'Thanh toán QR'; else setArrowLabel(sendOrder, 'Gửi đơn qua Facebook');
  $('#send-order').setAttribute('aria-disabled',String(!sum.count)); $('#preview-order').disabled = !sum.count;
  if (focusId) { const target = document.getElementById(focusId); if (target && !target.disabled) target.focus({preventScroll:true}); else $('.quantity button:not(:disabled)',container)?.focus({preventScroll:true}); }
}
function showOrderPreview(message) { $('#order-message').value = message; openDialog($('#message-dialog')); }
function prepareOrderForChat(cart) {
  const message = orderMessage(cart);
  // The supplied share URL cannot guarantee Messenger-prefill; native links preserve popup activation.
  copyText(message).then(success => { if (success) toast('Đã sao chép nội dung đơn – dán vào tin nhắn nhé!'); else { showOrderPreview(message); toast('Chưa thể sao chép tự động. Bạn có thể chọn và sao chép nội dung đơn.'); } });
}
/* Optional QR checkout. Prices and quantities always come from the current catalog. */
function qrEligible(cart) {
  const threshold = Number(CONFIG.sepay.threshold);
  if (!Number.isSafeInteger(threshold) || threshold <= 0) return false;
  return Array.isArray(cart) && cart.length > 0 && cart.every(item => item && product(item.brand,item.face) && item.face >= threshold && Number.isInteger(item.qty) && item.qty > 0 && item.qty <= CONFIG.maxQuantity);
}
function transferCode() {
  const prefix = CONFIG.sepay.prefix;
  if (typeof prefix !== 'string' || !/^[A-Z0-9]{1,20}$/.test(prefix)) throw new Error('Invalid transfer prefix');
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let suffix = '';
  while (suffix.length < 6) {
    const bytes = new Uint8Array(12); crypto.getRandomValues(bytes);
    for (const byte of bytes) { if (byte < 252) suffix += alphabet[byte % alphabet.length]; if (suffix.length === 6) break; }
  }
  return prefix + suffix;
}
function buildQRPayment(cart) {
  if (!qrEligible(cart)) throw new Error('Selection is not eligible for QR');
  const sum = totals(cart), amount = sum.sale;
  if (!Number.isSafeInteger(amount) || amount <= 0 || amount > 100000000) throw new RangeError('Invalid payment amount');
  const { account, bank } = CONFIG.sepay;
  if (typeof account !== 'string' || !/^[0-9]{6,30}$/.test(account) || typeof bank !== 'string' || !bank.trim()) throw new Error('Invalid payment account');
  const code = transferCode();
  const params = new URLSearchParams({ acc:account, bank:bank.trim(), amount:String(amount), des:code });
  return { ...sum, amount, account, bank:bank.trim(), code, url:'https://qr.sepay.vn/img?' + params.toString() };
}
function tryOpenQRPayment(cart) {
  if (!CONFIG.sepay.enabled || !qrEligible(cart)) return false;
  let payment;
  try { payment = buildQRPayment(cart); } catch { return false; }
  const dialog = $('#qr-dialog'); if (!dialog) return false;
  const items = $('#qr-items'); items.replaceChildren();
  for (const item of cart) items.append(el('li','',`${product(item.brand,item.face).brand.name} · ${money(item.face)} × ${item.qty}`));
  $('#qr-face').textContent = money(payment.face);
  $('#qr-saved').textContent = payment.saved ? money(payment.saved) : 'Giữ nguyên';
  $('#qr-amount').textContent = money(payment.amount);
  $('#qr-bank').textContent = payment.bank; $('#qr-account').textContent = payment.account; $('#qr-code').textContent = payment.code;
  $('#qr-copy-account').dataset.copyValue = payment.account;
  $('#qr-copy-amount').dataset.copyValue = String(payment.amount);
  $('#qr-copy-code').dataset.copyValue = payment.code;
  const image = $('#qr-image'); image.hidden = false; $('#qr-image-fallback').hidden = true;
  image.alt = `Mã QR ${payment.bank}, số tiền ${money(payment.amount)}, nội dung ${payment.code}`;
  image.src = payment.url;
  $('#qr-bill').href = safeUrl(CONFIG.contactUrl);
  openDialog(dialog); return true;
}
function initQRDialog() {
  const dialog = $('#qr-dialog'); wireDialog(dialog,$('#qr-close'));
  $('#qr-image').addEventListener('error',()=>{ $('#qr-image').hidden = true; $('#qr-image-fallback').hidden = false; });
  for (const field of ['account','amount','code']) {
    const button = $('#qr-copy-' + field);
    button.addEventListener('click',async()=>{
      const value = button.dataset.copyValue; if (!value) return;
      if (await copyText(value)) {
        window.dispatchEvent(new CustomEvent('copysuccess',{detail:{id:'vcb',element:button,field}}));
        toast('Đã sao chép thông tin chuyển khoản.');
      } else toast('Chạm giữ thông tin bên trên để sao chép.');
    });
  }
}

function initOrderBuilder() {
  initQRDialog();
  restoreCart(); $('#order-title').tabIndex = -1; renderCart();
  $$('input[name="method"]').forEach(radio => { radio.checked = radio.value === state.method; radio.addEventListener('change',()=>{state.method=radio.value;saveCart();}); });
  $('#send-order').addEventListener('click',event=>{if(!state.cart.length){event.preventDefault();toast('Thêm thẻ vào đơn trước nhé.');return;}if(tryOpenQRPayment(state.cart)){event.preventDefault();return;}prepareOrderForChat(state.cart);});
  $('#preview-order').addEventListener('click',()=>showOrderPreview(orderMessage()));
  wireDialog($('#message-dialog'),$('#message-close'));
  $('#copy-order').addEventListener('click',async()=>{if(await copyText($('#order-message').value)) toast('Đã sao chép nội dung đơn – dán vào tin nhắn nhé!'); else { $('#order-message').focus(); $('#order-message').select(); toast('Nhấn Ctrl+C hoặc chạm giữ để sao chép nội dung đã chọn.'); }});
  const cartDialog = $('#cart-dialog'), toggle = $('#cart-toggle'); wireDialog(cartDialog,$('#cart-close'));
  toggle.addEventListener('click',()=>{openDialog(cartDialog);toggle.setAttribute('aria-expanded','true');});
  cartDialog.addEventListener('close',()=>toggle.setAttribute('aria-expanded','false'));
  const positionPanel = () => { if (desktopQuery.matches) { if(cartDialog.open)closeDialog(cartDialog); $('#order-slot').append($('#order-panel')); } else $('#cart-dialog-content').append($('#order-panel')); };
  desktopQuery.addEventListener('change',positionPanel); positionPanel();
}

/* 07 / Payment and progressively enhanced FAQ */
function initPayment() {
  const verifiedHolder = CONFIG.payment.holder.trim() && !CONFIG.payment.holder.startsWith('TODO');
  Object.entries(CONFIG.methods).forEach(([key,name])=>{
    const card = el('article','payment-card');card.dataset['3dAnchor']=`payment-${key}`; const top = el('div','payment-card__top'); const brand = el('h3','payment-card__brand'); const mark = el('span',`payment-mark${key==='vcb'?' payment-mark--vcb':''}`,key==='momo'?'mo':'VCB'); mark.setAttribute('aria-hidden','true'); brand.append(mark,document.createTextNode(name)); top.append(brand,el('span','micro',key==='momo'?'VÍ ĐIỆN TỬ':'NGÂN HÀNG'));
    const bottom = el('div','payment-card__bottom'); const holder = el('p','payment-holder',verifiedHolder?`Chủ tài khoản: ${CONFIG.payment.holder}`:'Tên người nhận: xác nhận với shop');
    const copy = el('button','button button--outline copy-button'); setArrowLabel(copy, 'Sao chép'); copy.setAttribute('aria-label',`Sao chép số ${name}`);
    let resetTimer;
    copy.addEventListener('click',async()=>{if(await copyText(CONFIG.payment[key])){copy.textContent='Đã sao chép ✓';window.dispatchEvent(new CustomEvent('copysuccess',{detail:{id:key,element:card}}));toast(`Đã sao chép số ${name}: ${CONFIG.payment[key]}`);clearTimeout(resetTimer);resetTimer=setTimeout(()=>setArrowLabel(copy, 'Sao chép'),1600);}else{toast(`Số ${name}: ${CONFIG.payment[key]}. Chạm giữ hoặc chọn số để sao chép.`);}});
    bottom.append(holder,copy); card.append(top,el('p','payment-card__label',key==='momo'?'Số điện thoại nhận tiền':'Số tài khoản'),el('p','payment-card__number',CONFIG.payment[key]),bottom); $('#payment-cards').append(card);
  });
  $('#holder-note').textContent = verifiedHolder ? '' : 'Vui lòng xác nhận tên người nhận với Minh Thuận trước khi chuyển khoản.';
}
function initFAQ() {
  CONFIG.faq.forEach(([question,answer],index)=>{const details=el('details');const summary=el('summary','',question);summary.setAttribute('aria-expanded','false');summary.setAttribute('aria-controls',`faq-answer-${index}`);const content=el('div','faq__answer',answer);content.id=`faq-answer-${index}`;details.append(summary,content);details.addEventListener('toggle',()=>{summary.setAttribute('aria-expanded',String(details.open));if(details.open&&motionEnabled()&&window.gsap)gsap.fromTo(content,{opacity:0,y:-5},{opacity:1,y:0,duration:.25,clearProps:'all'});state.lenis?.resize();window.ScrollTrigger?.refresh();});$('#faq-list').append(details);});
}

/* 08 / Motion. The functional page never depends on CDN availability. */
/* FULL-EFFECTS MODE: motion is always on; neither prefers-reduced-motion nor the pause button stops it. */
function motionEnabled(){return true;}
function desktopFXEligible(){const q=new URLSearchParams(location.search);return q.get('fx')!=='min'&&!['off','lite'].includes(q.get('3d'));}
function initPreloader(){
  const loader=$('#preloader');if(new URLSearchParams(location.search).get('3d')==='off')return;
  if(desktopFXEligible()){history.scrollRestoration='manual';window.scrollTo(0,0);state.lenis?.scrollTo(0,{immediate:true,force:true});}loader.hidden=false;const start=performance.now();let finished=false;
  window.gamecardIntro={start,deadline:start+6000,desktop:desktopFXEligible(),pending:true};loader.classList.toggle('preloader--continuous',window.gamecardIntro.desktop);
  const timer=setInterval(()=>{$('#load-count').textContent=String(Math.min(95,Math.round((performance.now()-start)/23))).padStart(2,'0');},80);
  const finish=()=>{if(finished)return;finished=true;clearInterval(timer);clearTimeout(deadline);window.removeEventListener('scene-ready',finish);window.removeEventListener('desktop-intro-ready',finish);$('#load-count').textContent='100';loader.style.transition=window.gamecardIntro?.desktop?'opacity 180ms':'transform 240ms cubic-bezier(.22,1,.36,1)';if(window.gamecardIntro?.desktop)loader.style.opacity='0';else loader.style.transform='translateY(-100%)';setTimeout(()=>{loader.hidden=true;},240);};
  const deadline=setTimeout(finish,6000);window.addEventListener(window.gamecardIntro.desktop?'desktop-intro-ready':'scene-ready',finish);
  if(window.gamecardSceneStatus&&!window.gamecardIntro.desktop)finish();
}
function initLenis(){
  if(state.lenis)return state.lenis;
  try {
    if(!window.Lenis)throw new Error('CDN did not provide Lenis');
    const lenis=new window.Lenis({
      smoothWheel:true, duration:1.2, infinite:false,
      orientation:'vertical', gestureOrientation:'vertical', autoRaf:true, autoToggle:true,
      anchors:{ offset:-72 }, allowNestedScroll:true, syncTouch:false, stopInertiaOnNavigate:true,
      // v1.3.26 otherwise bypasses smoothing entirely. We explicitly honor the preference with 0.6s.
      respectReducedMotion:false
    });
    state.lenis=window.lenis=lenis;
    if(window.gsap&&window.ScrollTrigger){window.gsap.registerPlugin(window.ScrollTrigger);window.ScrollTrigger.config({ignoreMobileResize:true,autoRefreshEvents:'visibilitychange,DOMContentLoaded,load'});lenis.on('scroll',window.ScrollTrigger.update);}
    document.documentElement.dataset.lenisState='ready';
    window.dispatchEvent(new CustomEvent('lenisready',{detail:{lenis}}));
    syncModalLock();
    return lenis;
  } catch(err) {
    state.lenis?.destroy();state.lenis=null;delete window.lenis;
    document.documentElement.dataset.lenisState='native';
    document.documentElement.style.removeProperty('overflow');
    console.error('[Lenis] failed',err);
    return null;
  }
}
function initHero(){
  if(!window.gsap||!motionEnabled())return;
  // Only animate the initial entrance near the page top; content stays readable after preference changes.
  if(window.scrollY<100)gsap.fromTo('.line-mask>span',{yPercent:105},{yPercent:0,duration:.8,delay:.2,stagger:.08,ease:'power3.out',clearProps:'transform'});
  const floats=$$('.game-card').map((card,index)=>gsap.to(card,{y:index%2?9:-9,duration:3.5+index*.5,repeat:-1,yoyo:true,ease:'sine.inOut'}));
  let inView=true;
  const syncFloats=()=>floats.forEach(animation=>inView&&!document.hidden&&!document.body.classList.contains('webgl-ready')?animation.resume():animation.pause());
  const observer=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;syncFloats();},{threshold:0});observer.observe($('.hero__art'));
  window.addEventListener('scene-ready',syncFloats);document.addEventListener('visibilitychange',syncFloats);
  state.motionCleanups.push(()=>{observer.disconnect();window.removeEventListener('scene-ready',syncFloats);document.removeEventListener('visibilitychange',syncFloats);});syncFloats();
  if(finePointer.matches){const art=$('.hero__art');const xTo=gsap.quickTo(art,'x',{duration:.9,ease:'power3.out'});const yTo=gsap.quickTo(art,'y',{duration:.9,ease:'power3.out'});const move=event=>{const bounds=art.getBoundingClientRect();xTo((event.clientX-bounds.left-bounds.width/2)/bounds.width*8);yTo((event.clientY-bounds.top-bounds.height/2)/bounds.height*8);};const leave=()=>{xTo(0);yTo(0);};art.addEventListener('pointermove',move,{passive:true});art.addEventListener('pointerleave',leave);state.motionCleanups.push(()=>{art.removeEventListener('pointermove',move);art.removeEventListener('pointerleave',leave);});
    $$('.magnetic').forEach(button=>{const x=gsap.quickTo(button,'x',{duration:.35,ease:'power3.out'}),y=gsap.quickTo(button,'y',{duration:.35,ease:'power3.out'});const enter=event=>{const rect=button.getBoundingClientRect();x(Math.max(-8,Math.min(8,(event.clientX-rect.left-rect.width/2)*.12)));y(Math.max(-8,Math.min(8,(event.clientY-rect.top-rect.height/2)*.16)));};const exit=()=>{x(0);y(0);};button.addEventListener('pointermove',enter,{passive:true});button.addEventListener('pointerleave',exit);state.motionCleanups.push(()=>{button.removeEventListener('pointermove',enter);button.removeEventListener('pointerleave',exit);});});
  }
}
function initMarquee(){
  if(!motionEnabled())return;
  const marquee=$('.marquee');const animations=()=>marquee.getAnimations({subtree:true});
  const velocity=event=>animations().forEach(animation=>{animation.playbackRate=1+Math.min(Math.abs(event.velocity)*.035,1.8);});
  state.lenis?.on('scroll',velocity);
  const observer=new IntersectionObserver(entries=>marquee.classList.toggle('is-offscreen',!entries[0].isIntersecting));observer.observe(marquee);
  state.motionCleanups.push(()=>{observer.disconnect();state.lenis?.off('scroll',velocity);marquee.classList.remove('is-offscreen');});
}
function initScrollScenes(){
  if(!window.gsap||!window.ScrollTrigger||!motionEnabled())return;
  if(innerWidth<1100){const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){gsap.fromTo(entry.target,{y:14},{y:0,duration:.45,clearProps:'transform'});observer.unobserve(entry.target);}},{rootMargin:'0px 0px -5% 0px'});$$('.benefit,.why-item,.payment-card,.section-heading').forEach(node=>observer.observe(node));state.motionCleanups.push(()=>observer.disconnect());return;}
  gsap.registerPlugin(ScrollTrigger);
  $$('.benefit,.why-item,.payment-card,.section-heading').forEach(node=>{gsap.fromTo(node,{y:22},{y:0,duration:.7,ease:'power3.out',scrollTrigger:{trigger:node,start:'top 92%',once:true},clearProps:'transform'});});
  gsap.fromTo('.closing h2',{x:24},{x:-15,ease:'none',scrollTrigger:{trigger:'.closing',start:'top bottom',end:'bottom top',scrub:1}});
  if(window.innerWidth>=1100){gsap.fromTo('.how-step',{x:35,opacity:.6},{x:0,opacity:1,stagger:.13,ease:'power3.out',scrollTrigger:{trigger:'.how',start:'top 75%',end:'top 25%',scrub:1}});}
}
function initCursor(){
  if(!motionEnabled()||!finePointer.matches)return;
  const dot=$('.cursor-dot'),ring=$('.cursor-ring');document.body.classList.add('cursor-enabled');
  let scheduled=false,mouseX=0,mouseY=0,hover=false;
  const move=event=>{mouseX=event.clientX;mouseY=event.clientY;hover=!!event.target.closest('a,button,summary,input,textarea');if(!scheduled){scheduled=true;requestAnimationFrame(()=>{const size=hover?45:26;dot.style.transform=`translate(${mouseX-2}px,${mouseY-2}px)`;ring.style.transform=`translate(${mouseX-size/2}px,${mouseY-size/2}px)`;ring.classList.toggle('is-hover',hover);dot.style.opacity='1';ring.style.opacity='1';scheduled=false;});}};
  const leave=()=>{dot.style.opacity='0';ring.style.opacity='0';};document.addEventListener('pointermove',move,{passive:true});document.addEventListener('pointerleave',leave);state.motionCleanups.push(()=>{document.removeEventListener('pointermove',move);document.removeEventListener('pointerleave',leave);document.body.classList.remove('cursor-enabled');leave();});
}
function stopMotion(){state.motionContext?.revert();state.motionContext=null;[...state.motionCleanups].reverse().forEach(cleanup=>cleanup());state.motionCleanups=[];}
function startMotion(){stopMotion();document.body.classList.toggle('motion-paused',!motionEnabled()||document.hidden);window.dispatchEvent(new CustomEvent('motionchange',{detail:{enabled:motionEnabled(),reduced:motionQuery.matches}}));if(!motionEnabled())return;if(window.gsap)state.motionContext=gsap.context(()=>{initHero();initScrollScenes();});initMarquee();initCursor();}
function initMotion(){
  state.motionPaused=false;
  const button=$('#motion-toggle');button.hidden=true;$('#fx-toggle')?.remove();const update=()=>{button.setAttribute('aria-pressed',String(state.motionPaused));button.setAttribute('aria-label',state.motionPaused?'Bật hiệu ứng chuyển động':'Tạm dừng hiệu ứng chuyển động');button.firstElementChild.textContent=state.motionPaused?'▷':'Ⅱ';const fixed=$('#fx-toggle');if(fixed){fixed.setAttribute('aria-pressed',String(state.motionPaused));fixed.textContent=state.motionPaused?'Bật hiệu ứng':'Tạm dừng hiệu ứng';}};
  $('#fx-toggle')?.addEventListener('click',()=>button.click());
  button.addEventListener('click',()=>{state.motionPaused=false;update();window.dispatchEvent(new CustomEvent('motionchange',{detail:{enabled:true,reduced:motionQuery.matches}}));});motionQuery.addEventListener('change',()=>{if(state.lenis)state.lenis.options.duration=1.2;update();startMotion();});finePointer.addEventListener('change',startMotion);
  document.addEventListener('visibilitychange',()=>{document.body.classList.toggle('motion-paused',document.hidden||!motionEnabled());if(document.hidden)state.lenis?.stop();else syncModalLock();});
  update();initLenis();initPreloader();startMotion();
}

/** Optional diagnostics, driven by GSAP's existing ticker or a timer, never a second Lenis RAF. */
function initDebug(){
  if(!new URLSearchParams(location.search).has('debug'))return;
  $('#debug-hud')?.remove();
  const hud=el('pre','debug-hud');hud.id='debug-hud';hud.setAttribute('aria-label','Scroll and WebGL diagnostics');document.body.append(hud);
  let frames=0,stamp=performance.now(),fps=0;
  const tick=()=>{frames++;const now=performance.now();if(now-stamp>=1000){fps=Math.round(frames*1000/(now-stamp));frames=0;stamp=now;}};
  window.gsap?.ticker.add(tick);
  const timer=setInterval(()=>{const lenis=state.lenis;const scene=$('#webgl');hud.textContent=`LENIS ${lenis?'READY':'NATIVE FALLBACK'}\nscroll   ${(lenis?.scroll||0).toFixed(1)}\nprogress ${(lenis?.progress||0).toFixed(3)}\nvelocity ${(lenis?.velocity||0).toFixed(2)}\nisSmooth ${!!lenis?.isSmooth}\nduration ${lenis?.options.duration??'—'}\nFPS      ${window.gsap?fps:'—'}\nWebGL    ${scene?.dataset.status||'loading'}\n3D FPS   ${scene?.dataset.fps||'—'}\ntier     ${scene?.dataset.tier||scene?.dataset.quality||'—'}\ncalls    ${scene?.dataset.drawCalls||'—'}\ntriangles ${scene?.dataset.triangles||'—'}\nDPR      ${scene?.dataset.dpr||'—'}\nparticles ${scene?.dataset.particles||'—'}\ngovernor ${scene?.dataset.governor||'0'}\nphase    ${scene?.dataset.phase||'hero'}\nbrand    ${state.activeBrand}`;},100);
  window.addEventListener('pagehide',()=>{clearInterval(timer);window.gsap?.ticker.remove(tick);},{once:true});
}
let refreshTimer;
function refreshScroll(){clearTimeout(refreshTimer);refreshTimer=setTimeout(()=>{state.lenis?.resize();window.ScrollTrigger?.refresh();window.dispatchEvent(new CustomEvent('layoutready'));},80);}
function initMobileIntegration(){
  const root=document.documentElement,actions=$('#mobile-actions'),peek=$('#cart-toggle'),sheet=$('#cart-dialog');
  let width=innerWidth,orientationTimer,lastScroll=0,heroEnd=0,footerStart=Infinity;
  function measure(){const scroll=state.lenis?.scroll??window.scrollY;heroEnd=$('.hero').getBoundingClientRect().bottom+scroll;footerStart=$('.footer').getBoundingClientRect().top+scroll;}
  function stableViewport(){root.style.setProperty('--vh',innerHeight*.01+'px');measure();}
  stableViewport();
  const update=event=>{const scroll=event?.scroll??window.scrollY,direction=event?.direction??Math.sign(scroll-lastScroll);lastScroll=scroll;const landscape=innerWidth>innerHeight&&innerHeight<600;const show=scroll>heroEnd-72&&scroll+innerHeight<footerStart+56&&!landscape;document.body.classList.toggle('mobile-actions-visible',show);document.body.classList.toggle('mobile-actions-away',show&&direction>0&&!actions.contains(document.activeElement));};
  const attach=()=>state.lenis?.on('scroll',update);window.addEventListener('lenisready',attach);if(state.lenis)attach();
  window.addEventListener('scroll',()=>{if(!state.lenis)update();},{passive:true});
  window.addEventListener('layoutready',()=>{measure();update(state.lenis);});
  window.addEventListener('resize',()=>{if(innerWidth!==width){width=innerWidth;stableViewport();refreshScroll();}update(state.lenis);},{passive:true});
  window.addEventListener('orientationchange',()=>{clearTimeout(orientationTimer);orientationTimer=setTimeout(()=>{width=innerWidth;stableViewport();refreshScroll();},250);},{passive:true});
  // visualViewport is used exclusively to keep fixed actions clear of the keyboard.
  const viewportOffset=()=>{const vv=window.visualViewport;root.style.setProperty('--keyboard-offset',Math.max(0,innerHeight-(vv?.height||innerHeight)-(vv?.offsetTop||0))+'px');};
  window.visualViewport?.addEventListener('resize',viewportOffset,{passive:true});window.visualViewport?.addEventListener('scroll',viewportOffset,{passive:true});viewportOffset();
  let startY=null,startX=0,delta=0,source=null;
  const begin=event=>{if(event.touches.length!==1)return;source=event.currentTarget;startY=event.touches[0].clientY;startX=event.touches[0].clientX;delta=0;};
  const move=event=>{if(startY===null)return;const t=event.touches[0];if(Math.abs(t.clientX-startX)>40){startY=null;return;}delta=t.clientY-startY;if(source!==peek&&sheet.open)sheet.style.transform='translateY('+Math.max(0,delta)+'px)';};
  const end=()=>{if(startY!==null){if(source===peek&&delta< -40){openDialog(sheet);peek.setAttribute('aria-expanded','true');}else if(source!==peek&&delta>70)closeDialog(sheet);}sheet.style.removeProperty('transform');startY=null;source=null;};
  for(const target of [peek,$('#sheet-handle')]){target.addEventListener('touchstart',begin,{passive:true});target.addEventListener('touchmove',move,{passive:true});target.addEventListener('touchend',end,{passive:true});target.addEventListener('touchcancel',()=>{startY=null;sheet.style.removeProperty('transform');},{passive:true});}
  $('#sheet-handle').addEventListener('click',()=>closeDialog(sheet));
  // Native modal dialogs provide focus trapping, Escape and nested-modal focus restoration.
  window.addEventListener('modalchange',()=>{if(!$('dialog[open]'))update(state.lenis);});
  update(state.lenis);
}

/* 09 / Boot — independent modules keep checkout usable without animation libraries. */
initToast();initContent();initHeader();initPricing();initOrderBuilder();initPayment();initFAQ();initMobileIntegration();initMotion();
initDebug();
window.gamecardApp={cards:CARDS,motionEnabled,refreshScroll};
window.dispatchEvent(new CustomEvent('gamecard-ready'));
document.fonts?.ready.then(refreshScroll);
window.addEventListener('load',refreshScroll,{once:true});
$$('img').forEach(image=>{if(!image.complete)image.addEventListener('load',refreshScroll,{once:true});});
window.addEventListener('pagehide',()=>{stopMotion();state.lenis?.destroy();state.lenis=null;delete window.lenis;});
window.addEventListener('pageshow',event=>{if(event.persisted){initLenis();startMotion();refreshScroll();initDebug();}});
