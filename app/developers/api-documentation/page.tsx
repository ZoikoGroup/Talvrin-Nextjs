import type { Metadata } from "next";
import {
  HeroSection,
  ResourcePillsSection,
  ReferenceContractSection,
  EvidenceTruthSection,
  LifecycleTruthSection,
  AccessibilitySection,
  FaqSection,
  FinalCtaSection,
} from "@/components/api-documentation";

export const metadata: Metadata = {
  title: "API Documentation | Talvrin",
  description:
    "The intended home for Talvrin's API Documentation. Reference content publishes only from an approved API Contract Registry.",
};

export default function ApiDocumentationPage() {
  return (
    <>
      <HeroSection />
      <ResourcePillsSection />
      <ReferenceContractSection />
      <EvidenceTruthSection />
      <LifecycleTruthSection />
      <AccessibilitySection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
