import HeroContact from "@/components/pages/Contact/HeroContact";
import ContactLayout from "./ContactLayout";

/**
 * Contact Page (Server Component)
 *
 * Static structure uses native HTML.
 * Mantine Grid/Stack layout is delegated to ContactLayout (Client Component).
 */
export default function ContactPage() {
  return (
    <>
      {/* Hidden H1 for SEO */}
      <h1 style={{ position: "absolute", left: "-9999px" }}>
        Contact Triple A Interiors - Get Your Interior Fit-Out Quote
      </h1>

      {/* Hero Section */}
      <section aria-label="Contact hero section">
        <HeroContact />
      </section>

      {/* Main Content — layout handled in ContactLayout (Client Component) */}
      <ContactLayout />
    </>
  );
}
