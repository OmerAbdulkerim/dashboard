import { createTheme } from '@mui/material';
import typography from './typography';
//#2c2d34 - default
//#1e1f24 - paper

const theme = createTheme({
  palette: {
    background: {
      default: '#2c2d34',
      paper: 'rgba(135, 119, 127, 0.15)',
      dashboardLayout: 'linear-gradient(0deg, rgba(38,34,60,1) 0%, rgba(28,30,41,1) 100%)',
    },
    primary: {
      contrastText: '#ffffff',
      main: '#131516'
    },
    text: {
      primary: '#ffffff',
      secondary: '#6b778c'
    },
    action: {
      disabled: 'white',
    }
  },
  overrides: {
    MuiButton: {
      label: {
        color: '#f1f1f1'
      }
    }
  },
  'input:disabled': {
    color: 'white'
  },
  typography,
});

export default theme;