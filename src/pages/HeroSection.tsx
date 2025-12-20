import { Container, Title, Text, Button, Box, Stack, Group, ActionIcon } from '@mantine/core';
import { IconArrowRight, IconMoon, IconMoonFilled, IconSun, IconSunFilled } from '@tabler/icons-react';
import styles from '../css/HeroSection.module.css';
import ColorSchemeContext from '../ColorSchemeContext';
// import ThemeToggle from '../components/ThemeToggle';
import { useContext } from 'react';

export default function HeroSection() {

  // function ThemeToggle() {
  const colorSchemeContext = useContext (ColorSchemeContext);
  const dark = colorSchemeContext.colorScheme === 'dark';

  // return (
  // );
// }
  return (
    <Box m={25}>
    <ActionIcon
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
    </ActionIcon>
    <Box
      className={styles.heroContainer}
      style={{
        backgroundImage: 'url(/src/assets/imgs/FamilySpace.JPG)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '95vh',
        display: 'flex',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* Dark overlay for better text readability */}
      <Box
        className={styles.overlay}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container size="lg" className={styles.content} style={{ position: 'relative', zIndex: 2 }}>
        {/* <Button onClick={ThemeToggle}>PRESS UR MOMA</Button> */}
        <Stack align="center" justify="center" gap="lg">
          <Title
            order={1}
            className={styles.mainHeading}
            style={{
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              fontWeight: 700,
              // fontFamily: 'Raleway',
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.2,
              maxWidth: '900px',
            }}
          >
            Transforming Spaces, Creating Dreams
          </Title>

          <Text
            className={styles.subheading}
            style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              // color: '#d0d0d0',
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
