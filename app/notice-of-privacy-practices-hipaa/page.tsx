import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Notice of Privacy Practices (HIPAA) | La Belle Medspa",
  description: "HIPAA Notice of Privacy Practices for La Belle Medspa in Irvine, Tustin, and Henderson.",
};

export default function HipaaNoticePage() {
  return (
    <LegalPage title="Notice of Privacy Practices (HIPAA)">
      <p>
        This notice describes how medical information about you may be used and disclosed and how you can get access to this information at La Belle Medspa. Please review it carefully.
      </p>
      <h2>Our Commitment to Your Privacy</h2>
      <p>
        We are required by applicable federal and state law, including the Health Insurance Portability and Accountability Act (HIPAA), to maintain the privacy of your protected health information (PHI) and to provide you with this notice of our legal duties and privacy practices.
      </p>
      <h2>How We May Use and Disclose Health Information</h2>
      <ul>
        <li><strong>Treatment:</strong> To provide, coordinate, or manage your aesthetic and medical spa care and related services.</li>
        <li><strong>Payment:</strong> To process payments, financing, or billing for treatments you receive.</li>
        <li><strong>Healthcare Operations:</strong> For quality assessment, staff training, appointment reminders, and clinic administration.</li>
        <li><strong>As Required by Law:</strong> When disclosure is required by federal, state, or local law.</li>
      </ul>
      <h2>Your Rights</h2>
      <p>
        You have the right to inspect and obtain a copy of your health records, request corrections, request restrictions on certain uses or disclosures, and receive an accounting of certain disclosures.
      </p>
      <h2>Questions or Complaints</h2>
      <p>
        If you have questions about this notice or wish to exercise your privacy rights, please contact our team via our <a href="/contact" className="text-rose underline">Contact page</a>.
      </p>
    </LegalPage>
  );
}
