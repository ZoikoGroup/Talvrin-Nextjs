import type { Metadata } from "next";
import {
  HeroSection,
  PageNavSection,
  DoctrineSection,
  EvidenceChainSection,
  EvidenceObjectSection,
  ClassificationSection,
  TimeContextSection,
  LineageSection,
  RightsSection,
  RelationshipsSection,
  SeparationSection,
  UncertaintySection,
  MonitoringSection,
  SourceOpenSection,
  TrustLinksSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/evidence-standards";

export const metadata: Metadata = {
  title: "Evidence Standards | Talvrin Trust",
  description:
    "See where the evidence came from — and what it means in context. How Talvrin preserves provenance, timing, jurisdiction, version, rights state and evidence relationships.",
};

export default function EvidenceStandardsPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <DoctrineSection />
      <EvidenceChainSection />
      <EvidenceObjectSection />
      <ClassificationSection />
      <TimeContextSection />
      <LineageSection />
      <RightsSection />
      <RelationshipsSection />
      <SeparationSection />
      <UncertaintySection />
      <MonitoringSection />
      <SourceOpenSection />
      <TrustLinksSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
