import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const mayAssistWith = [
  "Search and evidence discovery",
  "Source summarization",
  "Comparison across sources",
  "Change identification",
  "Research organization",
  "Explanation",
  "Contradiction surfacing",
];

const mustNotPresent = [
  "An authoritative source",
  "A guaranteed fact",
  "Investment advice",
  "A buy / sell / hold recommendation",
  "A substitute for source inspection",
  "A guarantee of completeness or accuracy",
];

export default function AiGovernanceSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">AI Governance</SectionEyebrow>
          <SectionHeading>AI helps you navigate the evidence. It does not become the evidence.</SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-stretch">
          <Reveal delay={0.15} className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <p className="text-sm font-bold text-accent-violet">Talvrin AI may assist with</p>
              <ul className="mt-4 space-y-3">
                {mayAssistWith.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink/80">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-violet" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold text-ink">Talvrin must not present AI output as</p>
              <ul className="mt-4 space-y-3">
                {mustNotPresent.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full border border-slate-400"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal
            delay={0.25}
            className="relative min-h-[280px] overflow-hidden rounded-2xl border border-ink/8 lg:min-h-0"
          >
            <Image
              src="/images/home/Container (18).png"
              alt="Analyst reviewing evidence on a large screen in a glass-walled office"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
