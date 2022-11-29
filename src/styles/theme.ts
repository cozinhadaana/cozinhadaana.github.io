import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'Montserrat',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#D10025',
      contrastText: '#F9F9F9',
      '800': '#A80000',
    },
    secondary: {
      main: '#FFA700',
    },
    background: {
      default: '#F4F4F4',
      paper: '#FFF',
    },
    text: {
      primary: '#1C1C1C',
    },
  },
});

export default theme;
