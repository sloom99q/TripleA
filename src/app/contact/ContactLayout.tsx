'use client';

/**
 * ContactLayout — Client Component
 *
 * Handles the Mantine Grid/Stack layout for the contact page.
 * Extracted into a Client Component so the contact page itself
 * can be a Server Component with no direct Mantine imports.
 */

import { Box, Divider, Grid, Stack, Text } from "@mantine/core";
import ContactForm from "@/components/pages/Contact/ContactForm";
import ContactInfo from "@/components/pages/Contact/ContactInfo";
import FAQComponent from "@/components/FAQ";
import MapComponent from "@/components/pages/Contact/MapComponent";
import SocialMedia from "@/components/pages/Contact/Socials";
import { PageContainer } from "@/layout/PageContainer";

export default function ContactLayout() {
  return (
    <PageContainer>
      <Box component="section" aria-label="Contact information and form" py={80} w="100%">
        {/* Contact Info and Form Grid */}
        <Grid gutter="xl" mb={60}>
          {/* Left Side - Contact Info + Map */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              <ContactInfo />
              <MapComponent />
            </Stack>
          </Grid.Col>

          {/* Right Side - Form */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <ContactForm />
          </Grid.Col>
        </Grid>

        {/* Social Media Links */}
        <Box component="section" aria-label="Social media links" mt={60}>
          <Divider my={"xl"} />
          <Text fw={600} size="sm" c="dimmed" ta={"center"}>
            Social Media
          </Text>
          <SocialMedia />
        </Box>

        {/* FAQ Section */}
        <Box component="section" aria-label="Frequently asked questions" mt={80}>
          <FAQComponent />
        </Box>
      </Box>
    </PageContainer>
  );
}
