import type { Metadata } from "next";
import {
  HeroSection,
  TrustBarSection,
  SourceClassificationSection,
  DifferentiatorSection,
  ProvenanceInspectorSection,
  RelationshipsSection,
  ContinuitySection,
  AiGovernanceSection,
  ChangeLineageSection,
  TrustGovernanceSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/evidence";

export const metadata: Metadata = {
  title: "Evidence | Talvrin",
  description:
    "Talvrin Evidence keeps public-market research connected to identifiable sources, timing and context, with a path back to the underlying material.",
};

export default function EvidencePage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <SourceClassificationSection />
      <DifferentiatorSection />
      <ProvenanceInspectorSection />
      <RelationshipsSection />
      <ContinuitySection />
      <AiGovernanceSection />
      <ChangeLineageSection />
      <TrustGovernanceSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
