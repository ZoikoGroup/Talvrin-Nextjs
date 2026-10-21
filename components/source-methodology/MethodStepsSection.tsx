import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const steps = [
  {
    number: "01",
    title: "Identify origin",
    body: "Resolve the issuer, authority or custodian behind a claim before anything is published.",
    href: "#source-classes",
  },
  {
    number: "02",
    title: "Confirm authority & rights",
    body: "Check the source’s classification and the specific rights that govern its use.",
    href: "#rights-coverage",
  },
  {
    number: "03",
    title: "Validate the fact",
    body: "Verify identity, version, extraction and reconciliation before release.",
    href: "#verification",
  },
];

export default function MethodStepsSection() {
  return (
    <section className="border-b border-ink/5 bg-white py-16 sm:py-20 lg:py-[72px]">
      <Container>
        <Reveal>
          <SectionEyebrow>The Method, in Four Steps</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="text-[28px] sm:text-4xl lg:text-[36px] lg:leading-[1.2]">
            From a claim to a record anyone can examine.
          </SectionHeading>
        </Reveal>

        <ol className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-3 sm:gap-0 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.number}
              delay={0.05 * (index + 2)}
              className="flex flex-col border-l-2 border-accent-violet/25 py-1 pl-5 sm:py-6 sm:pr-5"
            >
              <p className="text-xs font-bold text-accent-violet">{step.number}</p>
              <h3 className="mt-2 text-base font-bold text-ink sm:text-lg">{step.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-gray-600 sm:text-[15px]">{step.body}</p>
              <Link
                href={step.href}
                className="mt-4 w-fit text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
              >
                View details →
              </Link>
            </Reveal>
          ))}
          <Reveal
            as="li"
            delay={0.25}
            className="relative hidden aspect-[320/176] w-full overflow-hidden lg:block lg:aspect-auto lg:min-h-[176px]"
          >
            <Image
              src="/images/research/source-methodology/sm-method-steps-whiteboard.webp"
              alt="Three colleagues reviewing a printed plan beside a whiteboard"
              fill
              sizes="320px"
              className="object-cover"
            />
          </Reveal>
        </ol>
      </Container>
    </section>
  );
}
