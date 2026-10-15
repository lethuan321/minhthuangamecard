# Minh Thuận GameCard

Design Read: landing / Vietnamese game-card buyers / cinematic editorial / existing-site motion patch.
Visual variance 7/10; motion 6/10; density 6/10; asset dependence 2/10; brand fidelity 8/10.

Direction: oversized Anton headlines with Be Vietnam Pro body text, black and ivory,
red for the shop, blue/orange confined to Zing/VCoin. Hairlines and a receipt-like
order panel make the actual prices the proof. Rounded pills for actions; 20px only
for illustrative game cards. A light buying-guide section changes the reading pace.
Spacing: 4/8/12/16/24/32/48/72/120px. Content width 1280px. Body ≥14px; controls ≥44px.
Motion: one persistent Lenis instance (1.2s, or 0.6s for reduced motion), GSAP reveals, and an inline Three.js r160 scene. Reduced motion uses a still WebGL pose; the pause control affects decoration only. Procedural typographic cards, instanced coins and particles follow Lenis progress. Mobile uses DPR 1 and 250 particles; sustained low FPS reduces quality further. CSS cards remain the fallback if WebGL is unavailable.

Assets: supplied Poster.png is the source for all 20 price pairs and payment numbers.
The supplied circular brand image informs the red/black palette. Neither bitmap is
republished: the brief explicitly requests typographic cards without official artwork; 3D textures are drawn locally in canvas.
References: https://welcomed-functions-055289.framer.app/ and the installed design skills.
No reviews, counters, availability claims, certification marks or automated delivery claims.
Orders use copy-and-open because the supplied Facebook share URL is not a verified
Messenger destination and cannot reliably prefill a chat. No message is sent by the site.


## Part D extension
Preserve the existing red/ivory Vietnamese storefront and its typography, copy, prices and layout. The desktop canvas adds procedural branded cards, a gold portal, ASCII extruded labels, benefit glyphs and generic payment miniatures; no official logo assets are introduced. Textures are cached, event effects pooled and scenes tied to existing DOM anchors. Postprocessing uses an opaque dark clear color matched to fog. Tables and order controls remain above the canvas; desktop-only transparency reveals effects in reserved illustration areas. Reduced motion freezes decoration while Lenis continues.
