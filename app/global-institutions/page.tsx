import {
  AnswerFirstFaq,
  AuthorityBoundaries,
  CTA,
  DataRightsControls,
  EvaluationRoute,
  EvidenceOperatingModel,
  GovernedResearchCollaboration,
  Hero,
  InstitutionalProposition,
  WhoItServes,
} from "@/components/global-institutions";

export default function Page() {
  return (
    <main>
      <Hero />
      <AuthorityBoundaries />
      <InstitutionalProposition />
      <WhoItServes />
      <EvidenceOperatingModel />
      <GovernedResearchCollaboration />
      <DataRightsControls />
      <EvaluationRoute />
      <AnswerFirstFaq />
      <CTA />
    </main>
  );
}
