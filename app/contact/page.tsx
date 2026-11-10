import type { Metadata } from "next";
import { locations } from "@/lib/data";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | La Belle Medspa",
  description: "Contact La Belle Medspa in Irvine, Tustin or Henderson, NV. Call, get directions or send us a message.",
};

export default function ContactPage() {
  return (
    <div className="px-6 py-14 md:px-12 md:py-20">
      <h1 className="font-serif text-5xl font-medium text-plum md:text-6xl">Contact us</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">Questions about a treatment? Send us a message or call the location nearest you. Hablamos español.</p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-5">
          {locations.map((l) => (
            <div key={l.slug} className="rounded-2xl border border-line bg-white p-6">
              <a href={`/locations/${l.slug}`} className="font-serif text-2xl text-plum">{l.name}</a>
              <p className="mt-1 text-muted">{l.address}, {l.zip}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                <a href={`tel:${l.phone.replace(/\D/g, "")}`} className="rounded-full bg-rose px-5 py-2.5 text-white">Call {l.phone}</a>
                <a href={l.mapsUrl} className="rounded-full border border-line px-5 py-2.5">Get directions</a>
              </div>
            </div>
          ))}
        </div>

        <section aria-labelledby="msg" className="rounded-3xl bg-blush p-8 md:p-10">
          <h2 id="msg" className="mb-6 font-serif text-3xl text-plum">Send us a message</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
