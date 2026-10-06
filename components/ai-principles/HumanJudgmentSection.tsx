import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "../global-markets/shared";

export default function HumanJudgmentSection() {
  return (
    <section id="human-judgment" className="scroll-mt-32 bg-ink py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-[900px] flex-col items-center text-center">
          <SectionEyebrow tone="violet">Responsibility, Not Just Disclaimer</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[40px] lg:leading-[48px]">
            Better evidence can improve a decision. It does not make the decision for you.
          </h2>
          <p className="mt-5 max-w-[680px] text-base leading-7 text-white/75">
            Markets remain uncertain, and users remain responsible for their own investment and
            professional decisions. Talvrin improves the information environment — it does not
            transfer that responsibility to AI.
          </p>
          <p className="mt-5 max-w-[760px] text-sm leading-6 text-white/50">
            For enterprise contexts, an organization&apos;s own review and approval processes remain
            authoritative for that organization.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
