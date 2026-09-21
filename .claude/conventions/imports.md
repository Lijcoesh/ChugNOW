# Import conventies

## Absoluut via `src/` alias

Alle imports over mapgrenzen heen gaan via `src/*` — geen `../../`:

```ts
import { useDocumentTitle } from 'src/Hooks';   // goed
import { useDocumentTitle } from '../../Hooks'; // niet doen
```

## Relatief binnen dezelfde map

Relatief voor buren en voor submappen van de eigen map; absoluut zodra je omhoog moet.

```ts
// in src/Modules/Portfolio/Scenes/ProjectDetail/
import ProjectDetailHeader from './ProjectDetailHeader';

// in src/Theme/theme.ts
import { overrideMuiPaper } from './Components/paper';

// in src/Theme/Components/paper.ts — omhoog, dus absoluut
import { softShadow } from 'src/Theme/shadow';
```

## Type-only imports

```ts
import type { Project } from 'src/Definitions';
```

## Volgorde

1. third-party (`react`, `@mui/...`)
2. absolute `src/` imports
3. relatieve imports (`./`)

## Geen barrel files

Importeer direct uit de file, geen `index.ts` re-exports.
