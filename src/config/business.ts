/**
 * FreshNest Property Care - Centralized Business Information
 * CRITICAL RULE: Contains strictly verified business information.
 * No fabricated facts, addresses, hours, guarantees, or team claims.
 */

export interface ServiceCategory {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  imageAlt: string;
  imageKey: string;
  highlights: string[];
}

export interface BusinessConfig {
  businessName: string;
  category: string;
  rating: number;
  reviewCount: number;
  phone: string;
  phoneHref: string;
  location: string;
  postalCode: string;
  city: string;
  services: ServiceCategory[];
}

export const BUSINESS_CONFIG: BusinessConfig = {
  businessName: 'FreshNest Property Care',
  category: 'Property Care / Property Services',
  rating: 4.9,
  reviewCount: 493,
  phone: '+44 808 135 1594',
  phoneHref: 'tel:+448081351594',
  location: 'London N1 7GU',
  postalCode: 'N1 7GU',
  city: 'London',
  services: [
    {
      id: 'property-cleaning',
      title: 'Property Cleaning',
      shortDescription: 'Professional property cleaning and upkeep.',
      detailedDescription:
        'Comprehensive property cleaning and presentation upkeep for residential and managed properties. Designed to keep spaces impeccably presented and maintained.',
      imageAlt: 'Service example of clean, well-maintained residential property interior with spotless surfaces',
      imageKey: 'cleaning',
      highlights: [
        'Meticulous interior cleaning & surface care',
        'Tailored to residential and property requirements',
        'Focus on presentation and cleanliness standards',
      ],
    },
    {
      id: 'property-maintenance',
      title: 'Property Maintenance',
      shortDescription: 'General maintenance and property-care requirements.',
      detailedDescription:
        'Dependable general property maintenance to address routine wear, upkeep items, and property care requirements to maintain the standard of your property.',
      imageAlt: 'Property maintenance detail showing architectural joinery and fittings in pristine order',
      imageKey: 'maintenance',
      highlights: [
        'General property care and routine upkeep',
        'Addressing day-to-day property needs',
        'Organised and professional communication',
      ],
    },
    {
      id: 'deep-cleaning',
      title: 'Deep Cleaning',
      shortDescription: 'More intensive property cleaning requirements.',
      detailedDescription:
        'Thorough, detail-focused deep cleaning tailored for seasonal overhauls, comprehensive property resets, or properties requiring focused attention to detail.',
      imageAlt: 'Service example of intensive deep cleaning and detailed sanitary fittings care',
      imageKey: 'deepclean',
      highlights: [
        'Intensive and detail-oriented cleaning',
        'Sanitary, kitchen, and living area focus',
        'High standard of property cleanliness',
      ],
    },
    {
      id: 'end-of-tenancy',
      title: 'End-of-Tenancy Care',
      shortDescription: 'Property preparation and cleaning associated with moving between occupants.',
      detailedDescription:
        'Specialised property preparation and cleaning to ensure spaces are fresh, immaculate, and ready for handover between tenancies and occupants.',
      imageAlt: 'Property care inspiration showing an immaculate flat interior prepared for new occupants',
      imageKey: 'tenancy',
      highlights: [
        'Preparation for occupant transitions',
        'Thorough handover-ready presentation',
        'Clear and straightforward booking communication',
      ],
    },
    {
      id: 'general-upkeep',
      title: 'General Property Upkeep',
      shortDescription: 'Routine tasks that help keep properties presentable and maintained.',
      detailedDescription:
        'Ongoing property-care tasks that ensure communal areas, entrances, and key property spaces remain orderly, clean, and well-looked after.',
      imageAlt: 'Property maintenance example showing an orderly, well-maintained residential hallway',
      imageKey: 'upkeep',
      highlights: [
        'Routine upkeep and presentation tasks',
        'Keeping communal and living areas orderly',
        'Proactive care for property condition',
      ],
    },
    {
      id: 'property-refresh',
      title: 'Property Refresh',
      shortDescription: 'Cleaning and general presentation-focused property care.',
      detailedDescription:
        'Presentation-focused property care aimed at revitalising living spaces, refreshing interiors, and ensuring properties make an outstanding impression.',
      imageAlt: 'Service example of refreshed, bright, and neatly presented living space',
      imageKey: 'refresh',
      highlights: [
        'Presentation-led property revitalisation',
        'Careful attention to visual and tactile finish',
        'Ideal for upcoming viewings or seasonal care',
      ],
    },
  ],
};

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'What does FreshNest Property Care do?',
    answer:
      'FreshNest Property Care provides professional property-care services in London. Visitors can contact the business directly on +44 808 135 1594 or via our enquiry form to discuss their specific property requirements.',
  },
  {
    id: 'faq-2',
    question: 'Where is FreshNest Property Care located?',
    answer:
      'FreshNest Property Care is located in London N1 7GU. Please contact the business to discuss your property location and requirements.',
  },
  {
    id: 'faq-3',
    question: 'How can I contact FreshNest Property Care?',
    answer:
      'You can call FreshNest Property Care directly on +44 808 135 1594 or submit an online service enquiry through our contact page.',
  },
  {
    id: 'faq-4',
    question: 'Can I ask about a specific property-care requirement?',
    answer:
      'Yes, absolutely. We encourage visitors to contact FreshNest Property Care directly to explain what attention your property requires so we can review your specific enquiry.',
  },
  {
    id: 'faq-5',
    question: 'How can I find out about pricing?',
    answer:
      'Please contact FreshNest Property Care directly on +44 808 135 1594 to discuss your property requirements and receive current pricing tailored to your scope.',
  },
  {
    id: 'faq-6',
    question: 'Do you provide emergency services?',
    answer:
      'Please contact FreshNest Property Care directly to ask about availability for your requirement.',
  },
  {
    id: 'faq-7',
    question: 'What areas do you cover?',
    answer:
      'FreshNest Property Care is based in London N1 7GU. Please contact FreshNest Property Care directly on +44 808 135 1594 to confirm whether your property is within our service area.',
  },
];
