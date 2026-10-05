import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CardLink, SectionIntro, StatusBadge } from "../release-notes/shared";
import { CardShell, IMAGE_DIR } from "./shared";

type Resource = { title: string; body: string; href?: string };

const resources: Resource[] = [
  {
    title: "Documentation",
    body: "Task-oriented product and technical documentation.",
    href: "/resources/documentation",
  },
  { title: "Research Guides", body: "Structured guidance for research workflows." },
  {
    title: "Glossary",
    body: "Definitions for Talvrin and market-research terms.",
    href: "/resources/glossary",
  },
  {
    title: "Release Notes",
    body: "Product changes, additions and relevant deprecations.",
    href: "/resources/release-notes",
  },
  {
    title: "Talvrin Methodology",
    body: "How Talvrin constructs and presents research.",
    href: "/research/talvrin-methodology",
  },
  { title: "FAQs", body: "Direct answers to common Talvrin questions.", href: "/resources/faqs" },
];

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <CardShell className="gap-2 rounded-xl p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-ink">{resource.title}</h3>
        <StatusBadge status={resource.href ? "available" : "unavailable"} />
      </div>
      <p className="text-[13px] leading-5 text-muted">{resource.body}</p>
      {resource.href && (
        <div className="mt-auto pt-1">
          <CardLink href={resource.href}>Open</CardLink>
        </div>
      )}
    </CardShell>
  );
}

export default function ContinueLearningSection() {
  return (
    <section className="bg-surface py-20 sm:py-[88px]">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Continue Learning" title="The rest of Resources, when you're ready for it.">
            Help Center is the Support entry point — these Resources destinations go deeper once
            self-service and routing are done.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resources.slice(0, 3).map((resource, index) => (
            <Reveal key={resource.title} delay={index * 0.05} className="h-full">
              <ResourceCard resource={resource} />
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative order-last aspect-[16/9] overflow-hidden rounded-xl border border-ink/10 sm:col-span-2 lg:order-none lg:col-span-1 lg:row-span-2 lg:aspect-auto"
          >
            <Image
              src={`${IMAGE_DIR}/help-center-continue-learning.webp`}
              alt="Two colleagues reviewing information on a tablet"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          {resources.slice(3).map((resource, index) => (
            <Reveal key={resource.title} delay={(index + 3) * 0.05} className="h-full">
              <ResourceCard resource={resource} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
