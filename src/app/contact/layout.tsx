import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Triple A Interiors - Get Your Interior Fit-Out Quote",
  description:
    "Get in touch with Triple A Interiors for premium interior fit-out services in Dubai. Let's discuss your project and bring your vision to life. Call or visit us today.",
  keywords:
    "contact interior designer Dubai, get quote, interior fit-out inquiry, contact Triple A",
  alternates: {
    canonical: "https://triple-a.ae/contact",
  },
  openGraph: {
    type: "website",
    url: "https://triple-a.ae/contact",
    title: "Contact Us | Triple A Interiors",
    description:
      "Get in touch with Triple A Interiors for premium interior fit-out services in Dubai. Let's discuss your project and bring your vision to life.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
