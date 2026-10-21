# Storefront patch — 2026-10-15

## Changed sections

- script.js: CONFIG.sepay (disabled by default, setup/server TODO); Garena CARDS prices; shared four-column table and neutral savings; semantic cell classes; row purchase routing; cart checkout label/routing; QR eligibility, amount validation, cryptographic order codes, URL construction, dialog rendering, image failure and copy handlers; dialog initialization.
- index.html: accessible native QR dialog and local asset cache version. Existing inline WebGL module unchanged.
- style.css: transparent WebGL content surfaces; local feathered copy backdrops; four-column desktop table; two-card mobile grid; savings-only strike-through; QR modal styling.
- README.md: optional SePay setup and future authenticated webhook responsibilities.
- tests/verify.cjs: revised expected Garena prices/totals. tests/checkout.cjs: routing, validation, QR, clipboard and modal-event regression coverage.

Zing/VCoin prices are unchanged. Existing 3D/Lenis behavior is retained. No dependencies added. SePay is disabled in the delivered files; enable only after linking the account. Payment confirmation remains manual. No payment was made during testing.

## Acceptance results

| Test | Result |
|---|---|
| a. Seven Garena prices and privacy | PASS. Exact requested data; no financial cost/profit fields. Literal margin matches are CSS spacing and IntersectionObserver rootMargin, not financial figures. |
| b. Savings and best tag | PASS. Computed 0, 0, 1000, 1000, 3000, 5000, 15000; best tag only 500k. |
| c. Manual/QR routing | PASS automated. Enabled test view opened 100k card for 97000; production disabled fallback and mixed-cart rules covered. |
| d. QR URL/code/copy on both browsers | NOT FULLY VERIFIED. Correct amount/code and actual QR image loaded in Chrome. All copy handlers pass automated tests and Chrome showed success feedback; automation clipboard read returned empty, so end-to-end clipboard contents are inconclusive. Real iOS Safari unavailable. |
| e. 360px/1440px | PASS measured page overflow checks; mobile grid has two columns. Full visual/interaction sweep at both sizes remains incomplete. |
| f. Syntax/console | PASS node --check script.js and six test suites; captured page console errors empty. Browser automation itself emitted unrelated telemetry network errors. |

No existing build or lint command was found; this is a static site. Tests run: verify.cjs, checkout.cjs, full-effects.cjs, motion.cjs, desktop-fx.cjs, desktop-patches.cjs.

## Background diagnosis and limits

The common left edge comes from max-width section geometry, with separate paints on the sections/catalog rather than a solid global main/wrap background. The fixed canvas already covers the viewport. Broad content fill overrides remove those paints only when WebGL is ready. Intentional dialogs, buttons, artwork, loading and mobile menu surfaces remain.

Before: section-sized dark gradients, catalog fills/blur/shadows, hard-stop steps and closing gradients.
After: background:transparent; box-shadow:none; -webkit-backdrop-filter:none; backdrop-filter:none.

Local copy uses a 100px feather on all four sides through intersecting linear masks. Peak dark opacity is .24; the hero retains its prior .38 closest-side radial. Steps retain existing dark text, so their local backdrop is light (.94), also feathered; this avoids changing text colors. The pricing note uses a closest-side .24 radial. Local scrims necessarily tint particles directly beneath text, but section-wide dimming is removed.

Computed backgrounds on why/how/payment/FAQ/closing were transparent in the browser. Desktop hero was visually inspected. Prior diagnostic section scans covered some mobile sections. A complete final top-to-bottom visual pass at 1440, 1024 and 390 is NOT verified; supplied captures are samples, not full-page acceptance proof. Before/after captures can show different scroll positions and animation frames.

Assumptions: intentional control surfaces are exempt from the backdrop removal request; disabled SePay should retain the manual button label instead of advertising unavailable QR checkout.
