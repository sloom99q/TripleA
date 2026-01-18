import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/pages/Home/HomeHero';
import Clients from '@/pages/Home/ClientsSection';
import EmaarTestimony from '@/pages/Home/ClientTestimony';
import { Group, Box } from '@mantine/core';
import FAQComponent from '@/components/FAQ';
import { CTASection, TimelineSection } from '@/pages/About';
import { ProjectsGrid } from '@/pages/Projects';
import {PageContainer} from '@/layout/PageContainer';
import {FullPageContainer} from '@/layout/PageContainer';

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Triple A Interiors | Premium Interior Fit-Out Company in Dubai</title>
                <meta
                    name="description"
                    content="Triple A Interiors is a Dubai-based interior fit-out company delivering premium commercial and residential spaces through innovative design and flawless execution."
                />
            </Helmet>

            {/* Hero - full width */}
            <HeroSection />

            {/* Testimony - with padding */}
            <PageContainer>
                <Box mt={80} mb={0}>
                    <Group mb={120} mt={20}>
                        <EmaarTestimony />
                    </Group>
                </Box>
            </PageContainer>

            {/* Projects - full width */}
            <FullPageContainer>
                <ProjectsGrid />
            </FullPageContainer>

            {/* Clients - with padding */}
            <PageContainer>
                <Group mb={60} mt={0}>
                    <Clients />
                </Group>
            </PageContainer>

            {/* Timeline - full width */}
            <FullPageContainer>
                <TimelineSection />
            </FullPageContainer>

            {/* FAQ & CTA - with padding */}
            <PageContainer>
                <Box w={'100%'} mt={150}>
                    <FAQComponent />
                </Box>
            </PageContainer>
            <CTASection />
        </>
    );
};

export default Home;