import type { Metadata } from "next";
import {
  HeroSection,
  PageNavSection,
  ActiveIncidentsSection,
  ComponentsSection,
  WhatStatusMeansSection,
  HistorySection,
  StillNeedHelpSection,
  FaqSection,
} from "@/components/system-status";

export const metadata: Metadata = {
  title: "System Status | Talvrin Support",
  description:
    "A public view of operational health, active incidents, and planned maintenance for approved Talvrin customer-facing services.",
};

export default function SystemStatusPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <ActiveIncidentsSection />
      <ComponentsSection />
      <WhatStatusMeansSection />
      <HistorySection />
      <StillNeedHelpSection />
      <FaqSection />
    </>
  );
}
