import React from 'react';
import HeroSection from '@/components/HeroSection';
import Clients from '@/components/ClientsSection';
import EmaarTestimony from '@/components/EmaarTestimony';
import ContactUs from './ContactUs';
import { Badge } from '@mantine/core';


const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <EmaarTestimony />
            <ContactUs />
            <Clients />
        </>
    );
};

export default Home;