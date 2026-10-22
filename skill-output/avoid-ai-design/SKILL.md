---
name: avoid-ai-design
description: "Audit or refine frontend UI that feels generic or AI-generated, replacing habitual visual choices with a coherent direction grounded in the product and its design system. Use for requests to de-slop a UI, identify AI design tells, reduce template aesthetics, or prevent visual drift across pages. Supports detection-only reviews and focused rewrites of HTML/CSS and React/Tailwind/component-library interfaces."
license: MIT
metadata:
  source-author: ungspirit
---

# Avoid AI Design: Audit and Rewrite

Replace defaults with decisions, not one fashionable palette with another. A visual pattern never proves AI authorship. Report generic choices and their effect on the interface, rather than speculating about who made it.

## Select the mode and scope

**Detect:** inspect and report without edits when the user asks to audit, scan, flag only, review, or leave code unchanged.

**Rewrite:** inspect and edit when the user asks to fix, refine, de-slop, or make a UI less generic. A review request alone does not authorize a redesign.

Read the actual files and provided screenshots. Establish the component/page boundaries, stack, brand choices, and existing design contracts before judging. Look for `DESIGN.md`, token files, CSS custom properties, component primitives, and sibling pages. Follow repository instructions for structural exploration.

Classify the context:

- **Landing or marketing page:** evaluate composition, type, color, narrative, imagery, and copy together.
- **App component:** use surgical changes; preserve its contract and surrounding visual language.
- **Inside a design system:** reuse tokens and primitives; flag system-level concerns separately rather than overriding them locally.
- **Dashboard:** favor legibility, useful density, and data hierarchy over decoration.

## Scan and inspect

When Node 18 or newer is available, run the bundled dependency-free scanner over the actual files in scope:

```text
node <skill-dir>/scripts/detect.mjs <files-or-folders>
node <skill-dir>/scripts/detect.mjs --json <files-or-folders>
node <skill-dir>/scripts/detect.mjs --include-examples <files-or-folders>
```

It reports source matches that warrant review, not confirmed visual defects. Exit 0 means no matches, 2 means candidates were found, and 1 means a usage or read error. Do not make a clean scan a delivery gate: intentional choices may remain.

The scanner skips dependency/build directories and illustrative directories unless `--include-examples` is given. Files marked `slop-example` are likewise excluded by default. A same-line or preceding-line `avoid-ai-design-ignore: ID` comment suppresses the named candidate; `all` suppresses all rules at that location. Add suppression only for a confirmed intentional choice, with a reason. Do not add comments merely to clear the report.

Read [references/ai-tells-catalog.md](references/ai-tells-catalog.md) for candidate categories and contextual repairs. Without Node, inspect the same categories manually.

Render or inspect supplied screenshots when possible. Assess hierarchy, density, spacing rhythm, palette weight, repetition, and whether imagery explains the actual product. At a small thumbnail scale, examine whether the page's composition communicates anything specific about its subject. This is a diagnostic, not a requirement for novelty.

Distinguish evidence:

- **Source-confirmed:** the literal pattern exists; its design impact may still be uncertain.
- **Rendered:** the effect was observed in a preview or screenshot.
- **Inferred:** a visual concern predicted from code; state the lower confidence.

Never infer absent focus treatment, insufficient contrast, or a whole default theme from one token or import. Inspect inherited styles, computed behavior, or relevant surrounding source.

## Ground the repair

For each actionable issue, give a location, pattern ID when applicable, impact, evidence type, and contextual explanation. Group by practical priority:

- **High:** usability/accessibility defects, misleading content, or a prominent mismatch with the brief.
- **Medium:** repeated defaults that materially weaken hierarchy or identity.
- **Low:** local polish and optional stylistic refinements.

An Inter font, purple gradient, library component, or three-card grid is not automatically a high-priority issue. The brief and actual behavior determine severity.

If a design system exists, treat it as the direction. Otherwise derive a compact plan from the product, audience, domain artifacts, materials, place, and tone. Identify colors by role, type faces by purpose, layout rationale, and one signature detail if useful. Ask for missing context only when it materially changes the result; do not substitute a generic style menu for understanding the subject.

Review the plan for both familiar defaults and their fashionable replacements: cream/terracotta, near-black/lime, excessive mono labels, one highlighted headline word, or decorative numbering. These are acceptable when justified by the brand or content. Avoid swapping tokens while preserving an unsuitable template.

Match rewrite depth to the request. Small components and established systems get focused repairs. Rebuild page structure only when necessary and authorized. Present consequential direction changes for user input when needed, honor requested checkpoints, and proceed with routine reversible decisions under existing authorization.

## Rewrite and maintain coherence

Preserve props, state, routing, data flow, form behavior, accessible names, and copy meaning. Do not invent claims, statistics, testimonials, assets, or sections. Use existing dependencies when adequate; explain any necessary addition.

For multi-page work, extend existing design notes or create a concise `DESIGN.md` containing shared colors, type, spacing, geometry, navigation, footer, and component conventions. Reuse these across pages. Add needed tokens centrally rather than introducing unexplained one-off values. Consistency does not require identical composition everywhere.

If the interface is already intentional and coherent, report that and stop. Do not manufacture changes to prove the skill ran.

## Verify and report

Re-scan affected files and contextualize remaining matches. Check the rendered result when available and exercise affected interactions. Run appropriate existing checks; verify keyboard focus, responsiveness, asset paths, reduced motion, and content readability relevant to the change. Disclose unavailable visual validation rather than claiming it occurred.

Judge success by whether the changes are:

1. **Justified:** grounded in this product and user task.
2. **Coherent:** type, color, structure, and detail reinforce a direction.
3. **Intentional:** the repair avoids replacing one unexamined default with another.
4. **Consistent:** pages share the product's design language and working contracts.

For detect mode, deliver prioritized findings with evidence and distinguish fixes from judgment calls. For rewrite mode, summarize significant changes, give usable file/preview links, report checks performed, and explain material remaining limitations. Scale the report to the scope rather than listing every cosmetic match.
