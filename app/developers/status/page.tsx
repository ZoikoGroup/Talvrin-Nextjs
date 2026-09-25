import type { Metadata } from "next";
import {
  HeroSection,
  ResourcePillsSection,
  ComponentStatusSection,
  DiagnosticSection,
  DeterminationSection,
  NotificationsSection,
  FaqSection,
  KeepBuildingSection,
} from "@/components/developer-status";

export const metadata: Metadata = {
  title: "Developer Status | Talvrin",
  description:
    "Current operational status for approved public Talvrin developer-facing services, incidents, and maintenance.",
};

export default function DeveloperStatusPage() {
  return (
    <>
      <HeroSection />
      <ResourcePillsSection />
      <ComponentStatusSection />
      <DiagnosticSection />
      <DeterminationSection />
      <NotificationsSection />
      <FaqSection />
      <KeepBuildingSection />
    </>
  );
}
