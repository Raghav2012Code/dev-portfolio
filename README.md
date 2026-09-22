# Raghav Krishna — Portfolio

Personal portfolio of Raghav Krishna — 14-year-old student, developer and
robotics builder from Chennai.

**Live:** https://dev-portfolio-azure-nine.vercel.app

## Stack

React 19 + TypeScript + Vite, `motion/react` for animation. Minimalist
single-column editorial design: one width, one font, one quiet accent.

## Project content rules (keep them)

- Projects, in order: Door Hinge Safety System, CRASH, Vaccine Cold Chain Ledger, Volt Ledger, EPL Predictor, Urbania
- Participated-only entries (Technoviz, Shark Tank) stay muted in the timeline; they never enter the achievements strip
- No Habit Tracker anywhere
- No invented awards, jobs, stats, testimonials, or technical details
- No proficiency percentages or expertise claims
- No C++ in skills; no generic AI/ML skill category (XGBoost appears only in the CRASH + EPL cards)
- No LinkedIn (not provided)
- EPL Predictor is a technical project card only — no football-interest section
- Urbania is a personal experimental 2D city simulation — no stack focus
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
