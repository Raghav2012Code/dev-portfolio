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

## Motion (no budget, no variety cap)

- `motion/react` (Motion for React) is the animation library. Animate as much as you want, anywhere: there is no per-section budget, no cap on the number of animated elements, and no "this must stay still" list. Adding, extending, or removing animation is always in scope.
- Anything goes effect-wise: layout animation, scroll-linked animation, parallax, springs, bouncy or custom easings, keyframes, gestures, shared-layout transitions, looping/ambient motion. None of it is off-limits.
- `src/lib/motion.ts` is the home of the shared tokens (`EASE`, `RISE_PX`, `SCROLL_VIEWPORT`, `reveal()`, `entrance()`, `listVariants`/`itemVariants`). Reuse them where they fit and add new ones as needed, so repeated effects stay consistent. Don't route every value through it when a one-off reads better inline.
- The standard is coherence, not austerity: the page should read as one designed system, but a rich, varied motion layer is welcome. Existing motion to be aware of: hero `entrance()`, section/list scroll reveals, mobile menu, tooltips (CSS), press feedback, featured-build hover lift, nav scroll-progress hairline, smooth-vs-instant anchors.
- Accessibility is the one hard requirement, not a budget item. Reduced motion stays global (`MotionConfig reducedMotion="user"` in `App.tsx` and `ProjectPage.tsx`, plus the CSS media query) — anything you animate must respect it. Never make motion the only way information is conveyed. Keep `npm run build` green and check `reducedMotion: reduce` in the browser matrix.
- Performance is the other one: prefer transform/opacity, and make scroll-linked work cheap (avoid layout thrash and per-frame `setState` on large subtrees).

## Components

- Watermelon UI is ported natively (`Badge`, `Tip` in `components/ui.tsx`, nav, buttons). It is NOT an npm package here. Don't `npm install` it (React+Tailwind+shadcn registry, incompatible with this Vite stack).
- Don't add component/animation libraries (KokonutUI, React Bits, Motion Primitives, 21st.dev were evaluated and rejected. Smallest footprint wins). This is about new dependencies only, not about how much you animate — see Motion above, `motion/react` is expected to carry all of it.
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
