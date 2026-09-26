# Raghav Krishna's Portfolio

Personal portfolio of Raghav Krishna, 14-year-old student, developer and
robotics builder from Chennai.

**Live:** https://raghavkrishna-dev.vercel.app

## Stack

React 19 + TypeScript + Vite, `motion/react` for animation. Designed as a
builder's datasheet: drafting-paper background, one typeface (Archivo), one
PCB-green accent, light and dark themes. The hero figure draws the
sense, process, actuate loop once on load; everything else stays still.

## Project content rules (keep them)

- Projects, in order: Door Hinge Safety System, CRASH, Vaccine Cold Chain Ledger, Volt Ledger, EPL Predictor, Urbania
- Participated-only entries (Technoviz, Shark Tank) stay muted in the competitions list; each result appears once on the home page
- No Habit Tracker anywhere
- No invented awards, jobs, stats, testimonials, or technical details
- No proficiency percentages or expertise claims
- No C++ in skills; no generic AI/ML skill category (XGBoost appears only in the CRASH + EPL cards)
- No LinkedIn (not provided)
- EPL Predictor is a technical project card only. No football-interest section.
- Urbania is a personal experimental 2D city simulation. No stack focus.
- Reduced motion is respected globally (`MotionConfig reducedMotion="user"` + CSS media query)

## Photos

Profile photo is `GITHUB_AVATAR_URL` in `src/data/content.ts` (currently the
GitHub avatar). Point it at `assets/profile.jpg` to use a real photograph.

Do not use stock photos as substitutes.

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build
```

Pushes to `main` auto-deploy to Vercel.

## GitHub contribution graph

The contribution calendar is fetched server-side through `api/github-contributions.ts`.
For the deployed graph, set `GITHUB_CONTRIBUTIONS_TOKEN` in the Vercel project's
Environment Variables and redeploy. Use a classic personal access token with no
scopes; do not grant `read:user`, so the graph stays limited to public activity.
Never prefix this variable with `VITE_` or put its value in the repository.
The local Vite server uses the same endpoint and shows the profile link if this
environment variable is unset.

The graph shows a one-year public contribution calendar for `Raghav2012Code`.
The page links directly to GitHub if the API is unavailable or unconfigured.
