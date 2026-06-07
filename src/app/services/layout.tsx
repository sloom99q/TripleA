import type { Metadata } from "next";
import { PAGE_SEO_CONFIG, DEFAULT_OG_IMAGES } from "@/utils/seoConfig";

export const metadata: Metadata = {
  title: { absolute: PAGE_SEO_CONFIG.services.title },
  description: PAGE_SEO_CONFIG.services.description,
  keywords: PAGE_SEO_CONFIG.services.keywords,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "/services",
    siteName: "Triple A Interiors",
    title: PAGE_SEO_CONFIG.services.title,
    description: PAGE_SEO_CONFIG.services.description,
    images: DEFAULT_OG_IMAGES,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
