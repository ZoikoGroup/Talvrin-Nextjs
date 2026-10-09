import type { Metadata } from "next";
import HeroSection from "@/components/wealth-advisory-research/HeroSection";
import FaqSection from "@/components/wealth-advisory-research/FaqSection";
import {
  TrustBarSection,
  OutcomesSection,
  ProblemSection,
  ClientProcessSection,
  WorkflowSection,
  ArchitectureSection,
  ContinuitySection,
  ClientContextSection,
  MonitoringSection,
  ReviewabilitySection,
  CoverageSection,
  AiGovernanceSection,
  TrustPrivacySection,
  WhatTalvrinIsNotSection,
  AdjacentSolutionsSection,
  FinalCtaSection,
} from "@/components/wealth-advisory-research/Sections";

export const metadata: Metadata = {
  title: "Wealth & Advisory Research | Talvrin",
  description:
    "Strengthen the evidence behind professional analysis and client research processes — source-linked evidence, preserved reasoning and monitoring, without personalized advice.",
};

export default function WealthAdvisoryResearchPage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <OutcomesSection />
      <ProblemSection />
      <ClientProcessSection />
      <WorkflowSection />
      <ArchitectureSection />
      <ContinuitySection />
      <ClientContextSection />
      <MonitoringSection />
      <ReviewabilitySection />
      <CoverageSection />
      <AiGovernanceSection />
      <TrustPrivacySection />
      <WhatTalvrinIsNotSection />
      <AdjacentSolutionsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
