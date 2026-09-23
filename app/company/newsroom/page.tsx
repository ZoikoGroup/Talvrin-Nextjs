import type { Metadata } from "next";
import {
  HeroSection,
  SubnavSection,
  PublicationsSection,
  EditorialStandardsSection,
  CompanyContextSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/newsroom";

export const metadata: Metadata = {
  title: "Newsroom | Talvrin",
  description:
    "Verified updates and source-linked perspectives on Talvrin, public-market research, evidence, monitoring, and trust.",
};

export default function NewsroomPage() {
  return (
    <>
      <HeroSection />
      <SubnavSection />
      <PublicationsSection />
      <EditorialStandardsSection />
      <CompanyContextSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
