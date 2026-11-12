// Contenido de las páginas de detalle. Todo es editable: ajusta textos con el cliente aquí.
export type ServicePage = {
  slug: string;
  name: string;
  summary: string;
  price?: string;
  image: string; // public/services/<slug>.webp
  category: string; // ancla en /services
  treatments: string[];
  duration?: string;
  note?: string; // promoción o aviso destacado
  highlights?: { title: string; text: string }[];
  highlightsTitle?: string;
  faqs?: { q: string; a: string }[];
};

// Orden = el de la lista "Most popular services" de su web actual
export const servicePages: ServicePage[] = [
  {
    slug: "botox",
    name: "Botox®",
    summary: "Smooth fine lines with natural-looking results from a treatment plan customized to your face.",
    price: "$10 per unit",
    image: "/services/botox.webp",
    category: "injectables",
    treatments: ["Botox®", "Xeomin", "Dysport", "Male Botox®"],
  },
  {
    slug: "hydrafacial",
    name: "Hydrafacial",
    summary: "Cleanse, exfoliate and hydrate for an instant glow, with no downtime to plan around.",
    price: "$199",
    image: "/services/hydrafacial.webp",
    category: "facials",
    treatments: ["Hydrafacial", "Medical facial"],
  },
  {
    slug: "plastic-surgery",
    name: "Plastic surgery",
    summary: "Board-certified plastic surgeons, from minimally invasive treatments to full aesthetic surgery, in a safe and caring environment.",
    image: "/services/plastic-surgery.webp",
    category: "plastic-surgery",
    treatments: ["Face lift", "Mini facelift (face & neck)", "Eyes", "Nose", "Ears", "Bichectomy", "Liposuction", "Tummy tuck", "Breast augmentation", "Breast reduction", "Breast lift", "Brachioplasty", "BBL", "Mommy makeover"],
  },
  {
    slug: "rf-microneedling",
    name: "RF Microneedling",
    summary: "Tighter, smoother and glowing skin with RF Microneedling and PDRN Salmon DNA.",
    price: "$399",
    image: "/services/rf-microneedling.webp",
    category: "facials",
    treatments: ["RF Microneedling with PDRN Salmon DNA", "Body microneedling"],
  },
  {
    slug: "lip-fillers",
    name: "Lip fillers",
    summary: "Fuller, more defined lips with premium fillers, designed to suit your features.",
    price: "Fillers from $499",
    image: "/services/lip-fillers.webp",
    category: "fillers",
    treatments: ["Lip filler", "Juvederm", "Restylane", "Versa filler", "Radiesse filler"],
  },
  {
    slug: "sculptra",
    name: "Sculptra®",
    summary: "A premium injectable to restore volume and refine your features, customized to your face.",
    price: "$699",
    image: "/services/sculptra.webp",
    category: "injectables",
    treatments: ["Sculptra®"],
  },
  {
    slug: "ipl-laser",
    name: "IPL Laser",
    summary: "Precise laser technology for skin rejuvenation and hyperpigmentation, always after a consultation.",
    price: "$199",
    image: "/services/ipl-laser.webp",
    category: "laser",
    treatments: ["IPL photofacial", "IPL laser treatments", "Skin rejuvenation", "Hyperpigmentation"],
  },
  {
    // En su web actual este enlace apunta a la página de Endolift
    slug: "laserlift",
    name: "Laserlift",
    summary: "A minimally invasive body treatment, planned after a detailed consultation to fit your goals.",
    image: "/services/laserlift.webp",
    category: "body",
    treatments: ["Endolift"],
  },
  {
    slug: "iv-drip",
    name: "IV Drip",
    summary: "Boost your hydration, energy and wellness with IV drip therapy tailored to your needs.",
    image: "/services/iv-drip.webp",
    category: "facials",
    duration: "50 to 80 minutes in total",
    note: "Free Hydrafacial with every 1000 ml IV drip session on Fridays and Saturdays, by appointment only.",
    treatments: ["Basic hydration", "Hangover relief", "Beauty glow", "Energy boost", "Athletic performance", "Immunity boost"],
    highlightsTitle: "Types of IV drip",
    highlights: [
      { title: "Basic hydration", text: "Replenishes fluids and electrolytes quickly. A pick-me-up for dehydration and low energy." },
      { title: "Hangover relief", text: "Designed to ease symptoms like headache, nausea and fatigue." },
      { title: "Beauty glow", text: "Vitamins and antioxidants that support healthy, glowing skin." },
      { title: "Energy boost", text: "A blend of vitamins and minerals to help you feel energized and focused." },
      { title: "Athletic performance", text: "Vitamins, minerals and amino acids that support recovery and endurance." },
      { title: "Immunity boost", text: "A blend of vitamins and antioxidants to help your body stay healthy." },
    ],
    faqs: [
      { q: "What is IV drip hydration?", a: "A therapy that delivers fluids, vitamins and minerals directly into your bloodstream for fast absorption." },
      { q: "How often should I get IV drip therapy?", a: "It depends on your needs and goals. Some people come weekly, others only occasionally. Our team will help you choose a schedule." },
      { q: "Is IV drip hydration safe?", a: "Yes, when it is given by trained professionals. Our team has experience with IV therapy and looks after your comfort throughout." },
      { q: "How long does a session take?", a: "The drip itself usually takes 30 to 60 minutes. Plan on 50 to 80 minutes in total, including your consultation." },
    ],
  },
  {
    slug: "glace-treatment",
    name: "Glacé Treatment",
    summary: "A facial treatment that starts with a skin analysis, so it fits your skin type and concerns.",
    image: "/services/glace-treatment.webp",
    category: "facials",
    treatments: ["Glacé treatment"],
  },
  {
    slug: "laser-hair-removal",
    name: "Laser hair removal",
    summary: "Long-lasting smoothness with precise laser care, always after a consultation.",
    image: "/services/laser-hair-removal.webp",
    category: "laser",
    treatments: ["Laser hair removal", "Men's laser hair removal"],
  },
];
