'use client';

import { Box, Grid, Group, Stack, Text, Title } from '@mantine/core';
import CustomBadge from '@/components/CustomBadge';
import ContactForm from '@/components/pages/Contact/ContactForm';

/**
 * HeroLeadForm — homepage lead capture placed directly under the hero.
 *
 * Design mirrors the Projects "Vastu Shastra" section: a dark left panel
 * (badge eyebrow + tight headline + one meta line) beside a light panel that
 * holds the FULL reused ContactForm shown directly — same Resend integration,
 * validation, a11y and analytics, no duplicated logic.
 */
export default function HeroLeadForm() {
  return (
    <Box component="section" aria-labelledby="hero-lead-heading" style={{ width: '100%' }}>
      <Box
        style={{
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 50,
          overflow: 'hidden',
          background: 'linear-gradient(150deg,#080808 0%,#0e0e0e 60%,#090909 100%)',
          boxShadow: '0 24px 70px rgba(0,0,0,0.28)',
        }}
      >
        <Grid gutter={0} align="stretch">
          {/* Left panel — brand / intent */}
          <Grid.Col
            span={{ base: 12, md: 5 }}
            style={{
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* decorative rings — top right */}
            {[1, 1.6, 2.3].map((s, i) => (
              <Box
                key={i}
                aria-hidden
                style={{
                  position: 'absolute',
                  top: '-4vh',
                  right: '-3vw',
                  width: `clamp(${Math.round(90 * s)}px, ${Math.round(11 * s)}vw, ${Math.round(190 * s)}px)`,
                  height: `clamp(${Math.round(90 * s)}px, ${Math.round(11 * s)}vw, ${Math.round(190 * s)}px)`,
                  borderRadius: '50%',
                  border: `1px solid rgba(255,255,255,${Math.max(0, 0.06 - i * 0.015)})`,
                  pointerEvents: 'none',
                }}
              />
            ))}

            <Box
              style={{
                position: 'relative',
                zIndex: 1,
                padding: 'clamp(30px,4vw,54px)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Stack gap="lg" align="flex-start">
                <CustomBadge bg="white" c="black">
                  Free Consultation
                </CustomBadge>
                <Title
                  id="hero-lead-heading"
                  order={2}
                  fw={600}
                  c="white"
                  style={{
                    lineHeight: 1.05,
                    letterSpacing: '-0.8px',
                    fontSize: 'clamp(1.8rem,3.4vw,2.7rem)',
                  }}
                >
                  Let&rsquo;s talk about
                  <br />
                  your space.
                </Title>
                <Group gap={10} wrap="nowrap">
                  <Box style={{ width: 28, height: 1, background: 'rgba(255,255,255,0.18)' }} />
                  <Text
                    size="sm"
                    fw={500}
                    tt="uppercase"
                    style={{ letterSpacing: '1.8px', color: 'rgba(255,255,255,0.32)' }}
                  >
                    Reply within one business day
                  </Text>
                </Group>
              </Stack>
            </Box>
          </Grid.Col>

          {/* Right panel — full contact form (dark) */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Box style={{ padding: 'clamp(16px,2vw,28px)' }}>
              <ContactForm dark />
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  );
}
