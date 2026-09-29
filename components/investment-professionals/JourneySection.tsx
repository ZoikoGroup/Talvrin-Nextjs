import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const steps = [
  "A professional begins with a market, issuer, security, event, filing, policy issue, or research question.",
  "Talvrin discovers relevant governed evidence and supporting context.",
  "The professional inspects source authority, date, reference period, jurisdiction, version, and access state.",
  "Evidence is related to the question as supporting, challenging, updating, or contextualizing material.",
  "A research view is preserved with provenance rather than ending as an isolated generated answer.",
  "Monitoring keeps the research object connected to the evidence and surfaces meaningful subsequent changes.",
  "The professional reassesses the view — judgment and responsibility remain human.",
];

export default function JourneySection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[860px]">
          <SectionEyebrow tone="amber">Illustrative Professional Journey</SectionEyebrow>
          <SectionHeading inverted>
            Question → sources → evidence → view → monitoring → reassessment.
          </SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,330px)] lg:items-start lg:gap-12">
          <ol>
            {steps.map((step, index) => (
              <Reveal
                key={step}
                delay={index * 0.04}
                as="li"
                className="flex items-start gap-5 border-b border-white/10 py-4"
              >
                <span className="shrink-0 text-xs font-bold text-accent-amber">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-6 text-white/85">{step}</span>
              </Reveal>
            ))}
          </ol>

          <Reveal
            delay={0.2}
            className="relative aspect-[330/432] w-full max-w-[330px] overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/solutions/investment-professionals/ip-journey-window.webp"
              alt="Two colleagues talking beside a floor-to-ceiling office window"
              fill
              sizes="(min-width: 1024px) 330px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
