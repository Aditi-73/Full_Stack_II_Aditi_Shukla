import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#254439', // pine-teal
      light: '#3a5f54',
      dark: '#1a3a2f',
      contrastText: '#F7F7F2',
    },
    secondary: {
      main: '#1A2D29', // jet-black
      light: '#2d4a44',
      dark: '#0f1715',
      contrastText: '#F7F7F2',
    },
    background: {
      default: '#F7F7F2', // porcelain
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A2D29', // jet-black
      secondary: '#89928E', // grey-olive
      disabled: '#B6BDBB', // ash-grey
    },
    success: {
      main: '#10b981',
      light: '#d1fae5',
      dark: '#059669',
    },
    warning: {
      main: '#f59e0b',
      light: '#fef3c7',
      dark: '#d97706',
    },
    error: {
      main: '#ef4444',
      light: '#fee2e2',
      dark: '#dc2626',
    },
    info: {
      main: '#3b82f6',
      light: '#dbeafe',
      dark: '#1d4ed8',
    },
    divider: 'rgba(26, 45, 41, 0.12)',
    customColors: {
      jetBlack: '#1A2D29',
      pineTeal: '#254439',
      greyOlive: '#89928E',
      ashGrey: '#B6BDBB',
      porcelain: '#F7F7F2',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#1A2D29',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
      color: '#1A2D29',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#1A2D29',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#1A2D29',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
      color: '#1A2D29',
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.5,
      color: '#1A2D29',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#1A2D29',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
      color: '#1A2D29',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 20px',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 8px rgba(26, 45, 41, 0.1)',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(26, 45, 41, 0.2)',
          },
        },
        contained: {
          boxShadow: '0 2px 8px rgba(26, 45, 41, 0.15)',
        },
        sizeLarge: {
          padding: '12px 24px',
          fontSize: '1rem',
        },
        sizeMedium: {
          padding: '8px 16px',
          fontSize: '0.875rem',
        },
        sizeSmall: {
          padding: '6px 12px',
          fontSize: '0.75rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(26, 45, 41, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(26, 45, 41, 0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#F7F7F2',
            '&:hover': {
              backgroundColor: '#FFFFFF',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 12px rgba(26, 45, 41, 0.1)',
          borderRadius: 0,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
          boxShadow: '0 2px 12px rgba(26, 45, 41, 0.1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: '20px',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '12px',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
