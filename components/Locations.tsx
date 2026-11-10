import { BOOKING_URL, locations } from "@/lib/data";

export function Locations() {
  return (
    <section id="locations" className="px-6 py-16 md:px-12 md:py-20">
      <h2 className="mb-8 font-serif text-4xl font-medium text-plum md:text-5xl">Book at your nearest location</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {locations.map((l) => (
          <div key={l.slug} className="rounded-2xl border border-line bg-white p-7">
            <div className="font-serif text-3xl">{l.name}</div>
            <div className="mb-5 mt-1.5 text-sm text-muted">{l.address}</div>
            <a href={`/locations/${l.slug}`} className="hover-glow mr-2 inline-block rounded-full border border-line px-5 py-3 font-semibold">Details</a><a href={`${BOOKING_URL}?location=${l.slug}`} className="hover-glow inline-block rounded-full bg-rose px-5 py-3 font-semibold text-white">Book online</a>
            <a href={`tel:${l.phone.replace(/\D/g, "")}`} className="mt-3.5 block text-sm">{l.phone}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
