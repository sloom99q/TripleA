import ServicesGrid from "@/components/pages/Services/ServicesGrid";
import ServiceDetails from "@/components/pages/Services/ServiceDetails";
import CustomDivider from "@/components/CustomDivider";
import { FullPageContainer } from "@/layout/PageContainer";

export default function ServicesPage() {
  return (
    <>
      {/* Hidden H1 for SEO */}
      <h1 style={{ position: "absolute", left: "-9999px" }}>
        Premium Interior Fit-Out Services in Dubai
      </h1>

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
    </>
  );
}
