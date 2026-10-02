import type { Metadata } from "next";
import {
  HeroSection,
  PageNavSection,
  WhatItIsSection,
  WorkflowSection,
  FirstTaskSection,
  EvidenceChainSection,
  AiPrinciplesSection,
  StartingPathsSection,
  CoverageSection,
  FaqSection,
  ContinueLearningSection,
  FinalCtaSection,
} from "@/components/getting-started";

export const metadata: Metadata = {
  title: "Getting Started | Talvrin",
  description:
    "Start with the question. Stay connected to the evidence. A guided orientation to the Talvrin research workflow, your first task, and where to go next.",
};

export default function GettingStartedPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <WhatItIsSection />
      <WorkflowSection />
      <FirstTaskSection />
      <EvidenceChainSection />
      <AiPrinciplesSection />
      <StartingPathsSection />
      <CoverageSection />
      <FaqSection />
      <ContinueLearningSection />
      <FinalCtaSection />
    </>
  );
}
