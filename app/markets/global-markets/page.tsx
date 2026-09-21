import type { Metadata } from "next";
import {
  HeroSection,
  TrustBarSection,
  WhyItsHardSection,
  ResearchLoopSection,
  MarketAreasSection,
  RelationshipsSection,
  EvidenceProvenanceSection,
  CoverageTruthSection,
  JurisdictionSection,
  ChangeDetectionSection,
  TrustArchitectureSection,
  AudienceRoutingSection,
  InsightsSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/global-markets";

export const metadata: Metadata = {
  title: "Global Markets | Talvrin",
  description:
    "Research global public markets without losing the evidence — source-linked, jurisdiction-aware, and continuously monitored.",
};

export default function GlobalMarketsPage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <WhyItsHardSection />
      <ResearchLoopSection />
      <MarketAreasSection />
      <RelationshipsSection />
      <EvidenceProvenanceSection />
      <CoverageTruthSection />
      <JurisdictionSection />
      <ChangeDetectionSection />
      <TrustArchitectureSection />
      <AudienceRoutingSection />
      <InsightsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
