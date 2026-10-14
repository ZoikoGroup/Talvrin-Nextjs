import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  PrimaryWorkflowSection,
  ScopeSection,
  LifecycleSection,
  RolesAccessSection,
  ConnectedPathwaysSection,
  CoverageTrustSection,
  AiGovernanceSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/saved-research";

export const metadata: Metadata = {
  title: "Saved Research | Talvrin",
  description:
    "Return to research with its evidence intact. Keep important questions, research views, source references and supporting context connected so you can return to the reasoning behind a view — not just the latest summary.",
};

export default function SavedResearchPage() {
  return (
    <>
      <HeroSection />
      <DirectAnswerSection />
      <PrimaryWorkflowSection />
      <ScopeSection />
      <LifecycleSection />
      <RolesAccessSection />
      <ConnectedPathwaysSection />
      <CoverageTrustSection />
      <AiGovernanceSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
