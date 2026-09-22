import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const steps = [
  {
    number: "01",
    title: "Research",
    description:
      "Find what matters. Start with a market, issuer, instrument, event, filing, policy decision, or research question.",
    href: "/product/research-workspace",
    linkText: "Explore Research",
  },
  {
    number: "02",
    title: "Verify",
    description:
      "See what supports the conclusion. Inspect source authority, date, jurisdiction, version, and context.",
    href: "/product/evidence",
    linkText: "Explore Evidence",
  },
  {
    number: "03",
    title: "Monitor",
    description:
      "Know when the facts change. Keep the research object connected to the evidence and surface meaningful deltas.",
    href: "/product/monitoring",
    linkText: "Explore Monitoring",
  },
];

export default function CoreWorkflowSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Core Workflow</SectionEyebrow>
          <SectionHeading>Research should lead to a view you can defend.</SectionHeading>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.1}>
                <p className="text-4xl font-bold text-ink/15">{step.number}</p>
                <h3 className="mt-3 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                <Link
                  href={step.href}
                  className="mt-4 inline-block text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
                >
                  {step.linkText} →
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="relative aspect-[280/320] w-full overflow-hidden rounded-2xl border border-ink/8 shadow-xl">
            <Image
              src="/images/home/home-core-workflow-dashboard.png"
              alt="Analyst pointing to a research capability flowchart on a large display"
              fill
              sizes="(min-width: 1024px) 280px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
