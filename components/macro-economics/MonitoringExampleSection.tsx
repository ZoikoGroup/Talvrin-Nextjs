import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import ClaimTable, { type ClaimRow } from "./ClaimTable";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const rows: ClaimRow[] = [
  {
    label: "Research View",
    explains: "U.K. Inflation → Monetary Policy Outlook.",
    assumes: "Source-grounded relationship; not a prediction.",
  },
  {
    label: "Official Release",
    explains: "NEW — official inflation release.",
    assumes: "Source identity + publication + reference period + jurisdiction.",
  },
  {
    label: "Central-Bank Source",
    explains: "UPDATED — central-bank communication.",
    assumes: "Institution + publication time + version + jurisdiction.",
  },
  {
    label: "Fiscal-Policy Context",
    explains: "UNCHANGED — fiscal-policy evidence.",
    assumes: "Source remains reviewable; no unnecessary alerting.",
  },
  {
    label: "Potential Impact",
    explains: "High / medium only if governed product concept exists.",
    assumes: "No forecast certainty or trade implication.",
  },
];

export default function MonitoringExampleSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">Source-Grounded Monitoring Example</SectionEyebrow>
          <SectionHeading>Markets move. More importantly, the evidence moves.</SectionHeading>
          <SectionLede className="max-w-[820px] sm:text-base sm:leading-7">
            U.K. Inflation → Monetary Policy Outlook — an illustrative, source-grounded research
            view. It shows a relationship between evidence, not a forecast of a policy decision or
            market outcome.
          </SectionLede>
        </Reveal>

        <div className="mt-10">
          <ClaimTable
            rows={rows}
            showHeadings={false}
            badgeClassName="border-ink/20 bg-surface text-ink"
          />
        </div>

        <Reveal
          delay={0.2}
          className="mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-5"
        >
          <Link
            href="/product/monitoring"
            className="inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-2"
          >
            Review Changes
          </Link>
          <Link
            href="/product/evidence"
            className="inline-flex items-center justify-center text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
          >
            View Evidence Timeline →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
