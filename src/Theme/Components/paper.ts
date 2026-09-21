import type { Theme } from '@mui/material/styles';

import { softShadow } from 'src/Theme/shadow';

type Overrides = NonNullable<Theme['components']>;

export function overrideMuiPaper(theme: Theme): Overrides['MuiPaper'] {
    return {
        defaultProps: {
            elevation: 0,
        },
        styleOverrides: {
            root: {
                backgroundImage: 'none',
            },
            outlined: {
                border: `1px solid ${theme.palette.divider}`,
            },
            elevation1: {
                boxShadow: softShadow,
            },
        },
    };
}
