import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="px-6 py-16 md:px-12 md:py-20">
      <h2 className="font-serif text-4xl font-medium text-plum md:text-5xl">Popular services</h2>
      <p className="mb-8 mt-2 text-muted">Find your treatment in one click.</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <a key={s.name} href={s.href} className="hover-glow min-h-36 rounded-2xl border border-line bg-white p-7">
            <div className="font-serif text-3xl text-plum">{s.name}</div>
            <div className="mt-2 text-sm text-muted">{s.blurb}</div>
          </a>
        ))}
        <a href="/services" className="min-h-36 rounded-2xl bg-plum p-7 font-serif text-3xl text-white">View all services</a>
      </div>
    </section>
  );
}
