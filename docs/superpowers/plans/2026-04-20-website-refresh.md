# Website Refresh Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition `milescoler.github.io` as an entry-level data analyst / data scientist candidate portfolio (UCLA, June 2026) with updated copy, a new "real conditions" headline, availability block, accurate Trident date, new resume PDF, and a dark/modern/sans-serif visual refactor (Vercel/Linear flavor).

**Architecture:** Single-page React + Vite + Tailwind site. All rendered copy lives in `src/data/personalData.js`; the page is assembled in `src/App.jsx`; visual styling is in `src/index.css` (plain CSS with CSS variables, Tailwind reset layered on top). No tests exist — verification is via the Claude Preview dev server + the spec's §7 checklist.

**Tech Stack:** React 18, Vite 5, Tailwind 3, framer-motion, lucide-react, plain CSS with CSS variables.

**Spec:** [docs/superpowers/specs/2026-04-20-website-refresh-design.md](../specs/2026-04-20-website-refresh-design.md)

**Verification strategy:** No unit tests. Each task that produces a visible change ends with a preview-based verification step using the `preview_*` tools to confirm the section renders correctly, then `preview_screenshot` at the end of each chunk for a visual record. The spec's §7 checklist is the final acceptance criterion, verified holistically in Chunk 5.

---

## Chunk 1: Data & metadata updates

All copy changes + metadata. No visual change yet — the page will render with the new text in the old visual shell. This chunk is safe to ship on its own.

### Task 1: Update `personalData.js` copy and structure

**Files:**
- Modify: `src/data/personalData.js`

- [ ] **Step 1: Replace the `hero` block**

Replace the existing `hero: { ... }` object (currently lines 17–28) with:

```js
  hero: {
    eyebrow: 'UCLA Statistics & Data Science · Graduating June 2026',
    title: 'Data work that holds up in real conditions.',
    titleAccent: 'in real conditions',
    backgroundImage: {
      src: lifestyleImage,
      alt: 'Cole Richards outdoors in California',
    },
    lede:
      'Weather, fire, human behavior, physical systems. Recent work: a wildfire startup I co-founded in Southern California, geospatial modeling, and full-stack operations software.',
    body:
      'Looking for entry-level data analyst and data science roles starting June 2026, with part-time availability now.',
  },
```

(`backgroundImage` is retained because `lifestyleImage` is still imported and referenced by `personal.featuredImage` — keep the import either way. The hero no longer uses it, but removing the field from the data is out of scope for this task.)

- [ ] **Step 2: Add `availability` top-level field**

Immediately after the `hero` block in `personalData`, insert:

```js
  availability: [
    { label: 'Availability', value: 'Part-time now (10–20 hrs/week) · Full-time from June 12, 2026' },
    { label: 'Location',     value: 'Santa Monica through summer · San Diego from August · Open to remote' },
    { label: 'Target roles', value: 'Data Analyst · Data Scientist · Product Analyst' },
  ],
```

- [ ] **Step 3: Replace `profile.paragraphs`**

Replace the three-paragraph array inside `profile` with:

```js
    paragraphs: [
      "I transferred to UCLA after earning associate degrees in Mathematics and Computer Science at Santa Barbara City College. That path gave me a strong quantitative base — statistics, geospatial modeling, programming — but what I care about most is building things that matter in real life, not just in theory.",
      "A lot of my recent work has been in wildfire, mapping, and operations at a startup I co-founded. The throughline across all of it is the same: using data and software to understand real-world systems and help people make better decisions. I'm most interested in work on health, human behavior, and the physical world — domains where modeling connects to outcomes that actually matter.",
      "At Trident Ember Defense, that has meant building software, planning systems, and field operations that protect homes in high-risk areas. Long term, I want to keep growing as a data scientist and builder, doing practical work that's useful, grounded, and worth spending time on.",
    ],
```

- [ ] **Step 4: Update `profile.facts[3].value`**

Change the "Primary interest" row from:

```js
{ label: 'Primary interest', value: 'Mission-driven systems, products, and applied data science' },
```

to:

```js
{ label: 'Primary interest', value: 'Health, behavior, and physical-world data science' },
```

Other three facts (`Current role`, `Degree`, `Expected graduation`) untouched.

- [ ] **Step 5: Update `work[0].period`**

In the Trident Ember Defense work entry, change `period: '2024 - Present'` to `period: 'Aug 2025 – Present'`. (Note the en-dash, not a hyphen.)

- [ ] **Step 6: Update `contact.statement`**

Replace with:

```js
    statement:
      "I'm looking for entry-level data analyst or data science roles starting June 2026, with part-time work (10–20 hrs/week) available now. Especially interested in health, human behavior, and physical-science data work at companies doing something thoughtful and grounded in the real world. Based in Santa Monica through summer, relocating to San Diego in August — open to LA, remote, or San Diego roles.",
```

- [ ] **Step 7: Update `contact.resumeUrl`**

Change from `'/Cole-Richards-Resume.pdf'` to `'/Cole_Richards_Resume.pdf'` (underscores).

- [ ] **Step 8: Delete dead fields from `personalData.js`**

Remove the following fields entirely:

- Top-level `focusAreas` (4 items)
- Top-level `metrics` (4 items)
- `profile.intro` (single string)
- `personal.mediaPlaceholders` (3 items)
- The `icon` and `detail` keys on each `personal.interests[*]` item (keep only `title`)

After this step, `personal.interests` should look like:

```js
    interests: [
      { title: 'Surfing' },
      { title: 'Outdoors' },
      { title: 'Sports' },
      { title: 'Music and practice' },
    ],
```

- [ ] **Step 9: Verify dev server still renders**

Ensure the Claude Preview dev server is running (start with `preview_start` if not). Reload and run `preview_console_logs` — expect zero errors. The page will still look like the old design, but the new copy should be visible. Spot-check the hero headline, contact statement, and Trident date with `preview_snapshot`.

- [ ] **Step 10: Commit**

```bash
git add src/data/personalData.js
git commit -m "Update site copy for data-analyst/DS positioning

- New hero headline and lede
- Add availability block (3 rows)
- Rewrite About paragraphs; update Primary interest fact
- Fix Trident date to Aug 2025 – Present
- New contact statement with target roles and locations
- Point resumeUrl at new underscored filename
- Remove dead personalData fields (focusAreas, metrics, intro, mediaPlaceholders, interest icons/details)"
```

---

### Task 2: Update HTML metadata

**Files:**
- Modify: `index.src.html`

- [ ] **Step 1: Replace `<title>`, description, keywords**

Replace the existing three `<title>` / `<meta>` elements (currently lines 6–14) with:

```html
    <title>Cole Richards | Data Analyst &amp; Data Scientist · UCLA 2026</title>
    <meta
      name="description"
      content="Cole Richards is a UCLA Statistics &amp; Data Science student graduating June 2026, looking for entry-level data analyst and data scientist roles. Recent work: wildfire startup co-founder, geospatial modeling, operations software."
    />
    <meta
      name="keywords"
      content="Cole Richards, UCLA, Statistics and Data Science, data analyst, data scientist, product analyst, geospatial, GIS, wildfire, Trident Ember Defense, Southern California, Santa Monica, San Diego"
    />
```

Do not add `theme-color` or `color-scheme` meta tags — spec §5 item 4 explicitly says these are out of scope (they are not currently present).

- [ ] **Step 2: Verify browser tab title updates**

Reload the dev server. Run `preview_eval` with `document.title` — expect the new string. The `<meta description>` value won't be visible in the browser UI but is visible in DevTools; run `preview_eval` with `document.querySelector('meta[name=description]').content` to confirm.

- [ ] **Step 3: Commit**

```bash
git add index.src.html
git commit -m "Update HTML metadata for new positioning"
```

---

## Chunk 2: Resume asset swap

Self-contained, asset-only.

### Task 3: Rename and swap the resume PDF

**Files:**
- Modify: `scripts/sync-pages.mjs`
- Delete: `public/Cole-Richards-Resume.pdf`
- Delete: `Cole-Richards-Resume.pdf` (repo root)
- Create: `public/Cole_Richards_Resume.pdf`
- Create: `Cole_Richards_Resume.pdf` (repo root — canonical)

- [ ] **Step 1: Preflight — confirm new PDF exists at repo root**

```bash
ls -la Cole_Richards_Resume.pdf
```

If the file does not exist, **STOP**. The user must drop a new PDF at the repo root with this exact filename before the task can proceed. Surface this as a clear message: `"New resume file Cole_Richards_Resume.pdf not found at repo root. Please place the file and then re-run this task."`

If the new file does not exist but the user wants to proceed with the existing PDF under the new name, copy the existing root file:
```bash
cp Cole-Richards-Resume.pdf Cole_Richards_Resume.pdf
```
(Do this only with user confirmation.)

- [ ] **Step 2: Copy the new PDF into `public/`**

```bash
cp Cole_Richards_Resume.pdf public/Cole_Richards_Resume.pdf
```

- [ ] **Step 3: Verify the two copies match**

```bash
diff -q Cole_Richards_Resume.pdf public/Cole_Richards_Resume.pdf
```

Expected: no output (files identical). If `diff` reports a difference, the `cp` did not succeed — stop and investigate.

- [ ] **Step 4: Delete the old hyphenated files**

```bash
rm Cole-Richards-Resume.pdf public/Cole-Richards-Resume.pdf
```

- [ ] **Step 5: Update `scripts/sync-pages.mjs`**

In `scripts/sync-pages.mjs`, lines 24–25 currently reference the old filename. Replace:

```js
const resumeSource = resolve(distDir, 'Cole-Richards-Resume.pdf');
const resumeTarget = resolve(root, 'Cole-Richards-Resume.pdf');
```

with:

```js
const resumeSource = resolve(distDir, 'Cole_Richards_Resume.pdf');
const resumeTarget = resolve(root, 'Cole_Richards_Resume.pdf');
```

- [ ] **Step 6: Verify dev serves the new PDF**

Reload the dev server. Run `preview_eval`:

```js
fetch('/Cole_Richards_Resume.pdf').then(r => ({status: r.status, type: r.headers.get('content-type')}))
```

Expected: `{status: 200, type: "application/pdf"}`. Then fetch the old path and expect 404:

```js
fetch('/Cole-Richards-Resume.pdf').then(r => r.status)
```

Expected: `404`.

- [ ] **Step 7: Commit**

```bash
git add public/ Cole_Richards_Resume.pdf scripts/sync-pages.mjs
git rm Cole-Richards-Resume.pdf 2>/dev/null || true
git commit -m "Swap resume PDF to Cole_Richards_Resume.pdf

Canonical file is at the repo root; public/ copy is synced from it.
Update sync-pages.mjs to match the new filename so builds continue
copying the resume back to the root after vite build."
```

---

## Chunk 3: CSS visual refactor

All styling changes in one commit. The page will look completely different after this chunk — dark palette, Inter, new spacing — but the DOM structure is unchanged, so some old layout rules (hero aside etc.) will still be rendered by App.jsx until Chunk 4. Expect temporary visual awkwardness; the page will not reach final form until Chunk 4 is done.

### Task 4: Replace fonts, palette, and body background

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Swap the font import**

Replace line 1:

```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
```

with:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

- [ ] **Step 2: Replace `:root` palette**

Replace the `:root { ... }` block (currently lines 7–15) with:

```css
:root {
  color-scheme: dark;
  --bg: #0a0a0a;
  --surface: #0f0f11;
  --surface-2: #18181b;
  --surface-border: #18181b;
  --border-strong: #27272a;
  --text: #fafafa;
  --text-muted: #d4d4d8;
  --muted: #a1a1aa;
  --muted-2: #71717a;
  --accent: #7dd3fc;
  --accent-2: #a7f3d0;
}
```

- [ ] **Step 3: Replace `body` background and font-family**

In the `body { ... }` block (currently lines 25–38), replace the entire `background: ...` block and `background-size`/`background-position` lines with:

```css
  background: var(--bg);
```

and change the `font-family` line to:

```css
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

Leave `margin: 0;`, `color: var(--text);`, and `line-height: 1.6;` as they are.

- [ ] **Step 4: Verify fonts and palette load**

Reload. Run `preview_eval`:

```js
({bg: getComputedStyle(document.body).backgroundColor, font: getComputedStyle(document.body).fontFamily})
```

Expected: `bg` contains `rgb(10, 10, 10)`; `font` starts with `"Inter"`.

---

### Task 5: Rewrite hero styles

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Delete all unused hero rules**

Delete every CSS block whose selector begins with one of:

- `.hero--image`
- `.hero__overlay`
- `.hero__grid`
- `.hero__content`
- `.hero__aside`
- `.hero__feature`
- `.hero__feature-image`
- `.hero__feature-body`
- `.hero__details`
- `.hero__detail`
- `.hero__detail:first-child`
- `.hero__detail span`
- `.hero__detail strong`
- `.hero__tags`
- `.meta-item`
- `.meta-item__icon`

(These belong to the old hero-aside feature card and to the unused `MetaItem` component, both of which are removed in Chunk 4.)

Also delete the `.hero__aside` block inside the `@media (max-width: 980px)` query.

- [ ] **Step 2: Replace `.hero, .section` block**

Currently:

```css
.hero,
.section {
  padding: 0 0 4.5rem;
}
```

Replace with:

```css
.hero {
  padding: 6rem 0 4rem;
}

.section {
  padding: 5rem 0;
  border-top: 1px solid var(--surface-border);
}

.section:first-of-type {
  border-top: 0;
}
```

- [ ] **Step 3: Replace hero typography**

Replace the `.hero h1 { ... }` block with:

```css
.hero h1 {
  max-width: 18ch;
  font-size: clamp(2.5rem, 7vw, 3.75rem);
  line-height: 1.02;
  letter-spacing: -0.035em;
  font-weight: 600;
  color: var(--text);
}

.accent-gradient {
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
```

Update `.hero__lede` to:

```css
.hero__lede {
  max-width: 60ch;
  margin: 1.25rem 0 0;
  font-size: 1.0625rem;
  color: var(--text-muted);
}
```

Update `.hero__body` to:

```css
.hero__body,
.body-copy {
  max-width: 60ch;
  margin: 0.75rem 0 0;
  font-size: 0.9375rem;
  color: var(--muted);
}
```

(Body copy inside sections overrides with `color: var(--text-muted)` — see Task 7.)

- [ ] **Step 4: Rewrite `.eyebrow` and add seclabel dot styling**

Replace `.eyebrow, .project__eyebrow, .card__label { ... }` with:

```css
.eyebrow,
.project__eyebrow,
.card__label,
.section-heading__label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1rem;
  color: var(--muted-2);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.eyebrow::before,
.section-heading__label::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--accent);
}

.project__eyebrow {
  color: var(--accent);
}
```

(The cyan dot appears automatically on eyebrows and the new `section-heading__label`. Project categories use the accent color itself instead of a dot.)

- [ ] **Step 5: Rewrite `.button` and `.button--ghost`**

Replace:

```css
.button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--surface-border);
  border-radius: 999px;
  background: var(--text);
  color: #07111c;
  padding: 0.8rem 1rem;
  font-size: 0.92rem;
  font-weight: 700;
}

.button--ghost {
  background: rgba(8, 17, 27, 0.2);
  color: var(--text);
}
```

with:

```css
.button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--border-strong);
  border-radius: 0.5rem;
  background: var(--text);
  color: var(--bg);
  padding: 0.625rem 1.125rem;
  font-size: 0.84rem;
  font-weight: 500;
  transition: transform 0.12s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button--ghost {
  background: var(--surface-2);
  color: var(--text);
}
```

- [ ] **Step 6: Verify hero renders without broken styling**

Reload. `preview_snapshot` the top of the page. The hero will still show the headshot aside (DOM hasn't been refactored yet), but the headline should be the new dark/sans-serif styling. Expect a messy but non-broken page.

---

### Task 6: Add availability strip, meta row, and accent styles

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Add availability strip rules**

Append after the hero section in the CSS file:

```css
.availability {
  margin: 2.5rem 0 0;
  padding: 1.5rem 0;
  border-top: 1px solid var(--surface-border);
  border-bottom: 1px solid var(--surface-border);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.availability__cell .availability__label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
  margin-bottom: 0.5rem;
}

.availability__cell .availability__label::before {
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: var(--accent);
}

.availability__cell .availability__value {
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--text-muted);
}
```

- [ ] **Step 2: Add meta row rules**

Append:

```css
.meta-row {
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 3rem;
  align-items: start;
}

.meta-row__portrait {
  aspect-ratio: 4 / 5;
  border-radius: 0.5rem;
  border: 1px solid var(--border-strong);
  overflow: hidden;
  background: var(--surface-2);
}

.meta-row__portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 15%;
  display: block;
}

.meta-row__facts {
  display: grid;
  gap: 0;
}

.meta-row__fact {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 1.25rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--surface-border);
  align-items: baseline;
}

.meta-row__fact:first-child {
  padding-top: 0;
}

.meta-row__fact .meta-row__label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}

.meta-row__fact .meta-row__value {
  font-size: 0.9375rem;
  color: var(--text);
}
```

- [ ] **Step 3: Commit (css-only partial)**

(Optional intermediate commit to keep CSS diffs reviewable.)

```bash
git add src/index.css
git commit -m "Refactor CSS: palette, fonts, hero, availability, meta row"
```

---

### Task 7: Rewrite section, work, project, contact, nav styles

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Rewrite section heading rules**

Replace the `.section-heading { ... }`, `.section-heading h2 { ... }`, `.section-heading p { ... }`, and `.section--split .section-heading` blocks with:

```css
.section-heading {
  margin-bottom: 2rem;
}

.section-heading h2 {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: var(--text);
  max-width: 22ch;
  margin: 0;
}

.section-heading p {
  margin: 0.75rem 0 0;
  color: var(--muted);
  max-width: 60ch;
}
```

- [ ] **Step 2: Rewrite the shared card-block rule**

Replace:

```css
.meta-item,
.fact,
.card,
.list-card,
.project,
.contact-card {
  border: 1px solid var(--surface-border);
  background: var(--surface);
}
```

with:

```css
.card,
.contact-card {
  border: 1px solid var(--surface-border);
  background: var(--surface);
  border-radius: 0.625rem;
}
```

(List cards, projects, and facts no longer have card framing — they use hairline dividers instead.)

Also delete the `.fact`, `.facts`, `.fact span`, `.fact strong` rules entirely. The facts panel is now `.meta-row__facts` from Task 6.

- [ ] **Step 3: Rewrite work list (`.list`, `.list-card`, `.list-card__top`, `.list-card__meta`, `.bullets`)**

Replace all four `.list*` and `.bullets` blocks with:

```css
.list {
  display: grid;
  gap: 0;
}

.list-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.25rem;
  align-items: start;
  padding: 1.75rem 0;
  border-bottom: 1px solid var(--surface-border);
  background: transparent;
  border-radius: 0;
  border-left: 0;
  border-right: 0;
  border-top: 0;
}

.list-card:first-child {
  padding-top: 0;
}

.list-card:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.list-card h3 {
  font-size: 1.1875rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--text);
  margin: 0 0 0.375rem;
}

.list-card .muted {
  color: var(--accent);
  font-size: 0.8125rem;
  font-weight: 500;
  margin: 0 0 0.75rem;
}

.list-card__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: var(--muted-2);
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  padding-top: 0.25rem;
}

.list-card__meta a {
  color: var(--accent);
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.bullets {
  margin: 0.75rem 0 0;
  padding-left: 1.125rem;
  color: var(--muted);
  font-size: 0.84rem;
}

.bullets li + li {
  margin-top: 0.3rem;
}
```

- [ ] **Step 4: Rewrite project layout (`.project`, `.project__media*`, `.project__body`, `.project__eyebrow`, `.tags`)**

Replace the existing `.project { ... }`, `.project__media { ... }`, `.project__media-card { ... }`, `.project__media .media-card__image { ... }`, `.project__body .body-copy { ... }` rules with:

```css
.project-list {
  display: grid;
  gap: 0;
}

.project {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  padding: 3rem 0;
  border-top: 1px solid var(--surface-border);
  background: transparent;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
  border-radius: 0;
}

.project:first-child {
  border-top: 0;
  padding-top: 0.5rem;
}

.project-list .project:nth-child(even) {
  direction: rtl;
}

.project-list .project:nth-child(even) > * {
  direction: ltr;
}

.project__media {
  padding: 0;
  background: transparent;
  border: 0;
  border-radius: 0;
}

.project__media-card {
  overflow: hidden;
  padding: 0;
  border: 1px solid var(--border-strong);
  border-radius: 0.5rem;
  background: var(--surface-2);
}

.project__media .media-card__image {
  border-radius: 0;
  display: block;
  width: 100%;
}

.project__body h3 {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  color: var(--text);
  margin: 0.75rem 0 0.75rem;
}

.project__body .body-copy {
  margin-top: 0.5rem;
  color: var(--text-muted);
}
```

Then rewrite `.tags` and `.tags span`:

```css
.tags {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tags span {
  border: 1px solid var(--border-strong);
  background: var(--surface-2);
  border-radius: 0.375rem;
  padding: 0.25rem 0.625rem;
  color: var(--muted);
  font-size: 0.72rem;
}

.tags--large {
  margin-top: 1rem;
}
```

- [ ] **Step 5: Rewrite media-card image height rules for the new layout**

Replace the entire `.media-card__image { ... }`, `.card--image .media-card__image { ... }`, `.media-card--headshot .media-card__image { ... }`, `.media-card--landscape .media-card__image { ... }`, `.media-card--portrait .media-card__image { ... }`, `.media-card--tall .media-card__image { ... }` group with:

```css
.media-card__image {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  display: block;
}

.media-card--landscape .media-card__image {
  aspect-ratio: 16 / 9;
}

.media-card--portrait .media-card__image {
  aspect-ratio: 3 / 4;
}

.media-card--tall .media-card__image {
  aspect-ratio: 2 / 3;
}

.media-card--headshot .media-card__image {
  aspect-ratio: 4 / 5;
  object-position: center 15%;
}
```

Leave the existing `.media-card__content`, `.media-card__content h3`, `.media-card__content p`, `.media-card__content--minimal p`, `.project__media .media-card__content`, `.project__media .media-card__content--minimal p` blocks alone (the text styles still apply; palette comes from CSS vars which update automatically).

- [ ] **Step 6: Rewrite contact panel (`.contact`, `.contact-layout`, `.contact-intro`, `.contact-actions`, `.contact-panel`, `.contact-panel__row`)**

Replace all the `.contact*` blocks with:

```css
.contact {
  padding: 5rem 0 6rem;
  border-top: 1px solid var(--surface-border);
}

.contact-layout {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: 3rem;
  align-items: start;
}

.contact-intro {
  padding: 0;
}

.contact-intro .body-copy {
  color: var(--text-muted);
  font-size: 1.0625rem;
  max-width: 62ch;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.contact-panel {
  border: 1px solid var(--surface-border);
  background: var(--surface);
  border-radius: 0.625rem;
  padding: 0 1.25rem;
}

.contact-panel__row {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--surface-border);
  align-items: baseline;
}

.contact-panel__row:last-child {
  border-bottom: 0;
}

.contact-panel__row span {
  color: var(--muted-2);
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.contact-panel__row a {
  color: var(--accent);
  font-size: 0.9375rem;
  font-weight: 500;
  text-align: left;
}

.contact-panel__row a:hover {
  text-decoration: underline;
}
```

- [ ] **Step 7: Rewrite header (`.header`, `.header__inner`, `.brand`, `.nav`, `.nav a`)**

Replace:

```css
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(8, 17, 27, 0.92);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
}
```

with:

```css
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(10, 10, 10, 0.8);
  border-bottom: 1px solid var(--surface-border);
  backdrop-filter: blur(12px);
}
```

Update `.brand`:

```css
.brand {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: none;
}

.brand::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--accent);
}
```

Update `.nav a`:

```css
.nav a {
  font-size: 0.8125rem;
  color: var(--muted);
  transition: color 0.12s ease;
}

.nav a:hover {
  color: var(--text);
}
```

Leave the `.nav`, `.nav .nav__resume`, `.hamburger`, and the `@media (max-width: 760px) { .nav ... }` block alone.

- [ ] **Step 8: Collapse split / card rules**

Update `.split`:

```css
.split,
.project,
.education-grid {
  display: grid;
  gap: 1.25rem;
}

.split {
  grid-template-columns: 260px minmax(0, 1fr);
  align-items: start;
}
```

And the `.card, .list-card, .project__media, .project__body, .contact-card` padding rule — remove it; each already has its own padding in the new rules above.

- [ ] **Step 9: Verify contact, work, and project sections look correct**

Reload. Run `preview_screenshot` and visually confirm the lower half of the page has updated styling. The hero will still be broken (Chunk 4 fixes it).

---

### Task 8: Update media queries

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Replace the `@media (max-width: 980px)` block**

Replace the entire existing 980px block with:

```css
@media (max-width: 980px) {
  .hero h1 {
    max-width: none;
  }

  .contact-layout {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 2: Replace the `@media (max-width: 760px)` block**

Keep the existing hamburger/nav rules, but also add:

```css
  .availability {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .availability__cell {
    padding-bottom: 1.25rem;
    border-bottom: 1px solid var(--surface-border);
  }

  .availability__cell:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }

  .meta-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .meta-row__portrait {
    max-width: 260px;
  }

  .project-list .project:nth-child(even) {
    direction: ltr;
  }

  .project,
  .split {
    grid-template-columns: 1fr;
  }

  .list-card {
    grid-template-columns: 1fr;
  }

  .list-card__meta {
    align-items: flex-start;
    white-space: normal;
  }
```

Remove the old `.hero__grid`, `.hero__aside`, `.hero__overlay`, `.hero h1 { max-width: none }`, `.hero__feature-body`, `.actions .button`, `.split, .project { grid-template-columns: 1fr }`, `.facts { grid-template-columns: 1fr }`, `.contact-intro`, `.contact-panel__row`, `.card--image .media-card__image, .media-card--headshot .media-card__image`, `.media-card__image`, `.media-card--landscape/portrait/tall .media-card__image`, and `.list-card__top` blocks inside this media query. (Many are now superseded by the global rules above or by new rules here.)

Also delete the `.actions` `display: grid` block inside `@media (max-width: 560px)` if you want buttons to wrap naturally — or keep it for full-width buttons at small widths (spec §6 says keep at ≤560px).

Keep the `@media (max-width: 560px) { .actions { display: grid; ... } .actions .button { width: 100% } }` block as-is.

- [ ] **Step 3: Verify responsive breakpoints**

Run `preview_resize` to 768px wide, then `preview_screenshot`. The availability strip should stack, meta row should stack. Resize back to 1280px and screenshot again.

- [ ] **Step 4: Commit**

```bash
git add src/index.css
git commit -m "Finish CSS visual refactor: section/work/project/contact/nav, responsive"
```

---

## Chunk 4: App.jsx layout refactor

DOM changes to match the new CSS. After this chunk, the page reaches final form.

### Task 9: Remove dead code and add title-split helper

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Delete the inline `heroHighlights` array**

Remove lines 25–29 (the `const heroHighlights = [ ... ];` block). It's no longer needed.

- [ ] **Step 2: Delete the `MetaItem` component**

Remove the `function MetaItem(...)` declaration entirely (currently lines 319–329). It has never been rendered.

- [ ] **Step 3: Add `renderTitle` helper inside `App.jsx`**

Above the `App` function, add:

```jsx
function renderTitle(title, accent) {
  if (!accent || !title.includes(accent)) {
    if (import.meta.env.DEV && accent) {
      // eslint-disable-next-line no-console
      console.warn(`hero.titleAccent "${accent}" not found in hero.title`);
    }
    return title;
  }
  const index = title.indexOf(accent);
  const before = title.slice(0, index);
  const after = title.slice(index + accent.length);
  return (
    <>
      {before}
      <span className="accent-gradient">{accent}</span>
      {after}
    </>
  );
}
```

(Uses `indexOf`/`slice` instead of `split` so only the first occurrence is highlighted even if the accent phrase repeats.)

- [ ] **Step 4: Verify still compiles and renders**

Reload. `preview_console_logs` — expect no errors. The page should still render (we haven't wired the helper into the hero yet).

---

### Task 10: Refactor the hero into a single column

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 0: Confirm lucide icon imports are present**

The new hero uses `Mail`, `Linkedin`, `Github`, and `Download` icons from `lucide-react`. Grep the current `App.jsx` imports:

```bash
grep -E "from 'lucide-react'" src/App.jsx
```

Confirm all four names appear in the import. If any are missing (most likely `Download`, since the old hero used a plain button text), add them to the existing `import { ... } from 'lucide-react';` line. The old hero and old contact panel already reference the other three, so they should be imported.

- [ ] **Step 1: Replace the entire hero `<motion.section>` subtree**

Replace the block from `<motion.section className="hero hero--image"` through its closing `</motion.section>` with:

```jsx
        <motion.section className="hero" {...sectionReveal}>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{renderTitle(hero.title, hero.titleAccent)}</h1>
          <p className="hero__lede">{hero.lede}</p>
          <p className="hero__body">{hero.body}</p>

          <div className="actions">
            <a className="button" href={`mailto:${contact.primaryEmail}`}>
              <Mail size={16} />
              Email
            </a>
            <a className="button button--ghost" href={contact.linkedinUrl} target="_blank" rel="noreferrer">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a className="button button--ghost" href={contact.githubUrl} target="_blank" rel="noreferrer">
              <Github size={16} />
              GitHub
            </a>
            <a className="button button--ghost" href={contact.resumeUrl} download>
              <Download size={16} />
              Download resume
            </a>
          </div>

          <div className="availability">
            {availability.map((item) => (
              <div key={item.label} className="availability__cell">
                <div className="availability__label">{item.label}</div>
                <div className="availability__value">{item.value}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <section className="meta-row">
          <div className="meta-row__portrait">
            <img src={profile.headshot.src} alt={profile.headshot.alt} />
          </div>
          <div className="meta-row__facts">
            {profile.facts.map((fact) => (
              <div key={fact.label} className="meta-row__fact">
                <div className="meta-row__label">{fact.label}</div>
                <div className="meta-row__value">{fact.value}</div>
              </div>
            ))}
          </div>
        </section>
```

- [ ] **Step 2: Destructure `availability` from `personalData`**

At the top of `App()` (currently: `const { name, navigation, hero, profile, work, projects, education, personal, contact } = personalData;`), add `availability`:

```jsx
  const { name, navigation, hero, profile, work, projects, education, personal, contact, availability } = personalData;
```

- [ ] **Step 3: Remove the old About-section headshot duplicate**

The About section currently renders `<MediaCard item={profile.headshot} className="card card--image" />` as its left column. Since the headshot is now in the meta row above About, the About section should be single-column text.

Replace the About section's `<div className="split">...</div>` wrapping with a direct `<div className="stack">` (no media card, no split):

```jsx
        <motion.section id="about" className="section section--split" {...sectionReveal}>
          <SectionHeading title="About" />

          <div className="stack">
            {profile.paragraphs.map((paragraph) => (
              <p key={paragraph} className="body-copy">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.section>
```

(Remove the `<MediaCard>` and the facts re-render from inside the About section; facts live in the meta row now.)

- [ ] **Step 4: Verify hero + About**

Reload. `preview_screenshot` the top of the page. You should see: nav → hero (eyebrow, large headline with cyan-mint gradient on "in real conditions", lede, body, 4 buttons, 3-column availability strip) → meta row (headshot + 4 facts) → About (3 text paragraphs). The gradient accent must be on the exact phrase "in real conditions".

Run `preview_eval`:

```js
({
  hasGradient: !!document.querySelector('.accent-gradient'),
  gradientText: document.querySelector('.accent-gradient')?.textContent,
  facts: document.querySelectorAll('.meta-row__fact').length,
  availabilityRows: document.querySelectorAll('.availability__cell').length,
})
```

Expected: `hasGradient: true`, `gradientText: "in real conditions"`, `facts: 4`, `availabilityRows: 3`.

---

### Task 11: Verify remaining sections render, fix any stragglers

**Files:**
- Modify (as needed): `src/App.jsx`

- [ ] **Step 1: Check Work, Projects, Education, Outside Work, Contact render**

`preview_screenshot` after scrolling to each. The Work section should show the list with role / company in cyan / summary / bullets / dates right-pinned (Aug 2025 – Present for Trident). Projects should alternate sides (image left, text right, image left). Education should have two entries. Outside Work: unchanged except styled in dark palette. Contact should render per Step 2 below (the heading becomes "Let's talk." with a "Contact" eyebrow).

- [ ] **Step 2: Confirm section labels (eyebrow dots) render consistently**

The `SectionHeading` component currently renders `<h2>` plus optional `<p>`. The spec's "seclabel with dot" pattern in §4.2 applies to section labels above the h2. Check: does the current `SectionHeading` render an eyebrow-style label above the h2?

Read the current `SectionHeading` (around lines 310–317). If it only renders `h2 + p`, add an optional eyebrow prop:

```jsx
function SectionHeading({ title, subtitle, eyebrow }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="section-heading__label">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}
```

Then add `eyebrow` props to each section heading call in `App`:

```jsx
<SectionHeading eyebrow="About" title="Grounded in quantitative fundamentals, built on real work." />
<SectionHeading eyebrow="Work" title="Selected roles and operating experience." />
<SectionHeading eyebrow="Projects" title="Ideas turned into tools, systems, and execution." />
<SectionHeading eyebrow="Education" title="Where I built the quantitative base." />
<SectionHeading eyebrow="Life" title="Outside work." subtitle="This part of my life shapes the kind of work I want to do." />
<SectionHeading eyebrow="Contact" title="Let's talk." />
```

(The new `title` values come from the mockup. The old subtitles on Work/Projects are dropped — the h2 itself is descriptive enough now.)

- [ ] **Step 3: Verify section headings display correctly**

Reload. `preview_snapshot`. Each section should have a small uppercase cyan-dotted eyebrow label followed by a large sans-serif h2.

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx
git commit -m "Refactor App.jsx to match new dark layout

- Remove dead heroHighlights array and unused MetaItem component
- Add renderTitle helper for hero accent-gradient span
- Single-column hero with availability strip
- New MetaRow with headshot + profile.facts below the hero
- Drop duplicate headshot/facts from About section
- Add eyebrow prop to SectionHeading; use across all sections"
```

---

## Chunk 5: Verification, build, and final commit

### Task 12: Run spec §7 verification checklist

**Files:** none modified; verification only.

- [ ] **Step 1: Grep for old copy**

Run these commands; each must return zero matches:

```bash
grep -R "I want to help people" src/ || true
grep -R "that is not the full story" src/ || true
grep -R "Mission-driven systems" src/ || true
grep -R "outdoors, sports, music" src/ || true
grep -R "builder and operator" src/ || true
grep -R "weather, and other outdoor systems" src/ || true
```

- [ ] **Step 2: Grep for old palette hex codes**

```bash
grep -RE "#08111b|#0d1724|#1a2838|#74b9ff|#edf2f7|#96a5b8" src/ || true
```

Must return zero matches (all replaced by new tokens in `:root`).

- [ ] **Step 3: Grep for dead `personalData` fields**

```bash
grep -E "focusAreas|mediaPlaceholders|personal\.interests\[.*\]\.(detail|icon)" src/data/personalData.js || true
grep -E "^  metrics:|^  intro:|^    intro:" src/data/personalData.js || true
grep -n "intro" src/data/personalData.js || true
```

Must return zero matches for `focusAreas`, `mediaPlaceholders`, `metrics`, `intro` at the `profile` level, and `detail`/`icon` inside `personal.interests`. Spec §5.1 and §7 both require these removed.

- [ ] **Step 4: Verify `index.src.html` metadata was updated**

```bash
grep -E "<title>|name=\"description\"|name=\"keywords\"" index.src.html
```

Expected:
- `<title>` contains "Data Analyst" and "UCLA 2026"
- `description` reflects the new framing (not the old "Building tools and systems..." text)
- `keywords` updated per spec §3.8

If stale text remains, return to Chunk 1, Task 2 and re-apply.

- [ ] **Step 5: Verify the old resume filename is gone everywhere**

```bash
grep -RE "Cole-Richards-Resume\.pdf" src/ scripts/ public/ index.src.html || true
ls Cole-Richards-Resume.pdf 2>/dev/null || echo "absent at root — good"
ls public/Cole-Richards-Resume.pdf 2>/dev/null || echo "absent in public — good"
```

Expected: grep returns zero matches. Both `ls` lines print "absent". Spec §3.7 explicitly requires removing both copies of the hyphenated filename.

- [ ] **Step 6: Click-test nav links**

Run `preview_click` on each nav anchor and `preview_eval` with `window.location.hash` to confirm the correct section id:

- About → `#about`
- Work → `#work`
- Projects → `#projects`
- Education → `#education`
- Life → `#life`
- Contact → `#contact`

Each click must update the hash to the listed value.

- [ ] **Step 7: Confirm three resume download links point to the new filename**

Run `preview_eval`:

```js
({
  newCount: document.querySelectorAll('a[href="/Cole_Richards_Resume.pdf"]').length,
  oldCount: document.querySelectorAll('a[href="/Cole-Richards-Resume.pdf"]').length,
  locations: Array.from(document.querySelectorAll('a[href="/Cole_Richards_Resume.pdf"]'))
    .map(a => a.closest('[class*="header"], [class*="hero"], [class*="actions"], [class*="contact"]')?.className || 'unknown')
})
```

Expected:
- `newCount: 3` — resume appears in the header nav, the hero actions row, and the contact panel's actions row.
- `oldCount: 0` — zero references to the hyphenated filename.
- `locations` shows three distinct containers (header/hero/contact). If any is missing, inspect the DOM and fix.

- [ ] **Step 8: Verify the three external contact links are correct**

Spec §7 requires LinkedIn, GitHub, and Email links open to the correct destinations. Run `preview_eval`:

```js
({
  linkedin: document.querySelector('a[href*="linkedin.com"]')?.href,
  github: document.querySelector('a[href*="github.com"]')?.href,
  email: document.querySelector('a[href^="mailto:"]')?.href,
})
```

Expected: all three values are defined and match the URLs in `src/data/personalData.js` (`contact.links`). None should be `undefined`.

- [ ] **Step 9: Verify the accent gradient renders on the exact phrase "in real conditions"**

Run `preview_eval`:

```js
(() => {
  const span = document.querySelector('.hero h1 .accent-gradient');
  if (!span) return { ok: false, reason: 'no .accent-gradient span inside .hero h1' };
  const text = span.textContent.trim();
  const bg = getComputedStyle(span).backgroundImage;
  return {
    ok: text === 'in real conditions' && bg.includes('gradient'),
    text,
    backgroundImage: bg,
  };
})()
```

Expected: `ok: true`, `text: "in real conditions"`, `backgroundImage` contains `linear-gradient`. If `ok: false`, the `renderTitle` helper (Chunk 4, Task 9, Step 3) fell back to plaintext — check the `accent` value in `personalData.hero.titleAccent` matches exactly.

- [ ] **Step 10: Verify the headshot renders in the meta row (not the hero aside)**

Run `preview_eval`:

```js
({
  metaRowPortrait: !!document.querySelector('.meta-row img, .meta-row__portrait img'),
  aboutHeadshot: document.querySelectorAll('#about img').length,
  heroImage: document.querySelectorAll('.hero img').length,
})
```

Expected: `metaRowPortrait: true`, `aboutHeadshot: 0` (duplicate removed per spec §4.3 / Chunk 4 Task 10 Step 3), `heroImage: 0` (hero is single-column per spec §4.3).

- [ ] **Step 11: Confirm Trident period renders correctly**

```js
document.querySelector('#work .list-card:first-child .list-card__meta')?.textContent
```

Expected: string contains "Aug 2025 – Present" (with an en-dash, not a hyphen).

- [ ] **Step 12: Confirm availability and facts render counts**

```js
({availability: document.querySelectorAll('.availability__cell').length, facts: document.querySelectorAll('.meta-row__fact').length})
```

Expected: `{availability: 3, facts: 4}`.

- [ ] **Step 13: Responsive spot-check — including project alternation at desktop**

Run `preview_resize` to 375px, screenshot. Then 768px, screenshot. Then 1280px, screenshot. Confirm visually:

- 375px: availability stacks 1-col, meta row stacks (portrait above facts), project rows stack (image above body), hamburger visible.
- 768px: same stacking as 375px for those rules (spec §6 breakpoint at ≤760px).
- 1280px: full desktop layout. Project rows alternate sides (odd projects image-left, even projects image-right).

Then run `preview_eval` at 1280px to confirm the alternation is applied via CSS `direction: rtl` on even rows:

```js
Array.from(document.querySelectorAll('#projects .project')).map((el, i) => ({
  index: i,
  direction: getComputedStyle(el).direction,
}))
```

Expected: odd-indexed entries (index 1, 3, ...) have `direction: "rtl"`; even-indexed entries (index 0, 2, ...) have `direction: "ltr"`. (Zero-indexed; CSS `:nth-child(even)` targets the 2nd, 4th DOM children — index 1, 3 in JS.)

- [ ] **Step 14: Confirm Inter font loads, no Manrope fallback**

```js
getComputedStyle(document.body).fontFamily
```

Expected: starts with `"Inter"`. The string must NOT contain `Manrope`.

- [ ] **Step 15: Confirm zero console errors**

Run `preview_console_logs` — expect no errors (warnings are OK). In particular, no warning from the `renderTitle` helper (Chunk 4 Task 9 Step 3) about a title not containing its accent phrase — that would indicate the gradient is falling back.

---

### Task 13: Build and regenerate `dist/` + root index

**Files:**
- Modify (generated): `dist/*`, `index.html`, `assets/*`

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: exit code 0. Build output shows hashed JS/CSS bundle in `dist/assets/`. `sync-pages.mjs` runs automatically afterward and copies `dist/index.html` → root `index.html`, `dist/assets/*` → root `assets/`, and the resume PDF.

- [ ] **Step 2: Verify root `index.html` references new bundle hashes**

```bash
cat index.html
```

Expected: `<script type="module"` line references a new hashed file under `./assets/`. The hash will differ from the prior commit.

- [ ] **Step 3: Verify resume PDF is identical at root and in `public/` (spec §7 invariant)**

Spec §3.7 calls out the root PDF as canonical and `public/Cole-Richards-Resume.pdf` as stale — after Chunk 2 the two copies must be byte-identical under the new name, and neither copy of the old hyphenated filename may remain.

```bash
ls -la Cole_Richards_Resume.pdf && ls -la public/Cole_Richards_Resume.pdf
diff -q Cole_Richards_Resume.pdf public/Cole_Richards_Resume.pdf
ls Cole-Richards-Resume.pdf public/Cole-Richards-Resume.pdf 2>/dev/null || echo "old filenames absent — good"
```

Expected: both new files exist, `diff` reports "Files ... are identical" (no output with `-q`), and the old-filename listing prints "absent". Also confirm `dist/Cole_Richards_Resume.pdf` exists after build (sync script copies it there):

```bash
ls -la dist/Cole_Richards_Resume.pdf
diff -q Cole_Richards_Resume.pdf dist/Cole_Richards_Resume.pdf
```

Expected: file exists, diff reports no difference.

- [ ] **Step 4: Preview the built site**

Run `npm run preview` (in a separate shell; or use the existing `preview_*` tools against the dev server — production preview is optional).

Run `preview_screenshot` for a final visual record.

- [ ] **Step 5: Commit build artifacts**

```bash
git add dist/ index.html assets/
git commit -m "Build: regenerate dist with refreshed site

Includes new index.html and hashed JS/CSS bundles, plus the new
Cole_Richards_Resume.pdf copied to root by sync-pages.mjs."
```

- [ ] **Step 6: Final status check**

```bash
git status
git log --oneline -10
```

Expected: working tree clean, recent commits show the copy / resume / CSS / App.jsx / build sequence.

---

## Out of scope reminders

From spec §8:

- No new pages, routes, analytics, or forms.
- No light mode / theme toggle.
- No changes to existing project descriptions, Education notes, or Outside Work copy.
- No new images or headshot replacement.
- No framework migration, no CMS, no test-infrastructure additions.

If you find yourself wanting to touch these, stop and confirm with the user before proceeding.
