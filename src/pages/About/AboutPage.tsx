import React from 'react';
import AboutHero from '@/pages/About/AboutHero';
import ValuesSection from '@/pages/About/ValuesSection';
import MissionVisionSection from '@/pages/About/MissionVisionSection';
import WhyChooseUsSection from '@/pages/About/WhyChooseUsSection';
import TimelineSection from '@/pages/About/TimelineSection';
import CTASection from '@/pages/About/CTASection';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mantine/core';
import {PageContainer} from '@/layout/PageContainer';
import {FullPageContainer} from '@/layout/PageContainer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Triple A Interiors</title>
        <meta
          name="description"
          content="Learn about Triple A Interiors, a trusted interior fit-out company in Dubai known for quality craftsmanship, innovation, and attention to detail."
        />
      </Helmet>

      {/* Hero Section */}
      <AboutHero />

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
