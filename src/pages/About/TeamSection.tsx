import { Box, Container, Grid, Image, Stack, Text, Title } from '@mantine/core';
import CustomBadge from '@/components/CustomBadge';
import { TeamData } from '@/mockups/AboutData';
import { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  team?: TeamMember[];
}

const TeamCard = ({ member }: { member: TeamMember }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        cursor: 'pointer',
      }}
    >
      {/* Image Container */}
      <Box
        style={{
          overflow: 'hidden',
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 50,
          height: 380,
        }}
      >
        <Image
          src={member.image}
          alt={member.name}
          fit="cover"
          h={380}
          style={{
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          }}
        />
      </Box>

      {/* Gradient Overlay */}
      <Box
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '60px 24px 24px',
          background:
            'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        <Text size="md" fw={600} c="white">
          {member.name}
        </Text>
        <Text size="sm" c="#d0d0d0" mt={4}>
          {member.role}
        </Text>
      </Box>

      {/* Hover Description Overlay */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.85)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        <Stack align="center" gap="md">
          <Text size="md" fw={600} c="white">
            {member.name}
          </Text>
          <Text size="sm" c="gray.4" fw={500}>
            {member.role}
          </Text>
          <Text size="sm" c="#d0d0d0" ta="center" style={{ lineHeight: 1.7 }}>
            {member.description}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default function TeamSection({
  title = 'Meet Our Team',
  subtitle = 'The People Behind Triple A',
  team = TeamData,
}: TeamSectionProps) {
  return (
    <Box py={100} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container size="xl">
        <Stack align="center" gap="md" mb={60}>
          <CustomBadge>{subtitle}</CustomBadge>

          <Title
            order={2}
            size="clamp(2rem, 5vw, 3rem)"
            fw={500}
            ta="center"
            style={{ lineHeight: 1.2 }}
          >
            {title}
          </Title>

          <Text size="md" c="dimmed" ta="center" maw={600}>
            A dedicated team of professionals committed to transforming your spaces into
            extraordinary environments.
          </Text>
        </Stack>

        <Grid gutter={{ base: 'md', md: 'md' }}>
          {team.map((member, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
              <TeamCard member={member} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
