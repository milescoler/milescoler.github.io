# Codex Reminders

## Main deployment error

- Error seen:

```text
main.jsx:1 Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "text/jsx".
```

- Cause:
  GitHub Pages was serving the repo root `index.html`, and that file was pointing to `/src/main.jsx`.
  That works in local Vite dev, but it does not work on a static host.

- Repeat of the same failure on March 10, 2026:
  A local/static server served the repo root `index.html` while it still contained:

```html
<script type="module" src="/src/main.jsx"></script>
```

  The browser then rejected the response as `text/jsx` instead of JavaScript.

- Fix:
  For GitHub Pages branch-based deploys, the repo root must point to built assets, not source files.
  The safe default flow is now:

```bash
npm run build
```

- Reminder:
  `npm run build` now builds `dist/` and syncs the compiled `index.html` and `assets/` back to the repo root.
  `npm run build:pages` is just an alias for the same flow.

## What works

- Keep `index.src.html` as the source Vite entry for local development.
- Use `scripts/restore-source-index.mjs` before local build/dev so Vite sees the source entry.
- Use `scripts/sync-pages.mjs` after build to copy the compiled `dist/index.html` and generated assets back to the repo root for GitHub Pages.
- `scripts/sync-pages.mjs` should replace the root `assets/` directory entirely so stale files do not survive deploys.
- Keep Vite output hashed for JS/CSS assets.
  This avoids stale browser cache issues when deploys change.
- After site changes, run:

```bash
npm run build
```

- Then push the updated root files:
  `index.html`, `assets/*`, and any changed source files.

## What did not work

- Do not point root `index.html` at `/src/main.jsx` for production.
- Do not use a custom runtime bootstrap that imports a fixed `app.js` from the root page.
  That created a bad cached path and led to:

```text
GET /assets/assets/app.js 404
```

- Do not use fixed output names like `assets/app.js` for Pages unless there is a strong reason.
  Hashed filenames are safer.

## Debugging reminders

- If the browser console shows Zotero errors like `zotero.js`, `pageSaving.js`, `messaging_inject.js`, those are browser-extension errors, not this site.
- If a feature or error message is not found with `rg` in this repo, stop and confirm whether the user is talking about a different project.
  This happened with the EmberCast/risk-layer issue.
- After any deploy-path change, verify the root file directly:

```bash
sed -n '1,80p' index.html
```

- The production root should reference built assets like:

```html
<script type="module" crossorigin src="./assets/index-....js"></script>
<link rel="stylesheet" crossorigin href="./assets/index-....css">
```

## Media reminders

- Large screenshots and GIFs should be optimized before deployment.
- In this repo:
  `embercast.png` and `internaltool.png` were too large and were replaced by compressed `.jpg` versions.
- `mapping.gif` was re-encoded smaller and kept as a GIF because that animation matters.
- Original large files were moved to:

```text
src/assets/cole/_originals/
```

## Repo-specific workflow reminder

1. Edit source files in `src/` and `index.src.html`.
2. Test locally if needed with `npm run dev`.
3. Build branch-deploy output with `npm run build`.
4. Confirm root `index.html` points at hashed built assets.
5. Push the generated root assets so GitHub Pages serves the correct build.
