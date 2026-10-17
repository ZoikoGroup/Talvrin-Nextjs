import type { Metadata } from "next";
import {
  CentralBanksHero,
  TrustStrip,
  ScopeDefinition,
  InstitutionDirectory,
  InstitutionProfileContract,
  SourceFamilyDirectory,
  EvidenceResultsTable,
  EvidenceInspectionProvenance,
  TimeContextExplainer,
  ResearchWorkflow,
  MonitoringHandoff,
  AdjacentMarketRoutes,
  RightsTrustLimitations,
  AnswerFirstFaq,
  FinalCta,
} from "@/components/markets-central-banks";

export const metadata: Metadata = {
  title: "Central Banks | Talvrin",
  description:
    "Follow central-bank evidence back to its source — institution-published monetary-policy material with provenance, publication context and clear coverage status.",
};

export default function Page() {
  return (
    <main>
      <CentralBanksHero />
      <TrustStrip />
      <ScopeDefinition />
      <InstitutionDirectory />
      <InstitutionProfileContract />
      <SourceFamilyDirectory />
      <EvidenceResultsTable />
      <EvidenceInspectionProvenance />
      <TimeContextExplainer />
      <ResearchWorkflow />
      <MonitoringHandoff />
      <AdjacentMarketRoutes />
      <RightsTrustLimitations />
      <AnswerFirstFaq />
      <FinalCta />
    </main>
  );
}
