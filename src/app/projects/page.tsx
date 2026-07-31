import ProjectsHero from "@/components/pages/Projects/ProjectsHero";
import ProjectsGrid from "@/components/pages/Projects/ProjectsGrid";
import { CTASection } from "@/components/pages/About";
import { FullPageContainer, PageContainer } from "@/layout/PageContainer";
import { VastuShastraSection } from "@/components/pages/Projects/VastuOffice";
import FAQComponent from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbLd } from "@/utils/structuredData";
import { ProjectsFAQ } from "@/mockups/FAQData";

export default function ProjectsPage() {
  const breadcrumbLd = buildBreadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbLd} />

      {/* Hero Section */}
      <section aria-label="Projects hero section">
        <ProjectsHero />
      </section>

      {/* Vastu Shastra Section */}
      <VastuShastraSection />

      {/* Projects Grid */}
      <FullPageContainer>
        <section aria-label="Projects grid" style={{ marginTop: 80, marginBottom: 80 }}>
          <ProjectsGrid noBg />
        </section>
      </FullPageContainer>

      {/* FAQ Section */}
      <PageContainer>
        <section aria-label="Frequently asked questions" style={{ marginTop: 100, marginBottom: 60 }}>
          <FAQComponent items={ProjectsFAQ} />
        </section>
      </PageContainer>

      {/* Call-to-Action Section */}
      <section aria-label="Call to action" style={{ marginBottom: 60 }}>
        <CTASection />
      </section>
    </>
  );
}
