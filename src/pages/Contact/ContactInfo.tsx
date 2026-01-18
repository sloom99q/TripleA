import { useState } from 'react';
import { Container, Group, Text, Box, Stack, Button, TextInput, Select, Textarea, Grid, Anchor } from '@mantine/core';
import { IconPhone, IconMail, IconMapPin, IconBrandInstagram, IconBrandX, IconBrandLinkedin } from '@tabler/icons-react';

// Contact Info Component
export default function ContactInfo() {
  return (
    <Stack gap="xl" style={{ flex: 1 }}>
      <Group gap="md">
        <Box bg="black" p="md" style={{ borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', minWidth: '48px' }}>
          <IconPhone size={24} color="white" />
        </Box>
        <Stack gap={0}>
          <Text fw={600} size="sm" c="dimmed">Phone</Text>
          <Text fw={700} ff={'sans-serif'} size="sm">+971 58 550 0359</Text>
        </Stack>
      </Group>

      <Group gap="md">
        <Box bg="black" p="md" style={{ borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', minWidth: '48px' }}>
          <IconMail size={24} color="white" />
        </Box>
        <Stack gap={0}>
          <Text fw={600} size="sm" c="dimmed">E-Mail</Text>
          <Text fw={700} size="sm">info@triple-a.ae</Text>
        </Stack>
      </Group>

      <Group gap="md">
        <Box bg="black" p="md" style={{ borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', minWidth: '48px' }}>
          <IconMapPin size={24} color="white" />
        </Box>
        <Stack gap={0}>
          <Text fw={600} size="sm" c="dimmed">Location</Text>
            <Text fw={700} size="sm">
            Dubai, Business Bay, Westburry <span style={{ fontFamily: 'sans-serif' }}>Tower1,{' '}
            303</span>
            </Text>
        </Stack>
      </Group>
    </Stack>
  );
}