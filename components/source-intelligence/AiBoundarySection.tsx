import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const assists = [
  "Discovering and organizing candidate sources",
  "Comparing publisher metadata across documents",
  "Flagging jurisdiction, version or date mismatches",
  "Explaining a source relationship in plain language",
];

export default function AiBoundarySection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow>AI Assistance Boundary</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[800px]">
            AI can help navigate sources. It does not get to vouch for them.
          </SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,682px)] lg:items-end lg:gap-10">
          <Reveal delay={0.2}>
            <p className="text-sm font-bold text-accent-violet">AI can assist with</p>
            <ul className="mt-4 flex flex-col gap-3">
              {assists.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-base text-ink">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-violet" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.3}
            className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl bg-ink sm:aspect-[682/217]"
          >
            <Image
              src="/images/product/source-intelligence/source-intelligence-ai-boundary-desk.webp"
              alt="Colleague pointing out details on a monitor to two teammates"
              fill
              sizes="(min-width: 1024px) 682px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
