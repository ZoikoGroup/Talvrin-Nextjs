import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const steps = ["Ask", "Discover", "Inspect", "Understand", "Build", "Monitor", "Reassess"];

const details = [
  {
    label: "Ask",
    description:
      "Begin with a market, issuer, security, economic event, policy issue, or research question — without forcing a country-first hierarchy.",
  },
  {
    label: "Discover",
    description:
      "Find relevant evidence and context, prioritizing governed sources across markets, jurisdictions, and source classes.",
  },
  {
    label: "Inspect",
    description:
      "Open and review underlying sources with identity, timing, version, rights, and jurisdiction intact.",
  },
  {
    label: "Understand",
    description:
      "See how evidence relates to the question — facts, normalization, Talvrin analysis, AI output, and notes stay separate.",
  },
  {
    label: "Build",
    description:
      "Develop and preserve a research view that retains cross-market evidence relationships.",
  },
  {
    label: "Monitor",
    description:
      "Watch the evidence and assumptions that matter, without treating every update as material.",
  },
  {
    label: "Reassess",
    description: "Return when the evidence base changes, with the prior evidence trail preserved.",
  },
];

export default function ResearchLoopSection() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Core Workflow</SectionEyebrow>
          <SectionHeading inverted>
            The Global Markets research loop, before the market-area tiles.
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1} className="mt-9 flex flex-wrap items-center gap-x-2 gap-y-3">
          {steps.map((step, index) => (
            <span key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-white/18 bg-white/6 px-4 py-2.5 text-xs font-semibold text-white">
                {step.toUpperCase()}
              </span>
              {index < steps.length - 1 && (
                <ArrowRight className="size-3.5 text-white/40" aria-hidden="true" />
              )}
            </span>
          ))}
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-x-7 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {details.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05} className="flex flex-col gap-1.5">
              <p className="text-xs font-bold uppercase tracking-wide text-accent-amber">
                {item.label}
              </p>
              <p className="text-sm leading-relaxed text-white/75">{item.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="relative mt-11 aspect-[1309/362] w-full overflow-hidden rounded-2xl bg-white">
          <Image
            src="/images/global-markets/global-markets-research-loop-meeting.webp"
            alt="Research team discussing evidence in an office lounge"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
