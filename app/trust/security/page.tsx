import type { Metadata } from "next";
import HeroSection from "@/components/security/HeroSection";
import PageNavSection from "@/components/security/PageNavSection";
import FaqSection from "@/components/security/FaqSection";
import {
  PrinciplesSection,
  ClaimLifecycleSection,
  SecurityDomainsSection,
  EvidenceStatesSection,
  DisclosureBoundarySection,
  AssuranceSection,
  NoticesStatusSection,
  EnterpriseDiligenceSection,
  TrustLinksSection,
  FinalCtaSection,
} from "@/components/security/Sections";

export const metadata: Metadata = {
  title: "Security | Talvrin Trust",
  description:
    "Security claims should be verifiable, current, and scoped. How Talvrin governs which security statements are published, with what evidence, scope and review state.",
};

export default function SecurityPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <PrinciplesSection />
      <ClaimLifecycleSection />
      <SecurityDomainsSection />
      <EvidenceStatesSection />
      <DisclosureBoundarySection />
      <AssuranceSection />
      <NoticesStatusSection />
      <EnterpriseDiligenceSection />
      <TrustLinksSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
