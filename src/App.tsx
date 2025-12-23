import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./theme";
import './index.css';
import HeroSection from "./components/HeroSection";
import { useState } from "react";
import ColorSchemeContext from "./ColorSchemeContext";
import Navbar from "./components/Navbar";
import { ClientsSection } from "./components/ClientsSection";
import Clients from "./components/ClientsSection";
import EmaarTestimony from "./components/EmaarTestimony";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import { useScrollShift } from "@/hooks/useScrollShift";
import Services from "./pages/Services";
import ServicesRow from "./components/ServicesRow";

export function App() {
  const [colorScheme, setColorScheme] = useState('light');
  useScrollShift();

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      <MantineProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/services" element={<ServicesRow />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          {/* <EmaarTestimony />
            <Clients /> */}
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}