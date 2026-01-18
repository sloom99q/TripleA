import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./theme";
import './index.css';
import { useState, lazy, Suspense } from "react";
import ColorSchemeContext from "./ColorSchemeContext";
import { MainLayout } from "@/layout";
import { initScrollShift } from "@/hooks/useScrollShift";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

// Lazy-loaded page components (code splitting)
const Home = lazy(() => import("@/pages/Home/HomePage"));
const About = lazy(() => import("@/pages/About/AboutPage"));
const ServicesPage = lazy(() => import("@/pages/Services/ServicesPage"));
const Projects = lazy(() => import("@/pages/Projects/ProjectsPage"));
const ProjectPage = lazy(() => import("@/pages/Project/ProjectPage"));
const ContactUs = lazy(() => import("@/pages/Contact/ContactPage"));

// Initialize scroll shift once at module level
initScrollShift();

// Wrapper component to use hooks that require Router context
function AppRoutes() {
  useSmoothScroll();
  
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export function App() {
  const [colorScheme, setColorScheme] = useState('light');

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      <MantineProvider theme={theme}>
        <BrowserRouter basename="/Dist-Preview">
          <AppRoutes />
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}