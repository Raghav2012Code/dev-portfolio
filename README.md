# Raghav Krishna — Portfolio

Single-page static portfolio. No build step, no backend. Open `index.html` or serve the folder with any static server:

```sh
npx serve .
# or
python -m http.server
```

## How to edit content

All content lives in **`index.html`** — every section is commented. Quick reference:

| What | Where in `index.html` |
|---|---|
| Profile photo | `.profile-img` in hero (currently `https://github.com/Raghav2012Code.png`) |
| Achievements strip | `.achievements` section |
| About text | `#about` |
| Featured project (Door Hinge) | `.featured` under `#projects` |
| Other projects | `.project-grid` cards |
| EPL Predictor repo link | `.card-link` in EPL card — point it at the real repo URL when published |
| Toolkit / skills | `#technologies` |
| AI workflow text | `#workflow` |
| Robotics interests | `#robotics` |
| Timeline | `#timeline` (Technoviz uses `.tl-minor` to stay less prominent) |
| Currently building | `#currently` — designed to be easy to edit |
| Contact links | `#contact` |
| Footer | `.footer` |

Theme values (colours, radii, fonts) live in `:root` at the top of **`styles.css`**.

## Adding real photos

Search `index.html` for `PHOTO PLACEHOLDER`. Replace any `.photo-placeholder` block with:

```html
<img class="real-photo" src="assets/your-photo.jpg" alt="Describe the photo" loading="lazy" />
```

Suggested folder: `assets/` (create it when you have photos). Suggested files:

- `assets/profile.jpg` — real portrait (then update `.profile-img` src)
- `assets/door-hinge-*.jpg` — robot build + Malaysia competition
- `assets/competition-*.jpg` — SRM, PEC Hacks, Technoxian

Do not use stock photos as substitutes.

## Rules baked into this site (keep them)

- No invented awards, jobs, stats, testimonials, or technical details
- No proficiency percentages or expertise claims
- No C++ in skills; no generic AI/ML skill category (XGBoost appears only in the Road Accident Safety Hub card)
- No LinkedIn (not provided)
- EPL Predictor is a technical project card only — no football-interest section
