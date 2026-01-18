import React, { useState } from 'react';
import { Container, Title, Text, Box, Image } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';

// Mock data for demonstration
const ServicesData = [
  { title: 'Architectural Design', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=800&fit=crop' },
  { title: 'Interior Fit-Out', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=800&fit=crop' },
  { title: 'Project Management', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop' },
  { title: '3D Visualization', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=800&fit=crop' },
  { title: 'Renovation Services', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=800&fit=crop' },
  { title: 'Consultancy', image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=800&fit=crop' },
  { title: 'Turnkey Solutions', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&h=600&fit=crop' },
];

const ServiceBox = ({ service, index, isLastRow }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: '#0a0a0a',
        aspectRatio: '1',
      }}
    >
      {/* Image Container */}
      <Box style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <Image
          src={service.image}
          alt={service.title}
          fit="cover"
          style={{
            width: '100%',
            height: '100%',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease',
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
            opacity: isHovered ? 0.7 : 0.85,
          }}
        />
      </Box>

      {/* Bottom Gradient Overlay */}
      <Box
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '70%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Title */}
      <Box
        style={{
          position: 'absolute',
          bottom: 32,
          left: 32,
          right: 32,
        }}
      >
        <Text
          size="22px"
          fw={500}
          c="white"
          lh={1.3}
          style={{
            letterSpacing: '-0.01em',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
          }}
        >
          {service.title}
        </Text>
      </Box>

      {/* Hover Arrow Indicator */}
      <Box
        style={{
          position: 'absolute',
          top: 32,
          right: 32,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <IconArrowUpRight size={16} color="white" stroke={1.5} />
      </Box>
    </Box>
  );
};

const WideServiceBox = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: '#0a0a0a',
        height: 400,
      }}
    >
      {/* Image Container */}
      <Box style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <Image
          src={service.image}
          alt={service.title}
          fit="cover"
          style={{
            width: '100%',
            height: '100%',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            opacity: isHovered ? 0.7 : 0.85,
          }}
        />
      </Box>

      {/* Side Gradient Overlay */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          left: 60,
          transform: 'translateY(-50%)',
          maxWidth: 500,
        }}
      >
        <Title
          order={3}
          size="42px"
          fw={400}
          c="white"
          lh={1.2}
          mb={16}
          style={{
            letterSpacing: '-0.02em',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
          }}
        >
          {service.title}
        </Title>

        <Text
          size="16px"
          fw={300}
          c="#d0d0d0"
          lh={1.6}
          mb={32}
          style={{
            opacity: isHovered ? 1 : 0.8,
            transition: 'opacity 0.3s ease',
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
            fontSize: 15,
            fontWeight: 400,
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
          }}
        >
          Learn More
          <IconArrowUpRight size={16} stroke={1.5} />
        </Box>
      </Box>
    </Box>
  );
};

const ServicesRow = () => {
  return (
    <Box
      style={{
        // backgroundColor: '#0a0a0a',
        minHeight: '100vh',
        padding: '120px 0',
      }}
    >
      <Container size="xl" px={60}>
        
        {/* Header Section */}
        <Box mb={100} style={{ maxWidth: 800 }}>
          <Title
            order={2}
            size="clamp(36px, 5vw, 64px)"
            fw={400}
            c="white"
            mb={24}
            lh={1.2}
            style={{ letterSpacing: '-0.02em' }}
          >
            Start Building Your Dream Project
          </Title>
          <Text size="18px" fw={300} c="#a0a0a0" lh={1.6}>
            Write us by completing the form. We will get back to you as soon as possible!
          </Text>
        </Box>

        {/* Services Grid Container */}
        <Box
          mb={2}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2,
            backgroundColor: '#1a1a1a',
            border: '2px solid #1a1a1a',
            borderRadius: 32,
            overflow: 'hidden',
          }}
        >
          {/* Row 1 - 3 boxes */}
          {ServicesData.slice(0, 3).map((service, index) => (
            <ServiceBox key={index} service={service} index={index} />
          ))}
          
          {/* Row 2 - 3 boxes */}
          {ServicesData.slice(3, 6).map((service, index) => (
            <ServiceBox key={index + 3} service={service} index={index + 3} isLastRow />
          ))}
        </Box>

        {/* Wide Feature Box */}
        <Box
          mt={80}
          style={{
            backgroundColor: '#1a1a1a',
            border: '2px solid #1a1a1a',
            borderRadius: 32,
            overflow: 'hidden',
          }}
        >
          <WideServiceBox service={ServicesData[6]} />
        </Box>

      </Container>
    </Box>
  );
};

export default ServicesRow;