# Phase 0 — Inventory

Snapshot of the current stack as of the start of the migration. Used by the
later phases to make concrete decisions (what to rename, what to replace,
what to leave alone).

## Build / tooling

- **Bundler**: Create React App 5.0.1 (`react-scripts`)
- **Node entry**: [src/index.js](../../src/index.js) — `ReactDOM.createRoot` + `<BrowserRouter>`
- **HTML template**: [public/index.html](../../public/index.html) — uses `%PUBLIC_URL%` and `%REACT_APP_GOOGLE_ANALYTICS%` interpolation
- **Scripts** (from [package.json](../../package.json)):
  - `start` → `react-scripts start`
  - `build` → `react-scripts build`
  - `test`  → `react-scripts test`
- **SPA fallback**: [public/_redirects](../../public/_redirects) (Netlify)
- **ESLint**: CRA preset (`react-app`, `react-app/jest`)
- **Browserslist**: declared in `package.json` — unused by Vite, kept only for autoprefixer/postcss

## Runtime dependencies

React 18, react-router-dom v6, framer-motion v11, firebase v10, formik + yup,
react-ga4, react-gtm-module, react-scroll (being removed — see nav fix),
web-vitals.

Styling stack: **@mui/material** + **@mui/icons-material** + **@emotion/react**
+ **@emotion/styled**. 250 MUI `sx`/`styled`/import hits across 23 files —
this is what Phase 3 chips away at.

## Environment variables

All env vars use the CRA `REACT_APP_*` prefix. Phase 1 renames every reference
to `VITE_*`.

| Variable | Where it's read |
| --- | --- |
| `REACT_APP_GOOGLE_ANALYTICS` | [src/components/google/analytics.jsx:17](../../src/components/google/analytics.jsx#L17), [src/components/hooks/googleAnalytics/google-analytics/google-analytics.jsx:8](../../src/components/hooks/googleAnalytics/google-analytics/google-analytics.jsx#L8), [public/index.html:38](../../public/index.html#L38), [public/index.html:43](../../public/index.html#L43) |
| `REACT_APP_GOOGLE_TAG_MANAGER` | [src/components/hooks/googleAnalytics/google-analytics/google-analytics.jsx:12](../../src/components/hooks/googleAnalytics/google-analytics/google-analytics.jsx#L12) |
| `REACT_APP_API_KEY` + other Firebase vars | [src/utils/FirebaseConfigFile/firbebaseConfig.js:11-16](../../src/utils/FirebaseConfigFile/firbebaseConfig.js#L11-L16) |

## Source layout

```
src/
├── index.js              ← becomes src/main.jsx in Phase 1
├── App.jsx
├── App.css
├── App.test.js           ← either port to Vitest or delete (see Phase 1)
├── setupTests.js         ← vitest config candidate
├── reportWebVitals.js
├── index.css
├── logo.svg
├── assets/bioInfo.js
├── images/               ← imported via ES modules (e.g. hacker.png)
├── components/           ← feature components (MUI-heavy)
├── pages/
├── routes/               ← Homepage + Navigation shell
├── utils/                ← Firebase config, dynamic components
└── UserContext/
```

Non-test `.js` files (everything else is `.jsx`):

- `src/index.js`
- `src/reportWebVitals.js`
- `src/setupTests.js`
- `src/assets/bioInfo.js`
- `src/utils/FirebaseConfigFile/firbebaseConfig.js`
- `src/components/hooks/user-page-tracker/userTracker.js`

None of these contain JSX, so none need renaming for Vite (`@vitejs/plugin-react`
only requires JSX to live in `.jsx`/`.tsx`). The only required rename is
`src/index.js` → `src/main.jsx` since that becomes the Vite entry.

## Asset handling

- Imported via ES modules: [src/routes/Homepage/homepage.jsx:13](../../src/routes/Homepage/homepage.jsx#L13) (`../../images/hacker.png`)
- Served from `public/`: `favicon.svg`, `favicon-v2.ico`, `evotech.png`, `manifest.json`, `resume/` (PDF)
- All `%PUBLIC_URL%/x` references must become `/x` in Phase 1.

## Design tokens (current MUI theme)

Dark-first palette from [src/components/Themes/MainThemes.jsx](../../src/components/Themes/MainThemes.jsx):

| Token | Value |
| --- | --- |
| `primary.main` | `#FF7A45` (coral) |
| `secondary.main` | `#5EEAD4` (teal) |
| `background.default` | `#09090C` |
| `background.paper` | `#111116` |
| `text.primary` | `#FAFAFA` |
| Heading font | Space Grotesk (500, 600, 700) |
| Body font | Archivo (400, 500, 600, 700) |
| Border radius | 12 |

Phase 2 mirrors these exactly into `tailwind.config.js` so the visual diff stays
at zero while components are being ported.

## Known good baseline

- Most recent clean production build: `main.3ce2ac2b.js` at 344.37 kB gzipped
  (after removing `react-scroll`).
- Main pages: `/`, `/about`, `/resume`, `/portfolio`, `/blog`, `/contact`,
  `/signup`, `/userprofile`.
- Netlify is the current host; the `_redirects` file keeps SPA routes working
  on hard refresh.
