import { Box, Image, Text, Title } from "@mantine/core";
import { IconArrowDownRight } from "@tabler/icons-react";
import { useState, useCallback, memo } from "react";
import { useScrollScale } from '@/components/useScrollScale';
import { scrollToElement } from '@/hooks/useSmoothScroll';

interface Service {
  title: string;
  image: string;
}

export const WideServiceBox = memo(({ service }: { service: Service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useScrollScale(0.06);
  const className = service.title.toLowerCase().replace(/\s+/g, '-');

  const handleClick = useCallback(() => {
    const contactSection = document.getElementsByClassName(className);
    if (contactSection.length > 0) {
      scrollToElement(contactSection[0] as HTMLElement);
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
        cursor: 'pointer',
        height: 400,
        borderTopLeftRadius: 60,
        borderBottomRightRadius: 60,
      }}
    >
      {/* Image Container */}
      <Box style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: 'inherit' }}>
        <Image
          src={service.image}
          alt={service.title}
          fit="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
          }}
        />
      </Box>

      {/* Gradient Overlay Only (no dark background) */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 30%, transparent 60%)',
          pointerEvents: 'none',
          borderRadius: 'inherit',
        }}
      />

      {/* Content */}
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: 640,
          width: '100%',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Title
          order={3}
          size="clamp(2rem, 3.5vw, 3rem)"
          fw={400}
          c="white"
          lh={1.2}
          mb={16}
          ta="center"
          style={{
            letterSpacing: '-0.02em',
            transition: 'transform 800ms cubic-bezier(0.19, 1, 0.22, 1)',
            transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
          }}
        >
          {service.title}
        </Title>

        <Text
          size="md"
          fw={300}
          c="#fff"
          lh={1.6}
          mb={32}
          ta="center"
          style={{
            opacity: isHovered ? 1 : 0.8,
            transition: 'opacity 800ms ease',
          }}
        >
          Comprehensive end-to-end solutions for your complete project delivery
        </Text>

        {/* CTA Button */}
        <Box
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '14px 32px',
            backgroundColor: isHovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 50,
            color: 'white',
            fontSize: 14,
            fontWeight: 400,
            transition: 'all 800ms cubic-bezier(0.19, 1, 0.22, 1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          Learn More
          <IconArrowDownRight 
            size={16} 
            stroke={1.5} 
            style={{
              transition: 'transform 800ms cubic-bezier(0.19, 1, 0.22, 1)',
              transform: isHovered ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
});