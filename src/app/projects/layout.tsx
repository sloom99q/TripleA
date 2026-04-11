import type { Metadata } from "next";

const SITE_URL = "https://triple-a.ae";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "Our Projects | Portfolio of Excellence",
  description:
    "Explore our portfolio of completed projects featuring luxury residences, commercial spaces, and bespoke interior designs in Dubai and across the UAE.",
  keywords: [
    "interior design projects",
    "fit-out portfolio",
    "luxury interior design",
    "commercial projects Dubai",
    "interior showcase",
    "fit-out case studies",
    "Dubai projects",
  ],
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/projects`,
    title: "Our Projects | Triple A Interiors Portfolio",
    description: "Explore our award-winning interior design and fit-out projects across Dubai. Luxury residences, commercial spaces, and bespoke interior designs.",
    siteName: "Triple A Interiors",
    locale: "en_AE",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 723,
        alt: "Triple A Interiors - Project Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects | Triple A Interiors Portfolio",
    description: "Explore our award-winning interior design and fit-out projects across Dubai.",
    images: [OG_IMAGE_URL],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
