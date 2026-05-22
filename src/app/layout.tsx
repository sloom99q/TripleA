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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://triple-a.ae"),
  applicationName: "Triple A Interiors",

  title: {
    default: "Triple A Interiors Dubai | Luxury Fit-Out & Turnkey Projects",
    template: "%s | Triple A Interiors",
  },

  description:
    "Triple A Interiors delivers luxury fit-out and turnkey solutions across Dubai, built for high-end residential and commercial spaces.",

  alternates: {
    canonical: "https://triple-a.ae/",
  },

  robots: {
    index: true,
    follow: true,
  },

  appleWebApp: {
    title: "Triple A Interiors",
  },

  openGraph: {
    type: "website",
    url: "https://triple-a.ae/",
    siteName: "Triple A Interiors",
    title: "Triple A Interiors Dubai | Luxury Fit-Out & Turnkey Projects",
    description:
      "Luxury interior fit-out and turnkey solutions in Dubai.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Triple A Interiors",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/favicon-192.png", sizes: "192x192", type: "image/png" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Triple A Interiors Dubai | Luxury Fit-Out & Turnkey Projects",
    description:
      "Triple A Interiors delivers luxury fit-out and turnkey solutions across Dubai, built for high-end residential and commercial spaces.",
    images: ["/og-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://triple-a.ae/#organization",
      name: "Triple A Interiors",
      url: "https://triple-a.ae",
      logo: "https://triple-a.ae/onlyLogoBlack.png",
      email: "info@triple-a.ae",
      telephone: "+971585500359",
    },
    {
      "@type": "WebSite",
      "@id": "https://triple-a.ae/#website",
      name: "Triple A Interiors",
      url: "https://triple-a.ae/",
      publisher: { "@id": "https://triple-a.ae/#organization" },
    },
    {
      "@type": "GeneralContractor",
      "@id": "https://triple-a.ae/#localbusiness",
      name: "Triple A Interiors",
      image: "https://triple-a.ae/og-image.png",
      url: "https://triple-a.ae/",
      telephone: "+971585500359",
      email: "info@triple-a.ae",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Arkan Business Center, Fronds Building, M06, Sheikh Rashid Road, Al Garhoud",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      hasMap: "https://maps.app.goo.gl/zpCnixRcZfz3HkoG9",
      areaServed: { "@type": "City", name: "Dubai" },
      parentOrganization: { "@id": "https://triple-a.ae/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
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