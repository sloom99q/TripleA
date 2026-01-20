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

export const ServiceDetails: React.FC = () => {
    return (
        <Group gap={150}>
            <Project        
            className="interior-fit-out"        
            image={Interior}
            title="Interior Fit-Out"
            description="We specialize in high-quality interior fit-out solutions, creating functional and beautiful spaces tailored to our clients' needs. From retail stores to offices and residential interiors, our expert team ensures careful planning, execution, and on-time delivery."
            features={[
                { title: "Space Planning & Layout Optimization", description: "Maximize efficiency with strategic layouts tailored to your needs." },
                { title: "Custom Furniture Design & Installation", description: "Specially designed pieces crafted to blend functionality with style." },
                { title: "Premium Materials & Finishes", description: "Luxurious finishes that elevate your interior environment." }
            ]}
            />
            <Project
            className="mep-contracting"
            imagePosition='right'
            image={Walls}
            title="MEP Contracting"
            description="Our Mechanical, Electrical, and Plumbing (MEP) services ensure your property operates efficiently and meets all regulatory standards. We combine advanced technology with industry best practices to deliver seamless integration of systems."
            features={[
                { title: "HVAC System Design & Installation", description: "Climate control systems optimized for comfort and energy efficiency." },
                { title: "Electrical & Lighting Solutions", description: "Advanced electrical infrastructure with intelligent lighting design." },
                { title: "Plumbing System Installation & Maintenance", description: "Reliable water systems with preventive maintenance programs." }
            ]}
            />
            <Project        
            className="full/partial-renovations"        
            image={Walls}
            title="Full/Partial Renovations"
            description="Transform your property with our comprehensive renovation services. Whether it's upgrading a space or a complete overhaul, we bring fresh ideas and expertise to refresh your space."
            features={[
                { title: "Residential & Commercial Renovations", description: "Complete transformations that breathe new life into any property." },
                { title: "Structural Improvements", description: "Reinforcement and upgrades that enhance property strength." },
                { title: "Functional Design Updates", description: "Modern design solutions that prioritize usability and flow." }
            ]}
            />
            <Project
            className="authority-approvals"
            imagePosition='right'
            image={Interior}
            title="Authority Approvals"
            description="Handle the challenges of regulatory compliance with our expert guidance. We simplify the process of obtaining necessary permits and approvals, ensuring your projects stay on track."
            features={[
                { title: "Local Authority Approvals", description: "Assistance with obtaining necessary permits and approvals from local government bodies." },
                { title: "Safety & Environmental Compliance", description: "Full compliance to safety rules and industry standards." },
                { title: "Local Authority Coordination", description: "Expert communication services ensuring smooth government interactions." }
            ]}
            />
            <Project
            className="annual-maintenance-contract"
            image={Interior}
            title="Annual Maintenance Contract"
            description="Ensure uninterrupted performance and long-term reliability of your facilities with our Annual Maintenance Contract. We provide scheduled maintenance, rapid support, and proactive solutions to keep your operations running smoothly all year round."
            features={[
                {
                title: "Preventive Maintenance",
                description: "Regular inspections and scheduled servicing to prevent breakdowns and extend the lifespan of systems and equipment."
                },
                {
                title: "Corrective Maintenance & Repairs",
                description: "Fast response to faults and issues with efficient repair solutions to minimize downtime."
                },
                {
                title: "MEP Systems Coverage",
                description: "Comprehensive maintenance of mechanical, electrical, and plumbing systems to ensure safety and optimal performance."
                }
            ]}
            />
            <Project        
            className="ceiling-works"        
            imagePosition='right'
            image={Ceiling}
            title="Ceiling Works"
            description="Our team delivers innovative ceiling designs, including suspended, gypsum, and acoustic ceilings, tailored to your project’s requirements. We use premium materials and advanced installation techniques to ensure durability, safety, and a flawless finish. Whether you need decorative elements, integrated lighting, or soundproofing solutions, we provide comprehensive services from concept to completion."
            features={[
                { title: "Gypsum Board Ceilings", description: "Durable and fire-resistant gypsum solutions for any space." },
                { title: "Stretch Ceiling Systems", description: "Modern fabric ceilings with seamless integration and visual appeal." },
                { title: "Marmox & Foam Board Systems", description: "Lightweight, moisture-resistant panels for superior performance." }
            ]}
            />
            <Project
            className="wall-finishes-&-cladding"
            image={Walls}
            title="Wall Finishes & Cladding"
            description="Enhance your spaces with our premium wall finishes and cladding solutions. We offer a wide range of materials, including natural stone, wood, metal, and high-performance materials, to suit various architectural styles and functional requirements. Our skilled team ensures precise installation and finishing, delivering walls that are not only visually stunning but also durable and easy to maintain."
            features={[
                { title: "Wood Cladding & Feature Walls", description: "Natural wood surfaces that add warmth and architectural character." },
                { title: "Gypsum & Cement Board Cladding", description: "Durable, cost-effective solutions for modern wall systems." },
                { title: "Microcement & Decorative Finishes", description: "Contemporary smooth finishes for a refined look." }
            ]}
            />
            <Project
            className="flooring-solutions"
            image={Flooring}
            imagePosition='right'
            title="Flooring Solutions"
            description="Durable and elegant flooring for homes and commercial spaces. We offer a wide range of flooring options, including hardwood, laminate, vinyl, and tile, tailored to your design preferences and functional needs. Our expert installation team ensures precision and quality, enhancing the visual appeal and lifespan of your floors."
            features={[
                { title: "Porcelain, Marble & Ceramic Tiling", description: "Premium tiles offering elegance, durability, and easy maintenance." },
                { title: "Large-Format & Big Slab Tiling", description: "Seamless expansive tiles for modern, minimalist designs." },
                { title: "Carpet Supply & Installation", description: "Soft, comfortable flooring solutions for residential comfort." }
            ]}
            />
        </Group>
    );
};

export default ServiceDetails;