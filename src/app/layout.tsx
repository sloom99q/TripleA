import type { Metadata, Viewport } from "next";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import theme from "@/theme";
import "@/index.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import WhatsAppFloatingButton from "@/components/common/WhatsAppFloatingButton";
import { Analytics } from "@vercel/analytics/next";

/**
 * Root Layout for Next.js App Router
 * 
 * This layout:
 * - Wraps the entire application with MantineProvider for Mantine UI
 * - Includes the global Navbar component
 * - Includes the global Footer component
 * - Applies global styles
 * - Sets up the HTML/body structure
 * - Configures comprehensive SEO meta tags for social sharing
 */

const SITE_URL = "https://triple-a.ae";
const SITE_NAME = "TripleA";
const DEFAULT_DESCRIPTION = "Transform your space with TripleA - Dubai's leading interior fit-out company specializing in commercial and residential design. Premium craftsmanship and innovative solutions.";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  // Base metadata
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TripleA | Premium Interior Fit-Out Company in Dubai",
    template: "%s | TripleA",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "interior fit-out Dubai",
    "interior design Dubai",
    "office fit-out",
    "residential design",
    "interior company UAE",
    "commercial interior design",
    "luxury interiors Dubai",
    "fit-out contractor Dubai",
    "interior renovation Dubai",
    "Triple A Interiors",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical
  alternates: {
    canonical: SITE_URL,
  },

  // Open Graph - Facebook, WhatsApp, Instagram, LinkedIn
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "TripleA | Premium Interior Fit-Out Company in Dubai",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 723,
        alt: "Triple A Interiors - Premium Interior Fit-Out in Dubai",
        type: "image/png",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "TripleA | Premium Interior Fit-Out Company in Dubai",
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE_URL],
    creator: "@tripleainteriors",
    site: "@tripleainteriors",
  },

  // Additional metadata
  category: "Interior Design",
  classification: "Business",

  // App links (for mobile)
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SITE_NAME,
  },

  // Verification (add your actual verification codes)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },

  // Other
  other: {
    "fb:app_id": "", // Add Facebook App ID if available
    "og:locale:alternate": "ar_AE",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

// Organization Schema with Logo for Search Results
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TripleA",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: DEFAULT_DESCRIPTION,
  sameAs: [
    "https://www.facebook.com/tripleainteriors",
    "https://www.instagram.com/tripleainteriors",
    "https://www.linkedin.com/company/triple-a-interiors",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+971-4-XXX-XXXX", // Update with actual phone
    email: "info@triple-a.ae", // Update with actual email
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dubai, UAE", // Update with actual address
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema for Search Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <MantineProvider theme={theme}>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppFloatingButton />
          </MantineProvider>
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
