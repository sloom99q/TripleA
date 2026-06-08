/**
 * Centralised Schema.org / JSON-LD structured data for Triple A Interiors.
 *
 * Single source of truth for the entity @id graph so that every page's
 * structured data (FAQPage, Service, CreativeWork, BlogPosting, BreadcrumbList)
 * can cross-reference the same Organization / WebSite / LocalBusiness nodes via
 * @id. This is what lets Google, ChatGPT, Perplexity, Gemini and Claude resolve
 * the whole site to one consistent business entity and cite it confidently.
 *
 * All facts below are sourced from the repository (footer NAP, AboutData,
 * SocialsData, ProjectsData). Do NOT add unverifiable claims (ratings, employee
 * counts, fabricated coordinates) here — structured data must be truthful for
 * E-E-A-T. Owner-supplied values are marked with TODO(owner).
 */

export const SITE_URL = "https://triple-a.ae";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOCALBUSINESS_ID = `${SITE_URL}/#localbusiness`;

const PHONE = "+971585500359";
const EMAIL = "info@triple-a.ae";
const LOGO_URL = `${SITE_URL}/onlyLogoBlack.png`;
const IMAGE_URL = `${SITE_URL}/og-image.png`;
const INSTAGRAM_URL = "https://www.instagram.com/aaa_fitout/";
const MAP_URL = "https://maps.app.goo.gl/zpCnixRcZfz3HkoG9";

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress:
    "Fronds Building, M06, Sheikh Rashid Road, Al Garhoud",
  addressLocality: "Dubai",
  addressRegion: "Dubai",
  postalCode: "",
  addressCountry: "AE",
} as const;

// Real hours from the site footer (Mon–Fri 9am–5pm, weekend closed).
const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
];

// Cities/emirates with delivered projects (ProjectsData) plus national reach.
const AREA_SERVED = [
  { "@type": "City", name: "Dubai" },
  { "@type": "City", name: "Sharjah" },
  { "@type": "City", name: "Ras Al Khaimah" },
  { "@type": "Country", name: "United Arab Emirates" },
];

const KNOWS_ABOUT = [
  "Interior fit-out",
  "Turnkey interior solutions",
  "MEP contracting",
  "Commercial fit-out",
  "Residential fit-out",
  "Office renovation",
  "Villa renovation",
  "Authority approvals (Dubai Municipality, DEWA, Civil Defence)",
  "Ceiling works",
  "Wall finishes and cladding",
  "Flooring solutions",
  "Joinery and custom cabinetry",
];

/**
 * Root entity graph emitted once in the root layout <head>.
 */
export const organizationGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Triple A Interiors",
      legalName: "Triple A Interior Fit-Out",
      alternateName: ["AAA", "AAA Fit-Out", "Triple A Fit-Out"],
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: LOGO_URL,
        contentUrl: LOGO_URL,
        caption: "Triple A Interiors",
      },
      image: IMAGE_URL,
      email: EMAIL,
      telephone: PHONE,
      foundingDate: "2015",
      description:
        "Triple A Interiors is a Dubai-based interior fit-out and turnkey contractor delivering luxury commercial and residential interiors, MEP, renovations and authority approvals across the UAE.",
      address: ADDRESS,
      areaServed: AREA_SERVED,
      knowsAbout: KNOWS_ABOUT,
      sameAs: [INSTAGRAM_URL],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: PHONE,
          email: EMAIL,
          contactType: "sales",
          areaServed: "AE",
          availableLanguage: ["English", "Arabic"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: "Triple A Interiors",
      url: `${SITE_URL}/`,
      inLanguage: "en-AE",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": ["GeneralContractor", "LocalBusiness"],
      "@id": LOCALBUSINESS_ID,
      name: "Triple A Interiors",
      image: IMAGE_URL,
      logo: LOGO_URL,
      url: `${SITE_URL}/`,
      telephone: PHONE,
      email: EMAIL,
      priceRange: "$$$",
      currenciesAccepted: "AED",
      paymentAccepted: "Cash, Bank Transfer, Cheque",
      address: ADDRESS,
      // TODO(owner): add exact "geo" { latitude, longitude } from your Google
      // Business Profile for precise map placement. hasMap below already points
      // to the verified place, so this is an enhancement, not a blocker.
      hasMap: MAP_URL,
      openingHoursSpecification: OPENING_HOURS,
      areaServed: AREA_SERVED,
      knowsAbout: KNOWS_ABOUT,
      sameAs: [INSTAGRAM_URL],
      parentOrganization: { "@id": ORG_ID },
    },
  ],
};

/**
 * FAQPage node built from the on-page FAQ data. Must be emitted from a server
 * component (the FAQ UI is a client component) so crawlers see it without JS.
 */
export function buildFaqPageLd(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList for any page. Pass ordered crumbs (name + absolute-or-relative
 * path). The last crumb is the current page.
 */
export function buildBreadcrumbLd(
  crumbs: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.path.startsWith("http") ? c.path : `${SITE_URL}${c.path}`,
    })),
  };
}

// Extractable, factual descriptions per service (grounded in the blog guides).
const SERVICE_DESCRIPTIONS: Record<string, string> = {
  "Interior Fit-Out":
    "End-to-end interior fit-out for commercial and residential spaces in Dubai, covering MEP, partitions, ceilings, finishes and joinery from concept to handover.",
  "MEP Contracting":
    "Design and installation of mechanical, electrical and plumbing systems — HVAC, power, lighting, drainage and fire safety — compliant with DEWA and Dubai Municipality standards.",
  "Full/Partial Renovations":
    "Complete and partial renovations of apartments, villas and offices, from structural changes and partitions to flooring, walls and finishes.",
  "Authority Approvals":
    "Management of Dubai Municipality, DEWA and Dubai Civil Defence permits and inspections required for fit-out and renovation projects.",
  "Ceiling Works":
    "Gypsum, suspended, acoustic and wooden ceiling systems with integrated lighting and HVAC for residential and commercial interiors.",
  "Wall Finishes & Cladding":
    "Paint, natural stone, wood and tile wall finishes and cladding, from feature walls to full-interior treatments.",
  "Flooring Solutions":
    "Supply and installation of porcelain, natural stone, hardwood, luxury vinyl and epoxy flooring for homes and businesses.",
};

/**
 * ItemList of Service nodes for the /services page, each provided by the
 * Organization and serving the UAE.
 */
export function buildServicesLd(services: { title: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/services#list`,
    name: "Interior Fit-Out Services in Dubai",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        serviceType: s.title,
        description: SERVICE_DESCRIPTIONS[s.title],
        provider: { "@id": ORG_ID },
        areaServed: AREA_SERVED,
        url: `${SITE_URL}/services`,
      },
    })),
  };
}

/**
 * CreativeWork node describing an individual project (case study) for
 * /projects/[id], cross-referencing the Organization as creator.
 */
export function buildProjectLd(project: {
  id: string;
  title: string;
  description: string;
  story?: string;
  client?: string;
  location?: string;
  ogImage?: string;
}) {
  const cleanTitle = project.title.replace(/\s+/g, " ").trim();
  const imageUrl = project.ogImage
    ? `${SITE_URL}${project.ogImage}`
    : IMAGE_URL;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/projects/${project.id}#project`,
    name: cleanTitle,
    headline: cleanTitle,
    description: project.story || project.description,
    abstract: project.description,
    image: imageUrl,
    url: `${SITE_URL}/projects/${project.id}`,
    creator: { "@id": ORG_ID },
    provider: { "@id": ORG_ID },
    locationCreated: project.location
      ? { "@type": "Place", name: project.location }
      : undefined,
    about: "Interior fit-out",
    keywords: [
      cleanTitle,
      "interior fit-out",
      "Dubai",
      project.client || "",
    ].filter(Boolean),
    isPartOf: { "@id": WEBSITE_ID },
  };
}
