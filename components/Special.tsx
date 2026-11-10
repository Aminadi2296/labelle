import { BOOKING_URL } from "@/lib/data";

export function Special() {
  return (
    <section id="specials" className="mx-6 grid items-center gap-10 rounded-3xl bg-blush p-8 md:mx-12 md:grid-cols-2 md:p-14">
      <div>
        <p className="text-sm font-medium text-rose">Pretty Girl Glow-Up</p>
        <h2 className="mb-4 mt-2 font-serif text-4xl font-medium text-plum md:text-5xl">Full face glow-up, no surgery</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>60 units Botox</li>
          <li>2 Versa fillers (lips, cheeks or chin)</li>
          <li>RF Microneedling + PDRN Salmon DNA facial</li>
        </ul>
      </div>
      <div className="rounded-2xl bg-white p-9 text-center">
        <div className="text-lg text-muted line-through">$2,500</div>
        <div className="font-serif text-7xl leading-none text-rose">$1,500</div>
        <div className="mb-5 mt-2.5 text-sm text-muted">Financing available</div>
        <a href={BOOKING_URL} className="block rounded-full bg-rose py-4 font-semibold text-white">Book this special</a>
      </div>
    </section>
  );
}
