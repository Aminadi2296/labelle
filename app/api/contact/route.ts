import { NextResponse } from "next/server";
import { locations } from "@/lib/data";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || body.website) return NextResponse.json({ ok: true }); // honeypot: ignorar bots en silencio

  const { name, email, phone, location, message, consent } = body as Record<string, string>;
  const valid =
    name?.trim() && message?.trim() && consent &&
    /^\S+@\S+\.\S+$/.test(email ?? "") &&
    locations.some((l) => l.slug === location);
  if (!valid) return NextResponse.json({ ok: false }, { status: 400 });

  // TODO: enviar el aviso al equipo y guardar el mensaje (Resend + base de datos)
  console.log("New contact message", { name, email, phone, location });
  return NextResponse.json({ ok: true });
}
