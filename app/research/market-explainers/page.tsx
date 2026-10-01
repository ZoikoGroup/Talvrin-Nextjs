import {
  AIEditorialProvenance,
  AnswerFirstFaq,
  BrowseByCategory,
  EvidenceSourcesRights,
  HowExplainerIsStructured,
  MarketExplainersCta,
  MarketExplainersHero,
  MaterialUpdates,
  MethodologyEditorialStandards,
  RelatedConceptsResearchPaths,
  ResearchPrinciplesBar,
  ScopeTruthStatement,
  SearchAndDiscover,
  TheDifferentiator,
} from "@/components/market-explainers";

export default function MarketExplainersPage() {
  return (
    <main className="w-full overflow-hidden">
      <MarketExplainersHero />

      <ResearchPrinciplesBar />

      <ScopeTruthStatement />

      <BrowseByCategory />

      <SearchAndDiscover />

      <HowExplainerIsStructured />

      <TheDifferentiator />

      <MaterialUpdates />

      <EvidenceSourcesRights />

      <AIEditorialProvenance />

      <RelatedConceptsResearchPaths />

      <MethodologyEditorialStandards />

      <AnswerFirstFaq />

      <MarketExplainersCta />
    </main>
  );
}