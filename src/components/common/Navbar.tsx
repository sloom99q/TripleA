import { useRef, useState, useEffect, useCallback, memo } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Box, Group, Text, UnstyledButton } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
// @ts-ignore
import navLogo from '@/assets/imgs/navlogo.webp';

type NavbarLink = { label: string; href: string };

interface NavbarProps {
  links?: NavbarLink[];
}

const NAV_LINKS: NavbarLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const NavLink = memo(({ link, isActive, onClick }: { link: NavbarLink; isActive: boolean; onClick: () => void }) => (
  <UnstyledButton
    onClick={onClick}
    style={{
      padding: '10px 18px',
      borderRadius: 12,
      backgroundColor: isActive ? 'rgba(0,0,0,0.05)' : 'transparent',
    }}
  >
    <Text size="sm" fw={isActive ? 600 : 500} c={isActive ? '#000' : '#555'}>
      {link.label}
    </Text>
  </UnstyledButton>
));

const MobileNavLink = memo(({ link, isActive, onClick }: { link: NavbarLink; isActive: boolean; onClick: () => void }) => (
  <UnstyledButton
    onClick={onClick}
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '16px 16px',
      marginBottom: 4,
      borderRadius: 16,
      backgroundColor: isActive ? 'rgba(0,0,0,0.04)' : 'transparent',
    }}
  >
    <Text size="md" fw={isActive ? 600 : 500} c="#1a1a1a">{link.label}</Text>
    {isActive && <Box style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#1a1a1a' }} />}
  </UnstyledButton>
));

const Navbar = memo(({ links = NAV_LINKS }: NavbarProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [opened, setOpened] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = useCallback((href: string) => location.pathname === href, [location.pathname]);

  const handleNavigate = useCallback((href: string) => {
    setOpened(false);
    navigate(href);
  }, [navigate]);

  const toggleMenu = useCallback(() => setOpened(prev => !prev), []);

  // Scroll hide/show effect - only triggers on direction change
  useEffect(() => {
    let lastDirection: 'up' | 'down' | null = null;
    let ticking = false;
    const scrollThreshold = 10; // Minimum scroll distance to trigger direction change

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      
      // Always show at top of page
      if (currentScrollY < 100) {
        if (!visible) setVisible(true);
        lastDirection = null;
        lastScrollY.current = currentScrollY;
        ticking = false;
        return;
      }
      
      // Only process if scroll distance exceeds threshold
      if (Math.abs(scrollDelta) < scrollThreshold) {
        ticking = false;
        return;
      }
      
      const newDirection = scrollDelta > 0 ? 'down' : 'up';
      
      // Only update if direction actually changed
      if (newDirection !== lastDirection) {
        lastDirection = newDirection;
        if (newDirection === 'down') {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
      
      lastScrollY.current = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  // Close menu on route change
  useEffect(() => {
    setOpened(false);
  }, [location.pathname]);

  // Border radius: capsule when closed, normal when menu open on mobile
  const borderRadius = isMobile ? (opened ? 24 : 50) : 50;

  return (
    <Box
      component="nav"
      style={{
        position: 'fixed',
        top: 50,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        zIndex: 1200,
        pointerEvents: 'none',
        transform: visible ? 'translateY(0)' : 'translateY(-150%)',
        transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Box
        style={{
          width: isMobile ? '80vw' : 'min(92vw, 1400px)',
          padding: isMobile ? '14px 20px' : '12px 24px',
          borderRadius,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.06)',
          border: '1px solid rgba(0, 0, 0, 0.04)',
          pointerEvents: 'auto',
          transition: 'border-radius 300ms ease',
        }}
      >
        <Group justify="space-between" align="center" wrap="nowrap">
          {/* Logo */}
          <UnstyledButton onClick={() => handleNavigate('/')}>
            <img src={navLogo} alt="Triple A" width={isMobile ? 96 : 114} height={isMobile ? 32 : 38} style={{ height: isMobile ? 32 : 38, width: 'auto' }} />
          </UnstyledButton>

          {/* Desktop Links */}
          {!isMobile && (
            <Group gap={6}>
              {links.map((link) => (
                <NavLink 
                  key={link.href} 
                  link={link} 
                  isActive={isActive(link.href)} 
                  onClick={() => handleNavigate(link.href)}
                />
              ))}
            </Group>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <UnstyledButton
              onClick={toggleMenu}
              style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Box style={{ position: 'relative', width: 22, height: 14 }}>
                <Box style={{
                  position: 'absolute', width: '100%', height: 2, backgroundColor: '#1a1a1a', borderRadius: 2,
                  transition: 'transform 400ms ease, top 400ms ease',
                  top: opened ? 6 : 0,
                  transform: opened ? 'rotate(45deg)' : 'rotate(0)',
                }} />
                <Box style={{
                  position: 'absolute', width: '100%', height: 2, backgroundColor: '#1a1a1a', borderRadius: 2,
                  transition: 'transform 400ms ease, top 400ms ease',
                  top: opened ? 6 : 12,
                  transform: opened ? 'rotate(-45deg)' : 'rotate(0)',
                }} />
              </Box>
            </UnstyledButton>
          )}
        </Group>

        {/* Mobile Menu */}
        {isMobile && (
          <Box style={{
            maxHeight: opened ? 320 : 0,
            overflow: 'hidden',
            transition: 'max-height 400ms ease',
          }}>
            <Box pt={20} pb={10}>
              {links.map((link) => (
                <MobileNavLink 
                  key={link.href} 
                  link={link} 
                  isActive={isActive(link.href)} 
                  onClick={() => handleNavigate(link.href)}
                />
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
});

export default Navbar;
