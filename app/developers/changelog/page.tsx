import type { Metadata } from "next";
import {
  HeroSection,
  ResourcePillsSection,
  ChangeStreamSection,
  DetailSpecimenSection,
  LabelsSection,
  OwnershipSection,
  SubscriptionsSection,
  FaqSection,
  KeepBuildingSection,
} from "@/components/changelog";

export const metadata: Metadata = {
  title: "Changelog | Talvrin",
  description:
    "Developer-facing changes across approved Talvrin developer surfaces, with impact, timing, required action, and links to authoritative documentation.",
};

export default function ChangelogPage() {
  return (
    <>
      <HeroSection />
      <ResourcePillsSection />
      <ChangeStreamSection />
      <DetailSpecimenSection />
      <LabelsSection />
      <OwnershipSection />
      <SubscriptionsSection />
      <FaqSection />
      <KeepBuildingSection />
    </>
  );
}
