import type { Metadata } from "next";
import {
  HeroSection,
  TrustBarSection,
  ProblemSection,
  AskQuestionsSection,
  WorkflowSection,
  EvidenceChainSection,
  SourceLayersSection,
  PreserveViewSection,
  EvidenceChangesSection,
  OutcomesSection,
  CoverageTruthSection,
  AiAssistanceSection,
  TrustPrivacySection,
  JourneySection,
  CategorySection,
  FaqSection,
  FinalCtaSection,
} from "@/components/individual-investors";

export const metadata: Metadata = {
  title: "Individual Investors | Talvrin",
  description:
    "Research public markets with evidence you can inspect. Build a view you can revisit and know when the evidence changes — no trade execution, no stock tips.",
};

export default function IndividualInvestorsPage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <ProblemSection />
      <AskQuestionsSection />
      <WorkflowSection />
      <EvidenceChainSection />
      <SourceLayersSection />
      <PreserveViewSection />
      <EvidenceChangesSection />
      <OutcomesSection />
      <CoverageTruthSection />
      <AiAssistanceSection />
      <TrustPrivacySection />
      <JourneySection />
      <CategorySection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
