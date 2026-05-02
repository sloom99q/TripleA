'use client';

import { Box, Stack, Text, Container, Group, Grid, Paper, Title } from "@mantine/core";
import { IconTrendingUp } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { useMemo, useState, useCallback } from "react";

export default function BusinessImpactSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const impactContent = useMemo(() => ({
    heading: 'Business Impact',
    subheading: 'This is not just a designed office — it\'s a workspace built to perform.',
    impacts: [
      'Higher team productivity',
      'Better workflow efficiency',
      'Reduced daily friction',
      'Improved work environment quality',
    ],
  }), []);

  const gridCols = useMemo(() => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 4;
  }, [isMobile, isTablet]);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  return (
    <Box style={{ width: '100%', background: '#fff', padding: isMobile ? '60px 0' : '100px 0' }}>
      <Container size="xl" px={{ base: 'md', md: 'xl' }}>
        <Stack gap={isMobile ? "lg" : "xl"} align="flex-start">
          {/* Header */}
          <Stack gap="md">
            <Group gap="md" align="flex-start">
              <Box
                style={{
                  width: isMobile ? 40 : 48,
                  height: isMobile ? 40 : 48,
                  backgroundColor: '#f0f0f0',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <IconTrendingUp 
                  size={isMobile ? 24 : 28} 
                  color="#000" 
                  stroke={2}
                />
              </Box>
              <Title
                order={3}
                size="clamp(1.2rem, 3vw, 1.8rem)"
                fw={700}
                c="#000"
                style={{ lineHeight: 1.2 }}
              >
                {impactContent.heading}
              </Title>
            </Group>

            <Text
              size="sm"
              c="#666"
              style={{ paddingLeft: isMobile ? 0 : '64px' }}
            >
              {impactContent.subheading}
            </Text>
          </Stack>

          {/* Impact Cards Grid */}
          <Box style={{ width: '100%', marginTop: isMobile ? 'md' : 'lg' }}>
            <Grid gutter={isMobile ? 'md' : 'lg'}>
              {impactContent.impacts.map((impact, index) => (
                <Grid.Col 
                  key={index}
                  span={{ base: 12, sm: 6, md: 3 }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Paper
                    p={isMobile ? 'lg' : 'xl'}
                    style={{
                      background: hoveredIndex === index 
                        ? 'rgba(0, 0, 0, 0.05)' 
                        : 'rgba(0, 0, 0, 0.02)',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '16px',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'default',
                      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    <Text
                      size={isMobile ? "sm" : "md"}
                      fw={600}
                      c="#000"
                      style={{ lineHeight: 1.4 }}
                    >
                      {impact}
                    </Text>
                  </Paper>
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
