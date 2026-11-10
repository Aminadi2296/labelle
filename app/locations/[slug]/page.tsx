import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BOOKING_URL, SITE_URL, locations } from "@/lib/data";
import { Faq } from "@/components/Faq";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const l = locations.find((x) => x.slug === slug);
  if (!l) return {};
  return {
    title: `Medspa in ${l.city}, ${l.state} | La Belle Medspa`,
    description: `Botox®, fillers, laser and facials in ${l.city}, ${l.state}. ${l.address}. Book a free consultation.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const l = locations.find((x) => x.slug === slug);
  if (!l) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `La Belle Medspa ${l.city}`,
    url: `${SITE_URL}/locations/${l.slug}`,
    telephone: l.phone,
    address: { "@type": "PostalAddress", streetAddress: l.address, addressLocality: l.city, addressRegion: l.state, postalCode: l.zip, addressCountry: "US" },
    geo: { "@type": "GeoCoordinates", latitude: l.lat, longitude: l.lng },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "145" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid gap-10 px-6 py-14 md:px-12 md:py-20 lg:grid-cols-2">
        <div>
          <h1 className="font-serif text-5xl font-medium text-plum md:text-6xl">Medspa in {l.city}, {l.state}</h1>
          <address className="mt-4 text-lg not-italic text-muted">
            <a href={l.mapsUrl}>{l.address}, {l.city}, {l.state} {l.zip}</a>
          </address>
          <a href={`tel:${l.phone.replace(/\D/g, "")}`} className="mt-2 block text-lg font-medium">{l.phone}</a>
          <p className="mt-6 max-w-lg leading-relaxed">Botox®, fillers, laser, facials and more, with a free first consultation. Hablamos español.</p>
          <a href={`${BOOKING_URL}?location=${l.slug}`} className="hover-glow mt-8 inline-block rounded-full bg-rose px-7 py-4 font-semibold text-white">Book at {l.city}</a>
        </div>
        <iframe
          title={`Map of La Belle Medspa ${l.city}`}
          src={l.mapEmbed}
          loading="lazy"
          className="h-80 w-full rounded-2xl border border-line lg:h-full"
        />
      </div>
      <Faq />
    </>
  );
}
