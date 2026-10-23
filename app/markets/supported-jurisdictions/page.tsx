import type { Metadata } from "next";
import {
  HeroSection,
  VocabularySection,
  ExplorerSection,
  DimensionGridSection,
  EligibilitySection,
  RequestCoverageSection,
  FaqSection,
} from "@/components/supported-jurisdictions";

export const metadata: Metadata = {
  title: "Supported Jurisdictions | Talvrin",
  description:
    "Understand where Talvrin coverage is confirmed — jurisdiction by jurisdiction and dimension by dimension — not just where it's architecturally possible.",
};

export default function SupportedJurisdictionsPage() {
  return (
    <>
      <HeroSection />
      <VocabularySection />
      <ExplorerSection />
      <DimensionGridSection />
      <EligibilitySection />
      <RequestCoverageSection />
      <FaqSection />
    </>
  );
}
