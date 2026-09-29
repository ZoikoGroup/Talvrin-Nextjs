import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const mayAssistWith = [
  "Discovering governed asset/source material",
  "Comparing governing documents or versions",
  "Summarizing evidence",
  "Explaining registry- or source-defined structure",
  "Identifying source or version changes",
  "Organizing evidence relationships",
];

export default function AiGovernanceSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="violet">AI Governance</SectionEyebrow>
          <SectionHeading>
            AI helps navigate governed evidence. It never becomes the holdings, benchmark, or
            recommendation.
          </SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,631px)] xl:items-start xl:gap-12">
          <Reveal delay={0.1}>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
              AI may assist with
            </p>
            <ul className="mt-4 flex flex-col gap-4">
              {mayAssistWith.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-slate-700">
                  <span className="text-accent-violet" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative aspect-[631/328] w-full overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/markets/funds-other-assets/funds-ai-governance-notebook.webp"
              alt="Two colleagues in conversation while one takes notes"
              fill
              sizes="(min-width: 1280px) 631px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[880px] text-sm leading-6 text-slate-600">
            If governed evidence is insufficient to answer a question, the interface says so — it
            does not fall back on generic knowledge about funds, ETFs, or other assets to fill the
            gap.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
