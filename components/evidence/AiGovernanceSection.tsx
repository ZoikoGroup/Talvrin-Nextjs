import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const capabilities = [
  {
    title: "Discovery assistance",
    description: "AI may help identify potentially relevant information.",
    boundary: "A discovery result is never authoritative merely because AI found it.",
  },
  {
    title: "Summarization",
    description: "AI may summarize source material where permitted.",
    boundary: "Summaries are labeled AI-assisted; the source remains separately inspectable.",
  },
  {
    title: "Insufficient / unavailable evidence",
    description:
      "AI can state that evidence is insufficient, mixed, or that a source is unavailable.",
    boundary: "AI never reconstructs missing or restricted source content as if it were the source.",
  },
  {
    title: "Comparison",
    description: "AI may help compare documents or versions.",
    boundary: "Comparisons retain source and version identity.",
  },
];

export default function AiGovernanceSection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">AI Governance</SectionEyebrow>
          <SectionHeading>AI can help navigate the evidence. It does not become the evidence.</SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,645px)]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {capabilities.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6"
              >
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-5 text-slate-700">{item.description}</p>
                <p className="mt-2.5 border-t border-ink/10 pt-3 text-xs leading-5 text-slate-600">
                  {item.boundary}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.15}
            className="relative aspect-[645/417] overflow-hidden rounded-2xl border border-ink/10 xl:aspect-auto"
          >
            <Image
              src="/images/product/evidence/evidence-ai-governance-team.webp"
              alt="Analysts reviewing documents and a laptop together at a desk"
              fill
              sizes="(min-width: 1280px) 645px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
