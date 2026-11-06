import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, StatusPill } from "./shared";

const truths = [
  {
    statement: (
      <>
        Talvrin is an evidence-led, source-linked research and monitoring platform for institutional
        <br className="hidden md:inline" />
        and professional markets.
      </>
    ),
    status: "SOURCE-SUPPORTED",
    tone: "green" as const,
  },
  {
    statement: (
      <>
        Data rights, licensing, entitlement, and permitted use are part of Talvrin&apos;s trust architecture.
      </>
    ),
    status: "SOURCE-SUPPORTED",
    tone: "green" as const,
  },
  {
    statement: (
      <>
        AI is assistive in research discovery; it is never the authoritative evidence or a decision-
        <br className="hidden md:inline" />
        maker.
      </>
    ),
    status: "SOURCE-SUPPORTED",
    tone: "green" as const,
  },
  {
    statement: (
      <>
        A formal partner program, partner tiers, certification, or partner marketplace
      </>
    ),
    status: "NOT ESTABLISHED",
    tone: "amber" as const,
  },
  {
    statement: (
      <>
        Reseller, referral, revenue-share, or exclusivity terms
      </>
    ),
    status: "NOT ESTABLISHED",
    tone: "amber" as const,
  },
  {
    statement: (
      <>
        Named partner logos, quotes, case studies, or an approved-partner roster
      </>
    ),
    status: "NOT ESTABLISHED",
    tone: "amber" as const,
  },
  {
    statement: (
      <>
        A specific technical integration, connector, or API availability
      </>
    ),
    status: "NOT ESTABLISHED",
    tone: "amber" as const,
  },
];

export default function ProgramTruthSection() {
  return (
    <section id="program-truth" className="scroll-mt-20 bg-[#F6F5FB] py-16 sm:py-20 lg:py-24">
      <Container className="max-w-[1100px]">
        <Reveal>
          <SectionEyebrow tone="amber">PLATFORM CONTEXT AND PROGRAM TRUTH</SectionEyebrow>
          <SectionHeading>What&apos;s confirmed today — and what isn&apos;t yet.</SectionHeading>
          <SectionLede>
            Partner claims, logos, and program benefits are never shown without an approved relationship and
            <br className="hidden md:inline" />
            rights agreement. Here&apos;s what&apos;s actually established.
          </SectionLede>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <div className="overflow-hidden rounded-[12px] border border-[rgba(23,19,53,0.08)] bg-[rgba(23,19,53,0.08)] shadow-sm">
            <div className="flex flex-col gap-[1px]">
              {truths.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between gap-4 bg-white px-5 py-4 sm:flex-row sm:items-center"
                >
                  <div className="text-[15px] font-semibold text-[#171335]">
                    {item.statement}
                  </div>
                  <StatusPill tone={item.tone}>{item.status}</StatusPill>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-4 text-[13px] leading-[20.8px] text-[#5D5A72]">
            More on rights, licensing, and governance lives on{" "}
            <Link href="/trust/data-rights" className="text-[#6C5CE7] underline hover:text-[#171335]">
              Data Rights
            </Link>{" "}
            and the{" "}
            <Link href="/trust/trust-center" className="text-[#6C5CE7] underline hover:text-[#171335]">
              Trust Center
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
