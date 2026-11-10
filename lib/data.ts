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
    blurb: 'Tighter, glowing skin. $399.',
    href: '/services#facials',
  },
  {
    name: 'Laser hair removal',
    blurb: 'Long-lasting smoothness.',
    href: '/services#laser',
  },
  {
    name: 'Hydrafacial',
    blurb: 'Instant glow. $199.',
    href: '/services#facials',
  },
];

export const serviceMenu = [
  { name: 'Botox®', price: '$10/unit' },
  { name: 'Radiesse filler', price: '$499' },
  { name: 'Versa filler', price: '$499' },
  { name: 'Carbon laser facial', price: '$199' },
  { name: 'IPL photofacial', price: '$199' },
  { name: 'Hydrafacial', price: '$199' },
  { name: 'RF Microneedling with PDRN Salmon DNA', price: '$399' },
  { name: 'Sculptra®', price: '$699' },
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
      'Hydrafacial',
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

export const membership = {
  name: 'Elite membership',
  price: '$399/mo',
  minimum: '6-month minimum',
  perks: [
    'Hydrafacial or medical facial every month',
    'RF Microneedling with exosomes (use it or save it)',
    '20 Botox® units banked toward your balance',
    '15% off Botox® and fillers',
  ],
};

export const CHERRY_URL = 'https://pay.withcherry.com/labelleoc';
