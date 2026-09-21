import type { PaletteOptions } from '@mui/material/styles';

import {
    accent,
    black,
    darkAccent,
    darkGrey,
    error,
    lightAccent,
    lightGrey,
    offWhite,
    success,
    warning,
    white,
} from 'src/colors';

const palette: PaletteOptions = {
    primary: {
        main: accent,
        light: lightAccent,
        dark: darkAccent,
        contrastText: white,
    },
    error: { main: error },
    warning: { main: warning },
    success: { main: success },
    background: {
        default: offWhite,
        paper: white,
    },
    text: {
        primary: black,
        secondary: darkGrey,
    },
    divider: lightGrey,
};

export default palette;
