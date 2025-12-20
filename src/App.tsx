import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./theme";
import './index.css';
import HeroSection from "./pages/HeroSection";
import { useState } from "react";
import ColorSchemeContext from "./ColorSchemeContext";

export function App() {
  const [colorScheme, setColorScheme] = useState('light');

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      <MantineProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            {/* <Route path="/two" element={<HeroSectionTwo />} /> */}
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}