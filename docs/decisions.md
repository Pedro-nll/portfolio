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

Pedro later confirmed that research and teaching assistant entries should stay excluded. Grade Inteligente uses `https://icei.pucminas.br/gradeinteligente/` as the project link, while the two other concept cards remain.

The source files Pedro placed in `docs/` are ignored by git after being copied into `public/`; this avoids duplicating source assets in the public repository while keeping the served files in the app.

## Academic experience section

Pedro reversed the earlier decision to omit academic material from the page. Academic items now belong in a separate Academic Experience section after professional Experience, rather than being mixed into the professional timeline.

The first academic item is the SBES 2024 publication, supported by the supplied résumé PDFs: "On the Identification of Self-Admitted Technical Debt with Large Language Models". The same section also includes the PUC Minas academic excellence recognition from the résumés and Pedro's supplied fact that he participated in the First School of Studies in Empirical Software Engineering, sponsored by ACM. No dates were invented for academic items that did not have dates in the supplied materials.

## Real project visual pass

The remaining concept project cards were replaced with verified real work. Grade Inteligente keeps the existing approved portfolio description and now uses a public screenshot captured from the live application after selecting PUC Minas, Campus Coração Eucarístico, Engenharia de Software, curriculum `131701`.

Football Match Prediction with Neural Networks was added as an academic team project. Its description, technologies, source link, and visual are based on the cloned `finalProjectNeuralNetworksWiSe25` repository plus the local final PDF/PPTX presentation. The card does not claim a live demo or sole authorship.

Project cards now support optional real image assets. Real projects render only verified links, while concept placeholder pending-link text is reserved for explicit concept entries.

## Four-project portfolio review pass

180 Engenharia Sustentável and le&learn were added as local review entries without publishing or linking their private repositories. 180 uses the public YouTube presentation as its demo link and the login page as its selected cover. The relationship is labeled conservatively as `Partner project` / `Projeto para organização parceira` until Pedro confirms the exact arrangement.

le&learn is labeled as an academic team project based on the repository documentation. Its cover uses `leLearnPic.png` inside a simple rounded mobile viewport, preserving the original UI without generative edits or aggressive upscaling. The source link is omitted because the repository is private.

Pedro requested the project order: 180 Engenharia Sustentável, le&learn, Football Match Prediction with Neural Networks, and Grade Inteligente.

## Phase 6 GitHub Pages deployment

Deployment uses GitHub Pages with GitHub Actions, matching the current Vite static deployment guide and GitHub Pages custom workflow requirements. The workflow builds with `npm ci`, `npm run lint`, and `npm run build`, uploads `dist`, and deploys it through GitHub Pages.

The repository remains a project Pages site at `/portfolio/`; `vite.config.ts` keeps production builds on `base: '/portfolio/'` while local development stays at `/`.

## Reference-layout redesign

The approved `docs/design-reference.png` is used as a layout reference, not as an embedded image asset. The redesign recreates its structure with React, semantic HTML, custom CSS, and the existing workspace SVG vignette.

Desktop now uses a full-viewport `100dvh` application shell with padded edges, a fixed left profile area, and a separate warm inset content window on the right. Above the mobile breakpoint, document-level scrolling is disabled and only the right content window scrolls. This matches the reference and the original product requirement for an independently scrollable main content area.

Mobile and tablet widths keep normal document scrolling. The inset window styling and independent overflow are removed, the layout stacks vertically, and the navigation becomes a compact sticky grid to avoid horizontal scrolling.

Active-section detection uses the content window as the `IntersectionObserver` root on desktop and returns to the viewport root on mobile. Desktop anchor navigation is intercepted so Projects, Experience, and Contact scroll inside the content window instead of the document.

The left profile panel follows the reference hierarchy: utility controls, identity row, intro, minimal vertical navigation, social icons, and the decorative workspace vignette. The previously rendered statistic boxes were removed from the visible profile layout because they are not part of the approved hierarchy, but the localized data remains in the content model for possible future use.

Language controls are separate Brazil and US flag icon buttons with accessible names and visible tooltips. Theme and résumé controls are icon-only buttons/links using inline SVG icons to avoid adding a dependency. The résumé link remains base-path-safe and switches between the Portuguese and English PDFs according to the active language.

Project descriptions are line-clamped on desktop to keep cards close to the reference proportions and allow more work to be visible in the inset window. Mobile shows the full description text.

A small circular scroll cue appears inside the desktop content window while there is more content below. It jumps to Contact and fades out near the end of the internal scroll container. It is hidden on mobile because mobile uses normal document scrolling rather than an independent content window.

## Phase 0 scaffold details

The Vite template resolved to React 19, TypeScript 6, Vite 8, and `oxlint`. These are accepted as scaffold defaults for Phase 0. Any future dependency additions require an explicit reason and should be recorded here or in `PROJECT_STATUS.md`.
