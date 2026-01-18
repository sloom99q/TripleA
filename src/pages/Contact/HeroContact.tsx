import { Box, Stack, Text } from "@mantine/core";
import styles from '@/css/HeroSection.module.css';
import motionStyles from '@/css/HeroScroll.module.css';
// @ts-ignore
import HeroImg from '@/assets/imgs/HeroImg.webp';

export default function HeroContact() {
  return (
    <Box
      className="nav-boundary"
      style={{
        position: 'relative',
        minHeight: '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        borderBottomLeftRadius: '50px',
        borderBottomRightRadius: '50px',
        overflow: 'hidden',
      }}
    >
      {/* Hero image for LCP */}
      <img
        src={HeroImg}
        alt="Contact hero background"
        width={1920}
        height={450}
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
          zIndex: 0,
        }}
      />
      {/* Overlay */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
          zIndex: 1,
        }}
      />
      <Stack mt={100} gap="md" style={{ position: 'relative', zIndex: 2 }}>
        <Text className={`${styles.mainHeading} ${motionStyles.scrollFloatSmall}`} size="lg" fw={600} style={{ lineHeight: 1.2 }}>Your Fit-out Vision Is <br /> Within Reach</Text>
        <Text className={`${styles.subheading} ${motionStyles.scrollFloatSmall}`} size="md" c="#d0d0d0">Start the conversation and take the first step.</Text>
      </Stack>
    </Box>
  );
}