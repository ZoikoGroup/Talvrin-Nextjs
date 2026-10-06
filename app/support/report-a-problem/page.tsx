import type { Metadata } from "next";
import {
  ReportProvider,
  HeroSection,
  PageNavSection,
  WhatsGoingWrongSection,
  StatusCheckSection,
  ReportItSection,
  RelatedSupportSection,
  FaqSection,
} from "@/components/report-a-problem";

export const metadata: Metadata = {
  title: "Report a Problem | Talvrin Support",
  description:
    "Report a non-security problem with Talvrin. Tell us what you were trying to do, what happened, and where it happened — never include passwords, codes, or keys.",
};

export default function ReportAProblemPage() {
  return (
    <ReportProvider>
      <HeroSection />
      <PageNavSection />
      <WhatsGoingWrongSection />
      <StatusCheckSection />
      <ReportItSection />
      <RelatedSupportSection />
      <FaqSection />
    </ReportProvider>
  );
}
