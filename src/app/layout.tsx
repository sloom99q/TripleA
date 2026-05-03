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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
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
      name: "TRIPLE A INTERIORS",
      url: "https://triple-a.ae",
      logo: "https://triple-a.ae/logo.png",
    },
    {
      "@type": "WebSite",
      name: "TRIPLE A INTERIORS",
      url: "https://triple-a.ae/",
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