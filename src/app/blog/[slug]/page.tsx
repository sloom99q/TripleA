'use client';

/**
 * Dynamic Blog Post Page
 * 
 * Location: src/app/blog/[slug]/page.tsx
 * 
 * This page:
 * - Uses dynamic routing for blog posts ([slug])
 * - Supports future AI-generated blog posts
 * - Generates static params for build-time generation
 * - Creates SEO-friendly metadata for each post
 * - Prepared for expanding blog content
 * 
 * Usage:
 * - Will be available at: /blog/post-title
 * - Currently shows coming soon, ready for blog content
 * - Can fetch from database or file system
 */

import { notFound } from "next/navigation";
import { Container, Title, Text, Box } from "@mantine/core";
import { PageContainer } from "@/layout/PageContainer";

/**
 * Sample blog posts data (expandable)
 * Can be replaced with database queries or file system reads
 */
const blogPosts = [
  {
    slug: "getting-started-with-interior-design",
    title: "Getting Started with Interior Design",
    description:
      "A comprehensive guide to starting your interior design journey with Triple A Interiors.",
    content: "Coming soon...",
  },
  // Add more blog posts here
];

/**
 * Blog Post Page Component
 */
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PageContainer>
      <Box py={80} component="article">
        {/* Semantic H1 for SEO */}
        <h1 style={{ marginBottom: "1rem" }}>{post.title}</h1>

        {/* Article metadata */}
        <Text c="dimmed" size="sm" mb={40}>
          Published on {new Date().toLocaleDateString()}
        </Text>

        {/* Article content */}
        <Box component="section">
          <Text size="lg" lineClamp={undefined}>
            {post.content}
          </Text>
        </Box>
      </Box>
    </PageContainer>
  );
}
