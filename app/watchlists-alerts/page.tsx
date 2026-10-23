import type { Metadata } from "next";
import {
  HeroSection,
  WatchlistsSection,
  BuilderSection,
  SourcesSection,
  RulesSection,
  DeliverySection,
  AlertEvidenceSection,
  TriageSection,
  ResearchViewSection,
  TeamOwnershipSection,
  NoiseControlSection,
  AvailabilitySection,
  FaqSection,
  FinalCtaSection,
} from "@/components/watchlists-alerts";

export const metadata: Metadata = {
  title: "Watchlists & Alerts | Talvrin",
  description:
    "Organize the topics and evidence sources you follow, preserve research context, and understand when relevant source information changes.",
};

export default function WatchlistsAlertsPage() {
  return (
    <>
      <HeroSection />
      <WatchlistsSection />
      <BuilderSection />
      <SourcesSection />
      <RulesSection />
      <DeliverySection />
      <AlertEvidenceSection />
      <TriageSection />
      <ResearchViewSection />
      <TeamOwnershipSection />
      <NoiseControlSection />
      <AvailabilitySection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
