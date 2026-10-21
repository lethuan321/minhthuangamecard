# Scroll, scene and data contracts

## Lenis integration

[Lenis starter](../assets/lenis-init.js) copies script.js initLenis. It expects the host's state object and syncModalLock function; it is not a standalone scrolling app. Lenis owns its own RAF through autoRaf. ScrollTrigger is updated by the Lenis scroll event, not an additional ticker-driven lenis.raf call.

script.js syncModalLock toggles body.modal-open and html.modal-locked, emits modalchange and stops/starts Lenis from actual dialog/visibility state. Native dialogs provide modal focus behavior; wireDialog also handles clicks outside the dialog box. Nested regions retain data-lenis-prevent and overscroll containment. initHeader replays a menu anchor only after autoToggle has resumed. style.css keeps the 1ms overflow transition even within reduced-motion CSS.

refreshScroll debounces 80ms, resizes Lenis, refreshes ScrollTrigger and emits layoutready. initMobileIntegration updates --vh on width/orientation changes and --keyboard-offset from visualViewport. The scene's own resize handler ignores same-width height jitter below 150px. These are separate duties; do not resize every scene on every browser URL-bar movement.

## Loader and lifecycle

[Scene loader](../assets/scene-loader.js) is the exact Promise.all module loader with generalized names. It caches the promise and gives the font load a 2200ms deadline; it returns constructors plus font or null. Install the [import map](../assets/import-map.json) before invoking it in a module. It does not implement a scene by itself.

index.html bootScene increments bootId, waits for gamecard-ready, imports Three/RoomEnvironment, waits for fonts up to 1500ms, checks cancellation, disposes the old controller and calls createScene. A caught import/construction error reports fallback. pagehide disposes; persisted pageshow reboots. createScene only hides CSS art through reportScene after a successful render. Context restoration starts bootScene again.

The preloader is a separate script.js initPreloader concern: replay on each load, reset to page top for showpiece, listen for desktop-intro-ready or scene-ready, release at 6000ms if necessary. The intro deal itself lasts 1.65s with .12s per-card stagger in index.html updateHero.

## Mapping and switching

index.html syncCamera updates projection/world matrices and cameraForward when dirty. pxRatio projects point-minus-camera onto cameraForward and computes 2*tan(fov/2)*distance/viewportHeight. screenToWorld unprojects normalized screen coordinates and intersects a chosen z plane. domToWorld uses a cached anchor rect, not a guessed page coordinate. update snapshots anchor rects, updateGlobals changes the camera, and scene-specific update functions place objects from those anchors.

Director.measure stores scroll-relative ranges; Director.update actually decides visibility using rect.bottom > -80 and rect.top < viewportHeight + 80. More than one scene can be live. It calls enter/exit on transitions and updates live records. Its nearest-center return value selects the lighting/theme, not an exclusive scene switch.

Nine records: hero, ribbon, benefits, pricing, steps, payment, faq, reading, closing. reading and faq intentionally have empty updateReading callbacks. The source changes layout anchors for pricing below 1100px, but ensureDesktop does not gate the showpiece to that width.

## Pools and resource ownership

createScene owns textures/geometries/materials in a Set, and listener removals in cleanup. createDesktopFX keeps its own resource Set while registering with the base owner. dispose/rollbackConstruction restore light states and card materials, remove added children, release passes and resources, cancel timers/tweens and remove listeners. Preserve both success and failure cleanup paths.

Pool has fixed item records and a circular cursor. emit resets records; update writes matrices through one scratch Object3D; dead slots have scale zero. The 700 particle positions and speed arrays are allocated once. Shock rings and five flights are preallocated; flight trails reuse Float32Arrays and LineBasicMaterial. Base coins reuse geometry/materials and InstancedMesh matrices. This is bounded allocation, not a claim that the entire animation loop performs no DOM reads or allocations.

createDesktopFX render resets renderer.info before composer.render, then captures calls/triangles. applyGovernor fixes level at zero and reapplies DPR, composer size and full counts. MobileFX.Monitor and the local mobileMonitor do nothing. draw stops for hidden document, invisible canvas or hard failures; low FPS never invokes disposal.

## Data and checkout

script.js initContent generates repeated copy and JSON-LD from CONFIG/CARDS. product resolves valid catalog entries; totals multiplies sale and face by quantity then derives saved. initPricing emits numeric data attributes and accessible tab/table structures. selectBrand updates the active accent and emits brandchange/tabchange. rowhover includes public numeric values and the DOM row for effect positioning.

qrEligible validates CONFIG.sepay.threshold and requires every cart entry to meet it by face value. buildQRPayment validates the summed payable amount and builds a fixed-host URL using URLSearchParams. The configured QR feature is off, so the manual contact flow remains active. Native contact navigation is preserved while clipboard copying runs asynchronously. No order fulfillment or transaction verification exists in these files.

## Privacy limitation

The user's requested rule is stricter than this source. CONFIG contains settlement/contact details; initPayment renders them; tryOpenQRPayment sets them in DOM/data attributes; createDesktopFX paymentObjects paints DOM settlement text into canvas textures. Those are not secret-safe patterns. This skill intentionally includes only placeholders and leaves QR disabled. Do not assume a static client can conceal a value used to draw or generate a payment request. A private settlement flow is not implemented here and is outside this extraction.

## Security headers

vercel.json applies HSTS, nosniff, X-Frame-Options DENY, strict-origin-when-cross-origin, unused capability restrictions, COOP same-origin and CSP on all routes. CSP uses self/jsDelivr for scripts plus inline hashes, Google origins for styles/fonts, self/data/QR for images, self/jsDelivr for connect, no frames/objects, self base/form targets and upgrade-insecure-requests. Cache-Control is no-cache everywhere. Do not copy its literal hashes into a new page.

The inspected index has no SRI attributes. This skill describes hash-based CSP as implemented configuration, not as a verified deployment or a replacement for dependency integrity. el/textContent and safeUrl/externalLink are the actual DOM/navigation safeguards. initContent uses innerHTML only for the fixed icons map.
