import type { Metadata } from "next";
import {
  HeroSection,
  CoreDocumentsSection,
  PrivacyChoicesSection,
  EnterpriseNoticesSection,
  DisclosuresSection,
  JurisdictionSection,
  FinalCtaSection,
} from "@/components/legal-policies";

export const metadata: Metadata = {
  title: "Legal & Policies | Talvrin",
  description:
    "Clear documentation for using Talvrin responsibly — current policies, research and AI disclosures, and your privacy choices, all in one index.",
};

export default function LegalPoliciesPage() {
  return (
    <>
      <HeroSection />
      <CoreDocumentsSection />
      <PrivacyChoicesSection />
      <EnterpriseNoticesSection />
      <DisclosuresSection />
      <JurisdictionSection />
      <FinalCtaSection />
    </>
  );
}
