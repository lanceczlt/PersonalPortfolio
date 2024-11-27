import { createTheme } from '@mui/material/styles';

// Define a light theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1e3a8a', // Darker blue for primary elements
    },
    secondary: {
      main: '#0f766e', // Teal shade for accents
    },
    background: {
      default: '#f3f4f6', // Light gray for background
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b', // Darker gray for text
      secondary: '#000000',
    },
    footerText: {
      primary: '#1e293b', // Darker gray for footer text,
    },
  },
  typography: {
    fontFamily: 'Montserrat, Roboto, sans-serif',
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '0.5px',
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: '0.3px',
    },
    h5: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.7,
      letterSpacing: '0.1px',
    },
  },
});

// Refined dark theme with better contrast
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light blue for primary elements to contrast against dark background
    },
    secondary: {
      main: '#80cbc4', // Softer teal for accents with good contrast
    },
    background: {
      default: '#121212', // Darker background for a true dark mode feel
      paper: '#1e1e1e', // Slightly lighter dark for paper components
    },
    text: {
      primary: '#e0e0e0', // Light gray for primary text for better readability
      secondary: '#b0bec5', // Softer gray for secondary text
    },
    footerText: {
      primary: '#000000', // Darker gray for footer text,
    },
  },
  typography: {
    fontFamily: 'Montserrat, Roboto, sans-serif',
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '0.5px',
      color: '#ffffff', // Ensure headings are white for contrast
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: '0.3px',
      color: '#f5f5f5', // Use off-white for sub-headings
    },
    h5: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
      fontSize: '1.5rem',
      color: '#e0e0e0', // Keep it light for visibility
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.7,
      letterSpacing: '0.1px',
      color: '#cfd8dc', // Light gray for body text
    },
  },
});

export { lightTheme, darkTheme };
