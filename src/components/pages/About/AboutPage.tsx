'use client';

import React from 'react';
import { PAGE_SEO_CONFIG, BASE_URL } from '@/utils/seoConfig';
import AboutHero from '@/components/pages/About/AboutHero';
import ValuesSection from '@/components/pages/About/ValuesSection';
import MissionVisionSection from '@/components/pages/About/MissionVisionSection';
import WhyChooseUsSection from '@/components/pages/About/WhyChooseUsSection';
import TimelineSection from '@/components/pages/About/TimelineSection';
import CTASection from '@/components/pages/About/CTASection';
import { Box } from '@mantine/core';
import {PageContainer} from '@/layout/PageContainer';
import {FullPageContainer} from '@/layout/PageContainer';

const AboutPage: React.FC = () => {
  const seoConfig = {
    ...PAGE_SEO_CONFIG.about,
    ogUrl: `${BASE_URL}/about`,
  };

  return (
    <>
      {/* Main H1 - Hidden but crucial for SEO */}
      <Box visibleFrom="xs" style={{ position: 'absolute', left: '-9999px' }}>
        <h1>About Triple A Interiors - Dubai's Premier Interior Design Company</h1>
      </Box>

      {/* Hero Section */}
      <Box component="section" aria-label="About hero section">
        <AboutHero />
      </Box>

      <PageContainer>
        {/* Mission & Vision Section - White bg */}
        <Box mt={40} mb={80}>
          <MissionVisionSection />
        </Box>
      </PageContainer>

        {/* Core Values Section - Light grey bg */}
        <Box mb={0}>
          <ValuesSection />
        </Box>

      <PageContainer>
        {/* Why Choose Us Section - White bg */}
        <Box mb={0}>
          <WhyChooseUsSection />
        </Box>
      </PageContainer>

        {/* Timeline Section - Full width */}
        <FullPageContainer>
          <TimelineSection />
        </FullPageContainer>

        {/* Call to Action Section */}
        <Box mb={60}>
          <CTASection />
        </Box>
    </>
  );
};

export default AboutPage;
