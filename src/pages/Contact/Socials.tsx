import { Stack, Text, Group, Box } from '@mantine/core';
import { socials } from '@/mockups/SocialsData';

// Social Media Component
function Socials() {

  return (
    <Stack gap="md" pt="lg" style={{ display: 'flex', alignContent: 'center', flexWrap: 'wrap'}}>
      <Group gap="md">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
        <Box 
          key={social.label}
          component="a"
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          bg="black" 
          p="md" 
          style={{ 
            border: '0.3px solid white', // Added border
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '48px', 
            height: '48px', 
            cursor: 'pointer' 
          }}
        >
          <Icon size={24} color="white" />
        </Box>
        );
      })}
      </Group>
    </Stack>
  );
}

export default Socials;