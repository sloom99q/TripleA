import React from 'react';
import { Box, Flex, Image, Stack, Text, Title } from '@mantine/core';
import { ProjectDetailsProps } from '../types/ProjectDetails';
import styles from '@/css/HeroSection.module.css';
import { useMediaQuery } from '@mantine/hooks';

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  image,
  imageAlt = 'Project image',
  title,
  description,
  features,
  imagePosition = 'left',
  className,
}) => {

  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const imageColumn = (
    <Box
            // ref={imageRef}

        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      key="image"
      p={0}
      w={'100%'}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}
    >
      <Image
        className={styles.heroContainer}
        src={image}
        alt={imageAlt}
        loading="lazy"
        style={{            transition: 'transform 1200ms cubic-bezier(0.19, 1, 0.22, 1), opacity 800ms ease',
            // opacity: isHovered ? 0.7 : 0.85,
            borderRadius: 'inherit',
            willChange: 'transform, opacity', borderTopLeftRadius: isMobile ? '30px' : '80px', borderBottomRightRadius: isMobile ? '30px' : '80px' }}
        fit="cover"
        w="100%"
        p={0}
        h={{ base: '200px', sm: '300px', md: '95vh' }}
      />
    </Box>
  );

  const contentColumn = (
    <Box key="content" style={{ flex: 1 }}>
      <Stack pt={{ base: 25, md: 0 }} gap="md">
        <Title order={1} w={'80%'} size={'clamp(2rem, 7vw, 5rem)'} fw={400}>
          {title}
        </Title>

        <Text ml={5} size="md" c="dimmed" ta={'justify'} lineClamp={undefined}>
          {description}
        </Text>

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
      <Flex
        direction={{ base: 'column', md: imagePosition === 'right' ? 'row-reverse' : 'row' }}
        align="center"
        gap={{ base: 24, md: 50 }}
        w="100%"
      >
        {imageColumn}
        {contentColumn}
      </Flex>
    </Box>
  );
};

export default ProjectDetails;
