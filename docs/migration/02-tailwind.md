# Phase 2 — Tailwind alongside MUI

Goal: get Tailwind compiling and available as a class-based utility layer,
without ripping out MUI. Port the current design tokens into
`tailwind.config.js` so future component rewrites can use Tailwind classes
and still match the existing visual language exactly.

Prerequisite: Phase 1 is merged and green.

## Why coexistence (not big-bang)

Phase 0's inventory counted ~250 MUI usages across 23 files. A single-PR
rewrite is a footgun on this scale — regressions are guaranteed and review
is impossible. Instead:

1. This phase installs Tailwind and configures it to *not* fight with MUI.
2. Phase 3 migrates components file-by-file, each one shipping independently.

At the end of Phase 2, Tailwind classes work anywhere in the codebase, but
no existing component has changed.

## Step-by-step

### 1. Install

```bash
npm install --save-dev tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

This creates `tailwind.config.js` and `postcss.config.js`. Vite auto-detects
PostCSS — no extra plugin wiring needed.

### 2. Configure `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  corePlugins: {
    preflight: false, // MUI's CssBaseline owns the baseline for now
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF7A45",
          // Later: pull in the tint/shade scale MUI currently computes
        },
        secondary: { DEFAULT: "#5EEAD4" },
        surface: {
          DEFAULT: "#09090C",  // background.default
          raised: "#111116",   // background.paper
        },
        ink: "#FAFAFA",        // text.primary
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ["Archivo", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
      },
    },
  },
  plugins: [],
};
```

The critical line is `corePlugins.preflight: false`. Tailwind's preflight
would reset a bunch of MUI's baseline styles (heading margins, list styles,
button resets) and break every MUI component that depends on them. We'll
re-enable preflight in Phase 3 once MUI is gone.

### 3. Wire the stylesheet

Edit [src/index.css](../../src/index.css). Add at the top:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Keep the existing rules (fonts, reduced-motion override) below the Tailwind
directives. With preflight off, `@tailwind base` only emits the CSS variables
Tailwind needs — nothing that clashes with MUI.

### 4. Smoke test

Add a throwaway class to a visible element, e.g. in
[src/routes/Homepage/homepage.jsx](../../src/routes/Homepage/homepage.jsx):

```jsx
<Box className="outline outline-primary outline-2">...</Box>
```

Run `npm run dev`, confirm the outline appears, then remove the test class.

### 5. Verify coexistence

A full pass through the site, looking for:

- MUI components still render correctly (spacing, typography, buttons).
- Dark/light theme toggle still flips everything via MUI's ThemeProvider.
- No console warnings about duplicate CSS resets.
- Bundle size delta is small — Tailwind's JIT should only ship the utilities
  actually used (just the smoke-test outline at this point).

### 6. Document the coexistence rules

Add a short note in [docs/README.md](../README.md) or a new
`docs/styling.md`:

- **Tailwind and MUI share pages.** Use MUI's `sx` prop for MUI-owned
  components until they are migrated. Use Tailwind `className` for new
  non-MUI elements (plain `<div>`, `<span>`, etc.).
- **Don't mix on one element.** `sx` + `className` on the same MUI component
  works but makes intent unclear. Pick one.
- **Design tokens live in `tailwind.config.js`**. If you add a new color or
  radius, update both the config and (temporarily) the MUI theme so they
  stay in sync.

## Things *not* to do in this phase

- Don't install `@mui/material` + Tailwind compat plugins (there isn't a good
  one, and we're removing MUI anyway).
- Don't enable Tailwind's preflight yet — it breaks MUI.
- Don't touch the ThemeSwitcher. Dark mode still flows through MUI's
  `ThemeProvider`; Phase 3 switches it to toggle a `class="dark"` on
  `<html>` instead.
- Don't start porting components. That's Phase 3.

## Exit criteria

- Tailwind builds cleanly via Vite + PostCSS.
- A Tailwind utility class applied anywhere in the repo is visible in the
  browser and included in the production bundle.
- Every page still renders identical to the end-of-Phase-1 snapshot.
- `tailwind.config.js` contains the full palette + typography tokens
  from MUI.
- Styling guidance (Tailwind vs MUI) is documented.
