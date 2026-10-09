import { ReactNode } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, StatusBadge, CardLink, Status } from "./shared";

type ResourceItem = {
  title: string;
  status: Status;
  description: ReactNode;
  href?: string;
};

const resources: ResourceItem[] = [
  {
    title: "Documentation",
    status: "Available",
    description: (
      <>
        Task-oriented product and technical<br className="hidden md:inline" /> documentation.
      </>
    ),
    href: "/resources/documentation",
  },
  {
    title: "Research Guides",
    status: "Not Yet Available",
    description: (
      <>
        Structured guidance for research<br className="hidden md:inline" /> workflows.
      </>
    ),
  },
  {
    title: "Glossary",
    status: "Available",
    description: (
      <>
        Definitions for Talvrin and market-<br className="hidden md:inline" />research terms.
      </>
    ),
    href: "/resources/glossary",
  },
  {
    title: "Release Notes",
    status: "Not Yet Available",
    description: (
      <>
        Product changes, additions and relevant<br className="hidden md:inline" /> deprecations.
      </>
    ),
  },
  {
    title: "Talvrin Methodology",
    status: "Available",
    description: (
      <>
        How Talvrin constructs and presents<br className="hidden md:inline" /> research.
      </>
    ),
    href: "/research/talvrin-methodology",
  },
  {
    title: "FAQs",
    status: "Available",
    description: (
      <>
        Direct answers to common Talvrin<br className="hidden md:inline" /> questions.
      </>
    ),
    href: "/resources/faqs",
  },
];

function ResourceCard({ item }: { item: ResourceItem }) {
  return (
    <article
      className="flex h-[132px] w-full lg:w-[288px] flex-col justify-between rounded-2xl border px-5 py-3.5"
      style={{
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: "rgba(23, 19, 53, 0.1)",
      }}
    >
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="pr-1 text-[13.5px] font-bold leading-[17px] text-ink font-['IBM_Plex_Sans']">{item.title}</h3>
          <StatusBadge status={item.status} />
        </div>
        <p className="mt-1 text-xs leading-[16px] text-muted font-['IBM_Plex_Sans']">{item.description}</p>
      </div>
      {item.href && (
        <div className="mt-auto pt-0.5">
          <CardLink href={item.href} size="xs">
            Open
          </CardLink>
        </div>
      )}
    </article>
  );
}

export default function ContinueLearningSection() {
  return (
    <section
      id="continue-learning"
      className="scroll-mt-32 py-20 sm:py-24"
      style={{ backgroundColor: "rgba(246, 245, 251, 1)" }}
    >
      <Container className="!max-w-[1200px] !px-4 sm:!px-6 lg:!px-0">
        <Reveal>
          <SectionEyebrow tone="violet">CONTINUE LEARNING</SectionEyebrow>
          <SectionHeading>
            The rest of Resources, when you&apos;re ready<br className="hidden sm:inline" /> for it.
          </SectionHeading>
          <SectionLede style={{ color: "rgba(93, 90, 114, 1)" }}>
            Help Center stays a self-service hub — it hands off to these destinations rather than duplicating<br className="hidden md:inline" /> them.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-4 lg:w-[1200px]">
          {resources.slice(0, 3).map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <ResourceCard item={item} />
            </Reveal>
          ))}

          <Reveal delay={0.15} className="hidden lg:block lg:row-span-2">
            <div className="relative h-[279px] w-full lg:w-[288px] overflow-hidden rounded-2xl border border-[rgba(23,19,53,0.1)] bg-white">
              <Image
                src="/help-center/image 337.png"
                alt="Reader working through Talvrin learning resources"
                fill
                sizes="(min-width: 1024px) 288px, 100vw"
                className="object-cover rounded-2xl"
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
