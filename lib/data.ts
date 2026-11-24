export const BOOKING_URL = '#book'; // se conectará a la API de reservas
export const SITE_URL = 'https://labelleoc.com';

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Memberships', href: '/memberships' },
  { label: 'Specials', href: '/#specials' },
  { label: 'Financing', href: '/financing' },
  { label: 'Locations', href: '/#locations' },
  { label: 'Contact', href: '/contact' },
];

export const locations = [
  {
    slug: 'irvine',
    name: 'Irvine, CA',
    city: 'Irvine',
    state: 'CA',
    address: '6282 Irvine Blvd, Ste 23',
    zip: '92620',
    phone: '(949) 533-1346',
    lat: 33.69711,
    lng: -117.74574,
    mapsUrl: 'https://maps.app.goo.gl/fhqDEjCsiXfKi29F7',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.4574491709636!2d-117.74573608860734!3d33.69711013628728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd2a01ff4a2f%3A0x1d0923b887edb78b!2s6282%20Irvine%20Blvd%2C%20Irvine%2C%20CA%2092620!5e0!3m2!1sen!2sus!4v1771615913397!5m2!1sen!2sus',
  },
  {
    slug: 'tustin',
    name: 'Tustin, CA',
    city: 'Tustin',
    state: 'CA',
    address: '17400 Irvine Blvd, Ste M',
    zip: '92780',
    phone: '(714) 486-1107',
    lat: 33.74797,
    lng: -117.82846,
    mapsUrl: 'https://maps.app.goo.gl/LcGZt94zyCoiPu797',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.4912601141136!2d-117.82846149999999!3d33.7479691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd9f4a13fa2bb%3A0x8ea61ae1f9bffa5d!2sLa%20Belle%20Medical%20Spa%20Tustin%20CA!5e0!3m2!1sen!2sus!4v1771615995659!5m2!1sen!2sus',
  },
  {
    slug: 'henderson',
    name: 'Henderson, NV',
    city: 'Henderson',
    state: 'NV',
    address: '20 Via Bel Canto, Ste 130',
    zip: '89011',
    phone: '(725) 277-0704',
    lat: 36.1025,
    lng: -114.9301,
    mapsUrl: 'https://maps.app.goo.gl/HXCNJpUzhLi5G44r8',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.63107837381!2d-114.93007499999999!3d36.102480199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d7dd0ad6589b%3A0x2a73d035418d1979!2sBotox%20La%20Belle%20Peau!5e0!3m2!1sen!2sus!4v1771616091914!5m2!1sen!2sus',
  },
];
export type Location = (typeof locations)[number];

export const services = [
  {
    name: 'Botox®',
    blurb: 'Smooth fine lines. $10/unit.',
    href: '/services#injectables',
  },
  {
    name: 'Lip fillers',
    blurb: 'Fuller, more defined lips.',
    href: '/services#fillers',
  },
  {
    name: 'RF Microneedling',
    blurb: 'Tighter, glowing skin. $299.',
    href: '/services#facials',
  },
  {
    name: 'Laser hair removal',
    blurb: 'Long-lasting smoothness. From $199.',
    href: '/services#laser',
  },
  {
    name: 'Geneo facial',
    blurb: 'Instant glow. $199.',
    href: '/services#facials',
  },
];

export const serviceMenu = [
  { name: 'Botox®', price: '$10/unit' },
  { name: 'Botox® Special (40 units)', price: '$299' },
  { name: 'Botox® (50 units)', price: '$350' },
  { name: 'Botox® (60 units)', price: '$399' },
  { name: 'Dysport®', price: '$5/unit' },
  { name: 'Dermal Filler (1 cc)', price: '$499' },
  { name: 'Dermal Filler (0.5 cc)', price: '$299' },
  { name: 'Sculptra® 1 vial (8 cc)', price: '$699' },
  { name: 'Sculptra® 2 vials (16 cc)', price: '$999' },
  { name: 'Fractional RF Microneedling', price: '$299' },
  { name: 'Fractional RF Microneedling + Exosomes', price: '$399' },
  { name: 'Fractional RF Microneedling + Vamp Booster', price: '$499' },
  { name: 'Fractional RF Microneedling + PRP Plasma', price: '$499' },
  { name: 'Geneo® facial', price: '$199' },
  { name: 'Thermage', price: '$299' },
  { name: 'Carbon laser (CA only)', price: '$199' },
  { name: 'IPL laser (CA only)', price: '$199' },
  { name: 'CO2 laser (CA only)', price: '$299' },
  { name: 'Endolaser (CA only)', price: '$2,999' },
  { name: 'Laser hair removal', price: 'From $199' },
];

export const menuPromos = [
  'Get a free facial when you spend $399.',
  'Get Fractional RF Microneedling FREE when you purchase 2 vials of Sculptra® ($999).',
  'Laser treatments (Carbon, IPL, CO2, Endolaser) available at California locations only.',
];

export const serviceCategories = [
  {
    id: 'fillers',
    title: 'Fillers',
    intro:
      'Restore volume and refine your features with premium fillers such as Juvederm and Restylane.',
    items: [
      'Lip filler',
      'Chin & jawline filler',
      'Cheek filler',
      'Under-eye filler',
      'Facial sculpting',
      'Fine line reduction',
    ],
  },
  {
    id: 'injectables',
    title: 'Injectables',
    intro: 'Natural, subtle results from a custom treatment plan.',
    items: [
      'Botox®',
      'Juvederm',
      'Xeomin',
      'Dysport',
      'Restylane',
      'PRP plasma',
      'Sculptra®',
    ],
  },
  {
    id: 'facials',
    title: 'Facial treatments',
    intro:
      'Every facial starts with a skin analysis, so the treatment fits your skin type and concerns.',
    items: [
      'Glacé treatment',
      'Morpheus8',
      'Thread non-surgical lift',
      'PRP plasma',
      'Radio frequency + oxygen therapy',
      'Infusion Dr. Murad with vitamin C',
      'Geneo facial',
      'IPL laser treatments',
      'RF Microneedling',
      'Microdermabrasion',
      'Perfect Derma Peel',
      'Thermage',
      'Acne treatments',
    ],
  },
  {
    id: 'plastic-surgery',
    title: 'Plastic surgery',
    intro:
      'Board-certified plastic surgeons, from minimally invasive treatments to full aesthetic surgery.',
    items: [
      'Face lift',
      'Mini facelift (face & neck)',
      'Eyes',
      'Nose',
      'Ears',
      'Bichectomy',
      'Liposuction',
      'Tummy tuck',
      'Breast augmentation',
      'Breast reduction',
      'Breast lift',
      'Brachioplasty',
      'BBL',
      'Mommy makeover',
    ],
  },
  {
    id: 'laser',
    title: 'Laser treatments',
    intro:
      'Precise, minimally invasive laser care, always after a consultation.',
    items: [
      'Laser hair removal',
      'Carbon peel laser',
      'Anti-aging laser facial',
      'Skin rejuvenation',
      'Hyperpigmentation',
      'IPL laser treatments',
    ],
  },
  {
    id: 'body',
    title: 'Body treatments',
    intro: "Body sculpting alternatives that don't require surgery.",
    items: [
      'Laser hair removal',
      'EMS body sculpting',
      'Body microneedling',
      'Cryotherapy',
      'Endolift',
    ],
  },
  {
    id: 'men',
    title: "Men's treatments",
    intro: 'Skin and body care tailored to men.',
    items: [
      'Male Botox®',
      'Male facelift',
      'Male anti-aging',
      'Male facial',
      'Laser hair removal',
    ],
  },
];

export const trust = [
  { value: '4.9 ★', label: '145+ Google reviews' },
  { value: '24 yrs', label: 'in business' },
  { value: '0%', label: 'financing, no hard credit check' },
  { value: 'Free', label: 'first consultation' },
];

export const faqs = [
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. We offer 0% financing through Cherry. Applying takes about 3 minutes, with no hard credit check and no hidden fees.',
  },
  {
    q: 'What medspa services do you offer?',
    a: 'Injectables (Botox®, Juvederm, Restylane and more), fillers, facials, laser hair removal, skin rejuvenation, body treatments and plastic surgery.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'Book online by choosing your location, or call the office closest to you. New patients get a free consultation.',
  },
  {
    q: 'Do you accept new patients?',
    a: 'Yes. We welcome new patients with a complimentary consultation, so we can understand your goals and recommend the right treatment.',
  },
  {
    q: 'Do you have Botox specials?',
    a: 'We run offers on Botox® and other treatments often. See the current specials on our home page.',
  },
];

export const memberships = [
  {
    name: 'VIP Beauty Membership',
    badge: '6-Month Package',
    price: '$2,500',
    regularValue: null as string | null,
    minimum: '6-month term · No automatic renewal',
    description: 'Lift · Tighten · Glow. A 6-month curated treatment plan for full-face rejuvenation.',
    perks: [
      '100 units Botox® total',
      '3 dermal filler syringes (1 mL each)',
      '6 cc Sculptra®',
      '3 Fractional RF Microneedling sessions',
      '3 Geneo® facials',
    ],
    paymentNote:
      'Pay in full ($2,500 upfront) or apply for Cherry 6-month, 0% APR financing (~$416.67/mo with no down payment, subject to approval).',
  },
  {
    name: 'Sculptra® Membership — Collagen Club',
    badge: '12-Month Membership',
    price: '$1,999',
    regularValue: '$3,500',
    minimum: '12-month term · Boost Collagen · Lift & Firm · Improve Skin Quality',
    description: 'Build collagen naturally and restore lost volume for a lifted, firmer and more youthful look.',
    perks: [
      'Sculptra® 2 cc per treatment',
      '6 Fractional RF Microneedling sessions with Exosomes',
    ],
    paymentNote: 'Ask our team about payment options and Cherry financing availability.',
  },
];

export const CHERRY_URL = 'https://pay.withcherry.com/labelleoc';
