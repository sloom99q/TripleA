export interface ProjectHeroProps {
  project?: {
    title: string;
    image: string;
    description?: string;
    story?: string;
    client?: string;
    duration?: string;
    location?: string;
  };
}

export const ProjectsData = [
    {
        id: 'emaar',
        title: 'Emaar',
        image: 'https://framerusercontent.com/images/Ei18CfnuW3fLZxkwxmki15Yhdo.png',
        description: 'Linear art moments, recessed light, and graphite walls over a long run.',
        story: 'A monochrome executive wing featuring recessed linear lighting, graphite walls, and walnut accents tailored for quiet leadership zones. The design balances function with restrained luxury.',
        client: 'Emaar Properties',
        duration: '14 weeks',
        location: 'Dubai, UAE',
    },
    {
        id: 'concrete-studio',
        title: 'Concrete Studio',
        image: 'https://framerusercontent.com/images/44Jl7kH6R3saHM3s1qcGaHq33s.png',
        description: 'Open plan with polished concrete, modular glazing, and monochrome furnishings.',
        story: 'A modular studio space with polished concrete floors, switchable glazing, and floating track lighting designed for agile teams and rapid workshops.',
        client: 'Studio Collective',
        duration: '10 weeks',
        location: 'Dubai Media City',
    },
    {
        id: 'monochrome-lobby',
        title: 'Monochrome Lobby',
        image: 'https://framerusercontent.com/images/BYd2fAKoSdoiNuFXD15OwuNQg.png?scale-down-to=1024',
        description: 'Arrival space layered with stone, graphite metal, and diffused lighting.',
        story: 'A restrained arrival hall with stone slabs, graphite metal trims, and diffused lighting to keep circulation calm and legible for visitors.',
        client: 'DIFC Tower',
        duration: '6 weeks',
        location: 'DIFC, Dubai',
    },
    {
        id: 'executive-boardroom',
        title: 'Executive Boardroom',
        image: 'https://framerusercontent.com/images/auuJrb6Saou2vqGY2RzjfKZcU.png?scale-down-to=2048',
        description: 'Acoustic walls, smoked glass, and matte metals for focused decision rooms.',
        story: 'A decision suite with acoustic walling, smoked glass partitions, concealed AV systems, and matte metals for distraction-free sessions.',
        client: 'Private Investment Firm',
        duration: '5 weeks',
        location: 'Business Bay',
    },
    {
        id: 'minimal-suite',
        title: 'Minimal Suite',
        image: 'https://framerusercontent.com/images/vV9y7xIdvUY4EsQatim3lRG34.png?scale-down-to=1024',
        description: 'Residential suite in quiet neutrals with inset lighting and soft textiles.',
        story: 'A calm residential suite with inset lighting, soft textiles, and smoked mirrors to extend perceived depth while maintaining warmth.',
        client: 'Private Residence',
        duration: '7 weeks',
        location: 'Palm Jumeirah',
    },
    {
        id: 'terrace-lounge',
        title: 'Terrace Lounge',
        image: 'https://framerusercontent.com/images/OUP0Tgayq6T57PMqkuvkOoOWYU.jpg?scale-down-to=2048',
        description: 'Indoor-outdoor lounge with charcoal palette, low seating, and filtered daylight.',
        story: 'An indoor-outdoor lounge space with charcoal masonry, low seating, and filtered daylight under a slatted canopy for seamless entertaining.',
        client: 'Hospitality Group',
        duration: '9 weeks',
        location: 'JLT, Dubai',
    },
];
