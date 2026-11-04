import type { Metadata } from "next";
import {
  HeroSection,
  PreferenceCenter,
  BehaviourSection,
  CTASection,
} from "@/components/cookie-preferences";

export const metadata: Metadata = {
  title: "Cookie Preferences | Talvrin",
  description:
    "Review and manage optional cookie choices for Talvrin. Optional categories stay off until you choose otherwise.",
};

export default function CookiePreferencesPage() {
  return (
    <>
      <HeroSection />
      <PreferenceCenter />
      <BehaviourSection />
      <CTASection />
    </>
  );
}
