# Static-site security audit — 2026-10-16

Scope: index.html, style.css, script.js, mobile-policy.js. Changed production files: index.html and new vercel.json. No library versions, application logic, layout, pricing, cart, 3D or Lenis settings changed. Supporting evidence and original snapshots are in deliverables/security-audit. Line references below refer to final files.

## 1. Findings

PASS means the final inspected state passes the stated check, not a guarantee against all vulnerabilities. Severity describes the finding or residual risk.

| # | File:line | Issue / final result | Severity | Fix applied (Y/N) |
|---|---|---|---|---|
| 1 | script.js:4–13; style.css:1; index.html:25–34 | PASS: no credential detected by pattern scans and review. Public business details retained; checksum and comment matches classified below. | Low | N |
| 2 | script.js:87–88,141–151,288–315 | PASS: one innerHTML sink, trusted constant SVG paths only. Variable navigation URLs use protocol allow-list. QR uses fixed HTTPS origin. No unsafe dynamic HTML found. | Low | N |
| 3 | index.html (20 blank-target anchors); script.js:88,141–142,315 | PASS: all static and inspected rendered blank-target links have noopener noreferrer. No window.open. | Low | N |
| 4a | index.html:25–34 | PASS: added SHA-384 SRI and anonymous CORS to 3 classic CDN scripts, 3 modulepreloads and 3 local resources. | Med | Y |
| 4b | index.html:22–23 | FAIL: Google Fonts stylesheet remains unversioned and without SRI. TODO added; changing font delivery needs approval. | Med | N |
| 4c | index.html:29,144,162–171 | FAIL for graph-wide integrity: imports and runtime font JSON are version-pinned but do not have full integrity coverage. Preload SRI covers only the three listed resources. | Med | N |
| 5 | vercel.json:1 | PASS locally: required headers, exact inline hashes and no-cache configured and served on all five checked routes. Actual Vercel deployment unverified. | Med | Y |
| 6 | index.html:19–34,119,126 | PASS for safe quick wins: jsDelivr preconnect added; defer/module, swap and QR dimensions already present. QR lazy loading deliberately skipped. | Low | Y |

### Secrets / public-data classification

- Public business information, retained: script.js:10 MoMo **0376271084**, Vietcombank **9376271084**; script.js:13 repeats the account for QR configuration. Account holder is empty.
- Public social destinations, retained: script.js:4–6 Facebook share link and Instagram minhthuan0917. Their share/tracking identifiers are not authentication credentials.
- False positives: style.css:1 “Tokens” is a design-token heading; script.js:12 “webhook” is a TODO comment without a webhook URL; index.html:25–34 cryptographic SRI strings are public checksums; long Three.js paths are resource names. The CSP hashes in vercel.json are also public checksums.
- No API credential, private key, Bearer credential, password, private webhook URL or email detected in the four audited files. No rotation required based on these results. Pattern scans cannot prove that no concealed secret exists.

### XSS and variable URL inventory

- **Only HTML sink:** script.js:144 `svg.innerHTML = icons[icon] || icons.tag`. `icons` at 78–83 is a hard-coded SVG-path map and the benefit keys are static configuration, not URL/storage/user input. Retained.
- No outerHTML, insertAdjacentHTML, document.write, eval, new Function, string timer callback, window.open or variable location assignment found.
- script.js:87 restricts URL protocols to `https:`/`http:`; invalid input becomes the fixed `#lien-he` anchor.
- script.js:88,141,142,315: contact/social/bill href assignments pass that helper. Canonical href at 148 is validated at 147; social-image metadata at 149 also passes it and requires HTTPS. JSON-LD uses JSON.stringify and textContent (150–151).
- script.js:314: image.src uses buildQRPayment (288–296), a fixed `https://qr.sepay.vn/img` endpoint plus URLSearchParams, validated bank/account and integer amount. User input cannot change its protocol or host.
- script.js:84 creates ordinary content with textContent. Cart restoration validates IDs/quantities; it is not inserted as HTML.
- Query flags use fixed comparisons: index.html:140,220,527,793,820; script.js:368,370; mobile-policy.js:4. Debug is a presence flag at script.js:453. No query value becomes executable code or a navigation URL.
- Timer calls were read: index.html:146,171,421,446,545,771,772,774 and script.js:110,356,373–375,459,463,475. All callbacks are functions or function references, never strings.

### External origins

Network resources: `https://cdn.jsdelivr.net`, `https://fonts.googleapis.com`, `https://fonts.gstatic.com`, and the configured future QR origin `https://qr.sepay.vn`.
Navigation: `https://www.facebook.com`, `https://instagram.com`.
`https://schema.org` is metadata and `http://www.w3.org/2000/svg` is an XML namespace, not a requested script/resource host. No cdnjs use found, so CSP does not allow it. Local SVG favicon/grain use data URLs.

## Third-party inventory

All jsDelivr library versions remain unchanged. The following resource hashes were computed from downloaded bytes; each CDN response allowed CORS (`Access-Control-Allow-Origin: *`). The classic scripts and modulepreloads now have `crossorigin="anonymous"`.

| Resource URL | Version | SHA-384 integrity |
|---|---|---|
| `https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js` | 0.160.0 | `sha384-61S/Nu32S3E5+n+KpCOTb2eRYps6fVKm+9Gz1QBvSePFthb46f063Aa/qe/lykFZ` |
| `https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/EffectComposer.js` | 0.160.0 | `sha384-L+Ns9skCAqjab7aG8LH5VLknBCoENW7p37sOj39jnITwlWZFabWc29JwzgYf6ygy` |
| `https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/UnrealBloomPass.js` | 0.160.0 | `sha384-R734/7SvtqjjeteDKG4qcQA0adDCZ1ZcKfYUZsbVr9qqHGlgSXH9eNN4b3NIgwuc` |
| `https://cdn.jsdelivr.net/npm/lenis@1.3.26/dist/lenis.min.js` | 1.3.26 | `sha384-jqpi9VmOdhyLoLURgjCn7EpnG9BbnHW57ibIZoeaIU+erWDH3k8fQQg0xH2ySjnw` |
| `https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js` | 3.13.0 | `sha384-HOvlOYPIs/zjoIkWUGXkVmXsjr8GuZLV+Q+rcPwmJOVZVpvTSXQChiN4t9Euv9Vc` |
| `https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js` | 3.13.0 | `sha384-P8VzCVnT9NBUkMrpcIZrJbA7EBjJvh/fJS6PmP+4nLIM284DtsImIv8D0fFjIkeh` |
| `style.css?v=20261015checkout.1` | Local bytes (query version is not a fingerprint) | `sha384-WbnIoeA2WNxHB2NRy9NwLk2zt706DyqODUV43N4n4bckNS0hFbcgaXd1xBhdP7FP` |
| `script.js?v=20261015checkout.1` | Local bytes (query version is not a fingerprint) | `sha384-9NuK9zPQnIqdgdQsduw0eqBFBHcd9SW1fujZz6A8taQuWiitDQNdhZYHDy4QeQQN` |
| `mobile-policy.js?v=20261015checkout.1` | Local bytes (query version is not a fingerprint) | `sha384-QnzAUASuCOPB/CpQeWlTAowU10LqNWnlNdNtI6yofr6Z0LnTNdzMO5pfmlpoKUBm` |

Import map at index.html:29 maps `three` to `https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js`, and `three/addons/` to `https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/`. There is no HTML integrity attribute on those import-map entries. SRI on the import-map script cannot authenticate its module graph; the current setup does not pin every transitive module's bytes.

Direct imports below resolve under `https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/`, all version 0.160.0:

| Source | Module path | SRI coverage |
|---|---|---|
| index.html:144 | environments/RoomEnvironment.js | None |
| index.html:162 | postprocessing/EffectComposer.js | Explicit modulepreload |
| index.html:163 | postprocessing/RenderPass.js | None |
| index.html:164 | postprocessing/UnrealBloomPass.js | Explicit modulepreload |
| index.html:165 | postprocessing/ShaderPass.js | None |
| index.html:166 | postprocessing/OutputPass.js | None |
| index.html:167 | loaders/FontLoader.js | None |
| index.html:168 | geometries/TextGeometry.js | None |

Runtime fetch at index.html:171: `https://cdn.jsdelivr.net/npm/three@0.160.0/examples/fonts/helvetiker_bold.typeface.json`, version 0.160.0, no fetch-integrity validation. Transitive dependencies retain CDN trust; no claim of a full third-party dependency audit.

Google stylesheet at index.html:23: `https://fonts.googleapis.com/css2?family=Anton&family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap&subset=vietnamese,latin-ext`. Unversioned, no SRI, no crossorigin attribute on that stylesheet. Fonts use fonts.gstatic.com; preconnect already has crossorigin. Exact nested font asset/version inventory is unverified. A single response hash is insufficient for browser-dependent stylesheet responses. No SRI hash was invented.

Planned QR request at script.js:296 uses `https://qr.sepay.vn/img?` with encoded payment parameters. It is a dynamic image, not a versioned script; SRI is not applicable to img elements. SePay remains disabled in configuration.

To reproduce a CDN SHA-384 digest (replace URL with any exact URL in the table):

```sh
curl -fsSL 'URL' | openssl dgst -sha384 -binary | openssl base64 -A
```

Prefix the result with `sha384-`. Recompute local integrity when changing local assets. Recompute CSP hashes after changing inline code, including whitespace. The extraction/hash command used normalized HTML line endings as browsers do:

```python
from pathlib import Path
import re, hashlib, base64
html = Path('index.html').read_text(encoding='utf-8')
for pattern in [r'<script type="module">([\s\S]*?)</script>',
                r'<script type="importmap">([\s\S]*?)</script>',
                r'<style>([\s\S]*?)</style>']:
    text = re.search(pattern, html)[1]
    print('sha256-' + base64.b64encode(hashlib.sha256(text.encode()).digest()).decode())
```

## Header rationale

| Header/directive | Why |
|---|---|
| HSTS | Enforces HTTPS after a secure visit, including subdomains. |
| nosniff | Prevents MIME sniffing. |
| X-Frame-Options DENY | Blocks framing in older clients. |
| Referrer-Policy | Sends only origin to cross-origin destinations, full referrer same-origin. |
| Permissions-Policy | Disables camera, microphone, location, Payment Request and USB APIs not used here. |
| COOP same-origin | Separates cross-origin opener browsing contexts. |
| default-src self | Default resource restriction. |
| script-src | Allows local/jsDelivr scripts and the exact inline module/import map; no unsafe-inline/eval. |
| style-src | Allows local CSS, Google Fonts stylesheet and exact critical inline style. |
| font-src | Allows local and Google-hosted fonts. |
| img-src | Allows local/data images and planned SePay QR images. |
| connect-src | Allows local and jsDelivr module/font JSON requests. |
| frame-src none | No embedded frames are needed. |
| frame-ancestors none | Blocks embedding this page. |
| object-src none | Disallows plugin objects. |
| base-uri self | Restricts base URL changes to same origin. |
| form-action self | Restricts native form submissions; purchase links remain navigations. |
| upgrade-insecure-requests | Upgrades insecure resource requests where supported. |
| Cache-Control no-cache | Revalidates mutable files instead of serving stale HTML, code or CSS. |

There are no verified content-fingerprinted asset paths warranting immutable caching. Query `v=` alone is not a guarantee of immutable content, so no-cache applies to every route. No routing options were added.

## Performance decisions

Added only a jsDelivr preconnect (index.html:19); all three preconnect origins are used. Classic scripts already defer; inline application is a module. Google Fonts already requests display=swap. The QR image (index.html:119) already has explicit 256×256 dimensions and no src until opened. Retained eager loading: lazy loading offers no initial-request saving here and could delay checkout presentation. No visible behavior change was introduced for this optional optimization.

## Verification

- PASS: node --check script.js, mobile-policy.js, extracted inline module.
- PASS: vercel.json parsed with Node JSON.parse.
- PASS: all three inline CSP hashes recomputed and found in policy; three local SRI digests match exact file bytes. CDN SHA-384 values were computed over downloaded bytes, not guessed.
- PASS: local HTTP server applied vercel.json headers; all required header values matched on `/`, `/index.html`, `/script.js`, `/style.css`, `/mobile-policy.js`.
- PASS: local Chrome loaded the page under those headers, with no recorded warning/error or CSP violation. WebGL status running, showpiece-ready present, Lenis initialized, 20 price rows. Screenshot visually shows the rendered effects and pricing. Browser evidence: browser-check.json and browser-check.jpg.
- PASS: parsed all 20 static blank-target anchors; zero missing rel protections. Rendered-page query also found zero unsafe blank-target anchors.
- PASS: final regex scans plus source review found no credential or unsafe dynamic HTML sink. Scans returned the classified false positives above.
- PASS: byte comparison confirms script.js, style.css and mobile-policy.js unchanged; extracted inline module text unchanged.
- UNVERIFIED: production Vercel response behavior, HTTPS/HSTS enforcement, real iOS/Android, all interactive flows and transitive CDN dependency integrity. The local test simulates headers; it does not deploy vercel.json. No QR network test because configured feature remains disabled.
- No build/lint package commands were identified for this static project; none invented.

## 2. Complete unified diffs

```diff
--- a/index.html
+++ b/index.html
@@ -16,20 +16,22 @@
   <!-- Canonical and sharing URLs are populated only after CONFIG.siteUrl is set. -->
   <title>Bảng giá thẻ game rẻ hơn nạp gốc | minhthuangamecard</title>
   <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23e11d1d'/%3E%3Cpath d='M14 44V20h8l10 13 10-13h8v24h-9V33l-9 11-9-11v11z' fill='%23f4f4ef'/%3E%3C/svg%3E">
+  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin="anonymous">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
+  <!-- TODO(security): Google Fonts CSS varies by browser and is unversioned; stable SRI needs an approved font-delivery change. -->
   <link href="https://fonts.googleapis.com/css2?family=Anton&family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap&subset=vietnamese,latin-ext" rel="stylesheet">
   <style>html{background:#07070b}body{margin:0;color:#f4f4ef}.preloader[hidden]{display:none}.hero{min-height:100svh}#webgl{position:fixed;inset:0;pointer-events:none}@media(max-width:767px){.hero h1{font-size:clamp(3rem,16vw,6rem)}.hero__art{height:240px}}</style>
-  <link rel="stylesheet" href="style.css?v=20261015checkout.1">
-  <link rel="modulepreload" href="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js">
-  <link rel="modulepreload" href="https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/EffectComposer.js">
-  <link rel="modulepreload" href="https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/UnrealBloomPass.js">
+  <link rel="stylesheet" href="style.css?v=20261015checkout.1" integrity="sha384-WbnIoeA2WNxHB2NRy9NwLk2zt706DyqODUV43N4n4bckNS0hFbcgaXd1xBhdP7FP" crossorigin="anonymous">
+  <link rel="modulepreload" href="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js" integrity="sha384-61S/Nu32S3E5+n+KpCOTb2eRYps6fVKm+9Gz1QBvSePFthb46f063Aa/qe/lykFZ" crossorigin="anonymous">
+  <link rel="modulepreload" href="https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/EffectComposer.js" integrity="sha384-L+Ns9skCAqjab7aG8LH5VLknBCoENW7p37sOj39jnITwlWZFabWc29JwzgYf6ygy" crossorigin="anonymous">
+  <link rel="modulepreload" href="https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/UnrealBloomPass.js" integrity="sha384-R734/7SvtqjjeteDKG4qcQA0adDCZ1ZcKfYUZsbVr9qqHGlgSXH9eNN4b3NIgwuc" crossorigin="anonymous">
   <script type="importmap">{"imports":{"three":"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js","three/addons/":"https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"}}</script>
-  <script defer src="https://cdn.jsdelivr.net/npm/lenis@1.3.26/dist/lenis.min.js"></script>
-  <script defer src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
-  <script defer src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
-  <script defer src="mobile-policy.js?v=20261015checkout.1"></script>
-  <script defer src="script.js?v=20261015checkout.1"></script>
+  <script defer src="https://cdn.jsdelivr.net/npm/lenis@1.3.26/dist/lenis.min.js" integrity="sha384-jqpi9VmOdhyLoLURgjCn7EpnG9BbnHW57ibIZoeaIU+erWDH3k8fQQg0xH2ySjnw" crossorigin="anonymous"></script>
+  <script defer src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js" integrity="sha384-HOvlOYPIs/zjoIkWUGXkVmXsjr8GuZLV+Q+rcPwmJOVZVpvTSXQChiN4t9Euv9Vc" crossorigin="anonymous"></script>
+  <script defer src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js" integrity="sha384-P8VzCVnT9NBUkMrpcIZrJbA7EBjJvh/fJS6PmP+4nLIM284DtsImIv8D0fFjIkeh" crossorigin="anonymous"></script>
+  <script defer src="mobile-policy.js?v=20261015checkout.1" integrity="sha384-QnzAUASuCOPB/CpQeWlTAowU10LqNWnlNdNtI6yofr6Z0LnTNdzMO5pfmlpoKUBm" crossorigin="anonymous"></script>
+  <script defer src="script.js?v=20261015checkout.1" integrity="sha384-9NuK9zPQnIqdgdQsduw0eqBFBHcd9SW1fujZz6A8taQuWiitDQNdhZYHDy4QeQQN" crossorigin="anonymous"></script>
 </head>
 <body>
   <canvas id="webgl" aria-hidden="true" data-status="loading"></canvas>
--- /dev/null
+++ b/vercel.json
@@ -0,0 +1,41 @@
+{
+  "headers": [
+    {
+      "source": "/(.*)",
+      "headers": [
+        {
+          "key": "Strict-Transport-Security",
+          "value": "max-age=63072000; includeSubDomains"
+        },
+        {
+          "key": "X-Content-Type-Options",
+          "value": "nosniff"
+        },
+        {
+          "key": "X-Frame-Options",
+          "value": "DENY"
+        },
+        {
+          "key": "Referrer-Policy",
+          "value": "strict-origin-when-cross-origin"
+        },
+        {
+          "key": "Permissions-Policy",
+          "value": "camera=(), microphone=(), geolocation=(), payment=(), usb=()"
+        },
+        {
+          "key": "Cross-Origin-Opener-Policy",
+          "value": "same-origin"
+        },
+        {
+          "key": "Content-Security-Policy",
+          "value": "default-src 'self'; script-src 'self' https://cdn.jsdelivr.net 'sha256-UK9O+rbB3KhDsGQrE55qyNAJCpV7WHc47zV2U5f4bE4=' 'sha256-kNekskyKjseytPaDB/+q0+J7jkV9F6zRAvd+Kq2F75Y='; style-src 'self' https://fonts.googleapis.com 'sha256-yuNWhRi6G23FTb8QlLurXYjXLktMFuCHPVmrW7+JjwA='; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://qr.sepay.vn; connect-src 'self' https://cdn.jsdelivr.net; frame-src 'none'; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests"
+        },
+        {
+          "key": "Cache-Control",
+          "value": "no-cache"
+        }
+      ]
+    }
+  ]
+}

```

## 3. Complete vercel.json

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=(), payment=(), usb=()"
        },
        {
          "key": "Cross-Origin-Opener-Policy",
          "value": "same-origin"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' https://cdn.jsdelivr.net 'sha256-UK9O+rbB3KhDsGQrE55qyNAJCpV7WHc47zV2U5f4bE4=' 'sha256-kNekskyKjseytPaDB/+q0+J7jkV9F6zRAvd+Kq2F75Y='; style-src 'self' https://fonts.googleapis.com 'sha256-yuNWhRi6G23FTb8QlLurXYjXLktMFuCHPVmrW7+JjwA='; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://qr.sepay.vn; connect-src 'self' https://cdn.jsdelivr.net; frame-src 'none'; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests"
        },
        {
          "key": "Cache-Control",
          "value": "no-cache"
        }
      ]
    }
  ]
}

```

## 4. Needs your decision

1. Google Fonts: approve pinning/self-hosting font delivery if stable integrity coverage is required. Left unchanged with a TODO to avoid a visible font regression.
2. Full Three.js dependency integrity: approve a separate vendoring or graph-integrity project if CDN trust is unacceptable. Current patch pins versions and the three preload resources, not the full graph.

No CDN upgrade or deletion is proposed. Public bank details were explicitly authorized and retained; no additional decision is needed for them. Refresh CSP/SRI hashes together with future code edits so valid changes are not blocked.
