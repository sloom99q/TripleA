import { Text, Image, Box } from '@mantine/core';
import { IconArrowDownRight } from '@tabler/icons-react';
import { useState, useCallback, memo } from 'react';
import { useScrollScale } from '@/components/useScrollScale';
import { scrollToElement } from '@/hooks/useSmoothScroll';

interface Service {
  title: string;
  image: string;
}

export const ServiceBox = memo(({ service }: { service: Service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useScrollScale(0.06);
  const className = service.title.toLowerCase().replace(/\s+/g, '-');

  const handleClick = useCallback(() => {
    const serviceSection = document.getElementsByClassName(className);
    if (serviceSection.length > 0) {
      scrollToElement(serviceSection[0] as HTMLElement);
    }
  }, [className]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <Box
      ref={scrollRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderTopLeftRadius: '60px',
        borderBottomRightRadius: '60px',
        height: '100%',
        cursor: 'pointer',
      }}
    >
      <Box
        p={0}
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderTopLeftRadius: '60px',
          borderBottomRightRadius: '60px',
        }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fit="cover"
          loading="lazy"
          // w={600}
          // h={400}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
      {/* Title Overlay */}
      <Box
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '32px 28px',
          borderRadius: 'inherit', 
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)',
          color: 'white',
          transition: 'transform 1200ms cubic-bezier(0.19, 1, 0.22, 1), opacity 800ms ease',
        }}
      >
        <Text size="md" c="white" fw={500} style={{ transition: 'transform 800ms cubic-bezier(0.19, 1, 0.22, 1)', transform: isHovered ? 'translateX(8px)' : 'translateX(0)', letterSpacing: '-0.01em' }}>
          {service.title}
        </Text>
      </Box>

      {/* Arrow Icon Container */}
      <Box
        style={{
          position: 'absolute',
          bottom: 28,
          right: 28,
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isHovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 50,
          color: 'white',
          fontSize: 15,
          fontWeight: 400,
          transition: 'all 800ms cubic-bezier(0.19, 1, 0.22, 1)',
          backdropFilter: 'blur(10px)',
          opacity: isHovered ? 1 : 0.7,
        }}
      >
        <IconArrowDownRight
          size={22}
          color="white"
          stroke={1.5}
          style={{
            transition: 'transform 800ms cubic-bezier(0.19, 1, 0.22, 1)',
            transform: isHovered ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        />
      </Box>
    </Box>
  );
});