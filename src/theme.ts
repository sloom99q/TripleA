import { createTheme } from '@mantine/core';
import type { MantineTheme } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Raleway, sans-serif',
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
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
