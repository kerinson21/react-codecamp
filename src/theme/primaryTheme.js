import { createTheme } from '@mui/material/styles';


export const primaryTheme = createTheme({
  palette: {
    primary: {
      light: '#b26a00',
      main: '#ff9800',
      dark: '#ffac33',
      contrastText: '#fff',
    },
    secondary: {
      light: '#8ab200',
      main: '#c6ff00',
      dark: '#d1ff33',
      contrastText: '#000',
    },
    error: {
      light: '#ab003c',
      main: '#f5005',
      dark: '#f73378',
      contrastText: '#000',
    },
  },
});