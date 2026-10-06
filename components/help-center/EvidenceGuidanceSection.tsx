import { ReactNode } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, StatusBadge, CardLink, Status } from "./shared";

type GuidanceItem = {
  question: ReactNode;
  status: Status;
  answer: ReactNode;
  linkLabel?: string;
  href?: string;
};

const guidance: GuidanceItem[] = [
  {
    question: (
      <>
        How do I know where<br className="hidden md:inline" /> information came from?
      </>
    ),
    status: "Available",
    answer: (
      <>
        Help content explains evidence discovery<br className="hidden md:inline" /> and source inspection concepts, then<br className="hidden md:inline" /> routes to Evidence for the full provenance<br className="hidden md:inline" /> model.
      </>
    ),
    linkLabel: "Explore Evidence",
    href: "/product/evidence",
  },
  {
    question: "What can AI do?",
    status: "Available",
    answer: (
      <>
        AI may assist discovery, organization,<br className="hidden md:inline" /> comparison, summarization and<br className="hidden md:inline" /> explanation. It does not become<br className="hidden md:inline" /> authoritative evidence.
      </>
    ),
    linkLabel: "Read the AI boundary",
    href: "/product/ai-assistance",
  },
  {
    question: (
      <>
        What does “global”<br className="hidden md:inline" /> mean?
      </>
    ),
    status: "Available",
    answer: (
      <>
        Talvrin is global by architecture. That is<br className="hidden md:inline" /> not the same as released market coverage<br className="hidden md:inline" /> — see the canonical coverage matrix.
      </>
    ),
    linkLabel: "View Market Coverage",
    href: "/markets/market-coverage",
  },
  {
    question: (
      <>
        Is Talvrin investment<br className="hidden md:inline" /> advice?
      </>
    ),
    status: "Boundary",
    answer: (
      <>
        No. Talvrin is a research and market-<br className="hidden md:inline" />intelligence platform, not a trade-<br className="hidden md:inline" />execution or investment-recommendation<br className="hidden md:inline" /> engine.
      </>
    ),
  },
  {
    question: (
      <>
        Is the service<br className="hidden md:inline" /> available?
      </>
    ),
    status: "Not Yet Available",
    answer: (
      <>
        Availability is reported on Service Status<br className="hidden md:inline" /> rather than estimated here.
      </>
    ),
  },
  {
    question: (
      <>
        How is my data<br className="hidden md:inline" /> handled?
      </>
    ),
    status: "Not Yet Available",
    answer: (
      <>
        Data handling is governed by Privacy, Data<br className="hidden md:inline" /> Rights and Global Data Governance policy<br className="hidden md:inline" /> rather than paraphrased here.
      </>
    ),
  },
];

function GuidanceCard({ item }: { item: GuidanceItem }) {
  return (
    <article
      className="flex h-[193px] w-full lg:w-[288px] flex-col justify-between rounded-2xl border p-5"
      style={{
        backgroundColor: "rgba(246, 245, 251, 1)",
        borderColor: "rgba(23, 19, 53, 0.1)",
      }}
    >
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="pr-1 text-[13.5px] font-bold leading-[18px] text-ink font-['IBM_Plex_Sans']">{item.question}</h3>
          <StatusBadge status={item.status} />
        </div>
        <p className="mt-2 text-xs leading-[18px] text-muted font-['IBM_Plex_Sans']">{item.answer}</p>
      </div>
      {item.linkLabel && item.href && (
        <div className="mt-auto pt-2">
          <CardLink href={item.href} size="xs">
            {item.linkLabel}
          </CardLink>
        </div>
      )}
    </article>
  );
}

export default function EvidenceGuidanceSection() {
  return (
    <section id="evidence-ai" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="!max-w-[1200px] !px-4 sm:!px-6 lg:!px-0">
        <Reveal>
          <SectionEyebrow tone="amber">EVIDENCE, TRUST & AI GUIDANCE</SectionEyebrow>
          <SectionHeading>Boundaries the Help Center will never blur.</SectionHeading>
          <SectionLede style={{ color: "rgba(93, 90, 114, 1)" }}>
            These answers preserve Talvrin&apos;s evidence, AI and product-boundary doctrine rather than<br className="hidden md:inline" /> paraphrasing it away.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-4 lg:w-[1200px]">
          {guidance.slice(0, 3).map((item, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <GuidanceCard item={item} />
            </Reveal>
          ))}

          <Reveal delay={0.15} className="hidden lg:block lg:row-span-2">
            <div className="relative h-[401px] w-full lg:w-[288px] overflow-hidden rounded-2xl border border-ink/10 bg-surface">
              <Image
                src="/help-center/image 334.png"
                alt="Evidence provenance detail in the Talvrin interface"
                fill
                sizes="(min-width: 1024px) 288px, 100vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </Reveal>

          {guidance.slice(3).map((item, index) => (
            <Reveal key={index + 3} delay={index * 0.05}>
              <GuidanceCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
