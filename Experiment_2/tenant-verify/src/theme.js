import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#254439', // pine-teal
      light: '#2d5f6f',
      dark: '#1a2d29',
    },
    secondary: {
      main: '#B6BDBB', // ash-grey
      light: '#f0f0f0', // porcelain
      dark: '#89928E', // grey-olive
    },
    background: {
      default: '#F7F7F2', // porcelain
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A2D29', // jet-black
      secondary: '#B6BDBB', // ash-grey
    },
    success: {
      main: '#4CAF50',
    },
    warning: {
      main: '#FFC107',
    },
    error: {
      main: '#F44336',
    },
    info: {
      main: '#2196F3',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#1A2D29',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#1A2D29',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#1A2D29',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#1A2D29',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#1A2D29',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#1A2D29',
    },
    body1: {
      fontSize: '1rem',
      color: '#1A2D29',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#1A2D29',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '8px',
        },
        contained: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A2D29',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#254439',
          color: '#F7F7F2',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
