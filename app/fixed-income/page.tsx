import type { Metadata } from "next";
import {
  HeroSection,
  TrustBarSection,
  ScopeDefinitionSection,
  EvidenceStackSection,
  MinimumEvidenceCardSection,
  CoverageTruthSection,
  ChangeDetectionSection,
  AiGovernanceSection,
  DiscoverabilitySection,
  FaqSection,
  FinalCtaSection,
} from "@/components/fixed-income";

export const metadata: Metadata = {
  title: "Fixed Income | Talvrin",
  description:
    "Understand the evidence behind rates and sovereign-market views — source-linked, governed, and continuously monitored.",
};

export default function FixedIncomePage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <ScopeDefinitionSection />
      <EvidenceStackSection />
      <MinimumEvidenceCardSection />
      <CoverageTruthSection />
      <ChangeDetectionSection />
      <AiGovernanceSection />
      <DiscoverabilitySection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
