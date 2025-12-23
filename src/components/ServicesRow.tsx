import React from 'react';
import { Container, Title, Text, Grid, Image, Button, Group, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBrandFramer } from '@tabler/icons-react';
import { ServicesData } from '../mockups/ServicesData';

const ServicesRow: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');

  const ServiceBox = ({ service, titleUp, borderRadius }: any) => (
    <Box>
      {(titleUp || isMobile) && (
      <Box p={14}>
        <Text size='md2' fw={600}>
            {service.title}
        </Text>
      </Box>
      )}
      <Box
        style={{
          borderRadius: borderRadius,
          overflow: 'hidden',
          width: '100%',
          height: '400px',
          aspectRatio: '1 / 1',
        }}
      >
        <Image
          src={service.image}
          alt={service.title}
          style={{ width: '100%', height: '100%' }}
          fit="cover"
        />
      </Box>
      {!titleUp && !isMobile && (
      <Box p={14}>
        <Text size='md2' fw={600}>
            {service.title}
        </Text>
      </Box>
      )}
    </Box>
  );

  const WideBox = ({ service }: any) => (
    <Box>
      <Box
        style={{
        //   borderTopLeftRadius: 16,
          overflow: 'hidden',
          width: '100%',
          height: '350px',
          aspectRatio: '16 / 6',
        }}
      >
        <Image
          src={service.image}
          alt={service.title}
          style={{ width: '100%', height: '100%' }}
          fit="cover"
          />
      </Box>
      <Box p={14}>
        <Text size='md2' fw={600}>
            {service.title}
        </Text>
      </Box>
    </Box>
  );

  return (
    <Container className='nav-boundary' size="xl" p={0} mt={150} m={50}>
      <Title ta="left" size="lg" fw={500} mb={10}>
        Start Building Your Dream Project
      </Title>
      <Text ta="left" c="dimmed" mb={50}>
        Write us by completing the form. We will get back to you as soon as possible!
      </Text>

      <Grid gutter={0} mb={40}>

        {/* 3x2 grid below */}
        {/* Row 1 */}
        <Grid.Col mb={50} span={{ base: 12, sm: 6, md: 4 }} p={0}>
          <ServiceBox service={ServicesData[0]} titleUp={false} borderRadius="60px 0 0 0" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }} p={0}>
          <ServiceBox service={ServicesData[1]} titleUp={true} borderRadius={0} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }} p={0}>
          <ServiceBox service={ServicesData[2]} titleUp={false} borderRadius="0 60px 0 0" />
        </Grid.Col>

        {/* Row 2 */}
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }} p={0}>
          <ServiceBox service={ServicesData[3]} titleUp={true} borderRadius="0 0 0 60px" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }} p={0}>
          <ServiceBox service={ServicesData[4]} titleUp={false} borderRadius={0} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }} p={0}>
          <ServiceBox service={ServicesData[5]} titleUp={true} borderRadius="0 0 60px 0" />
        </Grid.Col>

     {/* Wide box at top */}
        <Grid.Col mb={50} span={{ base: 12 }} p={0}>
          <WideBox service={ServicesData[6]} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ServicesRow;
