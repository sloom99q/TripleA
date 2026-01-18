import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mantine/core';
import ProjectsHero from './ProjectsHero';
import {FullPageContainer} from '@/layout/PageContainer';
import ProjectsGrid from '@/pages/Projects/ProjectsGrid';
import { CTASection } from '../About';

const Projects: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Our Projects | Triple A Interiors Dubai</title>
                <meta
                    name="description"
                    content="Discover completed interior fit-out projects by Triple A Interiors across Dubai, showcasing premium design, craftsmanship, and execution."
                />
            </Helmet>
            <ProjectsHero />
            <FullPageContainer>
                <Box mt={80} mb={80}>
                    <ProjectsGrid noBg />
                </Box>
            </FullPageContainer>
            <Box mb={60}>
                <CTASection />
            </Box>
        </>
    );
};

export default Projects;