import { Box, Container, Grid, Stack, Text, Title } from '@mantine/core';
import { StatsData } from '@/mockups/AboutData';

interface StatItem {
  value: string;
  label: string;
  description: string;
}

interface StatsSectionProps {
  stats?: StatItem[];
}

const StatCard = ({ stat, index }: { stat: StatItem; index: number }) => {
  return (
    <Box
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 200,
        padding: 40,
      }}
    >
      {/* Corner accents - matching your ClientsSection style */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 12,
          height: 12,
          borderTop: '0.5px solid #999',
          borderLeft: '0.5px solid #999',
        }}
      />
      <Box
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 12,
          height: 12,
          borderTop: '0.5px solid #999',
          borderRight: '0.5px solid #999',
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 12,
          height: 12,
          borderBottom: '0.5px solid #999',
          borderLeft: '0.5px solid #999',
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 12,
          height: 12,
          borderBottom: '0.5px solid #999',
          borderRight: '0.5px solid #999',
        }}
      />

      <Stack align="center" gap="xs">
        <Text
          size="clamp(2.5rem, 6vw, 4rem)"
          fw={600}
          style={{
            lineHeight: 1,
            color: '#000',
            letterSpacing: '-0.02em',
          }}
        >
          {stat.value}
        </Text>
        <Text size="md" fw={600} c="dark">
          {stat.label}
        </Text>
        <Text size="sm" c="dimmed">
          {stat.description}
        </Text>
      </Stack>
    </Box>
  );
};

export default function StatsSection({ stats = StatsData }: StatsSectionProps) {
  return (
    <Box py={60} bg="white">
      <Container size="md">
        <Grid gutter={0} columns={12}>
          {stats.map((stat, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
              <StatCard stat={stat} index={index} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
