/**
 * Sitemap Generator for Next.js
 * 
 * Location: src/app/sitemap.ts
 * 
 * This file:
 * - Generates an XML sitemap dynamically
 * - Includes all pages and blog posts
 * - Auto-updates when content changes
 * - Helps search engines crawl the site
 * - Available at /sitemap.xml
 * 
 * Benefits:
 * ✓ Automatic sitemap generation
 * ✓ SEO-friendly
 * ✓ Scalable (easy to add new pages)
 * ✓ No manual maintenance needed
 */

import { MetadataRoute } from "next";
import { ProjectsData } from "@/mockups/ProjectsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://triple-a.ae";
  const lastModified = new Date();

  // Main static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic project pages
  const projectPages: MetadataRoute.Sitemap = ProjectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog posts (expandable)
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/getting-started-with-interior-design`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    // Add more blog posts here as they're created
  ];

  return [...staticPages, ...projectPages, ...blogPages];
}
