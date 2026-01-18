import ContactForm from '@/pages/Contact/ContactForm';
import ContactInfo from '@/pages/Contact/ContactInfo';
import FAQComponent from '@/components/FAQ';
import HeroContact from '@/pages/Contact/HeroContact';
import MapComponent from '@/pages/Contact/MapComponent';
import SocialMedia from '@/pages/Contact/Socials';
import {PageContainer} from '@/layout/PageContainer';
import { Box, Divider, Grid, Select, Stack, Text } from '@mantine/core';
import { Helmet } from 'react-helmet-async';
import ContactOptions from '@/mockups/ContactOptions';

// Main App
export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Triple A Interiors Dubai</title>
        <meta
          name="description"
          content="Get in touch with Triple A Interiors for premium interior fit-out services in Dubai. Let's discuss your project and bring your vision to life."
        />
      </Helmet>
      
      {/* Hero Section */}
      <HeroContact />
      
      {/* Main Contenct */}
      <PageContainer>
        <Box py={80} w="100%">
          {/* Contact Info and Form Grid */}
          <Grid gutter="xl" mb={60}>
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
          <Box mt={60}>
            <Divider my={'xl'} />
            <Text fw={600} size="sm" c="dimmed" ta={'center'}>Social Media</Text>
            <SocialMedia />
          </Box>

          <Box mt={80}>
            <FAQComponent />
          </Box>
        </Box>
      </PageContainer>
      
    </>
  );
}