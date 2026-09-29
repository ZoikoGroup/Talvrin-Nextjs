import type { Metadata } from "next";
import {
  HeroSection,
  TrustBarSection,
  ProblemSection,
  EvidenceChainSection,
  ResearchObjectSection,
  ReviewabilitySection,
  WhatChangedSection,
  OutcomesSection,
  CoverageTruthSection,
  AiBoundarySection,
  JourneySection,
  AdjacentSolutionsSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/investment-professionals";

export const metadata: Metadata = {
  title: "Investment Professionals | Talvrin",
  description:
    "Move from question to inspectable evidence, preserve the research view, and know when the underlying facts change — without turning generated output into the authority.",
};

export default function InvestmentProfessionalsPage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <ProblemSection />
      <EvidenceChainSection />
      <ResearchObjectSection />
      <ReviewabilitySection />
      <WhatChangedSection />
      <OutcomesSection />
      <CoverageTruthSection />
      <AiBoundarySection />
      <JourneySection />
      <AdjacentSolutionsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
