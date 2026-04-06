# Phase 3 — Replace MUI with Tailwind

Goal: remove `@mui/material`, `@mui/icons-material`, `@emotion/react`, and
`@emotion/styled` from the dependency graph. Every component rebuilt with
Tailwind classes + small headless primitives where needed.

Prerequisites: Phases 1 and 2 merged. The site is already running on Vite
with Tailwind compiling and the design tokens ported.

## Strategy

Migrate **bottom-up, one file per PR**. Each PR:

1. Replaces MUI imports in a single file with Tailwind + native elements.
2. Keeps the rendered output visually identical (spot-check against the
   previous deploy preview).
3. Doesn't touch any other file.
4. Leaves MUI installed until the final PR.

Why one file per PR: review stays tractable, regressions are easy to
bisect, and the migration can pause at any commit without leaving the app
broken.

## Replacement cheat sheet

| MUI | Tailwind equivalent |
| --- | --- |
| `<Box sx={...}>` | `<div className="...">` |
| `<Stack direction="row" spacing={2}>` | `<div className="flex flex-row gap-4">` |
| `<Typography variant="h1">` | `<h1 className="font-display text-5xl font-bold">` |
| `<Button variant="contained" color="primary">` | `<button className="rounded bg-primary px-4 py-2 text-surface font-medium hover:bg-primary/90">` |
| `<Paper elevation={0}>` | `<div className="rounded border border-white/10 bg-surface-raised">` |
| `<Grid container spacing={3}>` | `<div className="grid grid-cols-12 gap-6">` |
| `<IconButton>` | `<button className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/5">` |
| `<Chip label="...">` | `<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs">` |
| `alpha(color, 0.5)` | Tailwind opacity modifiers: `bg-primary/50` |
| `useMediaQuery(breakpoints.down("md"))` | Tailwind responsive prefixes: `md:hidden` |
| `useTheme()` | CSS variables / Tailwind theme values directly |

For anything without a direct Tailwind analogue — dialogs, menus, dropdowns,
tooltips — reach for **headlessui/react** or **radix-ui**. Both are
unstyled and pair cleanly with Tailwind:

```bash
npm install @headlessui/react
# or
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu
```

Icons: `@mui/icons-material` is just SVGs. Drop-in replacement is
**lucide-react** (same API shape, tree-shakeable, matches the visual
weight of current icons reasonably well).

```bash
npm install lucide-react
```

## Migration order

Ordered from easiest to hardest so confidence builds as we go. Each row is a
PR candidate.

### Tier 1 — leaf components (small, low MUI surface)

1. [src/components/button/HoverButton.jsx](../../src/components/button/HoverButton.jsx) — single styled Button. Delete the file and replace call sites with a plain `<button>` + Tailwind classes.
2. [src/components/Footer/Footer.jsx](../../src/components/Footer/Footer.jsx) — 2 MUI imports.
3. [src/utils/DynamicComponents/PopUp/Popup.jsx](../../src/utils/DynamicComponents/PopUp/Popup.jsx) — 1 MUI import.
4. [src/utils/DynamicComponents/TextFields/CustomTextField.jsx](../../src/utils/DynamicComponents/TextFields/CustomTextField.jsx) — 1 MUI import; swap for a native `<input>` with Tailwind.
5. [src/components/Dialog/DialogComponent.jsx](../../src/components/Dialog/DialogComponent.jsx) — first headless-ui swap (use `@headlessui/react` Dialog).
6. [src/components/Backgrounds/NeuralBackground.jsx](../../src/components/Backgrounds/NeuralBackground.jsx) — only uses `useTheme` for colors; swap to CSS variables.
7. [src/components/Themes/ThemeSwitcher.jsx](../../src/components/Themes/ThemeSwitcher.jsx) — becomes a class toggle on `<html>` driving Tailwind's `dark:` variant.

### Tier 2 — mid-size

8. [src/components/Socials/Socials.jsx](../../src/components/Socials/Socials.jsx)
9. [src/components/UserProfile/UserIcon/UserIconProfile.jsx](../../src/components/UserProfile/UserIcon/UserIconProfile.jsx)
10. [src/components/Sections/AboutSection.jsx](../../src/components/Sections/AboutSection.jsx)
11. [src/components/Sections/ResumeSection.jsx](../../src/components/Sections/ResumeSection.jsx)
12. [src/components/Blog/Blog.jsx](../../src/components/Blog/Blog.jsx)
13. [src/components/Portfolio/Portfolio.jsx](../../src/components/Portfolio/Portfolio.jsx)
14. [src/components/SigninAndSignup/SignIn/SignInForm.jsx](../../src/components/SigninAndSignup/SignIn/SignInForm.jsx)
15. [src/components/SigninAndSignup/SignUp/SignUpFrom.jsx](../../src/components/SigninAndSignup/SignUp/SignUpFrom.jsx)
16. [src/components/Contact/Contact.jsx](../../src/components/Contact/Contact.jsx)

### Tier 3 — page-level with heavy MUI

17. [src/components/About/About.jsx](../../src/components/About/About.jsx) — 26 MUI usages.
18. [src/components/Resume/Resume.jsx](../../src/components/Resume/Resume.jsx) — 50 MUI usages; the biggest file.
19. [src/routes/Homepage/homepage.jsx](../../src/routes/Homepage/homepage.jsx) — 30 MUI usages.

### Tier 4 — structural

20. [src/routes/Navigation/navigation.jsx](../../src/routes/Navigation/navigation.jsx) — 13 MUI usages, AppBar + Drawer. Swap the Drawer for `@headlessui/react` Dialog (fullscreen variant) or a simple Tailwind slide-in panel.
21. [src/components/Themes/MainThemes.jsx](../../src/components/Themes/MainThemes.jsx) — delete. By this point nothing imports it.
22. [src/App.jsx](../../src/App.jsx) — strip `ThemeProvider` + `CssBaseline`. The dark/light class on `<html>` takes over.

## Theme switching rewrite

Current: `ThemeSwitcher.jsx` provides context; `MainThemes.jsx` builds a MUI
theme; `App.jsx` wraps the app in `ThemeProvider`.

After migration:

```jsx
// src/components/Themes/ThemeSwitcher.jsx
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleTheme: () => setDarkMode((v) => !v) }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeSwitcher = () => useContext(ThemeContext);
```

Then Tailwind classes key off the `dark` class: `bg-white dark:bg-surface`,
`text-black dark:text-ink`, etc. Persist the preference to `localStorage`
if the current MUI theme does.

## Enabling Tailwind preflight

After the last MUI component lands in Tailwind, flip preflight on:

```js
// tailwind.config.js
corePlugins: {
  preflight: true,
},
```

This will reset default browser styles (heading margins, list bullets, button
appearance). Expect a visual diff pass — fix any elements that relied on
MUI's CssBaseline resets.

## Remove MUI

Final PR of Phase 3:

```bash
npm uninstall @mui/material @mui/icons-material @emotion/react @emotion/styled
```

Verify with `rg "@mui|@emotion" src` before running — any remaining hits mean
a component was missed. The build should shrink substantially (current main
bundle is ~344 kB gzipped, MUI + emotion are a large chunk of that).

## Exit criteria

- No `@mui/*` or `@emotion/*` imports anywhere in `src/`.
- `package.json` has no MUI or Emotion dependencies.
- Tailwind preflight is enabled.
- Dark mode toggles via the `dark` class on `<html>`.
- Visual parity with the end-of-Phase-2 site across every page.
- Production bundle is meaningfully smaller than Phase 2's baseline.

## When to stop

If any page hits a wall (e.g. a custom MUI interaction that's hard to
replicate with headless primitives), **pause the migration and ship what's
done**. Partial migration is fine — MUI and Tailwind coexist happily. The
goal is a lighter, maintained stack, not purity.
