// ColorSchemeContext.ts file
import { createContext } from 'react';

interface ColorSchemeContextType {
  colorScheme: 'light' | 'dark';
  onChange: (value: 'light' | 'dark') => void;
}

export default createContext<ColorSchemeContextType | null>(null);
