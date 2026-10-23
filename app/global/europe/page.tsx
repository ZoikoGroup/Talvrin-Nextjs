import type { Metadata } from "next";
import {
  HeroSection,
  AuthoritySection,
  ScopeSection,
  EuDistinctionSection,
  AvailabilitySection,
  FaqSection,
  FinalCtaSection,
} from "@/components/europe";

export const metadata: Metadata = {
  title: "Europe | Talvrin",
  description:
    "European market research coverage: countries, institutions and source provenance, stated jurisdiction by jurisdiction.",
};

export default function EuropePage() {
  return (
    <>
      <HeroSection />
      <AuthoritySection />
      <ScopeSection />
      <EuDistinctionSection />
      <AvailabilitySection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
