import React, { memo, useMemo } from 'react';
import { Title, Text, Grid, Group, Box } from '@mantine/core';
import { ServicesData } from '@/mockups/ServicesData';
import { WideServiceBox } from '@/pages/Services/WideServiceBox';
import { ServiceBox } from '@/pages/Services/ServiceBox';
import motionStyles from '@/css/HeroScroll.module.css';
import styles from '@/css/HeroSection.module.css';

const ServiceGrid: React.FC = memo(() => {
  const gridServices = useMemo(() => ServicesData.slice(1, 7), []);
  const mainService = useMemo(() => ServicesData[0], []);

  return (
    <Group mt={80}>
      <Title ta="left" size="lg" fw={500} mb={10} className={`${styles.mainHeading} ${motionStyles.scrollFloat}`}>
        Start Building Your Dream Project
      </Title>
      <Text ta="left" c="dimmed" className={`${styles.subheading} ${motionStyles.scrollFloat}`}>
        Write us by completing the form. We will get back to you as soon as possible!
      </Text>

      <Grid gutter={0} mt={0} mb={40}>
        {/* Wide box at top */}
        <Grid.Col span={{ base: 12 }}>
          <Box mt={50} style={{overflow: 'hidden'}}>
            <WideServiceBox service={mainService} />
          </Box>
        </Grid.Col>

        <Box pt={10}>
            {/* Grid of Services */}
            <Grid gutter={10}>
              {gridServices.map((service, index) => (
                <Grid.Col
                  key={index}
                  span={{ base: 12, sm: 6, md: 4 }}
                  style={{ height: 'clamp(300px, 35vw, 400px)' }}
                >
                  <ServiceBox service={service} />
                </Grid.Col>
              ))}
            </Grid>
        </Box>
      </Grid>
    </Group>
  );
});

export default ServiceGrid;
