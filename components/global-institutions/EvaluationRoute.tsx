import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const steps = [
  {
    label: "Step 1",
    title: "Describe the requirement",
    body: "An institution outlines the research workflows and scope it wants evaluated.",
  },
  {
    label: "Step 2",
    title: "Qualification & routing",
    body: "The requirement is routed to the responsible commercial owner for review.",
  },
  {
    label: "Step 3",
    title: "Governed discussion",
    body: "Security, legal, data-rights and commercial scope are discussed before any commitment.",
  },
];

export default function EvaluationRoute() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_311px] lg:items-stretch lg:gap-10">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Evaluation Route</SectionEyebrow>
            <SectionHeading>A qualified path, not an instant account.</SectionHeading>
            <SectionLede>
              No &quot;get instant institutional account&quot; promise applies until identity,
              pricing, data rights, entitlements, terms and provisioning have all been verified.
              The route below is sequential, not a form that grants access on submission.
            </SectionLede>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal
                key={step.label}
                delay={i * 0.06}
                className="flex h-full flex-col gap-2 rounded-[14px] border border-ink/10 bg-surface p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.72px] text-accent-violet">
                  {step.label}
                </p>
                <h3 className="text-base font-bold text-ink">{step.title}</h3>
                <p className="text-sm leading-[21.7px] text-muted">{step.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="#discuss"
              className="inline-flex items-center justify-center rounded-lg bg-ink px-7 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-ink-2"
            >
              Discuss Institutional Requirements
            </Link>
            <Link
              href="/solutions/financial-institutions"
              className="inline-flex items-center justify-center rounded-lg border border-ink/20 bg-white px-7 py-4 text-center text-base font-semibold text-ink transition-colors hover:border-ink/40"
            >
              Financial Institutions Overview
            </Link>
          </Reveal>
        </div>

        <Reveal
          delay={0.25}
          className="relative hidden overflow-hidden rounded-[14px] border border-ink/10 bg-surface lg:block"
        >
          <Image
            src={`${IMG}/global-institutions-evaluation-route-team.webp`}
            alt="Two colleagues reviewing paperwork together"
            fill
            sizes="311px"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
