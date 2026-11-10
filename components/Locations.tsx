import Image from 'next/image';
import { BOOKING_URL, locations } from '@/lib/data';

const chip =
  'rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md';

export function Locations() {
  return (
    <section id="locations" className="px-6 py-16 md:px-12 md:py-20">
      <h2 className="mb-8 font-serif text-4xl font-medium text-plum md:text-5xl">
        Book at your nearest location
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {locations.map((l) => (
          <article
            key={l.slug}
            className="group relative aspect-[3/4] overflow-hidden rounded-[28px] bg-plum text-white"
          >
            {/* Imagen: public/locations/<slug>.webp */}
            <Image
              src={`/locations/${l.slug}.webp`}
              alt={`La Belle Medspa ${l.city}`}
              fill
              sizes="(min-width:768px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

            {/* Toda la tarjeta lleva a la página de la sede */}
            <a
              href={`/locations/${l.slug}`}
              aria-label={`${l.name} details`}
              className="absolute inset-0"
            />

            <div className="pointer-events-none absolute inset-x-5 top-5 flex items-start justify-between">
              <div className="flex flex-wrap gap-2">
                <span className={chip}>Free consultation</span>
                <span className={chip}>Hablamos español</span>
              </div>
              <span className={chip}>★ 4.9</span>
            </div>

            <div className="pointer-events-none absolute inset-x-5 bottom-5">
              <h3 className="font-serif text-3xl">{l.name}</h3>
              <p className="mb-4 mt-1 text-sm text-white/80">{l.address}</p>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`tel:${l.phone.replace(/\D/g, '')}`}
                  className="pointer-events-auto relative rounded-full bg-white/90 px-4 py-2.5 text-sm font-semibold text-ink"
                >
                  {l.phone}
                </a>
                <a
                  href={`${BOOKING_URL}?location=${l.slug}`}
                  className="pointer-events-auto relative flex items-center gap-2 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-semibold text-ink"
                >
                  Book now
                  <span
                    className="grid size-8 place-items-center rounded-full bg-ink text-white"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
