import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const controls = [
  {
    title: "Evidence provenance",
    body: "Trace category and vehicle claims to supporting governing documents.",
  },
  {
    title: "Data rights",
    body: "Respect licensing, redistribution, provider, and permitted-use controls.",
  },
  {
    title: "Coverage governance",
    body: "Model coverage and capability separately, never implying one from the other.",
  },
  {
    title: "Privacy",
    body: "Protect research intent and minimize unnecessary collection of portfolio-like data.",
  },
  {
    title: "AI governance",
    body: "Keep model output subordinate to evidence and registry authority.",
  },
  {
    title: "Revision integrity",
    body: "Preserve document vintages and structural attribute revisions.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="violet">Trust &amp; Data Rights</SectionEyebrow>
          <SectionHeading inverted>
            Fund and asset research requires institutional-grade controls.
          </SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,505px)] xl:gap-12">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {controls.map((control, index) => (
              <Reveal key={control.title} delay={index * 0.04}>
                <span className="block h-0.5 w-7 bg-accent-violet" aria-hidden="true" />
                <h3 className="mt-4 text-base font-bold text-white">{control.title}</h3>
                <p className="mt-2 text-sm leading-5 text-white/70">{control.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative aspect-[505/250] w-full overflow-hidden rounded-2xl xl:aspect-auto xl:min-h-[250px]"
          >
            <Image
              src="/images/markets/funds-other-assets/funds-trust-home-desk.webp"
              alt="Person taking notes beside a laptop at a home desk"
              fill
              sizes="(min-width: 1280px) 505px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
