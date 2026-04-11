import type { Metadata } from "next";

const SITE_URL = "https://triple-a.ae";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "About Us | Premium Interior Design in Dubai",
  description:
    "Discover Triple A Interiors' story, values, and expertise in delivering premium interior fit-out solutions across Dubai. Over 10 years of excellence in design and execution.",
  keywords: [
    "about Triple A",
    "interior design company Dubai",
    "interior fit-out expertise",
    "design team Dubai",
    "interior design history",
    "fit-out company story",
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    title: "About Triple A Interiors | Premium Interior Design in Dubai",
    description: "Learn about Triple A Interiors' mission, vision, and expertise in premium interior design. Over 10 years delivering exceptional fit-out solutions in Dubai.",
    siteName: "Triple A Interiors",
    locale: "en_AE",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 723,
        alt: "About Triple A Interiors - Dubai's Premier Interior Design Company",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Triple A Interiors | Premium Interior Design in Dubai",
    description: "Learn about Triple A Interiors' mission, vision, and expertise in premium interior design.",
    images: [OG_IMAGE_URL],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
