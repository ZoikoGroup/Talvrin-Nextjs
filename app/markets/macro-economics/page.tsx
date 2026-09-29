import type { Metadata } from "next";
import {
  HeroSection,
  TrustBarSection,
  ScopeSection,
  WorkflowSection,
  EvidenceStackSection,
  MonitoringExampleSection,
  TimeVintageSection,
  PolicyContractSection,
  CoverageTruthSection,
  ChangeDetectionSection,
  CalendarRelationshipSection,
  TrustSection,
  AudienceRoutingSection,
  InsightsSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/macro-economics";

export const metadata: Metadata = {
  title: "Macro & Economics | Talvrin",
  description:
    "Talvrin connects macroeconomic questions to source-linked releases, policy evidence, jurisdictional context, and continuous monitoring — so you can see what changed and reassess the research view.",
};

export default function MacroEconomicsPage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <ScopeSection />
      <WorkflowSection />
      <EvidenceStackSection />
      <MonitoringExampleSection />
      <TimeVintageSection />
      <PolicyContractSection />
      <CoverageTruthSection />
      <ChangeDetectionSection />
      <CalendarRelationshipSection />
      <TrustSection />
      <AudienceRoutingSection />
      <InsightsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
