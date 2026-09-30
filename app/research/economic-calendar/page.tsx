import {
  CoverageTransparency,
  EconomicCalendarFaq,
  EconomicCalendarHero,
  EventEvidence,
  EventExplorer,
  InterpretationGuardrails,
  RelatedResearch,
  ResearchTrailCta,
  RevisionTimeline,
  ScopeDefinition,
} from "@/components/economic-calendar";

export default function Page() {
  return (
    <main>
      <EconomicCalendarHero />

      <ScopeDefinition />

      <EventExplorer />

      <EventEvidence />

      <RevisionTimeline />

      <InterpretationGuardrails />

      <RelatedResearch />

      <CoverageTransparency />

      <EconomicCalendarFaq />

      <ResearchTrailCta />
    </main>
  );
}