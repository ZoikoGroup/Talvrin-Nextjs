import type { Metadata } from "next";
import {
  HeroSection,
  SubNav,
  CapabilitiesSection,
  HowAccessWorksSection,
  ReleaseGovernanceSection,
  IntegrationPatternsSection,
  EvidenceRightsSection,
  DocumentationPreviewSection,
  SecurityOperationsSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/api-integrations";

export const metadata: Metadata = {
  title: "API & Integrations | Talvrin",
  description:
    "Controlled, permission-aware access to Talvrin evidence and research outputs — the governance, security and evidence model the API must meet before it ships.",
};

export default function ApiIntegrationsPage() {
  return (
    <>
      <HeroSection />
      <SubNav />
      <CapabilitiesSection />
      <HowAccessWorksSection />
      <ReleaseGovernanceSection />
      <IntegrationPatternsSection />
      <EvidenceRightsSection />
      <DocumentationPreviewSection />
      <SecurityOperationsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
