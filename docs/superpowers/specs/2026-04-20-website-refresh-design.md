# Personal website refresh — design spec

**Date:** 2026-04-20
**Scope:** Text updates + visual refactor of `milescoler.github.io` (React + Vite + Tailwind).
**Status:** Approved direction, pending spec review.

## 1. Goals

- Refocus positioning from a generalist "builder/operator" to an entry-level **data analyst / data scientist** candidate graduating **June 2026**, with part-time availability now.
- Make the site feel **modern, dark, and sans-serif** — Vercel/Linear-style editorial — so it reads as a hireable portfolio, not a personal blog.
- Land a clear new headline: **"Data work that holds up in real conditions."** — a phrase that does triple duty (surf/weather, statistics, wildfire domain) and carries Cole's SoCal/outdoorsy tone without being literal.
- Update all copy blocks, one date, one PDF asset, and one facts-panel label, with zero regressions to existing navigation, images, or the three external links.

## 2. Non-goals

- No new pages, no routing, no analytics, no forms.
- No light mode / light theme toggle. Single dark theme.
- No changes to project descriptions, Outside Work section, Education section, or the site's build pipeline.
- No new images or assets (headshot, project images, lifestyle photo stay as-is).
- No framework migration, no CMS, no markdown source-of-truth refactor.

## 3. Content changes (authoritative)

All copy lives in [src/data/personalData.js](src/data/personalData.js). These are the exact text replacements.

### 3.1 Hero block — `hero`

```js
hero: {
  eyebrow: 'UCLA Statistics & Data Science · Graduating June 2026',
  title: 'Data work that holds up in real conditions.',
  titleAccent: 'in real conditions',   // NEW — used for gradient span
  lede:
    'Weather, fire, human behavior, physical systems. Recent work: a wildfire startup I co-founded in Southern California, geospatial modeling, and full-stack operations software.',
  body:
    'Looking for entry-level data analyst and data science roles starting June 2026, with part-time availability now.',
},
```

The old "I want to help people and leave the world better than I found it" block from the brief is superseded. Both the `lede` and `body` are the new copy — no leftover paragraphs from the old version.

### 3.2 Availability block (NEW) — `availability`

New top-level field on `personalData`:

```js
availability: [
  { label: 'Availability', value: 'Part-time now (10–20 hrs/week) · Full-time from June 12, 2026' },
  { label: 'Location',     value: 'Santa Monica through summer · San Diego from August · Open to remote' },
  { label: 'Target roles', value: 'Data Analyst · Data Scientist · Product Analyst' },
],
```

Rendered as a 3-column bordered strip immediately beneath the hero CTAs and above the meta (headshot + facts) row.

### 3.3 About paragraphs — `profile.paragraphs`

```js
paragraphs: [
  "I transferred to UCLA after earning associate degrees in Mathematics and Computer Science at Santa Barbara City College. That path gave me a strong quantitative base — statistics, geospatial modeling, programming — but what I care about most is building things that matter in real life, not just in theory.",
  "A lot of my recent work has been in wildfire, mapping, and operations at a startup I co-founded. The throughline across all of it is the same: using data and software to understand real-world systems and help people make better decisions. I'm most interested in work on health, human behavior, and the physical world — domains where modeling connects to outcomes that actually matter.",
  "At Trident Ember Defense, that has meant building software, planning systems, and field operations that protect homes in high-risk areas. Long term, I want to keep growing as a data scientist and builder, doing practical work that's useful, grounded, and worth spending time on.",
],
```

### 3.4 Profile facts — `profile.facts[3].value`

Replace:

```js
{ label: 'Primary interest', value: 'Mission-driven systems, products, and applied data science' }
```

with:

```js
{ label: 'Primary interest', value: 'Health, behavior, and physical-world data science' }
```

Other three rows (`Current role`, `Degree`, `Expected graduation`) unchanged.

### 3.5 Work — Trident Ember Defense period

In `work[0]`:

```diff
- period: '2024 - Present',
+ period: 'Aug 2025 – Present',
```

(Matches the resume. Uses an en-dash and abbreviated month.)

### 3.6 Contact statement — `contact.statement`

```js
statement:
  "I'm looking for entry-level data analyst or data science roles starting June 2026, with part-time work (10–20 hrs/week) available now. Especially interested in health, human behavior, and physical-science data work at companies doing something thoughtful and grounded in the real world. Based in Santa Monica through summer, relocating to San Diego in August — open to LA, remote, or San Diego roles.",
```

### 3.7 Resume asset swap

- Replace `public/Cole-Richards-Resume.pdf` with a new file named **`Cole_Richards_Resume.pdf`** (underscores per the brief).
- Update `contact.resumeUrl` from `'/Cole-Richards-Resume.pdf'` to `'/Cole_Richards_Resume.pdf'`.
- Delete the old file.
- Verify the download links in the header, hero, and contact section all serve the new file after build.

> **Note:** The actual new PDF file must be provided by the user or dropped into `public/` out-of-band. The implementation task will confirm it exists before updating the path; if it is missing, the implementation will surface a clear instruction rather than renaming the existing file.

### 3.8 Metadata / head tags

Update the homepage `<title>` and `<meta name="description">` in [index.src.html](index.src.html) to reflect the new positioning. Also update keywords.

- **Title:** `Cole Richards | Data Analyst & Data Scientist · UCLA 2026`
- **Description:** `Cole Richards is a UCLA Statistics & Data Science student graduating June 2026, looking for entry-level data analyst and data scientist roles. Recent work: wildfire startup co-founder, geospatial modeling, operations software.`
- **Keywords:** `Cole Richards, UCLA, Statistics and Data Science, data analyst, data scientist, product analyst, geospatial, GIS, wildfire, Trident Ember Defense, Southern California, Santa Monica, San Diego`

## 4. Visual design (authoritative)

Single dark theme. Sans-serif throughout. No serifs. No light-mode variant.

### 4.1 Palette

| Token             | Value     | Role                                   |
|-------------------|-----------|----------------------------------------|
| `--bg`            | `#0a0a0a` | Page background                        |
| `--surface`       | `#0f0f11` | Cards, contact panel                   |
| `--surface-2`     | `#18181b` | Hover / elevated surfaces, ghost btn   |
| `--surface-border`| `#18181b` | Primary hairline divider               |
| `--border-strong` | `#27272a` | Button borders, card borders           |
| `--text`          | `#fafafa` | Primary text, headings                 |
| `--text-muted`    | `#d4d4d8` | Body copy                              |
| `--muted`         | `#a1a1aa` | Secondary text                         |
| `--muted-2`       | `#71717a` | Uppercase micro-labels                 |
| `--accent`        | `#7dd3fc` | Dots, company names, links, gradient   |
| `--accent-2`      | `#a7f3d0` | Secondary stop of headline gradient    |

### 4.2 Typography

- **All text:** Inter (swap out Manrope in [src/index.css](src/index.css)).
  - Import from Google Fonts, weights: 400, 500, 600, 700.
- **Headline (h1):** 60px desktop → `clamp(2.5rem, 7vw, 3.75rem)`, weight 600, letter-spacing `-0.035em`, line-height 1.02.
  - "in real conditions" is wrapped in `<span class="accent-gradient">` with `background: linear-gradient(90deg, var(--accent), var(--accent-2)); -webkit-background-clip: text; color: transparent;`.
- **Section h2:** 34px, weight 600, letter-spacing `-0.03em`, line-height 1.08, `max-width: 22ch`.
- **Card h3:** 19–24px, weight 600, letter-spacing `-0.015em` to `-0.025em`.
- **Eyebrow / seclabel / uppercase micro-labels:** 11px, letter-spacing `0.14em`, uppercase, weight 600, color `--muted-2`. Each includes a 6px cyan dot prefix.
- **Body:** 15.5–17px, color `--text-muted`, line-height 1.55–1.65, `max-width: 60–62ch`.

### 4.3 Layout

- Content container: `max-width: 840px`, horizontal padding 40px desktop / 20px mobile. Container becomes the single-column backbone; no wide grid.
- Hero: single column. No side aside / no floating headshot card in the hero. Headshot moves to the new **meta row** below the availability strip.
- Availability strip: 3-column grid, hairline-bordered top and bottom, 24px vertical padding, label+value pairs.
- Meta row (below availability strip): `grid-template-columns: 260px 1fr` — portrait on the left, 4-row `key / value` fact list on the right with hairline dividers.
- All sections separated by a 1px `--surface-border` top rule. Section vertical padding 80px desktop / 48px mobile.
- Work list: role + `company · location` (company in cyan) + summary + bullets + right-pinned date in tabular numerals. 28px vertical padding per item, hairline divider.
- Projects: alternating 2-column `1fr 1fr` with image placeholder card and body. First image on the left, second on the right (visual rhythm). 8/8 gap behavior is 40px gap.
- Contact: large heading + positioning paragraph + single bordered panel with 4 `key / value` rows.

### 4.4 Navigation

- Sticky header with `backdrop-filter: blur(12px)` over `rgba(10,10,10,0.8)`.
- Brand: cyan dot + "Cole Richards" at 14px/600.
- Links: 13px, color `--muted`, hover `--text`.
- Resume CTA: small pill with `--surface-2` bg, `--border-strong` border, 13px.
- Mobile: existing hamburger pattern stays; menu panel inherits the new palette automatically via CSS variables.

### 4.5 Buttons

- Primary: bg `--text`, text `--bg`, 8px radius, 10px × 18px padding, 13.5px/500. Gets a trailing arrow for the Email CTA.
- Ghost: bg `--surface-2`, text `--text`, 1px `--border-strong` border, same radius/padding.
- No pill (999px) buttons. Moving from the current rounded-full look to a softer 8px corner — reads more modern/product.

### 4.6 Motion

- Keep the existing `sectionReveal` framer-motion wrapper for section entrance animations. No new motion library or macro-animation added.

### 4.7 Animated sketches (removed)

None of the current gif/animated backgrounds are altered. Existing project gif (`mapping.gif`) continues to render inside its project card; no autoplay or new background animations added.

## 5. File-level change map

All concrete edits, by path:

1. **[src/data/personalData.js](src/data/personalData.js)** — update `hero`, `profile.paragraphs`, `profile.facts[3]`, `work[0].period`, `contact.statement`, `contact.resumeUrl`. Add new top-level `availability` array. Add `hero.titleAccent`.
2. **[src/App.jsx](src/App.jsx)** — Re-order hero subtree:
   - Remove `hero--image`, `hero__overlay`, `hero__grid`, `hero__aside`, and the `hero__feature` headshot card inside the hero.
   - Hero becomes a single-column block: eyebrow → h1 (with gradient accent span) → lede → body → actions → availability strip.
   - New `AvailabilityStrip` component (inline or small file) renders `personalData.availability` as a 3-column bordered strip.
   - New `MetaRow` subtree below the hero: `profile.headshot` image on the left, `profile.facts` rendered as a key/value list on the right. Replaces the hero-aside feature card.
   - Add small cyan `dot` span prefix to each uppercase eyebrow / seclabel.
   - Wrap `hero.titleAccent` substring in an `<span class="accent-gradient">`. The render logic splits `hero.title` on `hero.titleAccent` so the accent is data-driven.
3. **[src/index.css](src/index.css)** — full visual refactor:
   - Replace Manrope `@import` with Inter.
   - Replace `:root` color variables with the palette in §4.1.
   - Replace the grid-lines radial-gradient body background with solid `var(--bg)`.
   - Rewrite hero, section, work, project, meta, availability, contact, nav, and button selectors to match §4.2–§4.5.
   - Remove `hero__feature*`, `hero__aside`, `hero__grid`, `hero--image` rules (no longer used).
   - Add new rules for `.availability`, `.meta`, `.meta__facts`, `.accent-gradient`, `.seclabel`, `.seclabel__dot`, `.work-item`, `.contact-panel` (updating the existing version).
   - Media queries: collapse 3-col availability to 1-col at ≤760px; collapse meta row to single column at ≤760px.
4. **[index.src.html](index.src.html)** — update `<title>`, `<meta description>`, `<meta keywords>` per §3.8. Also update the color-scheme / theme color if present.
5. **public/** — add `Cole_Richards_Resume.pdf` (new file), delete old `Cole-Richards-Resume.pdf`.
6. **Root Cole-Richards-Resume.pdf** — the copy in the repo root is a separate committed asset (not served). Replace it with `Cole_Richards_Resume.pdf` so the repo is consistent; remove the old-named file.

No other files are touched.

## 6. Responsive behavior

- **≥980px:** full layout as specified. Single-column 840px content backbone.
- **760–980px:** content width shrinks with the container. No layout change otherwise.
- **≤760px:**
  - Availability strip → vertical stack (1 column, each row separated by a hairline).
  - Meta row → stacked (portrait above facts).
  - Project rows → stacked (image then body, regardless of alternation).
  - Work-item date moves under the company line (below the role heading), not right-pinned.
  - Sticky header compresses to existing hamburger pattern.
- **≤560px:** buttons become full-width in the hero action row.

## 7. Verification checklist

All of these must pass after implementation, before committing:

- [ ] Homepage loads in the dev server without layout breakage.
- [ ] All six nav links scroll to the correct sections.
- [ ] Headshot renders in the meta row (not in the hero aside).
- [ ] Availability strip renders with all three rows, correct label + value.
- [ ] The three external links (LinkedIn, GitHub, Email) open correctly.
- [ ] "Download resume" button in header, hero, and contact section all point to `/Cole_Richards_Resume.pdf` and serve the new file (200, `application/pdf`).
- [ ] `work[0].period` renders as "Aug 2025 – Present" everywhere (hero tags and work section are both consistent).
- [ ] No orphaned text from the old copy remains anywhere in the rendered DOM (grep the old strings listed in §3 over `src/` and confirm zero matches after edits).
- [ ] Accent gradient renders on the exact phrase "in real conditions" — not on the whole headline, not on any other text.
- [ ] Inter font loads (no Manrope fallback visible).
- [ ] Dark palette applies consistently; no remnants of `#08111b` / `#74b9ff` are in the rendered styles.
- [ ] Resume metadata (title/description/keywords) in `index.src.html` updated.
- [ ] Mobile breakpoints behave as described in §6.
- [ ] `npm run build` completes; `dist/` is updated and the built `index.html` references the new hashed JS/CSS bundles.
- [ ] `scripts/sync-pages.mjs` runs cleanly as part of build.

## 8. Out of scope (explicit)

- No changes to `src/App.jsx` component boundaries beyond the hero/meta refactor (no migration to multi-file component architecture).
- No Tailwind utility migration — the site continues to use plain CSS selectors in `src/index.css`. Tailwind remains for any existing utility usage only.
- No Outside Work copy or image change.
- No Education section copy change.
- No new project entries.
- No changes to any analytics, hosting, or CI config.

## 9. Risks & rollback

- **Risk:** The resume filename rename could leave a dead link if an external site or resume submission deep-links the old URL. Mitigation: the old resume URL (`/Cole-Richards-Resume.pdf`) had no public broadcast we're aware of; if needed, a trivial server-level redirect could be added later (out of scope for this change).
- **Risk:** The hero-accent gradient is split by substring match — if `hero.title` does not contain `hero.titleAccent` verbatim, the fallback should render the full title with no accent and log a console warning in dev. Implementation must include this guard.
- **Rollback:** Since all changes are on a single branch before publish, the rollback is `git revert` on the feature commit(s). No data migrations.

## 10. Delivery

Single PR into `main` (or the user's chosen branch). Commits grouped logically:

1. Data + copy updates (`src/data/personalData.js`, metadata).
2. Resume asset swap (`public/` + root).
3. Visual refactor (`src/App.jsx` + `src/index.css`).
4. Build artifacts regenerated (`dist/` + `index.html`).

The user runs `npm run dev`, spot-checks against the verification checklist, and approves before merge.
