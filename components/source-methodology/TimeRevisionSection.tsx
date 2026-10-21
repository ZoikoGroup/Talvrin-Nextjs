import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const clocks = [
  {
    title: "Valid / economic time",
    body: "When a fact applied — fiscal period, measurement date or legal effective window. The accounting period is never converted into a publication date.",
  },
  {
    title: "Market publication time",
    body: "When the issuer, exchange or authority made the version public — distinct from the filing of a later amendment.",
  },
];

const scenarios = [
  {
    scenario: "Restated annual report",
    treatment:
      "Original and amended record are both identified; the current view uses the latest admissible evidence, while the earlier as-of view preserves what was published at the time, labeled as revised.",
  },
  {
    scenario: "Source later retracts",
    treatment:
      "Retraction date and affected claims are marked; the item is removed from verified results and any dependent calculations.",
  },
  {
    scenario: "Two official records differ",
    treatment:
      "Both records and their scope are kept distinct — never averaged, voted on, or replaced with whichever is more favorable.",
  },
  {
    scenario: "Late-arriving document",
    treatment:
      "The valid period is backfilled, but the system-recorded time stays the actual ingest date — preventing a retroactive “known then” claim.",
  },
  {
    scenario: "Source URL breaks",
    treatment:
      "Permitted metadata is retained, the offline status and last-verified date are shown, and content is archived only where rights allow.",
  },
  {
    scenario: "Entity or symbol change",
    treatment:
      "Resolves to the persistent entity’s identity and lineage — a former symbol is a search alias, not proof of economic continuity.",
  },
];

export default function TimeRevisionSection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:gap-2.5 xl:grid-cols-[minmax(0,1fr)_421px]">
          <div className="flex flex-col">
            <Reveal>
              <SectionEyebrow>Time &amp; Revision</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading className="max-w-[760px]">
                The same number can be accurate then, and out of date now.
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-[760px] text-base leading-7 text-gray-600">
                Three separate clocks are tracked for every record — never
                collapsed into one ambiguous status.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2.5 lg:mt-auto lg:pt-10">
              {clocks.map((clock, index) => (
                <Reveal
                  key={clock.title}
                  delay={0.05 * (index + 3)}
                  className="rounded-2xl border border-ink/10 bg-white p-5 sm:p-6"
                >
                  <h3 className="text-base font-bold text-ink">{clock.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{clock.body}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal
            delay={0.2}
            className="relative hidden w-full overflow-hidden rounded-2xl border border-ink/10 bg-white sm:block sm:aspect-[16/8] lg:aspect-auto lg:min-h-[334px]"
          >
            <Image
              src="/images/research/source-methodology/sm-time-revision-desk.webp"
              alt="A manager and two colleagues reviewing work on a laptop at a desk"
              fill
              sizes="(min-width: 1280px) 421px, (min-width: 1024px) 340px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="hidden grid-cols-[220px_minmax(0,1fr)] gap-x-4 pb-3 text-[11px] font-bold uppercase tracking-widest text-slate-700 md:grid">
            <span>Scenario</span>
            <span>Required treatment</span>
          </div>
          <dl>
            {scenarios.map((row, index) => (
              <Reveal
                key={row.scenario}
                delay={0.04 * (index + 1)}
                className="grid grid-cols-1 gap-x-4 gap-y-2 border-b border-ink/10 py-4 md:grid-cols-[220px_minmax(0,1fr)] md:items-start"
              >
                <dt className="inline-flex w-fit items-center justify-center rounded-md border border-ink/20 bg-white px-4 py-1.5 text-center text-xs font-bold text-ink md:w-full">
                  {row.scenario}
                </dt>
                <dd className="text-sm leading-6 text-slate-700 sm:text-[15px]">{row.treatment}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
