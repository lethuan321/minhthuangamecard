---
name: web-design-engineer
description: "Build, redesign, or critique polished browser-rendered visual artifacts using HTML, CSS, JavaScript, or React. Use for pages, dashboards, interactive prototypes, HTML slide decks, animations, design systems, data visualizations, and browser visual QA. Excludes backend-only work, CLI tools, and nonvisual coding."
---

# Web Design Engineer

Create refined browser artifacts with deliberate hierarchy, composition, interactions, and brand identity. Use the existing project's stack and conventions; for standalone work, choose the simplest implementation that supports the requested experience.

## Understand and calibrate

Read the provided brief, source, screenshots, and assets before asking questions. Source code is the best source of existing tokens and component behavior; screenshots clarify composition and visual intent. Verify uncertain or time-sensitive product specifications and brand claims using authoritative sources before using them in the artifact.

Ask only for missing information that materially affects the result: audience, intended use, primary interactions, content, or brand constraints. When context is sufficient, infer routine choices and state consequential assumptions.

For existing work, classify the change:

- **Extension:** match the current visual vocabulary and component behavior.
- **Preserve:** improve presentation while retaining routes, information architecture, forms, analytics, accessibility, and working interactions.
- **Overhaul:** change the visual system or structure only within the scope the user authorized.

Identify protected contracts before editing. A visual redesign does not authorize changing business behavior or discarding content.

Produce a concise Design Read before substantial design work:

```yaml
artifact: landing / dashboard / prototype / slides / visualization
audience: primary audience
visual-language: specific visual family
mode: greenfield / extension / preserve / overhaul
visual-variance: 1-10
motion-intensity: 1-10
information-density: 1-10
asset-dependence: 1-10
brand-fidelity: 1-10
```

These dials must influence decisions: variance changes layout exploration; motion changes choreography; density changes content per viewport; asset dependence changes sourcing effort; brand fidelity changes how strictly existing tokens and assets are preserved. Reduce motion for task-focused tools and reduced-motion preferences. High brand fidelity limits experimentation with core identity.

Before choosing tokens, consider each screen's narrative role, viewing distance, visual temperature, and content capacity. Match type scale and density to actual use, and sketch composition before filling it with detail.

## Brand and assets

Use supplied assets first, then official brand sites or press kits. Use real logos, real product photography for physical products, and actual interface screenshots for digital products when those are central to the brief. Do not substitute generic CSS silhouettes or improvised logos for recognizable assets.

Record relevant asset paths, tokens, fonts, and usage decisions in `brand-spec.md` or existing project design notes for substantial branded work. Preserve asset provenance and license constraints. Store permitted assets locally when the delivery environment supports it; follow any environment restrictions on downloads or media display.

If essential assets cannot be obtained, ask for them while progressing on independent layout work. Use visibly labeled placeholders where appropriate. Never fabricate statistics, testimonials, customer logos, or product capabilities. Clearly label sample data when the user authorizes it.

## Choose a direction

If the user wants help choosing a style, propose three meaningfully different directions. Give each concrete typography, palette, composition, and motion cues, with a short explanation of its fit. Useful families include:

- Information architecture: restrained, rational, data-focused composition.
- Editorial minimalism: generous whitespace, refined type, quiet color.
- Modern tools: compact hierarchy, hairline detail, disciplined accents.
- Experimental motion: expressive composition and choreographed transitions.
- Raw or brutalist: exposed structure, strong contrast, direct typography.
- Warm humanism: organic texture, approachable type, tactile details.

Use named designers or brands as references when helpful, without claiming exact fidelity or inventing their specifications. Do not offer three cosmetic recolors as different directions. Once a direction is chosen, translate it into concrete tokens rather than relying on a vague label such as "modern."

## Declare and build

For substantial work, document palette, heading and body fonts, spacing, radii, elevation, and motion before implementing components. Use CSS custom properties or the project's existing token system. Derive additional colors coherently; use semantic colors for status and data encoding.

Show a viewable v0 early with the key composition, tokens, essential content, and explicit placeholders. Then complete primary flows, appropriate states, responsive behavior, and motion. Keep interim work easy to preview and modify.

Honor user-requested approval checkpoints. For open-ended direction selection, obtain the needed choice before committing to dependent work. When the user has authorized autonomous completion, share decisions and continue without adding mandatory approval gates for routine design choices.

For exploration tasks, use a single artifact with variant toggles when practical. Vary layout, visual treatment, interaction, and creative concept intentionally. Start within the design system and then explore bolder alternatives. Add a compact, fully hideable **Tweaks** panel when adjustable parameters aid exploration; avoid adding exploration controls to a finished product unless requested.

## Craft and implementation

- Preserve established frameworks, dependencies, icon systems, and component patterns. Avoid replacing an existing build with inline Babel or CDN scripts.
- For standalone prototypes, prefer plain HTML/CSS/JavaScript when adequate. Add React or visualization libraries only when they earn their complexity. Pin external dependencies and verify URLs and integrity hashes when used; never invent hashes.
- In legacy multi-file inline Babel prototypes, account for script scope and expose shared components explicitly when needed. Namespace top-level identifiers to prevent collisions. These precautions do not prohibit normal module imports or locally scoped variables.
- Use Grid or Flexbox, fluid type where appropriate, and responsive or container queries suited to the artifact. Use a non-distorting scale strategy for fixed canvases.
- Provide semantic controls, labels, visible keyboard focus, sufficient contrast, and keyboard access to primary interactions. Include hover, active, disabled, loading, empty, and error states where relevant.
- Respect reduced motion. Prefer CSS transitions for small effects, state or animation frames for simple sequences, and timeline libraries only when justified by the task or existing stack.
- In embedded previews, avoid scrolling methods that move an outer frame. Scroll the intended container; verify actual behavior rather than banning a method in every environment.
- Split code by responsibility when complexity warrants it. Follow repository naming and version-control conventions rather than creating revision copies automatically.

Avoid generic decorative defaults that erase brand identity: arbitrary neon gradients, repetitive cards, decorative icons, excessive shadows, or typography selected only because it is common. Treat these as contextual design choices, not universal bans. Existing brand conventions and explicit user preferences take precedence.

Use real imagery, appropriate generated bitmap assets, or honest placeholders for imagery. Use SVG for icons, diagrams, and vector artwork when it suits the task. Do not draw crude substitutes for essential photography or brand assets.

Solve sparse layouts with proportion, whitespace, type rhythm, and composition before adding content. Preserve the requested scope; do not invent additional sections to fill space.

## Artifact-specific guidance

**Interactive prototypes:** show the product immediately. Implement the principal click paths and meaningful states. Use device frames only when they help evaluate the experience. Offer variants when exploration is requested.

**HTML slide decks:** use a consistent aspect ratio, typically 16:9, and scale without distortion. Keep controls usable outside the scaled canvas. Provide arrow-key navigation and Space for next without interfering with editable controls. Use human-facing one-based numbering and descriptive screen labels. Persist position when useful. For a 1920 by 1080 canvas, start body text around 24px or larger and verify legibility at the intended distance.

**Dashboards and visualizations:** match chart type to the question. Keep color encoding semantic and avoid decorative gridlines, 3D effects, or shadows. Resize charts with their containers. Offer themes only when useful or requested. Provide labels, units, and an accessible way to understand the data.

**Animation demos:** go directly to the substantive scene unless an introduction serves the brief. For timeline demonstrations, provide play/pause and seeking. Keep motion intentional and use consistent easing.

**Visual comparisons:** show static options side by side; use a clickable flow when interaction is the question.

## Verify and critique

Always inspect imports, local asset paths, markup, primary interactions, responsive rules, content accuracy, token consistency, and accessibility. Run appropriate existing checks. Browser rendering is useful when available for visual work; explicit QA requests require hands-on validation rather than a code-only claim.

For browser acceptance, inspect target desktop and mobile viewports, then exercise primary paths with mouse and keyboard. Check overflow, clipping, focus, reduced motion, controls, missing assets, and console errors when tools expose them. Repair discovered failures and rerun the affected checks. Record viewports, exercised paths, observations, and remaining limitations. Do not claim browser acceptance when no browser run occurred.

For critique, evaluate philosophy alignment, visual hierarchy, craft, functionality, and originality. Explain findings through concrete evidence and user impact. When scores are requested, score each dimension from 0 to 10 and state the basis. Report what to keep, fixes ordered by severity, and useful quick wins; critique the artifact rather than its designer.

Before delivery, ensure content fits, primary flows work, placeholders are disclosed, motion fits the context, and the design reads as a coherent system. Explain important decisions briefly, provide a usable artifact or preview, and report validation accurately.
