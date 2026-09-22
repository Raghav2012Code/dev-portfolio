# Raghav Krishna — Portfolio

React 19 + TypeScript single-page portfolio (Vite). Same minimalist editorial
design as before — this was a migration, not a redesign.

```sh
npm install
npm run dev      # local dev server
npm run build    # typecheck (tsc -b) + production build into dist/
npm run preview  # serve the production build locally
npm run typecheck
```

## Where things live

| What | Where in `src/` |
|---|---|
| Copy for every section | `data/content.ts` (typed — edit text here) |
| Page assembly | `App.tsx` |
| Sections | `components/` (`Hero`, `Achievements`, `About`, `Projects`, `Skills`, `Robotics`, `Timeline`, `Currently`, `Contact`, `Footer`, `Navbar`) |
| Project cards | `components/ProjectCard.tsx` |
| Badge / tooltip / section headings | `components/ui.tsx` (Watermelon UI primitives, ported natively) |
| Motion language (ease, rise, stagger) | `lib/motion.ts` (`motion/react`, transform/opacity only) |
| Theme values (colours, radii, fonts) | `index.css` `:root` |

## Project content rules (keep them)

- Projects, in order: Door Hinge Safety System, CRASH, Vaccine Cold Chain Ledger, Volt Ledger, EPL Predictor, Urbania
- Participated-only entries (Technoviz, Shark Tank) stay muted in the timeline; they never enter the achievements strip
- No Habit Tracker anywhere
- No invented awards, jobs, stats, testimonials, or technical details
- No proficiency percentages or expertise claims
- No C++ in skills; no generic AI/ML skill category (XGBoost appears only in the CRASH + EPL cards)
- No LinkedIn (not provided)
- EPL Predictor is a technical project card only — no football-interest section
- Urbania is a personal experimental 2D city simulation — no stack focus, no link
- Reduced motion is respected globally (`MotionConfig reducedMotion="user"` + CSS media query)

## Adding real photos

Profile photo is `GITHUB_AVATAR_URL` in `src/data/content.ts` (currently the
GitHub avatar). Point it at `assets/profile.jpg` to use a real photograph.

Do not use stock photos as substitutes.
