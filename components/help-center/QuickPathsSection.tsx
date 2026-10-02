import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, CardLink } from "./shared";

const quickPaths = [
  {
    title: "Start using Talvrin",
    description: "Onboarding and first-session orientation.",
    linkLabel: "Open Getting Started",
    href: "/resources/getting-started",
  },
  {
    title: "Find and inspect evidence",
    description: "Evidence discovery, source provenance and source inspection concepts.",
    linkLabel: "Explore Evidence",
    href: "/product/evidence",
  },
  {
    title: "Build a research view",
    description: "Research organization and evidence-linked reasoning.",
    linkLabel: "See how Talvrin works",
    href: "/product/how-talvrin-works",
  },
  {
    title: "Understand AI assistance",
    description: "AI's role, provenance and user responsibility.",
    linkLabel: "Read the AI boundary",
    href: "/product/ai-assistance",
  },
  {
    title: "Solve a problem",
    description: "Troubleshooting and recovery path.",
    linkLabel: "Go to Troubleshooting",
    href: "#troubleshooting",
  },
  {
    title: "Monitor what changes",
    description: "Monitoring concepts and meaningful evidence change.",
    linkLabel: "See monitoring & alerts",
    href: "/product/alerts",
  },
];

function QuickPathCard({ path }: { path: (typeof quickPaths)[number] }) {
  return (
    <article className="flex h-full flex-col gap-2 rounded-2xl border border-ink/10 bg-white px-6 pt-6 pb-7">
      <h3 className="text-base font-bold text-ink">{path.title}</h3>
      <p className="pb-1.5 text-sm leading-5 text-muted">{path.description}</p>
      <CardLink href={path.href} size="sm" className="mt-auto pt-1">
        {path.linkLabel}
      </CardLink>
    </article>
  );
}

export default function QuickPathsSection() {
  return (
    <section id="quick-paths" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="violet">Quick Paths</SectionEyebrow>
          <SectionHeading>Tell us what you&apos;re trying to do.</SectionHeading>
          <SectionLede>
            Task-first routes to the right guidance — no need to know Talvrin&apos;s internal
            structure first.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickPaths.slice(0, 3).map((path, index) => (
            <Reveal key={path.title} delay={index * 0.05}>
              <QuickPathCard path={path} />
            </Reveal>
          ))}

          {/* Spacer cell from the design that balances the first row. */}
          <div aria-hidden="true" className="hidden rounded-2xl border border-ink/10 bg-white lg:block lg:h-96" />

          {quickPaths.slice(3).map((path, index) => (
            <Reveal key={path.title} delay={index * 0.05}>
              <QuickPathCard path={path} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
