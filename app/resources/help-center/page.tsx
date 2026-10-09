import type { Metadata } from "next";
import {
  HeroSection,
  SectionNav,
  SearchNoticeSection,
  QuickPathsSection,
  TopicDirectorySection,
  EvidenceGuidanceSection,
  TroubleshootingSection,
  FaqSection,
  ContinueLearningSection,
  CtaSection,
} from "@/components/help-center";

export const metadata: Metadata = {
  title: "Help Center | Talvrin",
  description:
    "Task-based help for understanding Talvrin, working with evidence, building research views, monitoring change, and finding the right next step.",
};

export default function HelpCenterPage() {
  return (
    <>
      <HeroSection />
      <SectionNav />
      <SearchNoticeSection />
      <QuickPathsSection />
      <TopicDirectorySection />
      <EvidenceGuidanceSection />
      <TroubleshootingSection />
      <FaqSection />
      <ContinueLearningSection />
      <CtaSection />
    </>
  );
}
