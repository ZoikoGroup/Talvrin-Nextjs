import {
  AIBoundary,
  AnswerFirstFaq,
  AppliedMethodologyWalkthrough,
  CoverageTruth,
  EvidenceAnatomy,
  InterpretationLayers,
  MethodologyGovernance,
  MonitoringAndChange,
  RelatedResearchTrust,
  ResearchCTA,
  ResearchPrinciplesStrip,
  ResearchWorkflow,
  SevenPrinciples,
  TalvrinMethodologyHero,
  UncertaintyContradiction,
} from "@/components/talvrin-methodology";

export default function Page() {
  return (
    <main>
      <TalvrinMethodologyHero />

      <ResearchPrinciplesStrip />

      <SevenPrinciples />

      <ResearchWorkflow />

      <EvidenceAnatomy />

      <InterpretationLayers />

      <UncertaintyContradiction />

      <MonitoringAndChange />

      <AIBoundary />

      <CoverageTruth />

      <MethodologyGovernance />

      <AppliedMethodologyWalkthrough />

      <AnswerFirstFaq />

      <RelatedResearchTrust />

      <ResearchCTA />
    </main>
  );
}
