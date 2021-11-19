import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';


const theme = createTheme({
    palette: {
        neutral: {
            main: '#0d202a',
            contrastText: '#ffffff',
        },
    },
});


export default function ButtonLigth() {
    return (
        <ThemeProvider theme={theme}>
            <Button sx={{padding: '0.8rem 6.5rem', fontWeight: '600', fontSize: '0.8rem'}} color="neutral" variant="contained">
                Continuar
            </Button>
        </ThemeProvider>
    )
}


