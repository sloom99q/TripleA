import { Container, Title, Text, Grid, Image, Box, Stack } from '@mantine/core';
import classes from '@/css/ClientsSection.module.css';
import type { ClientsSectionProps } from '@/types/Clients';
import { ClientsData } from '@/mockups/ClientsData';

export function ClientsSection({
  title = 'title',
  description = 'description',
  clients,
}: ClientsSectionProps) {
  return (
    <Box py={80} px={20}>
      <Container bg={'white'} size="lg">
        <Stack align="center" gap="lg" mb={60}>
          <Title order={1} size={48}>
            {title}
          </Title>
          <Text size="md" c="dimmed" style={{ maxWidth: 600, textAlign: 'center' }}>
            {description}
          </Text>
        </Stack>

        <Grid gutter={0} columns={12}>
          {clients.map((client) => (
            <Grid.Col key={client.id} span={{ base: 12, sm: 6, md: 4 }}>
              <Box
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 220,
                  // borderRight: '1px solid #e9ecef',
                  // borderBottom: '1px solid #e9ecef',
                  padding: 40,
                }}
              >
                {/* Top-left corner */}
                <Box style={{ position: 'absolute', top: 0, left: 0, width: 12, height: 12, borderTop: '0.5px solid #999', borderLeft: '0.5px solid #999' }} />
                {/* Top-right corner */}
                <Box style={{ position: 'absolute', top: 0, right: 0, width: 12, height: 12, borderTop: '0.5px solid #999', borderRight: '0.5px solid #999' }} />
                {/* Bottom-left corner */}
                <Box style={{ position: 'absolute', bottom: 0, left: 0, width: 12, height: 12, borderBottom: '0.5px solid #999', borderLeft: '0.5px solid #999' }} />
                {/* Bottom-right corner */}
                <Box style={{ position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderBottom: '0.5px solid #999', borderRight: '0.5px solid #999' }} />

                <Image
                  src={client.logo}
                  alt={client.alt}
                  fit="contain"
                  height={100}
                  style={{ maxWidth: '80%' }}
                />
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default function Clients() {
  return (
    <ClientsSection
      title="Our top Clients"
      description="We are proud to be recognized for our dedication to excellence in design. Our work has been featured in many publications and honored with a variety of awards. Here are a few brands we worked with:"
      clients={ClientsData}
    />
  );
}
