export type FAQItemType = {
  question: string;
  answer: string;
  defaultOpen: boolean;
};

export const FAQData: FAQItemType[] = [
  {
    question: "How long does the process usually take?",
    answer: "2 to 6 months depends on scope of work and unit size",
    defaultOpen: true
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