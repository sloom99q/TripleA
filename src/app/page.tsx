import HeroSection from "@/components/pages/Home/HomeHero";
import HeroLeadForm from "@/components/pages/Home/HeroLeadForm";
import Clients from "@/components/pages/Home/ClientsSection";
import EmaarTestimony from "@/components/pages/Home/ClientTestimony";
import FAQComponent from "@/components/FAQ";
import { CTASection, TimelineSection } from "@/components/pages/About";
import { ProjectsGrid } from "@/components/pages/Projects";
import { PageContainer, FullPageContainer } from "@/layout/PageContainer";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqPageLd } from "@/utils/structuredData";
import { FAQData } from "@/mockups/FAQData";

export default function HomePage() {
  // FAQPage schema is emitted here (a server component) because the visual FAQ
  // is a client component — this way crawlers and AI engines get the Q&A as
  // structured data without executing JavaScript.
  const faqLd = buildFaqPageLd(FAQData);

  return (
    <>
      <JsonLd data={faqLd} />
      {/* Hero Section */}
      <section aria-label="Hero section">
        <HeroSection />
      </section>

      {/* Client Testimony Section */}
      <PageContainer>
        <div style={{ marginTop: 80, marginBottom: 120 }}>
          <EmaarTestimony />
        </div>
      </PageContainer>

      {/* Lead Capture — directly under the hero (no scroll needed to contact us) */}
      <PageContainer>
        <div style={{ width: "100%", marginTop: 56, marginBottom: 40 }}>
          <HeroLeadForm />
        </div>
      </PageContainer>

      {/* Featured Projects Section */}
      <FullPageContainer>
        <ProjectsGrid />
      </FullPageContainer>

      {/* Our Clients Section */}
      <PageContainer>
        <div style={{ marginBottom: 60 }}>
          <Clients />
        </div>
      </PageContainer>

      {/* Timeline Section */}
      <FullPageContainer>
        <TimelineSection />
      </FullPageContainer>

      {/* FAQ Section — SEO-focused, carries process + authority-approval content */}
      <PageContainer>
        <div style={{ width: "100%", marginTop: 150 }}>
          <FAQComponent />
        </div>
      </PageContainer>

      {/* Call-to-Action Section */}
      <CTASection />
    </>
  );
}
