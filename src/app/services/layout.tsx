import type { Metadata } from "next";

const SITE_URL = "https://triple-a.ae";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "Interior Fit-Out Services in Dubai",
  description:
    "Explore our comprehensive interior fit-out services in Dubai. From commercial offices to luxury residences, we deliver bespoke solutions with premium quality and precision.",
  keywords: [
    "interior fit-out services",
    "commercial fit-out Dubai",
    "residential design Dubai",
    "office renovation",
    "interior services UAE",
    "fit-out contractor",
    "interior renovation",
    "luxury interior design",
  ],
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services`,
    title: "Interior Fit-Out Services in Dubai | Triple A Interiors",
    description:
      "Explore our comprehensive interior fit-out services in Dubai including commercial, residential, and bespoke solutions. Premium quality and precision execution.",
    siteName: "Triple A Interiors",
    locale: "en_AE",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 723,
        alt: "Triple A Interiors - Interior Fit-Out Services in Dubai",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Fit-Out Services in Dubai | Triple A Interiors",
    description:
      "Explore our comprehensive interior fit-out services in Dubai including commercial, residential, and bespoke solutions.",
    images: [OG_IMAGE_URL],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
