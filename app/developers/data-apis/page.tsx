import type { Metadata } from "next";
import {
  HeroSection,
  ResourcePillsSection,
  CatalogSection,
  EvaluationSection,
  CoverageTruthSection,
  AccessTruthSection,
  AccessibilitySection,
  FaqSection,
  FinalCtaSection,
} from "@/components/data-apis";

export const metadata: Metadata = {
  title: "Data APIs | Talvrin",
  description:
    "The intended home for released Talvrin data interfaces. Catalog content publishes only from the approved Data API Registry.",
};

export default function DataApisPage() {
  return (
    <>
      <HeroSection />
      <ResourcePillsSection />
      <CatalogSection />
      <EvaluationSection />
      <CoverageTruthSection />
      <AccessTruthSection />
      <AccessibilitySection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
