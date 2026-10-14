import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

type Step = {
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  details: string;
  linkText?: string;
  linkHref?: string;
  note?: string;
};

const topSteps: Step[] = [
  {
    number: "01",
    badge: "STEP 01",
    title: "Ask",
    subtitle: "Start with a question worth investigating.",
    details: "A question or market / company / policy topic, with an optional context selector if released.",
    linkText: "Research Workspace →",
    linkHref: "/product/research-workspace",
  },
  {
    number: "02",
    badge: "STEP 02",
    title: "Discover",
    subtitle: "Find relevant sources and surrounding context.",
    details: "An evidence inventory with source types, attributions and availability disclaimers.",
    linkText: "Research Workspace →",
    linkHref: "/product/research-workspace",
  },
  {
    number: "03",
    badge: "STEP 03",
    title: "Inspect",
    subtitle: "Review what each source actually says.",
    details: "Source link, publication date, effective period, jurisdiction, version and evidence relationship.",
    linkText: "Evidence →",
    linkHref: "/product/evidence",
  },
];

const bottomSteps: Step[] = [
  {
    number: "04",
    badge: "STEP 04",
    title: "Build",
    subtitle: "Develop and preserve a reasoned research view.",
    details: "Citations, assumptions, unresolved issues, opposing evidence and a review date.",
    linkText: "Saved Research →",
    linkHref: "/saved-research",
  },
  {
    number: "05",
    badge: "STEP 05",
    title: "Monitor",
    subtitle: "Keep the relevant evidence under observation.",
    details: "Monitored scope and status, source freshness, and alert eligibility if confirmed.",
    linkText: "Monitoring →",
    linkHref: "/product/monitoring",
  },
  {
    number: "06",
    badge: "STEP 06",
    title: "Reassess",
    subtitle: "Revisit the view when evidence meaningfully changes.",
    details: "What changed, source context, potential relevance, open questions and last review.",
    note: "Change Detection — not yet released",
  },
];

function StepCard({ step }: { step: Step }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-[14px] border border-[#f6f5fb]/14 bg-[#f6f5fb]/[0.04] p-6 backdrop-blur-sm transition-all duration-200 hover:border-[#f6f5fb]/30 hover:bg-[#f6f5fb]/[0.07]">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-[28px] font-bold text-[#f6f5fb]/20">
            {step.number}
          </span>
          <span className="rounded-full bg-[#6c5ce7]/15 px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#b4a8ff]">
            {step.badge}
          </span>
        </div>

        <h3 className="mt-4 text-[19px] font-bold text-[#f6f5fb]">
          {step.title}
        </h3>

        <p className="mt-2 text-[15px] leading-snug text-[#f6f5fb]/72">
          {step.subtitle}
        </p>

        <p className="mt-3 text-[13px] leading-relaxed text-[#f6f5fb]/50">
          {step.details}
        </p>
      </div>

      <div className="mt-6 pt-2">
        {step.linkText && step.linkHref ? (
          <Link
            href={step.linkHref}
            className="inline-flex items-center text-[13px] font-semibold text-[#b4a8ff] transition-colors duration-150 hover:text-white"
          >
            {step.linkText}
          </Link>
        ) : (
          <span className="text-[12px] font-semibold text-[#f6f5fb]/40">
            {step.note}
          </span>
        )}
      </div>
    </div>
  );
}

export default function SixStepsSection() {
  return (
    <section className="bg-[#171335] py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header Block */}
        <div className="max-w-[800px]">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[1.2px] text-[#b98132]">
              THE SIX-STEP PROCESS
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl font-bold leading-[1.18] tracking-tight text-[#f6f5fb] sm:text-4xl lg:text-[38px]">
              Ask → Discover → Inspect → Build →
              <br />
              Monitor → Reassess.
            </h2>
          </Reveal>
        </div>

        {/* 4-column layout on large screens */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* Row 1 cards: Steps 01, 02, 03 */}
          <Reveal delay={0.15}>
            <StepCard step={topSteps[0]} />
          </Reveal>

          <Reveal delay={0.2}>
            <StepCard step={topSteps[1]} />
          </Reveal>

          <Reveal delay={0.25}>
            <StepCard step={topSteps[2]} />
          </Reveal>

          {/* Column 4: Large Image Card spanning 2 rows on desktop */}
          <Reveal delay={0.3} className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <div className="relative flex h-full min-h-[360px] w-full flex-col justify-center overflow-hidden rounded-[14px] border border-[#f6f5fb]/14 bg-[#f6f5fb]/[0.04] p-3 shadow-xl backdrop-blur-sm transition-all duration-200 hover:border-[#f6f5fb]/30 hover:bg-[#f6f5fb]/[0.06]">
              <div className="relative h-full min-h-[340px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/how-talvrin-works/six-steps-preview.png"
                  alt="Six-step evidence process overview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </Reveal>

          {/* Row 2 cards: Steps 04, 05, 06 */}
          <Reveal delay={0.35}>
            <StepCard step={bottomSteps[0]} />
          </Reveal>

          <Reveal delay={0.4}>
            <StepCard step={bottomSteps[1]} />
          </Reveal>

          <Reveal delay={0.45}>
            <StepCard step={bottomSteps[2]} />
          </Reveal>
        </div>

        {/* Footnote */}
        <Reveal delay={0.5} className="mt-8">
          <p className="text-[13px] leading-relaxed text-[#f6f5fb]/45">
            Every stage has its own empty, loading and unavailable states. None of the six steps silently submit or mutate your research.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
