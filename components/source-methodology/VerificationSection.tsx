import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionHeading } from "../alerts/shared";

const steps = [
  {
    label: "01 · Discover",
    body: "Resolve the issuer or authority, find the canonical ID, and identify the original version and its provenance.",
  },
  {
    label: "02 · Qualify",
    body: "Check publication integrity and usage rights, extract with precise section anchors, and validate the value, unit and period.",
  },
  {
    label: "03 · Reconcile",
    body: "Detect revisions and contradictory observations, and route material exceptions to human review.",
  },
  {
    label: "04 · Release",
    body: "Apply the publication and entitlement gate, then display the source and as-of metadata transparently.",
  },
];

export default function VerificationSection() {
  return (
    <section id="verification" className="scroll-mt-20 bg-ink py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
            How We Verify a Claim
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading inverted className="max-w-[760px]">
            From discovery to publication, nothing skips a gate.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[800px] text-base leading-7 text-white/65">
            We never assert that a check occurred unless the audit record exists
            for that item, source version and claim.
          </p>
        </Reveal>

        <ol className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-2.5 lg:grid-cols-4 xl:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.label}
              delay={0.05 * (index + 2)}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-xs font-bold text-indigo-300">{step.label}</p>
              <p className="mt-3 text-sm leading-6 text-white/75 sm:text-[15px]">{step.body}</p>
            </Reveal>
          ))}
          <Reveal
            as="li"
            delay={0.3}
            className="relative hidden min-h-[152px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 xl:block"
          >
            <Image
              src="/images/research/source-methodology/sm-verify-team-laptop.webp"
              alt="Three colleagues reviewing work on a laptop by an office window"
              fill
              sizes="(min-width: 1280px) 250px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </ol>

        <Reveal
          delay={0.2}
          className="mt-7 rounded-2xl border border-white/10 bg-white/5 px-5 py-5 sm:px-7"
        >
          <p className="text-sm leading-6 text-white/75 sm:text-[15px]">
            Unknown is not zero, and missing is not proof that a record
            doesn&apos;t exist. We don&apos;t extrapolate beyond a source&apos;s
            scope or supported date range — any material unresolved conflict or
            failed rights check blocks a value from verified results and
            calculations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
