import React from 'react';
import { Group, Box, Title } from '@mantine/core';
import { PAGE_SEO_CONFIG, BASE_URL } from '@/utils/seoConfig';
import HeroSection from '@/components/pages/Home/HomeHero';
import Clients from '@/components/pages/Home/ClientsSection';
import EmaarTestimony from '@/components/pages/Home/ClientTestimony';
import FAQComponent from '@/components/FAQ';
import { CTASection, TimelineSection } from '@/components/pages/About';
import { ProjectsGrid } from '@/components/pages/Projects';
import {PageContainer} from '@/layout/PageContainer';
import {FullPageContainer} from '@/layout/PageContainer';

const Home: React.FC = () => {
    return (
        <>
            {/* Hero - full width with H1 */}
            <Box component="section" aria-label="Hero section">
                <HeroSection />
            </Box>

            {/* Main H1 - Hidden but crucial for SEO */}
            <Box visibleFrom="xs" style={{ position: 'absolute', left: '-9999px' }}>
                <h1>Premium Interior Fit-Out Services in Dubai</h1>
            </Box>

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