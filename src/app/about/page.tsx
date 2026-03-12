'use client';

'use client';

/**
 * About Page for Next.js App Router
 * 
 * Location: src/app/about/page.tsx
 * 
 * This page:
 * - Uses Next.js metadata API for SEO
 * - Imports all existing About page components unchanged
 * - Maintains full functionality and styling
 * - Includes proper H1 semantic HTML
 */

import type { Metadata } from "next";
import { Box } from "@mantine/core";
import AboutHero from "@/components/pages/About/AboutHero";
import ValuesSection from "@/components/pages/About/ValuesSection";
import MissionVisionSection from "@/components/pages/About/MissionVisionSection";
import WhyChooseUsSection from "@/components/pages/About/WhyChooseUsSection";
import TimelineSection from "@/components/pages/About/TimelineSection";
import CTASection from "@/components/pages/About/CTASection";
import { PageContainer } from "@/layout/PageContainer";
import { FullPageContainer } from "@/layout/PageContainer";

/**
 * About Page Component
 */
export default function AboutPage() {
  return (
    <>
      {/* Semantic H1 for SEO */}
      <Box visibleFrom="xs" style={{ position: "absolute", left: "-9999px" }}>
        <h1>About Triple A Interiors - Dubai's Premier Interior Design Company</h1>
      </Box>

      {/* Hero Section */}
      <Box component="section" aria-label="About hero section">
        <AboutHero />
      </Box>

      {/* Mission & Vision Section */}
      <PageContainer>
        <Box mt={40} mb={80}>
          <MissionVisionSection />
        </Box>
      </PageContainer>

      {/* Core Values Section */}
      <Box mb={0}>
        <ValuesSection />
      </Box>

      {/* Why Choose Us Section */}
      <PageContainer>
        <Box mb={0}>
          <WhyChooseUsSection />
        </Box>
      </PageContainer>

      {/* Timeline Section */}
      <FullPageContainer>
        <TimelineSection />
      </FullPageContainer>

      {/* Call-to-Action Section */}
      <CTASection />
    </>
  );
}
