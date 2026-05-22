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
 * - Includes comprehensive Open Graph metadata for social sharing
 * 
 * Usage:
 * - Available at: /blog/post-title
 * - Pre-rendered at build time via generateStaticParams()
 */

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BlogPostContent } from "@/components/pages/Blog/BlogPostContent";
import { BlogPostsData, getBlogPostBySlug } from "@/mockups/BlogPostsData";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://triple-a.ae";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

// Generate static params for build-time generation
export function generateStaticParams() {
  return BlogPostsData.filter((post) => post.published).map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post (including noindex for unpublished)
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const pageTitle = post.title;
  const description = post.description;

  return {
    title: pageTitle,
    description: description,
    authors: [{ name: post.author }],
    robots: 'index, follow',
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      title: pageTitle,
      description: description,
      siteName: "Triple A Interiors",
      locale: "en_AE",
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 723,
          alt: `${pageTitle} - Triple A Interiors Blog`,
          type: "image/png",
        },
      ],
      publishedTime: post.publishDate,
      authors: [post.author],
      tags: [post.category || "Interior Design", "Fit-Out", "Dubai"],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: description,
      images: [OG_IMAGE_URL],
    },
  };
}

/**
 * Blog Post Page Component (Server Component)
 */
export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post || !post.published) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    image: OG_IMAGE_URL,
    articleSection: post.category || "Interior Design",
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Triple A Interiors",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/onlyLogoBlack.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <BlogPostContent post={post} />
    </>
  );
}
