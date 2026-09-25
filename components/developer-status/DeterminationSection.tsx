import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const rules = [
  {
    label: "[SOURCE]",
    body: "Overall status is calculated from the public component registry, active incident and maintenance records, and source health. Nobody types it in by hand.",
  },
  {
    label: "[FRESHNESS]",
    body: "Each status shows when the source last changed. If it passes the freshness threshold, it's labeled stale and loses any positive treatment.",
  },
  {
    label: "[TIME]",
    body: "All times are absolute and in UTC. Relative times like “2 min ago” are a helper, never the only timestamp.",
  },
  {
    label: "[SCOPE]",
    body: "Only approved public components appear. Regions or capabilities are shown only when confirmed, never inferred from architecture.",
  },
];

const states = [
  {
    title: "Operational",
    glyph: "✓",
    tone: "bg-green-500",
    body: "Source is current and the component is operating within public status policy.",
  },
  {
    title: "Degraded",
    glyph: "!",
    tone: "bg-yellow-700",
    body: "Service is available, but a material performance or function impact is confirmed.",
  },
  {
    title: "Partial outage",
    glyph: "◑",
    tone: "bg-accent-amber",
    body: "A subset of requests, capabilities, or scope is unavailable. Scope shown only when confirmed.",
  },
  {
    title: "Major outage",
    glyph: "✕",
    tone: "bg-orange-800",
    body: "Broad material unavailability, according to approved impact criteria.",
  },
  {
    title: "Maintenance",
    glyph: "◼",
    tone: "bg-accent-violet",
    body: "Planned work with current or expected impact. Never styled as an outage.",
  },
  {
    title: "Assessing / unknown",
    glyph: "?",
    tone: "bg-slate-600",
    body: "State or scope can't be verified yet. Never shown as green.",
  },
  {
    title: "Stale / source unavailable",
    glyph: "⌛",
    tone: "bg-slate-600",
    body: "Status source is past its freshness threshold or unavailable. Last-known state is labeled stale.",
  },
  {
    title: "Resolved",
    glyph: "✓",
    tone: "bg-ink",
    body: "Incident ended after recovery was validated. Used in history, not as current health.",
  },
];

export default function DeterminationSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="amber">How Status Is Determined</SectionEyebrow>
          <SectionHeading>
            If a state can&apos;t be verified, the page says so. It never defaults to green.
          </SectionHeading>
        </Reveal>

        {/* One panel of rules with the photo closing the row, as in the design. */}
        <Reveal delay={0.1} className="mt-9 overflow-hidden rounded-2xl bg-ink/10">
          <div className="-mb-px -mr-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[repeat(4,minmax(0,1fr))_minmax(0,255px)]">
            {rules.map((rule) => (
              <div
                key={rule.label}
                className="flex flex-col gap-2.5 border-b border-r border-ink/10 bg-white p-6"
              >
                <p className="font-mono text-xs font-bold tracking-wide text-accent-violet">
                  {rule.label}
                </p>
                <p className="text-sm leading-6 text-slate-700">{rule.body}</p>
              </div>
            ))}

            <div className="relative aspect-[3/2] w-full sm:col-span-2 lg:col-span-4 lg:aspect-[16/5] xl:col-span-1 xl:aspect-auto">
              <Image
                src="/images/developers/developer-status/developer-status-determination-detail.webp"
                alt="Colleagues talking in an office corridor"
                fill
                sizes="(min-width: 1280px) 255px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h3 className="mt-11 text-xl font-bold text-ink">State definitions</h3>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {states.map((state, index) => (
            <Reveal
              key={state.title}
              delay={index * 0.03}
              className="flex flex-col gap-2.5 rounded-xl border border-ink/10 bg-white px-5 py-4"
            >
              <p className="flex items-center gap-2.5">
                <span
                  className={clsx(
                    "flex size-5 shrink-0 items-center justify-center rounded-md text-xs font-bold text-white",
                    state.tone
                  )}
                  aria-hidden="true"
                >
                  {state.glyph}
                </span>
                <span className="text-base font-bold text-ink">{state.title}</span>
              </p>
              <p className="text-sm leading-5 text-slate-700">{state.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
