# Project status

## Current phase

Focused visual/content refinement deployed.

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
- Added the Grade Inteligente project link: `https://icei.pucminas.br/gradeinteligente/`.
- Confirmed research and teaching assistant entries should remain excluded.
- Added `.github/workflows/deploy.yml` for GitHub Pages deployment through GitHub Actions.
- Enabled GitHub Pages with `build_type=workflow`.
- GitHub Pages reports the production URL as `https://pedro-nll.github.io/portfolio/`.
- Verified the first Pages deployment run completed successfully.
- Verified the live page, profile image, and English résumé asset returned HTTP 200.
- Updated canonical and Open Graph URLs to the lowercase live GitHub Pages URL.
- Redesigned the layout against `docs/design-reference.png` without embedding the reference image.
- Desktop now uses a full `100dvh` application shell with viewport padding, a fixed left profile area, and an inset right content window.
- Desktop document-level scrolling is disabled; the right content window owns vertical scrolling.
- Retargeted active-section detection to the content window on desktop while preserving viewport observation on mobile.
- Retargeted desktop anchor navigation to scroll the internal content window.
- Reorganized the profile panel into utility icon controls, identity row, concise intro, vertical navigation, social icons, and subdued workspace vignette.
- Replaced text language/theme/résumé controls with icon controls: Brazil and US flags, theme icon, and résumé download icon.
- Kept résumé download locale-aware through the selected language.
- Restyled project cards to be lower, more visual, and closer to the reference hierarchy.
- Restored mobile and tablet behavior to normal document scrolling with a compact sticky navigation and no horizontal nav scrollbar.
- Preserved existing bilingual content files, theme system, GitHub Pages base path, résumé/profile assets, and decorative SVG illustration.
- Removed `Intern` / `Estagiario` from the visible profile role copy while leaving the experience entries intact.
- Aligned the profile utility controls to the right on desktop and mobile.
- Added a circular bobbing scroll cue inside the desktop content window; it scrolls to Contact when clicked and fades out near the end of the internal scroll area.
- Committed the redesign as `50f773e feat: redesign portfolio layout`.
- Pushed `main` to `origin`.
- GitHub Pages deployment run `29351862811` completed successfully for commit `50f773e0dc322751a5bde502eafb6fc0f8a1e337`.
- Verified the live site and key assets at `https://pedro-nll.github.io/portfolio/`.
- Local-only visual refinement added the visible profile email as a `mailto:` link under the role.
- GitHub and LinkedIn icons now sit with the email in the identity/contact group; the redundant profile email icon was removed.
- Light-mode workspace vignette visibility was improved with illustration-specific semantic tokens and modest detail strengthening.
- The workspace vignette is hidden at the mobile/tablet breakpoint.
- Local-only content tweak removed the profile student status line in both languages.
- Updated the profile role to `Software Engineer at Infoblox` and `Engenheiro de software na Infoblox`.
- Updated the Infoblox experience descriptions to mention scalable microservices, distributed architecture, and Infoblox as a Silicon Valley company.
- Fixed internal scroll behavior so changing languages does not re-apply hash navigation or move the scrollable content window.
- Committed the focused refinement as `008ed8a feat: refine profile contact details`.
- Pushed `main` to `origin`.
- GitHub Pages deployment run `29388993191` completed successfully for commit `008ed8a334555453cb6421b6e81538fdf54f8466`.
- Verified the deployed portfolio URL returned HTTP 200 after the refinement deployment.
- Local-only text cleanup removed the Projects eyebrow, Projects intro, and Experience eyebrow in both languages.
- Local-only change removed the right-side Contact section because the same contact options are now available in the left profile identity group.
- Contact was removed from the anchor navigation; the scroll cue now targets Experience.

## In progress

- None.

## Next recommended action

Review the deployed focused refinement at `https://pedro-nll.github.io/portfolio/`.

## Blockers and questions for Pedro

- Two concept project cards intentionally remain until Pedro supplies additional real project details.
- Project-card previews remain CSS/SVG-style concept previews rather than real project screenshots.

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
- `npm run lint` passed after adding the Grade Inteligente link.
- `npm run type-check` passed after adding the Grade Inteligente link.
- `npm run build` passed after adding the Grade Inteligente link.
- `npm run lint` passed before adding the deployment workflow.
- `npm run type-check` passed before adding the deployment workflow.
- `npm run build` passed before adding the deployment workflow.
- `gh api --method POST repos/Pedro-nll/portfolio/pages -f build_type=workflow` succeeded and returned `https://pedro-nll.github.io/portfolio/`.
- GitHub Actions deployment run `29286850441` completed with conclusion `success`.
- `curl -I https://pedro-nll.github.io/portfolio/` returned HTTP 200.
- `curl -I https://pedro-nll.github.io/portfolio/profile/pedro-lambert.jpg` returned HTTP 200.
- `curl -I https://pedro-nll.github.io/portfolio/resume/resume-en.pdf` returned HTTP 200.
- `npm run dev -- --host 127.0.0.1` started successfully at `http://127.0.0.1:5173/` after local port binding was approved.
- `gh repo create portfolio --public --source=. --remote=origin --push` succeeded.
- `git status --short --branch` shows `main...origin/main`.
- `npm run dev -- --host 127.0.0.1` started successfully at `http://127.0.0.1:5173/` for the reference redesign.
- Baseline screenshots before editing were captured at 1440x900 and 1366x768.
- Final redesign screenshots were captured at 1366x768, 1440x900, 1920x1080, 900x900, and 390x844.
- At 1366x768, the desktop document itself did not show a viewport scrollbar; the visible scrollbar belongs to the inset content window.
- At 1440x900, the first two project cards and a sliver of the next card are visible in the content window.
- At 900px and 390px widths, the layout returned to natural document scrolling with stacked profile/content and sticky mobile navigation.
- Keyboard focus visibility is preserved through the global `:focus-visible` styling on links and buttons, including icon-only controls.
- Icon-only controls have accessible names and visible hover/focus tooltips.
- The selected language is indicated with `aria-pressed` and a visible marker, not color alone.
- Both language controls were implemented as explicit Português and English buttons; the résumé href is still computed from the selected language.
- Both themes continue to use the existing `data-theme` theme system.
- Reduced-motion behavior continues through the existing global `prefers-reduced-motion` rule, including scroll behavior.
- `npm run lint` passed after the redesign.
- `npm run type-check` passed after the redesign.
- `npm run build` passed after the redesign. Production output keeps `/portfolio/` asset URLs in `dist/index.html`.
- `dist/` contains `resume/resume-pt.pdf`, `resume/resume-en.pdf`, and `profile/pedro-lambert.jpg`.
- `npm run lint` passed after the follow-up profile/control/scroll-cue changes.
- `npm run type-check` passed after the follow-up profile/control/scroll-cue changes.
- `npm run build` passed after the follow-up profile/control/scroll-cue changes.
- Follow-up screenshots were captured at 1440x900 and 390x844 to verify the right-aligned controls and mobile layout.
- Dev server was used for local review before deployment.
- `git push origin main` succeeded for commit `50f773e`.
- `gh run view 29351862811 --repo Pedro-nll/portfolio --json conclusion,status,url,headSha` returned `status: completed` and `conclusion: success`.
- `curl -I https://pedro-nll.github.io/portfolio/` returned HTTP 200 after deployment.
- `curl -I https://pedro-nll.github.io/portfolio/profile/pedro-lambert.jpg` returned HTTP 200 after deployment.
- `curl -I https://pedro-nll.github.io/portfolio/resume/resume-en.pdf` returned HTTP 200 after deployment.
- `curl -I https://pedro-nll.github.io/portfolio/resume/resume-pt.pdf` returned HTTP 200 after deployment.
- Local dev server started successfully at `http://127.0.0.1:5173/` for the focused refinement pass.
- Deployed comparison screenshot captured from `https://pedro-nll.github.io/portfolio/#experience`.
- Local before/after screenshots captured at 1440x900; mobile/tablet screenshots captured at 390x844 and 900x900.
- `npm run type-check` passed after the focused refinement.
- `npm run lint` passed after the focused refinement.
- `npm run build` passed after the focused refinement.
- `npm run type-check` passed after the local content tweak.
- `npm run lint` passed after the local content tweak.
- `npm run build` passed after the local content tweak.
- Desktop screenshot captured at 1440x900 after removing the profile status line.
- `npm run type-check` passed after the language-scroll fix.
- `npm run lint` passed after the language-scroll fix.
- `npm run build` passed after the language-scroll fix.
- `git push origin main` succeeded for commit `008ed8a`.
- `gh run view 29388993191 --repo Pedro-nll/portfolio --json conclusion,status,url,headSha` returned `status: completed` and `conclusion: success`.
- `curl -I https://pedro-nll.github.io/portfolio/` returned HTTP 200 after the refinement deployment.
- `npm run type-check` passed after the local section text cleanup.
- `npm run lint` passed after the local section text cleanup.
- `npm run type-check` passed after removing the right-side Contact section.
- `npm run lint` passed after removing the right-side Contact section.
- `npm run build` passed after removing the right-side Contact section.

## Known issues

- Two concept project cards still remain.
- Experience selection is confirmed for now: Infoblox, dti digital, and Agencia Experimental de Software / Grade Inteligente.
- Lighthouse was not run in Phase 4 because it is not installed in the project and no new dependency was added.
- Remaining visual differences from the reference: project previews are existing generated CSS/SVG-style placeholders rather than detailed raster screenshots; profile statistics are no longer rendered in the left panel to match the approved hierarchy, but remain in localized content; desktop project descriptions are line-clamped to keep card proportions close to the reference.
- No known responsive issue was observed in the checked 1366x768, 1440x900, 1920x1080, 900x900, or 390x844 screenshots.
- Vite preview serves the built HTML at `/portfolio/`; built public assets are present in `dist/` and map correctly under GitHub Pages at `/portfolio/`.
- Focused refinement, content tweak, and language-scroll fix are deployed.
- Latest section text cleanup remains local and uncommitted.
- Right-side Contact removal remains local and uncommitted.

## Files changed in the latest session

- `PROJECT_STATUS.md`
- `docs/decisions.md`
- `src/App.css`
- `src/components/ProfilePanel.tsx`
- `src/content/en.ts`
- `src/content/pt.ts`
- `src/content/types.ts`
- `src/styles/tokens.css`
