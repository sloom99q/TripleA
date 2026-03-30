// Blog SEO Configuration
// Add this to your seoConfig.ts for complete SEO coverage

export const BLOG_SEO_CONFIG = {
  // Main blog listing page
  blogIndex: {
    title: "Interior Design & Construction Blog | Triple A Interiors",
    description: "Expert blog on interior fit-out, design trends, MEP contracting, and Dubai construction. Get insights on renovation costs, materials, and authority approvals.",
    keywords: [
      "interior design blog",
      "fit-out blog Dubai",
      "construction blog UAE",
      "interior design tips",
      "renovation guide",
      "MEP contracting",
      "design trends 2025"
    ],
    ogTitle: "Interior Design & Construction Blog | Triple A Interiors",
    ogDescription: "Expert insights on interior fit-out, design trends, and Dubai construction regulations.",
  },

  // Individual blog posts
  blogPosts: {
    "complete-guide-interior-fit-out-dubai": {
      title: "Complete Guide to Interior Fit-Out in Dubai: Process, Timeline & Costs",
      description: "Comprehensive guide to interior fit-out in Dubai, covering the process, timeline (12-24 weeks), cost breakdown (AED 500-5000/sqm), authority approvals, and expert tips.",
      keywords: [
        "interior fit-out Dubai",
        "fit-out process",
        "fit-out timeline",
        "fit-out costs",
        "Dubai fit-out contractor",
        "interior renovation Dubai",
        "MEP installation",
        "finishing works"
      ]
    },
    "mep-contracting-complete-overview": {
      title: "MEP Contracting Explained: Mechanical, Electrical & Plumbing Systems",
      description: "In-depth guide to MEP (Mechanical, Electrical, Plumbing) contracting, including HVAC systems, electrical design, plumbing, integration challenges, and Dubai compliance.",
      keywords: [
        "MEP contracting",
        "mechanical systems",
        "electrical systems",
        "plumbing systems",
        "HVAC design",
        "MEP Dubai",
        "building systems",
        "MEP installation"
      ]
    },
    "interior-design-trends-2025": {
      title: "Interior Design Trends 2025: What's New and Timeless",
      description: "Explore 2025 interior design trends including sustainable design, biophilic design, maximalism, warm neutrals, technology integration, and design principles that endure.",
      keywords: [
        "interior design trends 2025",
        "interior design ideas",
        "modern interior design",
        "sustainable design",
        "biophilic design",
        "interior style ideas",
        "home design trends",
        "contemporary design"
      ]
    },
    "renovation-costs-budgeting-guide": {
      title: "Renovation Costs 2025: Budgeting Guide for Your Interior Project",
      description: "Complete breakdown of renovation costs per square meter, budget allocation, cost-saving strategies, hidden costs, and financing options for interior projects.",
      keywords: [
        "renovation costs",
        "interior design costs",
        "renovation budget",
        "cost estimation",
        "fit-out costs",
        "interior renovation prices",
        "construction costs Dubai",
        "project budgeting"
      ]
    },
    "wall-finishes-cladding-options-guide": {
      title: "Wall Finishes & Cladding: Complete Guide to Modern Options",
      description: "Comprehensive guide to wall finishes and cladding options including paint, stone, tile, wood, plaster, metal, fabric, and specialty finishes with costs and maintenance.",
      keywords: [
        "wall finishes",
        "wall cladding",
        "wall treatments",
        "interior cladding",
        "wall materials",
        "paint finishes",
        "stone cladding",
        "tile cladding"
      ]
    },
    "flooring-solutions-comparison": {
      title: "Complete Guide to Flooring Solutions for Every Space",
      description: "Detailed comparison of flooring options including tiles, hardwood, vinyl, laminate, concrete, epoxy, cork, and bamboo with durability, costs, and applications.",
      keywords: [
        "flooring options",
        "floor types",
        "flooring materials",
        "tile flooring",
        "hardwood flooring",
        "vinyl flooring",
        "laminate flooring",
        "epoxy flooring"
      ]
    },
    "ceiling-design-acoustic-solutions": {
      title: "Ceiling Design & Acoustic Solutions for Modern Interiors",
      description: "Guide to ceiling design options including false ceilings, acoustic systems, wooden ceilings, exposed ceilings, and acoustic treatments for sound control.",
      keywords: [
        "ceiling design",
        "acoustic ceiling",
        "false ceiling",
        "ceiling options",
        "sound absorption",
        "acoustic solutions",
        "ceiling materials",
        "ceiling systems"
      ]
    },
    "authority-approvals-dubai-fit-out": {
      title: "Navigate Authority Approvals for Interior Fit-Out in Dubai",
      description: "Complete guide to Dubai authority approvals for fit-out projects: Dubai Municipality, DEWA, Civil Defence, Health Department processes, timelines, and costs.",
      keywords: [
        "Dubai fit-out approvals",
        "Dubai Municipality approval",
        "DEWA approval",
        "building permits Dubai",
        "fire safety approval",
        "authority approvals",
        "fit-out permits",
        "construction permits Dubai"
      ]
    }
  }
};

// Implementation example for dynamic metadata in Next.js 13+
// Add to individual blog post pages:

/*
import { BLOG_SEO_CONFIG } from '@/utils/seoConfig';
import { Metadata } from 'next';

export async function generateMetadata({ params }): Promise<Metadata> {
  const config = BLOG_SEO_CONFIG.blogPosts[params.slug];
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      url: `https://triplea-interiors.com/blog/${params.slug}`,
      type: 'article',
    },
    robots: 'index, follow',
  };
}
*/

// Google Analytics Events to track blog engagement
export const BLOG_ANALYTICS_EVENTS = {
  ARTICLE_VIEWED: 'article_viewed',
  BLOG_PAGE_VIEWED: 'blog_page_viewed',
  ARTICLE_SHARED: 'article_shared',
  CTA_CLICKED: 'blog_cta_clicked',
  TIME_ON_PAGE: 'blog_time_on_page',
  SEARCH_USED: 'blog_search_used',
  CATEGORY_FILTERED: 'blog_category_filtered',
};

// Internal linking strategy
export const BLOG_INTERNAL_LINKS = {
  "complete-guide-interior-fit-out-dubai": [
    "mep-contracting-complete-overview",
    "authority-approvals-dubai-fit-out",
    "renovation-costs-budgeting-guide"
  ],
  "mep-contracting-complete-overview": [
    "complete-guide-interior-fit-out-dubai",
    "ceiling-design-acoustic-solutions",
  ],
  "interior-design-trends-2025": [
    "wall-finishes-cladding-options-guide",
    "flooring-solutions-comparison",
    "ceiling-design-acoustic-solutions"
  ],
  "renovation-costs-budgeting-guide": [
    "complete-guide-interior-fit-out-dubai",
    "wall-finishes-cladding-options-guide",
    "flooring-solutions-comparison"
  ],
  "wall-finishes-cladding-options-guide": [
    "flooring-solutions-comparison",
    "interior-design-trends-2025",
    "renovation-costs-budgeting-guide"
  ],
  "flooring-solutions-comparison": [
    "wall-finishes-cladding-options-guide",
    "renovation-costs-budgeting-guide",
    "interior-design-trends-2025"
  ],
  "ceiling-design-acoustic-solutions": [
    "mep-contracting-complete-overview",
    "interior-design-trends-2025"
  ],
  "authority-approvals-dubai-fit-out": [
    "complete-guide-interior-fit-out-dubai",
    "mep-contracting-complete-overview"
  ]
};
