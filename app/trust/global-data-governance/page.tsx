import type { Metadata } from "next";
import {
  HeroSection,
  PageNavSection,
  DoctrineSection,
  WhatItMeansSection,
  GovernanceModelSection,
  JurisdictionSection,
  CoverageSection,
  RightsSection,
  PrivacySecuritySection,
  LocalizationSection,
  ResidencySection,
  ChangeModelSection,
  AiSection,
  EnterpriseSection,
  HandoffsSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/global-data-governance";

export const metadata: Metadata = {
  title: "Global Data Governance | Talvrin Trust",
  description:
    "Global by architecture. Governed by context. How Talvrin keeps jurisdiction, rights, privacy, security, coverage and operational state explicit across markets.",
};

export default function GlobalDataGovernancePage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <DoctrineSection />
      <WhatItMeansSection />
      <GovernanceModelSection />
      <JurisdictionSection />
      <CoverageSection />
      <RightsSection />
      <PrivacySecuritySection />
      <LocalizationSection />
      <ResidencySection />
      <ChangeModelSection />
      <AiSection />
      <EnterpriseSection />
      <HandoffsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
