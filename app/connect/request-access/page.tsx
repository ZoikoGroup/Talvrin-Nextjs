import type { Metadata } from "next";
import {
  HeroSection,
  PageNavSection,
  WhatAccessGivesSection,
  AccessFlowSection,
  WhatHappensNextSection,
  BoundariesSection,
  FaqSection,
  CTASection,
} from "@/components/request-access";

export const metadata: Metadata = {
  title: "Request Access | Talvrin",
  description:
    "Tell us how you plan to use Talvrin so we can route you to the right access path. Access is currently controlled.",
};

export default function RequestAccessPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <WhatAccessGivesSection />
      <AccessFlowSection />
      <WhatHappensNextSection />
      <BoundariesSection />
      <FaqSection />
      <CTASection />
    </>
  );
}
