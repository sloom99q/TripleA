import { Box, Container, Grid, Stack, Text, Title } from '@mantine/core';
import CustomBadge from '@/components/CustomBadge';
import { WhyChooseUsData } from '@/mockups/AboutData';
import type { Icon } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

interface WhyChooseItem {
  icon: Icon;
  title: string;
  description: string;
}

interface WhyChooseUsSectionProps {
  title?: string;
  subtitle?: string;
  items?: WhyChooseItem[];
}

const FeatureCard = ({ item, index }: { item: WhyChooseItem; index: number }) => {
  const Icon = item.icon;
  const isMobile = useMediaQuery('(max-width: 762px)');

  return (
    <Box
      p="xl"
      bdrs={
        isMobile ? '0px 50px 0 50px' : '50px'
      }
      style={{
        height: '100%',
        backgroundColor: index % 2 === 0 ? '#0a0a0a' : '#1a1a1a'
      }}
    >
      <Stack gap="md">
      <Box
        style={{
        width: 56,
        height: 56,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}
      >
        <Icon size={28} stroke={1.5} style={{ color: 'white' }} />
      </Box>

      <Title order={4} fw={600} size="md" c="white">
        {item.title}
      </Title>

      <Text size="md" c="#a0a0a0" style={{ lineHeight: 1.7 }}>
        {item.description}
      </Text>
      </Stack>
    </Box>
  );
};

export default function WhyChooseUsSection({
  title = 'Why Choose Triple A',
  subtitle = 'Our Advantage',
  items = WhyChooseUsData,
}: WhyChooseUsSectionProps) {
  return (
    <Box my={100} bg="#fff" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container size="xl" px="md">
        <Grid gutter={{ base: 24, md: 48 }} align="center">
          {/* Left Column - Title */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="md">
              <CustomBadge bg="#333">{subtitle}</CustomBadge>

              <Title
                order={2}
                size="clamp(2rem, 5vw, 3rem)"
                fw={500}
                style={{ lineHeight: 1.2 }}
              >
                {title}
              </Title>

              <Text size="md" c="dimmed" style={{ lineHeight: 1.8 }}>
                With years of experience and a commitment to excellence, we deliver
                results that exceed expectations. Here's what sets us apart from the
                rest.
              </Text>
            </Stack>
          </Grid.Col>

          {/* Right Column - Feature Cards */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Grid gutter={16}>
              {items.map((item, index) => (
                <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
                  <FeatureCard item={item} index={index} />
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
