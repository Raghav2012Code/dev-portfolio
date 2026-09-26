# AGENTS.md for dev-portfolio

Vite + React 19 + strict TypeScript single-page portfolio. Content rules live in
`README.md` ("Project content rules"). Read them before touching copy.

## Commands

- `npm run build` runs `tsc -b && vite build` (typecheck first. Fix type errors, never `any`-cast or `@ts-ignore` to silence them).
- `npm run typecheck` / `npm run dev` (port 5173) / `npm run preview` (serves `dist/`).
- No lint, no tests, no CI. Verify visually + `build` green + zero console errors.

## Shell gotchas (Windows PowerShell 5.1)

- No `&&`. Chain with `; if ($?) { ... }`.
- `Select-Object` has `-First`/`-Last`, NOT `-FirstLine`/`-LastLine`.
- Each shell call is a fresh session: background jobs die with the call. For persistent servers use `Start-Process ... -WindowStyle Hidden`, then probe with `Invoke-WebRequest`.
- Plain `python -m http.server` serves `.js` as `text/plain`, which blocks ES-module scripts. For static checks use `F:\Temp\opencode\serve-dist.py` (sets the JS MIME type); prefer `npm run dev` / `preview` otherwise.

## Browser checks (Playwright MCP)

- `file://` URLs are blocked. Serve over `http://localhost` first.
- Localhost works only if the server is a detached process (see above).
- Test matrix when it matters: desktop + 390px mobile, console errors, horizontal overflow via `scrollWidth` vs `clientWidth`, Escape/menu behavior, `reducedMotion: reduce` emulation.

## Motion system (single language, keep it that way)

- All timing lives in `src/lib/motion.ts`: one ease, 8px rise, 50ms stagger.
- One orchestrated moment only: the hero entrance (name, statement, actions, title block). Sections do not animate on scroll; content is static and readable on arrival.
- Interaction motion (mobile menu, button press) answers the user's action. Never hardcode timing in components.
- Reduced motion is global (`MotionConfig reducedMotion="user"` in `App.tsx` + CSS query). Transform/opacity only. No layout animation, no scroll-linked parallax, no bouncy easings.

## Design system

- Datasheet on drafting paper: tokens on `:root` in `src/index.css` (paper, ink, ink-2/3, rule, one PCB-green `--trace`), dark variant via `prefers-color-scheme`. Keep text contrast at WCAG AA.
- One family: Archivo (Google Fonts, `wdth` + `wght` axes). Display type uses `font-stretch`; no second face, no monospace labels, no all-caps eyebrows.
- Sections use `Section` (`components/ui.tsx`): heading in the margin column, body on the right. Facts go in `dl.spec` rows, not `·`-joined strings.
- Green means connected or achieved: traces, links, awarded/qualified results. Don't use it as decoration.
- The hero is type only: the name, one statement, and a drafting title block (square, ruled) for the facts. No diagram or figure there; the real signal chain lives on the Door Hinge entry.
- Each result appears once on the home page, in Competitions. The home project index shows name + `summary`, not results. Section headings match their nav labels.

## Components

- Watermelon UI is ported natively (`Tip` in `components/ui.tsx`, nav, buttons). It is NOT an npm package here. Don't `npm install` it (React+Tailwind+shadcn registry, incompatible with this Vite stack).
- Don't add component/animation libraries (KokonutUI, React Bits, Motion Primitives, 21st.dev were evaluated and rejected. Smallest footprint wins).
- All section copy lives in `src/data/content.ts`. Edit text there, not in components.

## Deploy

- Vercel CLI is installed and logged in. Project `van-89de/dev-portfolio`, live at `https://raghavkrishna-dev.vercel.app` (alias; `raghav-dev.vercel.app` and `raghavdev.vercel.app` were already taken). GitHub is connected, so pushes to `main` auto-deploy. CLI deploys are rarely needed.
- `.vercelignore` must keep excluding `.playwright-mcp/` and `dist/`. Uploading them aborts the deploy on slow networks.
- Keep the canonical URL (`https://dev-portfolio-azure-nine.vercel.app/`) in sync across `index.html`, `public/robots.txt`, and `public/sitemap.xml`.

## Git

- Commit + push to `main` after green build unless the user says otherwise. Never force-push, never commit secrets. The `LF will be replaced by CRLF` warnings are harmless noise.

## Agent skills

### Issue tracker

Issues live in upstream GitHub repo `Raghav2012Code/dev-portfolio`; use `gh` and specify `--repo Raghav2012Code/dev-portfolio`. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the default labels `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repo. See `docs/agents/domain.md`.
