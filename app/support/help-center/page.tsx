import type { Metadata } from "next";
import {
  HeroSection,
  PageNavSection,
  DestinationsSection,
  QuickPathsSection,
  TopicsSection,
  NewToTalvrinSection,
  TroubleshootingSection,
  EscalationSection,
  FaqSection,
  ContinueLearningSection,
  FinalCtaSection,
} from "@/components/support-help-center";

export const metadata: Metadata = {
  title: "Help Center | Talvrin Support",
  description:
    "Search approved help content or browse by topic to find guidance, fix a problem, and reach the right Talvrin Support destination.",
};

export default function SupportHelpCenterPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <DestinationsSection />
      <QuickPathsSection />
      <TopicsSection />
      <NewToTalvrinSection />
      <TroubleshootingSection />
      <EscalationSection />
      <FaqSection />
      <ContinueLearningSection />
      <FinalCtaSection />
    </>
  );
}
