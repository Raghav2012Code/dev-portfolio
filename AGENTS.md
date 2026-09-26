# AGENTS.md for dev-portfolio

Vite + React 19 + strict TypeScript portfolio with two pages: home (`index.html` → `src/App.tsx`) and projects (`project.html` → `src/pages/ProjectPage.tsx`, served at `/project`). Content rules live in `README.md` ("Project content rules"); read them before touching copy.

## Verify

- There are no tests, lint, or CI. Done means: `npm run build` green (it typechecks first), zero console errors, and a browser check.
- Fix type errors at the source; the build stays free of `any` casts and `@ts-ignore`.
- Browser matrix when layout or behaviour changes: desktop + 390px phone, light + dark, horizontal overflow (`scrollWidth` vs `clientWidth`), menu + Escape, `reducedMotion: reduce`.
- Dev server: `npm run dev` on port 5173. The projects page is `/project.html` in dev and `/project` in production.
- Browser tooling: `file://` is blocked, so serve over localhost from a detached process (see Shell). If the Playwright MCP is down, `playwright-core` driving the cached Chromium at `%LOCALAPPDATA%\ms-playwright\chromium-*\chrome-win64\chrome.exe` works; install it in a scratch folder, outside the repo.

## Shell (Windows PowerShell 5.1)

- Chain with `; if ($?) { ... }` (there is no `&&`). `Select-Object` takes `-First` / `-Last`.
- Each call is a fresh session. Start long-running servers with `Start-Process ... -WindowStyle Hidden`, then probe with `Invoke-WebRequest`.
- Write commit messages to a file and use `git commit -F <file>`; here-strings passed to native commands get split into pathspecs.
- The working tree mixes CRLF and LF files (`core.autocrlf=true`). Use the Edit tool for multi-line replacements; `` `n ``-based string replaces silently miss CRLF files.
- Noise to ignore: `LF will be replaced by CRLF` warnings, and `git push` progress on stderr surfacing as `NativeCommandError`.

## Motion (no budget, no variety cap)

- `motion/react` is the animation library. Animate as much as you want, anywhere: there is no per-section budget, no cap on the number of animated elements, and no "this must stay still" list. Adding, extending, or removing animation is always in scope.
- Anything goes effect-wise: layout animation, scroll-linked animation, parallax, springs, bouncy or custom easings, keyframes, gestures, shared-layout transitions, looping/ambient motion. None of it is off-limits.
- `src/lib/motion.ts` is the home of the shared tokens. Reuse them where they fit and add new ones as needed, so repeated effects stay consistent. Don't route every value through it when a one-off reads better inline.
- `SiteShell` wraps every page in `LazyMotion features={domAnimation} strict` and `MotionConfig reducedMotion="user"`. Animate with `m.*` from `motion/react-m`; under `strict` a `motion.*` component throws and pulls the full bundle back in, so keep new motion on `m.*`.
- Accessibility is the one hard requirement, not a budget item. Anything you animate must respect reduced motion — `MotionConfig` drops transforms while opacity fades remain, and the CSS query covers the rest. Never make motion the only way information is conveyed.
- Performance is the other one: prefer transform/opacity, and make scroll-linked work cheap (avoid layout thrash and per-frame `setState` on large subtrees).
- What ships today is restrained — a hero entrance, action feedback, and sections that are static on arrival. That is the current design, not a rule. Changing it is allowed.

## Design system

- Datasheet on drafting paper: tokens on `:root` in `src/index.css` (paper, ink, ink-2/3, rule, `--frame`, one PCB-green `--trace`), dark variant via `prefers-color-scheme`. Text contrast stays at WCAG AA.
- Two families, split by role, not by whim. `--font` is Archivo (Google Fonts, `wdth` + `wght`) and sets everything structural: the sheet title, headings, nav, buttons, labels, ordinals, spec rows, and the contribution graph axis. `--font-prose` is Newsreader and is for running prose only — About paragraphs, `.page-lead`, `.entry-desc`. Never put prose in Archivo or a label in Newsreader; the split is the point, since one family doing both jobs is what made the prose read as a form field.
- Serif prose needs different settings from the grotesque it replaced: no negative letter-spacing, weight 400 (not 500) at display sizes, body leading 1.7 rather than 1.65, and a measure capped in the serif's own ems. Copying grotesque values onto Newsreader is what makes a swapped-in serif look amateur.
- Sections use `Section` (`components/ui.tsx`): heading in the margin column, body on the right, heading text matching its nav label. Facts go in `dl.spec` rows.
- Green means connected or achieved: traces, links, awarded/qualified results.
- The hero is type only: the name, one statement, and a drafting title block (square, ruled) for the facts. The real signal chain lives on the Door Hinge entry.
- Each result appears once on the home page, in Competitions. The home project index shows name + `summary`.

## Components

- Pages go through `SiteShell` (skip link, nav, `main`, footer, deep-link hash scroll, motion setup).
- All copy lives in `src/data/content.ts`; components render it.
- Watermelon UI is ported natively (`Tip` in `components/ui.tsx`, nav, buttons); it is a React + Tailwind + shadcn registry, so it never gets `npm install`ed here.
- Build UI with React + CSS only. Component and animation libraries (KokonutUI, React Bits, Motion Primitives, 21st.dev) were evaluated and rejected: smallest footprint wins.

## Contributions API

- `api/github-contributions.ts` is a Vercel function; the Vite dev server runs the same handler and passes it `.env.local` values. Setup and the public-only policy are in `README.md` ("GitHub contribution graph").
- Any unavailable answer hides the section and the hero count; failures log a short reason in the Vercel function logs.

## Deploy

- Vercel project `van-89de/dev-portfolio`, live at `https://raghavkrishna-dev.vercel.app` (the `raghav-dev` and `raghavdev` aliases were taken). Merges to upstream `main` auto-deploy; the CLI is logged in for the rare manual deploy.
- `.vercelignore` keeps `.playwright-mcp/` and `dist/` out of uploads; including them aborts deploys on slow networks.
- The canonical URL (`https://raghavkrishna-dev.vercel.app`, projects at `/project`, no trailing slash) stays in sync across `index.html` and `project.html` (canonical + `og:url`), `public/robots.txt`, and `public/sitemap.xml`. `vercel.json` sets `trailingSlash: false`.

## Git

- Remotes: `origin` is upstream `Raghav2012Code/dev-portfolio`; `fork` is `abivan100-stack/raghav-dev-portfolio`. Work on a branch, push it to `fork`, and open or update a PR into upstream `main`.
- Commit after a green build unless the user says otherwise. History only moves forward (no force-push), and secrets stay out of the repo.
- A global pre-commit hook runs a Codex bug check on the staged patch and can block the commit. Fix what it flags, then commit again with hooks enabled.

## Agent skills

### Issue tracker

Issues live in upstream GitHub repo `Raghav2012Code/dev-portfolio`; use `gh` and specify `--repo Raghav2012Code/dev-portfolio`. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the default labels `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repo. See `docs/agents/domain.md`.
