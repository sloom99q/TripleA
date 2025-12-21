import { Container, Title, Text, Button, Box, Stack, Group, ActionIcon } from '@mantine/core';
import { IconArrowRight, IconMoon, IconMoonFilled, IconSun, IconSunFilled } from '@tabler/icons-react';
import styles from '../css/HeroSection.module.css';
import motionStyles from '../css/HeroScroll.module.css';
import ColorSchemeContext from '../ColorSchemeContext';
// import ThemeToggle from '../components/ThemeToggle';
import { useContext, useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [shiftPx, setShiftPx] = useState(0);
  const lastScrollRef = useRef(0);

  // function ThemeToggle() {
  // const colorSchemeContext = useContext (ColorSchemeContext);
  // const dark = colorSchemeContext.colorScheme === 'dark';

  // return (
  // );
// }

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const last = lastScrollRef.current;
      const delta = current - last;

      setShiftPx((prev) => {
        const next = prev + delta * 0.25; // follow scroll but heavily damped
        return Math.max(0, Math.min(100, next)); // allow a bit more travel while staying inside
      });

      lastScrollRef.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
        backgroundImage: 'url(https://framerusercontent.com/images/JSTMEaSil43hxHBsMDeWAkpf8.png?scale-down-to=2048)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '95vh',
        display: 'flex',
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
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
          className={motionStyles.textMotion}
          style={{
            ['--scrollShift' as string]: `${shiftPx}px`,
          }}
        >
            {/* <Box style={{ maxWidth: '1150px', width: '100%' }}> */}
              <Title
                order={1}
                className={styles.mainHeading}
                style={{
                  fontWeight: 550,
                  color: 'white',
                  textAlign: 'center',
                  lineHeight: 1.2,
                  margin: '0 auto',
                  fontSize: 'clamp(1.5rem, 8vw, 6rem)', // Small on mobile, very large on desktop
                  // width: '100%',
                }}
              >
                Transforming Spaces, <br />Creating Dreams
              </Title>
            {/* </Box> */}

          <Text
            className={styles.subheading}
            style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              color: '#d0d0d0',
              textAlign: 'center',
              maxWidth: '600px',
              fontWeight: 400,
            }}
          >
            Hundreds of satisfied clients trust our expert architectural design services
          </Text>

          <Group justify="center" mt="xl">
            <Button
              size="lg"
              radius="xl"
              className={styles.ctaButton}
              style={{
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 600,
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem',
                transition: 'all 0.3s ease',
              }}
              rightSection={<IconArrowRight size={20} stroke={2} />}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
              }}
            >
              Get a Free Consultation
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
    </Box>
  );
}
