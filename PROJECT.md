# BaxterLabs Website

## Goal

Redesign baxterlabs.io from scratch. Staging first, production later. Minimal repo, maximum clarity.

## Not in scope

BaxterTrade, Vultisig, NUC deploy, OpenClaw config, agent runtime, or anything outside the marketing site.

## Before writing UI

1. Read `BRIEF.md` and `DECISIONS.md`
2. If a decision is not in `DECISIONS.md`, propose it — do not assume
3. Pull copy from `CONTENT.md` (rewrite with humanizer before shipping)

## Build workflow

- **One section per session** (hero → services → proof → CTA → footer)
- User approves each section before the next
- Lock each approval in `DECISIONS.md`

## Skills (priority order)

1. `BRIEF.md` / `DECISIONS.md`
2. `redesign-existing-projects` (Taste Skill) — direction and audit
3. `design-taste-frontend` (Taste Skill) — build UI
4. `frontend-design` — aesthetic boldness
5. `ui-ux-pro-max` — palette/font lookup before CSS
6. `humanizer` — all user-facing copy
7. `skills/workflow/SKILL.md` — project build rules

## Stack

Astro → static HTML. Local dev: `npm run dev`. Deploy: Vercel preview, then baxterlabs.io DNS.

## Team

- **Mike** (co-founder) — mike@baxterlabs.io
- **Costa** (co-founder) — costa@baxterlabs.io
- **Company**: BaxterLabs — father & son AI architects

## Links

- Site: https://baxterlabs.io
- Twitter: https://twitter.com/BaxterClaw
- Discord: https://discord.gg/baxterlabs

## Anti-slop

- No Inter, Roboto, or system-font-only stacks as the design
- No purple-on-dark SaaS template aesthetic
- No "revolutionary AI" or generic agency copy
- Show proof (real systems we run), not claims

## Success

Staging URL that feels like BaxterLabs — not generic attempt #6.
