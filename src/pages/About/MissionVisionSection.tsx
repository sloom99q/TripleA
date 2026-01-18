import { Box, Container, Grid, Stack, Text, Title } from '@mantine/core';
import { IconTargetArrow, IconEye, type Icon } from '@tabler/icons-react';
import CustomBadge from '@/components/CustomBadge';
import { MissionVisionData } from '@/mockups/AboutData';

interface MissionVisionProps {
  mission?: {
    title: string;
    content: string;
  };
  vision?: {
    title: string;
    content: string;
  };
}

const MissionCard = ({
  icon: IconComponent,
  title,
  content,
  variant,
}: {
  icon: Icon;
  title: string;
  content: string;
  variant: 'light' | 'dark';
}) => {
  const isLight = variant === 'light';

  return (
    <Box
      p={{ base: 'lg', md: 50 }}
      style={{
        backgroundColor: isLight ? '#f8f9fa' : '#000',
        borderTopLeftRadius: isLight ? 60 : 0,
        borderBottomRightRadius: isLight ? 0 : 60,
        borderTopRightRadius: isLight ? 0 : 60,
        borderBottomLeftRadius: isLight ? 60 : 0,
        height: '100%',
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Stack gap="md">
        <Box
          style={{
            width: 64,
            height: 64,
            backgroundColor: isLight ? '#000' : 'rgba(255,255,255,0.1)',
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconComponent size={32} stroke={1.5} style={{ color: 'white' }} />
        </Box>

        <Title order={3} fw={600} size="lg" c={isLight ? 'dark' : 'white'}>
          {title}
        </Title>

        <Text
          size="md"
          c={isLight ? 'dimmed' : '#a0a0a0'}
          style={{ lineHeight: 1.8 }}
        >
          {content}
        </Text>
      </Stack>
    </Box>
  );
};

export default function MissionVisionSection({
  mission = MissionVisionData.mission,
  vision = MissionVisionData.vision,
}: MissionVisionProps) {
  return (
    <Box style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container size="lg">
        <Stack align="center" gap="md" mb={60}>
          <CustomBadge>Our Purpose</CustomBadge>

          <Title
            order={2}
            size="clamp(2rem, 5vw, 3rem)"
            fw={500}
            ta="center"
            style={{ lineHeight: 1.2 }}
          >
            Driven by Purpose
          </Title>
        </Stack>

        <Grid gutter={{ base: 'md', md: 0 }}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MissionCard
              icon={IconTargetArrow}
              title={mission.title}
              content={mission.content}
              variant="light"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MissionCard
              icon={IconEye}
              title={vision.title}
              content={vision.content}
              variant="dark"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
