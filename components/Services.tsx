'use client';
import Image from 'next/image';
import { useState } from 'react';

// Imágenes en public/services/ (formato WebP)
const services = [
  {
    name: 'Botox®',
    blurb: 'Smooth fine lines with natural-looking results. $10/unit.',
    href: '/services#injectables',
    image: '/services/botox.webp',
  },
  {
    name: 'Lip fillers',
    blurb: 'Fuller, more defined lips, customized to your face.',
    href: '/services#fillers',
    image: '/services/lip-fillers.webp',
  },
  {
    name: 'RF Microneedling',
    blurb: 'Tighter, glowing skin with PDRN Salmon DNA. $399.',
    href: '/services#facials',
    image: '/services/rf-microneedling.webp',
  },
  {
    name: 'Laser hair removal',
    blurb: 'Long-lasting smoothness, after a free consultation.',
    href: '/services#laser',
    image: '/services/laser-hair-removal.webp',
  },
  {
    name: 'Hydrafacial',
    blurb: 'Cleanse, exfoliate and hydrate for an instant glow. $199.',
    href: '/services#facials',
    image: '/services/hydrafacial.webp',
  },
];

function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`size-5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="px-6 py-16 md:px-12 md:py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-4xl font-medium text-plum md:text-5xl">
            Popular Services
          </h2>
          <p className="mt-2 text-muted">Find your treatment in one click.</p>
        </div>

        <a
          href="/services"
          className="group/cta flex items-center gap-3 font-semibold text-plum"
        >
          <span className="transition-colors duration-300 group-hover/cta:text-rose">
            View all services
          </span>
          <span className="relative grid size-12 place-items-center overflow-hidden rounded-full bg-plum text-white transition-colors duration-300 group-hover/cta:bg-rose">
            {/* La flecha sale por arriba a la derecha y otra entra desde abajo a la izquierda */}
            <Arrow className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-8 group-hover/cta:-translate-y-8 motion-reduce:transition-none" />
            <Arrow className="absolute -translate-x-8 translate-y-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-0 group-hover/cta:translate-y-0 motion-reduce:transition-none" />
          </span>
        </a>
      </div>

      <div className="flex flex-col gap-4 md:h-[460px] md:flex-row md:gap-3">
        {services.map((s, i) => {
          const open = active === i;
          return (
            <a
              key={s.name}
              href={s.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              style={{ flexGrow: open ? 1.8 : 1 }}
              className="group relative min-h-64 overflow-hidden rounded-3xl bg-plum text-white will-change-[flex-grow] md:min-h-0 md:basis-0 md:transition-[flex-grow] md:duration-[800ms] md:ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            >
              <Image
                src={s.image}
                alt=""
                fill
                sizes="(min-width:768px) 45vw, 100vw"
                className={`object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  open ? 'md:scale-[1.02]' : 'md:scale-100'
                }`}
              />

              {/* Difuminado para dar contraste al texto */}
              <div
                className={`absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-700 motion-reduce:transition-none ${
                  open ? 'opacity-100' : 'md:opacity-80'
                }`}
              />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-balance font-serif text-2xl leading-tight md:text-2xl">
                  {s.name}
                </h3>

                {/* Descripción: se despliega y aparece con fundido (en móvil siempre visible) */}
                <div
                  className={`grid transition-[grid-template-rows,opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                    open
                      ? 'grid-rows-[1fr] opacity-100 md:translate-y-0'
                      : 'grid-rows-[1fr] opacity-100 md:grid-rows-[0fr] md:translate-y-2 md:opacity-0'
                  }`}
                >
                  <p className="overflow-hidden text-sm text-white/85">
                    <span className="mt-2 block max-w-sm">{s.blurb}</span>
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
