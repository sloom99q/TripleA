/**
 * Dynamic Project Page for Next.js App Router
 * 
 * Location: src/app/projects/[id]/page.tsx
 * 
 * This page:
 * - Uses Next.js dynamic routing with [id] parameter
 * - Shows individual project details with images and information
 * - Includes related projects and CTA
 * - Generates dynamic metadata for SEO and social sharing
 */

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Box } from "@mantine/core";
import ProjectHero from "@/components/pages/Project/ProjectHero";
import ProjectDetails from "@/components/pages/Project/ProjectDetails";
import { MoreProjects } from "@/components/pages/Project/MoreProjects";
import { CTASection } from "@/components/pages/About";
import { PageContainer } from "@/layout/PageContainer";
import { ProjectsData } from "@/mockups/ProjectsData";
import { JsonLd } from "@/components/JsonLd";
import { buildProjectLd, buildBreadcrumbLd } from "@/utils/structuredData";

const SITE_URL = "https://triple-a.ae";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

// Generate static params for all projects
export function generateStaticParams() {
  return ProjectsData.map((project) => ({
    id: project.id,
  }));
}

// Generate dynamic metadata for each project
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = ProjectsData.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  // Clean up title (remove newlines)
  const cleanTitle = project.title.replace(/\s+/g, ' ').trim();
  const pageTitle = `${cleanTitle} | Project Showcase`;
  const description = project.story || project.description || 
    `Discover the ${cleanTitle} project by Triple A Interiors. A premium interior fit-out solution delivered with innovation and precision.`;
  
  // Use the dedicated ogImage field for social sharing
  const projectImageUrl = project.ogImage 
    ? `${SITE_URL}${project.ogImage}` 
    : DEFAULT_OG_IMAGE;

  return {
    title: pageTitle,
    description: description,
    alternates: {
      canonical: `${SITE_URL}/projects/${resolvedParams.id}`,
    },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/projects/${resolvedParams.id}`,
      title: `${cleanTitle} | Triple A Interiors Project`,
      description: description,
      siteName: "Triple A Interiors",
      locale: "en_AE",
      images: [
        {
          url: projectImageUrl,
          width: 1200,
          height: 630,
          alt: `${cleanTitle} - Interior Fit-Out Project by Triple A Interiors`,
          type: "image/webp",
        },
      ],
      authors: ["Triple A Interiors"],
      tags: ["Interior Design", "Fit-Out", cleanTitle, project.client || ""],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cleanTitle} | Triple A Interiors Project`,
      description: description,
      images: [projectImageUrl],
    },
  };
}

/**
 * Dynamic Project Page Component
 */
export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const selectedProject = ProjectsData.find((p) => p.id === resolvedParams.id);

  // Return 404 page if project not found
  if (!selectedProject) {
    notFound();
  }

  const projectLd = buildProjectLd(selectedProject);
  const breadcrumbLd = buildBreadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    {
      name: selectedProject.title.replace(/\s+/g, " ").trim(),
      path: `/projects/${selectedProject.id}`,
    },
  ]);

  return (
    <>
      <JsonLd data={projectLd} />
      <JsonLd data={breadcrumbLd} />

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
