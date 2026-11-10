"use client";
import { useState } from "react";
import { locations } from "@/lib/data";

const field = "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-base";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return <p role="status" className="text-lg">Thank you! We received your message and will get back to you soon.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <label>Full name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label>Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label>Phone
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>
      <label>Location
        <select name="location" required className={field} defaultValue="">
          <option value="" disabled>Choose a location</option>
          {locations.map((l) => <option key={l.slug} value={l.slug}>{l.name}</option>)}
        </select>
      </label>
      <label>Message
        <textarea name="message" required rows={4} className={field} />
      </label>
      {/* Honeypot anti-spam: los humanos no lo ven */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <label className="flex items-start gap-3 text-sm text-muted">
        <input name="consent" type="checkbox" required className="mt-1 size-4" />
        <span>I agree to be contacted by La Belle Medspa about my request. Please do not include medical details in this form.</span>
      </label>
      <button disabled={status === "sending"} className="rounded-full bg-rose px-7 py-4 font-semibold text-white disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "error" && <p role="alert" className="text-sm text-rose">Something went wrong. Please try again or call us.</p>}
    </form>
  );
}
