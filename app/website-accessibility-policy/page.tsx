import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Website Accessibility Policy | La Belle Medspa",
  description: "La Belle Medspa commitment to digital accessibility for all visitors.",
};

export default function AccessibilityPolicyPage() {
  return (
    <LegalPage title="Website Accessibility Policy">
      <p>
        La Belle Medspa is committed to making our website accessible and usable for all people, including individuals with disabilities.
      </p>
      <h2>Our Standards</h2>
      <p>
        We strive to follow recognized accessibility best practices, including clear heading structures, keyboard navigation support, readable color contrast, and descriptive alternative text for images.
      </p>
      <h2>Need Assistance?</h2>
      <p>
        If you experience any difficulty accessing content or booking an appointment on our website, please contact us via our <a href="/contact" className="text-rose underline">Contact page</a> or call your nearest location directly so our team can assist you.
      </p>
    </LegalPage>
  );
}
