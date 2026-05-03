import EmaarShowcase from '@/assets/imgs/EmaarShowcase.webp';
import FormaStudio from '@/assets/imgs/FormaStudio.webp';
import CityWalkHeader from '@/assets/imgs/city-walk/Header.jpg';
import WoodHeader from '@/assets/imgs/wood/WoodHeader.jpg';
import JamaicaHeader from '@/assets/imgs/jamaica-blue/JamaicaHeader.webp';
import Dune1 from '@/assets/imgs/dune-sahara/1.jpg';
import { StaticImageData } from 'next/image';

export interface ProjectHeroProps {
  project?: {
    title: string;
    image: string | StaticImageData;
    description?: string;
    story?: string;
    client?: string;
    duration?: string;
    location?: string;
    ogImage?: string; // Static URL for Open Graph
  };
}

export interface ProjectData {
  id: string;
  title: string;
  image: StaticImageData;
  description: string;
  story: string;
  client: string;
  duration: string;
  location: string;
  ogImage: string; // Static URL for Open Graph/social sharing
}

export const ProjectsData: ProjectData[] = [
    {
        id: 'wood-group-corporate-office-fitout',
        title: 'Wood Group Fit-out',
        image: WoodHeader,
        ogImage: '/projects/wood.jpg',
        description: 'Engineering excellence meets commercial interior design. We delivered a high-performance fit-out for Wood Group, creating a workspace as precise as their technical heritage.',
        story: 'A full commercial interior fit-out featuring advanced MEP systems and acoustic glass partitions. We focused on ergonomic workstations and sustainable lighting for this corporate headquarters.',
        client: 'Wood Group',
        duration: '10 weeks',
        location: 'Sharjah, Sahara Healthcare city',
    },
    {
        id: 'forma-studio-architecture-office-design',
        title: 'Forma Office Design',
        image: FormaStudio,
        ogImage: '/projects/forma.webp',
        description: 'A commercial interior built by designers, for designers. This fit-out for Forma Studio showcases a "living portfolio" of raw materials and structural transparency.',
        story: 'Minimalist commercial fit-out highlighting industrial aesthetics. The interior features custom metal joinery, exposed concrete finishes, and an integrated architectural material library.',
        client: 'Forma Studio',
        duration: '10 weeks',
        location: 'JVC, Bin-Ghatty',
    },
    {
        id: 'celadon-central-park-residential-buildings',
        title: 'Celadon Central Park by Meraas',
        image: CityWalkHeader,
        ogImage: '/projects/celadon.jpg',
        description: 'Redefining high-end living at Central Park. Our commercial-grade fit-out for Celadon brings park-side serenity into every interior through organic textures and panoramic framing.',
        story: 'High-spec interior fit-out for premium residential buildings. We handled the commercial procurement of marble finishes, smart-home automation, and bespoke cabinetry across multiple units.',
        client: 'Meraas',
        duration: '18 weeks',
        location: 'City Walk, Dubai',
    },
    {
        id: 'emaar-villas-luxury-interior-design',
        title: 'Emaar',
        image: EmaarShowcase,
        ogImage: '/projects/emaar.webp',
        description: 'Luxury executive office interior design in Dubai with recessed linear lighting, graphite feature walls, and custom walnut detailing.',
        story: 'This Emaar executive wing was delivered as a high-end commercial interior fit-out in Dubai, combining monochrome palettes, recessed linear lighting, graphite walls, and walnut accents to create quiet leadership zones with premium functionality and timeless design.',
        client: 'Emaar Properties',
        duration: '14 weeks',
        location: 'Dubai, UAE',
    },
    {
        id: 'jamaica-blue-coffee-shop-hospitality-fitout',
        title: 'Jamaica Blue Fit-out',
        image: JamaicaHeader,
        ogImage: '/projects/jamaica.webp',
        description: 'An urban coffee oasis. Our commercial interior strategy for Jamaica Blue uses warm timber fit-out elements to create a sensory escape for the modern commuter.',
        story: 'Specialist hospitality commercial fit-out compliant with franchise standards. The interior features heavy-duty kitchen plumbing, custom counter joinery, and specialized acoustic dampening.',
        client: 'Jamaica',
        duration: '8 weeks',
        location: 'Sharjah, Sahara Center',
    },
    {
        id: 'marbilla-villa-renovation',
        title: 'Marbilla Villa Renovation',
        image: Dune1,
        ogImage: '/projects/dune.jpg',
        description: 'The art of the "walk-through." We delivered a rhythmic commercial interior for Marbilla Villa, using a premium fit-out to turn a residential space into a theatrical brand experience.',
        story: 'This project was a commercial interior fit-out for a private villa, transforming it into a high-end experiential space. The design features a curated sequence of rooms with bespoke joinery, premium finishes, and integrated lighting to create a narrative flow throughout the residence.',
        client: 'Private Owner',
        duration: '8 weeks',
        location: 'Marbilla Villas, Ras Al-Khaimah',
    },
];
