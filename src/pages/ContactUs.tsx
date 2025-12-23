import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import HeroContact from '@/components/HeroContact';
import MapComponent from '@/components/MapComponent';
import SocialMedia from '@/components/Socials';
import { Box, Container, Grid, Stack, Text } from '@mantine/core';
import React from 'react';

// Main App
export default function ContactUs() {
  return (
    <Box>

      {/* Hero Section */}
      <HeroContact />

      {/* Main Content */}
      <Container size="xl" py="xl">
        {/* Contact Info and Form Grid */}
        <Grid gutter="xl" mb="xl">
          {/* Left Side - Contact Info */}
            <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              <ContactInfo />
              {/* Middle Side - Map */}
              <MapComponent />
            </Stack>
            </Grid.Col>

          {/* Right Side - Form */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <ContactForm />
          </Grid.Col>
        </Grid>

        {/* Social Media */}
        <Box mt="xl">
          <SocialMedia />
        </Box>
      </Container>
      
    </Box>
  );
}