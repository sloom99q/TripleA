import type { Metadata } from "next";
import { PAGE_SEO_CONFIG, DEFAULT_OG_IMAGES } from "@/utils/seoConfig";

export const metadata: Metadata = {
  title: { absolute: PAGE_SEO_CONFIG.contact.title },
  description: PAGE_SEO_CONFIG.contact.description,
  keywords: PAGE_SEO_CONFIG.contact.keywords,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    siteName: "Triple A Interiors",
    title: PAGE_SEO_CONFIG.contact.title,
    description: PAGE_SEO_CONFIG.contact.description,
    images: DEFAULT_OG_IMAGES,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
