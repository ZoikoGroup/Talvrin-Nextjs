import { Fragment } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const steps = [
  {
    title: "Review contract",
    body: "Read the versioned interface spec, errors, types and semantics before requesting anything.",
  },
  {
    title: "Obtain access",
    body: "Scoped credentials issued under least privilege, tied to tenant, role and approved jurisdictions.",
  },
  {
    title: "Test",
    body: "Validate against documented, schema-checked examples in a controlled environment.",
  },
  {
    title: "Go live",
    body: "Only after every applicable publication gate records a named approval.",
  },
];

export default function HowAccessWorksSection() {
  return (
    <section id="how-access-works" className="scroll-mt-32 bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow>How access works</SectionEyebrow>
          <SectionHeading inverted>Review contract → Obtain access → Test → Go live.</SectionHeading>
          <SectionLede inverted>
            The same four-step architecture pattern applies regardless of which capability you
            request — no shortcuts around contract review or eligibility.
          </SectionLede>
        </Reveal>

        <ol className="mt-12 flex flex-col items-stretch gap-3 lg:flex-row lg:items-stretch lg:gap-0">
          {steps.map((step, i) => (
            <Fragment key={step.title}>
              <Reveal
                as="li"
                delay={i * 0.08}
                className="flex flex-col gap-2.5 rounded-2xl bg-ink-2 p-6 lg:w-[230px]"
              >
                <span className="text-xs font-bold text-accent-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-5 text-white/70">{step.body}</p>
              </Reveal>
              {i < steps.length - 1 && (
                <li
                  aria-hidden="true"
                  className="flex items-center justify-center text-accent-amber lg:w-8"
                >
                  <span className="rotate-90 lg:rotate-0">→</span>
                </li>
              )}
            </Fragment>
          ))}
        </ol>
      </Container>
    </section>
  );
}
