# Desktop patch validation — 2026-10-14

## Scope

Applied F1–F15 and C1–C4 to index.html and style.css. No script.js changes during this patch. Earlier authorized mobile work remains in place. Complete replacement blocks are in desktop-fix-blocks.md; createDesktopFX.js matches the production factory.

## Automated checks — passed

- Inline module syntax check.
- tests/desktop-fx.cjs: springs, degradation/recovery, single RAF owner, scene registry and UI events.
- tests/motion.cjs: Lenis ownership, both motion modes, modal restart and pause isolation.
- tests/verify.cjs: all 20 prices, totals, currency, order text, persistence, links and clipboard behavior.
- tests/desktop-patches.cjs: high-FPS governor ignores large draw/triangle counts; idle pool does not write instance matrices; confetti palette assignment; two-pass bounding-rectangle gating; preserved scene age; forced desktop update failure continues base rendering and schedules the next frame; changed-only HUD writes at 250 ms.

## Browser checks

- Lenis READY and html.lenis observed; wheel scrolling reported isSmooth true and nonzero velocity.
- Actual Three.js line raycaster with the patched threshold misses at 1.5 world units from a line.
- Forced updateSteps exception logs [Desktop FX] disabled, removes showpiece mode, resumes base rendering, and allows further Lenis navigation.
- Forced partial constructor failure after composer allocation returns scene child count from 10 to 10 and leaves the base renderer running at 60 FPS in the observed sample.
- MutationObserver on the nine requested diagnostic attributes measured a minimum batch interval of 250 ms during the desktop session.
- No unexpected console errors observed; the two injected failure fixtures produced their expected error messages.
- Missing-best-row fixture reports star.visible=false while phase=pricing.
- FAQ opened and closed; closing phase subsequently activated.
- Payment miniatures and measured band positions inspected at 1280, 1440 and 1920 widths. Band values recompute on resize.
- At 390 px, no horizontal overflow (clientWidth=scrollWidth=376), desktop showpiece remains disabled, cart opens and closes, and Lenis returns READY. This is a smoke check, not proof of identical behavior on physical devices.

## Acceptance conditions not fully passed / verified

- Step station 01 was not visibly rendered in the inspected desktop screenshots, while stations 02 and 03 were visible inside the measured band. Its existing geometry/animation was not rewritten under the exact patch-only scope.
- The main pricing card is visible in the transparent order-panel window. The savings coin column and savings label were not clearly visible during the focus test; acceptance item 6 is not fully verified. Their existing positions and card scaling were preserved apart from requested F12 placement and stage cap.
- No before/after Lighthouse runs were available. The claim that Performance is no worse remains unverified; observed FPS samples alone cannot establish it.
- No exhaustive physical-mobile/lite comparison was performed. C4 was applied literally, including its global scrollbar and catalog rules, so pixel-identical mobile appearance is not claimed.

## Fixes not applied

None. All F1–F15 and C1–C4 code changes are present. The limitations above concern acceptance outcomes, not omitted requested patches.

script.js SHA-256 (both before and after): `045810f59c411ce8a0d7adf8127cac870e828a96f2cb25b48dd3259442ef85e4`
