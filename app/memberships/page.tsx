import type { Metadata } from "next";
import { BOOKING_URL, membership as m } from "@/lib/data";

export const metadata: Metadata = {
  title: "Medspa Membership | Monthly Facials & Botox | La Belle Medspa",
  description: "Monthly facials, Botox® units banked each month, RF Microneedling with exosomes and savings on treatments.",
};

export default function MembershipsPage() {
  return (
    <div className="px-6 py-14 md:px-12 md:py-20">
      <h1 className="font-serif text-5xl font-medium text-plum md:text-6xl">Medspa membership</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">Monthly skincare with built-in savings. Consistent treatment gives better long-term results than waiting until something bothers you.</p>
      <section className="mt-12 max-w-xl rounded-3xl bg-blush p-8 md:p-12">
        <h2 className="font-serif text-3xl text-plum">{m.name}</h2>
        <div className="mt-2 font-serif text-6xl text-rose">{m.price}</div>
        <p className="mt-1 text-sm text-muted">{m.minimum}</p>
        <ul className="mt-6 list-disc space-y-2 pl-5">{m.perks.map((p) => <li key={p}>{p}</li>)}</ul>
        <a href={BOOKING_URL} className="hover-glow mt-8 inline-block rounded-full bg-rose px-7 py-4 font-semibold text-white">Ask about membership</a>
      </section>
    </div>
  );
}
