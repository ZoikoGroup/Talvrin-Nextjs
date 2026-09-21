import {
  ProductOverviewHero,
  FeatureBanner,
  CoreWorkflowSection,
  ProductCapabilityMap,
  ResearchWorkspaceSection,
  ModuleEvidenceSection,
  ModuleMonitoringSection,
  ModuleWatchlistsSection,
  ModuleAlertsSection,
  ModuleAiAssistanceSection,
  GlobalArchitectureSection,
  TrustBoundariesSection,
  AudienceSection,
  FaqSection,
  CtaSection,
} from "@/components/product-overview";

export default function ProductOverviewPage() {
  return (
    <main>
      <ProductOverviewHero />
      <FeatureBanner />
      <CoreWorkflowSection />
      <ProductCapabilityMap />
      <ResearchWorkspaceSection />
      <ModuleEvidenceSection />
      <ModuleMonitoringSection />
      <ModuleWatchlistsSection />
      <ModuleAlertsSection />
      <ModuleAiAssistanceSection />
      <GlobalArchitectureSection />
      <TrustBoundariesSection />
      <AudienceSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
