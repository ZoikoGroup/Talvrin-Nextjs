import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const controls = [
  {
    title: "Evidence provenance",
    body: "Trace important outputs to filings, disclosures, and supporting evidence.",
  },
  {
    title: "Data rights",
    body: "Respect licensing, redistribution, exchange/provider rights, and permitted-use controls.",
  },
  {
    title: "Entity integrity",
    body: "Keep company, issuer, and security mappings governed and versioned.",
  },
  { title: "Privacy", body: "Minimize collection and protect research intent." },
  { title: "AI governance", body: "Keep model output subordinate to evidence and policy." },
  {
    title: "Operational transparency",
    body: "Keep coverage, availability, and service-state claims truthful.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="violet">Trust &amp; Data Rights</SectionEyebrow>
          <SectionHeading inverted>
            Equity research requires institutional-grade controls.
          </SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,495px)] xl:gap-12">
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
            className="relative aspect-[495/234] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[240px]"
          >
            <Image
              src="/images/markets/equities/equities-trust-seated-conversation.webp"
              alt="Colleague seated in conversation with a coworker"
              fill
              sizes="(min-width: 1024px) 495px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
