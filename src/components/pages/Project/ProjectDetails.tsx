import React from "react";
import { Group } from "@mantine/core";
import { StaticImageData } from "next/image";
import Project from "@/components/ProjectComponent";
// @ts-ignore
import Interior from '@/assets/imgs/fit-out.webp';
// @ts-ignore
import Walls from '@/assets/imgs/Walls.webp';
// @ts-ignore
import Flooring from '@/assets/imgs/Flooring.webp';
// @ts-ignore
import Ceiling from '@/assets/imgs/FamilySpace.webp';
import Woodnew1 from '@/assets/imgs/wood/new1.jpg';
import Woodnew2 from '@/assets/imgs/wood/new2.jpg';
import Woodnew3 from '@/assets/imgs/wood/new3.jpg';
import Wood1 from '@/assets/imgs/wood/1.jpg';
import Wood2 from '@/assets/imgs/wood/2.jpg';
import Wood3 from '@/assets/imgs/wood/3.jpg';
import Wood4 from '@/assets/imgs/wood/4.jpeg';
import Wood5 from '@/assets/imgs/wood/5.jpeg';
import Wood6 from '@/assets/imgs/wood/6.jpeg';
import Wood7 from '@/assets/imgs/wood/7.jpeg';
import Wood8 from '@/assets/imgs/wood/8.jpeg';
import Wood9 from '@/assets/imgs/wood/9.jpeg';
import Wood10 from '@/assets/imgs/wood/10.jpeg';
import Wood11 from '@/assets/imgs/wood/11.jpeg';
import Wood12 from '@/assets/imgs/wood/12.jpeg';
import Wood13 from '@/assets/imgs/wood/13.jpeg';
// import Wood14 from '@/assets/imgs/wood/14.jpeg';
import Wood14 from '@/assets/imgs/wood/3tg.jpg';
import FacadeEmaar from '@/assets/imgs/Facade-Emaar.webp';
import LandscapingEmaar from '@/assets/imgs/Landscaping-Emaar.webp';
import CustomFloatingDesk from '@/assets/imgs/CustomFloatingDesk.gif';
import Forma2 from '@/assets/imgs/Forma2.jpeg';
import Forma3 from '@/assets/imgs/Forma3.jpeg';
import Forma4 from '@/assets/imgs/Forma4.jpeg';
import Forma from '@/assets/imgs/forma/5tg.jpg';
import out1 from '@/assets/imgs/city-walk/out1.jpeg';
import out2 from '@/assets/imgs/city-walk/out2.jpeg';
import out3 from '@/assets/imgs/city-walk/out3.jpeg';
import inside1 from '@/assets/imgs/city-walk/inside1.jpeg';
import inside2 from '@/assets/imgs/city-walk/inside2.jpeg';
import city1 from '@/assets/imgs/city-walk/1.webp';
import city2 from '@/assets/imgs/city-walk/2.webp';
import city3 from '@/assets/imgs/city-walk/3.webp';
import city4 from '@/assets/imgs/city-walk/4.webp';
import city5 from '@/assets/imgs/city-walk/5.webp';
import city6 from '@/assets/imgs/city-walk/6.webp';
import city7 from '@/assets/imgs/city-walk/7.webp';
import city8 from '@/assets/imgs/city-walk/8.webp';
import city9 from '@/assets/imgs/city-walk/9.webp';
import Jamaica1 from '@/assets/imgs/jamaica-blue/1.webp';
import Jamaica2 from '@/assets/imgs/jamaica-blue/2.jpg';
import Dune1 from '@/assets/imgs/dune-sahara/1.jpg';
import DuneHeader from '@/assets/imgs/dune-sahara/DuneHeader.webp';

type Detail = {
    image: string | StaticImageData;
    title: string;
    description: string;
    scopeOfWork?: string[];
    descriptionVariant?: 'default' | 'keypoints';
    imagePosition?: 'right' | 'left';
};

const defaultDetails: Detail[] = [
    {
        image: Ceiling,
        title: 'Ceiling Works',
        description: 'We specialize in creating beautiful, functional, and sustainable homes...'
    },
    {
        image: Interior,
        title: 'Interior Fit-Out',
        description: 'We specialize in creating beautiful, functional, and sustainable homes...',
        imagePosition: 'right'
    },
    {
        image: Walls,
        title: 'Wall Finishes & Cladding',
        description: 'We specialize in creating beautiful, functional, and sustainable homes...'
    },
    {
        image: Flooring,
        title: 'Flooring Solutions',
        description: 'We specialize in creating beautiful, functional, and sustainable homes...',
        imagePosition: 'right'
    }
];

const detailsByProject: Record<string, Detail[]> = {
    'wood-group-corporate-office-fitout': [
        {
            image: Wood1,
            title: 'Wood Group Fit-out',
            description: "Engineering excellence meets commercial interior design. We delivered a high-performance fit-out for Wood Group, creating a workspace as precise as their technical heritage."
        },
        {
            image: Woodnew1,
            title: '',
            description: '',
            imagePosition: 'right'
        },
        {
            image: Woodnew2,
            title: '',
            description: '',
        },
        {
            image: Woodnew3,
            title: '',
            description: '',
            imagePosition: 'right'
        },
        {
            image: Wood2,
            title: '',
            description: '',
            imagePosition: 'right'
        },
        {
            image: Wood3,
            title: '',
            description: '',
        },
        {
            image: Wood4,
            title: '',
            description: '',
            imagePosition: 'right'
        },
        // {
        //     image: Wood5,
        //     title: 'After',
        //     description: '',
        // },
        {
            image: Wood7,
            title: '',
            description: '',
        },
        {
            image: Wood8,
            title: '',
            description: '',
            imagePosition: 'right'
        },
        {
            image: Wood9,
            title: '',
            description: '',
        },
        {
            image: Wood14,
            title: '',
            description: '',
            imagePosition: 'right'
        }
    ],
    'forma-studio-architecture-office-design': [
        {
            image: CustomFloatingDesk,
            title: 'Custom Floating Desk',
            description: ''
        },
        {
            image: Forma2,
            title: '',
            description: '',
            scopeOfWork: [
                'Ceiling works',
                'Lightning system',
                'Tiling works',
                'Wall cladding',
            ],
            imagePosition: 'right'
        },
        {
            image: Forma3,
            title: 'Glass partition',
            description: `Glass partition with switchable film for privacy and openness as needed, integrated with acoustic seals to maintain sound control while allowing natural light to permeate the workspace.`,
            imagePosition: 'left'
        },
        {
            image: Forma4,
            title: `Joinery works`,
            description: `Custom joinery with hidden cabinet doors that blend seamlessly into the wall, providing ample storage while maintaining a clean and minimalist aesthetic. The design incorporates push-to-open mechanisms for a sleek, handle-free look, and the cabinetry is finished in a matte material that complements the overall interior palette.`,
            imagePosition: 'right'
        },
        {
            image: Forma,
            title: ``,
            description: ``
        }
    ],
    'celadon-central-park-residential-buildings': [
        {
            image: out1,
            title: '',
            description: '',
            scopeOfWork: [
                'Interior design fit-out',
                'External building paint',
                'Plaster',
                'Paint',
                'Gypsum board',
                'Ceiling',
                'Tiling',
                'Joinery',
            ],
        },
        {
            image: out2,
            title: '',
            description: '',
            imagePosition: 'right'
        },
        {
            image: inside1,
            title: '',
            description: '',
            imagePosition: 'right'
        },
        {
            image: inside2,
            title: '',
            description: ''
        },
        {
            image: city6,
            title: '',
            description: '',
            imagePosition: 'right'
        },
        {
            image: city1,
            title: '',
            description: ''
        },
        {
            image: city2,
            title: '',
            description: '',
            imagePosition: 'right'
        },
        {
            image: city3,
            title: '',
            description: ''
        },
        {
            image: city4,
            title: '',
            description: '',
            imagePosition: 'right'
        },
        {
            image: city5,
            title: '',
            description: ''
        },
        {
            image: city7,
            title: '',
            description: '',
            imagePosition: 'right'
        },
        {
            image: city8,
            title: '',
            description: ''
        },
        {
            image: city9,
            title: '',
            description: '',
            imagePosition: 'right'
        },
    ],
    'emaar-villas-luxury-interior-design': [
        {
            image: LandscapingEmaar,
            title: '',
            description: '',
            scopeOfWork: [
                'Spray plaster system',
                'Exterior paint',
                'Landscape',
                'Cement board',
                'Cladding',
                'Tiling',
            ],
        },
        {
            image: FacadeEmaar,
            title: 'Landscaping Area',
            description: 'The landscaping area is a carefully curated blend of nature and design. Lush greenery, vibrant flower beds, and neatly trimmed shrubs frame the property, creating a welcoming atmosphere. Winding stone pathways lead to seating nooks and functional spaces, such as a patio or garden beds. Decorative elements like water features, garden lighting, and sculptural accents add charm and character. Native plants and sustainable design practices ensure low maintenance and environmental harmony, while the layout encourages outdoor living and connection with nature.',
            imagePosition: 'right'
        }
    ],
    'jamaica-blue-coffee-shop-hospitality-fitout': [
        {
            image: Jamaica1,
            title: 'Adaptive Reuse',
            description: 'Refreshed interiors that retain what works and improve what doesn’t.'
        },
        {
            image: Jamaica2,
            title: '',
            description: '',
            imagePosition: 'right'
        }
    ],
    'dune-london-retail-store-fitout': [
        {
            image: Dune1,
            title: '',
            description: 'A premium commercial interior and full fitout for Dune London, featuring a bespoke ceiling design with integrated theatrical lighting, luxury footwear display systems, and high-traffic retail flooring.'
        },
        {
            image: DuneHeader,
            title: '',
            description: '',
            imagePosition: 'right'
        }
    ],
};

type ProjectDetailsProps = {
    projectId?: string;
};

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId }) => {
    const projectDetails = (projectId && detailsByProject[projectId]) || defaultDetails;

    return (
        <Group m={0} gap={150}>
            {projectDetails.map((detail, idx) => (
                <Project
                    key={`${projectId ?? 'default'}-${idx}-${detail.title}`}
                    image={detail.image}
                    imagePosition={detail.imagePosition}
                    title={detail.title}
                    description={detail.description}
                    scopeOfWork={detail.scopeOfWork}
                />
            ))}
        </Group>
    );
};

export default ProjectDetails;