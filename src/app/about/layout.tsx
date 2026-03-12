import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Triple A Interiors | Premium Interior Design in Dubai",
  description:
    "Discover Triple A Interiors' story, values, and expertise in delivering premium interior fit-out solutions across Dubai. Over 10 years of excellence in design and execution.",
  keywords:
    "about Triple A, interior design company Dubai, interior fit-out expertise, design team",
  alternates: {
    canonical: "https://triple-a.ae/about",
  },
  openGraph: {
    type: "website",
    url: "https://triple-a.ae/about",
    title: "About Triple A Interiors",
    description: "Learn about Triple A Interiors' mission, vision, and expertise in premium interior design.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
