'use client';

/**
 * Dynamic Project Page for Next.js App Router
 * 
 * Location: src/app/projects/[id]/page.tsx
 * 
 * This page:
 * - Uses Next.js dynamic routing with [id] parameter
 * - Shows individual project details with images and information
 * - Includes related projects and CTA
 */

import { notFound } from "next/navigation";
import { use } from "react";
import { Box } from "@mantine/core";
import ProjectHero from "@/components/pages/Project/ProjectHero";
import ProjectDetails from "@/components/pages/Project/ProjectDetails";
import { MoreProjects } from "@/components/pages/Project/MoreProjects";
import { CTASection } from "@/components/pages/About";
import { PageContainer } from "@/layout/PageContainer";
import { ProjectsData } from "@/mockups/ProjectsData";

/**
 * Dynamic Project Page Component
 */
export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const selectedProject = ProjectsData.find((p) => p.id === resolvedParams.id);

  // Return 404 page if project not found
  if (!selectedProject) {
    notFound();
  }

  return (
    <>
      {/* Semantic H1 for SEO */}
      <Box visibleFrom="xs" style={{ position: "absolute", left: "-9999px" }}>
        <h1>{selectedProject.title}</h1>
      </Box>

      {/* Project Hero Section */}
      <Box component="section" aria-label={`${selectedProject.title} project hero`}>
        <ProjectHero project={selectedProject} />
      </Box>

      <PageContainer>
        {/* Project Details */}
        <Box component="section" aria-label="Project details">
          <ProjectDetails projectId={selectedProject.id} />
        </Box>

        {/* More Projects Section */}
        <Box component="section" aria-label="More projects">
          <MoreProjects />
        </Box>
      </PageContainer>

      {/* Call-to-Action Section */}
      <Box component="section" aria-label="Call to action">
        <CTASection />
      </Box>
    </>
  );
}
