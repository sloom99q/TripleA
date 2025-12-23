import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import navLogo from '@/assets/imgs/navlogo.png';
import navLogoWhite from '@/assets/imgs/navLogoWhite.png';

type NavbarLink = { label: string; href: string };

interface NavbarProps {
  links?: NavbarLink[];
}

const Navbar = ({
  links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: 'about' },
    { label: 'Services', href: 'services' },
    { label: 'Portfolio', href: 'portfolio' },
    { label: 'Contact', href: 'contact' },
  ],
}: NavbarProps) => {
  const isMobile = useMediaQuery('(max-width: 1199px)');
  const [opened, setOpened] = useState(false);
  const [visible, setVisible] = useState(true);
  const [boundaryActive, setBoundaryActive] = useState(false);
  const lastScrollRef = useRef(0);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Handle scroll visibility
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

  // Detect if nav is over a boundary element
  useEffect(() => {
    const checkBoundary = () => {
      const nav = navRef.current;
      if (!nav) return setBoundaryActive(false);

      const rect = nav.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = Math.min(rect.bottom + 2, window.innerHeight - 1);
      const el = document.elementFromPoint(x, y) as HTMLElement | null;

      let node = el;
      let found = false;
      while (node) {
        if (node.matches?.('[data-nav-boundary]') || node.classList.contains('nav-boundary')) {
          found = true;
          break;
        }
        node = node.parentElement;
      }
      setBoundaryActive(found);
    };

    checkBoundary();
    window.addEventListener('scroll', checkBoundary, { passive: true });
    window.addEventListener('resize', checkBoundary);
    return () => {
      window.removeEventListener('scroll', checkBoundary);
      window.removeEventListener('resize', checkBoundary);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const nav = navRef.current;
      if (nav && !nav.contains(e.target as Node)) {
        setOpened(false);
      }
    };

    if (opened) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [opened]);

  const linkColor = boundaryActive ? 'white' : 'black';

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: '50px',
        left: '50%',
        transform: `translateX(-50%) translateY(${visible ? '0' : '-140%'})`,
        transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1), background-color 160ms ease, border-color 160ms ease, opacity 400ms ease',
        width: isMobile ? '80vw' : 'min(92vw, 1400px)',
        padding: '12px 24px',
        borderRadius: '50px',
        backgroundColor: boundaryActive ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        border: boundaryActive ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        zIndex: 1200,
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: 'inline-flex', textDecoration: 'none' }}>
          <img
            src={boundaryActive ? navLogoWhite : navLogo}
            alt="Logo"
            style={{ height: '50px', width: 'auto' }}
          />
        </a>

        {/* Desktop Links */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '8px' }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  padding: '10px 16px',
                  borderRadius: '12px',
                  color: linkColor,
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'background-color 140ms ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = boundaryActive
                    ? 'rgba(255, 255, 255, 0.15)'
                    : 'rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={() => setOpened(!opened)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              width: '40px',
              height: '40px',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                width: '24px',
                height: '1.5px',
                backgroundColor: linkColor,
                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                transform: opened ? 'rotate(45deg)' : 'rotate(0deg) translateY(-5px)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                width: '24px',
                height: '1.5px',
                backgroundColor: linkColor,
                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                transform: opened ? 'rotate(-45deg)' : 'rotate(0deg) translateY(5px)',
              }}
            />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          style={{
            marginTop: opened ? '12px' : '0px',
            marginBottom: opened ? '12px' : '0px',
            paddingTop: opened ? '12px' : '0px',
            maxHeight: opened ? '500px' : '0px',
            overflow: 'hidden',
            opacity: opened ? 1 : 0,
            transition: 'max-height 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease, margin-top 300ms ease, padding-top 300ms ease',
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpened(false)}
              style={{
                display: 'block',
                padding: '12px 16px',
                color: linkColor,
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'background-color 140ms ease',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = boundaryActive
                  ? 'rgba(255, 255, 255, 0.15)'
                  : 'rgba(0, 0, 0, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
