# ChugNOW

React 19 + Vite + TypeScript + MUI. De backend staat in een aparte repo: `../ChugNOW.API` (C# / .NET 8, eigen `CLAUDE.md`).

| Commando | Doel |
|---|---|
| `npm run dev` | dev server |
| `npm run build` | `tsc -b` + vite build |
| `npm run lint` | eslint |
| `npm run format` | prettier --write |
| `npm run format:check` | prettier --check (CI) |

## Kernconventies

- **Components**: één component per file, `export default function`, props via `interface IProps`. Zie @.claude/conventions/components.md
- **Styling**: `makeStyles` uit `tss-react/mui`, kleuren uit `src/colors.ts`, MUI breakpoints. Zie @.claude/conventions/styling.md
- **Imports**: absoluut via `src/*`, relatief binnen dezelfde map, `import type` voor types. Zie @.claude/conventions/imports.md
- **Theme**: opgesplitst in `src/Theme/` (palette, typography, shadow, sizes, `Components/`), `theme.ts` doet alleen compositie. Zie @.claude/conventions/styling.md
- **Structuur & naming**: zie @.claude/conventions/structure.md
- **Commits**: subject begint met een werkwoord in de gebiedende wijs, Engels, geen punt.
  `Add hero section`, `Fix avatar overflow`, `Move colors to src/colors.ts` — niet `Added ...` / `hero section`.

## Conventies bijhouden

Kom je in een gesprek iets tegen dat ook voor later werk geldt — een correctie van mij, een uitgesproken voorkeur, een patroon dat we afspreken — leg het dan meteen zelf vast, in dezelfde beurt, zonder te vragen:

- Hoort het bij een bestaand onderwerp? Werk die file in `.claude/conventions/` bij (liever een bestaande regel aanscherpen dan een nieuwe toevoegen).
- Past het nergens? Zet er een korte regel over in dit bestand.
- Meld in één zin wat je hebt vastgelegd en waar.

Niet vastleggen: eenmalige keuzes die alleen voor de taak van dat moment gelden, en dingen die al uit de code, config of git-historie blijken. Blijkt een vastgelegde conventie later niet te kloppen? Pas hem aan of haal hem weg — niet een tweede regel ernaast zetten.
