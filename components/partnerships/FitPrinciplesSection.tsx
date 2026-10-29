import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const principles = [
  {
    title: "EVIDENCE QUALITY",
    description: (
      <>
        Opportunities should support
        <br />
        transparent, inspectable, better-
        <br />
        governed research — not obscure
        <br />
        provenance.
      </>
    ),
  },
  {
    title: "USER VALUE",
    description: (
      <>
        A partnership should solve a real
        <br />
        research, workflow, trust, access,
        <br />
        or operational problem.
      </>
    ),
  },
  {
    title: "DATA RIGHTS",
    description: (
      <>
        Rights, licensing, entitlement, and
        <br />
        permitted use must be clear from
        <br />
        the start.
      </>
    ),
  },
  {
    title: "RESPONSIBLE AI",
    description: (
      <>
        AI collaboration must keep
        <br />
        generated interpretation distinct
        <br />
        from authoritative evidence.
      </>
    ),
  },
  {
    title: "SECURITY & PRIVACY",
    description: (
      <>
        Any collaboration touching
        <br />
        systems or data passes an
        <br />
        approved security and privacy
        <br />
        review.
      </>
    ),
  },
  {
    title: "GLOBAL GOVERNANCE",
    description: (
      <>
        Cross-jurisdiction implications are
        <br />
        evaluated, not assumed.
      </>
    ),
  },
];

export default function FitPrinciplesSection() {
  return (
    <section id="fit-principles" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <Container className="max-w-[1100px]">
        <Reveal>
          <SectionEyebrow tone="violet">WHAT ALIGNMENT MEANS</SectionEyebrow>
          <SectionHeading>What we look for in a partnership.</SectionHeading>
          <SectionLede>
            These are principles, not a scored checklist — they explain what a credible, well-fit conversation
            <br className="hidden md:inline" />
            looks like before anything is proposed.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* First 3 cards (Row 1) */}
          {principles.slice(0, 3).map((item, idx) => (
            <Reveal key={item.title} delay={0.05 * idx}>
              <div className="flex h-[158px] w-full flex-col justify-start rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-[#F6F5FB] p-[21.8px] lg:w-[263px]">
                <p className="text-[12px] font-bold uppercase tracking-[0.05em] text-[#6C5CE7]">
                  {item.title}
                </p>
                <p className="mt-2.5 text-[14px] leading-[21.7px] font-normal text-[#171335]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Right Image Card spanning 2 rows on desktop */}
          <Reveal delay={0.2} className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <div className="relative h-[260px] w-full overflow-hidden rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-[#F6F5FB] sm:h-[332px] lg:h-[332px] lg:w-[263px]">
              <Image
                src={`${IMG}/partnerships-fit-principles.png`}
                alt="Fit principles in practice"
                fill
                sizes="(max-width: 1024px) 100vw, 263px"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Next 3 cards (Row 2) */}
          {principles.slice(3, 6).map((item, idx) => (
            <Reveal key={item.title} delay={0.05 * (idx + 3)}>
              <div className="flex h-[158px] w-full flex-col justify-start rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-[#F6F5FB] p-[21.8px] lg:w-[263px]">
                <p className="text-[12px] font-bold uppercase tracking-[0.05em] text-[#6C5CE7]">
                  {item.title}
                </p>
                <p className="mt-2.5 text-[14px] leading-[21.7px] font-normal text-[#171335]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
