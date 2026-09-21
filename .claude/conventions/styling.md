# Styling conventies

## Primair: tss-react met MUI theme

`makeStyles` uit `tss-react/mui`, altijd met theme-callback:

```tsx
import { makeStyles } from 'tss-react/mui';
import { lightAccent } from 'src/colors';

const useStyles = makeStyles()(theme => ({
    root: {
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
    },
    avatar: {
        width: 48,
        height: 48,
        backgroundColor: lightAccent,
    },
}));

export default function MyComponent() {
    const { classes, cx } = useStyles();

    return <div className={classes.root}>...</div>;
}
```

- `useStyles` staat in dezelfde file als de component, tenzij het te groot wordt.
- Conditionele classes via `cx(classes.a, condition && classes.b)`.

## `sx` prop

Alleen voor one-off responsive overrides of korte tweaks — geen complexe style-objecten:

```tsx
<Box sx={{ mb: 2, fontWeight: 400 }} />
<Box mt={{ xs: 1, sm: 2 }} />
```

## Kleuren

Kleurconstanten uit `src/colors.ts`, nooit hardcoded hex in componenten.

## Responsive

MUI breakpoints, nooit eigen media queries:

```tsx
[theme.breakpoints.down('md')]: { flexDirection: 'column' }
```

## MUI varianten

Gebruik component-props (`variant`, `color`, `size`) in plaats van styles overriden:

```tsx
<Button variant="contained" color="primary" size="small" />
```

## Geen CSS modules

Geen `.module.css` files in dit project.

## Theme

Het theme is opgesplitst per onderwerp in `src/Theme/`; `theme.ts` doet alleen compositie.

```
src/Theme/
├── Components/     # één file per componentgroep: buttons.ts, paper.ts, table.ts
├── palette.ts      # PaletteOptions, mapt src/colors.ts op MUI-rollen
├── typography.ts   # TypographyVariantsOptions
├── shadow.ts       # schaduwtokens + overrideShadows()
├── sizes.ts        # layoutmaten in px
└── theme.ts        # createTheme + toewijzing van components/shadows
```

Elke file in `Components/` exporteert named `overrideMuiX(theme)`-functies die de override teruggeven:

```ts
import type { Theme } from '@mui/material/styles';

type Overrides = NonNullable<Theme['components']>;

export function overrideMuiButton(theme: Theme): Overrides['MuiButton'] {
    return {
        defaultProps: { disableElevation: true },
        styleOverrides: {
            root: { padding: theme.spacing(1, 2) },
        },
    };
}
```

`theme.ts` bouwt eerst het theme en hangt de overrides er daarna aan, zodat elke override het volledige theme als argument krijgt:

```ts
const theme = createTheme({ palette, typography });

theme.components = {
    MuiButton: overrideMuiButton(theme),
    MuiPaper: overrideMuiPaper(theme),
};

theme.shadows = overrideShadows();

export default theme;
```

- Meerdere verwante componenten mogen in één file (`buttons.ts` → `overrideMuiButton`, `overrideMuiIconButton`).
- Overrides zonder theme-afhankelijkheid houden lege parameters: `overrideMuiIconButton()`.
- Hardcode geen kleuren of maten in overrides — importeer uit `src/colors`, `src/Theme/sizes`, `src/Theme/shadow`.
