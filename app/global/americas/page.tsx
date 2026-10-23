import type { Metadata } from "next";
import {
  HeroSection,
  AuthoritySection,
  RegionOverviewSection,
  RecordFieldsSection,
  NorthAmericaSection,
  LatinAmericaSection,
  LanguageSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/americas";

export const metadata: Metadata = {
  title: "Americas | Talvrin",
  description:
    "Market coverage across the Americas: source evidence and jurisdiction transparency, stated jurisdiction by jurisdiction.",
};

export default function AmericasPage() {
  return (
    <>
      <HeroSection />
      <AuthoritySection />
      <RegionOverviewSection />
      <RecordFieldsSection />
      <NorthAmericaSection />
      <LatinAmericaSection />
      <LanguageSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
