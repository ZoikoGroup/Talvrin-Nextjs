import type { Metadata } from "next";
import {
  HeroSection,
  PageNavSection,
  PrinciplesSection,
  LifecycleSection,
  RightsStatesSection,
  EntitlementSection,
  RestrictedContentSection,
  DerivedContentSection,
  DisplayRetentionSection,
  SourceOpenSection,
  TrustLinksSection,
  EnterpriseDiligenceSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/data-rights";

export const metadata: Metadata = {
  title: "Data Rights | Talvrin Trust",
  description:
    "Use evidence within the rights that govern it. How Talvrin treats licensing, entitlement and permitted use as part of evidence governance.",
};

export default function DataRightsPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <PrinciplesSection />
      <LifecycleSection />
      <RightsStatesSection />
      <EntitlementSection />
      <RestrictedContentSection />
      <DerivedContentSection />
      <DisplayRetentionSection />
      <SourceOpenSection />
      <TrustLinksSection />
      <EnterpriseDiligenceSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
