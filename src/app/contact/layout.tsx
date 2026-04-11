import type { Metadata } from "next";

const SITE_URL = "https://triple-a.ae";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "Contact Us | Get Your Interior Fit-Out Quote",
  description:
    "Get in touch with Triple A Interiors for premium interior fit-out services in Dubai. Let's discuss your project and bring your vision to life. Call or visit us today.",
  keywords: [
    "contact interior designer Dubai",
    "get quote",
    "interior fit-out inquiry",
    "contact Triple A",
    "Dubai interior consultation",
    "fit-out quote Dubai",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/contact`,
    title: "Contact Triple A Interiors | Get Your Project Started",
    description:
      "Get in touch with Triple A Interiors for premium interior fit-out services in Dubai. Let's discuss your project and bring your vision to life.",
    siteName: "Triple A Interiors",
    locale: "en_AE",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 723,
        alt: "Contact Triple A Interiors - Dubai Interior Fit-Out",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Triple A Interiors | Get Your Project Started",
    description:
      "Get in touch with Triple A Interiors for premium interior fit-out services in Dubai. Let's discuss your project.",
    images: [OG_IMAGE_URL],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
