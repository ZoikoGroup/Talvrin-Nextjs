import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const steps = [
  {
    title: "Confirm access eligibility",
    body: "Know whether your account is allowed to obtain the method before any creation or authorization action is shown.",
  },
  {
    title: "Obtain approved credential / complete authorization",
    body: "Route through the canonical source-controlled acquisition flow — never a fabricated console or generic key generator.",
  },
  {
    title: "Store secret material safely",
    body: "Follow approved secure-storage expectations and environment separation; never plaintext files or source control.",
  },
  {
    title: "Attach proof to request exactly as documented",
    body: "Use the source-backed example with obvious non-secret placeholders — nothing valid-looking is ever published.",
  },
  {
    title: "Handle authentication and permission errors distinctly",
    body: "A denied request is diagnosed against the right layer — credential, permission, entitlement, rights, or outage.",
  },
  {
    title: "Rotate / revoke when required",
    body: "Replace or invalidate access on your own schedule, or immediately after a suspected exposure.",
  },
];

export default function QuickStartSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">Quick Start</SectionEyebrow>
          <SectionHeading>Six steps before your first authenticated request.</SectionHeading>
          <SectionLede className="max-w-[760px] sm:text-base sm:leading-6">
            Quick start begins with eligibility, not with assuming you already own a credential. No
            step is skipped and no validation endpoint is fabricated to make the path feel shorter.
          </SectionLede>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,760px)_minmax(0,463px)] lg:items-start lg:gap-10">
          <ol className="flex flex-col">
            {steps.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 0.04} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span
                    className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-ink text-sm font-bold text-white"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  {index < steps.length - 1 && (
                    <span className="my-1 w-0.5 flex-1 bg-ink/10" aria-hidden="true" />
                  )}
                </div>
                <div className="pb-7">
                  <h3 className="text-base font-bold text-ink">{step.title}</h3>
                  <p className="mt-1.5 max-w-[600px] text-sm leading-6 text-slate-600">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal
            delay={0.15}
            className="relative aspect-[463/420] w-full overflow-hidden rounded-2xl lg:aspect-[463/576]"
          >
            <Image
              src="/images/developers/authentication/authentication-quick-start-workshop.webp"
              alt="Team collaborating around a table in a bright workspace"
              fill
              sizes="(min-width: 1024px) 463px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
