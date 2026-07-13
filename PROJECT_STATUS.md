# Project status

## Current phase

Phase 1 complete - Structural prototype.

## Last completed work

- Committed Phase 0 baseline locally as `e1a1bfa chore: initialize portfolio`.
- Built the Phase 1 semantic single-page structure with profile panel, anchor navigation, projects, experience, contact, and footer.
- Added typed Portuguese and English content files while rendering Portuguese as the temporary fallback.
- Added three clearly labeled concept project cards.
- Added placeholder experience and pending contact fields without inventing unverified claims or links.
- Added responsive structural CSS for desktop two-column layout and mobile natural scroll with sticky navigation.

## In progress

- None.

## Next recommended action

Proceed with Phase 2 design system and restrained workspace vignette after resolving the remote push decision.

## Blockers and questions for Pedro

- No Phase 0 blockers.
- Push is pending because no `origin` remote is configured. Creating or connecting the GitHub repository still needs explicit repository visibility and remote authorization.
- Later content still needed before replacing placeholders; see `docs/content-needed.md`.

## Validation performed

- `npm run lint` passed.
- `npm run type-check` passed.
- `npm run build` passed after Phase 1. Production output was generated in `dist/` with Vite base path `/portfolio/`.
- `npm run dev -- --host 127.0.0.1` started successfully at `http://127.0.0.1:5173/` after local port binding was approved.

## Known issues

- Theme toggle, language toggle, active navigation state, résumé locale switching, and the decorative workspace vignette are not implemented yet.
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
- `src/content/en.ts`
- `src/content/pt.ts`
- `src/content/types.ts`
- `src/index.css`
- `tsconfig.app.json`
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts`
