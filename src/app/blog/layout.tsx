import type { Metadata } from "next";

const SITE_URL = "https://triple-a.ae";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "Interior Design Blog | Tips & Insights",
  description:
    "Expert insights on interior fit-out, design trends, materials, and Dubai construction regulations. Learn from Triple A Interiors' industry expertise.",
  keywords: [
    "interior design blog",
    "fit-out tips Dubai",
    "interior design trends",
    "construction insights",
    "Dubai interior tips",
    "design materials guide",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "Interior Design Blog | Triple A Interiors",
    description:
      "Expert insights on interior fit-out, design trends, materials, and Dubai construction regulations. Learn from Triple A Interiors' industry expertise.",
    siteName: "Triple A Interiors",
    locale: "en_AE",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 723,
        alt: "Triple A Interiors Blog - Interior Design Insights",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Blog | Triple A Interiors",
    description:
      "Expert insights on interior fit-out, design trends, materials, and Dubai construction regulations.",
    images: [OG_IMAGE_URL],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
