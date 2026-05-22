import AboutHero from "@/components/pages/About/AboutHero";
import ValuesSection from "@/components/pages/About/ValuesSection";
import MissionVisionSection from "@/components/pages/About/MissionVisionSection";
import WhyChooseUsSection from "@/components/pages/About/WhyChooseUsSection";
import TimelineSection from "@/components/pages/About/TimelineSection";
import CTASection from "@/components/pages/About/CTASection";
import { PageContainer, FullPageContainer } from "@/layout/PageContainer";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section aria-label="About hero section">
        <AboutHero />
      </section>

      {/* Mission & Vision Section */}
      <PageContainer>
        <div style={{ marginTop: 40, marginBottom: 80 }}>
          <MissionVisionSection />
        </div>
      </PageContainer>

      {/* Core Values Section */}
      <ValuesSection />

      {/* Why Choose Us Section */}
      <PageContainer>
        <WhyChooseUsSection />
      </PageContainer>

      {/* Timeline Section */}
      <FullPageContainer>
        <TimelineSection />
      </FullPageContainer>

      {/* Call-to-Action Section */}
      <CTASection />
    </>
  );
}
