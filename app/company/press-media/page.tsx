import type { Metadata } from "next";
import {
  HeroSection,
  SubnavSection,
  QuickFactsSection,
  NewsroomSection,
  MediaEnquirySection,
  FaqSection,
  FinalCtaSection,
} from "@/components/press-media";

export const metadata: Metadata = {
  title: "Press and Media | Talvrin",
  description:
    "Verified information and approved resources for journalists, editors, analysts, producers, and other media professionals.",
};

export default function PressMediaPage() {
  return (
    <>
      <HeroSection />
      <SubnavSection />
      <QuickFactsSection />
      <NewsroomSection />
      <MediaEnquirySection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
