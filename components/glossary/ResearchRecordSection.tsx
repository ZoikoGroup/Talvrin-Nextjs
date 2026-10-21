import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "../alerts/shared";

export default function ResearchRecordSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <Reveal>
            <SectionEyebrow>Seen a Term in Talvrin Research?</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 max-w-[600px] text-2xl font-bold leading-tight text-ink sm:text-3xl sm:leading-10">
              Definitions explain a term. The research record stays the
              authority for the figure.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-[560px] text-base leading-6 text-gray-600">
              The Glossary can explain what an indicator means, but it never
              substitutes for the sourced, versioned evidence behind a published
              figure.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[600/214] w-full overflow-hidden rounded-xl border border-ink/10 bg-surface max-sm:aspect-[16/9]"
        >
          <Image
            src="/images/research/glossary/glossary-research-conversation.webp"
            alt="A woman explaining something with her hands to a colleague across a table"
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
