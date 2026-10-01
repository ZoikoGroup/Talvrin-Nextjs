import {
  AnswerFirstFaq,
  ArticleAnatomy,
  EvidenceSourceArchitecture,
  FeaturedLatestResearch,
  MarketIntelligenceCTA,
  MarketIntelligenceHero,
  ResearchAdjacentDestinations,
  ResearchCategories,
  ResearchFacets,
  ResearchPrinciples,
  ResponsibleAI,
  TrustDataRightsPrivacy,
  WhatChangedFreshness,
} from "@/components/market-intelligence";

export default function MarketIntelligencePage() {
  return (
    <main className="w-full">
      <MarketIntelligenceHero />
      <ResearchPrinciples />
      <FeaturedLatestResearch />
      <ResearchCategories />
      <ResearchFacets />
      <ArticleAnatomy />
      <EvidenceSourceArchitecture />
      <WhatChangedFreshness />
      <ResearchAdjacentDestinations />
      <TrustDataRightsPrivacy />
      <ResponsibleAI />
      <AnswerFirstFaq />
      <MarketIntelligenceCTA />
    </main>
  );
}