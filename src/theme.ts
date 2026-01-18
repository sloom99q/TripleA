import { createTheme } from '@mantine/core';
import type { MantineTheme } from '@mantine/core';

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

  // Global styles for light and dark modes
  globalStyles: (theme: MantineTheme) => ({
    body: {
      fontFamily: 'Raleway, sans-serif', // <- force font
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      backgroundColor: 'var(--mantine-color-body)',
      color: 'var(--mantine-color-text)',
    },

    // Force Mantine Text component too
    '.mantine-Text-root': {
      fontFamily: 'Raleway, sans-serif',
      color: 'var(--mantine-color-text)',
    },
  }),
});

export default theme;
