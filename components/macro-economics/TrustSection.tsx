import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const controls = [
  {
    title: "Evidence provenance",
    body: "Trace releases and policy conclusions to supporting material.",
  },
  {
    title: "Data rights",
    body: "Respect licensing, redistribution, provider, calendar, and permitted-use controls.",
  },
  { title: "Revision integrity", body: "Preserve evidence vintages and source revisions." },
  { title: "Privacy", body: "Protect research intent and minimize unnecessary collection." },
  { title: "AI governance", body: "Keep model output subordinate to evidence and policy." },
  {
    title: "Regional governance",
    body: "Apply jurisdiction-sensitive execution and controls.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="violet">Trust &amp; Data Rights</SectionEyebrow>
          <SectionHeading inverted>
            Macro research requires institutional-grade controls.
          </SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,504px)] xl:gap-12">
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
            className="relative aspect-[504/234] w-full overflow-hidden rounded-2xl xl:aspect-auto xl:min-h-[234px]"
          >
            <Image
              src="/images/markets/macro-economics/macro-trust-handshake.webp"
              alt="Two colleagues shaking hands across a desk"
              fill
              sizes="(min-width: 1280px) 504px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
