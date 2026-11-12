import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BOOKING_URL, locations } from "@/lib/data";
import { servicePages } from "@/lib/service-pages";
import { Faq } from "@/components/Faq";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = servicePages.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name} in Irvine, Tustin & Henderson | La Belle Medspa`,
    description: `${s.summary} Book a free consultation at La Belle Medspa.`,
  };
}

const steps = [
  { title: "Free consultation", text: "We listen to your goals and analyze your skin." },
  { title: "Custom plan", text: "We recommend the treatment that fits you, with clear pricing." },
  { title: "Your treatment", text: "Our team takes care of you, from start to finish." },
];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = servicePages.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = servicePages.filter((x) => x.slug !== s.slug);

  return (
    <>
      <section className="grid bg-plum text-white lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-5 px-6 py-14 md:px-14 md:py-20">
          <a href="/services" className="text-sm text-[#f0b6d3] underline">All services</a>
          <h1 className="font-serif text-5xl font-medium leading-tight md:text-7xl">{s.name}</h1>
          <p className="max-w-md text-lg leading-relaxed text-[#ebd3e0]">{s.summary}</p>
          {s.price && <p className="font-serif text-3xl text-[#f0b6d3]">{s.price}</p>}
          {s.duration && <p className="text-sm text-[#ebd3e0]">Appointment time: {s.duration}</p>}
          {s.note && <p className="max-w-md rounded-2xl bg-plum-2 px-5 py-3 text-sm">{s.note}</p>}
          <div className="flex flex-wrap gap-3.5">
            <a href={BOOKING_URL} className="rounded-full bg-white px-7 py-4 font-semibold text-plum">Book free consultation</a>
            <a href="/financing" className="rounded-full border-[1.5px] border-[#f0b6d3] px-7 py-4">Financing options</a>
          </div>
        </div>
        <div className="relative min-h-[320px] lg:min-h-[480px]">
          <Image src={s.image} alt={s.name} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-20">
        <h2 className="font-serif text-4xl font-medium text-plum md:text-5xl">What we offer</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {s.treatments.map((t) => (
            <li key={t} className="rounded-2xl border border-line bg-white px-6 py-5 font-medium">{t}</li>
          ))}
        </ul>
      </section>

      {s.highlights && (
        <section className="px-6 pb-16 md:px-12 md:pb-20">
          <h2 className="font-serif text-4xl font-medium text-plum md:text-5xl">{s.highlightsTitle ?? "Options"}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-serif text-2xl text-plum">{h.title}</h3>
                <p className="mt-2 text-muted">{h.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-6 rounded-3xl bg-blush p-8 md:mx-12 md:p-14">
        <h2 className="font-serif text-4xl font-medium text-plum md:text-5xl">How it works</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((st, i) => (
            <li key={st.title}>
              <span className="font-serif text-5xl text-rose">{i + 1}</span>
              <h3 className="mt-1 text-lg font-semibold">{st.title}</h3>
              <p className="mt-1 text-muted">{st.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {s.faqs ? (
        <section className="px-6 py-16 md:px-12 md:py-20">
          <h2 className="mb-8 font-serif text-4xl font-medium text-plum md:text-5xl">Questions, answered</h2>
          <div className="max-w-3xl divide-y divide-line border-y border-line">
            {s.faqs.map((f) => (
              <details key={f.q} className="py-4">
                <summary className="cursor-pointer list-none text-lg font-medium">{f.q}</summary>
                <p className="mt-2 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      ) : (
        <Faq />
      )}

      <section className="px-6 pb-16 md:px-12 md:pb-20">
        <h2 className="mb-6 font-serif text-3xl text-plum">Book at your nearest location</h2>
        <div className="flex flex-wrap gap-3">
          {locations.map((l) => (
            <a key={l.slug} href={`${BOOKING_URL}?location=${l.slug}&service=${s.slug}`} className="rounded-full bg-rose px-6 py-3 font-semibold text-white">{l.name}</a>
          ))}
        </div>
        <h2 className="mb-4 mt-12 font-serif text-3xl text-plum">Other services</h2>
        <div className="flex flex-wrap gap-3">
          {others.map((o) => (
            <a key={o.slug} href={`/services/${o.slug}`} className="rounded-full border border-line bg-white px-5 py-3">{o.name}</a>
          ))}
        </div>
      </section>
    </>
  );
}
