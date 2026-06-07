import type { Metadata } from "next";
import { DEFAULT_OG_IMAGES } from "@/utils/seoConfig";

export const metadata: Metadata = {
  title: {
    absolute: "Interior Fit-Out Blog & Guides Dubai | Triple A Interiors",
  },
  description:
    "Expert guides on interior fit-out, MEP, finishes, renovation costs and design trends in Dubai, from the Triple A Interiors team.",
  keywords:
    "interior fit-out blog Dubai, interior design tips, renovation guide, fit-out cost Dubai, design trends",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    siteName: "Triple A Interiors",
    title: "Interior Fit-Out Blog & Guides | Triple A Interiors",
    description:
      "Expert guides on interior fit-out, finishes, renovation and design trends in Dubai.",
    images: DEFAULT_OG_IMAGES,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
