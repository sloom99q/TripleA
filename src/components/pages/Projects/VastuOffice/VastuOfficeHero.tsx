'use client';

import { Box, Stack, Text, Button, Group, Container, Title, Badge } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mantine/hooks";
import { useMemo, useCallback } from "react";

export default function VastuOfficeHero() {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleCTAClick = useCallback(() => {
    router.push('/contact');
  }, [router]);

  const heroContent = useMemo(() => ({
    badge: 'Vastu Office',
    title: 'Office Designed Based on Vastu Shastra Principles',
    subtitle: 'A workspace engineered for focus, efficiency, and business performance',
    buttonText: 'Start Your Office Project',
  }), []);

  return (
    <Box style={{ background: '#fff', py: 100 }} component="section">
      <Container size="xl" px={{ base: 'md', md: 'xl' }}>
        <Stack gap={isMobile ? 'lg' : 'xl'} align="center" style={{ textAlign: 'center' }}>
          <Badge
            size="lg"
            variant="light"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              color: '#000',
              borderRadius: '8px',
              padding: '8px 20px',
              fontWeight: 600,
            }}
          >
            {heroContent.badge}
          </Badge>

          <Title
            order={2}
            size="clamp(2rem, 6vw, 4rem)"
            fw={700}
            c="#000"
            style={{
              lineHeight: 1.2,
              letterSpacing: '-0.5px',
              maxWidth: '900px',
            }}
          >
            {heroContent.title}
          </Title>

          <Text
            size="lg"
            c="#666"
            style={{
              lineHeight: 1.7,
              maxWidth: '700px',
              fontSize: isMobile ? '16px' : '18px',
            }}
          >
            {heroContent.subtitle}
          </Text>

          <Group gap="md" mt={isMobile ? 'md' : 'lg'} justify="center">
            <Button
              size={isMobile ? "md" : "lg"}
              radius="md"
              fw={700}
              onClick={handleCTAClick}
              rightSection={<IconArrowRight size={20} />}
              style={{
                backgroundColor: '#000',
                color: '#fff',
                padding: isMobile ? '12px 24px' : '16px 40px',
                fontSize: isMobile ? '14px' : '16px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {heroContent.buttonText}
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
