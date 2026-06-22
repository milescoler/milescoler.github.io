# Personal Website Post-Grad Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `milescoler.github.io` as a single-page "blueprint / field-notes light" site that frames Cole Richards as a problem solver who takes hard problems end to end (Question → Analysis → Software → Field), with Trident Ember Defense as the flagship case study.

**Architecture:** Same React + Vite + GitHub Pages stack. Full rewrite of the data model (`src/data/personalData.js`), styling (`src/index.css`), and UI, splitting the monolithic `App.jsx` into focused section components under `src/components/`. A light Vitest + React Testing Library harness verifies data invariants and content; styling/layout is verified by `npm run build` plus a manual visual checklist.

**Tech Stack:** React 18, Vite 5, framer-motion, lucide-react, Vitest + @testing-library/react (new, dev-only). Plain CSS with design tokens (Tailwind removed).

**Source spec:** `docs/superpowers/specs/2026-06-22-website-postgrad-redesign-design.md`

## Global Constraints

Every task's requirements implicitly include this section. Values are verbatim from the spec.

- **Name (display, everywhere):** `Cole Richards`. Handles stay `milescoler`.
- **Headline (hero h1), exact:** `Hard problems, end to end.`
- **Kicker (mono), exact:** `Problem solver · Builder · Applied data scientist`; credential line `UCLA Statistics & Data Science`.
- **Accuracy guardrail:** Cole **wrote most of** the Trident software (cofounders shaped tooling). NEVER claim he "built everything" alone.
- **Proof stats (4, in order):** `$20K+` / early revenue · `3` / system installs · `8` / person crew led · `full` / ops stack.
- **Single theme:** light only. No dark mode, no toggle.
- **Accent:** blueprint blue `#2455C4` (one accent only).
- **Paper base:** `--bg: #F6F4EF`, ink `--ink: #17181B`.
- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono (mono/instrument layer), via Google Fonts.
- **One résumé only:** served at `/Cole_Richards_Resume.pdf`. No service résumé.
- **No framework change.** React + Vite kept. Keep the `restore-source-index → vite build → sync-pages` pipeline and the GitHub Actions deploy.
- **Cut entirely:** service/customer-facing track, service résumé, dual-track "Now" section, "secondary work" jobs (Tillys, GlenAnnie), standalone "Life" and standalone "Education" sections.
- **Default decisions (open items resolved as follows; easy to toggle):** EmberCast **included** as a software-product example in Selected work; a light "More on GitHub" line linking `antonelli-vs-russell` and `spotify-analyzer` **included**; phone `424-757-3084` **kept** public (single data field, trivial to remove); canonical résumé is the existing `Cole_Richards_Resume.pdf` (the technical/data one) — confirm it is current before final build.
- **Branch:** work on `redesign/blueprint-2026`, created from current `HEAD` (carries the committed spec and existing image assets). The redesign supersedes the `refresh/dark-modern-2026` dark direction. PR into `main` when done.

---

## File Structure

**Create**
- `src/test/setup.js` — Testing Library / jest-dom setup.
- `src/data/personalData.test.js` — data-model invariant tests.
- `src/components/primitives.jsx` — shared `SectionLabel`, `Stat`, `Plate`.
- `src/components/primitives.test.jsx`
- `src/components/Header.jsx` (+ `Header.test.jsx`)
- `src/components/Hero.jsx` (+ `Hero.test.jsx`)
- `src/components/Arc.jsx` (+ `Arc.test.jsx`)
- `src/components/Flagship.jsx` (+ `Flagship.test.jsx`)
- `src/components/SelectedWork.jsx` (+ `SelectedWork.test.jsx`)
- `src/components/ExperienceEducation.jsx` (+ `ExperienceEducation.test.jsx`)
- `src/components/About.jsx` (+ `About.test.jsx`)
- `src/components/Contact.jsx` (+ `Contact.test.jsx`)
- `src/App.test.jsx`

**Modify**
- `src/data/personalData.js` — full restructure.
- `src/App.jsx` — compose new components; remove old markup/dead code.
- `src/index.css` — remove Tailwind directives; new token system + all styles.
- `index.src.html` — title/meta/keywords + font links.
- `scripts/sync-pages.mjs` — sync only the single résumé.
- `vite.config.js` — add Vitest `test` block.
- `package.json` — add test deps + scripts; remove `tailwindcss`.
- `postcss.config.js` — remove the `tailwindcss` plugin.

**Delete**
- `tailwind.config.js`
- `Cole_Richards_Resume_Service.pdf` (root) and `public/Cole_Richards_Resume_Service.pdf`
- `coleresume-a-042126.pdf`, `coleresume-b-042726.pdf` (stray root PDFs)

**Keep as-is**
- `src/assets/cole/*` images, `public/Cole_Richards_Resume.pdf`, `.github/workflows/deploy.yml`, `404.html`.

---

## Task 1: Test tooling (Vitest + Testing Library)

**Files:**
- Modify: `package.json`
- Modify: `vite.config.js`
- Create: `src/test/setup.js`

**Interfaces:**
- Produces: `npm test` (runs `vitest run`); jsdom test environment with `@testing-library/jest-dom` matchers and `globals: true` (so `describe/it/expect` need no import).

- [ ] **Step 1: Install dev dependencies**

```bash
npm install -D vitest@^2 jsdom@^25 @testing-library/react@^16 @testing-library/jest-dom@^6 @testing-library/user-event@^14
```

- [ ] **Step 2: Create the test setup file**

Create `src/test/setup.js`:

```js
import '@testing-library/jest-dom';
```

- [ ] **Step 3: Add the Vitest config to `vite.config.js`**

Replace the file contents with:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.js'],
    css: false,
  },
})
```

- [ ] **Step 4: Add test scripts to `package.json`**

In the `"scripts"` block add:

```json
    "test": "vitest run",
    "test:watch": "vitest"
```

- [ ] **Step 5: Add a temporary smoke test**

Create `src/test/smoke.test.js`:

```js
it('test runner works', () => {
  expect(1 + 1).toBe(2);
});
```

- [ ] **Step 6: Run the tests**

Run: `npm test`
Expected: PASS (1 test). If jsdom/vitest resolution errors appear, confirm the versions installed in Step 1.

- [ ] **Step 7: Remove the smoke test and commit**

```bash
rm src/test/smoke.test.js
git add package.json package-lock.json vite.config.js src/test/setup.js
git commit -m "chore: add vitest + testing-library harness"
```

---

## Task 2: Visual foundation (remove Tailwind, CSS tokens, fonts, document head)

**Files:**
- Modify: `src/index.css` (full replacement)
- Modify: `index.src.html`
- Modify: `postcss.config.js`
- Delete: `tailwind.config.js`
- Modify: `package.json` (remove `tailwindcss`)

**Interfaces:**
- Produces: CSS custom properties (`--bg`, `--surface`, `--ink`, `--ink-muted`, `--muted`, `--rule`, `--accent`, `--grid`, type/space scale) and base classes (`.container`, `.section`, `.rule`, `.mono`, `.label`, `.eyebrow`) consumed by every component task. The blueprint-blue accent and paper base are global.

This task's visuals are verified by `npm run build` succeeding and a manual look in `npm run dev`; there is no unit test.

- [ ] **Step 1: Remove the Tailwind PostCSS plugin**

Replace `postcss.config.js` with:

```js
export default {
  plugins: {
    autoprefixer: {},
  },
}
```

- [ ] **Step 2: Delete the Tailwind config and dependency**

```bash
rm tailwind.config.js
npm uninstall tailwindcss
```

- [ ] **Step 3: Update the document head in `index.src.html`**

Replace `index.src.html` with:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light" />
    <meta name="theme-color" content="#F6F4EF" />
    <title>Cole Richards — Problem solver · Builder · Applied data scientist</title>
    <meta
      name="description"
      content="Cole Richards takes hard, real-world problems end to end — from data and analysis to shipped software to the field. UCLA Statistics & Data Science. Co-founder of Trident Ember Defense. Open to the right hard problems."
    />
    <meta
      name="keywords"
      content="Cole Richards, problem solver, builder, applied data scientist, data science, software engineer, geospatial, GIS, wildfire, Trident Ember Defense, UCLA, Statistics and Data Science, Santa Monica, San Diego"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 4: Replace `src/index.css` with the token foundation + base layout**

Replace the entire file with:

```css
:root {
  color-scheme: light;
  --bg: #F6F4EF;
  --surface: #FBFAF6;
  --ink: #17181B;
  --ink-muted: #4B4D52;
  --muted: #8A8C90;
  --rule: #DEDAD0;
  --accent: #2455C4;
  --accent-soft: rgba(36, 85, 196, 0.10);
  --grid: rgba(23, 24, 27, 0.05);

  --font-display: 'Space Grotesk', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, 'SFMono-Regular', monospace;

  --maxw: 880px;
  --pad: 40px;
  --section-y: 88px;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  background-color: var(--bg);
  background-image: radial-gradient(var(--grid) 1px, transparent 1px);
  background-size: 22px 22px;
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }

img { max-width: 100%; display: block; }

h1, h2, h3, h4 {
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin: 0;
}

p { margin: 0; }

.container {
  width: 100%;
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 var(--pad);
}

.section { padding: var(--section-y) 0; border-top: 1px solid var(--rule); }

.rule { height: 1px; background: var(--rule); border: 0; }

/* mono "instrument" layer */
.mono { font-family: var(--font-mono); }

.label {
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-bottom: 18px;
}

.section-heading h2 {
  font-size: clamp(1.6rem, 3.4vw, 2.1rem);
  max-width: 22ch;
}

.body-copy {
  color: var(--ink-muted);
  font-size: 16.5px;
  line-height: 1.62;
  max-width: 62ch;
}

.tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tags span {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--ink-muted);
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 4px 8px;
  background: var(--surface);
}

.button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 16px;
  border-radius: 6px;
  border: 1px solid var(--ink);
  background: var(--ink);
  color: var(--bg);
  cursor: pointer;
  transition: opacity 0.15s ease;
}
.button:hover { opacity: 0.85; }
.button--ghost {
  background: var(--surface);
  color: var(--ink);
  border: 1px solid var(--rule);
}

@media (max-width: 760px) {
  :root { --pad: 20px; --section-y: 56px; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { animation: none !important; transition: none !important; }
}
```

- [ ] **Step 5: Verify the build compiles**

Run: `npm run build`
Expected: build succeeds; `dist/index.html` is produced. (Page will be largely empty until components land — that is expected.)

- [ ] **Step 6: Commit**

```bash
git add src/index.css index.src.html postcss.config.js package.json package-lock.json
git rm tailwind.config.js
git commit -m "feat: blueprint-light CSS foundation; drop Tailwind; update head + fonts"
```

---

## Task 3: Data model restructure

**Files:**
- Modify: `src/data/personalData.js` (full replacement)
- Create: `src/data/personalData.test.js`

**Interfaces:**
- Produces the `personalData` object consumed by every component. Exact shape:
  - `name: string`
  - `nav: Array<{ label: string, href: string }>`
  - `hero: { kicker, credential, headline, subline }` (all strings)
  - `proof: Array<{ value: string, label: string }>` (length 4)
  - `arc: { intro: string, stages: Array<{ n, label, body }> }` (stages length 4)
  - `flagship: { eyebrow, company, link, problem, stages: Array<{ stage, body }> (length 4), outcomes, media: Array<{ src, alt, caption }> }`
  - `work: Array<{ title, stack: string[], blurb, arcTag, domainTag, inProgress: boolean, media?: { src, alt, caption } }>`
  - `github: { note: string, url: string, repos: Array<{ label, url }> }`
  - `experience: Array<{ role, company, period, location, note }>`
  - `education: Array<{ school, degree, period, detail }>`
  - `about: { paragraphs: string[], facts: Array<{ label, value }>, headshot: { src, alt, caption }, personal: { line: string, interests: string[] } }`
  - `contact: { statement, email, tridentEmail, phone, linkedin, github, resumeUrl }`

- [ ] **Step 1: Write the failing test**

Create `src/data/personalData.test.js`:

```js
import { describe, it, expect } from 'vitest';
import { personalData as d } from './personalData';

describe('personalData shape', () => {
  it('uses the display name Cole Richards', () => {
    expect(d.name).toBe('Cole Richards');
  });

  it('has the exact hero headline and kicker', () => {
    expect(d.hero.headline).toBe('Hard problems, end to end.');
    expect(d.hero.kicker).toBe('Problem solver · Builder · Applied data scientist');
  });

  it('has exactly 4 proof stats and 4 arc stages and 4 flagship stages', () => {
    expect(d.proof).toHaveLength(4);
    expect(d.arc.stages).toHaveLength(4);
    expect(d.flagship.stages).toHaveLength(4);
  });

  it('arc stages are Question, Analysis, Software, Field in order', () => {
    expect(d.arc.stages.map((s) => s.label)).toEqual([
      'Question', 'Analysis', 'Software', 'Field',
    ]);
  });

  it('has at least 4 selected-work items', () => {
    expect(d.work.length).toBeGreaterThanOrEqual(4);
  });

  it('serves exactly one résumé at /Cole_Richards_Resume.pdf', () => {
    expect(d.contact.resumeUrl).toBe('/Cole_Richards_Resume.pdf');
  });

  it('contains no service-track remnants', () => {
    const blob = JSON.stringify(d);
    for (const banned of ['Tillys', 'GlenAnnie', 'service résumé', 'Service Resume', 'serviceResumeUrl']) {
      expect(blob).not.toContain(banned);
    }
    expect(d).not.toHaveProperty('now');
    expect(d).not.toHaveProperty('secondaryWork');
  });

  it('never claims Cole built the Trident software alone', () => {
    const software = d.flagship.stages.find((s) => s.stage === 'Software');
    expect(software.body.toLowerCase()).toContain('most of');
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/data/personalData.test.js`
Expected: FAIL (current `personalData` has `now`, `secondaryWork`, old headline, etc.).

- [ ] **Step 3: Replace `src/data/personalData.js`**

```js
import embercastImage from '../assets/cole/embercast.jpg';
import headshotImage from '../assets/cole/headshot.png';
import internalToolImage from '../assets/cole/internaltool.jpg';
import mappingImage from '../assets/cole/mapping.gif';

export const personalData = {
  name: 'Cole Richards',
  nav: [
    { label: 'Approach', href: '#approach' },
    { label: 'Trident', href: '#flagship' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    kicker: 'Problem solver · Builder · Applied data scientist',
    credential: 'UCLA Statistics & Data Science',
    headline: 'Hard problems, end to end.',
    subline:
      "I'm Cole Richards. I take problems from the raw question and the data through to working software — and, when it counts, out to the field. Recently: co-founded a wildfire-defense startup and wrote most of the software behind it. Now open to the right hard problems to work on next.",
  },
  proof: [
    { value: '$20K+', label: 'early revenue' },
    { value: '3', label: 'system installs' },
    { value: '8', label: 'person crew led' },
    { value: 'full', label: 'ops stack' },
  ],
  arc: {
    intro: 'Most people own one slice of this. I work the whole line.',
    stages: [
      { n: '01', label: 'Question', body: 'Start with the real problem and who it actually hurts.' },
      { n: '02', label: 'Analysis', body: 'Find the signal: statistics, geospatial, modeling.' },
      { n: '03', label: 'Software', body: 'Build the tool that puts the answer to work.' },
      { n: '04', label: 'Field', body: 'Take it to the real world and make it hold up.' },
    ],
  },
  flagship: {
    eyebrow: 'Flagship · Co-Founder & COO · Aug 2025 – Present',
    company: 'Trident Ember Defense',
    link: 'https://tridentemberdefense.com',
    problem:
      "Wildfires take homes through wind-driven embers, and passive prep leaves a gap in the moment that matters. Trident designs and installs active exterior sprinkler systems that pre-wet a home and its perimeter. Wet homes don't burn.",
    stages: [
      {
        stage: 'Question',
        body: 'Who needs active defense first — and how do you build a business that can deliver it across California?',
      },
      {
        stage: 'Analysis',
        body: 'Geospatial risk targeting in QGIS and ArcGIS — layering WUI zones, CAL FIRE hazard-severity zones, vegetation, and 30 years of fire perimeters to prioritize outreach.',
      },
      {
        stage: 'Software',
        body: 'Wrote most of the internal stack from scratch — CRM, quoter, 3D-print queue, 2D sprinkler-mapping tool, customer planner — on Supabase and Mapbox.',
      },
      {
        stage: 'Field',
        body: 'Led execution on site — 3 installs and $20K+ early revenue, including field lead on a 3,400 sq ft home with an 8-person crew.',
      },
    ],
    outcomes: '$20K+ early revenue · 3 system installs · 8-person crew · full ops stack shipped',
    media: [
      { src: mappingImage, alt: 'Animated wildfire burn-line timeline map', caption: 'Burn-line timeline, 5-year increments' },
      { src: internalToolImage, alt: 'Trident operations and sprinkler-planning tool', caption: 'Internal ops + planning stack' },
    ],
  },
  work: [
    {
      title: 'California Wildfire Risk Model',
      stack: ['Python', 'GeoPandas', 'Plotly', 'Streamlit'],
      blurb:
        'ZIP-level wildfire risk score for LA County combining CAL FIRE hazard zones, 30-year fire-perimeter history, and vegetation indices. Validating against CA Dept. of Insurance non-renewal rates; deploying as a Streamlit dashboard.',
      arcTag: 'Analysis → Software',
      domainTag: 'Physical world',
      inProgress: true,
    },
    {
      title: 'Personal Health & Training Load Analysis',
      stack: ['Python', 'pandas', 'statsmodels', 'matplotlib'],
      blurb:
        'Longitudinal analysis of my own Apple Watch and training data — modeling training load against recovery, sleep, and HRV across surfing, volleyball, and strength training. Time-series decomposition, autocorrelation, mixed-effects regression.',
      arcTag: 'Analysis',
      domainTag: 'Health & behavior',
      inProgress: true,
    },
    {
      title: 'EmberCast',
      stack: ['Swift', 'Public data APIs'],
      blurb:
        'A mobile app concept for live and historical wildfire conditions — a dashboard plus a wind-particle map — built to turn messy public data into something a homeowner or firefighter can read fast.',
      arcTag: 'Software',
      domainTag: 'Software product',
      inProgress: false,
      media: { src: embercastImage, alt: 'EmberCast mobile dashboard', caption: 'Conditions dashboard + map' },
    },
    {
      title: 'Geostatistical Kriging Analysis',
      stack: ['R', 'geoR', 'gstat'],
      blurb:
        'UCLA C173 coursework: ordinary and universal kriging with variogram fitting and PRESS cross-validation to predict environmental conditions across unsampled locations.',
      arcTag: 'Analysis',
      domainTag: 'Methods',
      inProgress: false,
    },
    {
      title: 'Airbnb Amenity Pricing Analysis',
      stack: ['R', 'tidyverse', 'glmnet'],
      blurb:
        'LASSO logistic regression with phrase-level amenity tokenization to identify which listing features predict above-median pricing. AUC evaluation with neighborhood-stratified confounding analysis.',
      arcTag: 'Analysis',
      domainTag: 'Methods',
      inProgress: false,
    },
  ],
  github: {
    note: 'More on GitHub',
    url: 'https://github.com/milescoler',
    repos: [
      { label: 'antonelli-vs-russell — F1 telemetry analysis', url: 'https://github.com/milescoler/antonelli-vs-russell' },
      { label: 'spotify-analyzer', url: 'https://github.com/milescoler/spotify-analyzer' },
    ],
  },
  experience: [
    {
      role: 'Co-Founder & COO',
      company: 'Trident Ember Defense',
      period: 'Aug 2025 – Present',
      location: 'LA & Ventura Counties',
      note: 'Software, geospatial targeting, planning, and field execution. Full case study above.',
    },
    {
      role: 'Inventory Specialist',
      company: 'UCLA Housing IT',
      period: 'Aug 2024 – Dec 2025',
      location: 'UCLA',
      note: 'Replaced a static inventory spreadsheet with a structured logging system — change history, audit trail, usage-trend analysis across thousands of assets. Managed inventory across 12+ product categories.',
    },
    {
      role: 'Accounts Analysis & Development',
      company: 'Esperer Holdings',
      period: 'Oct 2020 – Oct 2021',
      location: 'Santa Barbara',
      note: 'Automated daily account extraction and feature analysis for thousands of records; cut hours of manual work and rolled the workflow out across the team.',
    },
  ],
  education: [
    {
      school: 'University of California, Los Angeles',
      degree: 'B.S. Statistics & Data Science',
      period: 'Sep 2024 – Jun 2026',
      detail: 'Applied Geostatistics (C173), Computation & Optimization (102B), Design & Analysis of Experiments (141XP), Regression & Data Mining, Probability.',
    },
    {
      school: 'Santa Barbara City College',
      degree: 'A.A. Mathematics · A.A. Computer Science',
      period: 'Aug 2022 – May 2024',
      detail: 'GPA 3.98 · President\'s Honor Roll.',
    },
  ],
  about: {
    paragraphs: [
      'I came up through community college — A.A. degrees in Math and Computer Science at SBCC — then a B.S. in Statistics & Data Science at UCLA. That path taught me how to work: show up, do the reading, take the harder course.',
      "What I care about is taking a hard problem all the way down — from the question and the data to software that ships and, when it counts, out to the field. I'm domain-agnostic: drawn to the physical world, health and human behavior, and software. I want to keep building things that are useful and grounded.",
    ],
    facts: [
      { label: 'Degree', value: 'B.S. Statistics & Data Science, UCLA' },
      { label: 'Location', value: 'Santa Monica → San Diego (Aug) · open to remote' },
      { label: 'Focus', value: 'Hard problems in the physical world, health, and software' },
      { label: 'Currently', value: 'Building Trident · open to what\'s next' },
    ],
    headshot: { src: headshotImage, alt: 'Cole Richards', caption: 'Cole Richards' },
    personal: {
      line: "None of this is separate from how I work — it's where the patience, the competitive edge, and the ability to read a room come from.",
      interests: ['Surfing', 'Volleyball coaching', 'Spearfishing', 'Yoga & meditation', 'Guitar', 'Soccer'],
    },
  },
  contact: {
    statement:
      'Open to the right hard problems — in software, data, or wherever they are. Easiest way to reach me is email.',
    email: 'milescoler@gmail.com',
    tridentEmail: 'cole@tridentemberdefense.com',
    phone: '424-757-3084',
    linkedin: 'https://www.linkedin.com/in/milescoler/',
    github: 'https://github.com/milescoler',
    resumeUrl: '/Cole_Richards_Resume.pdf',
  },
};
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- src/data/personalData.test.js`
Expected: PASS (all assertions).

- [ ] **Step 5: Commit**

```bash
git add src/data/personalData.js src/data/personalData.test.js
git commit -m "feat: restructure personalData for end-to-end positioning"
```

---

## Task 4: Shared primitives (SectionLabel, Stat, Plate)

**Files:**
- Create: `src/components/primitives.jsx`
- Create: `src/components/primitives.test.jsx`
- Modify: `src/index.css` (append primitive styles)

**Interfaces:**
- Produces:
  - `SectionLabel({ eyebrow, title })` → renders `.eyebrow` + `<h2>` inside `.section-heading`.
  - `Stat({ value, label })` → renders `.stat` with mono value + label.
  - `Plate({ src, alt, caption })` → renders a framed figure with a mono caption.

- [ ] **Step 1: Write the failing test**

Create `src/components/primitives.test.jsx`:

```jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionLabel, Stat, Plate } from './primitives';

describe('primitives', () => {
  it('SectionLabel renders eyebrow and heading', () => {
    render(<SectionLabel eyebrow="Work" title="Selected work" />);
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Selected work' })).toBeInTheDocument();
  });

  it('Stat renders value and label', () => {
    render(<Stat value="$20K+" label="early revenue" />);
    expect(screen.getByText('$20K+')).toBeInTheDocument();
    expect(screen.getByText('early revenue')).toBeInTheDocument();
  });

  it('Plate renders an image with alt and a caption', () => {
    render(<Plate src="/x.png" alt="a map" caption="a caption" />);
    expect(screen.getByAltText('a map')).toBeInTheDocument();
    expect(screen.getByText('a caption')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/components/primitives.test.jsx`
Expected: FAIL ("Failed to resolve import './primitives'").

- [ ] **Step 3: Create `src/components/primitives.jsx`**

```jsx
export function SectionLabel({ eyebrow, title }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
    </div>
  );
}

export function Stat({ value, label }) {
  return (
    <div className="stat">
      <div className="stat__value mono">{value}</div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

export function Plate({ src, alt, caption }) {
  return (
    <figure className="plate">
      <img src={src} alt={alt} />
      {caption ? <figcaption className="mono">{caption}</figcaption> : null}
    </figure>
  );
}
```

- [ ] **Step 4: Append primitive styles to `src/index.css`**

```css
/* primitives */
.section-heading { margin-bottom: 36px; }

.stat { display: flex; flex-direction: column; gap: 4px; }
.stat__value { font-size: 26px; font-weight: 600; color: var(--ink); letter-spacing: -0.01em; }
.stat__label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--muted);
  text-transform: uppercase;
}

.plate {
  margin: 0;
  border: 1px solid var(--rule);
  background: var(--surface);
  border-radius: 8px;
  overflow: hidden;
}
.plate img { width: 100%; height: auto; }
.plate figcaption {
  font-size: 11.5px;
  color: var(--muted);
  padding: 8px 12px;
  border-top: 1px solid var(--rule);
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/components/primitives.test.jsx`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/primitives.jsx src/components/primitives.test.jsx src/index.css
git commit -m "feat: shared SectionLabel, Stat, Plate primitives"
```

---

## Task 5: Header / nav

**Files:**
- Create: `src/components/Header.jsx`, `src/components/Header.test.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `personalData.name`, `personalData.nav`, `personalData.contact.resumeUrl`.
- Produces: `Header({ name, nav, resumeUrl })` — sticky header with brand, nav links, résumé pill, mobile menu toggle.

- [ ] **Step 1: Write the failing test**

Create `src/components/Header.test.jsx`:

```jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

const nav = [{ label: 'Work', href: '#work' }, { label: 'Contact', href: '#contact' }];

describe('Header', () => {
  it('renders the name and nav links', () => {
    render(<Header name="Cole Richards" nav={nav} resumeUrl="/Cole_Richards_Resume.pdf" />);
    expect(screen.getByText('Cole Richards')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#work');
  });

  it('links the résumé', () => {
    render(<Header name="Cole Richards" nav={nav} resumeUrl="/Cole_Richards_Resume.pdf" />);
    const resume = screen.getAllByRole('link', { name: /résumé/i })[0];
    expect(resume).toHaveAttribute('href', '/Cole_Richards_Resume.pdf');
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/components/Header.test.jsx`
Expected: FAIL (no `./Header`).

- [ ] **Step 3: Create `src/components/Header.jsx`**

```jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ name, nav, resumeUrl }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand mono" href="#top">{name}</a>
        <nav className={`nav${open ? ' nav--open' : ''}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button button--ghost nav__resume" href={resumeUrl} download>Résumé</a>
        </nav>
        <a className="button button--ghost header__resume" href={resumeUrl} download>Résumé</a>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
```

- [ ] **Step 4: Append header styles to `src/index.css`**

```css
.header {
  position: sticky; top: 0; z-index: 50;
  background: rgba(246, 244, 239, 0.82);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--rule);
}
.header__inner { display: flex; align-items: center; justify-content: space-between; height: 60px; }
.brand { font-size: 14px; font-weight: 600; letter-spacing: 0.02em; }
.nav { display: flex; align-items: center; gap: 22px; }
.nav a { font-size: 13.5px; color: var(--ink-muted); }
.nav a:hover { color: var(--ink); }
.nav__resume { display: none; }
.hamburger { display: none; background: none; border: 0; color: var(--ink); cursor: pointer; }

@media (max-width: 760px) {
  .header__resume { display: none; }
  .hamburger { display: inline-flex; }
  .nav {
    position: absolute; top: 60px; left: 0; right: 0;
    flex-direction: column; align-items: flex-start; gap: 14px;
    background: var(--bg); border-bottom: 1px solid var(--rule);
    padding: 18px var(--pad); display: none;
  }
  .nav--open { display: flex; }
  .nav__resume { display: inline-flex; }
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/components/Header.test.jsx`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/Header.jsx src/components/Header.test.jsx src/index.css
git commit -m "feat: sticky blueprint header + nav"
```

---

## Task 6: Hero (+ proof strip)

**Files:**
- Create: `src/components/Hero.jsx`, `src/components/Hero.test.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `personalData.hero`, `personalData.proof`, `personalData.contact` (email, linkedin, github, resumeUrl).
- Produces: `Hero({ hero, proof, contact })`.

- [ ] **Step 1: Write the failing test**

Create `src/components/Hero.test.jsx`:

```jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

const hero = {
  kicker: 'Problem solver · Builder · Applied data scientist',
  credential: 'UCLA Statistics & Data Science',
  headline: 'Hard problems, end to end.',
  subline: 'I take problems end to end.',
};
const proof = [{ value: '$20K+', label: 'early revenue' }, { value: '3', label: 'system installs' }];
const contact = { email: 'a@b.com', linkedin: 'https://x', github: 'https://y', resumeUrl: '/r.pdf' };

describe('Hero', () => {
  it('renders the headline and kicker', () => {
    render(<Hero hero={hero} proof={proof} contact={contact} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hard problems, end to end.');
    expect(screen.getByText(hero.kicker)).toBeInTheDocument();
  });

  it('renders the proof stats', () => {
    render(<Hero hero={hero} proof={proof} contact={contact} />);
    expect(screen.getByText('$20K+')).toBeInTheDocument();
    expect(screen.getByText('system installs')).toBeInTheDocument();
  });

  it('renders an email action', () => {
    render(<Hero hero={hero} proof={proof} contact={contact} />);
    expect(screen.getByRole('link', { name: /email/i })).toHaveAttribute('href', 'mailto:a@b.com');
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/components/Hero.test.jsx`
Expected: FAIL (no `./Hero`).

- [ ] **Step 3: Create `src/components/Hero.jsx`**

```jsx
import { Mail, Linkedin, Github, Download } from 'lucide-react';
import { Stat } from './primitives';

export default function Hero({ hero, proof, contact }) {
  return (
    <section id="top" className="hero">
      <p className="hero__kicker mono">{hero.kicker}</p>
      <p className="hero__credential mono">{hero.credential}</p>
      <h1 className="hero__headline">{hero.headline}</h1>
      <p className="hero__subline body-copy">{hero.subline}</p>

      <div className="actions">
        <a className="button" href={`mailto:${contact.email}`}><Mail size={16} /> Email</a>
        <a className="button button--ghost" href={contact.resumeUrl} download><Download size={16} /> Résumé</a>
        <a className="button button--ghost" href={contact.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
        <a className="button button--ghost" href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
      </div>

      <div className="proof">
        {proof.map((s) => <Stat key={s.label} value={s.value} label={s.label} />)}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Append hero styles to `src/index.css`**

```css
.hero { padding: 72px 0 64px; }
.hero__kicker { font-size: 12.5px; letter-spacing: 0.08em; color: var(--accent); }
.hero__credential { font-size: 12px; color: var(--muted); margin-top: 4px; }
.hero__headline {
  font-size: clamp(2.6rem, 8vw, 4.2rem);
  letter-spacing: -0.03em; line-height: 1.0;
  margin: 22px 0 20px; max-width: 16ch;
}
.hero__subline { max-width: 60ch; font-size: 17px; }
.actions { display: flex; flex-wrap: wrap; gap: 10px; margin: 30px 0 44px; }
.proof {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 24px; padding-top: 28px; border-top: 1px solid var(--rule);
}
@media (max-width: 640px) {
  .proof { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .actions .button { flex: 1 1 auto; justify-content: center; }
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/components/Hero.test.jsx`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/Hero.jsx src/components/Hero.test.jsx src/index.css
git commit -m "feat: hero + proof strip"
```

---

## Task 7: The Arc

**Files:**
- Create: `src/components/Arc.jsx`, `src/components/Arc.test.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `personalData.arc` (`{ intro, stages }`).
- Produces: `Arc({ arc })` — section `#approach` with intro line and the four connected stages.

- [ ] **Step 1: Write the failing test**

Create `src/components/Arc.test.jsx`:

```jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Arc from './Arc';

const arc = {
  intro: 'Most people own one slice of this. I work the whole line.',
  stages: [
    { n: '01', label: 'Question', body: 'q' },
    { n: '02', label: 'Analysis', body: 'a' },
    { n: '03', label: 'Software', body: 's' },
    { n: '04', label: 'Field', body: 'f' },
  ],
};

describe('Arc', () => {
  it('renders the intro and all four stage labels', () => {
    render(<Arc arc={arc} />);
    expect(screen.getByText(arc.intro)).toBeInTheDocument();
    for (const label of ['Question', 'Analysis', 'Software', 'Field']) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/components/Arc.test.jsx`
Expected: FAIL (no `./Arc`).

- [ ] **Step 3: Create `src/components/Arc.jsx`**

```jsx
import { SectionLabel } from './primitives';

export default function Arc({ arc }) {
  return (
    <section id="approach" className="section arc">
      <SectionLabel eyebrow="Approach" title="How I work" />
      <p className="arc__intro body-copy">{arc.intro}</p>
      <ol className="arc__line">
        {arc.stages.map((s) => (
          <li key={s.n} className="arc__stage">
            <span className="arc__n mono">{s.n}</span>
            <h3 className="arc__stage-label">{s.label}</h3>
            <p className="arc__stage-body">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
```

- [ ] **Step 4: Append arc styles to `src/index.css`**

```css
.arc__intro { font-size: 18px; color: var(--ink); margin-bottom: 40px; max-width: 40ch; }
.arc__line {
  list-style: none; margin: 0; padding: 0;
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
  position: relative;
}
.arc__line::before {
  content: ''; position: absolute; top: 9px; left: 0; right: 0;
  height: 2px; background: var(--accent); opacity: 0.4;
}
.arc__stage { position: relative; padding: 0 18px 0 0; }
.arc__n {
  display: inline-flex; align-items: center; justify-content: center;
  position: relative; z-index: 1;
  font-size: 12px; color: var(--bg); background: var(--accent);
  width: 20px; height: 20px; border-radius: 50%; margin-bottom: 16px;
}
.arc__stage-label { font-size: 18px; margin-bottom: 8px; }
.arc__stage-body { color: var(--ink-muted); font-size: 14.5px; line-height: 1.5; }
@media (max-width: 760px) {
  .arc__line { grid-template-columns: 1fr; gap: 24px; }
  .arc__line::before { display: none; }
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/components/Arc.test.jsx`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/Arc.jsx src/components/Arc.test.jsx src/index.css
git commit -m "feat: the Arc (question -> analysis -> software -> field)"
```

---

## Task 8: Flagship (Trident case study)

**Files:**
- Create: `src/components/Flagship.jsx`, `src/components/Flagship.test.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `personalData.flagship`.
- Produces: `Flagship({ flagship })` — section `#flagship` with eyebrow, company heading, problem, four-stage breakdown, outcomes, link, media plates.

- [ ] **Step 1: Write the failing test**

Create `src/components/Flagship.test.jsx`:

```jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Flagship from './Flagship';

const flagship = {
  eyebrow: 'Flagship · Co-Founder & COO · Aug 2025 – Present',
  company: 'Trident Ember Defense',
  link: 'https://tridentemberdefense.com',
  problem: 'Wet homes don\'t burn.',
  stages: [
    { stage: 'Question', body: 'q' },
    { stage: 'Analysis', body: 'a' },
    { stage: 'Software', body: 'wrote most of the stack' },
    { stage: 'Field', body: 'f' },
  ],
  outcomes: '$20K+ early revenue · 3 system installs',
  media: [{ src: '/m.gif', alt: 'map', caption: 'map' }],
};

describe('Flagship', () => {
  it('renders company, problem, four stages, outcomes, and link', () => {
    render(<Flagship flagship={flagship} />);
    expect(screen.getByText('Trident Ember Defense')).toBeInTheDocument();
    expect(screen.getByText(flagship.problem)).toBeInTheDocument();
    for (const s of ['Question', 'Analysis', 'Software', 'Field']) {
      expect(screen.getByText(s)).toBeInTheDocument();
    }
    expect(screen.getByText(flagship.outcomes)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /tridentemberdefense/i })).toHaveAttribute('href', flagship.link);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/components/Flagship.test.jsx`
Expected: FAIL (no `./Flagship`).

- [ ] **Step 3: Create `src/components/Flagship.jsx`**

```jsx
import { ArrowUpRight } from 'lucide-react';
import { Plate } from './primitives';

export default function Flagship({ flagship }) {
  return (
    <section id="flagship" className="section flagship">
      <p className="eyebrow">{flagship.eyebrow}</p>
      <h2 className="flagship__company">{flagship.company}</h2>
      <p className="flagship__problem body-copy">{flagship.problem}</p>

      <div className="flagship__stages">
        {flagship.stages.map((s) => (
          <div key={s.stage} className="flagship__stage">
            <h3 className="flagship__stage-label mono">{s.stage}</h3>
            <p className="flagship__stage-body">{s.body}</p>
          </div>
        ))}
      </div>

      <p className="flagship__outcomes mono">{flagship.outcomes}</p>
      <a className="flagship__link" href={flagship.link} target="_blank" rel="noreferrer">
        tridentemberdefense.com <ArrowUpRight size={15} />
      </a>

      <div className="flagship__media">
        {flagship.media.map((m) => <Plate key={m.alt} src={m.src} alt={m.alt} caption={m.caption} />)}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Append flagship styles to `src/index.css`**

```css
.flagship__company { font-size: clamp(1.8rem, 4vw, 2.4rem); margin-bottom: 16px; }
.flagship__problem { font-size: 17px; margin-bottom: 36px; max-width: 64ch; }
.flagship__stages {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px;
  background: var(--rule); border: 1px solid var(--rule); border-radius: 8px; overflow: hidden;
}
.flagship__stage { background: var(--surface); padding: 22px; }
.flagship__stage-label {
  font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--accent); margin-bottom: 10px; font-weight: 600;
}
.flagship__stage-body { color: var(--ink-muted); font-size: 14.5px; line-height: 1.55; }
.flagship__outcomes {
  font-size: 13px; color: var(--ink); margin: 26px 0 10px; padding: 14px 16px;
  border: 1px solid var(--rule); border-radius: 6px; background: var(--accent-soft);
}
.flagship__link { display: inline-flex; align-items: center; gap: 4px; color: var(--accent); font-size: 14px; font-weight: 500; }
.flagship__media { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 30px; }
@media (max-width: 760px) {
  .flagship__stages, .flagship__media { grid-template-columns: 1fr; }
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/components/Flagship.test.jsx`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/Flagship.jsx src/components/Flagship.test.jsx src/index.css
git commit -m "feat: Trident flagship case study (four-stage breakdown)"
```

---

## Task 9: Selected work (+ EmberCast + GitHub line)

**Files:**
- Create: `src/components/SelectedWork.jsx`, `src/components/SelectedWork.test.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `personalData.work` (array) and `personalData.github` (`{ note, url, repos }`).
- Produces: `SelectedWork({ work, github })` — section `#work`. Each item: title, mono stack tags, arc/domain tags, blurb, optional plate, "in progress" marker.

- [ ] **Step 1: Write the failing test**

Create `src/components/SelectedWork.test.jsx`:

```jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SelectedWork from './SelectedWork';

const work = [
  { title: 'CA Wildfire Risk Model', stack: ['Python'], blurb: 'b', arcTag: 'Analysis', domainTag: 'Physical world', inProgress: true },
  { title: 'EmberCast', stack: ['Swift'], blurb: 'b2', arcTag: 'Software', domainTag: 'Software product', inProgress: false },
];
const github = { note: 'More on GitHub', url: 'https://github.com/milescoler', repos: [{ label: 'antonelli-vs-russell', url: 'https://x' }] };

describe('SelectedWork', () => {
  it('renders each work item with stack and tags', () => {
    render(<SelectedWork work={work} github={github} />);
    expect(screen.getByText('CA Wildfire Risk Model')).toBeInTheDocument();
    expect(screen.getByText('EmberCast')).toBeInTheDocument();
    expect(screen.getByText('Physical world')).toBeInTheDocument();
  });

  it('marks in-progress items', () => {
    render(<SelectedWork work={work} github={github} />);
    expect(screen.getByText(/in progress/i)).toBeInTheDocument();
  });

  it('renders the GitHub line', () => {
    render(<SelectedWork work={work} github={github} />);
    expect(screen.getByRole('link', { name: /antonelli-vs-russell/i })).toHaveAttribute('href', 'https://x');
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/components/SelectedWork.test.jsx`
Expected: FAIL (no `./SelectedWork`).

- [ ] **Step 3: Create `src/components/SelectedWork.jsx`**

```jsx
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel, Plate } from './primitives';

export default function SelectedWork({ work, github }) {
  return (
    <section id="work" className="section work">
      <SectionLabel eyebrow="Work" title="Selected work" />
      <div className="work__list">
        {work.map((w) => (
          <article key={w.title} className="work__item">
            <div className="work__body">
              <div className="work__tags mono">
                <span>{w.arcTag}</span>
                <span>·</span>
                <span>{w.domainTag}</span>
                {w.inProgress ? <span className="work__wip">In progress</span> : null}
              </div>
              <h3 className="work__title">{w.title}</h3>
              <p className="work__blurb">{w.blurb}</p>
              <div className="tags">
                {w.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
            {w.media ? (
              <div className="work__media"><Plate src={w.media.src} alt={w.media.alt} caption={w.media.caption} /></div>
            ) : null}
          </article>
        ))}
      </div>

      <div className="work__github">
        <span className="label">{github.note}</span>
        <ul>
          {github.repos.map((r) => (
            <li key={r.url}>
              <a href={r.url} target="_blank" rel="noreferrer">{r.label} <ArrowUpRight size={13} /></a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Append work styles to `src/index.css`**

```css
.work__list { display: flex; flex-direction: column; }
.work__item {
  display: grid; grid-template-columns: 1fr; gap: 16px;
  padding: 28px 0; border-top: 1px solid var(--rule);
}
.work__item:first-child { border-top: 0; padding-top: 0; }
.work__item:has(.work__media) { grid-template-columns: 1.4fr 1fr; gap: 32px; align-items: start; }
.work__tags { display: flex; flex-wrap: wrap; gap: 8px; font-size: 11.5px; color: var(--muted); letter-spacing: 0.04em; margin-bottom: 10px; }
.work__wip { color: var(--accent); }
.work__title { font-size: 20px; margin-bottom: 10px; }
.work__blurb { color: var(--ink-muted); font-size: 15px; line-height: 1.55; margin-bottom: 14px; max-width: 60ch; }
.work__github { margin-top: 40px; padding-top: 24px; border-top: 1px solid var(--rule); }
.work__github ul { list-style: none; margin: 12px 0 0; padding: 0; display: flex; flex-wrap: wrap; gap: 18px; }
.work__github a { display: inline-flex; align-items: center; gap: 4px; color: var(--accent); font-size: 14px; }
@media (max-width: 760px) {
  .work__item:has(.work__media) { grid-template-columns: 1fr; }
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/components/SelectedWork.test.jsx`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/SelectedWork.jsx src/components/SelectedWork.test.jsx src/index.css
git commit -m "feat: selected work + GitHub line"
```

---

## Task 10: Experience & education

**Files:**
- Create: `src/components/ExperienceEducation.jsx`, `src/components/ExperienceEducation.test.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `personalData.experience` (array), `personalData.education` (array).
- Produces: `ExperienceEducation({ experience, education })` — section `#experience` with two grouped lists.

- [ ] **Step 1: Write the failing test**

Create `src/components/ExperienceEducation.test.jsx`:

```jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExperienceEducation from './ExperienceEducation';

const experience = [{ role: 'Co-Founder & COO', company: 'Trident Ember Defense', period: 'Aug 2025 – Present', location: 'LA', note: 'n' }];
const education = [{ school: 'UCLA', degree: 'B.S. Statistics & Data Science', period: '2024–2026', detail: 'd' }];

describe('ExperienceEducation', () => {
  it('renders experience and education entries', () => {
    render(<ExperienceEducation experience={experience} education={education} />);
    expect(screen.getByText('Trident Ember Defense')).toBeInTheDocument();
    expect(screen.getByText('UCLA')).toBeInTheDocument();
    expect(screen.getByText('B.S. Statistics & Data Science')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/components/ExperienceEducation.test.jsx`
Expected: FAIL (no `./ExperienceEducation`).

- [ ] **Step 3: Create `src/components/ExperienceEducation.jsx`**

```jsx
import { SectionLabel } from './primitives';

export default function ExperienceEducation({ experience, education }) {
  return (
    <section id="experience" className="section xp">
      <SectionLabel eyebrow="Experience & education" title="The standard scan" />

      <div className="xp__group">
        {experience.map((e) => (
          <article key={`${e.company}-${e.role}`} className="xp__item">
            <div className="xp__head">
              <div>
                <h3 className="xp__role">{e.role}</h3>
                <p className="xp__org mono">{e.company} · {e.location}</p>
              </div>
              <span className="xp__period mono">{e.period}</span>
            </div>
            <p className="xp__note">{e.note}</p>
          </article>
        ))}
      </div>

      <div className="xp__group xp__group--edu">
        {education.map((ed) => (
          <article key={ed.school} className="xp__item">
            <div className="xp__head">
              <div>
                <h3 className="xp__role">{ed.school}</h3>
                <p className="xp__org mono">{ed.degree}</p>
              </div>
              <span className="xp__period mono">{ed.period}</span>
            </div>
            <p className="xp__note">{ed.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Append experience styles to `src/index.css`**

```css
.xp__group { display: flex; flex-direction: column; }
.xp__group--edu { margin-top: 24px; border-top: 1px solid var(--rule); padding-top: 24px; }
.xp__item { padding: 18px 0; border-top: 1px solid var(--rule); }
.xp__group .xp__item:first-child { border-top: 0; padding-top: 0; }
.xp__head { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; }
.xp__role { font-size: 17px; }
.xp__org { font-size: 12.5px; color: var(--accent); margin-top: 4px; }
.xp__period { font-size: 12px; color: var(--muted); white-space: nowrap; }
.xp__note { color: var(--ink-muted); font-size: 14.5px; line-height: 1.55; margin-top: 10px; max-width: 70ch; }
@media (max-width: 560px) {
  .xp__head { flex-direction: column; gap: 4px; }
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/components/ExperienceEducation.test.jsx`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/ExperienceEducation.jsx src/components/ExperienceEducation.test.jsx src/index.css
git commit -m "feat: experience & education (folded)"
```

---

## Task 11: About (+ personal strip)

**Files:**
- Create: `src/components/About.jsx`, `src/components/About.test.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `personalData.about` (`{ paragraphs, facts, headshot, personal }`).
- Produces: `About({ about })` — section `#about` with paragraphs, facts panel, headshot plate, personal interests strip.

- [ ] **Step 1: Write the failing test**

Create `src/components/About.test.jsx`:

```jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';

const about = {
  paragraphs: ['p one', 'p two'],
  facts: [{ label: 'Degree', value: 'B.S. Statistics & Data Science, UCLA' }],
  headshot: { src: '/h.png', alt: 'Cole Richards', caption: 'Cole Richards' },
  personal: { line: 'where the patience comes from', interests: ['Surfing', 'Guitar'] },
};

describe('About', () => {
  it('renders paragraphs, facts, headshot, and interests', () => {
    render(<About about={about} />);
    expect(screen.getByText('p one')).toBeInTheDocument();
    expect(screen.getByText('B.S. Statistics & Data Science, UCLA')).toBeInTheDocument();
    expect(screen.getByAltText('Cole Richards')).toBeInTheDocument();
    expect(screen.getByText('Surfing')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/components/About.test.jsx`
Expected: FAIL (no `./About`).

- [ ] **Step 3: Create `src/components/About.jsx`**

```jsx
import { SectionLabel, Plate } from './primitives';

export default function About({ about }) {
  return (
    <section id="about" className="section about">
      <SectionLabel eyebrow="About" title="Who I am" />
      <div className="about__grid">
        <div className="about__text">
          {about.paragraphs.map((p) => <p key={p} className="body-copy">{p}</p>)}
          <dl className="about__facts">
            {about.facts.map((f) => (
              <div key={f.label} className="about__fact">
                <dt className="mono">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="about__aside">
          <Plate src={about.headshot.src} alt={about.headshot.alt} caption={about.headshot.caption} />
        </div>
      </div>
      <div className="about__personal">
        <div className="tags tags--large">
          {about.personal.interests.map((i) => <span key={i}>{i}</span>)}
        </div>
        <p className="about__personal-line">{about.personal.line}</p>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Append about styles to `src/index.css`**

```css
.about__grid { display: grid; grid-template-columns: 1fr 280px; gap: 40px; align-items: start; }
.about__text .body-copy + .body-copy { margin-top: 16px; }
.about__facts { margin: 28px 0 0; display: grid; gap: 0; }
.about__fact { display: grid; grid-template-columns: 130px 1fr; gap: 16px; padding: 12px 0; border-top: 1px solid var(--rule); }
.about__fact dt { font-size: 11.5px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); }
.about__fact dd { margin: 0; font-size: 14.5px; color: var(--ink); }
.about__personal { margin-top: 36px; padding-top: 24px; border-top: 1px solid var(--rule); }
.tags--large span { font-size: 13px; padding: 6px 12px; }
.about__personal-line { color: var(--ink-muted); font-size: 14.5px; margin-top: 16px; max-width: 60ch; }
@media (max-width: 760px) {
  .about__grid { grid-template-columns: 1fr; }
  .about__aside { max-width: 240px; }
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/components/About.test.jsx`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/About.jsx src/components/About.test.jsx src/index.css
git commit -m "feat: about + personal strip"
```

---

## Task 12: Contact

**Files:**
- Create: `src/components/Contact.jsx`, `src/components/Contact.test.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `personalData.contact`.
- Produces: `Contact({ contact })` — section `#contact` with statement, actions, and a channel panel (email, phone, LinkedIn, GitHub, Trident, résumé).

- [ ] **Step 1: Write the failing test**

Create `src/components/Contact.test.jsx`:

```jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

const contact = {
  statement: 'Open to the right hard problems.',
  email: 'milescoler@gmail.com',
  tridentEmail: 'cole@tridentemberdefense.com',
  phone: '424-757-3084',
  linkedin: 'https://www.linkedin.com/in/milescoler/',
  github: 'https://github.com/milescoler',
  resumeUrl: '/Cole_Richards_Resume.pdf',
};

describe('Contact', () => {
  it('renders the statement and a mailto email link', () => {
    render(<Contact contact={contact} />);
    expect(screen.getByText(contact.statement)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /milescoler@gmail.com/ })[0])
      .toHaveAttribute('href', 'mailto:milescoler@gmail.com');
  });

  it('links GitHub and résumé', () => {
    render(<Contact contact={contact} />);
    expect(screen.getByRole('link', { name: /github\.com\/milescoler/ })).toHaveAttribute('href', contact.github);
    expect(screen.getByRole('link', { name: /résumé/i })).toHaveAttribute('href', contact.resumeUrl);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/components/Contact.test.jsx`
Expected: FAIL (no `./Contact`).

- [ ] **Step 3: Create `src/components/Contact.jsx`**

```jsx
import { Mail, Download } from 'lucide-react';
import { SectionLabel } from './primitives';

export default function Contact({ contact }) {
  const telHref = `tel:${contact.phone.replace(/[^0-9]/g, '')}`;
  return (
    <section id="contact" className="section contact">
      <SectionLabel eyebrow="Contact" title="Let's talk" />
      <div className="contact__grid">
        <div>
          <p className="body-copy contact__statement">{contact.statement}</p>
          <div className="actions">
            <a className="button" href={`mailto:${contact.email}`}><Mail size={16} /> Email me</a>
            <a className="button button--ghost" href={contact.resumeUrl} download><Download size={16} /> Résumé</a>
          </div>
        </div>
        <dl className="contact__panel">
          <div className="contact__row"><dt>Email</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
          <div className="contact__row"><dt>Phone</dt><dd><a href={telHref}>{contact.phone}</a></dd></div>
          <div className="contact__row"><dt>LinkedIn</dt><dd><a href={contact.linkedin} target="_blank" rel="noreferrer">in/milescoler</a></dd></div>
          <div className="contact__row"><dt>GitHub</dt><dd><a href={contact.github} target="_blank" rel="noreferrer">{contact.github.replace('https://', '')}</a></dd></div>
          <div className="contact__row"><dt>Trident</dt><dd><a href={`mailto:${contact.tridentEmail}`}>{contact.tridentEmail}</a></dd></div>
        </dl>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Append contact styles to `src/index.css`**

```css
.contact__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
.contact__statement { font-size: 17px; margin-bottom: 24px; }
.contact__panel { margin: 0; border: 1px solid var(--rule); border-radius: 8px; background: var(--surface); overflow: hidden; }
.contact__row { display: grid; grid-template-columns: 90px 1fr; gap: 12px; padding: 14px 16px; border-top: 1px solid var(--rule); }
.contact__row:first-child { border-top: 0; }
.contact__row dt { font-family: var(--font-mono); font-size: 11.5px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); }
.contact__row dd { margin: 0; font-size: 14.5px; }
.contact__row dd a:hover { color: var(--accent); }
@media (max-width: 760px) { .contact__grid { grid-template-columns: 1fr; } }
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/components/Contact.test.jsx`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/Contact.jsx src/components/Contact.test.jsx src/index.css
git commit -m "feat: contact section + channel panel"
```

---

## Task 13: Compose App + page-level test

**Files:**
- Modify: `src/App.jsx` (full replacement)
- Create: `src/App.test.jsx`

**Interfaces:**
- Consumes: all section components + `personalData`.
- Produces: the assembled single-page `App`.

- [ ] **Step 1: Write the failing test**

Create `src/App.test.jsx`:

```jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the hero headline and all major sections', () => {
    const { container } = render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hard problems, end to end.');
    for (const id of ['approach', 'flagship', 'work', 'experience', 'about', 'contact']) {
      expect(container.querySelector(`#${id}`)).toBeTruthy();
    }
  });

  it('has no service-track remnants in the DOM', () => {
    const { container } = render(<App />);
    const text = container.textContent;
    for (const banned of ['Tillys', 'GlenAnnie', 'service resume', 'Service Resume']) {
      expect(text).not.toContain(banned);
    }
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/App.test.jsx`
Expected: FAIL (old `App.jsx` still renders the previous markup / lacks `#approach`).

- [ ] **Step 3: Replace `src/App.jsx`**

```jsx
import { motion } from 'framer-motion';
import { personalData } from './data/personalData';
import Header from './components/Header';
import Hero from './components/Hero';
import Arc from './components/Arc';
import Flagship from './components/Flagship';
import SelectedWork from './components/SelectedWork';
import ExperienceEducation from './components/ExperienceEducation';
import About from './components/About';
import Contact from './components/Contact';

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.4, ease: 'easeOut' },
};

function App() {
  const { name, nav, hero, proof, arc, flagship, work, github, experience, education, about, contact } = personalData;
  return (
    <div className="page">
      <Header name={name} nav={nav} resumeUrl={contact.resumeUrl} />
      <main className="container">
        <Hero hero={hero} proof={proof} contact={contact} />
        <motion.div {...reveal}><Arc arc={arc} /></motion.div>
        <motion.div {...reveal}><Flagship flagship={flagship} /></motion.div>
        <motion.div {...reveal}><SelectedWork work={work} github={github} /></motion.div>
        <motion.div {...reveal}><ExperienceEducation experience={experience} education={education} /></motion.div>
        <motion.div {...reveal}><About about={about} /></motion.div>
        <motion.div {...reveal}><Contact contact={contact} /></motion.div>
      </main>
    </div>
  );
}

export default App;
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- src/App.test.jsx`
Expected: PASS.

- [ ] **Step 5: Run the full test suite**

Run: `npm test`
Expected: PASS (all component + data tests).

- [ ] **Step 6: Commit**

```bash
git add src/App.jsx src/App.test.jsx
git commit -m "feat: compose redesigned single-page app"
```

---

## Task 14: Motif + motion polish

**Files:**
- Modify: `src/index.css`
- Modify: `src/components/Arc.jsx` (animate the connecting line)

Verified by `npm run build`, `npm test`, and a manual look in `npm run dev`.

- [ ] **Step 1: Add a contour/grid motif to the hero**

Append to `src/index.css`:

```css
.hero { position: relative; }
.hero::after {
  content: ''; position: absolute; inset: 0; z-index: -1; pointer-events: none;
  background:
    radial-gradient(circle at 85% 0%, var(--accent-soft), transparent 42%);
}
.section-heading h2 { position: relative; }
```

- [ ] **Step 2: Animate the Arc connecting line drawing in**

In `src/components/Arc.jsx`, change the import line and the `<ol>` to use framer-motion so the line scales in from the left. Replace the file with:

```jsx
import { motion } from 'framer-motion';
import { SectionLabel } from './primitives';

export default function Arc({ arc }) {
  return (
    <section id="approach" className="section arc">
      <SectionLabel eyebrow="Approach" title="How I work" />
      <p className="arc__intro body-copy">{arc.intro}</p>
      <div className="arc__wrap">
        <motion.span
          className="arc__rail"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
        <ol className="arc__line">
          {arc.stages.map((s) => (
            <li key={s.n} className="arc__stage">
              <span className="arc__n mono">{s.n}</span>
              <h3 className="arc__stage-label">{s.label}</h3>
              <p className="arc__stage-body">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update Arc CSS for the animated rail**

In `src/index.css`, replace the `.arc__line::before` rule from Task 7 with a wrapper + rail:

```css
.arc__wrap { position: relative; }
.arc__rail {
  position: absolute; top: 9px; left: 0; right: 0; height: 2px;
  background: var(--accent); opacity: 0.4; transform-origin: left center;
}
@media (max-width: 760px) { .arc__rail { display: none; } }
```

(Delete the now-unused `.arc__line::before { ... }` block.)

- [ ] **Step 4: Verify the Arc test still passes**

Run: `npm test -- src/components/Arc.test.jsx`
Expected: PASS (content unchanged).

- [ ] **Step 5: Manual visual check**

Run: `npm run dev`, open the local URL. Confirm: paper background with subtle dot-grid, blueprint-blue accents, the arc rail animates in (and is static when the OS "reduce motion" setting is on), fonts are Space Grotesk / Inter / JetBrains Mono.

- [ ] **Step 6: Commit**

```bash
git add src/index.css src/components/Arc.jsx
git commit -m "feat: contour/grid motif + arc draw-in motion"
```

---

## Task 15: Résumé + asset cleanup; fix sync script

**Files:**
- Modify: `scripts/sync-pages.mjs`
- Delete: service résumé + stray PDFs (root + public)

**Interfaces:**
- Produces: a build whose root sync copies only `Cole_Richards_Resume.pdf`.

- [ ] **Step 1: Confirm the canonical résumé**

Run: `ls -la *.pdf public/*.pdf`
Confirm `Cole_Richards_Resume.pdf` (root + `public/`) is the current technical résumé. (If a newer file exists among the strays, copy it over `public/Cole_Richards_Resume.pdf` first.)

- [ ] **Step 2: Update `scripts/sync-pages.mjs` to sync only one résumé**

Replace the trailing résumé loop (the `for (const file of [...])` block) with:

```js
for (const file of ['Cole_Richards_Resume.pdf']) {
  const src = resolve(distDir, file);
  const tgt = resolve(root, file);
  if (existsSync(src)) {
    cpSync(src, tgt);
  }
}
```

- [ ] **Step 3: Delete the service résumé and stray PDFs**

```bash
git rm Cole_Richards_Resume_Service.pdf public/Cole_Richards_Resume_Service.pdf
rm -f coleresume-a-042126.pdf coleresume-b-042726.pdf
```

(The `coleresume-*` files are untracked, so `rm -f` is correct; the service résumés are tracked, so `git rm`.)

- [ ] **Step 4: Verify the build serves one résumé**

Run: `npm run build`
Then: `ls dist/*.pdf`
Expected: only `dist/Cole_Richards_Resume.pdf`.

- [ ] **Step 5: Commit**

```bash
git add scripts/sync-pages.mjs
git commit -m "chore: single résumé; drop service résumé + stray PDFs"
```

---

## Task 16: Final build, verification, and deploy artifacts

**Files:**
- Modify (generated): root `index.html`, `assets/` (via build)

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: PASS (data + all component + App tests).

- [ ] **Step 2: Run the production build**

Run: `npm run build`
Expected: build succeeds; `dist/index.html` references hashed `assets/index-*.js` and `assets/index-*.css`; root `index.html` and `assets/` are updated by `sync-pages.mjs`.

- [ ] **Step 3: Preview and walk the verification checklist**

Run: `npm run preview` and open the URL. Confirm spec §8 items:
  - Headline reads "Hard problems, end to end." in blueprint blue accent system.
  - The Arc shows four stages with the connecting rail.
  - Trident flagship shows the four-stage breakdown, outcomes strip, and a working tridentemberdefense.com link.
  - Selected work shows the curated set with arc/domain tags; in-progress items labeled; GitHub line present.
  - Experience & education render condensed; no standalone Education/Life section.
  - All external links (Email, LinkedIn, GitHub, Trident) work; résumé downloads `/Cole_Richards_Resume.pdf`.
  - Single light theme; fonts loaded; `prefers-reduced-motion` disables motion.

- [ ] **Step 4: Grep for forbidden remnants**

Run:
```bash
grep -rinE "Tillys|GlenAnnie|service résumé|service resume|secondaryWork|dual-track|data analyst" src/ index.src.html
```
Expected: no matches (or only intended ones you can justify).

- [ ] **Step 5: Commit build artifacts**

```bash
git add index.html assets dist
git commit -m "build: regenerate dist for blueprint redesign"
```

- [ ] **Step 6: Open the PR**

```bash
git push -u origin redesign/blueprint-2026
gh pr create --base main --title "Redesign: blueprint-light, end-to-end positioning" --body "Implements docs/superpowers/specs/2026-06-22-website-postgrad-redesign-design.md"
```

---

## Self-Review

**Spec coverage** (spec → task):
- §1 positioning/voice/posture → Tasks 3, 6 (data + hero copy).
- §3 IA + cuts → Tasks 3, 5–13 (section components) + §3.1 cuts enforced by Task 3/15 + App test (Task 13).
- §4.1 hero + proof → Task 6. §4.2 Arc → Tasks 7, 14. §4.3 flagship → Task 8. §4.4 selected work (+EmberCast, GitHub) → Task 9. §4.5 experience & education → Task 10. §4.6 about + personal → Task 11. §4.7 contact → Task 12.
- §5 visual identity (palette/type/layout/motif/motion/imagery) → Tasks 2, 4, 14 + per-section CSS.
- §6 tech/build (React+Vite, CSS tokens, drop Tailwind, fonts, data model, résumé, deploy, branch) → Tasks 1, 2, 3, 15, 16. §6.1 SEO/meta → Task 2.
- §7 open items → resolved in Global Constraints (defaults) + Task 15 Step 1.
- §8 verification → Task 16 + automated tests in Tasks 3, 13.

**Placeholder scan:** No TBD/TODO; every code step has full code; CSS-only/visual tasks (2, 14, 16) explicitly use build + manual verification rather than fake unit tests.

**Type consistency:** Component prop names match `personalData` keys defined in Task 3 (`hero`, `proof`, `arc.stages[{n,label,body}]`, `flagship.stages[{stage,body}]`, `work[{title,stack,blurb,arcTag,domainTag,inProgress,media}]`, `github{note,url,repos}`, `experience`, `education`, `about{paragraphs,facts,headshot,personal}`, `contact{...}`). Primitives `SectionLabel/Stat/Plate` (Task 4) are consumed with the same prop names in Tasks 6–12. The `.arc__line::before` rule introduced in Task 7 is explicitly removed in Task 14 Step 3 (no leftover duplicate).
