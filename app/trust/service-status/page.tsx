import type { Metadata } from "next";
import HeroSection from "@/components/service-status/HeroSection";
import PageNavSection from "@/components/service-status/PageNavSection";
import FaqSection from "@/components/service-status/FaqSection";
import {
  ServiceHealthSection,
  StatusVocabularySection,
  ActiveIncidentsSection,
  PlannedMaintenanceSection,
  IncidentRecordSection,
  ReliabilityMetricsSection,
  HistorySection,
  MethodologySection,
  TrustLinksSection,
  FinalCtaSection,
} from "@/components/service-status/Sections";

export const metadata: Metadata = {
  title: "Service Status | Talvrin Trust",
  description:
    "Current status of Talvrin services: availability, active incidents and planned maintenance from governed operational status sources.",
};

export default function ServiceStatusPage() {
  return (
    <>
      <HeroSection />
      <PageNavSection />
      <ServiceHealthSection />
      <StatusVocabularySection />
      <ActiveIncidentsSection />
      <PlannedMaintenanceSection />
      <IncidentRecordSection />
      <ReliabilityMetricsSection />
      <HistorySection />
      <MethodologySection />
      <TrustLinksSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
