import { Box, Stack, Text } from "@mantine/core";
import styles from '@/css/HeroSection.module.css';
import motionStyles from '@/css/HeroScroll.module.css';

export default function HeroContact() {
  return (
    <Box
      className="nav-boundary"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://framerusercontent.com/images/JSTMEaSil43hxHBsMDeWAkpf8.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        borderBottomLeftRadius: '50px',
        borderBottomRightRadius: '50px',
      }}
    >
      <Stack mt={100} gap="md" >
        {/* <Text size="xl" fw={700}>Triple A.</Text> */}
        <Text className={`${styles.mainHeading} ${motionStyles.scrollFloatSmall}`} size="lg" fw={600} style={{ lineHeight: 1.2 }}>Your Fit-out Vision Is <br /> Within Reach</Text>
        <Text className={`${styles.subheading} ${motionStyles.scrollFloatSmall}`} size="md" c="#d0d0d0">Start the conversation and take the first step.</Text>
      </Stack>
    </Box>
  );
}