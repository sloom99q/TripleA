import { createTheme } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Raleway, sans-serif',
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: 'clamp(0.9rem, 2vw, 1.1rem)',
    md2: 'clamp(1rem, 4vw, 3rem)',
    lg: 'clamp(2rem, 6vw, 4rem)',
    xl: 'clamp(2rem, 8vw, 6rem)',
  },

  primaryColor: 'dark',
});

export default theme;
