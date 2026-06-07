export type FAQItemType = {
  question: string;
  answer: string;
  defaultOpen: boolean;
};

export const FAQData: FAQItemType[] = [
  {
    question: "How long does an interior fit-out project usually take?",
    answer: "Most interior fit-out projects in Dubai take between 2 and 6 months, depending on the scope of work and the size of the unit. A typical apartment or office fit-out runs around 8 to 14 weeks, while larger villas and multi-unit residential projects can take longer.",
    defaultOpen: true
  },
  {
    question: "How much does an interior fit-out cost in Dubai?",
    answer: "Interior fit-out in Dubai typically ranges from around AED 500 per square metre for basic work to AED 5,000+ per square metre for high-end, luxury finishes. The final cost depends on project type, materials, MEP requirements and design complexity. We provide a detailed, itemised quote after an initial consultation.",
    defaultOpen: false
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer: "Yes. Triple A Interiors delivers fit-out and renovation for both residential and commercial spaces, including apartments, villas, corporate offices, retail and hospitality. Our completed projects range from private villas to corporate workspaces for clients such as Emaar, Meraas and Wood Group.",
    defaultOpen: false
  },
  {
    question: "Which areas do you serve?",
    answer: "We are based in Al Garhoud, Dubai and deliver projects across Dubai and the wider UAE, including Sharjah and Ras Al Khaimah. We also work with clients based outside the country through virtual consultations and detailed remote project management.",
    defaultOpen: false
  },
  {
    question: "Can I be involved in the design process?",
    answer: "Absolutely! We encourage client involvement throughout the design process. You'll have regular consultations with our design team to ensure your vision is realized.",
    defaultOpen: false
  },
  {
    question: "Do you handle permits and legal paperwork?",
    answer: "Yes, we manage all necessary permits and legal documentation required for your fit-out project. Our team has extensive experience navigating local regulations.",
    defaultOpen: false
  },
  {
    question: "Is it possible to customize the layout or finishes?",
    answer: "Definitely! We specialize in custom solutions. From layout configurations to material selections and finishes, every aspect can be tailored to your preferences and requirements.",
    defaultOpen: false
  },
  {
    question: "Can you help with furnishing the space?",
    answer: "Yes, we offer comprehensive furnishing services including space planning, furniture selection, procurement, and installation to create a complete, move-in ready space.",
    defaultOpen: false
  },
  {
    question: "I'm not based locally — can I still work with you?",
    answer: "Yes! We work with clients from various locations. Through virtual meetings, detailed documentation, and regular updates, we ensure seamless project management regardless of your location.",
    defaultOpen: false
  }
];