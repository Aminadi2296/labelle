import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-cormorant" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "La Belle Medspa | Botox, Fillers & Laser in Irvine, Tustin & Henderson",
  description: "Medical spa in Irvine, Tustin and Henderson, NV. Botox, fillers, RF microneedling, laser and plastic surgery. Book a free consultation.",
  openGraph: { title: "La Belle Medspa", description: "Book a free consultation online.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
