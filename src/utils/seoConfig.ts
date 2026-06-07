/**
 * SEO Configuration utility for managing meta tags and OpenGraph data
 * Provides a reusable hook and utility functions for consistent SEO across pages
 */

export interface SEOMetadata {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'business.business';
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  keywords?: string;
  author?: string;
  robots?: string;
}

export const BASE_URL = 'https://triple-a.ae';
export const DEFAULT_BRAND = 'Triple A Interiors';
export const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

/**
 * Shared Open Graph image array for per-page metadata. Next.js shallow-merges
 * metadata: when a page sets its own `openGraph`, the parent's `images` are NOT
 * inherited, so each page that overrides openGraph must re-declare images or it
 * ships with no social preview image. Dimensions match the real og-image.png.
 */
export const DEFAULT_OG_IMAGES = [
  {
    url: '/og-image.png',
    width: 1200,
    height: 723,
    alt: 'Triple A Interiors — Luxury Interior Fit-Out in Dubai',
  },
];
export const DEFAULT_DESCRIPTION = "Transform your space with Triple A Interiors - Dubai's leading interior fit-out company specializing in commercial and residential design. Premium craftsmanship and innovative solutions.";

/**
 * Create complete SEO metadata object with defaults
 */
export const createSEOMetadata = (config: Partial<SEOMetadata>): SEOMetadata => {
  return {
    title: config.title || DEFAULT_BRAND,
    description: config.description || DEFAULT_DESCRIPTION,
    ogTitle: config.ogTitle || config.title || DEFAULT_BRAND,
    ogDescription: config.ogDescription || config.description || DEFAULT_DESCRIPTION,
    ogImage: config.ogImage || DEFAULT_OG_IMAGE,
    ogType: config.ogType || 'website',
    ogUrl: config.ogUrl || BASE_URL,
    twitterCard: config.twitterCard || 'summary_large_image',
    canonical: config.canonical,
    keywords: config.keywords,
    author: config.author || DEFAULT_BRAND,
    robots: config.robots || 'index, follow',
  };
};

/**
 * Page-specific SEO configurations
 */
export const PAGE_SEO_CONFIG = {
  home: createSEOMetadata({
    title: 'Triple A Interiors | Premium Interior Fit-Out Company in Dubai',
    description: 'Transform your space with Triple A Interiors - Dubai\'s leading interior fit-out company specializing in commercial and residential design. Premium craftsmanship and innovative solutions.',
    ogType: 'website',
    keywords: 'interior fit-out Dubai, interior design Dubai, office fit-out, residential design, interior company UAE',
  }),

  about: createSEOMetadata({
    title: 'About Triple A Interiors | Dubai Interior Fit-Out Company',
    description: 'Learn about Triple A Interiors — a Dubai interior fit-out and turnkey company delivering luxury commercial and residential interiors across the UAE since 2015.',
    ogType: 'website',
    keywords: 'about Triple A Interiors, interior fit-out company Dubai, turnkey contractor UAE',
  }),

  services: createSEOMetadata({
    title: 'Interior Fit-Out Services in Dubai | Triple A Interiors',
    description: 'Interior fit-out, MEP, renovations, ceilings, flooring and authority approvals in Dubai for commercial and residential spaces — delivered end to end.',
    ogType: 'website',
    keywords: 'interior fit-out services Dubai, MEP contracting, renovation, commercial fit-out, residential fit-out',
  }),

  projects: createSEOMetadata({
    title: 'Interior Fit-Out Projects in Dubai | Triple A Interiors',
    description: 'Explore completed interior fit-out and renovation projects by Triple A Interiors across Dubai, Sharjah and the UAE — for clients including Emaar, Meraas and Wood Group.',
    ogType: 'website',
    keywords: 'interior fit-out projects Dubai, fit-out portfolio, case studies, completed projects UAE',
  }),

  contact: createSEOMetadata({
    title: 'Contact Triple A Interiors | Dubai Interior Fit-Out',
    description: 'Contact Triple A Interiors for interior fit-out and renovation in Dubai. Call +971 58 550 0359 or request a free quote and consultation for your project.',
    ogType: 'website',
    keywords: 'contact interior fit-out Dubai, get a quote, fit-out consultation, Triple A Interiors',
  }),
};

/**
 * Generate dynamic project page SEO metadata
 */
export const createProjectSEOMetadata = (project: {
  title: string;
  description?: string;
  story?: string;
  image?: string;
  id: string;
}) => {
  return createSEOMetadata({
    title: `${project.title} | Triple A Interiors - Project Showcase`,
    description: project.story || project.description || `Discover the ${project.title} project by Triple A Interiors. A premium interior fit-out solution delivered with innovation and precision.`,
    ogImage: project.image || DEFAULT_OG_IMAGE,
    ogType: 'article',
    ogUrl: `${BASE_URL}/project/${project.id}`,
    keywords: `${project.title}, interior project, fit-out project, Dubai interior design`,
  });
};
