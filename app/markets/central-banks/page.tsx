import {
  AIGovernance,
  AnswerFirstFaq,
  CentralBanksCTA,
  CentralBanksHero,
  CentralBanksPrinciples,
  CommunicationsEvidenceStream,
  CoverageMethodologyTransparency,
  CrossInstitutionComparison,
  InstitutionDirectory,
  InstitutionProfileContract,
  LatestOfficialDecisions,
  PolicyContextInstrumentHistory,
  ScopeDefinition,
  TrustDataRights,
  UpcomingPolicyTimeline,
  WhatChangedMonitoring,
} from "@/components/central-banks";

export default function Page() {
  return (
    <main>
      <CentralBanksHero />

      <CentralBanksPrinciples />

      <ScopeDefinition />

      <InstitutionDirectory />

      <InstitutionProfileContract />

      <UpcomingPolicyTimeline />

      <LatestOfficialDecisions />

      <CommunicationsEvidenceStream />

      <PolicyContextInstrumentHistory />

      <WhatChangedMonitoring />

      <CrossInstitutionComparison />

      <CoverageMethodologyTransparency />

      <AIGovernance />

      <TrustDataRights />

      <AnswerFirstFaq />

      <CentralBanksCTA />
    </main>
  );
}