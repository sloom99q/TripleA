import type { MetadataRoute } from "next";

const BASE_URL = "https://triple-a.ae";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      // Explicitly allow AI / answer-engine crawlers so the site can be
      // cited in ChatGPT, Perplexity, Claude and Google AI Overviews / Gemini.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "Google-Extended",
        ],
        allow: "/",
      },
      // Block low-value SEO scrapers (parity with the previous robots.txt).
      { userAgent: "AhrefsBot", disallow: "/" },
      { userAgent: "DotBot", disallow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
