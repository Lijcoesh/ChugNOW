import { createTheme } from '@mui/material/styles';

import { overrideMuiButton, overrideMuiIconButton } from './Components/buttons';
import { overrideMuiPaper } from './Components/paper';
import palette from './palette';
import overrideShadows from './shadow';
import { borderRadius } from './sizes';
import typography from './typography';

const theme = createTheme({
    palette,
    typography,
    shape: {
        borderRadius,
    },
});

theme.components = {
    MuiButton: overrideMuiButton(theme),
    MuiIconButton: overrideMuiIconButton(),
    MuiPaper: overrideMuiPaper(theme),
};

theme.shadows = overrideShadows();

export default theme;
