import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const steps = [
  { title: "Question", body: "A market, company or policy question worth investigating." },
  { title: "Source", body: "An identifiable publisher, document or dataset is located." },
  { title: "Extracted observation", body: "What the source actually states, kept close to the original wording." },
  {
    title: "Contextual interpretation",
    body: "Timing, jurisdiction and relationships are added — and labeled as interpretation.",
  },
];

export default function EvidenceChainSection() {
  return (
    <section className="bg-ink py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Evidence Chain</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading inverted className="max-w-[800px]">
            From a question to a source-linked research view.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-white/70">
            Each step stays visible and traceable — an interpretation never
            silently replaces the material it came from.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-2.5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          <ol className="contents">
            {steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={0.05 * (index + 2)}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="inline-block rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs font-bold tracking-wide text-indigo-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3.5 text-base font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-5 text-white/60">{step.body}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal
            delay={0.3}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:col-span-2 sm:aspect-[16/7] lg:col-span-4 lg:aspect-[16/5] xl:col-span-1 xl:aspect-auto xl:min-h-[174px]"
          >
            <Image
              src="/images/product/source-intelligence/source-intelligence-evidence-chain-review.webp"
              alt="Three colleagues reviewing a document together on a sofa"
              fill
              sizes="(min-width: 1280px) 258px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <p className="mt-4 text-xs text-white/40">
          Accessible text equivalent: Question, then Source, then Extracted
          observation, then Contextual interpretation, then Research view — in
          that order.
        </p>
      </Container>
    </section>
  );
}
