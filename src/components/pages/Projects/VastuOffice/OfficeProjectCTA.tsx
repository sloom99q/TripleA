'use client';

import { Box, Stack, Text, Button, Group, Container, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mantine/hooks";
import { useMemo, useCallback } from "react";

export default function OfficeProjectCTA() {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const ctaContent = useMemo(() => ({
    heading: 'Your office should work as hard as you do.',
    subheading: 'Let\'s create a workspace that drives performance.',
    buttonText: 'Start Your Office Project',
  }), []);

  const handleCTAClick = useCallback(() => {
    router.push('/contact');
  }, [router]);

  return (
    <Box style={{ width: '100%', background: '#000', padding: isMobile ? '60px 0' : '100px 0' }}>
      <Container size="xl" px={{ base: 'md', md: 'xl' }}>
        <Stack 
          gap={isMobile ? "md" : "lg"} 
          align="center" 
          style={{ 
            textAlign: 'center',
          }}
        >
            <Title
              order={2}
              size="clamp(1.8rem, 5vw, 3rem)"
              fw={700}
              c="white"
              style={{
                lineHeight: 1.2,
                maxWidth: '600px',
              }}
            >
              {ctaContent.heading}
            </Title>

            <Text
              size="md"
              c="#a0a0a0"
              style={{
                lineHeight: 1.6,
                maxWidth: '600px',
              }}
            >
              {ctaContent.subheading}
            </Text>

            <Group gap="md" mt={isMobile ? 'md' : 'lg'} justify="center">
              <Button
                size={isMobile ? "md" : "lg"}
                radius="md"
                fw={700}
                onClick={handleCTAClick}
                rightSection={<IconArrowRight size={20} />}
                style={{
                  backgroundColor: 'white',
                  color: '#000',
                  padding: isMobile ? '12px 24px' : '16px 40px',
                  fontSize: isMobile ? '14px' : '16px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {ctaContent.buttonText}
              </Button>
            </Group>
        </Stack>
      </Container>
    </Box>
  );
}
