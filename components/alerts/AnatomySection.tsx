import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const pipeline = [
  "Source Event",
  "Eligibility Check",
  "Alert Event Created",
  "Dedupe / Grouping",
  "Delivery Attempt",
  "User Opens Alert",
  "Review Handoff",
];

const exampleFields = [
  {
    label: "Event title",
    value: "Evidence change detected — U.K. inflation & monetary policy outlook",
  },
  {
    label: "Why this alert",
    value: "Monitoring condition met — 3 governed evidence changes since last review",
  },
  { label: "Research context", value: "U.K. Inflation → Monetary Policy Outlook" },
  { label: "Source event", value: "Monitoring event · official inflation release" },
  { label: "Triggered time", value: "Example timestamp — format follows locale/time policy" },
  { label: "Delivered status", value: "Delivered — verified by notification service" },
  { label: "Monitoring state", value: "UPDATED — pending human review" },
  { label: "Acknowledgement", value: "Unacknowledged — independent from Monitoring review state" },
];

export default function AnatomySection() {
  return (
    <section id="alert-example" className="scroll-mt-20 bg-ink py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">Anatomy of an Alert Event</SectionEyebrow>
          <SectionHeading inverted>How an alert reaches you — and how to verify it.</SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="mt-9 flex flex-wrap items-center gap-2.5">
            {/* Each arrow lives inside its step's <li> so a wrapped row never starts with an orphaned arrow. */}
            {pipeline.map((step, index) => (
              <li key={step} className="flex items-center gap-2.5">
                <span className="whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white">
                  {step}
                </span>
                {index < pipeline.length - 1 && (
                  <span className="text-white/30" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-11 text-xs font-bold uppercase tracking-wide text-white/50">
            Example Alert Event
          </p>
        </Reveal>

        <div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,840px)_minmax(0,1fr)]">
          <Reveal
            delay={0.2}
            className="grid grid-cols-1 gap-x-6 gap-y-5 rounded-2xl bg-surface px-6 pb-7 pt-8 sm:grid-cols-2 sm:px-7 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"
          >
            {exampleFields.map((field) => (
              <div key={field.label}>
                <p className="text-xs font-bold tracking-wide text-slate-600">{field.label}</p>
                <p className="mt-1 text-base font-semibold text-ink">{field.value}</p>
              </div>
            ))}
          </Reveal>

          <Reveal
            delay={0.25}
            className="relative aspect-[452/286] overflow-hidden rounded-2xl sm:aspect-[2/1] lg:aspect-auto lg:min-h-[286px]"
          >
            <Image
              src="/images/product/alerts/alerts-anatomy-review.webp"
              alt="Analyst marking up printed reports at a desk"
              fill
              sizes="(min-width: 1280px) 452px, (min-width: 1024px) 300px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
