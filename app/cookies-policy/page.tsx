import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookies Policy | La Belle Medspa",
  description: "Cookies Policy explaining how La Belle Medspa uses essential and functional cookies.",
};

export default function CookiesPolicyPage() {
  return (
    <LegalPage title="Cookies Policy">
      <p>
        This Cookies Policy explains what cookies are and how La Belle Medspa uses them on our website.
      </p>
      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember preferences, and support embedded tools such as appointment booking.
      </p>
      <h2>Types of Cookies We Use</h2>
      <ul>
        <li><strong>Essential &amp; Functional Cookies:</strong> Required for core site navigation, form security, and online booking functionality.</li>
        <li><strong>Third-Party Embeds:</strong> Embedded features such as Google Maps or our booking widget may set cookies subject to their own privacy policies.</li>
      </ul>
      <h2>Managing Cookies</h2>
      <p>
        You can control or delete cookies at any time through your browser settings. Disabling certain cookies may affect embedded booking or map features.
      </p>
    </LegalPage>
  );
}
