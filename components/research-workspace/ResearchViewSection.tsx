import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const viewParts = [
  {
    title: "Research question",
    body: "The exact scoped question, object, as-of period and related jurisdiction.",
  },
  {
    title: "Working thesis",
    body: "A clearly labeled, optional and editable hypothesis — never auto-generated as fact.",
  },
  {
    title: "Supporting evidence",
    body: "Source-linked items with relevance notes and provenance.",
  },
  {
    title: "Unknowns & assumptions",
    body: "Explicit, unresolved source, coverage or temporal gaps.",
  },
  {
    title: "Change log",
    body: "A proposed view-revision history with reason and source links, where supported.",
  },
  {
    title: "Human judgment",
    body: "The user's own interpretation, kept separate from AI-generated guidance.",
  },
];

const states = [
  {
    label: "No results",
    tone: "border-gray-600/25 text-gray-600",
    body: "Shown only if a query actually executed; suggests scope edits rather than a dead end.",
    rule: "“No evidence was found in the selected scope.”",
  },
  {
    label: "Stale source",
    tone: "border-accent-amber/30 text-accent-amber",
    body: "A timestamp plus caution, pointing to the latest verified record where available.",
    rule: "Age-aware, never silently refreshed.",
  },
  {
    label: "Contradictory sources",
    tone: "border-accent-violet/30 text-accent-violet",
    body: "Both sources and their contextual differences stay visible.",
    rule: "Never silently resolved.",
  },
  {
    label: "Restricted rights",
    tone: "border-pink-800/30 text-pink-800",
    body: "Only permitted metadata and a safe access explanation are exposed.",
    rule: "No protected-content leakage.",
  },
  {
    label: "Service unavailable",
    tone: "border-gray-600/20 text-gray-600",
    body: "A neutral failure with retry and safe documentation routes.",
    rule: "No invented uptime claims.",
  },
];

export default function ResearchViewSection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Research View</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading>A reviewable view, not an automatic verdict.</SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600">
            A research view is a durable, human-readable interpretation of
            available evidence — never an automatically authoritative market
            call.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-ink/10 bg-white sm:mt-12 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_315px]"
        >
          <dl className="grid grid-cols-1 gap-x-8 gap-y-6 p-6 sm:grid-cols-2 sm:p-8 md:grid-cols-3">
            {viewParts.map((part) => (
              <div key={part.title} className="min-w-0">
                <dt className="text-base font-bold text-ink">{part.title}</dt>
                <dd className="mt-1.5 text-sm leading-5 text-gray-600">{part.body}</dd>
              </div>
            ))}
          </dl>
          <div className="relative aspect-[315/222] w-full sm:aspect-[16/7] lg:aspect-auto lg:min-h-[222px]">
            <Image
              src="/images/product/research-workspace/research-workspace-research-view-analysts.webp"
              alt="Two analysts reviewing material together on a tablet"
              fill
              sizes="(min-width: 1280px) 315px, (min-width: 1024px) 280px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-12 text-xs font-bold tracking-wide text-gray-600 sm:mt-14">
            STATES &amp; RECOVERY — NO GAP IS FILLED WITH INVENTED EVIDENCE
          </p>
        </Reveal>
        <ul className="mt-3">
          {states.map((state, index) => (
            <Reveal
              as="li"
              key={state.label}
              delay={0.05 * (index + 1)}
              className="grid grid-cols-1 gap-x-4 gap-y-2 border-b border-ink/10 py-4 md:grid-cols-[170px_minmax(0,1fr)_minmax(0,0.7fr)] md:items-start"
            >
              <span
                className={clsx(
                  "inline-flex w-fit items-center justify-center rounded-md border bg-white px-4 py-1.5 text-center text-xs font-bold md:w-full",
                  state.tone
                )}
              >
                {state.label}
              </span>
              <p className="text-sm leading-6 text-gray-600 sm:text-base">{state.body}</p>
              <p className="text-sm font-semibold leading-6 text-ink">{state.rule}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
