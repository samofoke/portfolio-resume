# Phase 1 — Move to Vite

Goal: ship the exact same site, rendered pixel-for-pixel the same, built by
Vite instead of Create React App. No Tailwind yet. No component rewrites.

## Why this first

- CRA is unmaintained; every subsequent refactor is faster on Vite's HMR.
- Zero visual change makes this phase easy to review and safe to revert.
- Tailwind's PostCSS plugin plugs straight into Vite — doing Tailwind before
  Vite means wiring it through CRA's Webpack, which we'd then throw away.

## Scope

In scope:
- Replace `react-scripts` with `vite` + `@vitejs/plugin-react`.
- Move/rewrite the HTML template.
- Rename `src/index.js` → `src/main.jsx`.
- Rewrite every `process.env.REACT_APP_*` to `import.meta.env.VITE_*`.
- Replace `%PUBLIC_URL%` references with `/`.
- Swap the test runner (CRA Jest → Vitest) or delete the sole CRA test.
- Update Netlify build command.

Out of scope:
- Tailwind.
- MUI removal or refactors.
- Dependency upgrades beyond what Vite requires.
- TypeScript migration.

## Step-by-step

### 1. Install Vite dependencies

```bash
npm install --save-dev vite @vitejs/plugin-react vite-plugin-html
npm uninstall react-scripts
```

`vite-plugin-html` is the cleanest way to keep the `gtag.js` env
interpolation working — see step 4.

### 2. Add `vite.config.js` at the repo root

```js
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            GA_ID: env.VITE_GOOGLE_ANALYTICS ?? "",
          },
        },
      }),
    ],
    server: { port: 3000, open: true },
    build: { outDir: "build", sourcemap: true },
    preview: { port: 3000 },
  };
});
```

`outDir: "build"` keeps Netlify's existing `publish` directory working without
touching `netlify.toml` or the dashboard.

### 3. Move the HTML template to the repo root

Move `public/index.html` → `./index.html` and edit:

- Delete every `%PUBLIC_URL%` (replace with nothing, so `/favicon.svg` etc.).
- Replace `%REACT_APP_GOOGLE_ANALYTICS%` with `<%- GA_ID %>` (matches the
  plugin data from step 2).
- Add the Vite entry right before `</body>`:
  ```html
  <script type="module" src="/src/main.jsx"></script>
  ```
- Keep the Google Fonts preconnect + stylesheet link as-is.

Everything else in `public/` (manifest, favicons, resume PDF, `_redirects`)
stays put — Vite copies `public/` contents verbatim to the output dir.

### 4. Rename the entry

- `git mv src/index.js src/main.jsx`
- Update the import extension only if something imports it explicitly
  (nothing does — it's the entry point).
- Delete `src/reportWebVitals.js` + its call, or keep it. It still works
  under Vite; the CRA-specific comment is the only CRA-ism.

### 5. Rename env vars

In `.env` / `.env.local` / Netlify env config, rename every variable:

| Old | New |
| --- | --- |
| `REACT_APP_GOOGLE_ANALYTICS` | `VITE_GOOGLE_ANALYTICS` |
| `REACT_APP_GOOGLE_TAG_MANAGER` | `VITE_GOOGLE_TAG_MANAGER` |
| `REACT_APP_API_KEY` | `VITE_API_KEY` |
| `REACT_APP_AUTH_DOMAIN` | `VITE_AUTH_DOMAIN` |
| `REACT_APP_PROJECT_ID` | `VITE_PROJECT_ID` |
| `REACT_APP_STORAGE_BUCKET` | `VITE_STORAGE_BUCKET` |
| `REACT_APP_MESSAGING_SENDER_ID` | `VITE_MESSAGING_SENDER_ID` |
| `REACT_APP_APP_ID` | `VITE_APP_ID` |

In code, global-replace `process.env.REACT_APP_` → `import.meta.env.VITE_`.
Files that change:

- [src/utils/FirebaseConfigFile/firbebaseConfig.js](../../src/utils/FirebaseConfigFile/firbebaseConfig.js)
- [src/components/google/analytics.jsx](../../src/components/google/analytics.jsx)
- [src/components/hooks/googleAnalytics/google-analytics/google-analytics.jsx](../../src/components/hooks/googleAnalytics/google-analytics/google-analytics.jsx)

**Don't forget Netlify**: the site's build env still has the old names.
Rename them in the Netlify UI before the first deploy, or the Firebase
config will crash silently.

### 6. Handle the test runner

There's only one test file — [src/App.test.js](../../src/App.test.js) — from
CRA's boilerplate, plus [src/setupTests.js](../../src/setupTests.js). Two
choices:

- **Option A (recommended)**: delete both files. There are no real tests to
  preserve. Revisit with Vitest when we actually start writing tests.
- **Option B**: install `vitest` + `@testing-library/jest-dom` + `jsdom` and
  port the single smoke test. Worth it only if we plan to start adding tests
  immediately.

Whichever path, remove `"test": "react-scripts test"` from package.json and
replace with either `"test": "vitest"` or nothing.

### 7. Update scripts in package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

Keep `"start": "vite"` if anything in CI or docs still says `npm start`.

### 8. Verify

In order:

1. `npm run dev` — homepage should render identical to current prod.
2. Click every nav item and section — About/Resume/Contact scroll,
   Portfolio/Blog/Signup route.
3. Open `/about`, `/resume`, `/portfolio`, `/blog`, `/contact`, `/signup`,
   `/userprofile` directly in the URL bar to confirm SPA fallback works
   (`public/_redirects` in the dev server is Netlify-only — for local
   refresh-on-route to work, `vite.config.js` is SPA by default, but
   double-check after a browser reload on a non-root route).
4. Firebase auth — sign in and sign up flows still load their config.
5. Google Analytics — network tab shows `gtag.js` loading with the real
   GA id (not the literal placeholder).
6. `npm run build` — confirm the output lands in `build/`.
7. `npm run preview` — sanity-check the production bundle locally.

### 9. Netlify

- Change the build command from `npm run build` (same) — no change needed.
- Confirm publish directory is still `build`.
- Rename env vars as in step 5.
- Keep `public/_redirects` in place; Vite copies it to `build/_redirects`.

## Rollback plan

Phase 1 lives on a single branch. If anything breaks in prod:

```bash
git revert <phase-1-merge-sha>
# Netlify env vars can stay renamed — CRA doesn't see them.
```

No data or schema changes, so rollback is a revert + redeploy.

## Exit criteria

- `npm run dev` serves the site identical to production.
- `npm run build` produces a working bundle in `build/`.
- All routes load on hard-refresh locally.
- Firebase + GA read their env vars correctly.
- Netlify deploy preview passes.
- No references to `react-scripts`, `%PUBLIC_URL%`, `%REACT_APP_`, or
  `process.env.REACT_APP_` remain in the repo.
