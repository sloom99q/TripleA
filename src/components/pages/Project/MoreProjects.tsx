'use client';

import { Box, Grid, Group, Image, Text, Title, UnstyledButton } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useParams, useRouter } from "next/navigation";
import { ProjectsData } from '@/mockups/ProjectsData';
import { useMemo } from "react";

export const MoreProjects = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const otherProjects = useMemo(() =>
    ProjectsData
      .filter((p) => p.id !== params?.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3),
    [params?.id]
  );

  return (
    <Box w={'85vw'} mt={100} mb={60}>
      <Title order={3} ta="center" mb={40}>More Projects</Title>
      <Grid gutter={isMobile ? 16 : 24}>
        {otherProjects.map((project) => (
          <Grid.Col key={project.id} span={{ base: 12, sm: 12, md: 4 }}>
            <UnstyledButton onClick={() => router.push(`/projects/${project.id}`)} style={{ width: '100%' }}>
              <Box style={{ borderRadius: 24, overflow: 'hidden', height: isMobile ? 250 : 300 }}>
                <Image
                  src={typeof project.image === 'string' ? project.image : project.image.src}
                  alt={project.title}
                  fit="cover"
                  style={{ width: '100%', height: '100%' }}
                />
              </Box>
              <Group justify="space-between" mt={12}>
                <Text fw={600}>{project.title}</Text>
                <IconArrowUpRight size={18} />
              </Group>
            </UnstyledButton>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};