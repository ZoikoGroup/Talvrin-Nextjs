import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, StatusBadge, CardLink } from "./shared";

const resources = [
  {
    title: "Documentation",
    status: "Available" as const,
    description: "Task-oriented product and technical documentation.",
    href: "/resources/documentation",
  },
  {
    title: "Research Guides",
    status: "Not Yet Available" as const,
    description: "Structured guidance for research workflows.",
  },
  {
    title: "Glossary",
    status: "Available" as const,
    description: "Definitions for Talvrin and market-research terms.",
    href: "/resources/glossary",
  },
  {
    title: "Release Notes",
    status: "Not Yet Available" as const,
    description: "Product changes, additions and relevant deprecations.",
  },
  {
    title: "Talvrin Methodology",
    status: "Available" as const,
    description: "How Talvrin constructs and presents research.",
    href: "/research/talvrin-methodology",
  },
  {
    title: "FAQs",
    status: "Available" as const,
    description: "Direct answers to common Talvrin questions.",
    href: "/resources/faqs",
  },
];

function ResourceCard({ item }: { item: (typeof resources)[number] }) {
  return (
    <article className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-ink">{item.title}</h3>
        <StatusBadge status={item.status} />
      </div>
      <p className="text-xs leading-5 text-muted">{item.description}</p>
      {item.href && (
        <CardLink href={item.href} className="mt-auto pt-1">
          Open
        </CardLink>
      )}
    </article>
  );
}

export default function ContinueLearningSection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="violet">Continue Learning</SectionEyebrow>
          <SectionHeading>The rest of Resources, when you&apos;re ready for it.</SectionHeading>
          <SectionLede>
            Help Center stays a self-service hub — it hands off to these destinations rather than
            duplicating them.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resources.slice(0, 3).map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <ResourceCard item={item} />
            </Reveal>
          ))}

          <Reveal delay={0.15} className="hidden lg:block">
            <div className="relative h-72 overflow-hidden rounded-xl border border-ink/10 bg-white">
              <Image
                src="/help-center/image 337.png"
                alt="Reader working through Talvrin learning resources"
                fill
                sizes="(min-width: 1024px) 288px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {resources.slice(3).map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <ResourceCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
