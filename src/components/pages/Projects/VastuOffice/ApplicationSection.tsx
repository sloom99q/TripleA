'use client';

import { Box, Stack, Text, Container, Group, List, ThemeIcon, Title } from "@mantine/core";
import { IconBuilding, IconCheck } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { useMemo } from "react";

export default function ApplicationSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const applicationContent = useMemo(() => ({
    heading: 'Application in This Office',
    subheading: 'How we translated strategy into design:',
    points: [
      'Desk orientation aligned to improve focus and decision-making',
      'Clear circulation paths to support smooth daily movement',
      'Functional zoning based on team structure and workflow',
      'Balanced lighting and space distribution for comfort and productivity',
    ],
  }), []);

  return (
    <Box style={{ width: '100%', background: '#f5f5f5', padding: isMobile ? '60px 0' : '100px 0' }}>
      <Container size="xl" px={{ base: 'md', md: 'xl' }}>
        <Stack gap={isMobile ? "lg" : "xl"} align="flex-start">
          {/* Header */}
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
              <IconBuilding 
                size={isMobile ? 24 : 28} 
                color="#000" 
                stroke={2}
              />
            </Box>
            <Stack gap="xs">
              <Title
                order={3}
                size="clamp(1.2rem, 3vw, 1.8rem)"
                fw={700}
                c="#000"
                style={{ lineHeight: 1.2 }}
              >
                {applicationContent.heading}
              </Title>
              <Text
                size="sm"
                c="#666"
              >
                {applicationContent.subheading}
              </Text>
            </Stack>
          </Group>

          {/* Points List */}
          <Box style={{ paddingLeft: isMobile ? 0 : '64px', width: '100%' }}>
            <List
              spacing="md"
              size="md"
              center
              icon={
                <ThemeIcon 
                  color="#000" 
                  size={24} 
                  radius="50%" 
                  variant="light"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <IconCheck size={14} stroke={3} />
                </ThemeIcon>
              }
            >
              {applicationContent.points.map((point, index) => (
                <List.Item key={index}>
                  <Text
                    size="sm"
                    c="#333"
                    style={{
                      lineHeight: 1.6,
                    }}
                  >
                    {point}
                  </Text>
                </List.Item>
              ))}
            </List>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
