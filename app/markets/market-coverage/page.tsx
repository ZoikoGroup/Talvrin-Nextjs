import {
  AnswerFirstFaq,
  Coverage,
  CoverageAccessCta,
  CoverageDimensions,
  CoverageExplorer,
  CoverageStateDefinitions,
  CurrentnessChangeGovernance,
  DataSourceRightsModel,
  FeaturedCurrentCoverage,
  RelatedCoverage,
  ResearchCapabilityCoverage,
} from "@/components/market-coverage";

export default function MarketCoveragePage() {
  return (
    <main>
      <Coverage />
      <CoverageStateDefinitions />
      <CoverageDimensions />
      <CoverageExplorer />
      <FeaturedCurrentCoverage />
      <RelatedCoverage />
      <DataSourceRightsModel />
      <ResearchCapabilityCoverage />
      <CurrentnessChangeGovernance />
      <AnswerFirstFaq />
      <CoverageAccessCta />
    </main>
  );
}