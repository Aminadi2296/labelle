import type { Metadata } from "next";
import { BOOKING_URL, serviceCategories, serviceMenu } from "@/lib/data";
import { servicePages } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: "Medspa Services | La Belle Medspa",
  description: "Botox®, fillers, facials, laser, body treatments and plastic surgery at La Belle Medspa in Irvine, Tustin and Henderson.",
};

export default function ServicesPage() {
  return (
    <div className="px-6 py-14 md:px-12 md:py-20">
      <h1 className="font-serif text-5xl font-medium text-plum md:text-6xl">Medspa services</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">From injectables to plastic surgery, every treatment starts with a free consultation.</p>

      <section aria-labelledby="popular" className="mt-12">
        <h2 id="popular" className="font-serif text-3xl text-plum">Most popular services</h2>
        <ul className="mt-6 grid gap-x-12 md:grid-cols-2">
          {servicePages.map((sp) => (
            <li key={sp.slug}>
              <a href={`/services/${sp.slug}`} className="group flex items-center justify-between gap-4 border-b border-dashed border-rose/50 py-5 font-serif text-3xl text-plum hover:text-rose md:text-4xl">
                {sp.name}
                <span aria-hidden="true" className="text-xl text-rose transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="menu" className="mt-12 rounded-3xl bg-blush p-8 md:p-12">
        <h2 id="menu" className="font-serif text-3xl text-plum">Service menu</h2>
        <dl className="mt-6 grid gap-x-12 gap-y-3 md:grid-cols-2">
          {serviceMenu.map((s) => (
            <div key={s.name} className="flex items-baseline justify-between gap-4 border-b border-white/70 py-2">
              <dt>{s.name}</dt>
              <dd className="font-semibold text-rose">{s.price}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {serviceCategories.map((c) => (
          <section key={c.id} id={c.id} className="scroll-mt-8 rounded-2xl border border-line bg-white p-8">
            <h2 className="font-serif text-3xl text-plum">{c.title}</h2>
            <p className="mt-2 text-muted">{c.intro}</p>
            <ul className="mt-4 grid gap-x-6 gap-y-1 text-[15px] sm:grid-cols-2">
              {c.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <a href={BOOKING_URL} className="mt-6 inline-block rounded-full bg-rose px-6 py-3 font-semibold text-white">Book free consultation</a>
          </section>
        ))}
      </div>
    </div>
  );
}
