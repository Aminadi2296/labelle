import { BOOKING_URL, nav } from "@/lib/data";

export function Header() {
  return (
    <header>
      <div className="flex flex-wrap justify-between gap-x-7 gap-y-1 bg-plum px-6 py-2.5 text-[13px] text-blush md:px-12">
        <span>★ 4.9 Google · 145+ reviews &nbsp;|&nbsp; ★ 5.0 Booksy &nbsp;|&nbsp; 24 years in business</span>
        <span>Hablamos español</span>
      </div>
      <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-5 md:px-12">
        <a href="/" className="font-serif text-3xl font-medium text-plum">
          La Belle <span className="text-[13px] uppercase tracking-[0.3em]">Medspa</span>
        </a>
        <nav aria-label="Main" className="hidden gap-7 text-[15px] font-medium lg:flex">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-rose">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={BOOKING_URL} className="hover-glow rounded-full bg-rose px-5 py-3 text-[15px] font-semibold text-white hover:bg-plum-2 md:px-6">
            Book free consultation
          </a>
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-line px-4 py-3 text-sm font-medium">Menu</summary>
            <nav aria-label="Mobile" className="absolute right-0 z-10 mt-2 flex w-48 flex-col gap-1 rounded-2xl border border-line bg-white p-3 shadow-lg">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="rounded-lg px-3 py-2 hover:bg-blush">{n.label}</a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
