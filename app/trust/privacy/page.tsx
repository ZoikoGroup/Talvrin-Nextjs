import type { Metadata } from "next";
import HeroSection from "@/components/privacy/HeroSection";
import PageNavSection from "@/components/privacy/PageNavSection";
import FaqSection from "@/components/privacy/FaqSection";
import {
  DoctrineSection,
  PrivacyMapSection,
  CollectionSection,
  ControlsSection,
  AnalyticsSection,
  ThirdPartiesSection,
  RegionalSection,
  AiSection,
  EnterpriseSection,
  HandoffsSection,
  FinalCtaSection,
} from "@/components/privacy/Sections";

export const metadata: Metadata = {
  title: "Privacy | Talvrin Trust",
  description:
    "Privacy that is clear about what is known — and what still requires an authoritative notice. How Talvrin minimizes collection, exposes real controls and governs privacy claims.",
};

export default function PrivacyPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <DoctrineSection />
      <PrivacyMapSection />
      <CollectionSection />
      <ControlsSection />
      <AnalyticsSection />
      <ThirdPartiesSection />
      <RegionalSection />
      <AiSection />
      <EnterpriseSection />
      <HandoffsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
