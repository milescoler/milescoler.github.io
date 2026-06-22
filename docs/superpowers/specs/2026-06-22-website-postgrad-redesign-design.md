# Personal website — post-graduation redesign (Direction A: "End-to-End")

**Date:** 2026-06-22
**Owner:** Cole Richards (`milescoler`)
**Scope:** Full redesign of `milescoler.github.io` — new visual identity and information architecture, rebuilt on the existing React + Vite stack.
**Status:** Approved direction, pending spec review.

---

## 1. Why this redesign

The current site was built (April 2026) to position Cole as a soon-to-graduate, *dual-track* candidate — data roles **and** customer-facing service work — with "graduating June 2026, available part-time now" framing and a second "service résumé." Cole has now graduated (B.S. Statistics & Data Science, UCLA, June 2026), so that framing has expired.

This redesign re-frames the site around a single, confident idea and shows a forward trajectory.

### 1.1 Positioning (the one idea the whole site serves)

> **Cole Richards takes hard, real-world problems _end to end_ — from the question and the data, to the software that ships, to the work in the field.**

This is the differentiator: almost no recent grad can claim all four stages. Cole co-founded a company, wrote most of its software stack, ran the geospatial analysis, **and** led the field install crew. The site is organized to make that unmissable.

Umbrella identity: **problem solver · builder · applied data scientist** (the phrase "solutions engineer" may appear in prose but is kept out of the kicker to avoid being read as a narrow job title).

### 1.2 Posture

Open to the right opportunities — **confident, not job-hunting-desperate.** Lead with who Cole is and the impact he makes; a clear but unforced "let's talk." Never "seeking entry-level, available immediately."

### 1.3 Direction / "where it's going"

A **domain-agnostic problem solver** who goes where the hard, meaningful problems are. Proof spans:
- **Physical world / climate** (wildfire, geospatial)
- **Health & human behavior**
- **Software / products & tools**

### 1.4 Goals

- Replace the dual-track, job-seeker framing with the end-to-end problem-solver narrative.
- New visual identity: a precise, "spec sheet / field report" **blueprint light** aesthetic — a deliberate departure from the current dark site and from default dark-mode portfolios.
- Make the **Trident Ember Defense** flagship the page's center of gravity, demonstrating all four stages of the arc.
- Keep the React + Vite + GitHub Pages pipeline; rewrite layout, styling, and data model.

### 1.5 Non-goals

- No framework change (stays React + Vite). No CMS, no multi-page routing, no backend, no analytics.
- No service / customer-facing track, no second "service résumé."
- No dark/light toggle — single **light** theme.
- No blog/writing section in this pass (can be a later addition).

---

## 2. Voice & tone (governs all copy)

- Plainspoken and concrete. Short declarative sentences. Lead with what Cole **did** and what **happened**, not adjectives.
- Confident, not pleading. "Open to the right problems," never "available immediately."
- Zero buzzwords (no "passionate about leveraging," "synergy," "results-driven").
- Specific numbers and nouns over claims ("led an 8-person crew on a 3,400 sq ft install," not "strong leadership").
- A little SoCal-grounded personality that never undercuts the competence.
- **Accuracy guardrail:** Cole **wrote most of** the Trident software (cofounders helped shape tooling ideas). Never claim he "built everything" solo.

---

## 3. Information architecture

Single-page vertical scroll. Sections top to bottom:

1. **Hero** — kicker, headline, sub-line, primary actions, proof strip.
2. **The Arc** — the signature section: `Question → Analysis → Software → Field`.
3. **Flagship: Trident Ember Defense** — deep case study hitting all four stages.
4. **Selected work** — curated projects, each tagged to the arc, spanning the domains.
5. **Experience & education** — condensed, recruiter-friendly scan (Education folded in here).
6. **About** — who he is + forward-looking line; headshot + facts; light personal/outside-work strip.
7. **Contact** — confident close.

### 3.1 Cut from the current site

- Customer-facing **service track**, **service résumé**, and the dual-track **"Now"** section — removed.
- **"Secondary work"** employment block (Tillys, GlenAnnie) — removed. Volleyball coaching survives only as a light personal note in About.
- Standalone full-width **"Life"** section — folded into a compact strip inside About.
- Standalone **Education** section — folded into "Experience & education."

---

## 4. Section-by-section content

### 4.1 Hero

- **Kicker (mono):** `Problem solver · Builder · Applied data scientist` — secondary credential line: `UCLA Statistics & Data Science`.
- **Headline (h1):** **"Hard problems, end to end."**
- **Sub-line:** "I'm Cole Richards. I take problems from the raw question and the data through to working software — and, when it counts, out to the field. Recently: co-founded a wildfire-defense startup and **wrote most of the software behind it**. Now open to the right hard problems to work on next."
- **Primary actions:** Email · Résumé (download) · GitHub · LinkedIn.
- **Proof strip (4 stats, mono values):**
  - `$20K+` — early revenue
  - `3` — system installs
  - `8` — person crew led
  - `full` — ops stack (shipped)

### 4.2 The Arc

- **Intro:** "Most people own one slice of this. I work the whole line."
- Four stages (mono number + label + one line):
  - **01 · Question** — Start with the real problem and who it actually hurts.
  - **02 · Analysis** — Find the signal: statistics, geospatial, modeling.
  - **03 · Software** — Build the tool that puts the answer to work.
  - **04 · Field** — Take it to the real world and make it hold up.
- Visual: the four stages connected by a thin line (the "line" Cole works end to end).

### 4.3 Flagship — Trident Ember Defense

- **Eyebrow:** `Flagship · Co-Founder & COO · Aug 2025 – Present`
- **Problem:** "Wildfires take homes through wind-driven embers, and passive prep leaves a gap in the moment that matters. Trident designs and installs active exterior sprinkler systems that pre-wet a home and its perimeter. _Wet homes don't burn._"
- **Four-stage breakdown:**
  | Stage | What Cole did |
  |---|---|
  | **Question** | Who needs active defense first — and how do you build a business that can deliver it across California? |
  | **Analysis** | Geospatial risk targeting in QGIS/ArcGIS — layering WUI zones, CAL FIRE hazard-severity zones, vegetation, and 30 years of fire perimeters to prioritize outreach. |
  | **Software** | Wrote most of the internal stack from scratch — CRM, quoter, 3D-print queue, 2D sprinkler-mapping tool, customer planner — on Supabase + Mapbox. |
  | **Field** | Led execution on site — 3 installs and $20K+ early revenue, including field lead on a 3,400 sq ft home with an 8-person crew. |
- **Outcomes (mono):** `$20K+ early revenue · 3 system installs · 8-person crew · full ops stack shipped`
- **Link:** tridentemberdefense.com
- **Supporting visuals:** existing `mapping.gif` (burn-line timeline) and the ops-tool screenshot, framed as labeled plates.

### 4.4 Selected work

One curated set (merges current "Projects" + "In progress"). Each item: title, stack (mono tags), one-paragraph problem→approach→result, an **arc tag** (which stage it exercises), and a **domain tag**. In-progress items clearly labeled.

1. **California Wildfire Risk Model** — *Python · GeoPandas · Plotly · Streamlit* — ZIP-level wildfire risk score for LA County combining CAL FIRE hazard zones, 30-year fire-perimeter history, and vegetation indices; validating against CA Dept. of Insurance non-renewal rates; deploying as a Streamlit dashboard. _(in progress)_ — Domain: physical world. Arc: Analysis + Software.
2. **Personal Health & Training Load Analysis** — *Python · pandas · statsmodels · matplotlib* — longitudinal analysis of Cole's own Apple Watch/training data; modeling training load vs. recovery, sleep, and HRV across surfing, volleyball, and strength training; time-series decomposition, autocorrelation, mixed-effects regression. _(in progress)_ — Domain: health & behavior. Arc: Analysis.
3. **Geostatistical Kriging Analysis** — *R · geoR · gstat* — UCLA C173; ordinary and universal kriging with variogram fitting and PRESS cross-validation to predict environmental conditions across unsampled locations. — Domain: physical world / methods. Arc: Analysis.
4. **Airbnb Amenity Pricing Analysis** — *R · tidyverse · glmnet* — LASSO logistic regression with phrase-level amenity tokenization to identify features predicting above-median pricing; AUC evaluation with neighborhood-stratified confounding analysis. — Domain: methods. Arc: Analysis.

**Optional (decide during planning):**
- **EmberCast** — *Swift · public data APIs* — mobile concept for live/historical wildfire conditions (dashboard + wind-particle map). Adds a "software product" example. (Asset: `embercast.jpg`.)
- A light "also on GitHub" line linking `antonelli-vs-russell` (F1 telemetry, FastF1) and `spotify-analyzer` to show range/curiosity.

### 4.5 Experience & education

Condensed timeline for the standard recruiter scan.

**Experience**
- **Co-Founder & COO — Trident Ember Defense** · Aug 2025 – Present · LA & Ventura Counties — one line that points up to the flagship case study above (no duplication).
- **Inventory Specialist — UCLA Housing IT** · Aug 2024 – Dec 2025 — replaced a static inventory spreadsheet with a structured logging system (change history, audit trail, usage-trend analysis across thousands of assets); managed inventory across 12+ product categories.
- **Accounts Analysis & Development — Esperer Holdings** · Oct 2020 – Oct 2021 · Santa Barbara — automated daily account extraction and feature analysis for thousands of records; cut hours of manual work and rolled the workflow out across the team.

**Education**
- **University of California, Los Angeles** — B.S. Statistics & Data Science · Sep 2024 – Jun 2026. Coursework: Applied Geostatistics (C173), Computation & Optimization (102B), Design & Analysis of Experiments (141XP), Regression & Data Mining, Probability.
- **Santa Barbara City College** — A.A. Mathematics, A.A. Computer Science · Aug 2022 – May 2024 · GPA 3.98, President's Honor Roll.

### 4.6 About

- Short paragraph(s): who Cole is and the forward-looking line — a domain-agnostic problem solver drawn to hard problems in the physical world, health, and software; wants to keep building things that are useful and grounded.
- **Facts panel** (key/value): Degree (B.S. Statistics & Data Science, UCLA); Location (Santa Monica → San Diego from August; open to remote); Focus (hard problems across the physical world, health, and software); Currently (building Trident, open to what's next).
- **Headshot** rendered as a labeled plate.
- **Personal strip (light):** surfing · volleyball coaching · spearfishing · yoga & meditation · guitar · soccer · dog (Toby). One line on why it's not separate from how he works (patience, competitive edge, reading a room) — kept brief.

### 4.7 Contact

- Confident close: "Open to the right hard problems — in software, data, or wherever they are."
- Channels: Email (primary, `milescoler@gmail.com`), LinkedIn (`/in/milescoler`), GitHub (`github.com/milescoler`), Résumé download. Trident email (`cole@tridentemberdefense.com`) optional. Phone optional — confirm whether to keep it public.

---

## 5. Visual identity

Reads like a **well-made spec sheet / field report** — precise, structured, instrument-like.

### 5.1 Base mood & palette — "Blueprint / field-notes light"

Warm paper-white base, ink near-black text, one **blueprint-blue** accent. Single light theme (no dark variant). Suggested tokens (implementation may refine during frontend-design):

| Token | Suggested value | Role |
|---|---|---|
| `--bg` | warm paper white (~`#F6F4EF`) | Page background |
| `--surface` | slightly lighter/cooler paper (~`#FBFAF6`) | Cards / plates |
| `--ink` | near-black (~`#17181B`) | Headlines, primary text |
| `--ink-muted` | warm gray (~`#4B4D52`) | Body copy |
| `--muted` | (~`#8A8C90`) | Secondary / captions |
| `--rule` | hairline gray (~`#DEDAD0`) | 1px datasheet dividers |
| `--accent` | **blueprint blue** (~`#2455C4`) | Links, arc line, key labels, accent marks |
| `--grid` | very low-contrast ink | Dot-grid / contour texture |

### 5.2 Typography

- **Display / headline:** Space Grotesk — large, tight tracking, weighty.
- **Body:** Inter — neutral, highly readable.
- **Mono (the "instrument" thread):** JetBrains Mono — stat values, arc `01–04`, stack/tool tags, section numbers (`§02`), plate captions, key/value labels.
- Loaded via Google Fonts.

### 5.3 Layout

- Document-like, left-aligned, strict grid, generous margins. ~820px reading backbone with room for **mono margin labels** (e.g., `§02`, `01 · QUESTION`, units).
- Hairline 1px rules divide sections like a datasheet.

### 5.4 Motif

- Sparse topographic **contour lines** + a fine **dot-grid** as texture — hero backdrop and section accents. Subtle, never loud. Nods to maps / geospatial / the physical world.

### 5.5 Motion

- Restrained. Soft section reveals on scroll. The Arc's four stages connect with a thin line that **draws in**. Stat numbers may **tick up once**. Honors `prefers-reduced-motion` (no motion when requested). Nothing flashy.

### 5.6 Imagery

- Real assets (`mapping.gif`, ops-tool screenshot, headshot, optional `embercast.jpg`) framed as labeled **plates** with mono captions — like figures in a report.

---

## 6. Technical & build approach

- **Stack:** React + Vite, single page. No framework change.
- **Deploy:** keep the existing `build → dist → sync-to-root` flow and the GitHub Actions deploy for `milescoler.github.io`.
- **Styling:** hand-written CSS with design tokens (CSS variables for palette, type scale, spacing, hairlines). Remove Tailwind if it isn't pulling weight, to keep things clean.
- **Fonts:** Space Grotesk + Inter + JetBrains Mono via Google Fonts.
- **Data model:** restructure `src/data/personalData.js` to the new IA:
  - Keep/rework: `name`, `navigation`, `hero` (+ `kicker`, `subline`), `proof`, `arc` (4 stages), `flagship` (Trident with four-stage breakdown + outcomes), `work` (selected projects with `arcTag` + `domainTag`), `experience`, `education`, `about` (paragraphs, facts, headshot, personal strip), `contact`.
  - Remove: `now`, `secondaryWork`, and all service-track fields; `serviceResumeUrl`; dead fields from the prior design.
- **Résumé:** one résumé only, served at `/Cole_Richards_Resume.pdf`. Remove the service résumé (`Cole_Richards_Resume_Service.pdf`) and the stray root PDFs (`coleresume-a-042126.pdf`, `coleresume-b-042726.pdf`) after confirming the canonical, current file.
- **Quality bar:** semantic HTML, real `alt` text, `prefers-reduced-motion` honored, fast Lighthouse, updated `<title>` / `<meta description>` / keywords for the new positioning.
- **Workflow:** new branch off `main` (e.g., `redesign/blueprint-2026`); PR when ready. The current `refresh/dark-modern-2026` branch is the superseded direction.

### 6.1 SEO / metadata (new positioning)

- **Title:** `Cole Richards — Problem solver · Builder · Applied data scientist`
- **Description:** "Cole Richards takes hard, real-world problems end to end — from data and analysis to shipped software to the field. UCLA Statistics & Data Science. Co-founder of Trident Ember Defense. Open to the right hard problems."
- **Keywords:** Cole Richards, problem solver, builder, applied data scientist, data science, software engineer, geospatial, GIS, wildfire, Trident Ember Defense, UCLA, Statistics and Data Science, Santa Monica, San Diego.

---

## 7. Open items / content needed (resolve during planning)

- **Canonical résumé:** confirm which PDF is current (`Cole_Richards_Resume.pdf` vs. the stray `coleresume-*.pdf`); supply the final file.
- **Project imagery:** current polished artifacts are thin. Decide whether to add dashboard/screenshot images for the selected-work items, or render them image-light with strong mono treatment.
- **EmberCast + GitHub range:** include EmberCast as a software-product example? Surface F1 (`antonelli-vs-russell`) and `spotify-analyzer` as a light "also on GitHub" line?
- **Phone:** keep `424-757-3084` public, or contact-by-email only?
- **Headshot:** reuse current `headshot.png`, or supply a new one for the new look.
- **Accent shade & paper tone:** final blueprint-blue and paper values to be nailed visually during implementation (frontend-design).

---

## 8. Verification checklist (must pass before merge)

- [ ] Homepage builds and loads with no layout breakage.
- [ ] Headline reads "Hard problems, end to end." with the blueprint-blue accent system.
- [ ] The Arc renders all four stages (`Question → Analysis → Software → Field`) with the connecting line.
- [ ] Trident flagship renders the four-stage breakdown, outcomes strip, and working tridentemberdefense.com link.
- [ ] Selected work shows the curated set with arc/domain tags; in-progress items labeled.
- [ ] Experience & education render condensed; no standalone Education or Life section remains.
- [ ] **No service-track remnants** anywhere: grep `src/` for "service", "Tillys", "GlenAnnie", "customer-facing", "Now", dual-track copy → only intended matches.
- [ ] Exactly **one** résumé link site-wide, serving `/Cole_Richards_Resume.pdf` (200, application/pdf). Service résumé and stray root PDFs removed.
- [ ] All external links (Email, LinkedIn, GitHub, Trident) work.
- [ ] Fonts load (Space Grotesk, Inter, JetBrains Mono); no fallback flash of the old fonts.
- [ ] Single **light** theme; no dark-mode remnants from the prior design.
- [ ] `prefers-reduced-motion` disables the arc draw / stat tick / reveals.
- [ ] Updated `<title>`, `<meta description>`, keywords reflect the new positioning.
- [ ] `npm run build` completes; `dist/` + root `index.html` reference the new hashed bundles; deploy flow runs clean.
- [ ] Lighthouse: no major a11y/perf regressions; all images have real `alt` text.

---

## 9. Delivery

New branch off `main` (`redesign/blueprint-2026`). Suggested commit grouping:
1. Data model restructure (`src/data/personalData.js`) + résumé/asset cleanup.
2. New CSS token system + global styles.
3. Rebuilt `src/App.jsx` (hero, arc, flagship, selected work, experience/education, about, contact) + components.
4. Metadata/SEO + fonts + motif/motion.
5. Build artifacts regenerated (`dist/` + root `index.html`).

Cole runs `npm run dev`, checks against §8, and approves before merge.
