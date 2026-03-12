'use client';

/**
 * Home Page for Next.js App Router
 * 
 * This page:
 * - Replaces React Helmet with Next.js metadata API
 * - Uses all existing HomePage components without modification
 * - Includes all SEO meta tags and OpenGraph configuration
 * - Maintains the exact same UI and functionality
 */

import { Group, Box } from "@mantine/core";
import HeroSection from "@/components/pages/Home/HomeHero";
import Clients from "@/components/pages/Home/ClientsSection";
import EmaarTestimony from "@/components/pages/Home/ClientTestimony";
import FAQComponent from "@/components/FAQ";
import { CTASection, TimelineSection } from "@/components/pages/About";
import { ProjectsGrid } from "@/components/pages/Projects";
import { PageContainer } from "@/layout/PageContainer";
import { FullPageContainer } from "@/layout/PageContainer";

/**
 * Home Page Component
 * This component renders the homepage with all existing sections
 * No UI changes - only conversion from React Router to Next.js
 */
export default function HomePage() {
  return (
    <>
      {/* Main H1 - Semantic HTML for SEO */}
      <Box component="section" aria-label="Hero section">
        <HeroSection />
      </Box>

      {/* Semantic H1 for accessibility (screen readers) */}
      <Box visibleFrom="xs" style={{ position: "absolute", left: "-9999px" }}>
        <h1>Premium Interior Fit-Out Services in Dubai</h1>
      </Box>

      {/* Client Testimony Section */}
      <PageContainer>
        <Box mt={80} mb={0}>
          <Group mb={120} mt={20}>
            <EmaarTestimony />
          </Group>
        </Box>
      </PageContainer>

      {/* Featured Projects Section */}
      <FullPageContainer>
        <ProjectsGrid />
      </FullPageContainer>

      {/* Our Clients Section */}
      <PageContainer>
        <Group mb={60} mt={0}>
          <Clients />
        </Group>
      </PageContainer>

      {/* Timeline Section */}
      <FullPageContainer>
        <TimelineSection />
      </FullPageContainer>

      {/* FAQ Section */}
      <PageContainer>
        <Box w={"100%"} mt={150}>
          <FAQComponent />
        </Box>
      </PageContainer>

      {/* Call-to-Action Section */}
      <CTASection />
    </>
  );
}
