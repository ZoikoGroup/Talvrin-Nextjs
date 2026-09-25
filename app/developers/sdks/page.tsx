import type { Metadata } from "next";
import {
  HeroSection,
  ResourcePillsSection,
  RegistryContractSection,
  CatalogSection,
  QuickStartSection,
  BoundarySection,
  StateMatrixSection,
  BlockersSection,
  AccessibilitySection,
  FaqSection,
  FinalCtaSection,
} from "@/components/sdks";

export const metadata: Metadata = {
  title: "SDKs | Talvrin",
  description:
    "Client libraries for Talvrin, published only once a language is actually released. Package identity and compatibility resolve from one approved SDK Registry.",
};

export default function SdksPage() {
  return (
    <>
      <HeroSection />
      <ResourcePillsSection />
      <RegistryContractSection />
      <CatalogSection />
      <QuickStartSection />
      <BoundarySection />
      <StateMatrixSection />
      <BlockersSection />
      <AccessibilitySection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
