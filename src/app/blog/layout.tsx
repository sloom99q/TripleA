import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog | Triple A Interiors - Interior Fit-Out & Design Insights Dubai",
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
    title: "Blog | Triple A Interiors",
    description:
      "Expert guides on interior fit-out, finishes, renovation and design trends in Dubai.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
