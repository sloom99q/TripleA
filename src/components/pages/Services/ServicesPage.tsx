import React from 'react';
import { PAGE_SEO_CONFIG, BASE_URL } from '@/utils/seoConfig';
import { Box, Divider } from '@mantine/core';
import ServicesGrid from '@/components/pages/Services/ServicesGrid';
import ServiceDetails from '@/components/pages/Services/ServiceDetails';
import CustomDivider from '@/components/CustomDivider';
import {FullPageContainer} from '@/layout/PageContainer';

const ServicesPage: React.FC = () => {
    return (
        <>
            {/* Main H1 - Hidden but crucial for SEO */}
            <Box visibleFrom="xs" style={{ position: 'absolute', left: '-9999px' }}>
                <h1>Premium Interior Fit-Out Services in Dubai</h1>
            </Box>

            <FullPageContainer>
                <Box component="section" aria-label="Services grid" mt={80} mb={0}>
                    <ServicesGrid />
                </Box>

                <CustomDivider />

                <Box component="section" aria-label="Service details" mt={40} mb={100}>
                    <ServiceDetails />
                </Box>
            </FullPageContainer>
        </>
    );
};

export default ServicesPage;