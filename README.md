# Trang Nguyen — Product Portfolio

Product management portfolio built with Next.js. Currently features one case study:
**Chef's Table**, an AI dining companion that turns an unfamiliar restaurant menu into
personalized ordering guidance.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Structure

```
src/
  app/
    layout.tsx                       root layout, site metadata, header + footer
    page.tsx                         portfolio home — intro, work grid, about
    opengraph-image.tsx              generated social preview for the home page
    globals.css                      all styling (design tokens at the top)
    work/chefs-table/
      page.tsx                       the Chef's Table case study
      opengraph-image.tsx            generated social preview for the case study
  components/
    SiteHeader.tsx                   sticky top navigation
    SiteFooter.tsx                   contact section + site base
    CaseStudyProgress.tsx            fixed phase rail on the case study
    PhoneFrame.tsx                   shared device chrome for app screenshots
    Reveal.tsx                       scroll-into-view animation wrapper
    MissionJourney.tsx               Phase 01 — three-step decision journey
    QuestionBubbles.tsx              Phase 01 — the diner's open questions
public/
  chefs-table/screens/*.png          app screenshots (1206 × 2622)
  chefs-table/profile/trang.jpg      portrait
```

## The case study

The Chef's Table narrative runs in four phases. Each has an `id` that the progress
rail in `CaseStudyProgress.tsx` links to:

| Phase | Anchor       | Covers                                                        |
| ----- | ------------ | ------------------------------------------------------------- |
| 01    | `#overview`  | Hero, product mission, the problem                            |
| 02    | `#ideation`  | Research question, interviews, synthesis, prioritization, opportunity |
| 03    | `#define`    | MVP goal, user stories, acceptance criteria, MVP scope        |
| 04    | `#build`     | The interface, trust rule, demo slot, validation plan, reflection |

## Adding the live demo

Phase 04 reserves a panel for the interactive walkthrough. Replace the
`.build-v2-demo-slot` block in `src/app/work/chefs-table/page.tsx` with the embed
or video once the app is complete, and update the build status card from
"In progress" to "Built".

While the intelligence layer is still in development, the hero status badge reads
`IN DEVELOPMENT`. Flip it back to `BUILT` when the demo ships.

## Adding a second project

1. Create `src/app/work/<project>/page.tsx` with its own `metadata` export.
2. Add an `opengraph-image.tsx` in the same folder.
3. Add a `.home-project` card for it in `src/app/page.tsx`, and update the
   `01 PROJECT` count in the section head.

## Before deploying

- `siteUrl` in `src/app/layout.tsx` is a placeholder — set it to the real domain
  so Open Graph URLs resolve correctly.
- The LinkedIn URL in `src/components/SiteFooter.tsx` is a placeholder.

## Notes

- Fonts (Inter, IBM Plex Mono, Playfair Display) are loaded via `next/font` and
  exposed as `--font-sans`, `--font-mono`, and `--font-serif` in `globals.css`.
- All screenshots render through `next/image` via `PhoneFrame`, which fixes the
  device aspect ratio at 1206 / 2622.
