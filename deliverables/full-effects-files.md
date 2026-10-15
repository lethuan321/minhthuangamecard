# Full updated storefront files

## index.html

```html
<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#07070b">
  <meta name="description" content="Bảng giá thẻ Garena, Zing, VCoin minh bạch. Chọn mệnh giá, xem số tiền tiết kiệm và đặt thẻ cùng Minh Thuận qua Facebook.">
  <meta name="robots" content="index,follow">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="vi_VN">
  <meta property="og:title" content="Chơi hết mình. Nạp thật hời. | Minh Thuận GameCard">
  <meta property="og:description" content="Thẻ Garena, Zing, VCoin. Giá rõ ràng, tiết kiệm từng mệnh giá.">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Minh Thuận GameCard | Bảng giá thẻ game">
  <meta name="twitter:description" content="Chọn thẻ, xem giá và chuẩn bị đơn ngay trên trang.">
  <!-- Canonical and sharing URLs are populated only after CONFIG.siteUrl is set. -->
  <title>Bảng giá thẻ game rẻ hơn nạp gốc | minhthuangamecard</title>
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23e11d1d'/%3E%3Cpath d='M14 44V20h8l10 13 10-13h8v24h-9V33l-9 11-9-11v11z' fill='%23f4f4ef'/%3E%3C/svg%3E">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap&subset=vietnamese,latin-ext" rel="stylesheet">
  <style>html{background:#07070b}body{margin:0;color:#f4f4ef}.preloader[hidden]{display:none}.hero{min-height:100svh}#webgl{position:fixed;inset:0;pointer-events:none}@media(max-width:767px){.hero h1{font-size:clamp(3rem,16vw,6rem)}.hero__art{height:240px}}</style>
  <link rel="stylesheet" href="style.css?v=20261015arrow.1">
  <link rel="modulepreload" href="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js">
  <link rel="modulepreload" href="https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/EffectComposer.js">
  <link rel="modulepreload" href="https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/UnrealBloomPass.js">
  <script type="importmap">{"imports":{"three":"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js","three/addons/":"https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"}}</script>
  <script defer src="https://cdn.jsdelivr.net/npm/lenis@1.3.26/dist/lenis.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
  <script defer src="mobile-policy.js?v=20261015arrow.1"></script>
  <script defer src="script.js?v=20261015arrow.1"></script>
</head>
<body>
  <canvas id="webgl" aria-hidden="true" data-status="loading"></canvas>
  <a class="skip-link" href="#noi-dung">Đến nội dung chính</a>
  <div class="preloader" id="preloader" hidden aria-hidden="true"><span>MINHTHUAN<span class="red">®</span></span><span id="load-count">00</span></div>
  <div class="grain" aria-hidden="true"></div>
  <div class="cursor-dot" aria-hidden="true"></div><div class="cursor-ring" aria-hidden="true"></div>

  <header class="header" id="header">
    <div class="header__inner wrap">
      <a href="#top" class="wordmark" aria-label="Minh Thuận GameCard — về đầu trang"><span class="wordmark__symbol" aria-hidden="true">m<span><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></span><span>MINHTHUAN<span class="wordmark__sub">GAMECARD</span></span></a>
      <nav class="desktop-nav" aria-label="Điều hướng chính"><a href="#bang-gia">Bảng giá</a><a href="#ly-do">Lý do chọn</a><a href="#thanh-toan">Thanh toán</a><a href="#lien-he">Liên hệ</a></nav>
      <div class="header__actions"><a class="social-icon" data-social="instagram" aria-label="Instagram của Minh Thuận" target="_blank" rel="noopener noreferrer" href="https://instagram.com/minhthuan0917?srtk=bjk1b2Z2cmRwM25y"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg></a><a class="social-icon" data-social="facebook" aria-label="Facebook của Minh Thuận" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/share/19uKNcmdx4/?mibextid=wwXIfr"><span aria-hidden="true">f</span></a><a class="button button--small header__buy" data-contact target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/share/19uKNcmdx4/?mibextid=wwXIfr">Mua thẻ ngay <span aria-hidden="true"><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a><button class="menu-toggle" id="menu-toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Mở menu"><span></span><span></span></button></div>
    </div>
  </header>
  <dialog aria-modal="true" class="mobile-menu" id="mobile-menu" aria-label="Menu điều hướng" data-lenis-prevent><div class="mobile-menu__top"><span class="micro">MINHTHUAN GAMECARD</span><button class="icon-button" id="menu-close" aria-label="Đóng menu">×</button></div><nav aria-label="Điều hướng trên điện thoại"><a href="#bang-gia">Bảng giá <span><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a><a href="#ly-do">Lý do chọn <span><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a><a href="#thanh-toan">Thanh toán <span><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a><a href="#lien-he">Liên hệ <span><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a></nav><a data-contact target="_blank" rel="noopener noreferrer" class="button button--red" href="https://www.facebook.com/share/19uKNcmdx4/?mibextid=wwXIfr">Mua thẻ ngay <svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></a><div class="mobile-menu__socials"><a class="social-icon" href="https://instagram.com/minhthuan0917?srtk=bjk1b2Z2cmRwM25y" data-social="instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram của Minh Thuận"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg></a><a class="social-icon" href="https://www.facebook.com/share/19uKNcmdx4/?mibextid=wwXIfr" data-social="facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook của Minh Thuận"><span aria-hidden="true">f</span></a></div></dialog>

  <main id="noi-dung">
    <section data-3d-zone="right" class="hero wrap" id="top" aria-labelledby="hero-title">
      <div class="hero__eyebrow micro"><span class="status-dot"></span><span data-copy="heroEyebrow">THẺ GAME CHÍNH HÃNG · GIÁ TỐT MỖI NGÀY</span><span class="hero__edition">GARENA / ZING / VCOIN</span></div>
      <div class="hero__grid">
        <div class="hero__copy">
          <h1 id="hero-title"><span class="line-mask"><span data-copy="heroLine1">BẢNG GIÁ</span></span><span class="line-mask"><span class="red" data-copy="heroLine2">THẺ GAME</span></span></h1>
          <p class="hero__tagline" data-copy="heroTagline">Nạp game rẻ hơn.<br>Tiết kiệm hơn mỗi ngày.</p>
          <p class="hero__description" data-copy="heroDescription">Chọn thẻ bạn cần, xem ngay giá thật.<br>Phần còn lại, để Minh Thuận lo.</p>
          <div class="hero__buttons"><a class="button button--red magnetic" data-contact target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/share/19uKNcmdx4/?mibextid=wwXIfr"><span>Mua thẻ ngay</span><span aria-hidden="true"><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a><a class="button button--outline" href="#bang-gia">Xem bảng giá <span aria-hidden="true">↓</span></a></div>
          <div class="hero__proof"><span class="check" aria-hidden="true">✓</span><span data-copy="heroProof">Giá công khai. Thanh toán rõ ràng.</span></div>
        </div>
        <div class="hero__art" aria-label="Minh họa thẻ Garena, Zing và VCoin">
          <div class="art-orbit art-orbit--one" aria-hidden="true"></div><div class="art-orbit art-orbit--two" aria-hidden="true"></div>
          <span class="art-coordinate micro" aria-hidden="true">YOUR NEXT LEVEL<br>STARTS HERE.</span>
          <div class="game-card game-card--zing" data-brand-card="zing" aria-hidden="true"><div class="game-card__top"><span>MINHTHUAN / GAMECARD</span><span><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></div><span class="game-card__word">ZING</span><span class="game-card__contour"></span><div class="game-card__bottom"><span>THẺ GAME ĐIỆN TỬ</span><span>02 / Z</span></div></div>
          <div class="game-card game-card--vcoin" data-brand-card="vcoin" aria-hidden="true"><div class="game-card__top"><span>MINHTHUAN / GAMECARD</span><span><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></div><span class="game-card__word">VCOIN</span><span class="game-card__contour"></span><div class="game-card__bottom"><span>THẺ GAME ĐIỆN TỬ</span><span>03 / V</span></div></div>
          <div class="game-card game-card--garena" data-brand-card="garena" aria-hidden="true"><div class="game-card__top"><span>MINHTHUAN / GAMECARD</span><span><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></div><span class="game-card__word">GARENA</span><span class="game-card__contour"></span><div class="game-card__bottom"><span>THẺ GAME ĐIỆN TỬ</span><span>01 / G</span></div></div>
          <div class="saving-note"><span class="saving-note__arrow" aria-hidden="true">↙</span><span>GIỮ LẠI NHIỀU HƠN<br><strong>CHO CUỘC CHƠI.</strong></span></div>
          <div class="circle-badge" aria-label="Mua nhiều, ưu đãi nhiều"><svg viewBox="0 0 120 120" aria-hidden="true"><defs><path id="badge-path" d="M60,60m-43,0a43,43 0 1,1 86,0a43,43 0 1,1 -86,0"/></defs><text><textPath href="#badge-path" textLength="265">MUA NHIỀU · ƯU ĐÃI NHIỀU · </textPath></text></svg><span aria-hidden="true">✳</span></div>
        </div>
      </div>
      <div class="hero__bottom"><a class="micro scroll-cue" href="#bang-gia"><span aria-hidden="true">↓</span> KÉO XUỐNG. CHỌN THẺ.</a><span class="micro hero__bottom-note">NẠP NHẸ VÍ. CHƠI HẾT MÌNH.</span><button id="motion-toggle" class="motion-toggle" aria-pressed="false" aria-label="Tạm dừng hiệu ứng chuyển động"><span aria-hidden="true">Ⅱ</span> HIỆU ỨNG</button></div>
    </section>

    <section data-3d-zone="background" class="marquee" aria-label="Thẻ game giá tốt, giao mã qua tin nhắn"><div class="marquee__track" aria-hidden="true"><span>NẠP GAME RẺ HƠN <i>✳</i> GIAO THẺ SIÊU TỐC <i>✳</i> UY TÍN – AN TOÀN <i>✳</i> HỖ TRỢ TẬN TÌNH <i>✳</i> </span><span>NẠP GAME RẺ HƠN <i>✳</i> GIAO THẺ SIÊU TỐC <i>✳</i> UY TÍN – AN TOÀN <i>✳</i> HỖ TRỢ TẬN TÌNH <i>✳</i> </span></div><div class="marquee__track marquee__track--reverse" aria-hidden="true"><span>GARENA <i><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></i> ZING <i><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></i> VCOIN <i><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></i> CHỌN THẺ. VÀO GAME. <i><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></i> </span><span>GARENA <i><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></i> ZING <i><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></i> VCOIN <i><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></i> CHỌN THẺ. VÀO GAME. <i><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></i> </span></div></section>

    <section data-3d-zone="background" class="benefits wrap" aria-label="Lợi ích khi mua thẻ"><div id="benefit-list" class="benefits__grid"></div></section>

    <section data-3d-zone="right" class="pricing section-space" id="bang-gia" aria-labelledby="pricing-title">
      <div class="wrap">
        <div class="section-heading"><div><p class="micro section-kicker">CHỌN ĐÚNG THẺ. NẠP ĐÚNG GIÁ.</p><h2 id="pricing-title">GIÁ TỐT.<br><span class="muted">KHÔNG CẦN ĐOÁN.</span></h2></div><p class="section-heading__note" data-copy="pricingIntro">Mệnh giá rõ ràng, tiết kiệm cụ thể.<br>Chọn một thẻ hoặc ghép thành đơn của bạn.</p></div>
        <div class="shop-layout">
          <div class="catalog">
            <div class="brand-tabs" data-lenis-prevent-horizontal role="tablist" aria-label="Chọn loại thẻ"><button role="tab" id="tab-garena" aria-selected="true" aria-controls="panel-garena" data-brand="garena"><span class="brand-dot"></span>Garena<span class="tab-count">07</span></button><button role="tab" id="tab-zing" aria-selected="false" aria-controls="panel-zing" data-brand="zing" tabindex="-1"><span class="brand-dot"></span>Zing<span class="tab-count">06</span></button><button role="tab" id="tab-vcoin" aria-selected="false" aria-controls="panel-vcoin" data-brand="vcoin" tabindex="-1"><span class="brand-dot"></span>VCoin<span class="tab-count">07</span></button></div>
            <div id="price-panels"></div>
            <p class="pricing__footnote"><span aria-hidden="true">↳</span> <span data-copy="pricingFootnote">Giá tính cho 01 thẻ. Mua số lượng lớn? Nhắn shop để hỏi ưu đãi.</span></p>
            <noscript><p class="noscript-note">Bật JavaScript để xem bảng giá và ghép đơn. Bạn cũng có thể liên hệ <a href="https://www.facebook.com/share/19uKNcmdx4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Facebook Minh Thuận</a> để hỏi giá.</p></noscript>
          </div>
          <div id="order-slot"><aside class="order-panel" id="order-panel" data-3d-anchor="order-panel" aria-labelledby="order-title" data-lenis-prevent><div class="order-panel__heading"><span class="micro">CHỐT ĐƠN CỦA BẠN</span><span aria-hidden="true"><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></div><h3 id="order-title">THẺ CỦA BẠN<span class="order-count" id="order-count">0</span></h3><div id="cart-items" class="cart-items" data-lenis-prevent></div><div class="order-totals" aria-live="polite" aria-atomic="true"><div><span>Tổng mệnh giá</span><span id="cart-face">0đ</span></div><div class="order-totals__saving"><span>Bạn tiết kiệm</span><span id="cart-saved">0đ</span></div><div class="order-totals__total"><span>Thanh toán</span><strong id="cart-total">0đ</strong></div></div><fieldset class="payment-choice"><legend>Chọn cách thanh toán</legend><label><input type="radio" name="method" value="momo" checked><span>MoMo</span></label><label><input type="radio" name="method" value="vcb"><span>Vietcombank</span></label></fieldset><a class="button button--red order-send" id="send-order" data-contact target="_blank" rel="noopener noreferrer" aria-disabled="true" href="https://www.facebook.com/share/19uKNcmdx4/?mibextid=wwXIfr">Gửi đơn qua Facebook <span aria-hidden="true"><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a><button class="text-button order-preview-button" id="preview-order" disabled>Xem & sao chép nội dung đơn</button><p class="order-panel__note">Nội dung đơn được sao chép để bạn dán vào tin nhắn. Shop xác nhận đơn trước khi bạn chuyển khoản.</p></aside></div>
        </div>
      </div>
    </section>

    <section data-3d-zone="background" class="why wrap section-space" id="ly-do" aria-labelledby="why-title"><div class="why__heading"><p class="micro section-kicker">RÕ RÀNG TỪ GIÁ ĐẾN CÁCH MUA</p><h2 id="why-title">VÌ SAO CHỌN<br>MINH THUẬN<span class="red">?</span></h2><p data-copy="whyIntro">Chuyện nạp game nên đơn giản.<br>Và sự tin tưởng bắt đầu từ những điều rõ ràng.</p><a class="text-link" data-contact target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/share/19uKNcmdx4/?mibextid=wwXIfr">Trò chuyện cùng Minh Thuận <span aria-hidden="true"><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a></div><div class="why__list" id="why-list"></div></section>

    <section data-3d-zone="background" class="how" aria-labelledby="how-title"><div class="wrap"><div class="how__heading"><p class="micro">TỪ CHỌN THẺ ĐẾN VÀO GAME</p><h2 id="how-title">BA BƯỚC.<br>LÀ XONG.</h2><p data-copy="howIntro">Không cần tạo tài khoản.<br>Chỉ cần một tin nhắn.</p></div><ol class="how__steps" id="how-steps"></ol></div></section>

    <section data-3d-zone="background" class="payment wrap section-space" id="thanh-toan" aria-labelledby="payment-title"><div class="section-heading"><div><p class="micro section-kicker">THÔNG TIN THANH TOÁN</p><h2 id="payment-title">ĐÚNG SỐ.<br>ĐÚNG NGƯỜI.</h2></div><p class="section-heading__note">Xác nhận đơn với shop trước khi chuyển.<br>Đừng quên giữ lại bill của bạn nhé.</p></div><div class="payment__grid" id="payment-cards"></div><p id="holder-note" class="holder-note"></p><div class="payment__banner"><span aria-hidden="true"><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span><p data-copy="paymentBanner">Chuyển tiền xong, gửi bill.<br><strong>Minh Thuận gửi mã thẻ cho bạn!</strong></p><span class="micro">UY TÍN · CHẤT LƯỢNG<br>TẠO NIỀM TIN</span></div><p class="payment__safety" data-copy="paymentSafety">Chỉ chuyển khoản đúng số tài khoản trên trang này và kiểm tra lại trước khi xác nhận.</p></section>

    <section data-3d-zone="background" class="faq wrap section-space" aria-labelledby="faq-title"><div><p class="micro section-kicker">CÓ THỂ BẠN ĐANG THẮC MẮC</p><h2 id="faq-title">HỎI NHANH.<br>ĐÁP GỌN.</h2><a class="text-link" data-contact target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/share/19uKNcmdx4/?mibextid=wwXIfr">Cần hỗ trợ thêm? Nhắn shop <svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></a></div><div class="faq__list" id="faq-list"></div></section>

    <section data-3d-zone="center" class="closing" id="lien-he" aria-labelledby="closing-title"><div class="wrap"><div class="closing__top micro"><span>CUỘC CHƠI CỦA BẠN. GIÁ TỐT CỦA CHÚNG MÌNH.</span><span aria-hidden="true"><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></div><h2 id="closing-title"><span>TIẾT KIỆM</span><span>NGAY HÔM NAY<span class="closing__star" aria-hidden="true">✳</span></span></h2><div class="closing__bottom"><p data-copy="closingText">Nhận ưu đãi mỗi ngày!<br>Minh Thuận luôn sẵn lòng hỗ trợ bạn.</p><div class="closing__actions"><a class="button button--light magnetic" data-social="facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/share/19uKNcmdx4/?mibextid=wwXIfr">Facebook <span aria-hidden="true"><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a><a class="button button--outline" data-social="instagram" target="_blank" rel="noopener noreferrer" href="https://instagram.com/minhthuan0917?srtk=bjk1b2Z2cmRwM25y">Instagram <span aria-hidden="true"><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a></div></div></div></section>
  </main>

  <footer class="footer wrap"><div class="footer__top"><a class="wordmark" href="#top"><span class="wordmark__symbol" aria-hidden="true">m<span><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></span><span>MINHTHUAN<span class="wordmark__sub">GAMECARD</span></span></a><span class="micro">NẠP GAME DỄ DÀNG. TRẢI NGHIỆM TRỌN VẸN.</span><a href="#top" class="back-top" aria-label="Về đầu trang">↑</a></div><div class="footer__bottom"><span id="copyright">© 2026 minhthuangamecard</span><p>Cửa hàng bán lẻ độc lập, không trực thuộc Garena, Zing hay VNG/VTC.</p><div><a data-social="facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/share/19uKNcmdx4/?mibextid=wwXIfr">Facebook <svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></a><a data-social="instagram" target="_blank" rel="noopener noreferrer" href="https://instagram.com/minhthuan0917?srtk=bjk1b2Z2cmRwM25y">Instagram <svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></a></div></div></footer>

  <nav class="mobile-actions" id="mobile-actions" aria-label="Liên hệ mua thẻ"><a class="button button--red" data-contact href="https://www.facebook.com/share/19uKNcmdx4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Mua thẻ ngay <span aria-hidden="true"><svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a><a class="social-icon" href="https://instagram.com/minhthuan0917?srtk=bjk1b2Z2cmRwM25y" data-social="instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram của Minh Thuận"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg></a><a class="social-icon" href="https://www.facebook.com/share/19uKNcmdx4/?mibextid=wwXIfr" data-social="facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook của Minh Thuận"><span aria-hidden="true">f</span></a></nav>
  <button id="cart-toggle" class="cart-toggle" aria-expanded="false" aria-controls="cart-dialog"><span>Đơn của bạn <b id="mobile-count">0</b></span><span><strong id="mobile-total">0đ</strong> ↑</span></button>
  <dialog aria-modal="true" class="cart-dialog" id="cart-dialog" aria-label="Đơn thẻ của bạn" data-lenis-prevent><button type="button" class="sheet-handle" id="sheet-handle" aria-label="Đóng bảng đơn thẻ"><span></span></button><div class="cart-dialog__bar"><span class="micro">ĐƠN THẺ CỦA BẠN</span><button class="icon-button" id="cart-close" aria-label="Đóng đơn thẻ">×</button></div><div id="cart-dialog-content" data-lenis-prevent></div></dialog>
  <dialog aria-modal="true" class="message-dialog" id="message-dialog" aria-labelledby="message-title" data-lenis-prevent><div class="dialog-heading"><h2 id="message-title">Nội dung đơn của bạn</h2><button class="icon-button" id="message-close" aria-label="Đóng nội dung đơn">×</button></div><p>Sao chép nội dung bên dưới rồi dán vào tin nhắn cho shop.</p><textarea id="order-message" readonly aria-label="Nội dung đặt thẻ" rows="8"></textarea><div class="message-dialog__actions"><button class="button button--light" id="copy-order">Sao chép nội dung</button><a class="button button--red" data-contact target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/share/19uKNcmdx4/?mibextid=wwXIfr">Mở Facebook <svg class="icon-arrow-up-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></a></div></dialog>
  <div class="toast" id="toast" role="status" aria-live="polite" aria-atomic="true"></div>
  <button id="fx-toggle" class="fx-toggle" type="button" aria-pressed="false">Tạm dừng hiệu ứng</button>
  <!-- Inline module: no local-module fetch, so the document remains file:// compatible. -->
  <script type="module">
    const canvas = document.getElementById('webgl');
    let sceneController = null;
    let bootId = 0;
    let pageInactive = false;
    function reportScene(status) {
      canvas.dataset.status = status;
      window.gamecardSceneStatus = status;
      document.body.classList.toggle('webgl-ready', status === 'running' || status === 'static');
      window.dispatchEvent(new CustomEvent('scene-ready', { detail: { status } }));
    }
    async function bootScene() {
      loadDesktopModules().catch(()=>{});
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

    /* D0 / Desktop imports. LOW never requests these modules or the typeface. */
    let desktopModules;
    function loadDesktopModules() {
      return desktopModules ||= Promise.all([
        import('three/addons/postprocessing/EffectComposer.js'),
        import('three/addons/postprocessing/RenderPass.js'),
        import('three/addons/postprocessing/UnrealBloomPass.js'),
        import('three/addons/postprocessing/ShaderPass.js'),
        import('three/addons/postprocessing/OutputPass.js'),
        import('three/addons/loaders/FontLoader.js'),
        import('three/addons/geometries/TextGeometry.js')
      ]).then(async modules => {
        const result=Object.assign({},...modules);
        try { result.font=await Promise.race([new result.FontLoader().loadAsync('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/fonts/helvetiker_bold.typeface.json'),new Promise(resolve=>setTimeout(()=>resolve(null),2200))]); }
        catch { result.font=null; }
        return result;
      });
    }

    /* D0 / Allocation-free numeric springs and a reversible, hysteretic governor. */
    class Spring {
      constructor(value=0,frequency=9,damping=.8){this.value=value;this.target=value;this.velocity=0;this.frequency=frequency;this.damping=damping;}
      step(dt){const n=Math.max(1,Math.ceil(dt/.016)),h=Math.min(dt,.1)/n,w=this.frequency;for(let i=0;i<n;i++){this.velocity+=(w*w*(this.target-this.value)-2*this.damping*w*this.velocity)*h;this.value+=this.velocity*h;}return this.value;}
      snap(value){this.value=this.target=value;this.velocity=0;return value;}
    }
    class PerformanceGovernor {
      constructor(apply){this.level=0;this.apply=apply;this.reset();}
      sample(dt){this.seconds+=dt;this.frames++;this.level=0;}
      reset(){this.level=0;this.bad=this.good=this.seconds=this.frames=0;}
    }

    /* D0 / Desktop showpiece: augments Part B and uses its single render loop. */
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
        renderer = new T.WebGLRenderer({ canvas, antialias:true, alpha:true, powerPreference:'high-performance' });
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
      const mobileTier=fxFlag==='off'?'OFF':'HIGH';
      const textureSize=1024;
      let overlayOpen=!!document.querySelector('dialog[open]'),lastActivity=performance.now(),orientationTimer,resizeWidth=innerWidth,resizeHeight=innerHeight;
      let visualWidth=window.visualViewport?.width||innerWidth,visualHeight=window.visualViewport?.height||innerHeight;
      const quality='high';
      let disposed=false,contextLost=false,canvasVisible=true,hardFailure=false,lastError='';
      let frame = 0, lastTime = 0, elapsed = 0, resizeTimer, staticPending = false;
      let currentBrand = 'garena', assignedBrand = 'garena', flipTween, colorTween;
      let animate = window.gamecardApp.motionEnabled();

      const pointer = new T.Vector2(), pointerSmooth = new T.Vector2();
      const target = { progress:0, scroll:0, velocity:0 }, smooth = { progress:0, scroll:0, velocity:0 };
      const flip = { angle:0 };
      const metrics = { width:innerWidth, height:innerHeight, heroTop:0, heroBottom:0, artX:.72, artTop:0, artHeight:500, artWidth:500, pricingX:.9 };
      let fpsFrames=0,fpsTime=0,hudAt=-Infinity,hudTimer=0;
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
      try {
      const mobileMonitor={sample(){},reset(){}};
      window.MobileFX ||= {chooseTier:({flag}={})=>flag==='off'?'OFF':'HIGH',budgets:{HIGH:{dpr:2,cards:3,coins:10,particles:700,texture:1024},MEDIUM:{dpr:2,cards:3,coins:10,particles:700,texture:1024},LOW:{dpr:2,cards:3,coins:10,particles:700,texture:1024}},resizeNeeded:(w,h,pw,ph)=>w!==pw||Math.abs(h-ph)>=150,frameRate:()=>Infinity,Monitor:class{constructor(tier="HIGH",apply){this.tier=tier;this.apply=apply;}sample(){}reset(){}}};

      function canvasTexture(width, height, paint) {
        const surface = document.createElement('canvas'); surface.width = width; surface.height = height;
        const ctx = surface.getContext('2d'); if (!ctx) throw new Error('Canvas texture context unavailable');
        paint(ctx, width, height);
        const texture = own(new T.CanvasTexture(surface));
        texture.colorSpace = T.SRGBColorSpace;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        texture.generateMipmaps=true;
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
          ctx.save(); ctx.strokeStyle = ctx.fillStyle; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(892, 123); ctx.lineTo(920, 95); ctx.moveTo(892, 95); ctx.lineTo(920, 95); ctx.lineTo(920, 123); ctx.stroke(); ctx.restore();
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
        document.body.classList.remove('mobile-low');cards.forEach(card=>card.visible=true);for(const light of lights)light.visible=true;
        renderer.setPixelRatio(Math.min(devicePixelRatio,mobile()?2:1.5));renderer.setSize(metrics.width,metrics.height,false);
        particleGeometry.setDrawRange(0,700);coins.count=coinCount;particles.visible=true;
        canvas.dataset.quality=quality;hud.tier='HIGH';hud.particles='700';canvas.dataset.dpr=String(renderer.getPixelRatio());
      }

      function measure() {
        const canvasRect=canvas.getBoundingClientRect();metrics.width=canvasRect.width||innerWidth;metrics.height=canvasRect.height||innerHeight;resizeWidth=innerWidth;resizeHeight=innerHeight;
        const scroll=window.lenis?.scroll || 0;
        const hero=document.querySelector('.hero').getBoundingClientRect();
        const art=document.querySelector('.hero__art').getBoundingClientRect();
        metrics.heroTop=hero.top+scroll;metrics.heroBottom=hero.bottom+scroll;
        metrics.artX=(art.left+art.width/2)/metrics.width;metrics.artTop=art.top+scroll;metrics.artHeight=art.height;metrics.artWidth=art.width;
        const catalog=document.querySelector('.catalog').getBoundingClientRect();
        metrics.pricingX=Math.min(.95,(catalog.right+65)/metrics.width);
        camera.aspect=metrics.width/metrics.height;camera.updateProjectionMatrix();
        applyQuality();desktopFX?.resize();ensureDesktop();requestStatic();
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
          group.visible=metrics.artTop-smooth.scroll<innerHeight&&metrics.artTop+metrics.artHeight-smooth.scroll>0;coins.visible=group.visible;particles.visible=true;
          glow.visible=group.visible;glow.position.copy(group.position);glow.position.z=-2;glow.scale.set(4*group.scale.x,3*group.scale.x,1);
          for(let i=0;i<coins.count;i++){const c=coinSeeds[i],angle=c.angle+(animate?time*c.speed:0);scratch.position.set(group.position.x+Math.cos(angle)*group.scale.x*1.35,group.position.y+Math.sin(angle)*group.scale.x*1.1,c.depth);scratch.rotation.set(Math.PI/2,angle,0);scratch.scale.setScalar(group.scale.x*.45);scratch.updateMatrix();coins.setMatrixAt(i,scratch.matrix);}coins.instanceMatrix.needsUpdate=true;
          if(mobileTier!=='HIGH')for(const light of lights)light.visible=false;
        }
        particleTint.set(colors[assignedBrand]).lerp(white,.65);particleMaterial.color.lerp(particleTint,.02);
      }
      function draw(now) {
        frame=0;if(disposed||contextLost||hardFailure||document.hidden||!canvasVisible)return;
        const wallDt=lastTime?Math.max(.001,(now-lastTime)/1000):1/60,dt=Math.min(wallDt,.1);lastTime=now;elapsed+=dt;
        try{
          renderer.info.reset();pose(dt,elapsed);
          let desktopActive=false;
          if(desktopFX){try{desktopActive=desktopFX.update(dt,elapsed,smooth,true);if(desktopActive)desktopFX.render(dt,wallDt);}catch(error){failDesktop(error);}}
          if(!desktopActive&&!hardFailure)renderer.render(scene,camera);
          if(!hardFailure&&(canvas.dataset.status==='loading'||canvas.dataset.status==='restoring'))reportScene('running');
        }catch(error){failDesktop(error);}
        fpsFrames++;fpsTime+=wallDt;if(fpsTime>=.5){hud.fps=String(Math.round(fpsFrames/fpsTime));fpsFrames=0;fpsTime=0;}
        flushHUD(performance.now());if(!hardFailure&&!contextLost)frame=requestAnimationFrame(draw);
      }

      function requestStatic() {
        if(disposed||contextLost||document.hidden||animate||staticPending)return;
        staticPending=true;frame=requestAnimationFrame(now=>{staticPending=false;draw(now);});
      }
      function start() { if(disposed||contextLost||hardFailure||!canvasVisible||document.hidden||frame)return;lastTime=0;frame=requestAnimationFrame(draw); }
      function stop() { cancelAnimationFrame(frame);frame=0;lastTime=0;staticPending=false; }
      function syncPreference(){if(hardFailure||contextLost)return;animate=true;reportScene('running');start();}

      function connectLenis() {
        detachScroll?.();const lenis=window.lenis;
        if(!lenis?.on)return;
        const update=instance=>{if(Math.abs(instance.velocity)>.1)lastActivity=performance.now();target.progress=instance.progress;target.scroll=instance.scroll;target.velocity=instance.velocity;if(!animate)requestStatic();};
        detachScroll=lenis.on('scroll',update);update(lenis);Object.assign(smooth,target);
      }
      listen(window,'lenisready',connectLenis);
      listen(window,'brandchange',onBrandChange);
      listen(window,'motionchange',syncPreference);
      const scheduleMeasure=()=>{if(mobile()&&!window.MobileFX.resizeNeeded(innerWidth,innerHeight,resizeWidth,resizeHeight))return;clearTimeout(resizeTimer);resizeTimer=setTimeout(measure,150);};
      listen(window,'resize',scheduleMeasure,{passive:true});if(window.visualViewport)listen(window.visualViewport,'resize',()=>{const v=window.visualViewport;if(v.width===visualWidth&&Math.abs(v.height-visualHeight)<150)return;visualWidth=v.width;visualHeight=v.height;clearTimeout(resizeTimer);resizeTimer=setTimeout(measure,150);},{passive:true});
      if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{canvasVisible=entries[0].isIntersecting;if(canvasVisible)start();else stop();});observer.observe(canvas);cleanup.push(()=>observer.disconnect());}
      listen(window,'orientationchange',()=>{clearTimeout(orientationTimer);orientationTimer=setTimeout(measure,250);},{passive:true});
      listen(window,'layoutready',measure);
      listen(window,'modalchange',event=>{overlayOpen=event.detail.open;mobileMonitor.reset();lastActivity=performance.now();});
      listen(window,'pointerdown',()=>lastActivity=performance.now(),{passive:true});
      listen(window,'keydown',()=>lastActivity=performance.now());
      listen(document,'visibilitychange',()=>{if(document.hidden)stop();else{fpsFrames=0;fpsTime=0;mobileMonitor.reset();lastActivity=performance.now();start();}});
      listen(document.querySelector('.hero'),'pointermove',event=>{if(!animate||event.pointerType==='touch'||!matchMedia('(hover:hover) and (pointer:fine)').matches)return;const rect=document.querySelector('.hero').getBoundingClientRect();pointer.set(T.MathUtils.clamp((event.clientX-rect.left)/rect.width*2-1,-1,1),T.MathUtils.clamp((event.clientY-rect.top)/rect.height*2-1,-1,1));},{passive:true});
      listen(document.querySelector('.hero'),'pointerleave',()=>pointer.set(0,0));
      listen(canvas,'webglcontextlost',event=>{event.preventDefault();contextLost=true;stop();document.body.classList.remove('showpiece-ready');reportScene('fallback');});
      listen(canvas,'webglcontextrestored',()=>{canvas.dataset.status='restoring';bootScene();});
      function failDesktop(error){
        const message=String(error?.message||error),hard=renderer.getContext().isContextLost()||/webgl|shader|context lost/i.test(message);
        if(message!==lastError){console.error('[Full FX] '+(hard?'WebGL failure':'scene error')+':',error);lastError=message;}
        if(hard){hardFailure=true;stop();try{desktopFX?.dispose();}catch{}desktopFX=null;document.body.classList.remove('showpiece-ready');reportScene('fallback');}
        window.dispatchEvent(new CustomEvent('desktop-intro-ready'));
      }
      renderer.debug.onShaderError=(gl,program,vertex,fragment)=>failDesktop(new Error('WebGL shader compile error: '+gl.getProgramInfoLog(program)));

      function ensureDesktop(){
        if(disposed||hardFailure||desktopFX||desktopLoading||fxFlag==='off'||fxFlag==='lite'||new URLSearchParams(location.search).get('fx')==='min')return;
        desktopLoading=true;
        loadDesktopModules().then(modules=>{
          if(disposed)return;
          if(window.gamecardIntro?.pending){window.gamecardIntro.pending=false;window.lenis?.scrollTo(0,{immediate:true,force:true});window.scrollTo(0,0);}
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
    loadDesktopModules().catch(()=>{});
    window.addEventListener('pagehide',()=>{pageInactive=true;bootId++;sceneController?.dispose();sceneController=null;});
    window.addEventListener('pageshow',event=>{if(event.persisted){pageInactive=false;bootScene();}});
    function scheduleScene(){if(new URLSearchParams(location.search).get('3d')==='off'){canvas.dataset.tier='OFF';reportScene('fallback');return;}bootScene();}
    if(document.readyState==='complete')scheduleScene();else window.addEventListener('load',scheduleScene,{once:true});
  </script>
</body>
</html>

```

## style.css

```css
/* 01 / Tokens */
:root{--bg:#07070b;--bg-2:#0e0e15;--surface:rgba(255,255,255,.04);--text:#f4f4ef;--muted:#a1a1ac;--line:rgba(255,255,255,.14);--garena:#e11d1d;--zing:#1e6fff;--vcoin:#ff8a00;--save:#22c55e;--gold:#f5c542;--accent:var(--garena);--pill:999px;--card:20px;--ease:cubic-bezier(.22,1,.36,1);--body:'Be Vietnam Pro',Arial,sans-serif;--display:'Anton','Be Vietnam Pro',sans-serif;--max:1280px;--header-height:80px}
/* 02 / Base and accessible defaults */
*,*::before,*::after{box-sizing:border-box}html{scroll-padding-top:96px}body{margin:0;background:var(--bg);color:var(--text);font-family:var(--body);font-size:14px;line-height:1.65;overflow-x:clip;-webkit-font-smoothing:antialiased}html.modal-locked,html.modal-locked body{overflow:hidden}::selection{color:var(--bg);background:var(--gold)}a{color:inherit;text-decoration:none}button,input,textarea{font:inherit}button,a,input,summary{-webkit-tap-highlight-color:transparent}button{color:inherit;cursor:pointer}button{background:none;border:0}button:disabled{cursor:not-allowed;opacity:.4}a[aria-disabled="true"]{opacity:.45;cursor:not-allowed}button:active,.button:active{transform:scale(.98)}:focus-visible{outline:2px solid var(--gold);outline-offset:5px}h1,h2,h3,p{margin:0}h1,h2,.display{font-family:var(--display);font-weight:400}h2{font-size:clamp(40px,5.4vw,76px);line-height:1.12;letter-spacing:-.015em}h3{line-height:1.35}svg{display:block}ol{padding:0;list-style:none}fieldset{padding:0;margin:0;border:0}legend{padding:0}textarea{resize:vertical}dialog{color:var(--text);background:var(--bg-2);border:1px solid var(--line);padding:24px}dialog::backdrop{background:rgba(0,0,0,.78);-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px)}[hidden]{display:none!important}.red{color:var(--garena)}.muted{color:var(--muted)}.micro{font-size:10px;font-weight:600;line-height:1.6;letter-spacing:.1em;text-transform:uppercase}.wrap{width:min(var(--max),calc(100% - 96px));margin-inline:auto}.section-space{padding-block:112px}.section-kicker{margin-bottom:24px;color:var(--muted)}.section-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:32px;margin-bottom:48px}.section-heading__note{color:var(--muted);max-width:320px;font-size:13px;padding-bottom:5px}.skip-link{position:fixed;z-index:100;top:10px;left:10px;background:var(--gold);color:var(--bg);padding:12px 20px;transform:translateY(-160%)}.skip-link:focus{transform:translateY(0)}
/* Lenis recommended native-scroll integration */
html.lenis,html.lenis body{height:auto}
.lenis:not(.lenis-autoToggle).lenis-stopped{overflow:clip}
.lenis [data-lenis-prevent],.lenis [data-lenis-prevent-wheel],.lenis [data-lenis-prevent-touch],.lenis [data-lenis-prevent-vertical],.lenis [data-lenis-prevent-horizontal]{overscroll-behavior:contain}
.lenis.lenis-smooth iframe{pointer-events:none}
.lenis.lenis-autoToggle{transition-property:overflow;transition-duration:1ms;transition-behavior:allow-discrete}
/* 03 / Shared actions */
.button{min-height:48px;border:1px solid var(--line);border-radius:var(--pill);display:inline-flex;align-items:center;justify-content:space-between;gap:30px;padding:14px 24px;font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;line-height:1.5;transition:background .25s,color .25s,border-color .25s,transform .3s var(--ease)}.button>span:last-child:not(:first-child){font-size:21px;line-height:1;transition:transform .3s var(--ease)}.button:hover>span:last-child:not(:first-child){transform:translate(2px,-2px)}.button--red{background:var(--garena);border-color:var(--garena);color:#fff}.button--red:hover{background:#bd1919;border-color:#bd1919}.button--outline:hover{background:var(--text);color:var(--bg);border-color:var(--text)}.button--light{background:var(--text);border-color:var(--text);color:var(--bg)}.button--light:hover{background:#deded8}.button--small{min-height:42px;padding:10px 19px;font-size:10px}.text-link{display:inline-flex;align-items:center;gap:25px;font-size:12px;min-height:44px;position:relative}.text-link::after{position:absolute;content:'';height:1px;background:currentColor;bottom:4px;left:0;right:0;transform:scaleX(.25);transform-origin:left;transition:transform .3s var(--ease)}.text-link:hover::after{transform:scaleX(1)}.text-button{padding:10px 0;font-size:11px;min-height:44px;text-decoration:underline;text-underline-offset:4px}.icon-button{font-size:32px;width:44px;height:44px;line-height:1;border:1px solid var(--line);border-radius:50%}.status-dot,.brand-dot{width:6px;height:6px;border-radius:50%;background:var(--garena);display:inline-block;flex-shrink:0}
/* 04 / Navigation */
.header{position:fixed;inset:0 0 auto;z-index:40;border-bottom:1px solid transparent;transition:transform .35s var(--ease),background .3s,border-color .3s}.header.is-scrolled{background:rgba(7,7,11,.92);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-bottom-color:var(--line)}.header.is-hidden{transform:translateY(-100%)}.header:focus-within{transform:translateY(0)}.header__inner{height:var(--header-height);display:flex;align-items:center;justify-content:space-between;gap:32px}.wordmark{display:inline-flex;align-items:center;gap:10px;flex-shrink:0;font-size:13px;font-weight:800;letter-spacing:-.02em;line-height:1.1;min-height:44px}.wordmark__symbol{display:flex;align-items:center;position:relative;width:35px;height:35px;color:var(--garena);font-weight:800;font-size:39px;line-height:1;letter-spacing:-.18em;transform:skew(-10deg)}.wordmark__symbol>span{font-size:19px;position:absolute;right:-1px;top:-7px;letter-spacing:0}.wordmark__sub{display:block;font-size:8px;font-weight:500;letter-spacing:.35em;margin-top:5px}.desktop-nav{display:flex;gap:26px;align-items:center}.desktop-nav a{font-size:11px;min-height:44px;display:flex;align-items:center;color:#b6b6bd;transition:color .2s}.desktop-nav a:hover{color:var(--text)}.header__actions{display:flex;gap:9px;align-items:center}.social-icon{width:32px;min-height:44px;display:grid;place-items:center;font-weight:700;font-size:22px}.social-icon svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.5}.header__buy{margin-left:13px}.menu-toggle{display:none;width:44px;height:44px;padding:11px}.menu-toggle span{display:block;height:1px;background:var(--text);margin:7px 0}.mobile-menu{height:100dvh;max-height:none;width:100%;max-width:none;margin:0;border:0;padding:24px}.mobile-menu__top{display:flex;justify-content:space-between;align-items:center}.mobile-menu nav{display:flex;flex-direction:column;margin:56px 0 40px}.mobile-menu nav a{display:flex;justify-content:space-between;border-bottom:1px solid var(--line);font-family:var(--display);font-size:clamp(30px,8vw,54px);padding:16px 0}.mobile-menu .button{width:100%}
/* 05 / Hero */
.hero{min-height:800px;min-height:max(760px,100svh);padding-top:120px;display:flex;flex-direction:column;position:relative}.hero__eyebrow{display:flex;align-items:center;gap:9px;color:var(--muted);font-size:9px}.hero__edition{margin-left:auto;font-size:9px}.hero__grid{display:grid;grid-template-columns:1.1fr 1fr;flex:1;align-items:center;gap:20px;padding-top:20px;padding-bottom:30px}.hero__copy{position:relative;z-index:2;padding:20px 0}.hero h1{font-size:clamp(80px,9.4vw,136px);line-height:1.1;letter-spacing:-.018em;margin-left:-3px;white-space:nowrap}.line-mask{display:block;overflow:clip;padding-top:.16em;margin-top:-.16em}.line-mask>span{display:block}.hero__tagline{font-size:clamp(20px,2vw,27px);font-weight:500;line-height:1.5;letter-spacing:-.04em;margin-top:26px}.hero__description{color:var(--muted);font-size:12px;line-height:1.9;margin-top:12px}.hero__buttons{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.hero__proof{display:flex;align-items:center;gap:8px;color:var(--muted);font-size:10px;margin-top:19px}.check{display:inline-grid;place-items:center;border:1px solid currentColor;border-radius:50%;width:16px;height:16px;color:var(--save);font-size:10px}.hero__art{position:relative;height:510px;min-width:0;isolation:isolate}.hero__art::before{content:'';position:absolute;inset:-8%;z-index:-2;background:radial-gradient(ellipse at 47% 53%,rgba(225,29,29,.18),transparent 65%);pointer-events:none}.art-orbit{position:absolute;left:0;top:6%;height:440px;width:440px;border:1px solid rgba(255,255,255,.05);border-radius:50%;transform:rotate(-28deg) scaleX(1.15)}.art-orbit--two{transform:rotate(30deg) scaleX(1.35) scaleY(.63)}.art-coordinate{position:absolute;right:5px;top:18px;font-size:9px;color:#73737e}.game-card{position:absolute;width:260px;height:340px;padding:22px;border-radius:18px;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;color:#fff;box-shadow:0 20px 55px #0009;border:1px solid #ffffff3b;transform-style:preserve-3d;--tilt:0deg;transform:translate3d(var(--px,0px),var(--py,0px),0) rotate(var(--tilt));transition:translate .7s var(--ease)}.game-card::before{position:absolute;content:'';inset:0;opacity:.19;background:repeating-linear-gradient(0deg,transparent 0 3px,#000 3px 4px);pointer-events:none}.game-card::after{content:'';position:absolute;inset:0;background:linear-gradient(125deg,#fff2,transparent 40%,#0004);pointer-events:none}.game-card__top,.game-card__bottom{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:center;font-size:7px;letter-spacing:.07em;font-weight:500}.game-card__top>span:last-child{font-size:23px}.game-card__word{font-family:var(--display);font-size:64px;letter-spacing:-.01em;line-height:1;z-index:2;align-self:center}.game-card__bottom{border-top:1px solid #ffffff50;padding-top:14px;font-size:7px}.game-card__contour{position:absolute;width:330px;height:330px;left:12px;top:80px;border:1px solid #ffffff30;border-radius:50%;box-shadow:0 0 0 22px #ffffff08,0 0 0 44px #ffffff08,0 0 0 66px #ffffff08,0 0 0 88px #ffffff06}.game-card--zing{top:23px;left:38px;--tilt:-17deg;background:linear-gradient(145deg,#176cea,#0c2d75);z-index:1}.game-card--vcoin{top:95px;right:-8px;--tilt:17deg;background:linear-gradient(145deg,#e5a231,#ab4f0c);z-index:2}.game-card--garena{top:139px;left:70px;--tilt:-7deg;background:linear-gradient(145deg,#ef3630,#9d1118);z-index:3}.saving-note{position:absolute;z-index:4;bottom:-6px;right:5px;display:flex;align-items:center;gap:10px;transform:rotate(-6deg);font-size:8px;font-weight:500;letter-spacing:.08em;color:#a4a4ad}.saving-note strong{color:var(--text);font-weight:600}.saving-note__arrow{font-size:35px;color:var(--text);font-weight:400}.circle-badge{position:absolute;z-index:5;left:-6px;top:303px;width:112px;height:112px;border-radius:50%;color:var(--bg);background:var(--text);box-shadow:0 5px 20px #0003}.circle-badge svg{width:100%;height:100%;animation:spin 18s linear infinite}.circle-badge text{font:9px var(--body);font-weight:700;letter-spacing:1.1px;fill:currentColor}.circle-badge>span{position:absolute;inset:0;display:grid;place-items:center;font-size:52px;line-height:1}.hero__bottom{display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--line);padding:20px 0;color:var(--muted)}.scroll-cue{display:flex;gap:13px;align-items:center;min-height:32px;font-size:9px}.scroll-cue>span{font-size:22px;color:var(--text)}.hero__bottom-note{font-size:9px}.motion-toggle{font-size:9px;letter-spacing:.07em;min-height:44px;padding:8px 0 8px 20px;display:flex;align-items:center;gap:10px;color:var(--muted)}.motion-toggle>span{color:var(--text);font-size:13px}
/* 06 / Marquee and benefits */
.marquee{overflow:hidden;border-block:1px solid var(--line);padding:23px 0;background:var(--bg-2)}.marquee__track{display:flex;width:max-content;animation:marquee 42s linear infinite;font-family:var(--display);font-size:clamp(28px,3.5vw,50px);line-height:1.45}.marquee__track>span{white-space:nowrap;flex-shrink:0}.marquee__track i{color:var(--garena);font-style:normal;padding-inline:25px}.marquee__track--reverse{animation-direction:reverse;font-size:clamp(22px,3vw,42px);color:transparent;-webkit-text-stroke:1px #73737d}.marquee__track--reverse i{-webkit-text-stroke:0;color:#73737d}.benefits{padding-block:48px}.benefits__grid{display:grid;grid-template-columns:repeat(4,1fr)}.benefit{padding:0 28px;border-right:1px solid var(--line)}.benefit:first-child{padding-left:0}.benefit:last-child{border:0;padding-right:0}.benefit svg{width:25px;height:25px;fill:none;stroke:var(--text);stroke-width:1.35;margin-bottom:16px}.benefit h3{font-size:13px;font-weight:600;margin-bottom:6px}.benefit p{font-size:11px;color:var(--muted)}
/* 07 / Catalogue */
.pricing{position:relative;border-bottom:1px solid var(--line);isolation:isolate}.pricing::before{position:absolute;content:'';inset:0;z-index:-1;pointer-events:none;background:radial-gradient(ellipse at 15% 38%,color-mix(in srgb,var(--accent) 7%,transparent),transparent 55%);transition:background .6s}.shop-layout{display:grid;grid-template-columns:minmax(0,1fr) 310px;gap:36px;align-items:start}.catalog{min-width:0}.brand-tabs{display:flex;gap:8px;border-bottom:1px solid var(--line);padding:12px 0 18px;position:sticky;top:0;z-index:10;background:var(--bg);transition:top .35s var(--ease)}body.header-visible .brand-tabs{top:var(--header-height)}.brand-tabs button{flex:1;min-height:51px;display:flex;justify-content:center;align-items:center;gap:10px;padding:11px 15px;border:1px solid var(--line);border-radius:var(--pill);font-size:13px;font-weight:500;color:var(--muted);transition:background .25s,border-color .25s,color .25s}.brand-tabs button[aria-selected="true"]{color:var(--text);background:color-mix(in srgb,var(--accent) 12%,var(--bg));border-color:var(--accent)}.brand-tabs button[data-brand="zing"] .brand-dot{background:var(--zing)}.brand-tabs button[data-brand="vcoin"] .brand-dot{background:var(--vcoin)}.tab-count{font-size:9px;color:var(--muted);margin-left:10px}.catalog-brand{display:flex;justify-content:space-between;align-items:center;margin:27px 0 20px}.catalog-brand h3{font-family:var(--display);font-size:26px;letter-spacing:.01em;font-weight:400}.catalog-brand p{font-size:10px;color:var(--muted)}.price-table{border-collapse:collapse;width:100%;font-variant-numeric:tabular-nums;text-align:left;table-layout:fixed}.price-table th{font-size:8px;letter-spacing:.035em;text-transform:uppercase;font-weight:500;color:var(--muted);padding:13px 8px;border-bottom:1px solid var(--line);vertical-align:bottom}.price-table th:nth-child(1){width:21%}.price-table th:nth-child(2){width:19%}.price-table th:nth-child(3){width:22%}.price-table th:nth-child(4){width:18%}.price-table th:nth-child(5){width:20%}.price-table td{border-bottom:1px solid var(--line);padding:20px 8px;transition:background .2s;vertical-align:middle}.price-table tbody tr{position:relative}.price-table tbody tr:hover{background:var(--surface);box-shadow:inset 2px 0 var(--accent)}.price-table td:first-child{font-size:13px;font-weight:500}.price-table td:nth-child(2){font-size:17px;font-weight:700;letter-spacing:-.04em}.save-pill{display:inline-block;font-size:9px;white-space:nowrap;padding:4px 8px;border-radius:var(--pill);background:#22c55e13;color:#68dc92;border:1px solid #22c55e24;line-height:1.6}.save-pill--neutral{background:var(--surface);color:#aaaab5;border-color:var(--line)}.compare-price{color:var(--muted);font-size:9px;line-height:1.6}.best-tag{display:block;font-size:7px;letter-spacing:.015em;color:var(--gold);margin-top:5px;font-weight:500}.row-actions{display:flex;flex-direction:column;align-items:flex-end;gap:1px}.buy-button{border:1px solid var(--line);border-radius:var(--pill);min-height:36px;min-width:74px;display:flex;align-items:center;justify-content:center;gap:12px;font-size:10px;transition:background .2s,border-color .2s}.buy-button:hover{border-color:var(--accent);background:var(--accent);color:white}.add-button{font-size:8px;min-height:35px;color:var(--muted);padding:7px 0}.add-button:hover{color:var(--text)}.pricing__footnote{font-size:10px;color:var(--muted);margin-top:22px;display:flex;gap:10px}.pricing__footnote>span:first-child{font-size:18px;color:var(--text)}
/* 08 / Order receipt and dialogs */
.order-panel{position:sticky;top:104px;padding:24px;background:#111116;border:1px solid var(--line);border-radius:4px;max-height:calc(100svh - 125px);overflow:auto;scrollbar-width:thin;scrollbar-color:#44444c transparent}.order-panel__heading{display:flex;justify-content:space-between;align-items:center;color:var(--muted);border-bottom:1px dashed #ffffff24;padding-bottom:17px}.order-panel__heading .micro{font-size:8px}.order-panel h3{font-family:var(--display);font-size:24px;font-weight:400;display:flex;align-items:center;justify-content:space-between;margin:20px 0}.order-count{font:10px var(--body);display:grid;place-items:center;border:1px solid var(--line);border-radius:50%;width:24px;height:24px}.cart-empty{padding:20px 3px 27px;text-align:center}.cart-empty__icon{display:block;font-family:var(--display);font-size:40px;line-height:1;color:#55555f;margin-bottom:17px}.cart-empty p{font-size:12px;font-weight:500}.cart-empty small{display:block;color:var(--muted);font-size:10px;margin:9px auto 0;max-width:180px}.cart-items{max-height:275px;overflow:auto;scrollbar-width:thin;scrollbar-color:#555 transparent}.cart-item{border-bottom:1px solid var(--line);padding:12px 0}.cart-item__top{display:flex;justify-content:space-between;align-items:center;gap:8px}.cart-item h4{font-size:11px;font-weight:600;margin:0}.cart-item__price{font-size:10px;color:var(--muted)}.cart-item__bottom{display:flex;justify-content:space-between;align-items:center;margin-top:10px}.quantity{display:flex;align-items:center;border:1px solid var(--line);border-radius:var(--pill);overflow:hidden}.quantity button{width:36px;height:36px;font-size:16px}.quantity output{min-width:24px;text-align:center;font-size:11px}.remove-item{font-size:10px;color:var(--muted);min-height:36px;padding:4px}.order-totals{border-top:1px dashed #ffffff24;padding-top:18px;margin-top:4px;font-variant-numeric:tabular-nums}.order-totals>div{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:9px;font-size:10px;color:var(--muted)}.order-totals>.order-totals__saving{color:#68dc92}.order-totals>.order-totals__total{color:var(--text);font-size:12px;margin:16px 0 21px}.order-totals__total strong{font-size:27px;letter-spacing:-.06em}.payment-choice{display:flex;gap:8px;margin-bottom:18px}.payment-choice legend{font-size:10px;color:var(--muted);margin-bottom:10px}.payment-choice label{flex:1;min-height:40px;display:flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--line);border-radius:4px;cursor:pointer;font-size:10px}.payment-choice label:has(input:checked){border-color:#aaaaae;background:#ffffff08}.payment-choice input{accent-color:var(--garena);width:12px;height:12px;margin:0}.order-send{width:100%;font-size:9px;padding:14px 14px;gap:10px;border-radius:4px}.order-preview-button{display:block;width:100%;font-size:9px}.order-panel__note{font-size:9px;color:var(--muted);text-align:center;line-height:1.9;margin-top:10px}.cart-toggle{display:none;position:fixed;bottom:16px;left:24px;right:24px;z-index:35;min-height:58px;border:1px solid #ffffff30;background:var(--text);color:var(--bg);border-radius:var(--pill);padding:12px 22px;justify-content:space-between;align-items:center;font-size:12px;box-shadow:0 6px 30px #0005}.cart-toggle b{display:inline-grid;place-items:center;min-width:23px;height:23px;background:var(--garena);border-radius:50%;color:#fff;font-size:10px;margin-left:8px}.cart-toggle strong{font-weight:600;margin-right:14px}.cart-dialog{inset:auto 0 0;width:100%;max-width:600px;max-height:90svh;margin:0 auto;border-radius:20px 20px 0 0;padding:18px 22px max(22px,env(safe-area-inset-bottom));overflow:auto}.cart-dialog__bar{display:flex;justify-content:space-between;align-items:center}.cart-dialog .order-panel{position:static;max-height:none;border:0;padding:12px 0;background:transparent;overflow:visible}.cart-dialog .order-panel__heading{display:none}.message-dialog{width:min(600px,calc(100% - 32px));border-radius:12px;max-height:90svh}.dialog-heading{display:flex;align-items:center;justify-content:space-between;gap:10px}.dialog-heading h2{font:600 18px var(--body)}.message-dialog p{font-size:12px;color:var(--muted);margin-block:20px}.message-dialog textarea{width:100%;background:var(--bg);color:var(--text);border:1px solid var(--line);padding:14px;line-height:1.8;font-size:12px;min-height:200px;border-radius:4px}.message-dialog__actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:20px}.message-dialog__actions .button{flex:1;font-size:10px;padding:12px 15px;justify-content:center}.toast{position:fixed;z-index:90;bottom:28px;left:50%;max-width:calc(100% - 32px);width:max-content;transform:translate(-50%,24px);opacity:0;visibility:hidden;background:var(--text);color:var(--bg);padding:14px 23px;border-radius:8px;font-size:12px;box-shadow:0 8px 40px #0005;transition:opacity .25s,transform .25s,visibility .25s}.toast.is-visible{opacity:1;visibility:visible;transform:translate(-50%,0)}
/* 09 / Reasons and buying guide */
.why{display:grid;grid-template-columns:1fr 1fr;gap:100px}.why__heading{align-self:start;position:sticky;top:120px}.why h2{font-size:clamp(40px,4.7vw,68px)}.why__heading>p:not(.micro){font-size:13px;color:var(--muted);margin:25px 0 24px;line-height:1.9}.why__list{padding-top:5px}.why-item{display:grid;grid-template-columns:25px 1fr;gap:17px;border-bottom:1px solid var(--line);padding:26px 0}.why-item:first-child{padding-top:0}.why-item .check{width:22px;height:22px;color:var(--text);font-size:12px;margin-top:2px}.why-item h3{font-size:16px;font-weight:500;letter-spacing:-.025em}.why-item p{font-size:11px;line-height:1.9;color:var(--muted);margin-top:8px}.how{background:var(--text);color:var(--bg);padding:80px 0 88px;overflow:clip}.how__heading{display:grid;grid-template-columns:1fr 1.4fr 1fr;gap:30px;align-items:start}.how__heading>.micro{padding-top:10px;font-size:9px;color:#55555e}.how__heading h2{font-size:clamp(45px,5.6vw,80px);line-height:1.1}.how__heading>p:last-child{align-self:end;justify-self:end;font-size:12px;color:#55555e}.how__steps{display:grid;grid-template-columns:repeat(3,1fr);gap:48px;margin:65px 0 0}.how-step{border-top:1px solid #07070b33;padding-top:17px;position:relative}.how-step__number{font-family:var(--display);font-size:75px;line-height:1.25;color:var(--garena)}.how-step__arrow{position:absolute;right:0;top:25px;font-size:28px}.how-step h3{font-size:18px;font-weight:600;margin:15px 0 12px;letter-spacing:-.035em}.how-step p{font-size:12px;color:#55555e;max-width:285px;line-height:1.9}
/* 10 / Payment */
.payment__grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}.payment-card{border:1px solid var(--line);border-radius:var(--card);padding:30px;background:var(--surface);position:relative;overflow:hidden}.payment-card__top{display:flex;align-items:center;justify-content:space-between;margin-bottom:40px}.payment-card__brand{display:flex;align-items:center;gap:11px;font-size:16px;font-weight:600}.payment-mark{width:38px;height:38px;display:grid;place-items:center;font-size:17px;letter-spacing:-.07em;background:#a71963;color:#fff;border-radius:9px}.payment-mark--vcb{background:#153321;color:#81d095;font-size:13px;letter-spacing:-.03em}.payment-card__top>.micro{font-size:8px;color:var(--muted)}.payment-card__label{font-size:10px;color:var(--muted);margin-bottom:5px}.payment-card__number{font-size:clamp(27px,3.2vw,43px);line-height:1.4;font-weight:600;letter-spacing:-.05em;font-variant-numeric:tabular-nums}.payment-card__bottom{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:26px}.payment-holder{font-size:10px;color:var(--muted);max-width:200px}.copy-button{min-width:123px;font-size:9px;gap:10px;justify-content:center;min-height:44px;padding:11px 14px}.holder-note{font-size:11px;color:var(--gold);margin-top:18px}.payment__banner{display:flex;align-items:center;gap:24px;border-block:1px solid var(--line);padding:28px 0;margin-top:40px}.payment__banner>span:first-child{font-size:42px;color:var(--garena);line-height:1}.payment__banner p{font-size:18px;font-weight:400;letter-spacing:-.025em;line-height:1.6}.payment__banner strong{font-weight:500}.payment__banner>.micro{margin-left:auto;text-align:right;font-size:9px;color:var(--muted)}.payment__safety{font-size:10px;color:var(--muted);margin-top:17px}
/* 11 / FAQ and closing */
.faq{display:grid;grid-template-columns:1fr 1.2fr;gap:100px;padding-top:32px}.faq h2{font-size:clamp(40px,4.5vw,64px);margin-bottom:22px}.faq details{border-bottom:1px solid var(--line);padding:0}.faq summary{min-height:77px;display:flex;align-items:center;justify-content:space-between;gap:24px;cursor:pointer;font-size:14px;font-weight:500;list-style:none}.faq summary::-webkit-details-marker{display:none}.faq summary::after{content:'+';font-size:24px;font-weight:400;color:var(--muted)}.faq details[open] summary::after{content:'−'}.faq__answer{padding:0 38px 25px 0;font-size:12px;color:var(--muted);line-height:1.95}.closing{background:var(--garena);min-height:90svh;display:flex;align-items:center;padding:72px 0 80px;overflow:clip}.closing>.wrap{display:flex;flex-direction:column;gap:62px}.closing__top{display:flex;justify-content:space-between;align-items:center;font-size:9px;color:#fff}.closing__top>span:last-child{font-size:30px}.closing h2{font-size:clamp(58px,10.8vw,155px);line-height:1.15;letter-spacing:-.025em;color:var(--text);margin-left:-4px}.closing h2>span{display:block;white-space:nowrap}.closing h2>span:last-child{font-size:.91em}.closing__star{display:inline-block;font-family:var(--body);font-size:.66em;vertical-align:top;margin:5px 0 0 18px}.closing__bottom{display:flex;justify-content:space-between;align-items:flex-end;gap:30px}.closing__bottom>p{font-size:13px;line-height:1.9;color:#fff}.closing__actions{display:flex;gap:12px}.closing__actions .button{min-width:165px;border-color:#ffffff8f}.footer{padding-block:43px 24px}.footer__top{display:flex;align-items:center;justify-content:space-between;gap:24px;padding-bottom:35px;border-bottom:1px solid var(--line)}.footer__top>.micro{font-size:9px;color:var(--muted)}.back-top{display:grid;place-items:center;border:1px solid var(--line);width:44px;height:44px;border-radius:50%;font-size:20px}.footer__bottom{display:flex;align-items:center;justify-content:space-between;gap:20px;color:var(--muted);font-size:9px;padding-top:23px}.footer__bottom p{max-width:450px}.footer__bottom>div{display:flex;gap:20px}.footer__bottom a{min-height:44px;display:inline-flex;align-items:center}
/* 12 / Motion (all content visible without JavaScript) */
.grain{position:fixed;inset:-25%;z-index:60;pointer-events:none;opacity:.035;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.92' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Cpath fill='%23fff' filter='url(%23noise)' d='M0 0h180v180H0z'/%3E%3C/svg%3E");animation:grain 1.2s steps(3) infinite}.preloader{position:fixed;inset:0;z-index:80;background:var(--bg);display:flex;align-items:center;justify-content:space-between;padding:8vw;font:clamp(20px,5vw,64px) var(--display);pointer-events:none}.cursor-dot,.cursor-ring{display:none;pointer-events:none;position:fixed;left:0;top:0;border-radius:50%;z-index:75;opacity:0}.cursor-dot{width:4px;height:4px;background:var(--text)}.cursor-ring{width:26px;height:26px;border:1px solid #ffffff66;transition:width .2s,height .2s}.cursor-ring.is-hover{width:45px;height:45px;border-color:var(--gold)}.motion-paused *,.is-offscreen *{animation-play-state:paused!important}.motion-paused .grain{animation:none}.noscript-note{border:1px solid var(--line);padding:24px}.noscript-note a{text-decoration:underline}@keyframes spin{to{transform:rotate(360deg)}}@keyframes marquee{to{transform:translateX(-50%)}}@keyframes grain{0%,100%{transform:translate(0,0)}33%{transform:translate(-2%,1%)}66%{transform:translate(1%,-2%)}}
/* Readability and touch-target refinements */
.hero{overflow:clip}
html.lenis{scroll-padding-top:0}
#order-slot{align-self:stretch}.game-card--zing .game-card__word{position:absolute;top:72px;left:24px;font-size:53px}.game-card--vcoin{right:20px}.desktop-nav a{font-size:12px}.hero__eyebrow,.hero__edition{font-size:10px}.hero__description{font-size:13px}.hero__proof{font-size:11px}.price-table th{font-size:9px}.save-pill{font-size:10px}.compare-price{font-size:10px}.buy-button{min-height:44px;font-size:11px}.add-button{min-height:44px;font-size:10px}.order-panel__heading .micro{font-size:9px}.order-totals>div{font-size:11px}.order-panel__note{font-size:10px}.order-preview-button{font-size:10px}.order-send{font-size:10px}.quantity button{width:44px;height:44px}.remove-item{min-width:44px;min-height:44px}.payment-choice label{min-height:44px}.benefit p{font-size:12px}.benefit h3{font-size:14px}.benefit svg{width:27px;height:27px}.closing{min-height:100svh}.circle-badge svg{animation-duration:12s}.social-icon{width:44px}
/* Real-time 3D is strictly a decorative layer; existing layout dimensions stay intact. */
body{isolation:isolate}main,.footer{position:relative;z-index:1}
#webgl{position:fixed;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:0;transition:opacity .45s;contain:strict}
.webgl-ready #webgl{opacity:1}.webgl-ready .game-card{visibility:hidden}
.webgl-ready .hero__copy{background:linear-gradient(90deg,rgba(7,7,11,.84),rgba(7,7,11,.38) 75%,transparent)}
.webgl-ready .catalog{background:linear-gradient(#ffffff0f,#ffffff0f),linear-gradient(#09090ee6,#09090edb);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:0 0 0 16px rgba(255,255,255,.025);border-radius:4px}
.webgl-ready .pricing .section-heading__note{background:radial-gradient(ellipse,#07070bef 25%,#07070b00 75%)}
.webgl-ready .why,.webgl-ready .payment,.webgl-ready .faq{background:linear-gradient(90deg,rgba(7,7,11,.91),rgba(7,7,11,.6))}
.webgl-ready .closing{background:linear-gradient(100deg,rgba(225,29,29,.98),rgba(225,29,29,.82))}
.debug-hud{position:fixed;z-index:95;left:12px;bottom:12px;margin:0;padding:12px 15px;pointer-events:none;background:#07070bef;color:#e5f5df;border:1px solid #ffffff40;border-radius:6px;font:11px/1.5 Consolas,monospace;white-space:pre;max-width:calc(100vw - 24px)}
@media(max-width:1099px){.debug-hud{bottom:86px;font-size:10px}}
@media(forced-colors:active){.debug-hud{background:Canvas;color:CanvasText}.webgl-ready .catalog{background:Canvas;box-shadow:none}}
/* 13 / Responsive */
@media(min-width:1440px){.hero{padding-top:140px}.hero__grid{grid-template-columns:1.12fr 1fr;gap:36px}.hero__art{height:550px}.game-card{width:282px;height:365px}.game-card--garena{top:144px;left:70px}.game-card--vcoin{top:93px;right:3px}.game-card--zing{left:22px}.circle-badge{top:334px;left:-15px}.hero h1{font-size:144px}.hero__tagline{margin-top:30px}.hero__buttons{margin-top:30px}}
@media(max-width:1199px){.wrap{width:calc(100% - 64px)}.desktop-nav{gap:17px}.header__inner{gap:18px}.header__actions .social-icon{display:none}.shop-layout{gap:24px;grid-template-columns:minmax(0,1fr) 285px}.order-panel{padding:20px}.game-card{width:235px;height:315px}.game-card--garena{left:45px}.game-card--zing{left:15px}.game-card--vcoin{right:-5px}.art-orbit{width:350px;height:400px}.hero__art{height:480px}.circle-badge{top:300px;left:-17px}.hero__tagline{font-size:22px}.hero__buttons .button{padding-inline:20px;gap:20px}.why,.faq{gap:60px}.price-table th{font-size:7px}.price-table td{padding-inline:5px}.price-table td:nth-child(2){font-size:15px}.save-pill{font-size:8px;padding:4px 6px}.compare-price{font-size:8px}.best-tag{font-size:6px}}
@media(max-width:1099px){.shop-layout{display:block}#order-slot{display:none}.cart-toggle{display:flex;bottom:max(16px,env(safe-area-inset-bottom))}.footer{padding-bottom:105px}.toast{bottom:90px}.price-table th{font-size:10px}.price-table td:nth-child(2){font-size:21px}.price-table td:first-child{font-size:16px}.save-pill{font-size:11px}.compare-price{font-size:11px}.best-tag{font-size:8px}.buy-button{min-height:44px;font-size:12px;min-width:100px}.add-button{font-size:10px;min-height:44px}.brand-tabs{padding-bottom:15px}.how__steps{gap:30px}.hero__grid{grid-template-columns:1.15fr 1fr;gap:0}.hero h1{font-size:10vw}.game-card{width:210px;height:285px;padding:18px}.game-card__word{font-size:53px}.game-card--garena{left:31px;top:165px}.game-card--zing{left:5px;top:65px}.game-card--vcoin{right:-4px;top:130px}.circle-badge{width:95px;height:95px;top:334px;left:-20px}.circle-badge>span{font-size:45px}.saving-note{bottom:-15px}.hero__buttons{gap:8px}.hero__buttons .button{font-size:10px;padding-inline:17px;gap:13px}.hero__edition{font-size:8px}}
@media(max-width:900px){.desktop-nav{display:none}.menu-toggle{display:block}.header__actions .social-icon{display:grid}.hero__edition{display:none}.hero__art{height:470px}.art-coordinate{top:28px}.benefit{padding-inline:18px}.benefit h3{font-size:12px}.benefit p{font-size:10px}.why,.faq{gap:40px}.payment-card{padding:24px}.payment-card__bottom{align-items:flex-start;flex-direction:column}.payment-holder{max-width:none}.closing{min-height:70svh}}
@media(max-width:767px){:root{--header-height:72px}.wrap{width:calc(100% - 40px)}.header__inner{gap:10px}.wordmark{font-size:11px;gap:9px}.wordmark__symbol{font-size:34px;width:31px;height:31px}.wordmark__sub{font-size:7px}.header__buy{margin-left:0;font-size:8px;min-height:38px;padding:9px 13px;gap:16px}.header__actions{gap:2px}.header__actions .social-icon{display:none}.hero{padding-top:96px;min-height:auto}.hero__eyebrow{font-size:8px;letter-spacing:.07em}.hero__grid{grid-template-columns:1fr;padding:20px 0 10px}.hero__copy{padding:10px 0 0}.hero h1{font-size:clamp(74px,17.5vw,130px);line-height:1.1;letter-spacing:-.01em}.hero__tagline{font-size:23px;line-height:1.4;margin-top:22px}.hero__tagline br{display:none}.hero__description{font-size:12px;margin-top:13px}.hero__buttons{margin-top:25px;gap:10px}.hero__buttons .button{min-height:48px;font-size:10px;gap:20px;padding:13px 20px}.hero__proof{margin-top:15px;font-size:9px}.hero__art{height:435px;width:400px;max-width:100%;margin:20px auto 0}.game-card{width:205px;height:275px}.game-card--zing{top:33px;left:20px}.game-card--vcoin{top:80px;right:13px}.game-card--garena{top:110px;left:76px}.circle-badge{top:267px;left:18px;width:91px;height:91px}.circle-badge>span{font-size:43px}.art-coordinate{top:10px;right:0;font-size:7px}.art-orbit{height:360px;width:300px;left:40px;top:10px}.saving-note{bottom:4px;right:10px;font-size:7px}.saving-note__arrow{font-size:27px}.hero__bottom{padding:12px 0}.hero__bottom-note{display:none}.scroll-cue{font-size:8px}.marquee{padding:18px 0}.marquee__track{font-size:29px}.marquee__track--reverse{font-size:24px}.marquee__track i{padding-inline:16px}.benefits{padding-block:36px}.benefits__grid{grid-template-columns:1fr 1fr;row-gap:28px}.benefit{padding-inline:20px}.benefit:nth-child(2){border-right:0;padding-right:0}.benefit:nth-child(3){padding-left:0}.benefit h3{font-size:12px}.benefit p{font-size:10px;max-width:160px}.benefit svg{margin-bottom:12px}.section-space{padding-block:72px}.section-heading{display:block;margin-bottom:30px}.section-kicker{font-size:8px;margin-bottom:17px}.section-heading h2{font-size:clamp(39px,8.9vw,64px)}.section-heading__note{margin-top:23px;font-size:12px}.brand-tabs button{font-size:12px;gap:7px;padding:10px 8px;min-height:48px}.tab-count{font-size:8px;margin-left:3px}.catalog-brand{margin-top:24px}.catalog-brand h3{font-size:23px}.catalog-brand p{font-size:9px}.why,.faq{grid-template-columns:1fr;gap:40px}.why__heading{position:static}.why h2,.faq h2{font-size:49px}.why__heading>p:not(.micro){font-size:12px;margin:20px 0 12px}.why-item h3{font-size:15px}.why-item{padding:23px 0}.how{padding:56px 0}.how__heading{grid-template-columns:1fr 1fr;gap:22px}.how__heading>.micro{grid-column:1/-1;font-size:8px;padding-top:0}.how__heading h2{font-size:50px}.how__heading>p:last-child{font-size:10px}.how__steps{grid-template-columns:1fr;gap:32px;margin-top:37px}.how-step{display:grid;grid-template-columns:75px 1fr;column-gap:19px;align-items:start;padding-top:22px}.how-step__number{grid-row:1/3;font-size:60px}.how-step h3{margin:6px 0 8px;font-size:17px;padding-right:25px}.how-step p{font-size:11px;max-width:none}.how-step__arrow{font-size:23px;top:23px}.payment__grid{grid-template-columns:1fr;gap:16px}.payment-card{padding:24px}.payment-card__top{margin-bottom:25px}.payment-card__number{font-size:38px}.payment-card__bottom{flex-direction:row;align-items:center}.payment-holder{max-width:165px}.payment__banner{gap:17px;margin-top:29px;padding-block:22px}.payment__banner p{font-size:15px}.payment__banner>.micro{display:none}.payment__banner>span:first-child{font-size:30px}.holder-note,.payment__safety{font-size:10px;line-height:1.9}.faq{padding-top:0}.faq summary{font-size:13px;min-height:73px;gap:16px}.faq__answer{font-size:11px;padding-right:22px}.closing{min-height:660px;padding:48px 0 64px}.closing>.wrap{gap:60px}.closing__top{font-size:8px;max-width:100%}.closing__top>span:first-child{max-width:240px}.closing h2{font-size:14vw;line-height:1.25;margin-left:-2px}.closing h2>span:last-child{white-space:normal;font-size:1em;max-width:100%}.closing__star{font-size:.7em;margin-left:14px}.closing__bottom{display:block}.closing__bottom>p{font-size:12px}.closing__actions{margin-top:26px;gap:10px}.closing__actions .button{min-width:0;flex:1;font-size:10px;padding:14px 20px;gap:20px}.footer__top{flex-wrap:wrap;gap:20px;padding-bottom:25px}.footer__top>.micro{order:3;width:100%;font-size:8px}.footer__bottom{display:flex;flex-wrap:wrap;gap:15px;font-size:9px}.footer__bottom p{order:3;max-width:none;line-height:1.9}.footer__bottom>div{margin-left:auto;gap:14px}.footer__bottom a{min-height:30px}.cart-toggle{left:16px;right:16px;font-size:11px;padding-inline:18px}.toast{font-size:11px;padding:13px 17px}.cart-items{max-height:none}.cart-dialog .quantity button{width:44px;height:44px}.cart-dialog .remove-item{min-height:44px}.cart-dialog .cart-item h4{font-size:12px}.cart-dialog .order-send{font-size:11px}.cart-dialog .payment-choice label{min-height:44px;font-size:12px}}
@media(max-width:699px){.price-table,.price-table tbody{display:block;width:100%}.price-table thead{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}.price-table tbody{display:grid;grid-template-columns:1fr 1fr;gap:12px}.price-table tr{display:grid;grid-template-columns:1fr 1fr;align-content:start;border:1px solid var(--line);border-radius:12px;background:var(--surface);padding:16px 14px;gap:9px 5px;min-width:0}.price-table tr:hover{box-shadow:inset 2px 0 var(--accent)}.price-table td{border:0;padding:0!important;display:block}.price-table td:first-child{font-size:14px;grid-column:1/-1;color:#b6b6bf}.price-table td:first-child::before{content:'Mệnh giá ';font-weight:400;font-size:10px}.price-table td:nth-child(2){font-size:23px;grid-column:1/-1;letter-spacing:-.055em}.price-table td:nth-child(3){grid-column:1/-1;min-height:27px}.price-table td:nth-child(4){grid-column:1/-1;font-size:9px;min-height:17px}.price-table td:last-child{grid-column:1/-1}.price-table .save-pill{font-size:9px;padding:4px 7px}.best-tag{font-size:7px}.row-actions{align-items:stretch;margin-top:4px}.buy-button{font-size:10px;min-height:44px}.add-button{font-size:9px;min-height:44px}.pricing__footnote{font-size:9px;margin-top:18px}.price-table tr:has(.best-tag){border-color:#f5c54255}}
@media(max-width:479px){.hero__tagline{max-width:295px}.hero__tagline br{display:block}.hero__buttons .button{padding-inline:17px;gap:12px;font-size:9px}.hero__art{height:410px;margin-top:26px}.game-card{width:182px;height:250px;padding:16px}.game-card__word{font-size:46px}.game-card__top,.game-card__bottom{font-size:6px}.game-card--zing{left:9px;top:36px}.game-card--vcoin{right:7px;top:89px}.game-card--garena{left:64px;top:122px}.circle-badge{top:269px;left:8px;width:84px;height:84px}.art-orbit{width:260px;height:340px;left:26px}.hero__art::before{inset:0}.saving-note{bottom:0;right:0}.circle-badge>span{font-size:38px}.payment-card__number{font-size:34px}.payment-card__brand{font-size:14px}.payment-card__bottom{flex-wrap:wrap;gap:16px}.payment-card__top>.micro{font-size:7px}.payment-card{padding:21px}.payment-holder{max-width:130px}.copy-button{min-width:116px;font-size:8px}.how__heading{gap:20px 10px}.how__heading h2{font-size:45px}.how__heading>p:last-child{font-size:9px}.closing{min-height:620px}.closing h2{font-size:14.8vw}.message-dialog{padding:19px}.dialog-heading h2{font-size:15px}.message-dialog__actions{flex-direction:column}.message-dialog__actions .button{flex:auto}}
@media(max-width:767px){.hero__grid{grid-template-columns:minmax(0,1fr)}.hero__copy{min-width:0}.hero__art{width:min(400px,100%);overflow:clip}.game-card--vcoin{right:30px}.hero__eyebrow{font-size:8px}.hero__proof{font-size:10px}.game-card--zing .game-card__word{font-size:46px;top:66px}.brand-tabs .tab-count{font-size:9px}.benefit p{font-size:11px}.benefit h3{font-size:13px}}
@media(min-width:768px) and (max-width:1099px){.hero__art{scale:.88;transform-origin:40% 50%}.game-card--vcoin{right:22px}.art-orbit{max-width:100%}}
@media(max-width:479px){.price-table tbody{grid-template-columns:1fr}.price-table tr{padding:17px 16px;gap:12px 8px}.price-table td:first-child{grid-column:1;grid-row:1;align-self:center;font-size:14px}.price-table td:first-child::before{display:block;font-size:10px;margin-bottom:2px}.price-table td:nth-child(2){grid-column:2;grid-row:1;text-align:right;align-self:center;font-size:24px}.price-table td:nth-child(3){grid-column:1;grid-row:2}.price-table td:nth-child(4){grid-column:2;grid-row:2;text-align:right;align-self:center;font-size:10px}.price-table td:last-child{grid-row:3}.price-table .save-pill{font-size:10px}.row-actions{flex-direction:row;justify-content:space-between;align-items:center;margin:0}.buy-button{order:2;min-width:104px;font-size:11px}.add-button{font-size:10px}.best-tag{font-size:8px}.catalog-brand p{max-width:132px;text-align:right;font-size:9px}}
@media(hover:hover) and (pointer:fine){.cursor-enabled .cursor-dot,.cursor-enabled .cursor-ring{display:block}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.lenis.lenis-autoToggle{transition:overflow 1ms allow-discrete!important}.grain,.cursor-dot,.cursor-ring,.preloader{display:none!important}.motion-toggle{display:none}.marquee__track{transform:none!important}.game-card{transform:rotate(var(--tilt))!important}}
@media(forced-colors:active){:root{--bg:Canvas;--bg-2:Canvas;--text:CanvasText;--muted:CanvasText;--line:ButtonBorder;--garena:LinkText;--save:CanvasText;--gold:Highlight}.grain,.cursor-dot,.cursor-ring{display:none}.button,.brand-tabs button,.save-pill,.game-card,.payment-card,.order-panel{border:1px solid ButtonBorder}.marquee__track--reverse{color:CanvasText;-webkit-text-stroke:0}.red,.how-step__number{color:LinkText}.button--red,.closing,.how,.cart-toggle{background:Canvas;color:CanvasText}.check{color:CanvasText}}


/* D12 / Desktop safe zones. No extra layout boxes or mobile overrides. */
.fx-toggle{display:none;position:fixed;right:18px;bottom:18px;z-index:85;border:1px solid #ffffff42;border-radius:30px;background:#101017e8;color:var(--text);padding:11px 17px;font:500 11px var(--body);min-height:44px;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}
.preloader--continuous{background:transparent;inset:auto 28px 28px auto;padding:12px 18px;font:12px var(--body);gap:25px;border:1px solid #ffffff30;border-radius:30px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}
.showpiece-ready .fx-toggle{display:none}
.showpiece-ready .marquee{background:transparent;border-color:transparent}
.showpiece-ready .marquee__track{visibility:hidden;animation-play-state:paused}
.showpiece-ready .benefit svg{visibility:hidden}
.showpiece-ready .benefit:focus-visible{outline:2px solid var(--gold);outline-offset:6px}

.showpiece-ready .how-step h3,.showpiece-ready .how-step p{background:var(--text);opacity:var(--station-emphasis,1)}
.showpiece-ready .payment-card{background:linear-gradient(100deg,#14141bf5 55%,#14141b80)}
.showpiece-ready .payment-card__number,.showpiece-ready .payment-card__bottom{position:relative;background:linear-gradient(90deg,#14141bee,#14141b00)}
.showpiece-ready .closing{background:linear-gradient(100deg,#e11d1dfa 45%,#e11d1d77)}
.showpiece-ready .closing h2,.showpiece-ready .closing__bottom{position:relative;background:linear-gradient(90deg,#e11d1dbb,#e11d1d00)}
.fx-order-pulse{animation:order-pulse .65s ease-out}
.fx-order-pulse .order-count{animation:counter-bump .6s ease-out}
@keyframes order-pulse{40%{border-color:#f5c542;box-shadow:0 0 22px #f5c54238}}
@keyframes counter-bump{40%{transform:scale(1.25)}}
@media(forced-colors:active){.showpiece-ready .marquee__track,.showpiece-ready .benefit svg{visibility:visible}.showpiece-ready .how{background:Canvas}}

/* C / Stable mobile viewports and native touch; desktop composition is unchanged. */
html{-webkit-text-size-adjust:100%;text-size-adjust:100%}
button,.button,.buy-button,.social-icon{touch-action:manipulation}
button{user-select:none;-webkit-user-select:none}
[data-lenis-prevent],.mobile-menu,.cart-dialog-content{overscroll-behavior:contain}
.mobile-actions,.mobile-menu__socials,.sheet-handle{display:none}
@supports not (overflow:clip){body{overflow-x:hidden}}
@supports not (height:100svh){.hero{min-height:calc(var(--vh,1vh)*100)}.order-panel{max-height:calc(var(--vh,1vh)*100 - 125px)}.cart-dialog,.message-dialog{max-height:calc(var(--vh,1vh)*90)}}
@media(max-width:1099px){
  :root{--header-height:56px;--keyboard-offset:0px;--action-height:calc(56px + env(safe-area-inset-bottom,0px))}
  body{font-size:16px;line-height:1.5}
  .wrap{width:calc(100% - 32px)}
  .header{padding-top:env(safe-area-inset-top,0px);padding-left:env(safe-area-inset-left,0px);padding-right:env(safe-area-inset-right,0px)}
  .header__inner{gap:8px}.desktop-nav{display:none}.menu-toggle{display:block;flex-shrink:0}.header__actions{gap:8px}.header__buy{font-size:12px;padding:8px 12px;min-height:44px;gap:8px;margin:0}.wordmark{font-size:12px}.wordmark__sub{font-size:12px;letter-spacing:.1em}.wordmark__symbol{font-size:32px;width:28px}
  .header__actions .social-icon{display:none}.social-icon{min-width:48px;min-height:48px}.social-icon svg{width:22px;height:22px}
  .mobile-menu{height:100dvh;padding:calc(16px + env(safe-area-inset-top,0px)) max(16px,env(safe-area-inset-right,0px)) calc(24px + env(safe-area-inset-bottom,0px)) max(16px,env(safe-area-inset-left,0px));overflow:auto}
  .mobile-menu nav{margin:24px 0}.mobile-menu nav a{min-height:56px}.mobile-menu__socials{display:flex;gap:16px;margin-top:24px}.mobile-menu__socials a{border:1px solid var(--line);border-radius:50%}
  #webgl{width:100vw;height:100lvh;max-width:none}
  .mobile-actions{position:fixed;z-index:36;left:0;right:0;bottom:var(--keyboard-offset);display:flex;align-items:center;gap:8px;padding:4px max(16px,env(safe-area-inset-right,0px)) calc(4px + env(safe-area-inset-bottom,0px)) max(16px,env(safe-area-inset-left,0px));background:#0e0e15f5;border-top:1px solid var(--line);transform:translateY(120%);visibility:hidden;transition:transform .25s,visibility .25s}
  .mobile-actions .button{min-width:0;flex:1;min-height:48px;padding:8px 16px;font-size:12px}.mobile-actions .social-icon{border:1px solid var(--line);border-radius:50%;min-width:48px}
  .mobile-actions-visible:not(.mobile-actions-away):not(.modal-open) .mobile-actions{transform:translateY(0);visibility:visible}
  .mobile-actions:focus-within{transform:translateY(0)!important;visibility:visible!important}
  .cart-toggle{display:flex;left:16px;right:16px;min-height:48px;bottom:calc(12px + env(safe-area-inset-bottom,0px) + var(--keyboard-offset));font-size:14px;padding:10px 16px;transition:bottom .25s,transform .25s,visibility .25s}
  .mobile-actions-visible:not(.mobile-actions-away) .cart-toggle{bottom:calc(var(--action-height) + 8px + var(--keyboard-offset))}
  .modal-open .cart-toggle,.modal-open .mobile-actions{transform:translateY(220%);visibility:hidden}
  .cart-toggle b{font-size:12px;min-width:24px}.cart-toggle strong{margin-right:4px}
  .toast{bottom:calc(78px + env(safe-area-inset-bottom,0px) + var(--keyboard-offset));font-size:14px;line-height:1.5;max-width:calc(100% - 32px);overflow-wrap:anywhere}
  .mobile-actions-visible:not(.mobile-actions-away) .toast{bottom:calc(var(--action-height) + 70px + var(--keyboard-offset))}
  .modal-open .toast{bottom:calc(16px + env(safe-area-inset-bottom,0px))}
  .cart-dialog{padding:0 max(16px,env(safe-area-inset-right,0px)) env(safe-area-inset-bottom,0px) max(16px,env(safe-area-inset-left,0px));max-height:90svh;overflow:hidden}
  .sheet-handle{display:grid;place-items:center;min-height:44px;width:100%;touch-action:none}.sheet-handle span{width:44px;height:4px;border-radius:4px;background:#777782}
  .cart-dialog__bar{padding-bottom:8px}.cart-dialog__bar .micro{font-size:12px}.cart-dialog[open]{display:flex;flex-direction:column}
  #cart-dialog-content{min-height:0;overflow:auto;overscroll-behavior:contain;padding-bottom:24px}
  .cart-dialog .order-panel{margin:0;overflow:visible}.cart-items{max-height:none;overflow:visible}.cart-dialog .order-panel h3{font-size:26px}
  .cart-dialog .quantity button{width:44px;height:44px;font-size:20px}.quantity output,input,textarea,.message-dialog textarea{font-size:16px}
  .cart-dialog .cart-item h4,.cart-item__price,.order-totals>div,.order-panel__note,.cart-empty p,.cart-empty small,.payment-choice legend,.payment-choice label,.order-preview-button,.remove-item,.message-dialog p{font-size:14px}
  .cart-dialog .payment-choice label{min-height:48px;font-size:14px}.payment-choice input{width:16px;height:16px}.cart-dialog .order-send{font-size:12px;min-height:56px}.cart-dialog .remove-item{min-height:44px;min-width:44px}.cart-item__bottom{gap:8px}.cart-item{padding-block:16px}.cart-item h4{overflow-wrap:anywhere}
  .order-count{font-size:12px}.message-dialog{padding:16px}.message-dialog__actions .button{min-height:48px;font-size:12px}.message-dialog textarea{min-height:150px}
  .brand-tabs{overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:8px 0;gap:8px;top:0}.brand-tabs button{flex:1 0 112px;min-height:48px;scroll-snap-align:center;font-size:14px;gap:6px}.brand-tabs .tab-count{font-size:12px;margin-left:3px}
  body.header-visible .brand-tabs{top:calc(56px + env(safe-area-inset-top,0px))}
  .catalog{overflow:visible}.webgl-ready .catalog{background:#111116f5;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none}
  .section-space,.how{padding-block:clamp(56px,14vw,96px)}.benefits{padding-block:56px}.benefits__grid{grid-template-columns:1fr 1fr;gap:28px 16px}.benefit{padding:0;border:0}.benefit h3{font-size:16px}.benefit p{font-size:16px;line-height:1.5}
  .micro,.section-kicker,.hero__eyebrow,.hero__edition,.hero__proof,.hero__bottom-note,.catalog-brand p,.pricing__footnote,.save-pill,.compare-price,.best-tag,.holder-note,.payment__safety,.payment-card__top .micro,.payment-holder,.payment-card__label,.footer__top>.micro,.footer__bottom,.closing__top{font-size:12px;letter-spacing:.025em}
  .section-heading__note,.hero__description,.why__heading>p:not(.micro),.why-item p,.how-step p,.how__heading>p:last-child,.faq__answer,.closing__bottom>p,.payment__banner p{font-size:16px;line-height:1.5}
  .text-link,.faq summary{font-size:16px}.faq summary{padding-block:16px}.closing__actions .button,.copy-button{font-size:12px;min-height:48px}.payment__grid{grid-template-columns:1fr}.payment-card__bottom{gap:16px}.copy-button{min-width:132px;justify-content:center}.payment-holder{max-width:none;flex:1}.payment-card__number{font-size:clamp(30px,8vw,42px);overflow-wrap:anywhere}.footer{padding-bottom:96px}.footer__bottom a{min-height:44px}
  .marquee__track{animation-duration:45s;font-size:28px}.marquee__track--reverse{animation-duration:55s;font-size:24px}
  .grain{display:none}.circle-badge svg{animation:none}.mobile-low .circle-badge{display:none}.mobile-low .hero__art::before{display:none}.mobile-low .game-card{box-shadow:none}
  .mobile-low .header.is-scrolled,.mobile-low dialog::backdrop,.mobile-low .fx-toggle{-webkit-backdrop-filter:none;backdrop-filter:none;background:#0e0e15f5}
  .mobile-low .art-orbit{display:none}
}
@media(max-width:767px){
  .hero{padding-top:calc(76px + env(safe-area-inset-top,0px));min-height:100svh}
  .hero__eyebrow{flex-wrap:wrap}.hero__edition{display:none}
  .hero__grid{display:grid;grid-template-columns:minmax(0,1fr);gap:16px;padding:16px 0 24px}.hero__copy{display:contents!important}.hero h1{font-size:clamp(3rem,16vw,6rem);line-height:1.1;grid-row:1;margin:0}
  .hero__art{grid-row:2;width:min(320px,100%);height:240px;max-height:30svh;margin:0 auto;scale:1;overflow:clip}
  .hero__tagline{font-size:22px;margin:0}.hero__description{margin:0}.hero__buttons{margin:0;display:flex;flex-direction:column;gap:8px}.hero__buttons .button--red{width:100%;min-height:56px;font-size:14px}.hero__buttons .button--outline{align-self:flex-start;border:0;border-radius:0;padding:8px 0;font-size:14px;min-height:44px;text-decoration:underline;text-underline-offset:5px}.hero__proof{margin:0}.scroll-cue{display:none}.hero__bottom{justify-content:flex-end}.motion-toggle{font-size:12px}
  .game-card{width:145px;height:194px;padding:12px}.game-card--zing{left:24px;top:10px}.game-card--vcoin{right:18px;top:18px}.game-card--garena{left:calc(50% - 72px);top:36px}.game-card__word,.game-card--zing .game-card__word{font-size:38px}.game-card__top,.game-card__bottom{font-size:6px}.art-coordinate,.saving-note,.circle-badge,.art-orbit{display:none}
  .how__heading{grid-template-columns:1fr;gap:20px}.how__heading>.micro{font-size:12px}.how__heading h2{font-size:48px}.how-step{grid-template-columns:56px 1fr;gap:16px}.how-step__number{font-size:48px}.how-step h3{font-size:20px}.how-step p{font-size:16px}.how-step__arrow{right:0}
  .payment-card{padding:20px}.payment-card__brand{font-size:18px}.payment-card__bottom{flex-wrap:wrap}.payment-card .copy-button{flex:1 0 100%;min-height:48px}.closing__actions{flex-direction:column}.closing__actions .button{width:100%;font-size:14px}.closing__top>span:first-child{max-width:90%}.closing{min-height:100svh}.closing h2{font-size:clamp(44px,13.5vw,96px)}
}
@media(max-width:699px){
  .price-table tbody{grid-template-columns:1fr;gap:16px}.price-table tr{padding:20px 16px;gap:12px;grid-template-columns:1fr 1fr;min-height:240px}
  .price-table td:first-child{grid-column:1/-1;grid-row:1;font-size:14px;text-decoration:line-through}.price-table td:first-child::before{content:'Mệnh giá ';display:inline;text-decoration:none;font-size:12px}.price-table .best-tag{font-size:12px;text-decoration:none}
  .price-table td:nth-child(2){grid-column:1/-1;grid-row:2;text-align:left;font-size:30px}.price-table td:nth-child(2)::before{content:'Giá bán ';font-size:14px;font-weight:400;letter-spacing:0}
  .price-table td:nth-child(3){grid-column:1;grid-row:3}.price-table td:nth-child(4){grid-column:2;grid-row:3;font-size:12px;text-align:right}.price-table td:last-child{grid-column:1/-1;grid-row:4}
  .price-table .save-pill{font-size:12px}.row-actions{flex-direction:column;gap:8px;align-items:stretch}.buy-button{order:0;min-height:56px;width:100%;font-size:14px;background:var(--accent);border-color:var(--accent);color:white}.add-button{font-size:14px;min-height:48px;padding:12px;width:100%;border:1px solid var(--line);border-radius:30px}
  .catalog-brand{align-items:flex-start;gap:12px}.catalog-brand p{font-size:12px;max-width:150px}.pricing__footnote{font-size:12px}
}
@media(min-width:700px) and (max-width:1099px){.price-table th{font-size:12px}.price-table .best-tag,.price-table .save-pill,.compare-price,.add-button{font-size:12px}.price-table th:nth-child(5){width:23%}.row-actions{gap:8px}.buy-button{min-height:48px}.benefits__grid{grid-template-columns:1fr 1fr}}
@media(max-width:1099px) and (orientation:landscape) and (max-height:600px){.mobile-actions{display:none!important}.cart-toggle{bottom:calc(8px + env(safe-area-inset-bottom,0px))!important}.hero{min-height:100svh}.mobile-menu nav{margin:12px 0;display:grid;grid-template-columns:1fr 1fr;gap:8px 24px}.mobile-menu nav a{font-size:28px}.mobile-menu__socials{margin-top:12px}}
@supports not (height:100lvh){@media(max-width:1099px){#webgl{height:calc(var(--vh,1vh)*100)}}}
@supports not (height:100svh){@media(max-width:1099px){.hero,.closing{min-height:calc(var(--vh,1vh)*100)}.cart-dialog,.message-dialog{max-height:calc(var(--vh,1vh)*90)}}}
@media(hover:none),(pointer:coarse){.cursor-dot,.cursor-ring{display:none!important}.magnetic{transform:none!important}.price-table tr:focus-within{box-shadow:inset 2px 0 var(--accent);background:var(--surface)}}

/* Targeted desktop fixes C1–C4. */
.showpiece-ready .order-panel{padding-top:234px;background:linear-gradient(#0000 210px,#111116 210px)}
.showpiece-ready .payment{background:linear-gradient(90deg,rgba(7,7,11,.9),rgba(7,7,11,.3))}
.showpiece-ready .payment-card{background:linear-gradient(100deg,#14141bf5 52%,#14141b22)}
.showpiece-ready .how{background:linear-gradient(var(--text) var(--band-a,55%),transparent var(--band-a,55%) var(--band-b,70%),var(--text) var(--band-b,70%))}
.showpiece-ready .how-step{border-top-color:#ffffff40}
.showpiece-ready .how-step__arrow{color:var(--text)}
html{scrollbar-gutter:stable}
.webgl-ready .catalog{backdrop-filter:none;background:linear-gradient(#ffffff0f,#ffffff0f),linear-gradient(#09090ef2,#09090eef)}
.showpiece-ready .grain{display:none}

/* Full effects: the same scenes, with clear DOM anchor windows on narrow screens. */
#motion-toggle,#fx-toggle{display:none!important}
.preloader--continuous:not([hidden]){display:flex!important}
@media(max-width:1099px){
  .showpiece-ready .catalog{background:transparent;box-shadow:none}
  .showpiece-ready .catalog-brand{padding-top:240px;background:linear-gradient(transparent 232px,#111116 232px)}
  .showpiece-ready .price-table{background:#111116}
  .showpiece-ready .how{background:transparent}
  .showpiece-ready .how__heading{background:var(--text);padding:24px 16px}
  .showpiece-ready .how__steps{grid-template-columns:1fr;gap:24px}
  .showpiece-ready .how-step{display:block;padding:12px 16px 24px;background:linear-gradient(transparent 136px,var(--text) 136px)}
  .showpiece-ready .how-step__number{display:block;height:120px}
  .showpiece-ready .how-step h3{margin:12px 0}
  .showpiece-ready .how-step p{max-width:none}
  .showpiece-ready .payment-card{padding-top:104px;background:linear-gradient(100deg,#14141bf5 52%,#14141b22)}
  .showpiece-ready .closing{background:linear-gradient(180deg,#e11d1d55 230px,#e11d1df2 360px)}
  .showpiece-ready .closing__top{min-height:200px;align-items:flex-start}
  .showpiece-ready .cart-dialog .order-panel{padding-top:12px;background:transparent}
}

/* Font-independent diagonal arrow, including mobile controls and marquees. */
svg.icon-arrow-up-right{display:inline-block;width:1em;height:1em;flex-shrink:0;vertical-align:-.125em;pointer-events:none}

```

## script.js

```javascript
/* 01 / EDIT HERE — shop, prices, copy and business assumptions */
const CONFIG = {
  shopName: 'minhthuangamecard',
  contactUrl: 'https://www.facebook.com/share/19uKNcmdx4/?mibextid=wwXIfr',
  facebook: 'https://www.facebook.com/share/19uKNcmdx4/?mibextid=wwXIfr',
  instagram: 'https://instagram.com/minhthuan0917?srtk=bjk1b2Z2cmRwM25y',
  // TODO: Set the final HTTPS domain; no invented canonical or social image is published.
  siteUrl: '',
  socialImage: '',
  payment: { momo: '0376271084', vcb: '9376271084', holder: '' }, // TODO: Confirm account holder before launch.
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
    heroDescription: 'Chọn thẻ bạn cần, xem ngay giá thật.\nPhần còn lại, để Minh Thuận lo.',
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
    ['Bao lâu thì mình nhận được thẻ?', 'Shop gửi mã sau khi xác nhận đơn và kiểm tra thanh toán. Thời gian phản hồi tùy thời điểm; bạn hãy hỏi shop trước khi chuyển khoản nếu cần thẻ gấp.'],
    ['Nhận mã rồi, mình nạp thẻ thế nào?', 'Vào trang hoặc ứng dụng nạp chính thức của trò chơi, chọn đúng loại thẻ rồi làm theo hướng dẫn của nhà phát hành. Kiểm tra trò chơi và khu vực được hỗ trợ trước khi mua; không cung cấp mật khẩu cho shop.'],
    ['Nếu mã thẻ báo lỗi thì sao?', 'Giữ lại bill và chụp thông báo lỗi, sau đó nhắn lại đúng cuộc trò chuyện đã đặt hàng để shop kiểm tra. Không đăng công khai mã thẻ. Cách xử lý hoặc hoàn tiền sẽ được shop xác nhận theo tình trạng thực tế.'],
    ['Shop nhận thanh toán bằng hình thức nào?', 'Bạn có thể chọn MoMo hoặc Vietcombank. Số tài khoản được công khai ở mục Thanh toán. Xác nhận tên người nhận và nội dung đơn với shop trước khi chuyển.'],
    ['Mình liên hệ hỗ trợ ở đâu?', 'Bạn có thể nhắn Facebook hoặc Instagram được liên kết trên trang. Khi hỏi về đơn đã mua, hãy gửi kèm loại thẻ, mệnh giá và bill để shop dễ kiểm tra.']
  ]
};
const CARDS = [
  { id: 'garena', name: 'Thẻ Garena', accent: '--garena', items: [[5000,5000],[10000,10000],[20000,19000],[50000,48000],[100000,96000],[200000,190000],[500000,480000]] },
  { id: 'zing', name: 'Thẻ Zing', accent: '--zing', items: [[20000,20000],[50000,49000],[100000,98000],[200000,195000],[500000,485000],[1000000,970000]] },
  { id: 'vcoin', name: 'Thẻ VCoin', accent: '--vcoin', items: [[20000,20000],[50000,48000],[100000,96000],[200000,192000],[300000,288000],[500000,480000],[1000000,960000]] }
];

/* 02 / Small shared utilities. No external requests or tracking. */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const moneyFormatter = new Intl.NumberFormat('vi-VN');
const money = value => `${moneyFormatter.format(value)}đ`;
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktopQuery = window.matchMedia('(min-width: 1100px)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const state = { cart: [], method: 'momo', activeBrand: 'garena', lenis: null, motionContext: null, motionCleanups: [], motionPaused: false };
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
    const table = el('table','price-table'); table.setAttribute('aria-label',`Bảng giá ${brand.name}`);
    const thead = el('thead'); const headRow = el('tr'); ['Mệnh giá','Giá bán','Tiết kiệm','So với nạp gốc','Đặt thẻ'].forEach(label => { const th = el('th','',label); th.scope = 'col'; headRow.append(th); }); thead.append(headRow); table.append(thead);
    const tbody = el('tbody'); const bestSaving = Math.max(...brand.items.map(([face,sale]) => face - sale));
    brand.items.forEach(([face,sale]) => {
      const saved = face - sale, percent = saved / face * 100;
      const row = el('tr'); row.dataset.brand=brand.id;row.dataset.best=String(saved===bestSaving&&saved>0);row.dataset.face = String(face); row.dataset.sale = String(sale); row.dataset.saved = String(saved);
      const faceCell = el('td','',money(face)); const saleCell = el('td','',money(sale));
      const saveCell = el('td'); const pill = el('span',`save-pill${saved ? '' : ' save-pill--neutral'}`,saved ? `↓ ${money(saved)}` : 'Giữ nguyên'); pill.title = saved ? `Tiết kiệm ${moneyFormatter.format(percent)}%` : 'Giá bán bằng mệnh giá'; saveCell.append(pill);
      if (saved && saved === bestSaving) faceCell.append(el('span','best-tag','TIẾT KIỆM NHẤT'));
      const compare = el('td','compare-price',saved ? `Rẻ hơn ${money(saved)}` : 'Không đổi giá');
      const actionCell = el('td'); const actions = el('div','row-actions');
      const buy = externalLink('buy-button','Mua'); setArrowLabel(buy, 'Mua'); buy.setAttribute('aria-label',`Mua ${brand.name} ${money(face)}`); buy.dataset.contact = '';
      buy.addEventListener('click', () => prepareOrderForChat([{ brand:brand.id, face, qty:1 }]));
      const add = el('button','add-button','+ Thêm vào đơn'); add.type = 'button'; add.setAttribute('aria-label',`Thêm ${brand.name} ${money(face)} vào đơn`); add.addEventListener('click', () => addToCart(brand.id,face,row));
      actions.append(buy,add); actionCell.append(actions); row.append(faceCell,saleCell,saveCell,compare,actionCell); tbody.append(row);
    });
    table.append(tbody); panel.append(table);
    const announceRow=event=>{const row=event.target.closest('tr[data-face]');if(row)window.dispatchEvent(new CustomEvent('rowhover',{detail:{id:brand.id,face:+row.dataset.face,sale:+row.dataset.sale,saved:+row.dataset.saved,row}}));};
    tbody.addEventListener('pointerover',announceRow);tbody.addEventListener('pointerdown',announceRow);tbody.addEventListener('focusin',announceRow); panels.append(panel);
    tab.addEventListener('click', () => selectBrand(brand.id));
  });
  const tabs = $$('[role="tab"]');
  $('.brand-tabs').addEventListener('keydown', event => { const current = tabs.indexOf(document.activeElement); if (current < 0) return; let next; if (event.key === 'ArrowRight') next = (current+1)%tabs.length; if (event.key === 'ArrowLeft') next = (current-1+tabs.length)%tabs.length; if (event.key === 'Home') next = 0; if (event.key === 'End') next = tabs.length-1; if (next === undefined) return; event.preventDefault(); tabs[next].focus(); selectBrand(tabs[next].dataset.brand); });
}
function selectBrand(id) {
  state.activeBrand = id; const brand = CARDS.find(item => item.id === id); $('#bang-gia').style.setProperty('--accent',`var(${brand.accent})`);
  $$('[role="tab"]').forEach(tab => { const selected = tab.dataset.brand === id; tab.setAttribute('aria-selected',String(selected)); tab.tabIndex = selected ? 0 : -1; });
  $$('.price-panel').forEach(panel => { panel.hidden = panel.id !== `panel-${id}`; });
  if (motionEnabled() && window.gsap) gsap.fromTo($$('tbody tr',$(`#panel-${id}`)),{ y:8, opacity:.45 },{ y:0, opacity:1, duration:.35, stagger:.025, clearProps:'transform,opacity' });
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
  $('#send-order').setAttribute('aria-disabled',String(!sum.count)); $('#preview-order').disabled = !sum.count;
  if (focusId) { const target = document.getElementById(focusId); if (target && !target.disabled) target.focus({preventScroll:true}); else $('.quantity button:not(:disabled)',container)?.focus({preventScroll:true}); }
}
function showOrderPreview(message) { $('#order-message').value = message; openDialog($('#message-dialog')); }
function prepareOrderForChat(cart) {
  const message = orderMessage(cart);
  // The supplied share URL cannot guarantee Messenger-prefill; native links preserve popup activation.
  copyText(message).then(success => { if (success) toast('Đã sao chép nội dung đơn – dán vào tin nhắn nhé!'); else { showOrderPreview(message); toast('Chưa thể sao chép tự động. Bạn có thể chọn và sao chép nội dung đơn.'); } });
}
function initOrderBuilder() {
  restoreCart(); $('#order-title').tabIndex = -1; renderCart();
  $$('input[name="method"]').forEach(radio => { radio.checked = radio.value === state.method; radio.addEventListener('change',()=>{state.method=radio.value;saveCart();}); });
  $('#send-order').addEventListener('click',event=>{if(!state.cart.length){event.preventDefault();toast('Thêm thẻ vào đơn trước nhé.');return;}prepareOrderForChat(state.cart);});
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
```

## mobile-policy.js

```javascript
/* Full-effects policy: device hints and frame rate never reduce visual quality. */
(function(root){
  'use strict';
  function chooseTier({flag}={}){return flag==='off'?'OFF':'HIGH';}
  const full=Object.freeze({dpr:2,cards:3,coins:10,particles:700,texture:1024});
  const budgets=Object.freeze({HIGH:full,MEDIUM:full,LOW:full});
  function resizeNeeded(width,height,previousWidth,previousHeight){return width!==previousWidth||Math.abs(height-previousHeight)>=150;}
  function frameRate(){return Infinity;}
  class Monitor{constructor(tier='HIGH',apply){this.tier=tier;this.apply=apply;}sample(){}reset(){}}
  const api={chooseTier,budgets,resizeNeeded,frameRate,Monitor};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.MobileFX=api;
})(typeof window==='undefined'?globalThis:window);

```

