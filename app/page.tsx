import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Special } from "@/components/Special";
import { Locations } from "@/components/Locations";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Special />
      <Locations />
      <Faq />
    </>
  );
}
