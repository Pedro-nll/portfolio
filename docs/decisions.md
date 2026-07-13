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

Phase 1 rendered Portuguese content as the temporary fallback while keeping English content typed in a separate file for later preference handling. Project previews are CSS placeholders rather than sourced images so no unapproved assets or claims are introduced.

## Phase 2 visual system and vignette

Phase 2 uses a warm off-white, brown-gray, muted green, and walnut palette for the light theme, with a restrained charcoal/green dark preference through CSS media queries. The visual system is defined in `src/styles/tokens.css` with semantic and illustration-specific custom properties.

The workspace vignette is an inline decorative SVG component using simple shelves, books, a desk, monitor, plant, and lamp. It is `aria-hidden`, theme-aware through CSS variables, and placed low in the profile panel so it cannot compete with project cards.

No dependencies were added for Phase 2. Motion remains limited to short focus, hover, and skip-link transitions, with reduced-motion support disabling nonessential transition duration.

## Phase 3 preferences and localization

Phase 3 implements language and theme preferences with small React hooks and `localStorage`; no dependency was added. Portuguese remains the fallback unless the browser language clearly starts with English or the user has stored an explicit choice. The selected language updates the document `lang` attribute.

Theme preference is stored explicitly as `light` or `dark` and applied through `document.documentElement.dataset.theme`. The first load still respects the operating-system preference before an explicit choice exists.

The résumé control now builds a base-path-safe URL for `resume-pt.pdf` or `resume-en.pdf` according to the active language. Placeholder PDF files exist in `public/resume/` and must be replaced with real supplied résumé files.

Active section state uses `IntersectionObserver` and `aria-current` on anchor links. The active state is shown with weight and an inset marker, not color alone.

## Phase 4 quality pass

Phase 4 added minimal placeholder résumé PDFs so the localized download links resolve until real files are supplied. It also replaced the default Vite favicon with an original `PL` favicon and removed unused Vite starter assets.

Responsive smoke checks used headless Chrome screenshots at 1440 by 1000 and 390 by 844. The screenshots showed nonblank rendering, visible primary content, no obvious text overlap, and the workspace vignette remaining secondary. Lighthouse was not run because it is not installed in the project and no new quality dependency was added.

## Phase 5 first real-content pass

Pedro supplied résumé PDFs, a profile image, email, LinkedIn URLs, and specific guidance for experience/project selection. The public résumé files now use the supplied PDFs, and the profile panel uses the supplied photo.

Experience currently focuses on Infoblox, dti digital, and Agencia Experimental de Software / Grade Inteligente because Pedro explicitly called out DTI and Infoblox and supplied Grade Inteligente context. Research and teaching assistant entries remain excluded until Pedro confirms whether they fit the portfolio positioning.

The source files Pedro placed in `docs/` are ignored by git after being copied into `public/`; this avoids duplicating source assets in the public repository while keeping the served files in the app.

## Phase 0 scaffold details

The Vite template resolved to React 19, TypeScript 6, Vite 8, and `oxlint`. These are accepted as scaffold defaults for Phase 0. Any future dependency additions require an explicit reason and should be recorded here or in `PROJECT_STATUS.md`.
