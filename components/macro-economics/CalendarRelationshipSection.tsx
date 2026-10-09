import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import ClaimTable, { type ClaimRow } from "./ClaimTable";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const rows: ClaimRow[] = [
  {
    label: "Link to Economic Calendar when released.",
    explains: "Link to Economic Calendar when released.",
    assumes:
      "Event feed provider, coverage breadth, timezone defaults, filters, alerts, consensus, forecasts, prior/revised values, surprise metrics, export/subscription behavior.",
  },
  {
    label: "Explain that scheduled economic events can be research entry points.",
    explains: "Explain that scheduled economic events can be research entry points.",
    assumes: "Exact calendar UX, schedule completeness, update latency, notification channels.",
  },
  {
    label: "Use a descriptive CTA such as Explore Economic Calendar.",
    explains: "Use a descriptive CTA such as Explore Economic Calendar.",
    assumes: "Any route until approved by the Route Registry.",
  },
];

export default function CalendarRelationshipSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">Economic Calendar Relationship</SectionEyebrow>
          <SectionHeading>
            Economic Calendar is a separate destination. This page explains the relationship, not
            the feed.
          </SectionHeading>
          <SectionLede className="max-w-[820px] sm:text-base sm:leading-7">
            Scheduled economic events can be research entry points. Macro &amp; Economics links to
            Economic Calendar when released, without inventing its coverage, timing, or interaction
            behavior.
          </SectionLede>
        </Reveal>

        <div className="mt-10">
          <ClaimTable
            rows={rows}
            showBadge={false}
            headings={["Allowed on this page", "Registry-gated / not assumed"]}
          />
        </div>

        <Reveal delay={0.2}>
          <Link
            href="/research/economic-calendar"
            className="mt-6 inline-block text-sm font-semibold text-accent-violet hover:underline"
          >
            Explore Economic Calendar →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
