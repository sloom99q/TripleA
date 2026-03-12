import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Triple A Interiors - Portfolio of Excellence",
  description:
    "Explore our portfolio of completed projects featuring luxury residences, commercial spaces, and bespoke interior designs in Dubai and across the UAE.",
  keywords:
    "interior design projects, fit-out portfolio, luxury interior design, commercial projects Dubai",
  alternates: {
    canonical: "https://triple-a.ae/projects",
  },
  openGraph: {
    type: "website",
    url: "https://triple-a.ae/projects",
    title: "Our Projects | Triple A Interiors",
    description: "Explore our award-winning interior design and fit-out projects.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
