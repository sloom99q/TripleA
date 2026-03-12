import { Box, Container, Stack, Text, Title, Timeline as MantineTimeline, Badge } from '@mantine/core';
import { TimelineData } from '@/mockups/AboutData';
import { useMediaQuery } from '@mantine/hooks';

interface TimelineItem {
  step: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  title?: string;
  subtitle?: string;
  items?: TimelineItem[];
}

export default function TimelineSection({
  title = 'Our Process',
  subtitle = 'How We Work',
  items = TimelineData,
}: TimelineSectionProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <Box
      py={80}
      px={isMobile ? 20 : 80}
      style={{
        width: '100%',
        background: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.06) 0%, rgba(10, 10, 10, 0) 28%), radial-gradient(circle at 80% 0%, rgba(140,140,140,0.08) 0%, rgba(12, 12, 12, 0) 22%), linear-gradient(145deg, #080808ff 0%, #0d0d0dff 50%, #060606ff 100%)',
        borderRadius: 32,
        border: '1px solid rgba(255,255,255,0.1)',
        // boxShadow: '0 30px 70px rgba(0,0,0,0.35)',
      }}
    >
      <Container size="lg">
        <Stack align="center" gap="md" mb={40}>
          <Badge
            radius="xl"
            variant="light"
            style={{
              background: 'rgba(255,255,255,0.06)',
              color: '#f1f1f3',
              border: '1px solid rgba(255,255,255,0.16)',
              letterSpacing: 0.4,
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            {subtitle}
          </Badge>

          <Title
            order={2}
            size="clamp(2rem, 5vw, 3rem)"
            fw={700}
            ta="center"
            c="#F8F9FC"
            style={{ lineHeight: 1.15, letterSpacing: -0.4 }}
          >
            {title}
          </Title>

          <Text size="md" c="rgba(255,255,255,0.72)" ta="center" maw={700} style={{ lineHeight: 1.6 }}>
            From initial consultation to final handover, we guide you through every step of your fit-out journey.
          </Text>
        </Stack>

        <MantineTimeline
          active={items.length - 1}
          bulletSize={40}
          lineWidth={2}
          color="gray"
          styles={{
            itemBody: { color: '#d5d7df' },
            itemTitle: { color: '#f8f9fb', fontWeight: 700 },
            itemBullet: {
              backgroundColor: '#0f1018',
              borderColor: 'rgba(255,255,255,0.24)',
              color: '#f8f9fb',
            },
            item: { borderColor: 'rgba(255,255,255,0.12)' },
          }}
        >
          {items.map((item, index) => (
            <MantineTimeline.Item
              key={index}
              bullet={
                <Box
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#0f1018',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.24)',
                    color: '#f8f9fb',
                    fontWeight: 700,
                    fontSize: 12,
                    fontFamily: 'sans-serif, Arial',
                  }}
                >
                  {item.step}
                </Box>
              }
              title={item.title}
            >
              <Box
                p="md"
                mt="xs"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  borderRadius: 18,
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Text size="sm" c="rgba(255,255,255,0.72)" style={{ lineHeight: 1.6 }}>
                  {item.description}
                </Text>
              </Box>
            </MantineTimeline.Item>
          ))}
        </MantineTimeline>
      </Container>
    </Box>
  );
}
