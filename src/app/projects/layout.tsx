import type { Metadata } from "next";
import { PAGE_SEO_CONFIG, DEFAULT_OG_IMAGES } from "@/utils/seoConfig";

export const metadata: Metadata = {
  title: { absolute: PAGE_SEO_CONFIG.projects.title },
  description: PAGE_SEO_CONFIG.projects.description,
  keywords: PAGE_SEO_CONFIG.projects.keywords,
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: "/projects",
    siteName: "Triple A Interiors",
    title: PAGE_SEO_CONFIG.projects.title,
    description: PAGE_SEO_CONFIG.projects.description,
    images: DEFAULT_OG_IMAGES,
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
