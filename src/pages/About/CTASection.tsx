import { Badge, Box, Button, Container, Grid, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { IconChevronRight, IconMail, IconPhone } from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';

export default function CTASection() {
  const navigate = useNavigate();
  const [hoveredCTA, setHoveredCTA] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 992px)');

  return (
      <Container size="xl" style={{ position: 'relative', zIndex: 1 }} py={{ base: 60, md: 100 }} px={{ base: 'xl' }}>
        <Box
          onMouseEnter={() => setHoveredCTA(true)}
          onMouseLeave={() => setHoveredCTA(false)}
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Paper
            p={0}
            style={{
              background: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.06) 0%, rgba(10, 10, 10, 0) 28%), radial-gradient(circle at 80% 0%, rgba(140,140,140,0.08) 0%, rgba(12, 12, 12, 0) 22%), linear-gradient(145deg, #080808ff 0%, #0d0d0dff 50%, #060606ff 100%)',
              position: 'relative',
              overflow: 'hidden',
              borderTopLeftRadius: isMobile ? '40px' : '80px',
              borderBottomRightRadius: isMobile ? '40px' : '80px',
              borderTopRightRadius: '0px',
              borderBottomLeftRadius: '0px',
            }}
          >
            {/* Decorative corner accent - top left */}
            <Box
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '200px',
                height: '200px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 100%)',
                borderTopLeftRadius: '80px',
              }}
            />
            
            {/* Decorative corner accent - bottom right */}
            <Box
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: '200px',
                height: '200px',
                background: 'linear-gradient(315deg, rgba(255, 255, 255, 0.08) 0%, transparent 100%)',
                borderBottomRightRadius: '80px',
              }}
            />

            {/* Floating circles */}
            <Box
              style={{
                position: 'absolute',
                right: '15%',
                top: '20%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'pulse 6s ease-in-out infinite',
              }}
            />
            <Box
              style={{
                position: 'absolute',
                left: '10%',
                bottom: '15%',
                width: '200px',
                height: '200px',
                border: '2px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '50%',
                animation: 'float 10s ease-in-out infinite',
              }}
            />

            <Grid gutter={0} style={{ position: 'relative', zIndex: 1 }}>
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Box p={{ base: 'xl', sm: 40, md: 80 }}>
                  <Stack gap="lg">
                    <Badge
                      size="md"
                      variant="light"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        borderRadius: '8px',
                        padding: '12px 24px',
                        fontSize: '14px',
                        fontWeight: 600,
                        width: 'fit-content',
                      }}
                    >
                      GET IN TOUCH
                    </Badge>
                    <Title order={2} size={isMobile ? 32 : isTablet ? 42 : 52} fw={800} c="white" style={{ lineHeight: 1.2, letterSpacing: '-0.5px' }}>
                      Ready to Transform Your Space?
                    </Title>
                    <Text size="md" c="gray.4" style={{ fontSize: isMobile ? '16px' : '18px', lineHeight: 1.7, maxWidth: 500 }}>
                      Let's discuss your project and bring your vision to life with our expert team. We're here to make your interior dreams a reality.
                    </Text>
                    <Group gap="md" mt={20} wrap="wrap">
                      <Button
                      onClick={() => navigate('/contact')}
                        size={isMobile ? 'md' : 'xl'}
                        style={{
                          backgroundColor: 'white',
                          color: '#1a1a1a',
                          padding: isMobile ? '14px 28px' : '18px 48px',
                          fontSize: isMobile ? '16px' : '18px',
                          fontWeight: 700,
                          borderRadius: '12px',
                          transition: 'all 0.3s ease',
                        }}
                        rightSection={<IconChevronRight size={isMobile ? 18 : 22} />}
                      >
                        Start Your Project
                      </Button>
                      <Button
                        onClick={() => navigate('/projects')}
                        size={isMobile ? 'md' : 'xl'}
                        variant="outline"
                        style={{
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                          color: 'white',
                          padding: isMobile ? '14px 28px' : '18px 48px',
                          fontSize: isMobile ? '16px' : '18px',
                          fontWeight: 600,
                          borderRadius: '12px',
                          borderWidth: '2px',
                        }}
                      >
                        View All Projects
                      </Button>
                    </Group>
                  </Stack>
                </Box>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 5 }}>
                <Box p={{ base: 'xl', sm: 40, md: 80 }} style={{ borderLeft: isTablet ? 'none' : '1px solid rgba(255, 255, 255, 0.1)', borderTop: isTablet ? '1px solid rgba(255, 255, 255, 0.1)' : 'none' }}>
                  <Stack gap="xl">
                    <Box>
                      <Text size="sm" c="gray.5" fw={600} mb={20} tt="uppercase" style={{ letterSpacing: '1.5px' }}>
                        Contact Information
                      </Text>
                      <Stack gap={24}>
                        <Group gap="md">
                          <Box
                            style={{
                              width: isMobile ? 48 : 56,
                              height: isMobile ? 48 : 56,
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              borderRadius: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <IconPhone size={isMobile ? 24 : 28} color="white" stroke={1.5} />
                          </Box>
                          <Box>
                            <Text size="sm" c="gray.5" mb={4}>Call Us</Text>
                            <Text ff={'sans-serif'} size="md" c="white" fw={600}>+971 58 550 0359</Text>
                          </Box>
                        </Group>
                        <Group gap="md">
                          <Box
                            style={{
                              width: isMobile ? 48 : 56,
                              height: isMobile ? 48 : 56,
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              borderRadius: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <IconMail size={isMobile ? 24 : 28} color="white" stroke={1.5} />
                          </Box>
                          <Box>
                            <Text size="sm" c="gray.5" mb={4}>Email Us</Text>
                            <Text size="md" c="white" fw={600}>info@triple-a.ae</Text>
                          </Box>
                        </Group>
                      </Stack>
                    </Box>

                    <Box>
                      <Text size="sm" c="gray.5" fw={600} mb={16} tt="uppercase" style={{ letterSpacing: '1.5px' }}>
                        Quick Stats
                      </Text>
                      <Grid gutter="md">
                        <Grid.Col span={6}>
                          <Paper p={{ base: 'sm', md: 'md' }} style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px' }}>
                            <Title ff={'sans-serif'} order={3} size={isMobile ? 24 : 32} c="white" fw={700}>10+</Title>
                            <Text size="xs" c="gray.5">Years Experience</Text>
                          </Paper>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <Paper p={{ base: 'sm', md: 'md' }} style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px' }}>
                            <Title ff={'sans-serif'} order={3} size={isMobile ? 24 : 32} c="white" fw={700}>98%</Title>
                            <Text size="xs" c="gray.5">Client Satisfaction</Text>
                          </Paper>
                        </Grid.Col>
                      </Grid>
                    </Box>
                  </Stack>
                </Box>
              </Grid.Col>
            </Grid>
          </Paper>
        </Box>
      </Container>
  );
}
