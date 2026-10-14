import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const steps = ["Question", "Discover", "Inspect", "Build", "Monitor", "Reassess"];

const evidenceFields = [
  { label: "Source identity", value: "Federal Reserve" },
  { label: "Source class", value: "Primary source" },
  { label: "Document / section", value: "FOMC Statement" },
  { label: "Published", value: "28 Aug 2026 · 14:00 ET" },
  { label: "Effective / reference period", value: "FOMC cycle, Jul–Aug 2026" },
  { label: "Jurisdiction", value: "United States" },
  { label: "Version", value: "Current — not superseded" },
  { label: "Rights state", value: "Public · permitted use" },
];

export default function DifferentiatorSection() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-ink py-16 sm:py-20 lg:py-[88px]">
      {/* Image spans the left column's full height (eyebrow to card bottom) on desktop, as in Figma */}
      <Container className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-stretch lg:gap-x-10 xl:grid-cols-[minmax(0,720px)_minmax(0,527px)] xl:justify-between">
        <div className="min-w-0 lg:col-start-1 lg:row-start-1">
          <Reveal>
            <SectionEyebrow tone="amber">Primary Differentiator</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading inverted>
              Ask → Discover → Inspect → Build → Monitor → Reassess.
            </SectionHeading>
          </Reveal>

          <Reveal delay={0.2}>
            <ol className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3 sm:mt-10">
              {steps.map((step, index) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white">
                    {step}
                  </span>
                  {index < steps.length - 1 && (
                    <span aria-hidden="true" className="text-sm text-white/30">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-10 text-xs font-bold tracking-wide text-white/50 sm:mt-14">
              EXAMPLE EVIDENCE CARD
            </p>
            <div className="mt-3 rounded-2xl bg-surface px-5 pb-6 pt-6 sm:px-7 sm:pb-7 sm:pt-8">
              <dl className="grid grid-cols-1 gap-x-6 gap-y-4 min-[480px]:grid-cols-2 md:grid-cols-3">
                {evidenceFields.map((field) => (
                  <div key={field.label} className="min-w-0">
                    <dt className="text-xs font-bold tracking-wide text-gray-600">{field.label}</dt>
                    <dd className="mt-1 text-sm font-semibold text-ink sm:text-base">{field.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 border-t border-ink/10 pt-4">
                <Link
                  href="/product/evidence"
                  className="text-xs font-semibold text-accent-violet transition-colors hover:text-brand"
                >
                  Inspect Evidence →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-4 text-xs italic text-white/50 lg:col-start-1 lg:row-start-2">
          Illustrative evidence card — not live provider inventory.
        </p>

        <Reveal
          delay={0.2}
          className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:aspect-[16/10] lg:col-start-2 lg:row-start-1 lg:mt-0 lg:aspect-auto lg:h-full lg:min-h-[420px]"
        >
          <Image
            src="/images/product/research-workspace/research-workspace-differentiator-signing.webp"
            alt="Senior advisor explaining a document to a younger colleague who is taking notes"
            fill
            sizes="(min-width: 1280px) 527px, (min-width: 1024px) 420px, 100vw"
            className="object-cover object-[center_30%]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
