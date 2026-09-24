import type { Metadata } from "next";
import {
  HeroSection,
  ResourcePillsSection,
  AvailableNowSection,
  EvidenceModelSection,
  EcosystemSection,
  JourneySection,
  CoverageTruthSection,
  AvailabilityTruthSection,
  EnterpriseFitSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/developer-overview";

export const metadata: Metadata = {
  title: "Developer Overview | Talvrin",
  description:
    "Explore the technical resources Talvrin has actually released, with availability, coverage, and technical references stated explicitly.",
};

export default function DeveloperOverviewPage() {
  return (
    <>
      <HeroSection />
      <ResourcePillsSection />
      <AvailableNowSection />
      <EvidenceModelSection />
      <EcosystemSection />
      <JourneySection />
      <CoverageTruthSection />
      <AvailabilityTruthSection />
      <EnterpriseFitSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
