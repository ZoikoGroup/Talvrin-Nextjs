import type { Metadata } from "next";
import {
  HeroSection,
  PageNavSection,
  SituationSection,
  ApprovedFactsSection,
  MediaResourcesSection,
  EnquiryFormSection,
  WhatHappensNextSection,
  FaqSection,
  OtherRoutesSection,
  CTASection,
} from "@/components/press-enquiries";

export const metadata: Metadata = {
  title: "Press Enquiries | Talvrin",
  description:
    "Find approved Talvrin information and request a media response through a verified press pathway, where available.",
};

export default function PressEnquiriesPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <SituationSection />
      <ApprovedFactsSection />
      <MediaResourcesSection />
      <EnquiryFormSection />
      <WhatHappensNextSection />
      <FaqSection />
      <OtherRoutesSection />
      <CTASection />
    </>
  );
}
