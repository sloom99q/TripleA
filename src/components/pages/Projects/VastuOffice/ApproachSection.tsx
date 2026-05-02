'use client';

import { Box, Stack, Text, Container, Group, Title } from "@mantine/core";
import { IconBuildingFactory2 } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { useMemo } from "react";

export default function ApproachSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const approachContent = useMemo(() => ({
    heading: 'Our Approach (without Real Estate)',
    description: 'We combine design and fitout expertise to deliver offices that are not only visually refined, but also fully aligned with how businesses operate.',
    detail: 'From concept to execution, every detail is planned to support performance, efficiency, and long-term usability.',
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
              <IconBuildingFactory2 
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
              {approachContent.heading}
            </Title>
          </Group>

          {/* Content */}
          <Stack gap="md" style={{ paddingLeft: isMobile ? 0 : '64px' }}>
            <Text
              size="md"
              c="#333"
              style={{
                lineHeight: 1.7,
                fontWeight: 500,
              }}
            >
              {approachContent.description}
            </Text>

            <Text
              size="sm"
              c="#666"
              style={{
                lineHeight: 1.7,
              }}
            >
              {approachContent.detail}
            </Text>
          </Stack>

          
        </Stack>
      </Container>
    </Box>
  );
}
