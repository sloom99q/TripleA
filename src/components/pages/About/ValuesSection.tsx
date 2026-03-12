import { Box, Container, Grid, Paper, Stack, Text, Title } from '@mantine/core';
import CustomBadge from '@/components/CustomBadge';
import { ValuesData } from '@/mockups/AboutData';
import type { Icon } from '@tabler/icons-react';

interface ValueItem {
  icon: Icon;
  title: string;
  description: string;
}

interface ValuesSectionProps {
  title?: string;
  subtitle?: string;
  values?: ValueItem[];
}

const ValueCard = ({ value, index }: { value: ValueItem; index: number }) => {
  const Icon = value.icon;

  return (
    <Paper
      p="xl"
      style={{
        backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#ffffff',
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,
        border: 'none',
        height: '100%',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <Stack gap="md">
        <Box
          style={{
            width: 56,
            height: 56,
            backgroundColor: '#000',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon size={28} stroke={1.5} style={{ color: 'white' }} />
        </Box>

        <Title order={4} fw={600} size="md">
          {value.title}
        </Title>

        <Text size="md" c="dimmed" style={{ lineHeight: 1.7 }}>
          {value.description}
        </Text>
      </Stack>
    </Paper>
  );
};

export default function ValuesSection({
  title = 'What We Stand For',
  subtitle = 'Our Core Values',
  values = ValuesData,
}: ValuesSectionProps) {
  return (
    <Box m={25} py={100} bg="rgb(245, 245, 245)" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', borderRadius: 70 }}>
      <Container size="lg">
        <Stack align="center" gap="md" mb={60}>
          <CustomBadge>{subtitle}</CustomBadge>

          <Title
            order={2}
            size="lg"
            fw={500}
            ta="center"
            style={{ lineHeight: 1.2 }}
          >
            {title}
          </Title>

          <Text size="md" c="dimmed" ta="center" maw={600}>
            These principles guide everything we do, from the smallest detail to the
            grandest vision.
          </Text>
        </Stack>

        <Grid gutter={{ base: 'md', md: 'xl' }}>
          {values.map((value, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <ValueCard value={value} index={index} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
