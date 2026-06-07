import type { Metadata } from "next";
import { PAGE_SEO_CONFIG, DEFAULT_OG_IMAGES } from "@/utils/seoConfig";

export const metadata: Metadata = {
  title: { absolute: PAGE_SEO_CONFIG.about.title },
  description: PAGE_SEO_CONFIG.about.description,
  keywords: PAGE_SEO_CONFIG.about.keywords,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "/about",
    siteName: "Triple A Interiors",
    title: PAGE_SEO_CONFIG.about.title,
    description: PAGE_SEO_CONFIG.about.description,
    images: DEFAULT_OG_IMAGES,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
