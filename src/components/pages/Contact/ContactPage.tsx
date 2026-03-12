import ContactForm from '@/components/pages/Contact/ContactForm';
import ContactInfo from '@/components/pages/Contact/ContactInfo';
import FAQComponent from '@/components/FAQ';
import HeroContact from '@/components/pages/Contact/HeroContact';
import MapComponent from '@/components/pages/Contact/MapComponent';
import SocialMedia from '@/components/pages/Contact/Socials';
import {PageContainer} from '@/layout/PageContainer';
import { PAGE_SEO_CONFIG, BASE_URL } from '@/utils/seoConfig';
import { Box, Divider, Grid, Stack, Text } from '@mantine/core';
import ContactOptions from '@/mockups/ContactOptions';

// Main App
export default function ContactPage() {
  return (
    <>
      {/* Main H1 - Hidden but crucial for SEO */}
      <Box visibleFrom="xs" style={{ position: 'absolute', left: '-9999px' }}>
        <h1>Contact Triple A Interiors - Get Your Interior Fit-Out Quote</h1>
      </Box>
      
      {/* Hero Section */}
      <Box component="section" aria-label="Contact hero section">
        <HeroContact />
      </Box>
      
      {/* Main Content */}
      <PageContainer>
        <Box component="section" aria-label="Contact information and form" py={80} w="100%">
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
          <Box component="section" aria-label="Social media links" mt={60}>
            <Divider my={'xl'} />
            <Text fw={600} size="sm" c="dimmed" ta={'center'}>Social Media</Text>
            <SocialMedia />
          </Box>

          <Box component="section" aria-label="Frequently asked questions" mt={80}>
            <FAQComponent />
          </Box>
        </Box>
      </PageContainer>
      
    </>
  );
}