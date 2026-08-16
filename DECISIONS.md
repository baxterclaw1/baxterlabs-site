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
- [x] Sections: Hero → How we work → What we build → About BaxterLabs → Contact → Footer
- [x] What we build: **Option D** — 8 items, no cards/flows, centered two-column list
- [x] Nav: sticky; stencil lockup left; jump links How we work / What we build / About; Partner with us CTA right. Mobile (~800px): logo + CTA only (no hamburger).
- [x] Logo: **stencil BL monogram** as the B — coral L + cream bowls (`bl-stencil-lcoral-bcream-thick.png`) at `1em`; “axter” + coral “Labs” (slightly lowered toward the B foot); coral underline under the full lockup (monogram + axter + Labs).
- [x] Logo personification: stacked-bars “eyes” mascot retained in ThenItRuns / samples only — not the nav mark
- [x] Corners: hard (no radius) on form inputs; primary CTA soft radius (option O)
- [x] Primary CTA style: soft corners + arrow + warm coral glow (hero); contact Submit uses the same coral style
- [x] Content width: **90rem** · side pad **2rem** (between original 72 and stretched 112)
- [x] Demo walkthrough: **removed from homepage** (legacy demo code retained in repo)
- [x] CTAs: **Partner with us** (hero + nav) → `#contact`; form Submit uses the same coral style
- [x] Hero height: ~80dvh so ~20vh of the coral panel (How we work) peeks below the fold at any zoom; first heading in the panel is not scroll-revealed
- [x] About BaxterLabs: always-visible section before the contact form (not a dropdown); Meet the founders + Our approach; `/#about` scrolls to the section; `/founders` is the same content on its own page

## Lawyer page (`/lawyer`)

- [x] Route: `/lawyer` (Astro page `src/pages/lawyer.astro`)
- [x] Positioning: Cook County / Illinois property tax appeal firms only. Not an AI agency page. One outcome: more appeals, fewer clerical errors, less staff time. One CTA: schedule a workflow assessment.
- [x] Client naming: anonymous ("a Cook County property tax appeal firm"). Never LJS on the page.
- [x] Visual: same dark BaxterLabs system (tokens, stencil lockup, Plus Jakarta Sans). Calmer than homepage; no agent illustration.
- [x] Sections: Hero → Who this is for → Where the season stalls → What we put in place → Why firms use us → Case study → FAQ → Assessment form
- [x] Nav: Who we help / The work / Case study / FAQ; CTA "Schedule an assessment" (mobile: "Schedule"); logo to `/`
- [x] Form: existing `/api/contact` with hidden `source=lawyer`; no Calendly
- [x] Footer: "Property tax appeal firms" → `/lawyer` (homepage unchanged otherwise)
- [x] Homepage layout and copy: unchanged

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
- [x] Primary CTA URL: hero and nav "Partner with us" scroll to `#contact` form (no Calendly yet)
- [x] Contact inbox: info@baxterlabs.io. `/api/contact` sends the lead and visitor confirmation via **Resend** (`RESEND_API_KEY` on Vercel). Web3Forms is a fallback if Resend cannot deliver the lead.

## Archive

Previous hero samples in `public/samples/` — reference only.
