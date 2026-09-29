import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const states = [
  {
    label: "Deep Coverage",
    tone: "border-accent-violet/30 text-accent-violet",
    body: "High-confidence, production-supported research depth for the named market or domain.",
    status: "Pending Coverage Registry",
  },
  {
    label: "Supported",
    tone: "border-ink/25 text-ink",
    body: "Production-supported but narrower than Deep Coverage.",
    status: "Pending Coverage Registry",
  },
  {
    label: "Limited / Beta",
    tone: "border-accent-amber/30 text-accent-amber",
    body: "Available with explicit limitations, clearly labeled.",
    status: "Pending Coverage Registry",
  },
  {
    label: "Planned",
    tone: "border-slate-500/30 text-slate-600",
    body: "Roadmap only — never presented as current coverage.",
    status: "Pending public roadmap",
  },
  {
    label: "Architecture-Ready",
    tone: "border-slate-500/20 text-slate-600",
    body: "Platform can support the category; no coverage claim implied.",
    status: "Internal only",
  },
];

const dimensions = [
  {
    title: "Coverage state",
    body: "Deep Coverage · Supported · Limited/Beta · Planned · Architecture-ready.",
  },
  {
    title: "Data state",
    body: "Live · Delayed · Snapshot · Example — required on every displayed numeric datum.",
  },
  { title: "Access state", body: "Open · Entitlement required · Restricted · Unavailable." },
  { title: "Source freshness", body: "Current · Amended · Restated · Superseded · Stale/Unknown." },
  { title: "Entity confidence", body: "Resolved · Ambiguous · Changed · Unavailable." },
];

export default function CoverageTruthSection() {
  return (
    <section id="coverage-truth" className="scroll-mt-24 bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionEyebrow tone="violet">Coverage Truth</SectionEyebrow>
          <SectionHeading>
            An Equities label does not imply universal stock-market coverage.
          </SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-7">
            Status comes from the governed Coverage Registry — never a hard-coded evergreen claim.
          </SectionLede>
        </Reveal>

        <div className="mt-9">
          {states.map((state, index) => (
            <Reveal
              key={state.label}
              delay={index * 0.04}
              className="grid grid-cols-1 gap-2 border-b border-ink/10 py-5 md:grid-cols-[192px_minmax(0,1fr)_minmax(0,220px)] md:items-start md:gap-4"
            >
              <span
                className={clsx(
                  "w-fit min-w-[160px] rounded-md border bg-white px-4 py-1.5 text-center text-xs font-bold",
                  state.tone
                )}
              >
                {state.label}
              </span>
              <p className="text-base text-slate-600">{state.body}</p>
              <p className="text-sm font-semibold text-ink">{state.status}</p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.15}
          className="relative mt-9 aspect-[1277/421] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/markets/equities/equities-coverage-boardroom.webp"
            alt="Presenter pointing at a chart during a boardroom meeting"
            fill
            sizes="(min-width: 1310px) 1277px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {dimensions.map((dimension, index) => (
            <Reveal
              key={dimension.title}
              delay={index * 0.04}
              className="rounded-xl border border-ink/10 bg-white px-5 py-4"
            >
              <h3 className="text-sm font-bold text-ink">{dimension.title}</h3>
              <p className="mt-1.5 text-sm leading-5 text-slate-600">{dimension.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
