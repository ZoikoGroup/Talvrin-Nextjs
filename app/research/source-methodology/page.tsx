import type { Metadata } from "next";
import {
  HeroSection,
  MethodStepsSection,
  SourceClassesSection,
  VerificationSection,
  VisibleProofSection,
  TimeRevisionSection,
  RightsCoverageSection,
  FaqSection,
  CtaSection,
} from "@/components/source-methodology";

export const metadata: Metadata = {
  title: "Source Methodology | Talvrin",
  description:
    "How Talvrin finds, assesses, validates and presents sources so every published fact can be examined in context.",
};

export default function SourceMethodologyPage() {
  return (
    <main>
      <HeroSection />
      <MethodStepsSection />
      <SourceClassesSection />
      <VerificationSection />
      <VisibleProofSection />
      <TimeRevisionSection />
      <RightsCoverageSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
