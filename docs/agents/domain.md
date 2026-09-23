# Domain Docs

This is a single-context repo. Engineering skills should read relevant domain
docs when they exist.

## Before exploring

- Read `CONTEXT.md` at the repo root if it exists.
- Read relevant decisions in `docs/adr/` if that directory exists.
- If these files do not exist, continue without flagging their absence. Create
  domain documentation only when domain-modeling work resolves terms or decisions.

## Layout

- `CONTEXT.md` — domain vocabulary and concepts.
- `docs/adr/` — architecture decision records.

Use the glossary's terms in issues, refactor proposals, hypotheses, and tests.
If a term is missing, note it as a possible domain-modeling gap. Surface conflicts
with existing ADRs instead of silently overriding them.