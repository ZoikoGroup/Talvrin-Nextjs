import type { Metadata } from "next";
import {
  HeroSection,
  PageNavSection,
  SourceModelSection,
  SourceClassesSection,
  RegistrySection,
  SourceRecordSection,
  EvidenceChainSection,
  TimeVersionSection,
  RightsBoundarySection,
  CoverageSection,
  CurrentnessSection,
  MonitoringSection,
  AiBoundarySection,
  WhoBenefitsSection,
  TrustLinksSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/data-sources";

export const metadata: Metadata = {
  title: "Data Sources | Talvrin Trust",
  description:
    "Know where the information came from. How Talvrin governs source identity, classification, provenance, currentness and coverage.",
};

export default function DataSourcesPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <SourceModelSection />
      <SourceClassesSection />
      <RegistrySection />
      <SourceRecordSection />
      <EvidenceChainSection />
      <TimeVersionSection />
      <RightsBoundarySection />
      <CoverageSection />
      <CurrentnessSection />
      <MonitoringSection />
      <AiBoundarySection />
      <WhoBenefitsSection />
      <TrustLinksSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
