'use client';

import { Box, Stack, Text, Container, Group, Grid, Paper, Title, Modal } from "@mantine/core";
import { IconCompass } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { useMemo, useState, useCallback } from "react";
import Image from "next/image";

// Import Vastu images
import VastuImg1 from '@/assets/imgs/Vastu-imgs/IMG_1664.JPG.jpeg';
import VastuImg2 from '@/assets/imgs/Vastu-imgs/IMG_1665.JPG.jpeg';
import VastuImg3 from '@/assets/imgs/Vastu-imgs/IMG_1666.JPG.jpeg';
import VastuImg4 from '@/assets/imgs/Vastu-imgs/IMG_1668.JPG.jpeg';
import VastuImg5 from '@/assets/imgs/Vastu-imgs/IMG_1670.JPG.jpeg';
import VastuImg6 from '@/assets/imgs/Vastu-imgs/IMG_1675.JPG.jpeg';
import VastuImg7 from '@/assets/imgs/Vastu-imgs/IMG_1676.JPG.jpeg';
import VastuImg8 from '@/assets/imgs/Vastu-imgs/IMG_1679.JPG.jpeg';
import VastuImg9 from '@/assets/imgs/Vastu-imgs/IMG_1685.JPG.jpeg';
import VastuImg10 from '@/assets/imgs/Vastu-imgs/IMG_1687.JPG.jpeg';

interface VastuImage {
  src: any;
  alt: string;
}

export default function VastuIntegrationSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const vastuImages = useMemo<VastuImage[]>(() => [
    { src: VastuImg1, alt: 'Vastu Shastra spatial planning principle 1' },
    { src: VastuImg2, alt: 'Vastu Shastra spatial planning principle 2' },
    { src: VastuImg3, alt: 'Vastu Shastra spatial planning principle 3' },
    { src: VastuImg4, alt: 'Vastu Shastra spatial planning principle 4' },
    { src: VastuImg5, alt: 'Vastu Shastra spatial planning principle 5' },
    { src: VastuImg6, alt: 'Vastu Shastra spatial planning principle 6' },
    { src: VastuImg7, alt: 'Vastu Shastra spatial planning principle 7' },
    { src: VastuImg8, alt: 'Vastu Shastra spatial planning principle 8' },
    { src: VastuImg9, alt: 'Vastu Shastra spatial planning principle 9' },
    { src: VastuImg10, alt: 'Vastu Shastra spatial planning principle 10' },
  ], []);

  const vastuContent = useMemo(() => ({
    heading: 'Vastu Integration',
    description: 'Smart spatial planning starts with understanding how people work.',
    detail: 'We apply directional planning and spatial zoning principles to ensure that every area within the office supports its intended function — from leadership spaces to team collaboration zones.',
  }), []);

  const gridCols = useMemo(() => {
    if (isMobile) return 2;
    if (isTablet) return 3;
    return 5;
  }, [isMobile, isTablet]);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  const handleImageClick = useCallback((index: number) => {
    setSelectedImageIndex(index);
  }, []);

  return (
    <Box style={{ width: '100%', background: '#f5f5f5', padding: isMobile ? '60px 0' : '100px 0' }}>
      <Container size="xl" px={{ base: 'md', md: 'xl' }}>
        <Stack gap={isMobile ? "md" : "lg"}>
          {/* Header */}
          <Stack gap="md" align="flex-start">
            <Group gap="md" align="flex-start">
              <Box
                style={{
                  width: isMobile ? 40 : 48,
                  height: isMobile ? 40 : 48,
                  backgroundColor: '#f0f0f0',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <IconCompass 
                  size={isMobile ? 24 : 28} 
                  color="#000" 
                  stroke={2}
                />
              </Box>
              <Title
                order={3}
                size="clamp(1.2rem, 3vw, 1.8rem)"
                fw={700}
                c="#000"
                style={{ lineHeight: 1.2 }}
              >
                {vastuContent.heading}
              </Title>
            </Group>

            <Stack gap="md" style={{ paddingLeft: isMobile ? 0 : '64px' }}>
              <Text
                size="md"
                c="#333"
                style={{
                  lineHeight: 1.7,
                  fontWeight: 500,
                }}
              >
                {vastuContent.description}
              </Text>

              <Text
                size="sm"
                c="#666"
                style={{
                  lineHeight: 1.7,
                }}
              >
                {vastuContent.detail}
              </Text>
            </Stack>
          </Stack>

          {/* Images Grid */}
          <Box mt={{ base: 'md', md: 'lg' }}>
            <Grid gutter={isMobile ? 10 : 14} columns={gridCols * 2}>
              {vastuImages.map((image, index) => (
                <Grid.Col 
                  key={index} 
                  span={2}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Paper
                    onClick={() => handleImageClick(index)}
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '12px',
                      aspectRatio: '1/1',
                      backgroundColor: '#f0f0f0',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                      sizes={isMobile ? '(max-width: 768px) 50vw' : isTablet ? '(max-width: 1024px) 33vw' : '20vw'}
                      priority={index < 2}
                    />
                    {/* Overlay on hover */}
                    <Box
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: hoveredIndex === index ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0)',
                        transition: 'background 0.3s ease',
                        zIndex: 1,
                      }}
                    />
                  </Paper>
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>

      {/* Lightbox Modal */}
      <Modal
        opened={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        size="90vw"
        centered
        styles={{
          content: {
            backgroundColor: '#000',
          },
        }}
      >
        {selectedImageIndex !== null && (
          <Box style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
            <Image
              src={vastuImages[selectedImageIndex].src}
              alt={vastuImages[selectedImageIndex].alt}
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
              }}
              sizes="90vw"
            />
          </Box>
        )}
      </Modal>
    </Box>
  );
}

