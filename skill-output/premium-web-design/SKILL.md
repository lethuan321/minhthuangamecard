---
name: premium-web-design
description: "Create, redesign, or review websites with a premium, restrained visual direction. Use when the user requests luxury, high-end, Apple-like, or carefully crafted web design, or wants an existing site's typography, hero composition, imagery, spacing, and motion refined toward that direction."
---

# Premium Web Design

Premium means restraint, intention, and craft. Make the product feel considered through clear hierarchy, confident typography, relevant imagery, consistent detail, and responsive interactions. Use Apple as a craft reference when appropriate, not as a universal visual identity.

## Establish the brief

Read the user's content, assets, existing pages, and project conventions first. Identify the audience, primary action, brand identity, and constraints. Ask only for missing information that materially changes the design; infer reversible implementation choices and proceed within the authorized scope.

Preserve the established framework, routes, working interactions, forms, analytics, and accessibility during visual changes unless the request authorizes changing them. Reuse existing design tokens and components where they serve the desired result. A premium treatment does not require replacing the stack or imposing a new brand.

For substantial work, state the visual direction and key decisions briefly: hero composition, type pairing, palette, density, spacing, and motion. Show a usable draft early when helpful. Honor requested checkpoints without adding mandatory approval gates to ordinary implementation.

## Design priorities

Evaluate decisions by whether they reduce cognitive load, guide attention, and feel crafted. Accessibility and performance are constraints throughout, rather than finishing touches. Remove elements that add complexity without helping the user.

### First viewport and hero

Establish a focal point and a legible value proposition with an appropriate primary action. Include trust evidence only when real material is available. Choose a composition that fits the content:

| Composition | Useful when |
| --- | --- |
| Split text and visual | A product interface or demonstration supports the message |
| Asymmetric editorial | Typography and art direction carry a distinctive identity |
| Full-bleed media | Authentic photography establishes place, material, or atmosphere |
| Typographic editorial | The message is strong and imagery would distract |
| Product spotlight | The physical product is the central subject |
| Interface demonstration | Showing a real workflow is more persuasive than abstract claims |

Avoid defaulting to centered text over a generic gradient. Centering, symmetry, and familiar layouts remain valid when they support the brief. Do not force a different hero on every project or a full viewport height when it harms mobile usability.

### Typography and space

Choose type for the brand, genre, legibility, and loading budget. One heading family and one body family are usually sufficient; an existing system font can be intentional. Use a clear scale, fluid sizing where useful, and comfortable reading widths. Starting points for desktop are 48–64px hero headings, 36–48px section headings, and 16–18px body text; adjust for content, viewport, and viewing conditions.

Use line heights around 1.1–1.3 for large headings and 1.5–1.8 for body copy when the font permits. Keep prose around 50–75 characters per line. Check wrapping rather than forcing headline lengths.

Use a consistent spacing scale, often based on 4px or 8px increments. Generous section spacing can start around 80–120px on desktop, but reduce it as needed on small screens. Give related elements closer spacing than unrelated ones. Whitespace should establish grouping and rhythm, not satisfy a fixed percentage.

### Color and surfaces

Derive accents from brand identity or imagery. Use a small core palette with neutral surfaces and deliberate emphasis; retain additional semantic colors for errors, success, and data where needed. The 60/30/10 distribution is a useful heuristic, not a measurable requirement.

Define consistent tokens for surfaces, text, borders, radii, and elevation. Use shadows sparingly and tune them to the surface. Choose sharp or rounded geometry intentionally rather than varying it just to appear unique.

For dark themes, distinguish surfaces through tone, borders, and elevation. Test contrast and image treatment independently. Pure black, white text, neutral grays, and saturated brand colors are valid when appropriate; do not ban them on aesthetic grounds. Add theme switching only when requested or useful for the product.

### Narrative and copy

Give each section a dominant idea. Build a coherent narrative from the user's actual content: value, problem, solution, benefits, evidence, process, pricing, objections, and next action as applicable. This is a menu, not an eleven-section template. Do not add testimonials, pricing, newsletters, urgency, or logo walls without supporting content and scope.

Vary composition and density when it improves pacing. Use tone shifts, shared visual motifs, media, or whitespace to connect sections. Avoid mechanically alternating backgrounds or inserting filler statistics between dense sections.

Write specific, confident, concise copy. Describe outcomes and actual capabilities; use concrete numbers only when provided or verified. Match CTA labels to what happens next. Establish one primary action while keeping necessary secondary navigation usable. Do not cut essential explanation to fit an arbitrary word limit.

### Imagery

Prefer authentic product imagery, relevant photography, and real screenshots over generic decoration. Preserve asset licensing and provenance. If essential assets are missing, use explicit placeholders and request the material while continuing independent work. Never fabricate customer logos, endorsements, metrics, or product screenshots presented as real.

Use responsive image sizes and efficient formats supported by the environment. Reserve image dimensions or aspect ratio to prevent layout shifts. Do not lazy-load the likely LCP image; use elevated fetch priority only for the genuinely critical image. Lazy-load suitable below-fold media. Supply descriptive alt text or empty alt text for purely decorative images. Avoid oversized downloads merely to meet a nominal pixel requirement.

### Motion and interaction

Use motion to clarify a transition, guide attention, or confirm an action. Start around 150–350ms for ordinary interactions; tune duration to distance and purpose. Longer scene transitions may be appropriate. Prefer transform and opacity for animation, and measure more complex effects when necessary. Use existing animation libraries when appropriate rather than introducing a dependency for simple fades.

Respect reduced-motion preferences, preserve native scrolling, and keep controls immediately responsive. Never hide essential content until an animation runs. Provide keyboard focus, touch-friendly controls, loading/error feedback, and disabled states where relevant.

Read [references/implementation-patterns.md](references/implementation-patterns.md) when standalone CSS tokens or a progressively enhanced reveal pattern would help. Adapt the examples to the project rather than replacing established tokens.

## Distinctiveness without gimmicks

Watch for automatic choices: repeated font pairings, arbitrary purple gradients, identical card grids, excessive rounding, generic aspirational headlines, and the same decorative reveal on every element. Repair these by returning to the brand, content, and user task. These patterns are not universal failures: a branded gradient, three genuine pricing tiers, or a consistent card system can be exactly right.

An unexpected detail should strengthen meaning, not exist merely to pass a uniqueness test. Do not sacrifice clarity, consistency, or user familiarity for novelty.

## Verification and delivery

Run the project's appropriate checks and inspect the rendered result when browser tools are available. For explicit browser QA, exercise the main flows and record the viewports and behaviors checked. Verify:

- Hierarchy and wrapping at the intended desktop and mobile sizes; no clipped content or horizontal overflow.
- Real content and asset paths; disclosed placeholders; primary actions connected to the intended behavior.
- Keyboard navigation, visible focus, semantic markup, labels, alternative text, and adequate contrast.
- Image dimensions, responsive loading, font loading, reduced motion, and content visibility without animation.
- Coherent spacing, typography, surfaces, and interaction states.

Treat LCP, INP, and CLS as measured performance signals, not outcomes guaranteed by a CSS checklist. Use applicable current performance and accessibility standards when evaluating them, verify current thresholds from authoritative documentation when reporting standards, and distinguish lab results from field data. Do not claim measured timings, compliance, or conversion improvements without evidence.

For reviews, report concrete issues in priority order with proposed repairs. For implementation, provide a usable artifact or preview, summarize material decisions, and state what was actually tested and what remains unresolved.
