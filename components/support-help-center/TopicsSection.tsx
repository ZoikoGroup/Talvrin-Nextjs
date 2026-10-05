import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CardLink, EmptyNote, SectionIntro } from "../release-notes/shared";
import { CardShell, IMAGE_DIR, NotYetAvailable } from "./shared";

type Topic = {
  title: string;
  body: string;
  link?: { label: string; href: string };
};

const topics: Topic[] = [
  {
    title: "Getting Started",
    body: "First-session orientation and the fundamentals of using Talvrin.",
    link: { label: "Open Getting Started", href: "/resources/getting-started" },
  },
  {
    title: "Using Talvrin",
    body: "Evidence discovery, research views and monitoring concepts.",
    link: { label: "See how Talvrin works", href: "/product/overview" },
  },
  { title: "Account & Access", body: "Sign-in, profile and workspace settings." },
  { title: "Accessibility", body: "Using Talvrin with assistive technology." },
  { title: "Security & Data", body: "Data handling, privacy and vulnerability reporting." },
  {
    title: "Troubleshooting",
    body: "Common issues and observed-state recovery steps.",
    link: { label: "Go to Troubleshooting", href: "#troubleshooting" },
  },
];

function TopicCard({ topic }: { topic: Topic }) {
  return (
    <CardShell tone="surface" className="gap-2.5 px-[22px] py-6">
      <h3 className="text-base font-bold text-ink">{topic.title}</h3>
      <p className="text-[13px] leading-5 text-muted">{topic.body}</p>
      <div className="mt-auto flex flex-col gap-2.5">
        <EmptyNote>Article index not yet published.</EmptyNote>
        {topic.link ? (
          <CardLink href={topic.link.href}>{topic.link.label}</CardLink>
        ) : (
          <NotYetAvailable />
        )}
      </div>
    </CardShell>
  );
}

export default function TopicsSection() {
  return (
    <section id="topics" className="scroll-mt-32 bg-white py-20 sm:py-[88px]">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Help Topic Directory"
            tone="amber"
            title="Six topics group the guidance Talvrin supports today."
          >
            A governed Help Content Registry with a full article inventory hasn&apos;t been published
            on this build. Each topic below routes to the authoritative page that covers it today.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topics.slice(0, 3).map((topic, index) => (
            <Reveal key={topic.title} delay={index * 0.05} className="h-full">
              <TopicCard topic={topic} />
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative order-last aspect-[16/9] overflow-hidden rounded-2xl border border-ink/10 sm:col-span-2 lg:order-none lg:col-span-1 lg:row-span-2 lg:aspect-auto"
          >
            <Image
              src={`${IMAGE_DIR}/help-center-topics-colleagues.webp`}
              alt="Two colleagues laughing while reviewing a document together"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          {topics.slice(3).map((topic, index) => (
            <Reveal key={topic.title} delay={(index + 3) * 0.05} className="h-full">
              <TopicCard topic={topic} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
