import { trust } from "@/lib/data";

export function TrustBar() {
  return (
    <section className="grid grid-cols-2 gap-6 border-b border-line px-6 py-9 text-center md:grid-cols-4 md:px-12">
      {trust.map((t) => (
        <div key={t.label}>
          <div className="font-serif text-4xl text-rose">{t.value}</div>
          <div className="text-sm">{t.label}</div>
        </div>
      ))}
    </section>
  );
}
