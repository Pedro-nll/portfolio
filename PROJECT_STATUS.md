# Project status

## Current phase

Phase 5 in progress - First real-content pass.

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
- Added placeholder Portuguese and English résumé PDFs so download links resolve until real files are supplied.
- Replaced the default Vite favicon with an original `PL` favicon.
- Removed unused Vite starter assets from `public/` and `src/assets/`.
- Localized remaining structural accessible labels for profile, navigation, controls, and technology tag lists.
- Ran static content and asset scans to confirm placeholders are marked and stale scaffold references were removed.
- Ran headless Chrome desktop and mobile smoke screenshots.
- Copied supplied real résumé PDFs into `public/resume/resume-pt.pdf` and `public/resume/resume-en.pdf`.
- Copied supplied profile photo into `public/profile/pedro-lambert.jpg` and rendered it in the profile panel.
- Added supplied email `pedronll@outlook.com` and LinkedIn URLs.
- Replaced placeholder headline and introduction with résumé-supported Java, React, TypeScript, Spring Boot, Python, .NET, PUC Minas, and Infoblox positioning.
- Added selected experience entries for Infoblox, dti digital, and Agencia Experimental de Software / Grade Inteligente.
- Added Grade Inteligente as the first real project and kept two concept project cards for now.
- Updated metadata description to remove placeholder wording.

## In progress

- None.

## Next recommended action

Ask Pedro to review the first real-content pass and confirm whether to add or exclude research, teaching assistant entries, and any additional real projects.

## Blockers and questions for Pedro

- Confirm whether to keep the current experience selection: Infoblox, dti digital, and Agencia Experimental de Software / Grade Inteligente.
- Confirm whether research and teaching assistant résumé entries should stay excluded.
- Provide real details, links, and images for any additional projects that should replace the remaining concept cards.

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
- `npm run lint` passed after Phase 4.
- `npm run type-check` passed after Phase 4.
- `npm run build` passed after Phase 4. Production output was generated in `dist/` with Vite base path `/portfolio/`.
- Build output includes `dist/resume/resume-pt.pdf`, `dist/resume/resume-en.pdf`, and `dist/favicon.svg`.
- `file public/resume/resume-pt.pdf public/resume/resume-en.pdf public/favicon.svg` identified the résumé files as one-page PDF 1.4 documents and the favicon as SVG.
- Static scan found no remaining app references to removed Vite starter assets.
- Static scan found only clearly marked placeholders and concept labels; no unapproved real employment, outcome, or client claims were introduced.
- `npm run dev -- --host 127.0.0.1` started successfully at `http://127.0.0.1:5173/` after Phase 4.
- Headless Chrome desktop screenshot saved to `/tmp/portfolio-desktop.png`; no obvious blank render or overlap observed.
- Headless Chrome mobile screenshot saved to `/tmp/portfolio-mobile.png`; no obvious blank render or overlap observed at 390px width.
- `npm run lint` passed after the first Phase 5 content update.
- `npm run type-check` passed after the first Phase 5 content update.
- `npm run build` passed after the first Phase 5 content update. Production output includes the supplied 2-page résumé PDFs and profile image.
- Headless Chrome desktop screenshot saved to `/tmp/portfolio-phase5-desktop.png`; the real profile photo rendered and no obvious desktop overlap was observed.
- `npm run dev -- --host 127.0.0.1` started successfully at `http://127.0.0.1:5173/` after local port binding was approved.
- `gh repo create portfolio --public --source=. --remote=origin --push` succeeded.
- `git status --short --branch` shows `main...origin/main`.

## Known issues

- Two concept project cards still remain.
- The current experience selection is intentionally conservative and needs Pedro's review before finalizing Phase 5.
- Lighthouse was not run in Phase 4 because it is not installed in the project and no new dependency was added.

## Files changed in the latest session

- `PROJECT_STATUS.md`
- `.gitignore`
- `docs/decisions.md`
- `docs/content-needed.md`
- `index.html`
- `public/profile/pedro-lambert.jpg`
- `public/resume/resume-en.pdf`
- `public/resume/resume-pt.pdf`
- `src/App.css`
- `src/components/ContactLinks.tsx`
- `src/components/ProfilePanel.tsx`
- `src/content/en.ts`
- `src/content/pt.ts`
- `src/content/types.ts`
