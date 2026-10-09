import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CardLink, SectionIntro } from "./shared";

const resources = [
  { title: "Help Center", body: "Task-based guidance and troubleshooting.", href: "/resources/help-center" },
  {
    title: "Documentation",
    body: "Task-oriented product and technical documentation.",
    href: "/resources/documentation",
  },
  {
    title: "Getting Started",
    body: "First-use guidance for new Talvrin users.",
    href: "/resources/getting-started",
  },
  { title: "FAQs", body: "Direct answers to common Talvrin questions.", href: "/resources/faqs" },
  {
    title: "Developer Changelog",
    body: "API, integration and developer-surface change history.",
    href: "/developers/changelog",
  },
  {
    title: "Glossary",
    body: "Definitions for Talvrin and market-research terms.",
    href: "/resources/glossary",
  },
];

function ResourceCard({ title, body, href }: (typeof resources)[number]) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-white p-5">
      <h3 className="text-base font-bold text-ink">{title}</h3>
      <p className="flex-1 text-[13px] leading-5 text-muted">{body}</p>
      <CardLink href={href}>Open</CardLink>
    </div>
  );
}

export default function ContinueResourcesSection() {
  return (
    <section className="bg-surface py-20 sm:py-[88px]">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Continue in Resources"
            title="Release Notes stays a change record — these are built for the rest."
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resources.slice(0, 3).map((resource, index) => (
            <Reveal key={resource.title} delay={index * 0.05} className="h-full">
              <ResourceCard {...resource} />
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative hidden overflow-hidden rounded-xl border border-ink/10 lg:row-span-2 lg:block"
          >
            <Image
              src="/images/resources/release-notes/release-notes-resources.webp"
              alt="Two colleagues reviewing work together on a laptop"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          {resources.slice(3).map((resource, index) => (
            <Reveal key={resource.title} delay={(index + 3) * 0.05} className="h-full">
              <ResourceCard {...resource} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
