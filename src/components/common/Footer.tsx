import { ActionIcon, Box, Button, Divider, Group, Image, Paper, Stack, Text, Title } from '@mantine/core';
import { IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconPhone } from '@tabler/icons-react';
import { memo, useCallback } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import navLogoWhite from '@/assets/imgs/navlogowhite.webp';
import '@/css/Footer.css';
import Socials from '@/pages/Contact/Socials';

type FooterLink = {
  label: string;
  href: string;
};

const footerLinks: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const Footer = memo(() => {
  const navigate = useNavigate();
  
  const handleNavigate = useCallback((href: string) => {
    navigate(href);
  }, [navigate]);

  const handleCall = useCallback(() => {
    window.location.href = 'tel:+971585500359';
  }, []);

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box component="footer" className="footer">
      <Paper mx={25} className="footer__surface" radius={48} shadow="xl" withBorder={false}>
        <Box className="footer__top">
          <Stack className="footer__brand-block" gap="md">
            <Group className="footer__brand" gap="xs">
              <Image src={navLogoWhite} alt="Triple A Interiors" loading="lazy" w={180} h={50} />
            </Group>

        <Divider color="rgba(255,255,255,0.06)" my="md" />

            <Stack className="footer__nav" gap={12}>
              {footerLinks.map((link) => (
                <Box 
                  key={link.href} 
                  onClick={() => handleNavigate(link.href)} 
                  style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                >
                  {link.label}
                </Box>
              ))}
            </Stack>

            <Group className="footer__cta-row" gap="sm">
              <Button 
                onClick={() => handleNavigate('/contact')} 
                className="footer__cta-primary" 
                radius="xl" 
                size="md"
              >
                Get a Quote
              </Button>
              {/* <ActionIcon
                variant="outline"
                color="gray"
                radius="xl"
                size="lg"
                className="footer__cta-icon"
                onClick={handleCall}
                aria-label="Call us"
              >
                <IconPhone size={18} stroke={1.8} />
              </ActionIcon> */}
            </Group>

            <Text component="address" className="footer__address">
              <Text>Business Bay, Westburry Tower<span style={{ fontFamily: 'sans-serif', fontWeight: 300 }}>1, 303</span></Text>
              <Text>Dubai, UAE</Text>
            </Text>

            <Stack className="footer__actions" gap={10}>
              <a className="footer__link-cta" href="mailto:info@triple-a.ae" style={{ textDecoration: 'none', color: 'inherit' }}>
                Send Email
              </a>
              <a className="footer__link-cta" href="tel:+971585500359" style={{ textDecoration: 'none', color: 'inherit' }}>
                Call Us
              </a>
            </Stack>
          </Stack>

          <Stack style={isMobile ? { alignItems: 'center' } : undefined} className="footer__hero-space" gap="sm">
            <Text className="footer__findus-label" style={{ textAlign: 'right' }}>Find Us On:</Text>
            <Group className="footer__socials" gap="md" justify="flex-end">
              <Socials />
            </Group>
            
            {/* Open Hours */}
            <Stack gap={4} mt={24} style={{ textAlign: 'right' }}>
              <Text ta={isMobile ? 'center' : 'left'} size="sm" c="dimmed">Open Hours:</Text>
              <Text ta={isMobile ? 'center' : 'left'} size="sm" c="white">Mon - Fri: 9am - 5pm</Text>
              <Text ta={isMobile ? 'center' : 'left'} size="sm" c="dimmed">Saturday & Sunday: Closed</Text>
            </Stack>
          </Stack>
        </Box>

      </Paper>
    </Box>
  );
});

export { Footer };
export default Footer;
