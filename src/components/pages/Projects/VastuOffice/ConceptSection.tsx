'use client';

import { Box, Stack, Text, Container, Group, Title } from "@mantine/core";
import { IconBulb } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { useMemo } from "react";

export default function ConceptSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const conceptData = useMemo(() => ({
    heading: 'Concept',
    description: 'This project was designed using Vastu Shastra principles to create a balanced and high-performing office environment.',
    detail: 'Every decision was made to support focus, improve workflow, and enhance the overall efficiency of daily operations.',
  }), []);

  return (
    <Box style={{ width: '100%', background: '#fff', padding: isMobile ? '60px 0' : '100px 0' }}>
      <Container size="xl" px={{ base: 'md', md: 'xl' }}>
        <Stack gap={isMobile ? "lg" : "xl"} align="flex-start">
          {/* Header with icon */}
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
              <IconBulb 
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
              {conceptData.heading}
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
              {conceptData.description}
            </Text>

            <Text
              size="sm"
              c="#666"
              style={{
                lineHeight: 1.7,
              }}
            >
              {conceptData.detail}
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

