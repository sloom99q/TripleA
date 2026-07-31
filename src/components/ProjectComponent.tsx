'use client';

import React from 'react';
import { Box, Flex, Image, List, Stack, Text, Title } from '@mantine/core';
import { ProjectDetailsProps } from '../types/ProjectDetails';
import styles from '@/css/HeroSection.module.css';
import { useMediaQuery } from '@mantine/hooks';

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  image,
  imageAlt,
  video,
  title,
  description,
  scopeOfWork,
  features,
  imagePosition = 'left',
  className,
}) => {

  const isMobile = useMediaQuery('(max-width: 768px)');
  const hasContent = Boolean(
    title?.trim() ||
    description?.trim() ||
    (scopeOfWork && scopeOfWork.length > 0) ||
    (features && features.length > 0)
  );
  const hasImage = Boolean(image);
  const hasVideo = Boolean(video);
  const hasMedia = hasImage || hasVideo;
  const imageSrc = image ? (typeof image === 'string' ? image : image.src) : '';
  const resolvedAlt =
    imageAlt ||
    (title?.trim()
      ? `${title.trim()} — interior fit-out project by Triple A Interiors`
      : 'Interior fit-out project by Triple A Interiors');

  const mediaRadius = {
    borderTopLeftRadius: isMobile ? '30px' : '80px',
    borderBottomRightRadius: isMobile ? '30px' : '80px',
  };

  const mediaColumn = hasMedia ? (
    <Box
      key="media"
      p={0}
      w={'100%'}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}
    >
      {hasVideo ? (
        <Box
          w="100%"
          h={{ base: '200px', sm: '300px', md: '95vh' }}
          style={{ overflow: 'hidden', ...mediaRadius }}
        >
          <video
            src={video}
            poster={imageSrc || undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={resolvedAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </Box>
      ) : (
        <Image
          className={styles.heroContainer}
          src={imageSrc}
          alt={resolvedAlt}
          loading="lazy"
          style={{
            transition: 'transform 1200ms cubic-bezier(0.19, 1, 0.22, 1), opacity 800ms ease',
            borderRadius: 'inherit',
            willChange: 'transform, opacity',
            ...mediaRadius,
          }}
          fit="cover"
          w="100%"
          p={0}
          h={{ base: '200px', sm: '300px', md: '95vh' }}
        />
      )}
    </Box>
  ) : null;

  const contentColumn = (
    <Box key="content" style={{ flex: 1 }}>
      <Stack pt={{ base: 25, md: 0 }} gap="md">
        <Title order={2} w={'80%'} size={'clamp(2rem, 7vw, 5rem)'} fw={400}>
          {title}
        </Title>

        <Text ml={5} size="md" c="dimmed" ta={'justify'} lineClamp={undefined}>
          {description}
        </Text>

        {scopeOfWork && scopeOfWork.length > 0 && (
          <Box ml={{ base: 8, md: 20 }} mt={{ base: 'sm', md: 'md' }}>
            <Text fw={500} size={isMobile ? 'xl' : 'lg'} mb="xs">
              Scope of work
            </Text>
            <List spacing="xs" withPadding size={isMobile ? 'sm' : 'md'}>
              {scopeOfWork.map((item, index) => (
                <List.Item key={`${item}-${index}`}>{item}</List.Item>
              ))}
            </List>
          </Box>
        )}

        {features && features.length > 0 && (
          <Box ml={25} mt="md">
            <Text fw={400} size="md" mb="md">
              Key Features:
            </Text>
            <Stack gap="lg">
              {features.map((feature, index) => (
                <Box key={index}>
                  <Text fw={400} size="sm">
                    {feature.title}
                  </Text>
                  <Text fw={400} size="sm" c="dimmed">
                    {feature.description}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Box>
        )}
      </Stack>
    </Box>
  );

  return (
    <Box w="100%" p={0} className={className}>
      {!hasContent && hasMedia ? (
        <Box w="100%">{mediaColumn}</Box>
      ) : !hasMedia ? (
        <Box w="100%">{contentColumn}</Box>
      ) : (
      <Flex
        direction={{ base: 'column', md: imagePosition === 'right' ? 'row-reverse' : 'row' }}
        align="center"
        gap={{ base: 24, md: 50 }}
        w="100%"
      >
        {mediaColumn}
        {contentColumn}
      </Flex>
      )}
    </Box>
  );
};

export default ProjectDetails;
