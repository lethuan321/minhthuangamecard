# Acceptance — full effects

| Item | Result | Evidence |
|---|---|---|
| a. DevTools CPU 6x for 60 seconds | **FAIL — not executed** | The connected browser exposes viewport controls but no DevTools CPU throttle control. This exact profile is not claimed as tested. Separate executable tests feed the real governor 65 seconds at 1, 5, 15, 30 and 60 FPS and verify level 0; actual applyGovernor(7/99) retains every feature and both DPR caps. Browser observations also retained level 0 and all feature flags at low FPS. |
| b. 390x844 mobile | **PASS** | showpiece-ready present; HIGH, 700 particles, bloom/glass/warp on; hero intro, benefits, pricing, station 01–03 and finale inspected. Savings column and -4K label visibly rendered. No horizontal overflow. Viewport emulation, not a physical handset. |
| c. 1440x900 desktop | **PASS** | Same full feature state. Three stations, pricing card/coin column/-4K and payment artwork visible and aligned. |
| d. URL flags | **PASS** | 3d=off: no showpiece, OFF/static page. fx=min and 3d=lite: showpiece disabled, original base 3D retained. 3d=high: showpiece active, HIGH, level 0, full features. |
| e. Reduced motion | **PASS** | Browser reports prefers-reduced-motion=true while status=running, showpiece-ready and full feature flags remain. LENIS READY, duration 1.2. |
| f. Five reloads | **PASS** | Five consecutive reloads each reported intro=playing, phase=hero, tier=HIGH. Completed intro observed separately. |
| g. Syntax and console | **PASS** | node --check passed for extracted inline module, script.js, mobile-policy.js and the complete createDesktopFX export. No storefront console errors. Two unrelated Zotero extension connection errors were observed and excluded. |

Additional checks: 360px and 2560px layouts had no horizontal overflow; station anchors remain aligned. A temporary button-driven fixture forced actual WebGL context loss: static fallback appeared, then restoration rebuilt the showpiece at HIGH with every feature enabled. The fixture is not shipped.

Automated suites passed: full-effects.cjs, desktop-fx.cjs, motion.cjs, verify.cjs, desktop-patches.cjs. They cover fixed quality under low frame rates, explicit flags, DPR caps, nonfatal error isolation/hard GPU fallback, Lenis persistence, all 20 prices, cart totals, existing UI events and idle particle-pool behavior.

This release guarantees the requested quality policy, not a minimum frame rate. The exact 6x CPU profile in item a remains unverified.
