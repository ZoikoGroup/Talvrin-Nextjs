import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const coverageLevels = [
  {
    label: "Deep Coverage",
    tone: "border-accent-violet/30 bg-accent-violet/10 text-accent-violet",
    body: "High-confidence, production-supported research depth for the named market or domain.",
    example: "U.S. Treasuries · U.K. Gilts",
  },
  {
    label: "Supported",
    tone: "border-ink/20 bg-surface text-ink",
    body: "Production-supported but narrower than Deep Coverage.",
    example: "U.S. Equities",
  },
  {
    label: "Limited / Beta",
    tone: "border-accent-amber/40 bg-accent-amber/5 text-accent-amber",
    body: "Available with explicit limitations, clearly labeled.",
    example: "Eurozone Sovereign Debt",
  },
  {
    label: "Planned",
    tone: "border-ink/15 bg-surface text-gray-600",
    body: "Roadmap only — never presented as current coverage.",
    example: "Emerging Market FX",
  },
  {
    label: "Architecture-Ready",
    tone: "border-ink/15 bg-surface text-gray-600",
    body: "Platform architecture can support the category; no coverage claim implied.",
    example: "Additional jurisdictions",
  },
];

const pillars = [
  {
    title: "Evidence provenance",
    body: "Trace important outputs back to supporting material.",
  },
  {
    title: "Data rights",
    body: "Respect licensing, redistribution, access and permitted-use controls.",
  },
  {
    title: "Privacy",
    body: "Minimize collection — no raw research questions in public-page analytics.",
  },
  {
    title: "AI governance",
    body: "Keep model output subordinate to evidence and policy controls.",
  },
];

export default function CoverageTrustSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow>Coverage &amp; Trust</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[820px]">
            Global by architecture. Explicit about what&apos;s actually available.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600 sm:text-lg">
            Coverage expands through governed market, jurisdiction, source and
            licensing capabilities — stated separately from aspiration, never
            implied as universal.
          </p>
        </Reveal>

        <ul className="mt-8 sm:mt-12">
          {coverageLevels.map((level, index) => (
            <Reveal
              as="li"
              key={level.label}
              delay={0.05 * (index + 1)}
              className="grid grid-cols-1 gap-x-4 gap-y-2 border-b border-ink/10 py-4 sm:py-5 md:grid-cols-[150px_minmax(0,1fr)_minmax(0,0.7fr)] md:items-start"
            >
              <span
                className={clsx(
                  "inline-flex w-fit items-center justify-center rounded-md border px-4 py-1.5 text-center text-xs font-bold md:w-full",
                  level.tone
                )}
              >
                {level.label}
              </span>
              <p className="text-sm leading-6 text-gray-600 sm:text-base">{level.body}</p>
              <p className="text-sm font-semibold leading-6 text-ink">
                <span className="sr-only">Example: </span>
                {level.example}
              </p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 sm:mt-12 lg:grid-cols-4 lg:gap-10">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.05 * (index + 1)}>
              <span aria-hidden="true" className="block h-0.5 w-7 bg-accent-violet" />
              <h3 className="mt-5 text-base font-bold text-ink">{pillar.title}</h3>
              <p className="mt-2 max-w-[240px] text-sm leading-6 text-gray-600">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
