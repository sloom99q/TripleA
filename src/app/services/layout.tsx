import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Fit-Out Services in Dubai | Triple A Interiors",
  description:
    "Explore our comprehensive interior fit-out services in Dubai. From commercial offices to luxury residences, we deliver bespoke solutions with premium quality and precision.",
  keywords:
    "interior fit-out services, commercial fit-out Dubai, residential design, office renovation, interior services",
  alternates: {
    canonical: "https://triple-a.ae/services",
  },
  openGraph: {
    type: "website",
    url: "https://triple-a.ae/services",
    title: "Interior Fit-Out Services in Dubai | Triple A Interiors",
    description:
      "Explore our comprehensive interior fit-out services in Dubai including commercial, residential, and bespoke solutions.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
