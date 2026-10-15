import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const assists = [
  "Discovering and organizing candidate changes",
  "Comparing publisher metadata across versions",
  "Flagging jurisdiction, version or date mismatches",
  "Explaining a change relationship in plain language",
];

const neverPresentedAs = [
  "A verified credibility or materiality score",
  "A substitute for inspecting the original source",
  "A confirmed investment recommendation",
  "An automated reassessment of your research view",
];

export default function AiBoundarySection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:items-stretch lg:gap-5 xl:grid-cols-[minmax(0,1fr)_436px]">
        <div className="min-w-0">
          <Reveal>
            <SectionEyebrow>AI Assistance Boundary</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading className="max-w-[800px]">
              AI can help identify and explain relationships. It does not replace
              the source or your judgment.
            </SectionHeading>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-6">
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
            <Reveal delay={0.25}>
              <p className="text-sm font-bold text-gray-600">AI output must never be presented as</p>
              <ul className="mt-4 flex flex-col gap-3">
                {neverPresentedAs.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base text-gray-600">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full border border-gray-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal
            delay={0.3}
            className="mt-10 rounded-2xl border border-ink/10 bg-surface px-6 py-6 sm:px-7"
          >
            <p className="text-xs font-bold tracking-wide text-accent-amber">COUNTEREVIDENCE RULE</p>
            <p className="mt-2 text-sm leading-6 text-ink sm:text-base">
              Evidence that challenges the working view is shown with the same
              visual weight as evidence that supports it — never minimized,
              buried, or left out because it complicates the story.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface sm:aspect-[16/10] lg:aspect-auto lg:min-h-[548px]"
        >
          <Image
            src="/images/product/change-detection/change-detection-ai-boundary-laptop.webp"
            alt="Three colleagues laughing together over a laptop"
            fill
            sizes="(min-width: 1280px) 436px, (min-width: 1024px) 340px, 100vw"
            className="object-cover object-[center_30%]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
