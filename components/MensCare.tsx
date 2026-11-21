import Image from "next/image";
import { BOOKING_URL } from "@/lib/data";

const mensTreatments = [
  'Botox® ("Brotox")',
  "Jawline & chin contouring",
  "Hydrafacial & deep pore care",
  "Laser hair removal",
  "RF Microneedling & PRP",
  "Acne & skin rejuvenation",
];

/** Editorial section highlighting aesthetic and skincare treatments for men. */
export function MensCare() {
  return (
    <section
      id="mens-care"
      className="relative mx-6 mt-12 overflow-hidden rounded-3xl bg-plum text-white md:mx-12 md:mt-16"
    >
      <div className="relative flex flex-col-reverse lg:block">
        <div className="relative h-72 w-full sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[58%]">
          <Image
            src="/mens-care.webp"
            alt="Man receiving a facial skincare treatment"
            fill
            sizes="(min-width:1024px) 58vw, 100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-plum via-plum/45 to-transparent lg:bg-gradient-to-r lg:from-plum lg:via-plum/75 lg:to-transparent"
          />
        </div>

        <div className="relative z-10 max-w-xl px-8 py-10 md:px-14 md:py-16 lg:w-[58%]">
          <p className="text-sm font-medium text-[#f0b6d3]">Men&apos;s Care</p>
          <h2 className="mt-2 font-serif text-4xl font-medium leading-tight md:text-5xl">
            Skincare &amp; aesthetics tailored for men
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-[#ebd3e0]">
            Subtle, natural-looking results designed for male skin and facial structure—minimal downtime, complete discretion.
          </p>
          <ul className="mt-6 grid gap-x-6 gap-y-2 text-sm text-[#f6e3ec] sm:grid-cols-2">
            {mensTreatments.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-[#f0b6d3]" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href={BOOKING_URL}
              data-pickspot-open
              className="hover-glow rounded-full bg-white px-7 py-4 font-semibold text-plum"
            >
              Book free consultation
            </a>
            <a
              href="/services"
              className="hover-glow rounded-full border-[1.5px] border-[#f0b6d3] px-7 py-4"
            >
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
