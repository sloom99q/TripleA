import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import ProjectHero from './ProjectHero';
import {PageContainer} from '@/layout/PageContainer';
import ProjectDetails from '@/pages/Project/ProjectDetails';
import { ProjectsData } from '@/mockups/ProjectsData';
import { MoreProjects } from './MoreProjects';
import { CTASection } from '../About';

export function idParams() {
    const { id } = useParams<{ id: string }>();
    return ProjectsData.find((project) => project.id === id) ?? ProjectsData[0];
}

const ProjectPage: React.FC = () => {
    const selectedProject = idParams();

    return (
        <>
            <Helmet>
                <title>{`${selectedProject.title} | Triple A Interiors`}</title>
                <meta name="description" content={selectedProject.story ?? selectedProject.description} />
            </Helmet>
            <ProjectHero project={selectedProject} />
            <PageContainer>
                {/* Projects boxes Section */}
                <ProjectDetails projectId={selectedProject.id} />
                
                {/* More Projects Section */}
                <MoreProjects />
            </PageContainer>
            <CTASection />
        </>
    );
};

export default ProjectPage;