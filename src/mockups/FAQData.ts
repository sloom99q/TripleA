export type FAQItemType = {
  question: string;
  answer: string;
  defaultOpen: boolean;
};

/**
 * Home/Contact FAQ — the single source of truth for both the visible accordion
 * (FAQ.tsx) and the FAQPage JSON-LD emitted from the home route
 * (buildFaqPageLd(FAQData) in app/page.tsx). Because schema is generated from
 * this exact array, the structured data always matches the visible Q&A.
 *
 * Answers are written to earn topical authority for Dubai interior fit-out
 * search intent (office, commercial, retail, restaurant and villa fit-out and
 * renovation), and to carry the process + authority-approval content
 * (Dubai Municipality, DEWA, Trakhees, Civil Defence, MEP, joinery) that the
 * image-led hero sections cannot. Keep answers natural and factual — no keyword
 * stuffing, no unverifiable claims.
 */
export const FAQData: FAQItemType[] = [
  {
    question: "What does a Dubai interior fit-out company like Triple A do?",
    answer:
      "Triple A Interiors is a Dubai-based interior fit-out and turnkey contractor. We take a space from bare shell or existing condition to a fully finished, occupation-ready interior — covering design and space planning, MEP (mechanical, electrical and plumbing), joinery, flooring, ceilings, wall finishes and the authority approvals in between. Working with a single fit-out contractor in Dubai means one accountable team manages your budget, programme and quality from concept to handover, across both commercial and residential projects.",
    defaultOpen: true,
  },
  {
    question: "What are the stages of your interior fit-out process?",
    answer:
      "Every interior fit-out we deliver in Dubai follows a disciplined four-stage process engineered for quality, transparent timelines and full regulatory compliance. Stage one is Design & Space Planning: concept development, 3D visualisation and layout optimisation tailored to how the space will actually be used. Stage two is MEP & Construction: mechanical, electrical and plumbing first-fix, partitions and structural works executed to specification. Stage three is Finishes & Joinery: flooring, wall cladding, ceilings, lighting and bespoke joinery installed to a precise, premium finish. Stage four is Approvals & Handover: coordinating every authority approval, snagging and a clean, on-time handover ready for occupation.",
    defaultOpen: false,
  },
  {
    question:
      "Which authority approvals do you handle — Dubai Municipality, DEWA, Trakhees and Civil Defence?",
    answer:
      "Yes. As a licensed Dubai fit-out contractor we manage the full approvals chain on your behalf so your project stays compliant from permit through to completion. That includes Dubai Municipality (DM) building and fit-out permits, DEWA for electrical and water connections, Dubai Civil Defence (DCD) for fire and life-safety systems, and Trakhees approvals for projects located in Ports, Customs and Free Zone Corporation areas such as Nakheel and Dubai World communities. We prepare the drawings, submit the applications and coordinate inspections so you never have to navigate the authorities yourself.",
    defaultOpen: false,
  },
  {
    question: "Do you provide MEP works as part of a fit-out?",
    answer:
      "Yes. Our in-house MEP capability is central to every project. As MEP contractors in Dubai we design and install HVAC, electrical distribution, lighting, plumbing, drainage and fire-protection systems, then coordinate them with the ceilings, partitions and finishes so nothing is compromised on site. All MEP work is executed to DEWA, Dubai Municipality and Civil Defence standards and commissioned before handover, which is what keeps a fit-out both safe and easy to approve.",
    defaultOpen: false,
  },
  {
    question: "Do you make custom joinery and built-in furniture?",
    answer:
      "Yes. Bespoke joinery is one of the things clients come to us for. From our own workshop we produce custom cabinetry, reception desks, wardrobes, wall panelling, feature walls and fitted furniture in a wide range of veneers, laminates, solid timber and stone. Because the joinery is made to measure alongside the flooring, wall finishes and lighting, everything lines up and reads as one cohesive, premium interior rather than off-the-shelf parts.",
    defaultOpen: false,
  },
  {
    question:
      "Do you handle office, retail, restaurant and other commercial fit-outs?",
    answer:
      "Yes. Commercial fit-out is a core part of what we do. We deliver office fit-outs and workplace renovations, retail fit-outs for shops and showrooms, and restaurant and café fit-outs including kitchens and front-of-house — for clients such as Emaar, Meraas and Wood Group. Each commercial fit-out in Dubai is planned around your operational needs, brand and the landlord and authority requirements for your building, so the finished space works commercially as well as it looks.",
    defaultOpen: false,
  },
  {
    question: "Can you renovate villas, apartments and offices?",
    answer:
      "Absolutely. Alongside new fit-outs we carry out full and partial renovations across Dubai — villa renovations, apartment refurbishments and office renovations. That can mean reconfiguring layouts, upgrading MEP, replacing flooring, walls, ceilings and joinery, or a complete interior transformation. Whether you are modernising a single room or renovating an entire villa, we manage the demolition, construction, finishes and approvals as one coordinated project.",
    defaultOpen: false,
  },
  {
    question: "How long does an interior fit-out project usually take?",
    answer:
      "Most interior fit-out projects in Dubai take between 2 and 6 months, depending on the scope of work, the size of the unit and how quickly authority approvals come through. A typical apartment or office fit-out runs around 8 to 14 weeks, while larger villas, restaurants and multi-unit residential projects can take longer. After an initial site visit we give you a realistic programme with clear milestones so you always know what happens next.",
    defaultOpen: false,
  },
  {
    question: "How much does an interior fit-out cost in Dubai?",
    answer:
      "Interior fit-out in Dubai typically ranges from around AED 500 per square metre for basic work to AED 5,000+ per square metre for high-end, luxury finishes. The final cost depends on the project type, materials, MEP requirements and design complexity. We provide a detailed, itemised quote after an initial consultation so you can see exactly where the budget goes, with no hidden extras.",
    defaultOpen: false,
  },
  {
    question: "Which areas of Dubai and the UAE do you serve?",
    answer:
      "We are based in Al Garhoud, Dubai and deliver interior fit-out and renovation projects across Dubai and the wider UAE, including Sharjah and Ras Al Khaimah. We also work with clients based outside the country through virtual consultations, detailed documentation and remote project management, so you can commission a fit-out with us wherever you are.",
    defaultOpen: false,
  },
  {
    question: "Can I be involved in the design, layout and finishes?",
    answer:
      "Definitely — we encourage it. You will have regular consultations with our design team throughout the process, and every layout configuration, material selection and finish can be tailored to your preferences and how you will use the space. If you would like the space delivered move-in ready, we also offer space planning, furniture selection, procurement and installation so the interior is complete on handover.",
    defaultOpen: false,
  },
];

/**
 * The full FAQ (and its FAQPage JSON-LD) lives on the home page. Contact and
 * Projects render a smaller, page-relevant SUBSET instead of the whole block,
 * so each page's copy stays distinct (avoids duplicate on-page content) while
 * still answering the questions most relevant to that page's intent. Selected
 * by question prefix so the subsets survive reordering of FAQData.
 */
const pickFaqs = (prefixes: string[]): FAQItemType[] =>
  prefixes
    .map((p) => FAQData.find((f) => f.question.startsWith(p)))
    .filter((f): f is FAQItemType => Boolean(f))
    .map((f, i) => ({ ...f, defaultOpen: i === 0 }));

export const ContactFAQ: FAQItemType[] = pickFaqs([
  "Which areas of Dubai",
  "How long does an interior fit-out",
  "How much does an interior fit-out",
  "Can I be involved",
]);

export const ProjectsFAQ: FAQItemType[] = pickFaqs([
  "What are the stages",
  "Do you handle office",
  "Can you renovate",
  "Which authority approvals",
]);
