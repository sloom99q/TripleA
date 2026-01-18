import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Divider, Image } from '@mantine/core';
import ServicesGrid from '@/pages/Services/ServicesGrid';
import ServiceDetails from '@/pages/Services/ServiceDetails';
import CustomDivider from '@/components/CustomDivider';
import {FullPageContainer} from '@/layout/PageContainer';

const ServicesPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Interior Fit-Out Services in Dubai | Triple A Interiors</title>
                <meta
                    name="description"
                    content="Explore our interior fit-out services in Dubai, including commercial, residential, and bespoke solutions delivered with premium quality and precision."
                />
            </Helmet>
            <FullPageContainer>
                <Box mt={80} mb={0}>
                    <ServicesGrid />
                </Box>

                <CustomDivider />

                <Box mt={40} mb={100}>
                    <ServiceDetails />
                </Box>
            </FullPageContainer>
        </>
    );
};

export default ServicesPage;