# Locked Decisions

> If it's not here, it's not locked. Don't re-debate locked items.

## Project

- [x] Location: `~/Projects/Baxterlabs.io`
- [x] Stack: Astro (static output)
- [x] Workflow: one section at a time, user approval before next
- [x] Skills: Taste Skill (`design-taste-frontend` + `redesign-existing-projects`)
- [x] Git: local init only; no push until requested

## Design

- [x] Homepage approach: **Strategy D** — static shapes + proof band, no interactive demo
- [x] Marketing page: **dark theme** (`#0c0d10` site)
- [x] Sections: Hero → What we build (8 cards) → How we work → Before/After → CTA → Footer
- [x] Nav: logo mark + wordmark + **Book a Call** button → `#contact`
- [x] Logo: **stacked bars** — shorter width, taller height, hard corners; SVG in `LogoMark.astro`
- [x] Corners: hard (no radius) on buttons and form inputs
- [x] Content width: **90rem** · side pad **2rem** (between original 72 and stretched 112)
- [x] Demo walkthrough: **removed from homepage** (legacy demo code retained in repo)
- [x] CTAs: **one Book a Call** (nav only → `#contact`); hero has no CTA button; bottom is contact form
- [x] Contact form: name, email, optional business, message → `baxterlabs.io@gmail.com` via FormSubmit

## Copy

- [x] Positioning: boutique expert shop; father-son not on homepage
- [x] Voice: direct, no-nonsense, professional, not salesy
- [x] Audience: SMB owners who can afford custom work; mostly non-technical
- [x] Hero style: **typography-led** (C-warm) · coral mesh · staggered headline · no side panel
- [x] Proof band: removed from homepage (systems proof not on v1)
- [x] Meta title: BaxterLabs — Custom AI & Automation

## Deploy

- [ ] Staging URL: TBD after Vercel connect
- [ ] Production DNS: do not touch baxterlabs.io until staging approved
- [x] Book a Call URL: hero scrolls to `#contact` form (no Calendly yet)
- [x] Contact inbox: baxterlabs.io@gmail.com (FormSubmit)

## Archive

Previous hero samples in `public/samples/` — reference only.
