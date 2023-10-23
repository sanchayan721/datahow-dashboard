import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#da291c',
      contrastText: '#fff',
    },
    secondary: {
      main: '#495867',
      contrastText: '#fff',
    },
    background: {
      paper: '#f5f5f5',
      default: '#eeeeee',
    },
    text: {
      primary: '#171717',
      secondary: '#fff',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },

    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },

    h3: {
      fontSize: '2rem',
      fontWeight: 700,
    },

    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },

    h5: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },

    h6: {
      fontSize: '1rem',
      fontWeight: 700,
    },

    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
    },

    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },

    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },

    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },

    button: {
      fontSize: '1rem',
      fontWeight: 500,
    },

    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },

    overline: {
      fontSize: '0.75rem',
      fontWeight: 700,
    },
  },
});

export default theme;