import ServicesGrid from "@/components/pages/Services/ServicesGrid";
import ServiceDetails from "@/components/pages/Services/ServiceDetails";
import CustomDivider from "@/components/CustomDivider";
import ProcessComplianceSection from "@/components/ProcessComplianceSection";
import { FullPageContainer } from "@/layout/PageContainer";

export default function ServicesPage() {
  return (
    <>
      <FullPageContainer>
        {/* Services Grid */}
        <section aria-label="Services grid" style={{ marginTop: 80, marginBottom: 0 }}>
          <ServicesGrid />
        </section>

        <CustomDivider />

        {/* Service Details */}
        <section aria-label="Service details" style={{ marginTop: 40, marginBottom: 100 }}>
          <ServiceDetails />
        </section>
      </FullPageContainer>

      <ProcessComplianceSection />
    </>
  );
}
