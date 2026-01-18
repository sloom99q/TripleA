import React from "react";
import { Group } from "@mantine/core";
import Project from "@/components/ProjectComponent";
// @ts-ignore
import Interior from '@/assets/imgs/fit-out.webp';
// @ts-ignore
import Walls from '@/assets/imgs/Walls.webp';
// @ts-ignore
import Flooring from '@/assets/imgs/Flooring.webp';
// @ts-ignore
import Ceiling from '@/assets/imgs/FamilySpace.webp';

type Detail = {
    image: string;
    title: string;
    description: string;
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
    'emaar': [
        {
            image: 'https://framerusercontent.com/images/B2Fiokv3psMmLi34o7oSvXVkEvM.png',
            title: 'Facade',
            description: 'The façade is a harmonious blend of design and functionality, showcasing clean lines, architectural details, and balanced proportions. Large windows allow natural light to flow in, framed by elegant trims or modern, minimalist edges. High-quality materials like stone, wood, or sleek cladding add texture and sophistication. The entrance is inviting, with a well-crafted door and thoughtful landscaping framing the structure. Lighting accents highlight the features at night, creating a dynamic and welcoming appearance that reflects the home’s personality and design ethos.'
        },
        {
            image: 'https://framerusercontent.com/images/KWy4402clYiRHjVjnPOLmeeQ1os.png',
            title: 'Landscaping Area',
            description: 'The landscaping area is a carefully curated blend of nature and design. Lush greenery, vibrant flower beds, and neatly trimmed shrubs frame the property, creating a welcoming atmosphere. Winding stone pathways lead to seating nooks and functional spaces, such as a patio or garden beds. Decorative elements like water features, garden lighting, and sculptural accents add charm and character. Native plants and sustainable design practices ensure low maintenance and environmental harmony, while the layout encourages outdoor living and connection with nature.',
            imagePosition: 'right'
        }
    ],
    'wall-finishes-cladding': [
        {
            image: Walls,
            title: 'Wall Finishes & Cladding',
            description: 'Durable, elegant cladding systems engineered for longevity.'
        },
        {
            image: Interior,
            title: 'Acoustic Treatments',
            description: 'Performance walls that balance acoustics and aesthetics.',
            imagePosition: 'right'
        }
    ],
    'flooring-solutions': [
        {
            image: Flooring,
            title: 'Flooring Solutions',
            description: 'High-traffic-ready flooring with precise leveling and finishes.'
        },
        {
            image: Ceiling,
            title: 'Complementary Ceilings',
            description: 'Integrated ceiling details to complete the spatial rhythm.',
            imagePosition: 'right'
        }
    ],
    'authority-approvals': [
        {
            image: Interior,
            title: 'Authority Approvals',
            description: 'Documentation, drawings, and coordination to secure approvals quickly.'
        },
        {
            image: Walls,
            title: 'Compliance Detailing',
            description: 'Code-aligned finishes that meet authority specifications.',
            imagePosition: 'right'
        }
    ],
    'renovation-services': [
        {
            image: Flooring,
            title: 'Renovation Services',
            description: 'Phased renovation plans that minimize downtime for occupants.'
        },
        {
            image: Interior,
            title: 'Adaptive Reuse',
            description: 'Refreshed interiors that retain what works and improve what doesn’t.',
            imagePosition: 'right'
        }
    ],
    'mep-services': [
        {
            image: Ceiling,
            title: 'MEP Services',
            description: 'Integrated mechanical, electrical, and plumbing delivery with clean routing.'
        },
        {
            image: Walls,
            title: 'Service Coordination',
            description: 'Clash-free coordination ensuring finishes and services align.',
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
                />
            ))}
        </Group>
    );
};

export default ProjectDetails;