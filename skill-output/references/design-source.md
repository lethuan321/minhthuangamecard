# Design source notes

## Composition before decoration

`index.html` .hero__grid pairs a text column with .hero__art; `style.css` keeps .hero__art dimensioned before WebGL becomes ready. The headline is two short line-mask spans; the tagline and paragraph are separate levels. `script.js` initHero only animates the headline near the page top and clears transform after entry. Reuse this hierarchy and reserved footprint instead of making primary content depend on canvas rendering.

`style.css` .why and .faq use unequal reading regions and thin row dividers. .shop-layout places a fluid catalog next to a 310px order panel, reduced to 285px in the earlier 1199px rule and replaced by a dialog below 1100px. The mobile source uses the same catalog data, not a second list.

## Cascade values to preserve deliberately

| Role | Effective source values / selector |
|---|---|
| Display pair | :root --display Anton with Be Vietnam Pro fallback; --body Be Vietnam Pro/Arial |
| Desktop body | body 14px, line-height 1.65 |
| Mobile body | final @media(max-width:1099px) body 16px, line-height 1.5 |
| Hero type | .hero h1 clamp(80px,9.4vw,136px), 1.1; >=1440px 144px; <=767px final clamp(3rem,16vw,6rem) |
| Secondary display | h2 clamp(40px,5.4vw,76px), line-height 1.12, letter-spacing -.015em |
| Hero supporting copy | .hero__tagline clamp(20px,2vw,27px); final <=767px 22px; .hero__description final desktop 13px, mobile 16px |
| Price hierarchy | final .price-pay 23px/700/-.04em; mobile clamp(18px,5.5vw,26px); .price-saved 12px/400; mobile pill 10px |
| Small reason copy | .why-item p 11px/1.9 desktop; final mobile 16px/1.5 |
| Header height | :root 80px; final mobile root 56px plus safe-area padding |
| Focus | :focus-visible 2px solid gold, 5px offset; benefit focus 6px offset |
| Hero footprint | .hero min-height max(760px,100svh); mobile 100svh; .hero__art final mobile height 240px/max-height 30svh |
| Rhythm | .section-heading gap 32px, margin-bottom 48px; .payment__grid gap 24px; .why gap 100px; final mobile section padding clamp(56px,14vw,96px) |

There is no named spacing scale in the source. Keep these observed increments as examples, not invented global spacing variables. [Token block](../assets/design-tokens.css) is copied from the real :root with only product token names changed.

## Continuous background

`style.css` #webgl is fixed, inset 0, z-index 0 and pointer-events none; main/footer sit at z-index 1. The mobile canvas is 100vw × 100lvh. The final body.webgl-ready :is(...) rule neutralizes older background/box-shadow/backdrop-filter declarations on section and catalog surfaces, excluding dialog descendants.

Local reading backdrops are absolute ::before layers inset -100px and pointer-events none, with intersecting horizontal/vertical masks. Their alpha is .24 dark except the .how light scrim. The source also retains a closest-side radial gradient under .hero__copy (.38 peak) and the pricing note (.24 peak). Thin borders remain intentional. Copy the final override semantics, not the old opaque fills earlier in the stylesheet.

`style.css` body.webgl-ready :is(.how,.payment-card) allows overflow so the local feathers are not cut off. The small mobile hero sets .hero__copy to display:contents, so it has no wrapper box on which to paint a rectangular fill. Do not turn the local backdrop into an extra layout block.

## Icons and text

`script.js` arrowUpRight returns a 24×24 inline SVG with currentColor stroke 1.8 and rounded ends; setArrowLabel appends it beside real text. `index.html` cardTexture draws the matching arrow with canvas path calls, not fillText. `style.css` svg.icon-arrow-up-right sizes it to 1em and aligns it at -.125em. Reuse the vector path for this icon.

Other symbol icons remain in the source; no claim is made that every glyph was replaced. `index.html` text3D rejects non-ASCII labels because its supplied typeface is limited. Vietnamese display text remains in DOM or font-ready canvas textures.
