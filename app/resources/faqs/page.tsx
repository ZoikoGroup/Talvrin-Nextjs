import type { Metadata } from "next";
import {
  HeroSection,
  SectionNav,
  SearchNoticeSection,
  FeaturedQuestionsSection,
  BrowseByCategorySection,
  AboutSection,
  ResearchSection,
  AiSection,
  MarketsSection,
  TrustSection,
  BoundariesSection,
  GettingHelpSection,
  UnansweredSection,
  CtaSection,
} from "@/components/faqs";

export const metadata: Metadata = {
  title: "FAQs | Talvrin",
  description:
    "Direct answers about what Talvrin is, who it is for, how evidence and AI are handled, how research stays connected to change, and where to find deeper guidance.",
};

export default function FaqsPage() {
  return (
    <>
      <HeroSection />
      <SectionNav />
      <SearchNoticeSection />
      <FeaturedQuestionsSection />
      <BrowseByCategorySection />
      <AboutSection />
      <ResearchSection />
      <AiSection />
      <MarketsSection />
      <TrustSection />
      <BoundariesSection />
      <GettingHelpSection />
      <UnansweredSection />
      <CtaSection />
    </>
  );
}
