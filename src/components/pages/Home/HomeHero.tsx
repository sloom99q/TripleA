'use client';

import { Container, Title, Text, Button, Box, Stack, Group } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import styles from '@/css/HeroSection.module.css';
import '@/css/HeroScroll.globals.css';
import motionStyles from '@/css/HeroScroll.module.css';
import { useRouter } from 'next/navigation';
// @ts-ignore
import HeroImg from '@/assets/imgs/HeroImg.webp';

export default function HeroSection() {
        const router = useRouter();

  return (
    <Box m={25}>
    {/* <ActionIcon
      variant="light"
      color={dark ? 'yellow' : 'black'}
      onClick={() => {
      console.log('colorSchemeContext:', colorSchemeContext);
      colorSchemeContext.onChange(dark ? 'light' : 'dark');
      }}
      title="Toggle color scheme"
    >
      {dark ? (
      <IconSunFilled style={{ width: 18, height: 18 }} />
      ) : (
      <IconMoonFilled style={{ width: 18, height: 18 }} />
      )}
    </ActionIcon> */}
    <Box
      className={styles.heroContainer}
      style={{
      backgroundImage: `none`,
      minHeight: '95vh',
      display: 'flex',
      borderRadius: 70,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      }}
    >
      {/* LCP hero image - use native img for fetchpriority support */}
      <img
        src={typeof HeroImg === 'string' ? HeroImg : HeroImg.src}
        alt="Background photograph of a modern interior showroom used in homepage hero"
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
          borderRadius: 70,
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
        background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.9) 100%)',
        zIndex: 1,
      }}
      />

      {/* Content */}
      <Container size="lg" className={styles.content} style={{ position: 'relative', zIndex: 2 }}>
      <Stack
        align="center"
        justify="center"
        gap="lg"
      >
        <Title
        order={1}
        className={`${styles.mainHeading} ${motionStyles.scrollFloat}`}
        size={'xl'}
        style={{
          fontWeight: 550,
          color: 'white',
          textAlign: 'center',
          lineHeight: 1.2,
          margin: '0 auto',
        }}
        >
        Transforming Spaces, <br />Creating Dreams
        </Title>

        <Text
        className={`${styles.subheading} ${motionStyles.scrollFloat}`}
        size="md"
        style={{
          color: '#d0d0d0',
          textAlign: 'center',
          maxWidth: '600px',
          fontWeight: 400,
        }}
        >
        Luxury interior fit-out, MEP and turnkey solutions for homes and businesses across Dubai
        </Text>

        <Group justify="center" mt="xl">


<button
  className={`${styles.ctaButton} ${motionStyles.scrollFloat}`}
  onClick={() => router.push("/contact")}
  type="button"
>
  <span className={styles.inner}>
    <span className={styles.label}>Get a Free Consultation</span>
    <IconArrowRight className={styles.icon} size={18} stroke={2} />
  </span>
</button>


        </Group>
      </Stack>
      </Container>
    </Box>
    </Box>
  );
}
