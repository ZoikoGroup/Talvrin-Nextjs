import type { Metadata } from "next";
import HeroSection from "@/components/trust-center/HeroSection";
import PageNavSection from "@/components/trust-center/PageNavSection";
import FaqSection from "@/components/trust-center/FaqSection";
import {
  DoctrineSection,
  TrustDomainsSection,
  HowWeProveTrustSection,
  EvidenceRightsSection,
  SecurityPrivacyGovernanceSection,
  ResponsibleAiSection,
  OperationsSection,
  ScopeLimitsSection,
  EnterpriseSection,
  FinalCtaSection,
} from "@/components/trust-center/Sections";

export const metadata: Metadata = {
  title: "Trust Center | Talvrin",
  description:
    "Trust should be inspectable. The public entry point for how Talvrin approaches evidence provenance, data rights, security, privacy, global data governance, responsible AI and operational transparency.",
};

export default function TrustCenterPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <DoctrineSection />
      <TrustDomainsSection />
      <HowWeProveTrustSection />
      <EvidenceRightsSection />
      <SecurityPrivacyGovernanceSection />
      <ResponsibleAiSection />
      <OperationsSection />
      <ScopeLimitsSection />
      <EnterpriseSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
