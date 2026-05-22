/**
 * JsonLd — renders a JSON-LD structured-data script.
 *
 * Server component (no "use client"): the script is emitted in the initial
 * server-rendered HTML so Google and AI crawlers (Perplexity, Gemini, ChatGPT)
 * can parse it without executing JavaScript.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default JsonLd;
