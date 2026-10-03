import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, StatusBadge } from "./shared";

const topics = [
  {
    title: "Security",
    description: "Security controls and vulnerability disclosure.",
  },
  {
    title: "Privacy",
    description: "Talvrin privacy information and user-data principles.",
  },
  {
    title: "Data Rights",
    description: "Licensing, entitlement, and permitted-use questions.",
  },
  {
    title: "AI Principles",
    description: "AI boundaries and human-verification expectations.",
  },
  {
    title: "Service Status",
    description: "Current availability and incident history.",
  },
  {
    title: "Evidence Standards",
    description: "How evidence is sourced, classified and presented.",
  },
];

function TopicCard({ topic }: { topic: (typeof topics)[number] }) {
  return (
    <article className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-surface p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-ink">{topic.title}</h3>
        <StatusBadge>Not Yet Available</StatusBadge>
      </div>
      <p className="text-xs leading-5 text-muted">{topic.description}</p>
      <p className="mt-auto pt-2 text-xs text-muted">Not yet available</p>
    </article>
  );
}

export default function TrustSection() {
  return (
    <section id="trust" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="violet">Trust &amp; Governance</SectionEyebrow>
          <SectionHeading>
            These answers hand off to their own
            <br className="hidden sm:block" /> canonical pages.
          </SectionHeading>
          <SectionLede>
            Provenance, rights, security, privacy, governance, responsible AI and status each have
            one authoritative source — this FAQ links to it rather than duplicating it.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.slice(0, 3).map((topic, index) => (
            <Reveal key={topic.title} delay={index * 0.05}>
              <TopicCard topic={topic} />
            </Reveal>
          ))}

          <Reveal delay={0.15} className="hidden lg:block lg:row-span-2">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-xl border border-ink/10 bg-surface">
              <Image
                src="/faq/image 323.png"
                alt="Governance and compliance review at Talvrin"
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
