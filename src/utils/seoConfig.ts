/**
 * SEO Configuration utility for managing meta tags and OpenGraph data
 * Provides a reusable hook and utility functions for consistent SEO across pages
 */
// @ts-ignore
import ogImage from '@/assets/imgs/og-image.png';

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
export const DEFAULT_OG_IMAGE = `${ogImage}`; // Update with actual OG image path

/**
 * Create complete SEO metadata object with defaults
 */
export const createSEOMetadata = (config: Partial<SEOMetadata>): SEOMetadata => {
  return {
    title: config.title || DEFAULT_BRAND,
    description: config.description || 'Premium interior fit-out company in Dubai',
    ogTitle: config.ogTitle || config.title || DEFAULT_BRAND,
    ogDescription: config.ogDescription || config.description || 'Premium interior fit-out company in Dubai',
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
    title: 'About Us | Triple A Interiors - Interior Design & Fit-Out Dubai',
    description: 'Discover the story behind Triple A Interiors. Learn about our mission, values, and commitment to delivering exceptional interior fit-out solutions in Dubai since our founding.',
    ogType: 'website',
    keywords: 'about Triple A Interiors, interior design team Dubai, fit-out company Dubai, our story',
  }),

  services: createSEOMetadata({
    title: 'Interior Fit-Out Services in Dubai | Triple A Interiors',
    description: 'Explore our comprehensive interior fit-out services in Dubai. From commercial offices to luxury residences, we deliver bespoke solutions with premium quality and precision.',
    ogType: 'website',
    keywords: 'interior fit-out services, commercial fit-out Dubai, residential design, office renovation, interior services',
  }),

  projects: createSEOMetadata({
    title: 'Our Projects | Triple A Interiors - Interior Design Portfolio Dubai',
    description: 'View our completed interior fit-out projects across Dubai. Discover how we transform commercial and residential spaces with innovative design and flawless execution.',
    ogType: 'website',
    keywords: 'interior projects Dubai, fit-out portfolio, interior design examples, completed projects, case studies',
  }),

  contact: createSEOMetadata({
    title: 'Contact Us | Triple A Interiors - Get Your Project Started',
    description: 'Get in touch with Triple A Interiors for premium interior fit-out services in Dubai. Let\'s discuss your project and bring your vision to life. Call or visit us today.',
    ogType: 'website',
    keywords: 'contact interior designer Dubai, get quote, interior fit-out inquiry, contact Triple A',
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
