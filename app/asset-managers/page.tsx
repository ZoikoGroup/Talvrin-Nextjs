import type { Metadata } from "next";
import {
  HeroSection,
  TrustBarSection,
  BusinessOutcomesSection,
  TheProblemSection,
  WorkflowSection,
  ArchitectureSection,
  InstitutionalMemorySection,
  ContinuousMonitoringSection,
  CollaborationOutcomeSection,
  TrustDataRightsSection,
  ExplicitBoundarySection,
  AdjacentSolutionsSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/asset-managers";

export const metadata: Metadata = {
  title: "Asset Managers | Solutions",
  description:
    "Talvrin helps asset-management organizations make public-market research more systematic, traceable, reviewable, reusable, and continuously monitorable across investment workflows.",
};

export default function AssetManagersPage() {
  return (
    <div className="flex min-h-screen flex-col pt-16 md:pt-0">
      <HeroSection />
      <TrustBarSection />
      <BusinessOutcomesSection />
      <TheProblemSection />
      <WorkflowSection />
      <ArchitectureSection />
      <InstitutionalMemorySection />
      <ContinuousMonitoringSection />
      <CollaborationOutcomeSection />
      <TrustDataRightsSection />
      <ExplicitBoundarySection />
      <AdjacentSolutionsSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
