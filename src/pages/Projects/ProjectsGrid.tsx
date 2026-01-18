import React, { useMemo } from 'react';
import { Box, Grid, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ProjectsData } from '@/mockups/ProjectsData';
import ProjectsBox from '@/pages/Projects/ProjectsBox';

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
}

const SECTION_BG = 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.06) 0%, rgba(10, 10, 10, 0) 28%), radial-gradient(circle at 80% 0%, rgba(140,140,140,0.08) 0%, rgba(12, 12, 12, 0) 22%), linear-gradient(145deg, #080808ff 0%, #0d0d0dff 50%, #060606ff 100%)';

interface ProjectsGridProps {
  noBg?: boolean;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ noBg = false }) => {
  const projects = ProjectsData;
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 992px)');

  const layout = useMemo(
    () => [
      { project: projects[0], span: { base: 12, md: 7 }, height: 420, variant: 'hero' as const },
      { project: projects[1], span: { base: 12, md: 5 }, height: 420, variant: 'spotlight' as const },
      { project: projects[2], span: { base: 12, sm: 6, md: 4 }, height: 340, variant: 'standard' as const },
      { project: projects[3], span: { base: 12, sm: 6, md: 4 }, height: 340, variant: 'standard' as const },
      { project: projects[4], span: { base: 12, sm: 12, md: 4 }, height: 340, variant: 'standard' as const },
      { project: projects[5], span: { base: 12, md: 12 }, height: 260, variant: 'band' as const },
    ],
    [projects]
  );

  return (
    <Box
      component="section"
      style={{
        width: '100%',
        borderRadius: noBg ? 0 : 32,
        background: noBg ? 'transparent' : SECTION_BG,
        border: noBg ? 'none' : '1px solid rgba(255,255,255,0.06)',
        padding: isMobile ? 16 : (noBg ? 0 : 32),
      }}
    >
      {!noBg && (
        <Box mb={isMobile ? 24 : 36}>
          <Title order={2} c="#F8F9FC" fw={700} style={{ letterSpacing: -0.4 }}>
        Featured Projects
          </Title>
          <Text mt={8} size="md" c="rgba(255,255,255,0.6)" style={{ maxWidth: 540 }}>
        A selection of our signature fit-outs across UAE.
          </Text>
        </Box>
      )}

      <Grid gutter={isMobile ? 16 : 22} columns={12} m={0}>
        {layout.map((item, idx) => (
          <Grid.Col key={item.project.id} span={item.span}>
            <ProjectsBox project={item.project as Project} variant={item.variant} height={item.height} index={idx} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsGrid;