import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "./shared";

const steps = [
  "Research View",
  "Preserved State",
  "Resume",
  "Compare Evidence",
  "Reassess",
];

const attributes = [
  {
    label: "Research question",
    value: "Will services inflation stay contained into 2027?",
  },
  {
    label: "Subject reference",
    value: "Federal Reserve — FOMC policy guidance",
  },
  {
    label: "Saved / as-of",
    value: "02 Aug 2026 · 09:40 ET",
  },
  {
    label: "Source version",
    value: "FOMC Statement, Aug 2026 release",
  },
  {
    label: "Linked evidence refs",
    value: "3 cited sources",
  },
  {
    label: "Assumptions",
    value: "Stable services growth across regions",
  },
  {
    label: "Visibility scope",
    value: "Owner only",
  },
  {
    label: "Lifecycle state",
    value: "Saved — needs review",
    highlight: true,
  },
];

export default function PrimaryWorkflowSection() {
  return (
    <section className="relative overflow-hidden bg-[#171335] py-16 sm:py-20 lg:py-24">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(500px 360px at 85% 15%, rgba(108, 92, 231, 0.25), transparent 70%), radial-gradient(450px 300px at 15% 85%, rgba(185, 129, 50, 0.15), transparent 60%)",
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-12">
          {/* Left Column: Heading, Flow Steps, Object Card */}
          <div className="flex flex-col">
            <Reveal>
              <SectionEyebrow tone="amber">PRIMARY WORKFLOW</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#f6f5fb] sm:text-4xl lg:text-[38px] lg:leading-[1.2]">
                Research view → preserved state → resume → compare → reassess.
              </h2>
            </Reveal>

            {/* Workflow steps sequence */}
            <Reveal delay={0.1} className="mt-7">
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {steps.map((step, idx) => (
                  <div key={step} className="flex items-center gap-2 sm:gap-2.5">
                    <span className="inline-flex items-center rounded-full border border-[#f6f5fb]/20 bg-[#f6f5fb]/[0.06] px-3.5 py-1.5 text-xs font-semibold text-[#f6f5fb] backdrop-blur-sm sm:text-[13px]">
                      {step}
                    </span>
                    {idx < steps.length - 1 && (
                      <span className="text-xs font-bold text-[#b98132]" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div >
            </Reveal>

            {/* Example Card Container */}
            <Reveal delay={0.2} className="mt-9">
              <div className="mb-3 text-xs font-bold uppercase tracking-[1px] text-[#f6f5fb]/80">
                EXAMPLE SAVED RESEARCH OBJECT
              </div>

              <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl sm:p-7">
                {/* 8 attributes grid */}
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                  {attributes.map((attr) => (
                    <div key={attr.label} className="flex flex-col">
                      <span className="text-[11px] font-bold uppercase tracking-[0.5px] text-[#5d5a72]">
                        {attr.label}
                      </span>
                      <span
                        className={`mt-1 text-[15px] font-semibold leading-snug ${
                          attr.highlight
                            ? "text-[#b98132]"
                            : "text-[#171335]"
                        }`}
                      >
                        {attr.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card footer link */}
                <div className="mt-6 border-t border-[#171335]/10 pt-4">
                  <Link
                    href="/product/research-workspace"
                    className="inline-flex items-center text-[13px] font-semibold text-[#6c5ce7] transition-colors duration-200 hover:text-[#5b4fe0]"
                  >
                    Resume in Research Workspace →
                  </Link>
                </div>
              </div>

              <p className="mt-3 text-xs text-[#f6f5fb]/60">
                Illustrative saved research object — not a live source feed.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Visual Preview */}
          <Reveal delay={0.2} className="flex justify-center lg:justify-end">
            <div className="relative aspect-[480/591] w-full max-w-[480px] overflow-hidden rounded-2xl border border-white/10 bg-[#f6f5fb]/[0.04] p-1 shadow-2xl backdrop-blur-sm">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/saved-research/saved-research-workflow-object.webp"
                  alt="Saved research object workflow visualization"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
