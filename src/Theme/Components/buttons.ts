import type { Theme } from '@mui/material/styles';

import { borderRadius } from 'src/Theme/sizes';

type Overrides = NonNullable<Theme['components']>;

export function overrideMuiButton(theme: Theme): Overrides['MuiButton'] {
    return {
        defaultProps: {
            disableElevation: true,
        },
        styleOverrides: {
            root: {
                borderRadius,
                padding: theme.spacing(1, 2),
            },
        },
    };
}

export function overrideMuiIconButton(): Overrides['MuiIconButton'] {
    return {
        styleOverrides: {
            root: {
                borderRadius,
            },
        },
    };
}
