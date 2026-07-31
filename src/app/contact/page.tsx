import HeroContact from "@/components/pages/Contact/HeroContact";
import ContactLayout from "./ContactLayout";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbLd } from "@/utils/structuredData";

/**
 * Contact Page (Server Component)
 *
 * Static structure uses native HTML.
 * Mantine Grid/Stack layout is delegated to ContactLayout (Client Component).
 */
export default function ContactPage() {
  const breadcrumbLd = buildBreadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbLd} />

      {/* Hero Section */}
      <section aria-label="Contact hero section">
        <HeroContact />
      </section>

      {/* Main Content — layout handled in ContactLayout (Client Component) */}
      <ContactLayout />
    </>
  );
}
