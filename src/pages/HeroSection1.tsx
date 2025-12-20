import React from 'react';
import '../css/smoke.css';
import { 
  Container, 
  Group, 
  Button, 
  Text, 
  Box, 
  Stack, 
  Grid, 
  Image, 
  ActionIcon,
  Badge,
  Anchor,
  Flex,
  Paper
} from '@mantine/core';
import { 
  IconStar, 
  IconArrowRight, 
  IconChevronDown, 
  IconMenu2 
} from '@tabler/icons-react';

export default function HeroSection() {
  return (
    <Container
    // bg={'#0a0a0a'}
    // mih="100vh"
    // c={'white'}
    >
      {/* Navigation */}
      <Box
        style={{
          position: 'fixed',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          width: '90%',
          // backdropFilter: 'blur(10px)',
          maxWidth: '1200px',
        }}
      >
        <Box
          p="md"
          style={{
            backgroundColor: '#0a0a0adc',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '32px',
            backdropFilter: 'blur(5px)',
          }}
        >
          <Group justify="space-between" align="center">
            <Image
              src="https://framerusercontent.com/images/duRtoIIUg5pJHSrEAoXb5RLVCc.svg"
              alt="Salem Alazzawi"
              h={30}
              w="auto"
            />
            
            <Group gap="lg" visibleFrom="md">
              <Anchor href="#services" c="white" td="none">Services</Anchor>
              <Anchor href="#projects" c="white" td="none">Projects</Anchor>
              <Anchor href="#testimonials" c="white" td="none">Testimonials</Anchor>
              <Anchor href="#contact" c="white" td="none">Contact</Anchor>
            </Group>

            <Group>
              <Button
                variant="gradient"
                gradient={{ from: '#0a0a0a', to: 'rgba(255, 255, 255, 0.1)', deg: 180 }}
                radius="xl"
                leftSection={<IconStar size={16} />}
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                }}
              >
                Get in Touch
              </Button>
              <ActionIcon
                variant="subtle"
                color="white"
                hiddenFrom="md"
              >
                <IconMenu2 size={20} />
              </ActionIcon>
            </Group>
          </Group>
        </Box>
      </Box>

      {/* Hero Section */}
      <Container size="xl" pt={120} pb={60}>
        <Stack align="center" gap="xl">
          {/* Badge */}
          <Badge
            size="lg"
            radius="lg"
            variant="filled"
            fw={600}
            color="dark"
            style={{
              backgroundColor: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '16px 24px 20px 8px rgba(0, 0, 0, 0.4), 0px 2px 0px 0px rgba(184, 180, 180, 0.08) inset',
            }}
            leftSection={
              <Box
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  style={{
                    width: 14,
                    height: 14,
                    backgroundColor: '#111111',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    style={{
                      width: 5,
                      height: 5,
                      backgroundColor: 'white',
                      borderRadius: '50%',
                    }}
                  />
                </Box>
              </Box>
            }
          >
            UI/UX & Graphic Designer
          </Badge>

          {/* Main Heading */}
          <Text
            size="4rem"
            fw={700}
            c={'white'}
            ta="center"
            style={{
              // fontSize: 'clamp(2rem, 8vw, 4rem)',
              lineHeight: 1.1,
            }}
          >
            Salem{' '}
            <Text span c="rgba(255, 255, 255, 0.6)">
              Alazzawi
            </Text>
          </Text>

          {/* Description */}
          <Text
            size="lg"
            ta="center"
            maw={600}
            c="rgba(255, 255, 255, 0.8)"
            lh={1.6}
          >
            I'm a versatile designer specializing in graphic, web, and product design to help grow your business. Let's build something great!
          </Text>

          {/* Buttons */}
          <Group gap="md" mt="xl">
            <Button
              size="lg"
              radius="xl"
              variant="gradient"
              gradient={{ from: '#333', to: '#0a0a0a', deg: 180 }}
              style={{ minWidth: 180 }}
            >
              See All Projects
            </Button>
            <Button
              size="lg"
              radius="xl"
              variant="gradient"
              gradient={{ from: 'white', to: '#999', deg: 180 }}
              c="black"
              style={{ minWidth: 160 }}
            >
              Contact Now
            </Button>
          </Group>

          {/* Projects Preview */}
          <Box mt={80} w="100%">
            <Grid gutter="md">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Box
                  style={{
                    backgroundColor: '#111111',
                    borderRadius: '20px',
                    padding: '20px',
                    position: 'relative',
                    cursor: 'pointer',
                    boxShadow: '16px 24px 20px 8px rgba(0, 0, 0, 0.4), 0px 2px 0px 0px rgba(184, 180, 180, 0.08) inset',
                    transition: 'transform 0.3s ease',
                  }}
                  className="project-card"
                >
                  <Box
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      marginBottom: '20px',
                    }}
                  >
                    <Image
                      src="https://framerusercontent.com/images/lpo2IfbEoH5pVlCclxyuFUYN7w.png"
                      alt="Fade Project"
                      style={{
                        boxShadow: '20px 30px 20px 8px rgba(0, 0, 0, 0.4)',
                      }}
                    />
                  </Box>
                  <ActionIcon
                    variant="filled"
                    color="dark"
                    radius="xl"
                    size="lg"
                    style={{
                      position: 'absolute',
                      bottom: 20,
                      right: 20,
                      backgroundColor: '#0a0a0a',
                      transform: 'rotate(-35deg)',
                    }}
                  >
                    <IconArrowRight size={20} />
                  </ActionIcon>
                </Box>
              </Grid.Col>
              
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Box
                  style={{
                    backgroundColor: '#111111',
                    borderRadius: '20px',
                    padding: '20px',
                    position: 'relative',
                    cursor: 'pointer',
                    boxShadow: '16px 24px 20px 8px rgba(0, 0, 0, 0.4), 0px 2px 0px 0px rgba(184, 180, 180, 0.08) inset',
                    transition: 'transform 0.3s ease',
                  }}
                  className="project-card"
                >
                  <Box
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      marginBottom: '20px',
                    }}
                  >
                    <Image
                      src="https://framerusercontent.com/images/sy0b9tueLscYoe1Yckd5M2kdM.jpeg"
                      alt="Brandin Project"
                      style={{
                        boxShadow: '20px 30px 20px 8px rgba(0, 0, 0, 0.4)',
                      }}
                    />
                  </Box>
                  <ActionIcon
                    variant="filled"
                    color="dark"
                    radius="xl"
                    size="lg"
                    style={{
                      position: 'absolute',
                      bottom: 20,
                      right: 20,
                      backgroundColor: '#0a0a0a',
                      transform: 'rotate(-35deg)',
                    }}
                  >
                    <IconArrowRight size={20} />
                  </ActionIcon>
                </Box>
              </Grid.Col>
            </Grid>
          </Box>

          {/* Scroll Arrow */}
          <ActionIcon
            variant="subtle"
            color="white"
            size="xl"
            mt="xl"
            style={{
              animation: 'bounce 2s infinite',
            }}
          >
            <IconChevronDown size={24} />
          </ActionIcon>
        </Stack>
      </Container>

    <Box className="smoke-container">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="smoke" style={{ animationDelay: `${i * 1.5}s` }} />
      ))}
    </Box>
      {/* Background Video */}
      {/* <Box
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: -1,
          opacity: 0.3,
          overflow: 'hidden',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="https://videos.pexels.com/video-files/9694443/9694443-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
      </Box> */}

      {/* Shooting Stars Effect */}
<Box
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    pointerEvents: 'none',
    overflow: 'hidden',
  }}
>
  {[...Array(5)].map((_, i) => {
    const top = Math.random() * 0; // leave some margin
    const delay = Math.random() * 20;
    const duration = 3 + Math.random() * 25;

    return (
      <Box
        key={i}
        style={{
          position: 'absolute',
          width: '150px',
          height: '2px',
          background: 'linear-gradient(270deg, rgba(255,255,255,0.8), rgba(255,255,255,0))',
          borderRadius: '2px',
          top: `${top}%`,
          left: `200px`, // Start off-screen
          transform: 'rotate(45deg)', // Diagonal direction
          animation: `shooting-star ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  })}
</Box>

<style>{`
  @keyframes shooting-star {
    0% {
      transform: translate(0, 0) rotate(45deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translate(150vw, 150vh) rotate(45deg);
      opacity: 0;
    }
  }
`}</style>

    </Container>
  );
}