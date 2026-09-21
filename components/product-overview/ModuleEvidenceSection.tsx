import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function ModuleEvidenceSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F5FB] py-20 sm:py-28">
      <Container className="relative">
        {/* Header content */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-[#6C5CE7]">
              MODULE 02 · EVIDENCE
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-[38px]">
              The source should never disappear behind the answer.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Inspect where important information came from, when it was
              published, what period or jurisdiction it applies to, which
              version is current, and how it relates to the research
              question.
            </p>
          </Reveal>
        </div>

        {/* Wide Featured Image Banner */}
        <Reveal delay={0.3} className="mt-16">
          <div className="relative aspect-[32/9] w-full overflow-hidden rounded-2xl border border-ink/10 bg-[#F6F5FB] shadow-md">
            <Image
              src="/images/product/overview/team.png"
              alt="Colleagues collaborating and discussing source materials in a bright office environment"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
