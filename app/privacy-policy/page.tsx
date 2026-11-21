import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | La Belle Medspa",
  description: "Privacy Policy for La Belle Medspa website, contact inquiries, and appointment bookings.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        La Belle Medspa respects your privacy. This Privacy Policy explains how we collect, use, and protect personal information submitted through our website.
      </p>
      <h2>Information We Collect</h2>
      <ul>
        <li>Contact details you voluntarily provide, such as your name, email address, phone number, preferred location, and message.</li>
        <li>Appointment booking details submitted through our scheduling widget.</li>
        <li>Basic technical information (such as browser type and pages visited) needed to keep the site running reliably.</li>
      </ul>
      <h2>How We Use Your Information</h2>
      <p>
        We use your information solely to respond to inquiries, schedule consultations or treatments, provide customer support, and improve our services. We do not sell your personal information.
      </p>
      <h2>Medical Information Disclaimer</h2>
      <p>
        Please do not include sensitive medical details in general website contact forms. Clinical and medical records are handled separately under our <a href="/notice-of-privacy-practices-hipaa" className="text-rose underline">HIPAA Notice of Privacy Practices</a>.
      </p>
      <h2>Contact Us</h2>
      <p>
        To update or request deletion of your contact information, please reach out through our <a href="/contact" className="text-rose underline">Contact page</a>.
      </p>
    </LegalPage>
  );
}
