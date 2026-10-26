import type { Metadata } from "next";
import {
  HeroSection,
  PageNavSection,
  RouteBySituationSection,
  SafetyNoticeSection,
  VerifiedContactSection,
  ReportFormSection,
  WhatHappensNextSection,
  SecurityVsOtherSupportSection,
  TrustSecuritySection,
  AnswerFirstFaqSection,
  CTASection,
} from "@/components/security-contact";

export const metadata: Metadata = {
  title: "Security Contact | Talvrin Support",
  description:
    "Report a potential Talvrin security weakness or other security concern through the approved security-owned channel.",
};

export default function SecurityContactPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <RouteBySituationSection />
      <SafetyNoticeSection />
      <VerifiedContactSection />
      <ReportFormSection />
      <WhatHappensNextSection />
      <SecurityVsOtherSupportSection />
      <TrustSecuritySection />
      <AnswerFirstFaqSection />
      <CTASection />
    </>
  );
}
