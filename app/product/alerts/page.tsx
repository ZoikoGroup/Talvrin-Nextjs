import type { Metadata } from "next";
import {
  HeroSection,
  TrustBarSection,
  WhatAlertsAreSection,
  AnatomySection,
  ThreeLayersSection,
  NoiseControlSection,
  AiBoundarySection,
  CoverageTrustSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/alerts";

export const metadata: Metadata = {
  title: "Alerts | Talvrin",
  description:
    "Talvrin Alerts turns approved monitoring conditions into clear, traceable notifications that take you back to the research and evidence.",
};

export default function AlertsPage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <WhatAlertsAreSection />
      <AnatomySection />
      <ThreeLayersSection />
      <NoiseControlSection />
      <AiBoundarySection />
      <CoverageTrustSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
