import type { Metadata } from "next";
import {
  HeroSection,
  PrinciplesSection,
  WhatBelongsSection,
  AnatomySection,
  MonitoringHandoffSection,
  CreateEditSection,
  BulkActionsSection,
  ThreeLayersSection,
  AiBoundarySection,
  CoverageFreshnessSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/watchlists";

export const metadata: Metadata = {
  title: "Watchlists | Talvrin",
  description:
    "Talvrin Watchlists organize the public-market research contexts you choose to follow, keeping research, evidence, and monitoring close at hand.",
};

export default function WatchlistsPage() {
  return (
    <>
      <HeroSection />
      <PrinciplesSection />
      <WhatBelongsSection />
      <AnatomySection />
      <MonitoringHandoffSection />
      <CreateEditSection />
      <BulkActionsSection />
      <ThreeLayersSection />
      <AiBoundarySection />
      <CoverageFreshnessSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
