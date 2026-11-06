import type { Metadata } from "next";
import {
  HeroSection,
  StatusSection,
  CategoriesSection,
  InventorySection,
  FaqSection,
  PlainTerms,
} from "@/components/cookies";
import CTASection from "@/components/cookie-preferences/CTASection";

export const metadata: Metadata = {
  title: "Cookies | Talvrin",
  description:
    "Learn how Talvrin uses cookies and similar technologies, which categories are deployed today, and how to manage your choices.",
};

export default function CookiesPage() {
  return (
    <>
      <HeroSection />
      <StatusSection />
      <CategoriesSection />
      <InventorySection />
      <FaqSection />
      <PlainTerms />
      <CTASection
        heading="Ready to set your choices?"
        body="Open Cookie Preferences to review or change optional categories, read the full Privacy Notice, or reach an authorized assistance route — don't assume real-time support here."
        primary={{ label: "Open Cookie Preferences", href: "/legal/cookie-preferences" }}
      />
    </>
  );
}
