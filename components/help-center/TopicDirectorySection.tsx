import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, CardLink } from "./shared";

const topics = [
  {
    title: "Getting Started & Onboarding",
    description: "First-session orientation and the fundamentals of using Talvrin.",
    linkLabel: "Open Getting Started",
    href: "/resources/getting-started",
  },
  {
    title: "Research Workflow",
    description: "Ask, discover, inspect, understand, build, monitor and reassess.",
    linkLabel: "See how Talvrin works",
    href: "/product/how-talvrin-works",
    anchor: true,
  },
  {
    title: "Evidence & Provenance",
    description: "Source identity, timing, jurisdiction, version and rights.",
    linkLabel: "Explore Evidence",
    href: "/product/evidence",
  },
  {
    title: "AI Assistance",
    description: "What AI can help with, and where its authority ends.",
    linkLabel: "Read the AI boundary",
    href: "/product/ai-assistance",
  },
  {
    title: "Troubleshooting",
    description: "Common issues, observed-state diagnostics and recovery.",
    linkLabel: "Go to Troubleshooting",
    href: "#troubleshooting",
  },
  {
    title: "Monitoring & Alerts",
    description: "Evidence-change monitoring versus market-price alerting.",
    linkLabel: "See monitoring & alerts",
    href: "/product/alerts",
  },
];

function TopicCard({
  topic,
}: {
  topic: (typeof topics)[number];
}) {
  return (
    <article
      id={topic.anchor ? "workflow" : undefined}
      className="flex h-full scroll-mt-32 flex-col gap-2.5 rounded-2xl border border-ink/10 bg-surface px-5 py-6"
    >
      <h3 className="text-base font-bold text-ink">{topic.title}</h3>
      <p className="text-xs leading-5 text-muted">{topic.description}</p>
      <p className="text-xs text-muted">Article index not yet published.</p>
      <CardLink href={topic.href} className="mt-auto pt-1">
        {topic.linkLabel}
      </CardLink>
    </article>
  );
}

export default function TopicDirectorySection() {
  return (
    <section id="topics" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Help Topic Directory</SectionEyebrow>
          <SectionHeading>
            Six topics group the guidance Talvrin supports today.
          </SectionHeading>
          <SectionLede>
            A governed Help Content Registry with a full article inventory hasn&apos;t been
            published on this build. Each topic below routes to the authoritative page that
            covers it today.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.slice(0, 3).map((topic, index) => (
            <Reveal key={topic.title} delay={index * 0.05}>
              <TopicCard topic={topic} />
            </Reveal>
          ))}

          <Reveal delay={0.15} className="hidden lg:block">
            <div className="relative h-96 overflow-hidden rounded-2xl border border-ink/10 bg-surface">
              <Image
                src="/help-center/image 333.png"
                alt="Researcher browsing Talvrin help topics"
                fill
                sizes="(min-width: 1024px) 288px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {topics.slice(3).map((topic, index) => (
            <Reveal key={topic.title} delay={index * 0.05}>
              <TopicCard topic={topic} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
