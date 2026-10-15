import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const boundaries = [
  {
    title: "Product boundary",
    body: "Research and market intelligence; not trade execution, stock tips, guaranteed outcomes or regulated investment advice.",
  },
  {
    title: "AI boundary",
    body: "AI may assist discovery, comparison, summarization and navigation; generated output must never be presented as primary evidence.",
  },
];

export default function DirectAnswerSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-stretch lg:gap-10 xl:grid-cols-[minmax(0,1fr)_420px]">
        <div className="min-w-0">
          <Reveal>
            <SectionEyebrow>Direct Answer</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading>What the Research Workspace is for.</SectionHeading>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[780px] text-base leading-7 text-slate-700 sm:text-lg">
              The Talvrin Research Workspace is the intended question-led
              environment for exploring source-linked public-market information,
              building a reviewable research view, and connecting the work to
              continuing monitoring.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
            {boundaries.map((item, index) => (
              <Reveal
                key={item.title}
                delay={0.1 * (index + 2)}
                className="rounded-2xl border border-ink/10 bg-surface p-5 sm:p-6"
              >
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-5 text-gray-600">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[419/378] w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface sm:aspect-[16/10] lg:aspect-auto lg:min-h-[384px]"
        >
          <Image
            src="/images/product/research-workspace/research-workspace-direct-answer-consultation.webp"
            alt="Advisor smiling while reviewing documents with a client across a desk"
            fill
            sizes="(min-width: 1280px) 420px, (min-width: 1024px) 360px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
