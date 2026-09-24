import type { Metadata } from "next";
import {
  HeroSection,
  SubnavSection,
  RoutesSection,
  GeneralEnquirySection,
  BeforeYouSubmitSection,
  SpecialistRoutesSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact | Talvrin",
  description:
    "Choose the contact route that best matches your question so it can reach the appropriate approved team or destination.",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <SubnavSection />
      <RoutesSection />
      <GeneralEnquirySection />
      <BeforeYouSubmitSection />
      <SpecialistRoutesSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
