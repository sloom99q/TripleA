import React from 'react';
import { PAGE_SEO_CONFIG, BASE_URL } from '@/utils/seoConfig';
import { Box } from '@mantine/core';
import ProjectsHero from './ProjectsHero';
import {FullPageContainer} from '@/layout/PageContainer';
import ProjectsGrid from '@/components/pages/Projects/ProjectsGrid';
import { CTASection } from '../About';

const Projects: React.FC = () => {
    return (
        <>
            {/* Main H1 - Hidden but crucial for SEO */}
            <Box visibleFrom="xs" style={{ position: 'absolute', left: '-9999px' }}>
                <h1>Our Interior Fit-Out Projects in Dubai</h1>
            </Box>

            <Box component="section" aria-label="Projects hero section">
                <ProjectsHero />
            </Box>
            <FullPageContainer>
                <Box component="section" aria-label="Projects grid" mt={80} mb={80}>
                    <ProjectsGrid noBg />
                </Box>
            </FullPageContainer>
            <Box component="section" aria-label="Call to action" mb={60}>
                <CTASection />
            </Box>
        </>
    );
};

export default Projects;