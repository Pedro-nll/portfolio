# Project status

## Current phase

Phase 3 complete - Localization and preferences.

## Last completed work

- Committed Phase 0 baseline locally as `e1a1bfa chore: initialize portfolio`.
- Committed Phase 1 locally as `c1b07c8 feat: add structural portfolio prototype`.
- Created the public GitHub repository at `https://github.com/Pedro-nll/portfolio`.
- Configured `origin` as `https://github.com/Pedro-nll/portfolio.git` and pushed `main`.
- Built the Phase 1 semantic single-page structure with profile panel, anchor navigation, projects, experience, contact, and footer.
- Added typed Portuguese and English content files while rendering Portuguese as the temporary fallback.
- Added three clearly labeled concept project cards.
- Added placeholder experience and pending contact fields without inventing unverified claims or links.
- Added responsive structural CSS for desktop two-column layout and mobile natural scroll with sticky navigation.
- Added semantic CSS tokens in `src/styles/tokens.css` for light/dark palette, surfaces, borders, focus, shadows, and illustration colors.
- Polished typography, spacing, project card hierarchy, focus states, responsive surfaces, and reduced-motion behavior.
- Added a restrained decorative workspace SVG vignette in the profile panel.
- Implemented language preference with Portuguese fallback, English browser detection, localStorage persistence, and document `lang` updates.
- Implemented explicit light/dark theme preference with localStorage persistence while preserving OS preference on first load.
- Wired language and theme controls in the profile panel.
- Added locale-aware, base-path-safe résumé links for `resume-pt.pdf` and `resume-en.pdf`.
- Added active section tracking with `IntersectionObserver` and `aria-current` navigation state.

## In progress

- None.

## Next recommended action

Proceed with Phase 4 quality pass: keyboard navigation, reduced motion, zoom/narrow widths, broken links, missing assets, content-claim review, and responsive checks.

## Blockers and questions for Pedro

- No current blockers for Phase 4 implementation.
- Later content still needed before replacing placeholders; see `docs/content-needed.md`.

## Validation performed

- `npm run lint` passed.
- `npm run type-check` passed.
- `npm run build` passed after Phase 1. Production output was generated in `dist/` with Vite base path `/portfolio/`.
- `npm run lint` passed after Phase 2.
- `npm run type-check` passed after Phase 2.
- `npm run build` passed after Phase 2. Production output was generated in `dist/` with Vite base path `/portfolio/`.
- `npm run dev -- --host 127.0.0.1` started successfully at `http://127.0.0.1:5173/` after Phase 2.
- `npm run lint` passed after Phase 3.
- `npm run type-check` passed after Phase 3.
- `npm run build` passed after Phase 3. Production output was generated in `dist/` with Vite base path `/portfolio/`.
- `npm run dev -- --host 127.0.0.1` started successfully at `http://127.0.0.1:5173/` after Phase 3.
- `npm run dev -- --host 127.0.0.1` started successfully at `http://127.0.0.1:5173/` after local port binding was approved.
- `gh repo create portfolio --public --source=. --remote=origin --push` succeeded.
- `git status --short --branch` shows `main...origin/main`.

## Known issues

- The résumé link points to the planned base-path-safe placeholder path, but the PDF files are not present yet.
- Real résumé PDFs, profile photo, experience entries, contact email, LinkedIn URL, and project details are not supplied yet.
- The Vite scaffold still includes unused starter assets under `src/assets/` and `public/icons.svg`; they are not referenced by the app.

## Files changed in the latest session

- `AGENTS.md`
- `PROJECT_STATUS.md`
- `.gitignore`
- `.oxlintrc.json`
- `README.md`
- `docs/decisions.md`
- `docs/content-needed.md`
- `index.html`
- `package-lock.json`
- `package.json`
- `public/`
- `src/`
- `src/App.css`
- `src/App.tsx`
- `src/components/AppShell.tsx`
- `src/components/ContactLinks.tsx`
- `src/components/ExperienceTimeline.tsx`
- `src/components/Navigation.tsx`
- `src/components/ProfilePanel.tsx`
- `src/components/ProjectCard.tsx`
- `src/components/ProjectsSection.tsx`
- `src/components/WorkspaceVignette.tsx`
- `src/content/en.ts`
- `src/content/pt.ts`
- `src/content/types.ts`
- `src/hooks/useActiveSection.ts`
- `src/hooks/useLanguage.ts`
- `src/hooks/useTheme.ts`
- `src/index.css`
- `src/styles/tokens.css`
- `tsconfig.app.json`
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts`
