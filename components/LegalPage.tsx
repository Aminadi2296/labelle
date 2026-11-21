import type { ReactNode } from "react";

interface LegalPageProps {
  title: string;
  updated?: string;
  children: ReactNode;
}

/** Shared layout wrapper for legal and policy pages. */
export function LegalPage({ title, updated = "November 2026", children }: LegalPageProps) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-14 md:px-12 md:py-20">
      <p className="text-sm font-medium text-rose">La Belle Medspa · Legal</p>
      <h1 className="mt-2 font-serif text-4xl font-medium text-plum md:text-5xl">{title}</h1>
      <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>
      <div className="mt-8 space-y-6 leading-relaxed text-ink [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-plum [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </article>
  );
}
