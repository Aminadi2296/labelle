import { faqs } from "@/lib/data";

export function Faq() {
  return (
    <section id="faq" className="px-6 py-16 md:px-12 md:py-20">
      <h2 className="mb-8 font-serif text-4xl font-medium text-plum md:text-5xl">Questions, answered</h2>
      <div className="max-w-3xl divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="cursor-pointer list-none text-lg font-medium">{f.q}</summary>
            <p className="mt-2 leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
