'use client';

'use client';

/**
 * Projects Page for Next.js App Router
 * 
 * Location: src/app/projects/page.tsx
 * 
 * This page:
 * - Uses Next.js metadata API for SEO
 * - Displays all completed projects
 * - Shows project portfolio and case studies
 */

import { Box } from "@mantine/core";
import ProjectsHero from "@/components/pages/Projects/ProjectsHero";
import ProjectsGrid from "@/components/pages/Projects/ProjectsGrid";
import { CTASection } from "@/components/pages/About";
import { FullPageContainer } from "@/layout/PageContainer";

/**
 * Projects Page Component
 */
export default function ProjectsPage() {
  return (
    <>
      {/* Semantic H1 for SEO */}
      <Box visibleFrom="xs" style={{ position: "absolute", left: "-9999px" }}>
        <h1>Our Interior Fit-Out Projects in Dubai</h1>
      </Box>

      {/* Hero Section */}
      <Box component="section" aria-label="Projects hero section">
        <ProjectsHero />
      </Box>

      {/* Projects Grid */}
      <FullPageContainer>
        <Box component="section" aria-label="Projects grid" mt={80} mb={80}>
          <ProjectsGrid noBg />
        </Box>
      </FullPageContainer>

      {/* Call-to-Action Section */}
      <Box component="section" aria-label="Call to action" mb={60}>
        <CTASection />
      </Box>
    </>
  );
}
