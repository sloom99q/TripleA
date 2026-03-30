/**
 * Dynamic Blog Post Page (Server Component)
 * 
 * Location: src/app/blog/[slug]/page.tsx
 * 
 * This page:
 * - Uses dynamic routing for blog posts ([slug])
 * - Generates static params for build-time generation
 * - Remains a server component to enable generateStaticParams()
 * - Delegates rendering to BlogPostContent (client component)
 * 
 * Usage:
 * - Available at: /blog/post-title
 * - Pre-rendered at build time via generateStaticParams()
 */

import { notFound } from "next/navigation";
import { BlogPostContent } from "@/components/pages/Blog/BlogPostContent";
import { BlogPostsData, getBlogPostBySlug } from "@/mockups/BlogPostsData";

// Generate static params for build-time generation
export function generateStaticParams() {
  return BlogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post (including noindex for unpublished)
export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    robots: post.published ? 'index, follow' : 'noindex, nofollow',
  };
}

/**
 * Blog Post Page Component (Server Component)
 */
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
