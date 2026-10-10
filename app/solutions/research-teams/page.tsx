import {
  AdjacentSolutions,
  AIAssistanceResearchTeams,
  AnswerFirstFaq,
  CollaborationBoundary,
  ContinuousMonitoring,
  InstitutionalMemory,
  ResearchTeamsCTA,
  ResearchTeamsHero,
  ResearchTeamsPrinciples,
  ReusableResearchViews,
  Reviewability,
  SharedEvidenceArchitecture,
  TeamResearchProblem,
  TeamResearchWorkflow,
  TrustRightsTeamPrivacy,
} from "@/components/research-teams";

export default function ResearchTeamsPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <ResearchTeamsHero />

      <ResearchTeamsPrinciples />

      <TeamResearchProblem />

      <TeamResearchWorkflow />

      <SharedEvidenceArchitecture />

      <ReusableResearchViews />

      <Reviewability />

      <InstitutionalMemory />

      <ContinuousMonitoring />

      <CollaborationBoundary />

      <AIAssistanceResearchTeams />

      <TrustRightsTeamPrivacy />

      <AdjacentSolutions />

      <AnswerFirstFaq />

      <ResearchTeamsCTA />
    </div>
  );
}