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
- [x] Sections: Hero → What we build → What to expect → Contact → About BaxterLabs → Footer
- [x] What we build: **Option D** — 8 items, no cards/flows, centered two-column list
- [x] Nav: logo mark + wordmark left only (no hamburger / section menu)
- [x] Logo: **stencil BL monogram** as the B — coral L + cream bowls (`bl-stencil-lcoral-bcream-thick.png`) at `1em`; “axter” + coral “Labs” (slightly lowered toward the B foot); coral underline under the full lockup (monogram + axter + Labs).
- [x] Logo personification: stacked-bars “eyes” mascot retained in ThenItRuns / samples only — not the nav mark
- [x] Corners: hard (no radius) on form inputs; primary CTA soft radius (option O)
- [x] Primary CTA style: soft corners + arrow + warm coral glow (hero); contact Submit uses green variant of same shape
- [x] Content width: **90rem** · side pad **2rem** (between original 72 and stretched 112)
- [x] Demo walkthrough: **removed from homepage** (legacy demo code retained in repo)
- [x] CTAs: **one Build your first agent** below hero subtitle → `#contact`
- [x] About BaxterLabs: expandable control after Contact (collapsed by default); bordered control + chevron so it reads as clickable; opens to Meet the founders + Our approach; `/#about` opens panel; `/founders` starts open

## Copy

- [x] Positioning: boutique expert shop; father-son not on homepage
- [x] Voice: direct, no-nonsense, professional, not salesy
- [x] Audience: SMB owners who can afford custom work; mostly non-technical
- [x] Hero style: **typography-led** (C-warm) · coral mesh · staggered headline · no side panel · **centered text column**
- [x] Hero headline: **Your business evolves. / Your tools should too.**
- [x] Hero sub: **Custom operations & automation for SMBs. Connect tools, streamline tasks, consolidate scattered work into one system.**
- [ ] Proof content: placeholder prompt in `SystemsProof.astro` — ask a different AI for 3-4 real production system names and descriptions, then fill cards
- [x] Meta title: BaxterLabs — Custom AI & Automation
- [x] Link preview (`og:image` / Twitter card): branded BaxterLabs card at `/og.png` — not founder portraits; scrapers no longer fall back to About photos

## Deploy

- [x] Staging URL: TBD after Vercel connect
- [x] Vercel auto-deploys from `main` branch to baxterlabs.io
- [ ] Production DNS: do not touch baxterlabs.io until staging approved
- [x] Primary CTA URL: hero "Build your first agent" scrolls to `#contact` form (no Calendly yet)
- [x] Contact inbox: baxterlabs.io@gmail.com (FormSubmit)

## Archive

Previous hero samples in `public/samples/` — reference only.
