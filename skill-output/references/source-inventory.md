# Source inventory

Read completely: index.html, style.css, script.js, mobile-policy.js, vercel.json. No other project files were used. The graph tool returned Transport closed; all evidence below comes from direct reads. [Source checksums](source-checksums.json) identify the inspected bytes without copying the original files.

## Sections and surfaces

| Source selector | Role |
|---|---|
| index.html .header, #mobile-menu | Desktop navigation and native mobile-menu dialog |
| index.html .hero | Display headline, supporting copy, fallback cards, reserved 3D artwork area, badge |
| index.html .marquee | Two text tracks replaced visually by the showpiece ribbon |
| index.html .benefits / #benefit-list | Four config-driven icon/text benefits |
| index.html .pricing / #bang-gia | Product tabs, price tables and shared order panel |
| index.html .why / #why-list | Five reasons, separated by thin dividers |
| index.html .how / #how-steps | Three numbered buying stations |
| index.html .payment / #payment-cards | Payment presentation; actual details excluded from this skill |
| index.html .faq / #faq-list | Native details/summary answers |
| index.html .closing / #lien-he | Closing call to action and finale anchor |
| index.html .footer | Brand/navigation/legal copy |
| index.html #cart-dialog, #message-dialog, #qr-dialog | Cart sheet, selectable message and optional QR dialog |
| index.html #webgl, .grain, .preloader, #toast | Decorative background, loading and status layers |

## Libraries and fonts

- index.html classic scripts: Lenis **1.3.26**; GSAP **3.13.0**; ScrollTrigger **3.13.0**, all jsDelivr and defer.
- index.html import map: Three.js **0.160.0**, plus examples/jsm at the same version. [Import-map starter](../assets/import-map.json).
- index.html loadDesktopModules: EffectComposer, RenderPass, UnrealBloomPass, ShaderPass, OutputPass, FontLoader, TextGeometry; helvetiker_bold.typeface.json from the same pinned Three.js package.
- index.html bootScene: Three module and RoomEnvironment. No local build step is present in the permitted source set.
- style.css :root / index.html font link: Anton 400, Be Vietnam Pro 400/500/600/700/800; display=swap. Font service URL is unversioned. Current index.html contains no integrity attributes.

## Custom events

`addtocart`, `brandchange`, `copysuccess`, `desktop-intro-ready`, `desktop-intro-start`, `gamecard-ready`, `layoutready`, `lenisready`, `modalchange`, `motionchange`, `rowhover`, `scene-ready`, `tabchange`.

| Producer | Event and consumer |
|---|---|
| script.js boot | gamecard-ready → bootScene |
| script.js initLenis | lenisready → initHeader, initMobileIntegration, connectLenis |
| script.js refreshScroll | layoutready → createScene measure and mobile measure/update |
| script.js syncModalLock | modalchange → scene activity bookkeeping and mobile actions |
| script.js selectBrand | brandchange → onBrandChange; tabchange → pricing reset |
| script.js initPricing | rowhover → onRow, public face/sale/saved and row reference |
| script.js addToCart | addtocart → flight pool, item ID/face/count/origin |
| script.js initPayment, initQRDialog | copysuccess → payment miniature pulse |
| script.js startMotion, initMotion | motionchange → scene preference sync/reset |
| index.html reportScene | scene-ready → fallback floats/preloader |
| index.html updateHero | desktop-intro-start (no listener found in five files), desktop-intro-ready → preloader |
| index.html failDesktop | desktop-intro-ready also releases the preloader on failure |

## Scenes

All records originate in index.html createDesktopFX through Director.add:

| Name | DOM selector |
|---|---|
| hero | `.hero` |
| ribbon | `.marquee` |
| benefits | `.benefits` |
| pricing | `.pricing` |
| steps | `.how` |
| payment | `.payment` |
| faq | `.faq` |
| reading | `.why` |
| closing | `.closing` |

## Configuration keys

Source: script.js CONFIG.

- Identity/navigation: shopName, contactUrl, facebook, instagram, siteUrl, socialImage, copyrightYear.
- Settlement shape only: payment.{momo,vcb,holder}, sepay.{enabled,bank,account,threshold,prefix}, methods.{momo,vcb}. No source values are copied.
- Order/state: orderMessageTemplate, maxQuantity, storageKey, introKey, motionKey. The introKey/motionKey fields exist but the always-on/replay implementation does not use them to suppress motion or intro.
- Copy: heroEyebrow, heroLine1, heroLine2, heroTagline, heroDescription, heroProof, pricingIntro, pricingFootnote, whyIntro, howIntro, paymentBanner, paymentSafety, closingText.
- Repeated content: benefits [icon,title,text]; reasons [title,text]; steps [title,text]; faq [question,answer].
- CARDS entries: id, name, accent, items. items hold [face,sale], with 7/6/7 rows in the inspected source. Saving is derived, not stored.

## CSS custom properties

Declarations in style.css plus runtime setProperty calls in script.js/index.html:

`--accent`, `--action-height`, `--band-a`, `--band-b`, `--bg`, `--bg-2`, `--body`, `--card`, `--copy-backdrop`, `--display`, `--ease`, `--garena`, `--gold`, `--header-height`, `--keyboard-offset`, `--line`, `--max`, `--muted`, `--pill`, `--save`, `--station-emphasis`, `--surface`, `--text`, `--tilt`, `--vcoin`, `--vh`, `--zing`. 27 distinct properties.


--px and --py are referenced with 0px fallbacks in .game-card but have no assignment in the five files. --station-emphasis is written by updateSteps, but no CSS consumption was found; do not advertise it as a working emphasis effect. --band-a/--band-b still get written, although later continuous-backdrop rules override the old section fill.

Source comments are not all current: D0/D11 comments still describe low tiers/recovery; initLenis mentions a different duration than the executing code; mobile pose comments describe a base scene that the full showpiece can override. The skill follows executable code and the final CSS cascade.
