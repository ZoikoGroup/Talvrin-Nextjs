import type { Metadata } from "next";
import {
  HeroSection,
  TrustBarSection,
  ScopeSection,
  ReleasedCategoriesSection,
  WorkflowSection,
  IdentitySection,
  EvidenceStackSection,
  IllustrativeSection,
  DataStateSection,
  ChangeDetectionSection,
  AiGovernanceSection,
  TrustSection,
  AudienceRoutingSection,
  InsightsSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/funds-other-assets";

export const metadata: Metadata = {
  title: "Funds & Other Assets | Talvrin",
  description:
    "Talvrin applies its source-linked research and monitoring model to supported fund and public-market asset categories as they are released — keeping identity, structure, coverage, rights, and evidence changes visible.",
};

export default function FundsOtherAssetsPage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <ScopeSection />
      <ReleasedCategoriesSection />
      <WorkflowSection />
      <IdentitySection />
      <EvidenceStackSection />
      <IllustrativeSection />
      <DataStateSection />
      <ChangeDetectionSection />
      <AiGovernanceSection />
      <TrustSection />
      <AudienceRoutingSection />
      <InsightsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
