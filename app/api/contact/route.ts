import { NextResponse } from "next/server";
import { locations } from "@/lib/data";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || body.website) return NextResponse.json({ ok: true }); // honeypot: ignorar bots en silencio

  const { name, email, phone, location, message, consent } = body as Record<string, string>;
  const matchedLocation = locations.find((l) => l.slug === location);
  const valid =
    name?.trim() &&
    message?.trim() &&
    consent &&
    /^\S+@\S+\.\S+$/.test(email ?? "") &&
    Boolean(matchedLocation);

  if (!valid || !matchedLocation) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "La Belle Medspa <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variable");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanPhone = phone?.trim() || "Not provided";
  const cleanMessage = message.trim();

  const subject = `New contact message (${matchedLocation.name}) - ${cleanName}`;
  const text = [
    `Name: ${cleanName}`,
    `Email: ${cleanEmail}`,
    `Phone: ${cleanPhone}`,
    `Location: ${matchedLocation.name}`,
    "",
    "Message:",
    cleanMessage,
  ].join("\n");

  const html = `
    <h2>New Contact Form Message</h2>
    <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(cleanPhone)}</p>
    <p><strong>Location:</strong> ${escapeHtml(matchedLocation.name)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(cleanMessage).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: cleanEmail,
        subject,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => "");
      console.error("Resend API error:", res.status, errorText);
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
