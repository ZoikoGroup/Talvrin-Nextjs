import type { Metadata } from "next";
import {
  HeroSection,
  ResourcePillsSection,
  CatalogSection,
  EvaluationSection,
  ConnectionStepsSection,
  RightsTruthSection,
  PermissionsSection,
  AccessibilitySection,
  FaqSection,
  FinalCtaSection,
} from "@/components/integrations";

export const metadata: Metadata = {
  title: "Integrations | Talvrin",
  description:
    "The intended home for released Talvrin integrations. Catalog content publishes only from the approved Integration Registry.",
};

export default function IntegrationsPage() {
  return (
    <>
      <HeroSection />
      <ResourcePillsSection />
      <CatalogSection />
      <EvaluationSection />
      <ConnectionStepsSection />
      <RightsTruthSection />
      <PermissionsSection />
      <AccessibilitySection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
