import Image from "next/image";
import { locations, SITE_URL } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-plum px-6 py-10 text-sm text-[#ebd3e0] md:px-12">
      <a href="/" aria-label="La Belle Medspa home" className="mb-8 inline-block">
        <Image src="/logo.svg" alt="La Belle Medspa" width={150} height={80} />
      </a>
      <div className="grid gap-8 md:grid-cols-3">
        {locations.map((l) => (
          <div key={l.slug}>
            <a href={`/locations/${l.slug}`} className="font-serif text-2xl text-white">{l.name}</a>
            <p className="mt-1">{l.address}, {l.zip}</p>
            <a href={`tel:${l.phone.replace(/\D/g, "")}`}>{l.phone}</a>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-plum-2 pt-6 text-[13px]">
        <span>© {new Date().getFullYear()} La Belle Medspa. Results may vary from person to person.</span>
        <span className="flex flex-wrap gap-4">
          <a href={`${SITE_URL}/notice-of-privacy-practices-hipaa`}>HIPAA notice</a>
          <a href={`${SITE_URL}/privacy-policy`}>Privacy</a>
          <a href={`${SITE_URL}/cookies-policy`}>Cookies</a>
          <a href={`${SITE_URL}/website-accessibility-policy`}>Accessibility</a>
        </span>
      </div>
    </footer>
  );
}
