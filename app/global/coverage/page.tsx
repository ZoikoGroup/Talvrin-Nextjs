import type { Metadata } from "next";
import {
  HeroSection,
  AuthoritySection,
  StatusesSection,
  RegionsSection,
  RecordFieldsSection,
  LimitationsSection,
  GovernanceSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/global-coverage";

export const metadata: Metadata = {
  title: "Global Coverage | Talvrin",
  description:
    "Global market coverage, evidence rights, and availability by jurisdiction — what is released, pending, or not yet available, region by region.",
};

export default function GlobalCoveragePage() {
  return (
    <>
      <HeroSection />
      <AuthoritySection />
      <StatusesSection />
      <RegionsSection />
      <RecordFieldsSection />
      <LimitationsSection />
      <GovernanceSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
