'use client';

import React from 'react';
import { createProjectSEOMetadata, BASE_URL } from '@/utils/seoConfig';
import { Box } from '@mantine/core';
import { useSearchParams } from 'next/navigation';
import ProjectHero from './ProjectHero';
import {PageContainer} from '@/layout/PageContainer';
import ProjectDetails from '@/components/pages/Project/ProjectDetails';
import { ProjectsData } from '@/mockups/ProjectsData';
import { MoreProjects } from './MoreProjects';
import { CTASection } from '../About';

export function idParams() {
    const searchParams = useSearchParams();
    const id = searchParams?.get('id') || '';
    return ProjectsData.find((project) => project.id === id) ?? ProjectsData[0];
}

const ProjectPage: React.FC = () => {
    const selectedProject = idParams();
    const seoConfig = {
        ...createProjectSEOMetadata(selectedProject),
        ogUrl: `${BASE_URL}/project/${selectedProject.id}`,
    };

    return (
        <>
            {/* Main H1 - Hidden but crucial for SEO */}
            <Box visibleFrom="xs" style={{ position: 'absolute', left: '-9999px' }}>
                <h1>{selectedProject.title}</h1>
            </Box>

            <Box component="section" aria-label={`${selectedProject.title} project hero`}>
                <ProjectHero project={selectedProject} />
            </Box>
            <PageContainer>
                {/* Projects boxes Section */}
                <Box component="section" aria-label="Project details">
                    <ProjectDetails projectId={selectedProject.id} />
                </Box>
                
                {/* More Projects Section */}
                <Box component="section" aria-label="More projects">
                    <MoreProjects />
                </Box>
            </PageContainer>
            <Box component="section" aria-label="Call to action">
                <CTASection />
            </Box>
        </>
    );
};

export default ProjectPage;