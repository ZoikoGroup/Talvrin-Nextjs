import type { Metadata } from "next";
import {
  HeroSection,
  PageNavSection,
  PrinciplesSection,
  CapabilitySection,
  BoundariesSection,
  ContentOriginSection,
  ProvenanceSection,
  LimitationsSection,
  HumanJudgmentSection,
  TrustLinksSection,
  ClaimGovernanceSection,
  EnterpriseDiligenceSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/ai-principles";

export const metadata: Metadata = {
  title: "AI Principles | Talvrin Trust",
  description:
    "AI should help you navigate the evidence — not replace it. How Talvrin keeps AI-assisted output labeled, source-linked, and separate from authoritative evidence.",
};

export default function AiPrinciplesPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <PrinciplesSection />
      <CapabilitySection />
      <BoundariesSection />
      <ContentOriginSection />
      <ProvenanceSection />
      <LimitationsSection />
      <HumanJudgmentSection />
      <TrustLinksSection />
      <ClaimGovernanceSection />
      <EnterpriseDiligenceSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
