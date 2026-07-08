---
name: website-workflow
description: BaxterLabs website build workflow. Use when building or editing site sections, copy, or design in this repo.
---

# BaxterLabs Website Workflow

## Start of every build session

1. Read `PROJECT.md`, `BRIEF.md`, `DECISIONS.md`
2. Confirm which **single section** is in scope (hero, services, proof, CTA, footer)
3. If section is not agreed, stop and ask

## Build loop

1. **Propose** — direction, layout, copy draft (reference `BRIEF.md` blanks if needed)
2. **Build** — implement only the agreed section in `src/`
3. **Preview** — ensure `npm run dev` works
4. **Wait** — user approves or gives warmer/colder feedback
5. **Lock** — update `DECISIONS.md` with approved choices
6. **Stop** — do not start the next section in the same session unless user asks

## Copy rules

- Source from `CONTENT.md`, rewrite with humanizer skill
- No placeholder text in commits
- CTA default: costa@baxterlabs.io

## Design rules

- Apply Taste Skill (`design-taste-frontend`, `redesign-existing-projects`) per `PROJECT.md`
- Lock fonts, colors, and theme in `DECISIONS.md` when hero is approved
- Use `references/` for mood boards and screenshots

## Out of scope

- Full page builds in one shot
- Agent runtime code or deploy scripts
- Production DNS changes without explicit approval
