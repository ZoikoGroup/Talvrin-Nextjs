import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, StatusBadge, CardLink } from "./shared";

const guidance = [
  {
    question: "How do I know where information came from?",
    status: "Available" as const,
    answer:
      "Help content explains evidence discovery and source inspection concepts, then routes to Evidence for the full provenance model.",
    linkLabel: "Explore Evidence",
    href: "/product/evidence",
  },
  {
    question: "What can AI do?",
    status: "Available" as const,
    answer:
      "AI may assist discovery, organization, comparison, summarization and explanation. It does not become authoritative evidence.",
    linkLabel: "Read the AI boundary",
    href: "/product/ai-assistance",
  },
  {
    question: "What does “global” mean?",
    status: "Available" as const,
    answer:
      "Talvrin is global by architecture. That is not the same as released market coverage — see the canonical coverage matrix.",
    linkLabel: "View Market Coverage",
    href: "/markets/market-coverage",
  },
  {
    question: "Is Talvrin investment advice?",
    status: "Boundary" as const,
    answer:
      "No. Talvrin is a research and market-intelligence platform, not a trade-execution or investment-recommendation engine.",
  },
  {
    question: "Is the service available?",
    status: "Not Yet Available" as const,
    answer: "Availability is reported on Service Status rather than estimated here.",
  },
  {
    question: "How is my data handled?",
    status: "Not Yet Available" as const,
    answer:
      "Data handling is governed by Privacy, Data Rights and Global Data Governance policy rather than paraphrased here.",
  },
];

function GuidanceCard({
  item,
}: {
  item: (typeof guidance)[number];
}) {
  return (
    <article className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-surface p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="pr-1 text-base font-bold leading-5 text-ink">{item.question}</h3>
        <StatusBadge status={item.status} />
      </div>
      <p className="text-xs leading-5 text-muted">{item.answer}</p>
      {item.linkLabel && item.href && (
        <CardLink href={item.href} className="mt-auto pt-1">
          {item.linkLabel}
        </CardLink>
      )}
    </article>
  );
}

export default function EvidenceGuidanceSection() {
  return (
    <section id="evidence-ai" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Evidence, Trust &amp; AI Guidance</SectionEyebrow>
          <SectionHeading>Boundaries the Help Center will never blur.</SectionHeading>
          <SectionLede>
            These answers preserve Talvrin&apos;s evidence, AI and product-boundary doctrine
            rather than paraphrasing it away.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guidance.slice(0, 3).map((item, index) => (
            <Reveal key={item.question} delay={index * 0.05}>
              <GuidanceCard item={item} />
            </Reveal>
          ))}

          <Reveal delay={0.15} className="hidden lg:block">
            <div className="relative h-96 overflow-hidden rounded-xl border border-ink/10 bg-surface">
              <Image
                src="/help-center/image 334.png"
                alt="Evidence provenance detail in the Talvrin interface"
                fill
                sizes="(min-width: 1024px) 288px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {guidance.slice(3).map((item, index) => (
            <Reveal key={item.question} delay={index * 0.05}>
              <GuidanceCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
