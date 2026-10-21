---
name: build-scroll-storefront
description: "Build or adapt a landing page or storefront with Lenis smooth scroll and a DOM-anchored Three.js hero. Use source-backed typography, pricing, mobile and scene patterns without copying business details."
---

# Build a scroll storefront

## When to use

Use for a static landing page or storefront where product data, readable copy and decorative 3D share one document. Keep the functional HTML usable when animation imports fail. This boundary comes from `script.js` boot, `initLenis`, `initPricing`, and `index.html` `bootScene`/`reportScene`.

Do not use as a backend, payment-verification system or a general visual style for every product. The source only prepares orders and QR requests; `script.js` `tryOpenQRPayment` never verifies a transaction.

Read [the source inventory](references/source-inventory.md) first. It identifies the five inspected files, versions, events, scenes and config keys. Read [design details](references/design-source.md) when adapting typography or composition; read [systems details](references/systems-source.md) when wiring scroll, scenes and checkout.

## Design system

- Pair Anton display headings with Be Vietnam Pro body text; Arial and sans-serif are fallbacks. Keep Vietnamese text as DOM text. Source: `style.css` `:root`, `h1,h2,.display`; `index.html` Google Fonts link.
- Base body is 14px/1.65; the final mobile rule below 1100px is 16px/1.5. Headings use weight 400. `h2` is `clamp(40px,5.4vw,76px)`/1.12. Source: `style.css` `body`, `h2`, mobile `body`.
- Hero display is `clamp(80px,9.4vw,136px)`/1.1, then 144px at 1440px and above; the final rule below 768px is `clamp(3rem,16vw,6rem)`/1.1. Do not copy an earlier overridden mobile size. Source: `style.css` `.hero h1` and its media rules.
- Use `--bg:#07070b` for the page, `--bg-2:#0e0e15` for modal surfaces, `--text:#f4f4ef` for primary text, `--muted:#a1a1ac` for supporting text, and `--line:rgba(255,255,255,.14)` for dividers. Source: `style.css` `:root`.
- Source product accents are `--garena:#e11d1d`, `--zing:#1e6fff`, `--vcoin:#ff8a00`; `--save:#22c55e` marks savings, `--gold:#f5c542` marks focus/highlights. Rename product tokens for a new catalog. Source: `style.css` `:root`, `.save-pill`, `:focus-visible`.
- Spacing is repeated literal values, not a formal token scale: 8/12/16/24/32/48px in controls and grids; `.section-space` uses 112px, overridden on mobile by `clamp(56px,14vw,96px)`. `.wrap` is `min(1280px,calc(100% - 96px))`; the final mobile width is `calc(100% - 32px)`. Source: `style.css` `.button`, `.section-heading`, `.benefits__grid`, `.wrap`, `.section-space`.
- Use 999px pill corners, 20px payment-card corners, 12px message-dialog corners and 20px top corners on the cart sheet. Borders are generally 1px. Source: `style.css` `:root`, `.button`, `.payment-card`, `.message-dialog`, `.cart-dialog`.
- Keep shadows on contained objects: CSS game-card `0 20px 55px #0009`; cart toggle `0 6px 30px #0005`; toast `0 8px 40px #0005`. Source: `style.css` `.game-card`, `.cart-toggle`, `.toast`.
- Keep the canvas full-bleed behind content. With WebGL ready, remove section-sized fills, blur and shadows; use local 100px masked feathers around small copy, peak dark alpha .24. The hero uses a separate radial backdrop at alpha .38. Preserve dialog surfaces. Source: `style.css` `#webgl`, `body.webgl-ready :is(...)`, local-copy `::before`, `.webgl-ready .hero__copy`.
- The light buying-guide copy needs a light local backdrop, `--copy-backdrop:rgba(244,244,239,.94)`, because its text remains dark. Do not apply the dark scrim indiscriminately. Source: `style.css` `body.webgl-ready .how`.

Use [the token starter](assets/design-tokens.css); only the three brand token names are generalized.

## Motion rules

- Use `cubic-bezier(.22,1,.36,1)` for CSS movement, .25s for button colors, .3s for button transforms, .35s for header movement. Source: `style.css` `--ease`, `.button`, `.header`.
- Reveal headline spans with yPercent 105→0, .8s, .2s delay, .08s stagger, `power3.out`. Scroll reveals move y 22→0 over .7s on desktop, y 14→0 over .45s on mobile. Clear transform props after entrance. Source: `script.js` `initHero`, `initScrollScenes`.
- Let a selected brand flip over .9s using `power3.inOut`; swap its texture halfway. Scene theme colors use 1.2s `power2.inOut`. Source: `index.html` `onBrandChange`, `setTheme`.
- Animate transforms, material values and pooled instances without changing the DOM anchor footprint. Do not animate the semantic price values or hide required copy pending animation. Source: `script.js` `initPricing`, `initScrollScenes`; `index.html` `updatePricing`, `Director`.
- Pointer magnetism and raycaster drag are fine-pointer behaviors; touch keeps native scroll. Source: `script.js` `initHero`/`finePointer`; `index.html` `blocked`, pointer listeners.
- This source intentionally keeps 3D and Lenis active under reduced motion, has no automatic quality reduction, and only pauses rendering while hidden/off-screen or on hard failure. Treat that as an explicit project policy to confirm when adapting, not an accessibility recommendation. Source: `script.js` `motionEnabled`, `initMotion`; `mobile-policy.js` `Monitor`; `index.html` `draw`, `start`, `applyGovernor`.

## Scroll recipe

1. Use the exact options in [Lenis initialization](assets/lenis-init.js): smoothWheel true, duration 1.2, infinite false, vertical orientation/gestures, autoRaf true, autoToggle true, anchors offset -72, allowNestedScroll true, syncTouch false, stopInertiaOnNavigate true, respectReducedMotion false. Source: `script.js` `initLenis`.
2. Keep one Lenis RAF owner. Subscribe `lenis.on('scroll', ScrollTrigger.update)`; the GSAP ticker in `initDebug` only counts frames. Set ignoreMobileResize and the source's refresh events. Source: `script.js` `initLenis`, `initDebug`.
3. Keep actual hash anchors. A mobile-menu link clicked while Lenis is stopped closes the dialog, waits for resume, then replays the link once. Source: `script.js` `initHeader`.
4. Lock scroll through `syncModalLock`, native dialog open state and `data-lenis-prevent`; resume only when no dialog is open and the document is visible. Source: `script.js` `openDialog`, `closeDialog`, `syncModalLock`; `style.css` `html.modal-locked`, `.lenis [data-lenis-prevent]`.
5. Debounce layout refresh 80ms after tabs, fonts and image loads, then emit `layoutready`. Retain native scrolling on Lenis load failure. Source: `script.js` `refreshScroll`, boot listeners, `initLenis` catch.

## 3D recipe

- Read [scene and resource contracts](references/systems-source.md) before copying the loader. [Scene loader](assets/scene-loader.js) plus [import map](assets/import-map.json) are dependency starters, not a complete renderer. Source: `index.html` `loadDesktopModules`.
- Renderer: antialias true, alpha true, high-performance preference, sRGB output, ACES tone mapping, exposure 1.1, no shadows, PMREM RoomEnvironment. DPR caps are 2 below 1100px and 1.5 otherwise. Source: `index.html` `createScene`, `applyQuality`.
- Composer order is RenderPass → UnrealBloomPass(.4,.3,.85) → warp ShaderPass → grain/vignette ShaderPass → OutputPass. The full showpiece sets opaque clear alpha 1 and matches the fog color. Reset renderer.info each rendered frame; update composer DPR and size on resize. Source: `index.html` `createDesktopFX`, `updateGlobals`, `render`, `applyGovernor`.
- Update camera projection and world matrices before unprojecting DOM centers. Compute world units per CSS pixel at each point's camera-forward distance. Measure actual DOM rects and map to a chosen z plane. Source: `index.html` `syncCamera`, `pxRatio`, `screenToWorld`, `domToWorld`.
- Register small scene records with enter/update/exit. Visibility uses section rects plus an 80px viewport buffer, not fixed page-progress guesses. Scene focus is the nearest visible section center. Source: `index.html` `Director.add`, `Director.update`.
- Reuse 700 particle positions, 10 base coin instances, 60 ambient gems, 12 rings, 4 glass instances and 48 streaks. Event pools cap bursts at 100, coins at 120 and confetti at 280; flights have five slots. Source: `index.html` `createScene`, `Pool`, `createDesktopFX` ambient/event setup.
- Use Points or LineBasicMaterial for trails; turn frustum culling off on dynamic trails/instances where bounds would become stale. Source: `index.html` comet, flight lines, coinTrails and Pool constructor.
- Feed scenes `rowhover`, `addtocart`, `tabchange`, `brandchange` and `copysuccess`, carrying IDs and numeric public totals rather than reaching into unrelated controls. Source: `script.js` `initPricing`, `addToCart`, `selectBrand`, `initPayment`; `index.html` showpiece listeners.
- Report readiness only after a successful render. Keep CSS card art as fallback. Hard WebGL/context/shader failures stop rendering; restoration reboots; teardown releases listeners, tweens, passes and resources and restores lights/materials. Source: `index.html` `bootScene`, `reportScene`, `failDesktop`, `dispose`, `rollbackConstruction`, `restoreLights`.
- Full showpiece is eligible on all widths. `?3d=off` skips WebGL; `?3d=lite` and `?fx=min` skip the showpiece but retain base rendering; `?3d=high` does not skip it. Imports are still requested eagerly by the module. Source: `index.html` `scheduleScene`, `ensureDesktop`, `enabled`, final `loadDesktopModules` call.

## Content and data

- Start from [the config skeleton](assets/config-skeleton.js). Its field/array shapes and numeric catalog examples come from `script.js` `CONFIG` and `CARDS`; names and copy are placeholders. It is an integration excerpt, not a standalone app.
- Render copy via `[data-copy]` and textContent; use one catalog for table rows, totals, metadata and texture labels. Source: `script.js` `initContent`, `initPricing`, `totals`; `index.html` denominationTextures setup.
- Show face value, computed saving and payable amount, then actions. Saving is face minus sale. Zero saving gets a neutral pill and no strike-through. Mark the largest positive saving; equal maxima would all be marked by this source. Source: `script.js` `initPricing`; `style.css` `.price-face__value`, `.save-pill--neutral`.
- Derive tab count from item count and pad to two digits. Restore only known products and positive integer quantities, capped by maxQuantity. Source: `script.js` `initPricing`, `restoreCart`.
- Manual flow copies a prepared message while allowing the native contact link; a selectable dialog handles clipboard failure. QR is optional and disabled by default. Every line must meet CONFIG.sepay.threshold by face value; amount is sum(sale × quantity), not face value. Mixed small/large carts stay manual. Source: `script.js` `prepareOrderForChat`, `copyText`, `qrEligible`, `buildQRPayment`, `tryOpenQRPayment`.
- Under the requested privacy rule, retain settlement placeholders and leave QR disabled. The source's public settlement rendering is not an approved privacy pattern. See [the privacy limitation](references/systems-source.md). Source evidence: `script.js` `CONFIG.payment`, `initPayment`, `tryOpenQRPayment`; this stricter exclusion is a user requirement.

## Mobile pattern

- Below 1100px move the same order-panel node into the native cart dialog; move it back on desktop. Do not duplicate cart state or handlers. Source: `script.js` `initOrderBuilder`/`positionPanel`.
- Use the final narrow hero order: headline, reserved 240px artwork slot, supporting copy, full-width primary action. Below 700px pricing uses two minmax(0,1fr) columns with explicit face/saving/pay/action rows. Source: `style.css` final mobile `.hero__grid`, `.hero__art`, `.price-table` rules.
- Use 44–56px action targets and 16px form text; native touch scroll, no magnetic transforms on coarse pointers. Source: `style.css` mobile controls, `(hover:none),(pointer:coarse)`; `index.html` `blocked`.
- Open the sheet from a toggle upward swipe exceeding 40px; close from handle downward swipe exceeding 70px. Cancel horizontal intent beyond 40px. Keep ordinary sheet content scrollable. Source: `script.js` `initMobileIntegration`; `style.css` `.sheet-handle`, `#cart-dialog-content`.
- Use svh for content/sheet sizing, lvh for the mobile canvas, dvh for the mobile menu and QR dialog, safe-area insets for fixed actions. Set --vh fallback on stable width/orientation changes and --keyboard-offset from visualViewport. Source: `style.css` mobile and @supports rules; `script.js` `initMobileIntegration`.
- Ignore render-resize height jitter below 150px at unchanged width; refresh on orientation and meaningful viewport changes. Source: `mobile-policy.js` `resizeNeeded`; `index.html` `scheduleMeasure`, visualViewport listener.

## Security and privacy checklist

- Keep secrets, internal commercial figures, settlement identifiers, phone numbers, recipient names and source contact destinations out of public artifacts and comments. Use [CONTACT_URL], [ACCOUNT_NUMBER], [RECIPIENT_NAME] in templates. This is the requested adaptation rule, not a claim that the source already obeys it.
- Use createElement/textContent for dynamic content. Retain innerHTML only for the fixed SVG-path map; never supply URL/storage/user text there. Source: `script.js` `el`, `initContent`, `icons`.
- Apply an http/https protocol allow-list to navigation URLs and noopener noreferrer to new-tab links. QR uses a fixed HTTPS host with URLSearchParams. Source: `script.js` `safeUrl`, `externalLink`, `buildQRPayment`.
- Copy the header approach, not the source hashes: exact inline module/import-map/style SHA-256 digests, trusted resource origins, no unsafe-inline/eval in script-src. Dynamic JSON-LD uses textContent. Source: `vercel.json` headers; `script.js` `initContent`.
- Keep HSTS, nosniff, DENY, referrer policy, disabled unused permissions, COOP, frame/object restrictions and no-cache for mutable files. Source: `vercel.json` headers. Do not claim deployment validation from a JSON file alone.
- Pin observed library versions when reproducing this implementation. The current index has no SRI attributes; graph-wide integrity and updated library evaluation are not supplied by this skill. Source: `index.html` head/import map.

## Project adaptation checklist

1. Define the content hierarchy using the source section sequence as an example, then replace CONFIG copy and CARDS names. Do not carry old product assumptions. Source: `index.html` main sections; `script.js` `CONFIG`, `CARDS`.
2. Replace product color names, retain their text/action/focus roles, and check both final mobile and desktop sizes. Source: `style.css` `:root` and final media rules.
3. Render and test pricing/cart without animation libraries; derive all numeric displays from CARDS. Source: `script.js` boot, `product`, `totals`, `initPricing`.
4. Set the project's motion policy explicitly, then wire one Lenis instance and modal locking. Source: `script.js` `motionEnabled`, `initLenis`, `syncModalLock`.
5. Keep CSS fallback art; add the renderer, resource registry and loader; report ready only after rendering. Source: `index.html` `createScene`, `bootScene`, `reportScene`.
6. Measure DOM anchors before styling scene placements; add Director records and bounded pools; connect existing UI events. Source: `index.html` `track`, `domToWorld`, `Director`, `Pool`.
7. Preserve the narrow-screen artwork slots and the single movable cart panel. Source: `style.css` `.showpiece-ready` mobile rules; `script.js` `positionPanel`.
8. Apply the privacy exclusions, recompute inline CSP digests and verify allowed origins against the new files. Source basis: `vercel.json` headers, `script.js` URL helpers; privacy exclusion is the user's rule.
9. Run the acceptance checks below. Report observed results and unverified devices separately. Debug hooks exist in `script.js` `initDebug` and `index.html` `debugCheck`.

## Pitfalls learned

Read [symptoms, causes and source-backed fixes](references/pitfalls.md). It covers all seven requested topics: reduced-motion handling, strict block scope, bloom alpha, Safari blur prefixes, desktop-only gating, per-frame DOM writes and shared materials. Historical causes are not proven by the current files; entries distinguish a risk from a demonstrated regression.

## Acceptance tests

These are future checks, not claimed results from this extraction.

- [ ] At 360px and 1440px scroll all sections: readable copy, no horizontal overflow, no hard backdrop seams, no card/price overlap. Source targets: `style.css` final responsive/backdrop selectors; `index.html` `domToWorld`.
- [ ] Use keyboard tabs, arrows/Home/End in pricing, dialog Escape and nested sheet/preview restoration. Source: `script.js` `initPricing`, `wireDialog`, `initOrderBuilder`.
- [ ] Turn reduced motion on. For this source policy, Lenis stays at 1.2s and 3D continues; CSS animations may stop. Source: `script.js` `initMotion`, `motionEnabled`; `style.css` reduced-motion media block.
- [ ] Throttle CPU 6× for 60s with ?debug: governor remains 0, 700 particles, bloom/glass/warp stay enabled, and interactions still work. This is a policy check, not a guaranteed frame rate. Source: `index.html` `applyGovernor`, `debugCheck`; `mobile-policy.js` `Monitor`.
- [ ] Test explicit off/lite/min/high flags, hidden-tab resume, forced context loss/restoration and repeated page loads. Intro should replay; safety timeout is 6s. Source: `index.html` lifecycle listeners/`ensureDesktop`; `script.js` `initPreloader`.
- [ ] Check face/saving/payable arithmetic, zero-saving pill, count and maximum-saving tag. Test manual fallback; test QR calculation with nonprivate fixtures only. Source: `script.js` `initPricing`, `totals`, `qrEligible`, `buildQRPayment`.
- [ ] Run node --check on scripts/extracted module; parse JSON; load with deployment-equivalent CSP and inspect console. Recompute inline hashes after edits. Source: `index.html` inline module and `vercel.json` headers.
- [ ] Grep generated public files and comments for private settlement values, source contact URLs, credentials and internal commercial data. Use an external/private denylist, not a copied list inside the site. Rule comes from the user's privacy constraint; vulnerable source surfaces are `CONFIG`, `initPayment` and payment canvas textures.

## Not in the source

No verified payment backend, formal spacing-token scale, verified Lenis upstream default, historical reproduction of the seven bugs, complete module-graph integrity or privacy-preserving settlement system is supplied. Do not invent those capabilities. Existing repeated overrides and fixed savings-label enumeration are limitations, not reusable design rules. See [pitfalls and omissions](references/pitfalls.md).
