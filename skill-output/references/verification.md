# Draft verification

Completed one draft and one correction pass on 2026-10-17. No build, dependency installation or project-file modification.

| Check | Result | Evidence |
|---|---|---|
| Frontmatter parses | PASS | two-scalar YAML mapping; no external dependency |
| Name is kebab-case | PASS |  |
| Description under 300 characters | PASS | 201 characters |
| Main skill under 500 lines | PASS | 119 lines |
| All relative links resolve | PASS | 18 links including references |
| JavaScript snippets pass node --check | PASS | 3 files |
| JSON snippets parse | PASS | 2 files |
| CSS braces balanced | PASS | 1 file |
| No unvalidated embedded code fences | PASS | all executable snippets are separate assets |
| Required privacy scan | PASS | zero matches; sensitive denylist read in memory only |
| Cited source functions/selectors exist | PASS | 115 evidence identifiers; prose reviewed in correction pass |
| Five project files unchanged | PASS |  |

Frontmatter uses a simple YAML mapping; validation parsed its two scalar fields with the standard library. The bundled skill validator requires unavailable PyYAML, so it was not run.

Source traceability was checked by full reads and the one correction pass; identifier existence checks support that review but do not prove every semantic claim. Browser/runtime tests in SKILL.md are future acceptance tasks, not results of this extraction. The three JS assets are integration excerpts; syntax passing does not make them standalone applications.
