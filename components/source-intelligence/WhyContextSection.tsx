import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const dimensions = [
  {
    title: "Origin",
    body: "Who published it, and in what role — official body, licensed data provider, or an unverified source — changes how it should be weighed.",
  },
  {
    title: "Time",
    body: "A publication date and the period it describes are often different. Treating them as one date can misread what is current.",
  },
];

export default function WhyContextSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-stretch lg:gap-10 xl:grid-cols-[minmax(0,1fr)_434px]">
        <div className="min-w-0">
          <Reveal>
            <SectionEyebrow>Why Source Context Matters</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading className="max-w-[820px]">
              The same sentence can mean different things depending on who said
              it, and when.
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[780px] text-base leading-7 text-slate-700 sm:text-lg">
              A claim without context is hard to evaluate. Talvrin treats origin,
              timing and scope as separate questions — each one capable of
              changing what a piece of evidence actually means.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-2.5">
            {dimensions.map((item, index) => (
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
          className="relative aspect-[434/393] w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface sm:aspect-[16/10] lg:aspect-auto lg:min-h-[393px]"
        >
          <Image
            src="/images/product/source-intelligence/source-intelligence-why-context-conversation.webp"
            alt="Professional leaning in to discuss a document with a colleague"
            fill
            sizes="(min-width: 1280px) 434px, (min-width: 1024px) 360px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
