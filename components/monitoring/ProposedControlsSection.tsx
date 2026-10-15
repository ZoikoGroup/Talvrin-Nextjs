import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const controlGroups = [
  { label: "SCOPE", options: ["Issuer", "Market", "Jurisdiction", "Source set"] },
  { label: "CHANNEL", options: ["Email", "In-app", "SMS (unconfirmed)"] },
  { label: "CADENCE", options: ["Immediate", "Daily digest", "Weekly digest"] },
];

export default function ProposedControlsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Proposed Controls</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[640px]">
            Scope and controls — proposed, pending confirmation.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600">
            These controls illustrate the kind of scope, channel and cadence
            choices Monitoring could offer. None is active. A control that
            isn&apos;t genuinely supported stays hidden — it is never shown
            disabled or pre-checked.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-ink/10 bg-surface sm:mt-10 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)]"
        >
          {/* Illustrative only: plain labels, not interactive controls */}
          <div className="flex flex-col justify-center gap-5 p-6 sm:p-7">
            {controlGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-bold tracking-wide text-gray-600">{group.label}</p>
                <ul className="mt-2.5 flex flex-wrap gap-2">
                  {group.options.map((option) => (
                    <li
                      key={option}
                      className="rounded-full border border-dashed border-ink/20 bg-white px-3.5 py-2 text-xs font-semibold text-gray-600"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="text-xs font-bold tracking-wide text-accent-amber">PROPOSED — NOT YET ACTIVE</p>
          </div>

          <div className="relative aspect-[16/9] w-full lg:aspect-auto lg:min-h-[344px]">
            <Image
              src="/images/product/monitoring/monitoring-controls-team.webp"
              alt="Four colleagues smiling together around a table"
              fill
              sizes="(min-width: 1024px) 810px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-sm text-gray-600">
            No email, push or SMS delivery is offered until a specific channel
            and cadence capability is confirmed and approved.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
