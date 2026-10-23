import type { Metadata } from "next";
import {
  HeroSection,
  PromiseBar,
  StakeholdersSection,
  ChallengeSection,
  PillarsSection,
  EvidenceSection,
  ExploreLinksSection,
  WorkflowsSection,
  CapabilityModelSection,
  GovernanceSection,
  QualificationSection,
  ExclusionsSection,
  FaqSection,
  EnquirySection,
} from "@/components/financial-institutions";

export const metadata: Metadata = {
  title: "Financial Institutions | Talvrin",
  description:
    "Evidence you can examine. Research you can defend. Source-linked, rights-aware research for institutional research teams.",
};

export default function FinancialInstitutionsPage() {
  return (
    <>
      <HeroSection />
      <PromiseBar />
      <StakeholdersSection />
      <ChallengeSection />
      <PillarsSection />
      <EvidenceSection />
      <ExploreLinksSection />
      <WorkflowsSection />
      <CapabilityModelSection />
      <GovernanceSection />
      <QualificationSection />
      <ExclusionsSection />
      <FaqSection />
      <EnquirySection />
    </>
  );
}
