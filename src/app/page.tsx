import HeroSection from "@/components/pages/Home/HomeHero";
import Clients from "@/components/pages/Home/ClientsSection";
import EmaarTestimony from "@/components/pages/Home/ClientTestimony";
import FAQComponent from "@/components/FAQ";
import { CTASection, TimelineSection } from "@/components/pages/About";
import { ProjectsGrid } from "@/components/pages/Projects";
import { PageContainer, FullPageContainer } from "@/layout/PageContainer";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section aria-label="Hero section">
        <HeroSection />
      </section>

      {/* Hidden H1 for SEO */}
      <h1 style={{ position: "absolute", left: "-9999px" }}>
        Premium Interior Fit-Out Services in Dubai
      </h1>

      {/* Client Testimony Section */}
      <PageContainer>
        <div style={{ marginTop: 80, marginBottom: 120 }}>
          <EmaarTestimony />
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

      {/* FAQ Section */}
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
