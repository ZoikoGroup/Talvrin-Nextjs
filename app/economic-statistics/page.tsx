import type { Metadata } from "next";
import {
  EconomicStatisticsHero,
  TrustStrip,
  ScopeClaimControls,
  StatisticalSourceDirectory,
  SeriesDetailTemplate,
  IndicatorTaxonomy,
  SeriesDiscoveryResults,
  SourceDocumentProvenance,
  ReleaseVintageTimeline,
  EvidenceToResearchHandoff,
  SavedResearchMonitoring,
  AdjacentMarketRoutes,
  RightsTrustLimitations,
  AnswerFirstFaq,
  FinalCta,
} from "@/components/economic-statistics";

export const metadata: Metadata = {
  title: "Economic Statistics | Talvrin",
  description:
    "Explore the official economic evidence behind public-market research — which organization published a statistic, what it measures, when it applies, and how reported figures can change.",
};

export default function Page() {
  return (
    <main>
      <EconomicStatisticsHero />
      <TrustStrip />
      <ScopeClaimControls />
      <StatisticalSourceDirectory />
      <SeriesDetailTemplate />
      <IndicatorTaxonomy />
      <SeriesDiscoveryResults />
      <SourceDocumentProvenance />
      <ReleaseVintageTimeline />
      <EvidenceToResearchHandoff />
      <SavedResearchMonitoring />
      <AdjacentMarketRoutes />
      <RightsTrustLimitations />
      <AnswerFirstFaq />
      <FinalCta />
    </main>
  );
}
