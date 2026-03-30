/**
 * Sitemap Generator for Next.js
 * 
 * Location: src/app/sitemap.ts
 * 
 * This file:
 * - Generates an XML sitemap dynamically
 * - Includes all static pages with appropriate priorities
 * - Includes only PUBLISHED blog posts
 * - Includes all project pages with proper slugs
 * - Auto-updates when content changes
 * - Helps search engines crawl the site
 * - Available at /sitemap.xml
 * 
 * Static Page Priorities:
 * - Homepage: 1.0
 * - Services: 1.0
 * - About, Projects: 0.9
 * - Contact, Blog: 0.8
 * 
 * Dynamic Page Priorities:
 * - Project pages: 0.8
 * - Blog posts: 0.7
 */

import { MetadataRoute } from "next";
import { ProjectsData } from "@/mockups/ProjectsData";
import { getPublishedBlogPosts } from "@/mockups/BlogPostsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://triple-a.ae";
  const currentDate = new Date();

  // Main static pages with appropriate priorities
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Dynamic project pages - using actual project IDs/slugs
  const projectPages: MetadataRoute.Sitemap = ProjectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog posts - ONLY published posts with their actual dates
  const publishedPosts = getPublishedBlogPosts();
  const blogPages: MetadataRoute.Sitemap = publishedPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
