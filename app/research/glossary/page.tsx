import type { Metadata } from "next";
import { GlossaryBrowser, ResearchRecordSection, CtaSection } from "@/components/glossary";

export const metadata: Metadata = {
  title: "Financial Market Glossary | Talvrin",
  description:
    "Market terminology, financial metrics and evidence labels with definitions that distinguish context, methodology and limitations.",
};

export default function GlossaryPage() {
  return (
    <main>
      <GlossaryBrowser />
      <ResearchRecordSection />
      <CtaSection />
    </main>
  );
}
