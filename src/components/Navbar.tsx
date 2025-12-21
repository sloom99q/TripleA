import { useEffect, useRef, useState } from 'react';
import { Anchor, Box, Burger, Group, Image, Paper, Stack, Transition, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import navLogo from '../assets/imgs/navlogo.png';

type NavbarLink = { label: string; href: string };

interface NavbarProps {
  links?: NavbarLink[];
}

const Navbar = ({
  links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ],
}: NavbarProps) => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [opened, setOpened] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const last = lastScrollRef.current;

      setVisible(!(current > last && current > 120));
      lastScrollRef.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkNodes = links.map((link) => (
    <Anchor
      key={link.href}
      href={link.href}
      size="sm"
      fw={300}
      underline="never"
      onClick={() => setOpened(false)}
      styles={(theme) => ({
        root: {
          padding: `${rem(10)} ${rem(14)}`,
          borderRadius: rem(14),
          color: 'inherit',
          transition: 'background-color 140ms ease',
          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? 'rgba(255, 255, 255, 0.08)'
                : 'rgba(0, 0, 0, 0.06)',
          },
        },
      })}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Paper
      component="nav"
    //   withBorder
    //   shadow="sm" // Stronger shadow for more bottom shadow effect
      radius="120px"
      px="md"
      py="md"
      style={{
        position: 'fixed',
        left: '50%',
        top: rem(50), // Move it further down from the top
        transform: `translateX(-50%) translateY(${visible ? '0' : '-140%'})`,
        transition: 'transform 220ms ease, opacity 220ms ease',
        opacity: visible ? 1 : 0,
        width: isMobile ? '80vw' : 'min(92vw, 1400px)',
        backdropFilter: 'blur(12px)',
        zIndex: 1200,
        boxShadow: '0 12px 24px -8px rgba(0,0,0,0.1)', // Faded shadow only below
      }}
    >
      <Group justify="space-between" align="center" gap="md">
        <Group ml="sm" gap="sm" align="center">
          <Anchor href="/" underline="never" aria-label="Go to home" style={{ display: 'inline-flex' }}>
            <Image src={navLogo} alt="Logo" h={50} w="auto" fit="contain" />
          </Anchor>
        </Group>

        {isMobile ? (
          <Burger
            opened={opened}
            onClick={() => setOpened((prev) => !prev)}
            aria-label="Toggle navigation menu"
            size="sm"
            transitionDuration={180}
          />
        ) : (
          <Group gap="xs">{linkNodes}</Group>
        )}
      </Group>

      {isMobile && (
        <Transition mounted={opened} transition="scale-y" duration={200} timingFunction="ease-out">
          {(transitionStyles) => (
            <Box
              style={{
                ...transitionStyles,
                transformOrigin: 'top',
              }}
            >
              <Stack gap="xs" mt="sm">
                {linkNodes}
              </Stack>
            </Box>
          )}
        </Transition>
      )}
    </Paper>
  );
};

export default Navbar;
