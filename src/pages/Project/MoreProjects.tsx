import { Box, Grid, Group, Image, Text, Title, UnstyledButton } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { ProjectsData } from '@/mockups/ProjectsData';
import { idParams } from "@/pages/Project/ProjectPage";
import { useMemo, memo, useCallback } from "react";
import { useScrollScale } from "@/components/useScrollScale";

const ProjectCard = memo(({ project, isMobile }: { project: typeof ProjectsData[0]; isMobile: boolean | undefined }) => {
  const navigate = useNavigate();
  const scrollRef = useScrollScale(0.06);
  
  const handleNavigate = useCallback(() => {
    navigate(`/projects/${project.id}`);
  }, [navigate, project.id]);

  return (
    <Grid.Col key={project.id} span={{ base: 12, sm: 12, md: 4 }}>
      <UnstyledButton 
        onClick={handleNavigate}
        style={{ width: '100%' }}
      >
        <Box ref={scrollRef} style={{ borderRadius: 24, overflow: 'hidden', height: isMobile ? 250 : 300 }}>
          <Image src={project.image} alt={project.title} fit="cover" style={{ width: '100%', height: '100%' }} />
        </Box>
        <Group justify="space-between" mt={12}>
          <Text fw={600}>{project.title}</Text>
          <IconArrowUpRight size={18} />
        </Group>
      </UnstyledButton>
    </Grid.Col>
  );
});

export const MoreProjects = memo(() => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const selectedProject = idParams();
  
  // Get 3 random projects excluding current - memoized to prevent reshuffling on re-render
  const otherProjects = useMemo(() => 
    ProjectsData
      .filter(p => p.id !== selectedProject.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3),
    [selectedProject.id]
  );

  return (
    <Box w={'85vw'} mt={100} mb={60}>
      <Title order={3} ta="center" mb={40}>More Projects</Title>
      <Grid gutter={isMobile ? 16 : 24}>
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} isMobile={isMobile} />
        ))}
      </Grid>
    </Box>
  );
});