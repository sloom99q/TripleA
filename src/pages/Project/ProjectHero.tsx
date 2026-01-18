import { Container, Title, Text, Box, Stack } from '@mantine/core';
import { Helmet } from 'react-helmet-async';
import { useMediaQuery } from '@mantine/hooks';
import styles from '@/css/HeroSection.module.css';
import motionStyles from '@/css/HeroScroll.module.css';
// @ts-ignore
import Emaar from '@/assets/imgs/Walls.webp';
import { ProjectHeroProps } from '@/mockups/ProjectsData';

export default function ProjectHero({ project }: ProjectHeroProps) {
  const title = project?.title ?? 'Emaar';
  const subtitle = project?.description ?? 'Dubai Biggest Client';
  const story = project?.story ?? subtitle;
  const heroImage = project?.image ?? Emaar;
  const client = project?.client ?? title;
  const duration = project?.duration ?? '—';
  const location = project?.location ?? 'Dubai, UAE';
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box mb={isMobile ? 40 : 100} m={25}>
      <Helmet>
        <title>{`${title} | Triple A Interiors`}</title>
        <meta name="description" content={story} />
      </Helmet>

    <Box
      className={styles.heroContainer}
      style={{
        minHeight: '95vh',
        display: 'flex',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Hero image element for better LCP */}
      <img
        src={heroImage}
        alt={`${title} project hero`}
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          borderRadius: 50,
          zIndex: 0,
        }}
      />
      <Box
        className={styles.overlay}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.85) 100%)',
          zIndex: 1,
        }}
      />

      <Container size="lg" className={styles.content} style={{ position: 'relative', zIndex: 2, width: '100%', paddingBottom: isMobile ? 24 : 48 }}>
        <Stack align="center" justify="center" gap="md">
          <Text
            className={motionStyles.scrollFloatMedium}
            size="sm"
            style={{
              color: 'rgba(255,255,255,0.7)',
              textAlign: 'center',
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}
          >
            Residential Design
          </Text>

          <Title
            order={1}
            className={`${styles.subheading} ${motionStyles.scrollFloatMedium}`}
            size="xl"
            style={{
              fontWeight: 500,
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.1,
              margin: '0 auto',
            }}
          >
            {title}
          </Title>
        </Stack>
      </Container>

      {/* White capsules at bottom inside hero - 2 items only */}
      <Box
        style={{
          position: 'absolute',
          bottom: isMobile ? 24 : 48,
          left: isMobile ? 24 : 48,
          right: isMobile ? 24 : 48,
          zIndex: 3,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 12 : 16,
        }}
      >
        {[
          { label: 'Duration', value: duration },
          { label: 'Location', value: location },
        ].map((item, idx) => (
          <Box
            key={idx}
            style={{
              background: 'white',
              borderRadius: 70,
              padding: '18px 24px',
              flex: 1,
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            <Text size="xs" c="gray.5" style={{ marginBottom: 4 }}>
              {item.label}
            </Text>
            <Text fw={600} c="dark.9" size="md">
              {item.value}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>

    {/* Story description below hero */}
    <Container size="md" style={{ marginTop: 80, paddingInline: 24 }}>
      <Text
        size="md"
        c="gray.5"
        style={{
          lineHeight: 1.75,
          textAlign: 'left',
        }}
      >
        {story}
      </Text>
    </Container>
    </Box>
  );
}
