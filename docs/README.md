# portfolio-resume docs

Engineering docs for the portfolio site. Start here when planning non-trivial
changes so the context doesn't have to be re-derived every time.

## Migration — CRA → Vite + Tailwind

The site currently ships on Create React App + Material UI. We're moving to
**Vite** (build/dev) and **Tailwind CSS** (styling). The migration is staged so
the site stays deployable at every step.

| Phase | Doc | Goal |
| ----- | --- | ---- |
| 0 | [migration/00-inventory.md](migration/00-inventory.md) | Snapshot of the current stack — every knob the migration touches |
| 1 | [migration/01-vite.md](migration/01-vite.md) | Swap CRA for Vite. No visual changes. |
| 2 | [migration/02-tailwind.md](migration/02-tailwind.md) | Install Tailwind alongside MUI. Port design tokens. |
| 3 | [migration/03-mui-removal.md](migration/03-mui-removal.md) | Replace MUI components with Tailwind + headless primitives, file by file. |

Read them in order — each phase assumes the previous one is merged and green.
