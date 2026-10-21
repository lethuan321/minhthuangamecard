# Zing price update

- script.js CARDS.zing: six requested prices; savings, counter, best tag, schema and cart continue deriving from CARDS.
- Shared qrEligible: use CONFIG.sepay.threshold directly; reject invalid thresholds. No duplicate purchase flow.
- tests/verify.cjs: updated Zing expected data; Garena/VCoin assertions retained.
- tests/checkout.cjs: Zing savings, best denomination, counter formatting, all six routing cases, quantity amounts, enabled dialog values, disabled fallback and configurable threshold.
- style.css and index.html unchanged. No animation, Lenis, header or layout code edited.

## Acceptance

a. PASS data test: exactly six requested rows; shared counter produces 06.
b. PASS arithmetic test: savings 0/1000/1000/3000/10000/25000; best only 1M. Neutral pill/strike rules unchanged.
c. FAIL literal zero-match criterion across all existing files: existing CSS margin properties and JS rootMargin are layout terms. No financial cost/profit/fee data added. Removing these would change out-of-scope layout/motion. No other requested privacy terms found in script.js.
d. PASS automated: low denominations manual, high denominations enabled QR; 1M amount 975000; quantities multiply sale; disabled fallback retained.
e. NOT VERIFIED this turn at 360/1440: no layout code changed; animation and Lenis regression tests pass. No new browser screenshots taken.
f. PASS node --check script.js. Browser console not rechecked this turn.

Tests passed: verify.cjs, checkout.cjs, motion.cjs, full-effects.cjs.
Active source scan found no obsolete Zing prices outside its updated fixture. 195000/485000 still intentionally occur in Garena. Historical deliverable archives are snapshots and were not rewritten.
