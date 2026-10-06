import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR, Pill } from "./shared";

const sourceFields = [
  { label: "Source A", value: "Issuing body — Doc v1" },
  { label: "Source B", value: "Issuing body — Doc v2" },
  { label: "Published", value: "Two dates, shown separately" },
  { label: "Jurisdiction", value: "As stated by source" },
  { label: "Version / state", value: "B supersedes A" },
  { label: "Rights / access", value: "Permitted use" },
];

export default function ProvenanceSection() {
  return (
    <section id="provenance" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] xl:grid-cols-[minmax(0,800px)_minmax(0,478px)] xl:justify-between">
        <div>
          <Reveal>
            <SectionIntro
              eyebrow="Provenance in Practice"
              title="A generated answer should never be a dead end."
            >
              Research question → AI-assisted explanation → supporting and contradicting evidence →
              source card → original source → back to research context.
            </SectionIntro>
          </Reveal>

          {/* Illustrative example only — every value below is generic, not a real source. */}
          <Reveal delay={0.1} className="mt-4">
            <div className="flex max-w-[760px] flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-5 sm:px-7 sm:pb-7 sm:pt-14">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-wide text-muted">
                  Research question — example
                </p>
                <Pill tone="neutral" className="font-semibold">Illustrative</Pill>
              </div>
              <p className="text-base font-semibold text-ink">
                What changed between these two official documents, and which differences matter to
                this research question?
              </p>

              <div className="flex flex-col gap-2 rounded-xl bg-surface px-5 pb-4 pt-5">
                <p className="text-xs font-bold uppercase tracking-wide text-accent-violet">
                  AI-assisted interpretation — example
                </p>
                <p className="text-sm leading-6 text-ink-soft">
                  Three wording changes are visible between the two source versions. Two alter timing
                  language; one changes stated scope. Review the linked source passages before relying
                  on this interpretation.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <span className="rounded-full bg-green-700/10 px-3 py-1.5 text-xs font-semibold text-green-700">
                  Supports — current approach
                </span>
                <span className="rounded-full bg-pink-800/10 px-3 py-1.5 text-xs font-semibold text-pink-800">
                  Contradicts — one prior statement
                </span>
              </div>

              <div className="border-t border-ink/10 pt-4">
                <p className="text-xs font-bold uppercase tracking-wide text-accent-amber">Source card</p>
                <dl className="mt-2.5 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                  {sourceFields.map((field) => (
                    <div key={field.label} className="flex flex-col gap-[3px]">
                      <dt className="text-[10px] font-bold uppercase tracking-wide text-muted">
                        {field.label}
                      </dt>
                      <dd className="text-sm font-semibold text-ink">{field.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-accent-violet">
                  <Link href="/product/evidence" className="hover:text-brand">
                    Inspect Evidence →
                  </Link>
                  <span>Compare Source Versions</span>
                  <span>Back to Research Context</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-4 max-w-[760px]">
            <p className="text-xs leading-5 text-muted">
              No fabricated source logos, publishers, timestamps, or jurisdictions appear here beyond
              this clearly labeled illustrative example.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-video overflow-hidden rounded-2xl lg:aspect-auto"
        >
          <Image
            src={`${IMAGE_DIR}/ai-principles-provenance-colleagues.webp`}
            alt="Two colleagues walking through an office reviewing a tablet"
            fill
            sizes="(min-width: 1280px) 478px, (min-width: 1024px) 360px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
