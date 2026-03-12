'use client';

/**
 * Services Page for Next.js App Router
 * 
 * Location: src/app/services/page.tsx
 * 
 * This page:
 * - Uses Next.js metadata API for SEO (defined in layout.tsx)
 * - Displays all interior design services
 * - Includes complete service details and features
 */

'use client';

import { Box } from "@mantine/core";
import ServicesGrid from "@/components/pages/Services/ServicesGrid";
import ServiceDetails from "@/components/pages/Services/ServiceDetails";
import CustomDivider from "@/components/CustomDivider";
import { FullPageContainer } from "@/layout/PageContainer";

/**
 * Services Page Component
 */
export default function ServicesPage() {
  return (
    <>
      {/* Semantic H1 for SEO */}
      <Box visibleFrom="xs" style={{ position: "absolute", left: "-9999px" }}>
        <h1>Premium Interior Fit-Out Services in Dubai</h1>
      </Box>

      <FullPageContainer>
        {/* Services Grid */}
        <Box component="section" aria-label="Services grid" mt={80} mb={0}>
          <ServicesGrid />
        </Box>

        <CustomDivider />

        {/* Service Details */}
        <Box component="section" aria-label="Service details" mt={40} mb={100}>
          <ServiceDetails />
        </Box>
      </FullPageContainer>
    </>
  );
}
