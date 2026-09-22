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

- All timing lives in `src/lib/motion.ts`: one ease, 8px rise, 50ms stagger, `SCROLL_VIEWPORT` with a 20% pre-entry margin so fast scrolls land on settled content.
- `ProjectCard` has its own variants but must read `REVEAL_DURATION`/`STAGGER_STEP` from the lib. Never hardcode timing in components.
- Row-lists (Achievements/Robotics/Timeline) use `listVariants`/`itemVariants`; everything else uses the `reveal(i)` spread.
- Reduced motion is global (`MotionConfig reducedMotion="user"` in `App.tsx` + CSS query). Transform/opacity only. No layout animation, no scroll-linked parallax, no bouncy easings.

## Components

- Watermelon UI is ported natively (`Badge`, `Tip` in `components/ui.tsx`, nav, buttons). It is NOT an npm package here. Don't `npm install` it (React+Tailwind+shadcn registry, incompatible with this Vite stack).
- Don't add component/animation libraries (KokonutUI, React Bits, Motion Primitives, 21st.dev were evaluated and rejected. Smallest footprint wins).
- All section copy lives in `src/data/content.ts`. Edit text there, not in components.

## Deploy

- Vercel CLI is installed and logged in. Project `van-89de/dev-portfolio`, live at `https://dev-portfolio-azure-nine.vercel.app`. GitHub is connected, so pushes to `main` auto-deploy. CLI deploys are rarely needed.
- `.vercelignore` must keep excluding `.playwright-mcp/` and `dist/`. Uploading them aborts the deploy on slow networks.
- Sitemap still needs the canonical URL (slot reserved in `public/robots.txt`).

## Git

- Commit + push to `main` after green build unless the user says otherwise. Never force-push, never commit secrets. The `LF will be replaced by CRLF` warnings are harmless noise.
