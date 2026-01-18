import { Container, Box, Stack, Group, Text, Grid, Badge } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconBuildingSkyscraper,
  IconUsers,
  IconAward,
  IconMapPin,
  IconTrendingUp,
  IconCertificate,
} from '@tabler/icons-react';
import motionStyles from '@/css/HeroScroll.module.css';
import styles from '@/css/HeroSection.module.css';
// @ts-ignore
import AboutImg from '@/assets/imgs/AboutImg.webp';

const STATS_DATA = [
  { icon: IconBuildingSkyscraper, number: '100+', label: 'Projects Completed' },
  { icon: IconUsers, number: '50+', label: 'Happy Clients' },
  { icon: IconAward, number: '10+', label: 'Years Experience' },
  { icon: IconTrendingUp, number: '50+', label: 'Expert Team' },
];

type StatBoxProps = {
  icon: any;
  number: string;
  label: string;
  isMobile: boolean | undefined;
};

const StatBox = ({ icon: Icon, number, label, isMobile }: StatBoxProps) => (
  <Box
    p="xl"
    style={{
      backgroundColor: 'rgba(255, 255, 255, 0.06)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      borderRadius: '20px',
      height: '100%',
      minHeight: '160px',
      transition: 'all 0.3s ease',
      cursor: 'default',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      e.currentTarget.style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    <Stack gap="md" justify="space-between" h="100%" align={isMobile ? 'center' : 'flex-start'}>
      <Icon size={36} color="white" stroke={1.5} />
      <Box style={isMobile ? { textAlign: 'center' } : undefined}>
        <Text size="2rem" ff={'sans-serif'} fw={700} c="white" lh={1} mb={8}>{number}</Text>
        <Text size="sm" c="dimmed" fw={500}>{label}</Text>
      </Box>
    </Stack>
  </Box>
);

export default function AboutHeroSection() {
  const isMobile = useMediaQuery('(max-width: 992px)'); // 768px
  return (
    <Box>
      <Box
        m={25}
        mb={isMobile ? 0 : 25}
        style={{
          minHeight: '95vh',
          display: 'flex',
          borderRadius: 70,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Hero Image - LCP element */}
        <Box
          style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        borderRadius: 70,
        overflow: 'hidden',
          }}
        >
          <img
            src={AboutImg}
            alt="About Triple A"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              borderRadius: 70,
            }}
          />
        </Box>

        {/* Overlay */}
        <Box
          style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.85) 100%)',
        zIndex: 1,
        borderRadius: 70,
          }}
        />

        {/* Content */}
        <Container size="xl" style={{ position: 'relative', zIndex: 2, width: '100%' }} px={{ base: 'md', sm: 'xl', md: 50 }}>
          <Grid gutter={{ base: 'xl', md: 50, lg: 60 }} align="center" justify={isMobile ? 'center' : 'flex-start'}>
        {/* Left Side - Text Content */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack gap="xl" align={isMobile ? 'center' : 'flex-start'}>
            <Badge
          size="md"
          radius="md"
          variant="light"
          className={`${styles.mainHeading} ${motionStyles.scrollFloat}`}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            paddingLeft: 16,
            paddingRight: 16,
            textTransform: 'none',
            fontWeight: 500,
            width: 'fit-content',
          }}
            >
          About Triple A
            </Badge>

            <Box
          className={`${styles.mainHeading} ${motionStyles.scrollFloat}`}
          style={isMobile
            ? {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
              }
            : undefined
          }
          >
          <Text
            size="lg"
            fw={700}
            c="white"
            mb="md"
            style={{
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Who We Are
          </Text>

          <Box
            style={{
              width: '80px',
              height: '4px',
              backgroundColor: 'white',
              marginBottom: '1.5rem',
            }}
          />
            </Box>

            <Text className={`${styles.subheading} ${motionStyles.scrollFloat}`}
          c="#e8e8e8"
          size='md'
          ta={isMobile ? 'center' : 'left'}
          style={{
            lineHeight: 1.7,
            maxWidth: '560px',
            fontWeight: 400,
            textWrap: 'pretty',
          }}
            >
          A premier interior fit-out company based in Dubai, specializing in transforming
          commercial and residential spaces into exceptional environments through
          innovative design and flawless execution.
            </Text>

            <Group className={`${styles.ctaButton} ${motionStyles.scrollFloat}`} gap="xl" mt="xs">
          <Group gap="sm">
            <IconMapPin size={22} color="#aaa" stroke={1.8} />
            <Box>
              <Text size="xs" c="dimmed" tt="uppercase" fw={600} mb={2}>Location</Text>
              <Text size="md" fw={600} c="white">Dubai, UAE</Text>
            </Box>
          </Group>
          <Group gap="sm">
            <IconCertificate size={22} color="#aaa" stroke={1.8} />
            <Box>
              <Text size="xs" c="dimmed" tt="uppercase" fw={600} mb={2}>Certified</Text>
              <Text size="md" fw={600} c="white">ISO <span style={{ fontFamily: 'sans-serif' }}>9001</span></Text>
            </Box>
          </Group>
            </Group>
          </Stack>
        </Grid.Col>

        {/* Right Side - Stats Grid (hidden on mobile) */}
        {!isMobile && (
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Grid gutter="md">
          {STATS_DATA.map((stat, index) => (
            <Grid.Col key={index} span={{ base: 6, sm: 6 }}>
              <StatBox {...stat} isMobile={isMobile} />
            </Grid.Col>
          ))}
            </Grid>
          </Grid.Col>
        )}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}