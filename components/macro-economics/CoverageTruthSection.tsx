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

export default function CoverageTruthSection() {
  return (
    <section id="coverage-truth" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">Coverage Truth</SectionEyebrow>
          <SectionHeading>
            A Macro &amp; Economics label does not imply universal country or central-bank coverage.
          </SectionHeading>
          <SectionLede className="max-w-[820px] sm:text-base sm:leading-7">
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
                  "w-fit min-w-[160px] rounded-md border bg-surface px-4 py-1.5 text-center text-xs font-bold",
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

        {/* A wide band — it keeps the design's ratio at every width. */}
        <Reveal
          delay={0.15}
          className="relative mt-9 aspect-[1277/378] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/markets/macro-economics/macro-coverage-standing-discussion.webp"
            alt="Colleagues talking in a sunlit open-plan office"
            fill
            sizes="(min-width: 1310px) 1277px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
