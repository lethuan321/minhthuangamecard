# Part D desktop extension — 2026-10-14

- Implemented the desktop Director in the existing inline module, using the original single animation loop. D0/D1 imports and postprocessing chain are retained; requested renderer/mapping/resize fixes are applied.
- `node tests/desktop-fx.cjs`, `node tests/motion.cjs`, `node tests/verify.cjs` and JavaScript syntax checks pass. Spring convergence and governor hysteresis are executed, including slow-frame stability and bounded recovery.
- CONFIG/CARDS are identical to the pre-Part-D baseline. No payment or external message was sent.
- Chrome at 1440×960: visually inspected hero, click-to-back-face, pricing and generic payment miniatures. Brand tab and Zing 50,000 add-to-order preserved the 49,000 total and 1,000 savings. Payment copy displayed the success toast and shockwave.
- Observed renderer samples ranged from 9–50 calls and approximately 10,800–38,728 triangles. These samples are below the budgets; they are not exhaustive peak measurements.
- The current browser session reports about 1 FPS even with `fx=min` and 14 draw calls. This prevents a credible integrated-GPU/60-FPS acceptance claim. The desktop governor reached level 7; no render-loop exceptions were observed. Zotero extension connection errors were unrelated to the site.
- Further browser checks: closing SAVE/coin celebration visible; pause yields static WebGL while Lenis stays at 1.2; resuming restores motion. Resizing to nominal 390px removes showpiece mode and has no horizontal overflow (376px measured content width). The production reduced-motion path remains static with Lenis 0.6.
- Dedicated hardware performance, continuous five-minute memory stability, physical touch and file-protocol acceptance remain unverified. Prior Part A/B QA below is retained as historical evidence, not new Part D performance evidence.

## Verify desktop scenes

1. Serve the folder over HTTP, open `index.html?debug&fx=max` at width ≥1100 with more than four logical cores and more than 4GB reported device memory. Compare `fx=std` and `fx=min`.
2. On a first visit, watch the intro (capped at 2.25 seconds); hover, drag, click and double-click a hero card. Reload skips the intro for that session.
3. Scroll through ribbon and benefits. Focus a benefit for its corresponding hover state.
4. Switch all price tabs; focus an add button to select its denomination, then add it. Inspect the flight, arrival pulse/chest and unchanged order totals.
5. Scroll through the three stations, copy either payment number, read FAQ, then enter the closing section and hover/focus its main CTA.
6. Pause effects: Lenis remains enabled. Reduced motion uses static scene poses with Lenis duration 0.6. Resize below 1100: the desktop extension hides and restores original card materials.
7. Watch calls, triangles, particles and governor in the HUD. Use a foreground browser on target hardware for FPS and memory testing. GPU geometry/texture counts are also reflected in `#webgl[data-resources]`.

---

# Motion patch verification — 2026-10-14

- Preserved the existing page structure, Vietnamese copy, CONFIG and CARDS. `node tests/verify.cjs` passes all 20 original price pairs, totals, session restoration and clipboard fallback/failure cases.
- `node --check script.js`, syntax check of the extracted inline module, and `node tests/motion.cjs` pass. Motion regression checks verify both preferences, one persistent Lenis instance, no extra RAF driver, modal restart and decoration-pause isolation.
- Chrome, HTTP localhost: `<html>` has `lenis lenis-autoToggle`; HUD reports READY. Default OS reduced motion yields duration 0.6 and static WebGL. A temporary fixture without reduced motion yields duration 1.2, animated procedural cards and about 60 FPS in the observed desktop session (not a cross-device guarantee).
- Anchor animation observed with `isSmooth true` and nonzero velocity. Settled desktop and mobile section positions are approximately 72px below viewport top. Mobile Enter activation preserves the hash and closes the menu; the autoToggle resume race is fixed.
- Tab selection updates the Three.js brand; the animated path uses the 0.9-second GSAP flip. Inspected hero, benefits, price phase and mobile pricing. Dark glass and text scrims preserve legibility.
- Mobile cart and nested order preview stop Lenis. Closing the preview keeps the cart lock; closing the cart resumes scrolling. The 49,000 VND Zing example and payment-copy success UI remain correct. No messages or payments were sent.
- Temporary fixtures: context loss shows CSS cards; context restoration rebuilds a running scene. Forced unavailable WebGL shows fallback cards while Lenis stays READY. Simulated 16 FPS automatically reaches minimal quality / 100 particles. All fixtures removed after testing.
- Responsive widths requested: 360, 390, 768, 1024, 1280, 1920. At all six, document scroll width equals client width. WebGL is fixed, pointer-events:none and does not change layout.
- No application errors observed on the normal page. Deliberate WebGL-failure fixtures emit expected fallback diagnostics; unrelated Zotero extension errors were excluded. A corrected context-test helper fixed its own null-extension error before the restoration pass.
- avoid-ai-design scan: one intentional numeric tab-count candidate (7/6/7 available denominations); no cosmetic rewrite was applied.

Verification: open `index.html?debug` over HTTP; check `window.lenis` in DevTools, glide to a section, change brand tabs, open/close the mobile cart, then test reduced motion. `isSmooth` is true during a glide and false when settled.

The browser tool does not allow file://, so double-click acceptance remains unverified. No physical mobile touch-device test, field performance measurement, Lighthouse score or deployment is claimed.

---

## Original build checks
# Verification — 13 October 2026

## Passed

- `node --check script.js` and `node tests/verify.cjs`.
- All 20 poster price pairs; zero-saving rows; currency formatting; mixed order arithmetic.
- Browser example: 2 × Garena 100,000 + 1 × Zing 50,000 + 1 × VCoin 1,000,000 = 1,201,000 VND, saving 49,000 VND.
- Garena/Zing/VCoin tab switching and arrow-key navigation; quantity increment; remove-to-empty; saved cart and payment-method restoration.
- Order preview with Vietcombank selected; copy action reports success. MoMo/VCB account copy actions report success. Unit checks independently exercise clipboard fallback and failure.
- Mobile menu, anchor navigation, cart drawer, nested order-preview dialog, Escape and focus restoration. Closing the nested dialog preserves the drawer's scroll lock.
- FAQ opens/closes with Enter; native details remain keyboard-operable.
- Responsive checks requested at 360, 390, 768, 1024, 1280 and 1920px. After repairs, document scroll width equals its client width at all six. Browser scaling reports 391/1281 for two nominal widths.
- Desktop/tablet/mobile screenshots inspected, including hero, pricing, order preview and payment.
- Vietnamese text displayed in Anton and Be Vietnam Pro; font availability checks passed for ă â ê ô ơ ư đ and multiple tone-mark combinations.
- Original-build observation (superseded by the patch below): reduced motion previously disabled Lenis.
- Original-build motion-toggle behavior destroyed/restarted Lenis; the patch below replaces this behavior.
- No warning/error console entries in the observed production-page sessions. Contact buttons share the supplied Facebook URL and `noopener noreferrer`; no duplicate IDs.
- avoid-ai-design scan: one reviewed candidate for numeric tab counts. Counts accurately represent the number of denominations, so retained.

## Limits and launch inputs

- The browser tool blocks the `file://` protocol. Direct-file browser acceptance could not be performed. Production now uses classic application scripts plus an inline ES module and pinned HTTPS import map for Three.js. No local module fetch or build step is required, but file-protocol behavior is not claimed as browser-tested.
- Clipboard confirmation was observed in the UI; the browser tool's separate clipboard reader returned no contents. Generated order text was inspected directly in the preview field.
- Facebook links were inspected without sending a message. The provided share URL does not guarantee a Messenger conversation or prefilled draft; copy-and-open is explicitly explained on the page.
- No live payment, merchant identity verification, deployment, Lighthouse audit, measured CLS or field performance claim.
- Confirm account holder, final HTTPS domain, optional sharing image, delivery/support hours, bulk discounts and resolution/refund policy before publication.
- Total transfer and Lighthouse budgets have not been measured.
