import type { Metadata } from "next";
import {
  RegulatorsHero,
  RegulatorsPrinciples,
  ScopeClaimControls,
  RegulatorDirectory,
  AuthorityProfileTemplate,
  RegulatorySourceFamilies,
  EvidenceSearchResults,
  DocumentDetailProvenance,
  TimingVersionHistory,
  RelatedRegulatoryResearch,
  MonitoringHandoff,
  AdjacentMarketRoutes,
  RightsTrustLimitations,
  AnswerFirstFaq,
  RegulatorsCTA,
} from "@/components/regulators";

export const metadata: Metadata = {
  title: "Regulators | Talvrin",
  description:
    "Explore regulator-issued public-market documents in their institutional, jurisdictional and historical context — source-linked, governed, and continuously monitored.",
};

export default function RegulatorsPage() {
  return (
    <>
      <RegulatorsHero />
      <RegulatorsPrinciples />
      <ScopeClaimControls />
      <RegulatorDirectory />
      <AuthorityProfileTemplate />
      <RegulatorySourceFamilies />
      <EvidenceSearchResults />
      <DocumentDetailProvenance />
      <TimingVersionHistory />
      <RelatedRegulatoryResearch />
      <MonitoringHandoff />
      <AdjacentMarketRoutes />
      <RightsTrustLimitations />
      <AnswerFirstFaq />
      <RegulatorsCTA />
    </>
  );
}
