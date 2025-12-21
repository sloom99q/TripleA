import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./theme";
import './index.css';
import HeroSection from "./pages/HeroSection";
import { useState } from "react";
import ColorSchemeContext from "./ColorSchemeContext";
import Navbar from "./components/Navbar";
import { ClientsSection } from "./components/ClientsSection";
import Clients from "./components/ClientsSection";

export function App() {
  const [colorScheme, setColorScheme] = useState('light');

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      <MantineProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
            <Clients />
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}