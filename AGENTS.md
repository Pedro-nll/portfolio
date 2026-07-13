# AGENTS.md

## Product source of truth

Read `PORTFOLIO_BUILD_SPEC.md` before making product or implementation decisions. This project is a fast, bilingual, single-page professional portfolio for Pedro Lambert. It should feel clean, modern, professional, warm, and restrained.

## Durable workflow

- At the start of every session, read `PROJECT_STATUS.md`, `docs/decisions.md`, and `docs/content-needed.md`.
- Inspect `git status` and recent commits before editing.
- Continue from `PROJECT_STATUS.md`; do not rebuild completed work.
- Update `PROJECT_STATUS.md` before ending every session, including sessions that stop on an error or question.
- Do not silently make consequential product, visual, content, dependency, GitHub, or deployment decisions.

## Approved stack

- React, TypeScript, and Vite.
- Custom CSS with CSS variables.
- Single-page application with anchor navigation, no client-side routing.
- Static GitHub Pages target at `/portfolio/`, with local development still working from `/`.

## Product constraints

- Projects are the first major content section and the strongest visual priority.
- Desktop uses a fixed or sticky profile/sidebar area on the left and scrollable main content on the right.
- Mobile uses natural document scrolling with compact intro and sticky navigation.
- Use a small original SVG/CSS workspace vignette; keep it decorative, restrained, and secondary.
- Avoid unnecessary dependencies, heavy animation libraries, route libraries, analytics, backend services, contact forms, loading screens, parallax, particles, cursor replacement, and horizontal scrolling.

## Content and localization

- Keep English and Portuguese content typed and separate from presentational components.
- Do not invent Pedro's employment history, social URLs, project outcomes, years of experience, client names, résumé files, or real project details.
- Clearly label placeholder and concept content.
- Supplied facts so far: displayed name is Pedro Lambert; GitHub profile is `https://github.com/Pedro-nll`.

## Accessibility and performance

- Use semantic HTML, one primary `h1`, visible focus states, keyboard-accessible controls, skip links, meaningful alt text for content images, and hidden semantics for decorative imagery.
- Respect `prefers-reduced-motion`.
- Keep assets and links safe for the `/portfolio/` base path.
- Target production Lighthouse scores of at least 90 Performance and 95 Accessibility, Best Practices, and SEO when locally measurable.

## Validation commands

Run proportionate validation after each milestone:

```bash
npm run lint
npm run type-check
npm run build
```

Use additional manual accessibility, responsive, and reduced-motion checks during later phases.
