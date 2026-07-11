# BaxterLabs logo — prompt pack & evaluation

Use **Nano Banana 2**, **1:1**, **2K**, **4 variants** per prompt.

Shared suffix (append to every prompt):
```
Flat vector. Single coral #E07A5F on near-black #0A0B0D. No text, no gradient, no glow, no circuit, no brain, no grid. Centered, generous padding. Must work at 32px favicon size.
```

---

## Prompts (run one at a time)

### A — B monogram (your best so far)
```
Minimal BaxterLabs B monogram. Exactly 2 solid shapes: vertical rectangle plus curved bowl forming letter B. Bold chunky geometric. Gap between stem and bowl using negative space.
```

### B — Coral rule
```
Minimal logo mark: one short wide horizontal coral bar, like an editorial section rule or dash. No letter, no icon. Quiet premium studio mark.
```

### C — Stacked blocks
```
Minimal logo mark: exactly 2 solid coral rectangles, slightly offset vertically, suggesting stacked systems. No letter. Maximum 2 shapes.
```

### D — Corner bracket
```
Minimal logo mark: one thick L-shaped open corner bracket. Bold geometric frame corner. No letter. Stroke thickness at least 15% of canvas width.
```

### E — Wordmark only (skip image gen — use nav text only)
No mark prompt. Just "BaxterLabs" in Plus Jakarta Sans 600 with optional coral underline.

---

## Nav context mockup prompt (see marks in use)

Run this **after** you pick a mark direction — paste your chosen mark description:

```
Website navigation bar mockup on dark background #0A0B0D. Left side: [DESCRIBE MARK HERE] in coral #E07A5F next to white text "BaxterLabs" in clean sans-serif. Right side: coral "Book a Call" button. Flat UI design, realistic web nav, 1440px wide crop. No hero, no other content.
```

Replace `[DESCRIBE MARK HERE]` with e.g. "small B monogram" or "short horizontal dash".

---

## 30-second check (score each 1–5)

| Test | Question |
|------|----------|
| **Squint** | At thumbnail size, is it still clear? |
| **Nav** | Imagine it 24px tall next to "BaxterLabs" — blob or mark? |
| **Brand** | Feels boutique studio, not AI startup template? |
| **Site** | Matches coral-on-dark site you already built? |
| **Own** | Could a competitor have the exact same mark? |

**15+ total** → worth refining. **Below 12** → discard.

---

## Decision rule

- Need **instant recognition** → A (B monogram)
- Want **quietest / most editorial** → B (coral rule) or E (wordmark only)
- Want **"systems" story** → C (2 blocks max)
- Still unsure → generate A + B + C, run nav mockup prompt on each, compare
