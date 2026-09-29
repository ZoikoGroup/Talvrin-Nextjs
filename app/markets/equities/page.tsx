import type { Metadata } from "next";
import {
  HeroSection,
  TrustBarSection,
  ScopeSection,
  WorkflowSection,
  EvidenceStackSection,
  FilingExampleSection,
  VersionLineageSection,
  CoverageTruthSection,
  SemanticSeparationSection,
  ChangeDetectionSection,
  AiGovernanceSection,
  InsightsSection,
  TrustSection,
  AudienceRoutingSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/equities";

export const metadata: Metadata = {
  title: "Equities | Talvrin",
  description:
    "Talvrin connects public-company and equity-security research to source-linked filings, issuer disclosures, contextual evidence, and continuous monitoring.",
};

export default function EquitiesPage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <ScopeSection />
      <WorkflowSection />
      <EvidenceStackSection />
      <FilingExampleSection />
      <VersionLineageSection />
      <CoverageTruthSection />
      <SemanticSeparationSection />
      <ChangeDetectionSection />
      <AiGovernanceSection />
      <InsightsSection />
      <TrustSection />
      <AudienceRoutingSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
