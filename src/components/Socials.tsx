import { Stack, Text, Group, Box } from '@mantine/core';
import { IconBrandX, IconBrandWhatsapp, IconBrandInstagram } from '@tabler/icons-react';

// Social Media Component
function SocialMedia() {
  const socials = [
    { icon: IconBrandInstagram, url: 'https://www.instagram.com/aaa_fitout/?utm_source=website&utm_medium=footer', label: 'Instagram' },
    { icon: IconBrandX, url: 'https://twitter.com', label: 'Twitter' },
    { icon: IconBrandWhatsapp, url: 'https://wa.me/971585500359?text=Hello%20I%20am%20interested%20in%20your%20services!', label: 'WhatsApp' }
  ];

  return (
    <Stack gap="md" mt="xl" pt="xl" style={{ display: 'flex', alignContent: 'center', flexWrap: 'wrap', borderTop: '1px solid #e9ecef' }}>
      <Text fw={600} size="sm" c="dimmed" ta={'center'}>Social Media</Text>
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
          style={{ borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', cursor: 'pointer' }}
        >
          <Icon size={24} color="white" />
        </Box>
        );
      })}
      </Group>
    </Stack>
  );
}

export default SocialMedia;