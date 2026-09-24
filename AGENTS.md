# AGENTS.md for dev-portfolio

Vite + React 19 + strict TypeScript single-page portfolio.

**Before editing copy** (project order, awards, skills, links, testimonials):
read `README.md` → "Project content rules (keep them)".

## Verify

Done when `npm run build` is green (typecheck included), console has zero
errors, and the page has no horizontal overflow. No lint or tests exist.

On type errors, fix the types — never `any` or `@ts-ignore` to silence them.

Scripts live in `package.json`. Dev server: port 5173.

## Shell (Windows PowerShell 5.1)

- Chain with `; if ($?) { ... }` — no `&&`.
- `Select-Object -First` / `-Last`, not `-FirstLine` / `-LastLine`.
- Background jobs die with each shell call. For a persistent server:
  `Start-Process ... -WindowStyle Hidden`, then probe with `Invoke-WebRequest`.
- Prefer `npm run dev` / `preview`. For static checks use
  `F:\Temp\opencode\serve-dist.py` — plain `python -m http.server` sends `.js`
  as `text/plain` and blocks ES modules.

## Browser checks (Playwright MCP)

- Serve over `http://localhost` first; `file://` is blocked.
- Localhost only works if the server is a detached process (above).
- When it matters: desktop + 390px mobile, console errors, horizontal overflow
  (`scrollWidth` vs `clientWidth`), Escape/menu, `reducedMotion: reduce`.
- Playwright dumps live in `.playwright-mcp/` (keep it in `.vercelignore`).

## Motion

One language, one source: `src/lib/motion.ts` (`entrance()`, ease, rise,
stagger). Components read timing from there — do not hardcode it.

Hero entrance plays on mount. **Every section below the hero is visible by
default** — no scroll-gated opacity, no per-section reveals.

Reduced motion is global (`MotionConfig reducedMotion="user"` in `App.tsx`
+ CSS media query). Transform/opacity only.

## Components

- Section copy lives in `src/data/content.ts`. Edit text there, not in
  components.
- Watermelon UI is already ported (`Badge`, `Tip`, nav, buttons in
  `components/ui.tsx`). It is not an npm package here — do not install it
  (registry stack is incompatible with this Vite app).
- Prefer the smallest UI/animation footprint. KokonutUI, React Bits, Motion
  Primitives, and 21st.dev were evaluated and rejected.

## Deploy

- Pushes to `main` auto-deploy (GitHub → Vercel). Project `van-89de`, live
  alias `https://raghavkrishna-dev.vercel.app`. CLI deploys are rarely needed.
- Keep `.vercelignore` excluding `.playwright-mcp/` and `dist/` — uploading
  them aborts deploys on slow networks.
- Canonical URL `https://dev-portfolio-azure-nine.vercel.app/` must match in
  `index.html`, `public/robots.txt`, and `public/sitemap.xml`.

## Git

After a green build: commit + push to `main` unless the user says otherwise.
Never force-push; never commit secrets. `LF will be replaced by CRLF` warnings
are harmless.

## Skills

- **File or fetch an issue/spec/ticket**: `gh` with
  `--repo Raghav2012Code/dev-portfolio` → `docs/agents/issue-tracker.md`.
- **Triage roles/labels**: `needs-triage`, `needs-info`, `ready-for-agent`,
  `ready-for-human`, `wontfix` → `docs/agents/triage-labels.md`.
- **Domain vocabulary or ADRs** (before exploring structure):
  `docs/agents/domain.md` (single-context repo; `CONTEXT.md` / `docs/adr/`
  only if present).
