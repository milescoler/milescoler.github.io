# Personal Website

This repo contains the Vite/React source for the personal site and the synced root files used for static hosting.

## Active app

- Source entry: `index.src.html`
- App code: `src/main.jsx`, `src/App.jsx`, `src/data/personalData.js`, `src/index.css`
- Public asset: `public/Cole_Richards_Resume.pdf`
- Deploy sync scripts: `scripts/restore-source-index.mjs`, `scripts/sync-pages.mjs`

## Commands

```bash
npm install
npm run dev
npm run build
```

`npm run build` does two things:

1. Builds the site into `dist/`
2. Syncs the compiled `index.html` and `assets/` back to the repo root for static hosting

## Deployment note

The root `index.html` must always point at built assets such as `./assets/index-*.js`.
It must never point at `/src/main.jsx` on a static host, or the browser will reject it with a `text/jsx` MIME error.
