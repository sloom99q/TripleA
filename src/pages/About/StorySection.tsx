import { Box, Container, Grid, Image, Stack, Text, Title } from '@mantine/core';
import CustomBadge from '@/components/CustomBadge';
import { StoryData } from '@/mockups/AboutData';

interface StorySectionProps {
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  image?: string;
}

export default function StorySection({
  title = StoryData.title,
  subtitle = StoryData.subtitle,
  paragraphs = StoryData.paragraphs,
  image = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
}: StorySectionProps) {
  return (
    <Container size="xl" py={80}>
      <Grid gutter={{ base: 40, md: 80 }} align="center">
        {/* Image Column */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Box
            style={{
              position: 'relative',
              borderTopLeftRadius: 60,
              borderBottomRightRadius: 60,
              overflow: 'hidden',
            }}
          >
            <Image
              src={image}
              alt="Our Story"
              fit="cover"
              h={{ base: 350, md: 500 }}
              style={{
                borderTopLeftRadius: 60,
                borderBottomRightRadius: 60,
              }}
            />
            {/* Decorative corner accent */}
            <Box
              style={{
                position: 'absolute',
                bottom: -10,
                right: -10,
                width: 120,
                height: 120,
                border: '3px solid #000',
                borderTopLeftRadius: 40,
                borderBottomRightRadius: 40,
                zIndex: -1,
              }}
            />
          </Box>
        </Grid.Col>

        {/* Content Column */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="md">
            <CustomBadge>{subtitle}</CustomBadge>

            <Title
              order={2}
              size="clamp(2rem, 5vw, 3rem)"
              fw={500}
              style={{ lineHeight: 1.2 }}
            >
              {title}
            </Title>

            <Stack gap="md">
              {paragraphs.map((paragraph, index) => (
                <Text
                  key={index}
                  size="md"
                  c="dimmed"
                  ta="justify"
                  style={{ lineHeight: 1.8 }}
                >
                  {paragraph}
                </Text>
              ))}
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
