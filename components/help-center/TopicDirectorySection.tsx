import { ReactNode } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, CardLink } from "./shared";

type TopicItem = {
  title: string;
  description: ReactNode;
  linkLabel: string;
  href: string;
  anchor?: boolean;
};

const topics: TopicItem[] = [
  {
    title: "Getting Started & Onboarding",
    description: (
      <>
        First-session orientation and the<br className="hidden md:inline" /> fundamentals of using Talvrin.
      </>
    ),
    linkLabel: "Open Getting Started",
    href: "/resources/getting-started",
  },
  {
    title: "Research Workflow",
    description: (
      <>
        Ask, discover, inspect, understand, build,<br className="hidden md:inline" /> monitor and reassess.
      </>
    ),
    linkLabel: "See how Talvrin works",
    href: "/product/how-talvrin-works",
    anchor: true,
  },
  {
    title: "Evidence & Provenance",
    description: (
      <>
        Source identity, timing, jurisdiction,<br className="hidden md:inline" /> version and rights.
      </>
    ),
    linkLabel: "Explore Evidence",
    href: "/product/evidence",
  },
  {
    title: "AI Assistance",
    description: (
      <>
        What AI can help with, and where its<br className="hidden md:inline" /> authority ends.
      </>
    ),
    linkLabel: "Read the AI boundary",
    href: "/product/ai-assistance",
  },
  {
    title: "Troubleshooting",
    description: (
      <>
        Common issues, observed-state<br className="hidden md:inline" /> diagnostics and recovery.
      </>
    ),
    linkLabel: "Go to Troubleshooting",
    href: "#troubleshooting",
  },
  {
    title: "Monitoring & Alerts",
    description: (
      <>
        Evidence-change monitoring versus<br className="hidden md:inline" /> market-price alerting.
      </>
    ),
    linkLabel: "See monitoring & alerts",
    href: "/product/alerts",
  },
];

function TopicCard({ topic }: { topic: TopicItem }) {
  return (
    <article
      id={topic.anchor ? "workflow" : undefined}
      className="flex h-[193px] w-full lg:w-[288px] scroll-mt-32 flex-col justify-between rounded-2xl border p-5"
      style={{
        backgroundColor: "rgba(246, 245, 251, 1)",
        borderColor: "rgba(23, 19, 53, 0.1)",
      }}
    >
      <div>
        <h3 className="text-[15px] font-bold text-ink font-['IBM_Plex_Sans']">{topic.title}</h3>
        <p className="mt-1.5 text-xs leading-[18px] text-muted font-['IBM_Plex_Sans']">{topic.description}</p>
        <p className="mt-2 text-xs italic text-muted font-['IBM_Plex_Sans']">Article index not yet published.</p>
      </div>
      <div className="mt-auto pt-2">
        <CardLink href={topic.href} size="xs">
          {topic.linkLabel}
        </CardLink>
      </div>
    </article>
  );
}

export default function TopicDirectorySection() {
  return (
    <section id="topics" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="!max-w-[1200px] !px-4 sm:!px-6 lg:!px-0">
        <Reveal>
          <SectionEyebrow tone="amber">HELP TOPIC DIRECTORY</SectionEyebrow>
          <SectionHeading>
            Six topics group the guidance Talvrin<br className="hidden sm:inline" /> supports today.
          </SectionHeading>
          <SectionLede style={{ color: "rgba(93, 90, 114, 1)" }}>
            A governed Help Content Registry with a full article inventory hasn&apos;t been published on this build. Each<br className="hidden md:inline" /> topic below routes to the authoritative page that covers it today.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-4 lg:w-[1200px]">
          {topics.slice(0, 3).map((topic, index) => (
            <Reveal key={topic.title} delay={index * 0.05}>
              <TopicCard topic={topic} />
            </Reveal>
          ))}

          <Reveal delay={0.15} className="hidden lg:block lg:row-span-2">
            <div className="relative h-[401px] w-full lg:w-[288px] overflow-hidden rounded-2xl border border-[rgba(23,19,53,0.1)] bg-surface">
              <Image
                src="/help-center/image 333.png"
                alt="Researcher browsing Talvrin help topics"
                fill
                sizes="(min-width: 1024px) 288px, 100vw"
                className="object-cover rounded-2xl"
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
