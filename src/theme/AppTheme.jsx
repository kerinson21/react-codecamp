import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { primaryTheme } from './primaryTheme';


export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={primaryTheme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
     <CssBaseline />
        { children }
    </ThemeProvider>
  )
}
