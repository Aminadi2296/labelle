import Image from 'next/image';
import { BOOKING_URL, locations } from '@/lib/data';

export function Hero() {
  return (
    <section className="grid bg-plum text-white lg:grid-cols-2">
      <div className="flex flex-col justify-center gap-6 px-6 py-16 md:px-14 md:py-20">
        <p className="text-sm text-[#f0b6d3]">
          Limited-time offer · Includes free lips
        </p>
        <h1 className="font-serif text-6xl font-medium leading-[1.02] md:text-7xl">
          Botox® 50 units
          <br />
          for $350
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-[#ebd3e0]">
          Natural-looking Botox, fillers and laser treatments in Irvine, Tustin
          and Henderson. Start with a free consultation.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a
            href={BOOKING_URL}
            className="hover-glow rounded-full bg-white px-7 py-4 font-semibold text-plum"
          >
            Book free consultation
          </a>
          <a
            href="#specials"
            className="hover-glow rounded-full border-[1.5px] border-[#f0b6d3] px-7 py-4"
          >
            View all specials
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-2.5 text-sm text-[#ebd3e0]">
          <span>Choose your location:</span>
          {locations.map((l) => (
            <a
              key={l.slug}
              href={`${BOOKING_URL}?location=${l.slug}`}
              className="rounded-full bg-plum-2 px-4 py-2.5"
            >
              {l.name.split(',')[0]}
            </a>
          ))}
        </div>
      </div>
      <div className="relative min-h-[360px] lg:min-h-[540px]">
        <Image
          src="/hero.webp"
          alt="Three smiling clients with glowing skin"
          fill
          priority
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-cover object-[center_65%]"
        />
      </div>
    </section>
  );
}
