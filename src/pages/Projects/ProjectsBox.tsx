import React, { useState, useCallback, useMemo, memo } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Text, Image, Box, Group, UnstyledButton, Badge } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
}

type ProjectVariant = 'hero' | 'spotlight' | 'standard' | 'band';

const CARD_RADIUS = 28;

const accentPalette = ['#d2d5da', '#c4c7cc', '#b7bbc1', '#a9adb4'];

const ProjectsBox = memo(
  ({
    project,
    variant = 'standard',
    height = 360,
    index = 0,
  }: {
    project: Project;
    variant?: ProjectVariant;
    height?: number;
    index?: number;
  }) => {
    const isMobile = useMediaQuery('(max-width: 990px)');
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const accent = useMemo(() => accentPalette[index % accentPalette.length], [index]);

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);
    const handleNavigate = useCallback(() => navigate(`/projects/${project.id}`), [navigate, project.id]);

    const cardShadow = useMemo(
      () =>
        isHovered
          ? '0 26px 56px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(255,255,255,0.07)'
          : '0 18px 38px rgba(0, 0, 0, 0.34)',
      [isHovered]
    );

    const overlayGradient = useMemo(() => {
      if (variant === 'hero') return 'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)';
      if (variant === 'band') return 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 100%)';
      return 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.72) 100%)';
    }, [variant]);

    return (
      <UnstyledButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleNavigate}
        style={{
          textAlign: 'left',
          width: '100%',
          display: 'block',
          padding: 1,
          borderTopLeftRadius: CARD_RADIUS + 6,
          borderBottomRightRadius: CARD_RADIUS + 6,
          borderTopRightRadius: CARD_RADIUS,
          borderBottomLeftRadius: CARD_RADIUS,
          background: 'linear-gradient(145deg, #0f0f0fff 0%, #090909ff 100%)',
          border: `1px solid ${accent}33`,
          transition: 'transform 260ms ease, filter 260ms ease',
          transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
          filter: isHovered ? 'saturate(1.02)' : 'saturate(1)',
        }}
      >
        <Box
          style={{
            position: 'relative',
            overflow: 'hidden',
            height: isMobile ? height * 0.85 : height,
            borderRadius: CARD_RADIUS - 1,
              background: 'linear-gradient(145deg, #080808ff 0%, #050505ff 60%, #0d0d0dff 100%)',
            border: '1px solid rgba(255,255,255,0.06)',
            isolation: 'isolate',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.22,
              background: 'radial-gradient(circle at 24% 18%, rgba(255,255,255,0.14) 0%, transparent 30%), radial-gradient(circle at 78% 12%, rgba(255,255,255,0.08) 0%, transparent 26%)',
              filter: 'blur(14px)',
              zIndex: 0,
            }}
          />

          <Box
            style={{
              position: 'relative',
              height: '100%',
              display: 'grid',
              gridTemplateRows: variant === 'band' ? '1fr' : '1fr auto',
            }}
          >
            <Box
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: CARD_RADIUS - 2,
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                loading="lazy"
                // w={800}
                // h={600}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                  transition: 'transform 420ms ease',
                }}
              />
              <Box
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: overlayGradient,
                }}
              />

              <Box
                style={{
                  position: 'absolute',
                  top: 14,
                  left: 14,
                  padding: '8px 12px',
                  borderRadius: 999,
                  background: 'rgba(0,0,0,0.55)',
                  border: `1px solid ${accent}40`,
                  color: '#fff',
                  fontSize: 12,
                  letterSpacing: 0.3,
                }}
              >
                Case Study
              </Box>
            </Box>

            <Box
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                borderRadius: CARD_RADIUS - 1,
                boxShadow: isHovered
                  ? `inset 0 0 0 1px ${accent}55, inset 0 0 120px rgba(255,255,255,0.04)`
                  : 'inset 0 0 0 1px rgba(255,255,255,0.02)',
                transition: 'box-shadow 260ms ease',
              }}
            />

            <Box
              style={{
                position: 'relative',
                zIndex: 1,
                padding: variant === 'band' ? '22px 24px' : '22px 24px 24px 24px',
                display: 'flex',
                flexDirection: variant === 'band' && !isMobile ? 'row' : 'column',
                gap: 12,
                alignItems: variant === 'band' && !isMobile ? 'center' : 'flex-start',
                justifyContent: 'space-between',
                background: variant === 'band' ? 'linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 100%)' : 'transparent',
                textAlign: 'left',
              }}
            >
              <Box style={{ maxWidth: variant === 'band' && !isMobile ? '60%' : '100%' }}>
                <Group gap={10} align="center" />
                <Text
                  mt={8}
                  fw={700}
                  size={variant === 'hero' ? '28px' : '22px'}
                  c="#F8F9FC"
                  style={{ lineHeight: 1.2 }}
                >
                  {project.title}
                </Text>
                <Text mt={6} size="sm" c="rgba(255,255,255,0.72)">
                  {project.description}
                </Text>
              </Box>

              <Group gap={10} align="center" justify="flex-end">
                <Box
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    background: isHovered ? accent : 'rgba(255,255,255,0.08)',
                    color: isHovered ? '#0C0D14' : '#fff',
                    transition: 'background 260ms ease, color 260ms ease, transform 260ms ease',
                    transform: isHovered ? 'translate(3px, -3px)' : 'translate(0, 0)',
                  }}
                >
                  <IconArrowUpRight size={20} stroke={1.6} />
                </Box>
              </Group>
            </Box>
          </Box>
        </Box>
      </UnstyledButton>
    );
  }
);

export default ProjectsBox;