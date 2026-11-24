import type { Metadata } from "next";
import { BOOKING_URL, memberships } from "@/lib/data";

export const metadata: Metadata = {
  title: "Medspa Memberships | VIP Beauty & Collagen Club | La Belle Medspa",
  description: "Explore our 6-month VIP Beauty Membership ($2,500) and 12-month Sculptra® Collagen Club Membership ($1,999) at La Belle Medspa.",
};

export default function MembershipsPage() {
  return (
    <div className="px-6 py-14 md:px-12 md:py-20">
      <h1 className="font-serif text-5xl font-medium text-plum md:text-6xl">Medspa memberships</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Consistent, curated treatments deliver better long-term results. Choose the membership plan that fits your goals.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {memberships.map((m) => (
          <section key={m.name} className="flex flex-col justify-between rounded-3xl bg-blush p-8 md:p-10">
            <div>
              <p className="text-sm font-medium text-rose">{m.badge}</p>
              <h2 className="mt-1 font-serif text-3xl text-plum">{m.name}</h2>
              <p className="mt-2 text-sm text-muted">{m.description}</p>

              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-serif text-6xl leading-none text-rose">{m.price}</span>
                {m.regularValue && (
                  <span className="text-lg text-muted line-through">Regular {m.regularValue}</span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted">{m.minimum}</p>

              <ul className="mt-6 list-disc space-y-2 pl-5">
                {m.perks.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl bg-white/80 p-4 text-sm leading-relaxed text-ink">
                <p className="font-semibold text-plum">Payment &amp; financing</p>
                <p className="mt-1 text-muted">{m.paymentNote}</p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-3.5">
                <a
                  href={BOOKING_URL}
                  data-pickspot-open
                  className="hover-glow inline-block rounded-full bg-rose px-7 py-4 font-semibold text-white"
                >
                  Ask about membership
                </a>
                <a
                  href="/financing"
                  className="hover-glow inline-block rounded-full border-[1.5px] border-plum px-7 py-4 font-semibold text-plum"
                >
                  Financing options
                </a>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                All procedures require clinical evaluation and consent. Treatment timing and results vary. Financing terms are determined by Cherry and are not guaranteed.
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
