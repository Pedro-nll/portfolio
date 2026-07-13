# Decisions

## React, TypeScript, Vite, and custom CSS

The project uses React, TypeScript, and Vite because this stack is confirmed in the product specification and gives a fast static build suitable for GitHub Pages. Styling uses custom CSS variables instead of a large UI framework to keep the site lightweight, original, and easy to tune.

## Single-page portfolio

The site remains one page with section anchors instead of routes. This keeps navigation simple, works well on GitHub Pages subpaths, and supports the goal that visitors quickly understand Pedro's work and contact options.

## Restrained workspace illustration

The workspace vignette is decorative and secondary. It should add warmth without competing with projects or making the portfolio feel like a room simulator.

## No contact form

Contact uses social links and email only. There is no backend, database, spam handling, or form processing requirement.

## Project tags without a skills wall

Technology tags belong on project cards where they provide context. A separate skills wall is intentionally avoided to keep the page focused on work and credibility.

## Desktop and mobile layout direction

Desktop will use a left profile panel and right content column. Mobile will use one natural document scroll with compact intro and sticky navigation, avoiding nested scroll containers.

## Phase 1 structural prototype

Phase 1 renders Portuguese content as the temporary fallback while keeping English content typed in a separate file for later preference handling. The language and theme controls are visible but disabled until their persistence behavior is implemented in Phase 3. Project previews are CSS placeholders rather than sourced images so no unapproved assets or claims are introduced.

## Phase 0 scaffold details

The Vite template resolved to React 19, TypeScript 6, Vite 8, and `oxlint`. These are accepted as scaffold defaults for Phase 0. Any future dependency additions require an explicit reason and should be recorded here or in `PROJECT_STATUS.md`.
