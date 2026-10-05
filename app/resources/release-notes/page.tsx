import type { Metadata } from "next";
import {
  HeroSection,
  PageNavSection,
  RegistryNoticeSection,
  LatestReleasesSection,
  ChangeTypesSection,
  ProductAreasSection,
  DocsOnboardingSection,
  DeprecationsSection,
  BoundariesSection,
  StayInformedSection,
  ContinueResourcesSection,
  FinalCtaSection,
} from "@/components/release-notes";

export const metadata: Metadata = {
  title: "Release Notes | Talvrin",
  description:
    "Follow meaningful Talvrin product changes, understand when they took effect, see who or what is affected, and find the documentation or migration guidance you need.",
};

export default function ReleaseNotesPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <RegistryNoticeSection />
      <LatestReleasesSection />
      <ChangeTypesSection />
      <ProductAreasSection />
      <DocsOnboardingSection />
      <DeprecationsSection />
      <BoundariesSection />
      <StayInformedSection />
      <ContinueResourcesSection />
      <FinalCtaSection />
    </>
  );
}
