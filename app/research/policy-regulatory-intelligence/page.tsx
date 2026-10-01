import {
  AIGovernance,
  AuthorityProfileSourceContext,
  CoverageEntryBrowseControls,
  CoverageMethodologyTransparency,
  LatestOfficialActions,
  PolicyChangesMonitoring,
  PolicyRegulationCta,
  PolicyRegulationDetail,
  PolicyRegulationHero,
  RelatedResearchContinuation,
  ResearchContextNotLegalApplicability,
  SourceEvidenceChain,
  UpcomingEffectiveDates,
  VersionChangeComparison,
} from "@/components/policy-regulatory-intelligence";

import {
  AnswerFirstFaq,
  ResearchPrinciplesBar,
  ScopeTruthStatement,
} from "@/components/market-explainers";

export default function PolicyRegulatoryIntelligencePage() {
  return (
    <main className="w-full overflow-hidden">
      <PolicyRegulationHero />

      <ResearchPrinciplesBar />

      <ScopeTruthStatement />

      <CoverageEntryBrowseControls />

      <LatestOfficialActions />

      <UpcomingEffectiveDates />

      <AuthorityProfileSourceContext />

      <PolicyRegulationDetail />

      <SourceEvidenceChain />

      <VersionChangeComparison />

      <ResearchContextNotLegalApplicability />

      <PolicyChangesMonitoring />

      <RelatedResearchContinuation />

      <CoverageMethodologyTransparency />

      <AIGovernance />

      <AnswerFirstFaq />

      <PolicyRegulationCta />
    </main>
  );
}