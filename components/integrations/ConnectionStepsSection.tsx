import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const steps = [
  {
    number: "01",
    title: "Discover",
    body: "Find a relevant connection in the public registry.",
  },
  {
    number: "02",
    title: "Evaluate",
    body: "Review capability, permissions, provenance, rights, and lifecycle before authorizing anything.",
  },
  {
    number: "03",
    title: "Authorize",
    body: "Grant only the minimum access required, with each reason shown first.",
  },
  {
    number: "04",
    title: "Configure",
    body: "Set source-defined options only, with safe defaults and rights checks applied.",
  },
  {
    number: "05",
    title: "Validate",
    body: "Confirm the connection with a non-destructive test — partial completion is never labeled connected.",
  },
  {
    number: "06",
    title: "Operate",
    body: "Monitor version, operational status, and recoverable failures while the connection runs.",
  },
];

export default function ConnectionStepsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">How Connections Work</SectionEyebrow>
          <SectionHeading>
            Seven steps, always in the same order — no shortcuts around consent or evidence.
          </SectionHeading>
          <SectionLede className="max-w-[760px] sm:text-base sm:leading-6">
            Every released integration follows the same governed path from discovery to
            disconnection. No step is skipped to speed up conversion.
          </SectionLede>
        </Reveal>

        <ol className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {steps.map((step, index) => (
            <Reveal key={step.number} as="li" delay={index * 0.04} className="flex items-stretch gap-3">
                <div className="flex flex-1 flex-col gap-2 rounded-2xl border border-ink/10 bg-surface p-5">
                  <p className="text-xs font-bold text-accent-amber">{step.number}</p>
                  <h3 className="text-base font-bold text-ink">{step.title}</h3>
                  <p className="text-xs leading-5 text-slate-600">{step.body}</p>
                </div>
                {/* Arrows only once all six steps sit on one row; the last keeps its
                    width so every card stays the same size. */}
                <span
                  className={`hidden shrink-0 self-center text-accent-amber xl:inline ${
                    index === steps.length - 1 ? "xl:invisible" : ""
                  }`}
                  aria-hidden="true"
                >
                  →
                </span>
            </Reveal>
          ))}
        </ol>

        <Reveal
          delay={0.2}
          className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[2/1] lg:aspect-[1280/361]"
        >
          <Image
            src="/images/developers/integrations/integrations-connection-steps-meeting.webp"
            alt="Presenter leading a team meeting in front of dashboards"
            fill
            sizes="(min-width: 1310px) 1280px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
