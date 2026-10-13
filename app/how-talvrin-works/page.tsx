import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  SixStepsSection,
  ConceptualExampleSection,
  EvidenceTrustTruthSection,
  ConnectedDestinationsSection,
  ResponsibleAiSection,
  CoverageEntitlementSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/how-talvrin-works";

export const metadata: Metadata = {
  title: "How Talvrin Works | Talvrin",
  description:
    "From a market question to a monitored research view. Explore Talvrin's six-step recurring evidence workflow: Ask, Discover, Inspect, Build, Monitor, and Reassess.",
};

export default function HowTalvrinWorksPage() {
  return (
    <main>
      <HeroSection />
      <DirectAnswerSection />
      <SixStepsSection />
      <ConceptualExampleSection />
      <EvidenceTrustTruthSection />
      <ConnectedDestinationsSection />
      <ResponsibleAiSection />
      <CoverageEntitlementSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
