import type { MetadataRoute } from "next";

/**
 * Web App Manifest (served at /manifest.webmanifest).
 * Improves PWA installability and gives crawlers a clean app identity.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Triple A Interiors",
    short_name: "Triple A",
    description:
      "Luxury interior fit-out and turnkey solutions in Dubai for residential and commercial spaces.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    lang: "en-AE",
    icons: [
      {
        src: "/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
