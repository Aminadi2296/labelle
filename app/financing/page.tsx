import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "0% Financing | La Belle Medspa",
  description: "Apply in 3 minutes for 0% financing on medspa treatments. No hard credit check, no hidden fees.",
};

export default function FinancingPage() {
  return (
    <div className="px-6 py-14 md:px-12 md:py-20">
      <h1 className="font-serif text-5xl font-medium text-plum md:text-6xl">0% financing available</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">Applying takes about 3 minutes to see if you qualify.</p>
      <ul className="mt-8 list-disc space-y-2 pl-5 text-lg">
        <li>No hard credit check</li>
        <li>No hidden or extra fees</li>
        <li>You must be 18 or older</li>
        <li>You need a bank-issued credit or debit card</li>
      </ul>
      {/* TODO: enlace de solicitud de Cherry (pedir al cliente) */}
    </div>
  );
}
