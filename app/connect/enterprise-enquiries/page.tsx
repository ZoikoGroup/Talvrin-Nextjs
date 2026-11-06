import type { Metadata } from "next";
import {
  HeroSection,
  PageNavSection,
  TeamFitSection,
  GovernanceSection,
  CapabilityTruthSection,
  EnquiryFormSection,
  WhatHappensNextSection,
  FaqSection,
  OtherRoutesSection,
  CTASection,
} from "@/components/enterprise-enquiries";

export const metadata: Metadata = {
  title: "Enterprise Enquiries | Talvrin",
  description:
    "Discuss evidence-linked public-market research for professional and institutional teams — fit, governance, and deployment considerations.",
};

export default function EnterpriseEnquiriesPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <TeamFitSection />
      <GovernanceSection />
      <CapabilityTruthSection />
      <EnquiryFormSection />
      <WhatHappensNextSection />
      <FaqSection />
      <OtherRoutesSection />
      <CTASection />
    </>
  );
}
