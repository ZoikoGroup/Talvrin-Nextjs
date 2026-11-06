import type { Metadata } from "next";
import {
  HeroSection,
  PageNavSection,
  FitPrinciplesSection,
  PartnershipAreasSection,
  OtherRoutesSection,
  ProgramTruthSection,
  EnquiryFormSection,
  WhatHappensNextSection,
  FaqSection,
  RelatedRoutesSection,
  CTASection,
} from "@/components/partnerships";

export const metadata: Metadata = {
  title: "Partnerships | Talvrin",
  description:
    "Talvrin welcomes partnership conversations that can strengthen evidence-led public-market research, responsible data use, institutional workflows, or complementary technology.",
};

export default function PartnershipsPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <FitPrinciplesSection />
      <PartnershipAreasSection />
      <OtherRoutesSection />
      <ProgramTruthSection />
      <EnquiryFormSection />
      <WhatHappensNextSection />
      <FaqSection />
      <RelatedRoutesSection />
      <CTASection />
    </>
  );
}

