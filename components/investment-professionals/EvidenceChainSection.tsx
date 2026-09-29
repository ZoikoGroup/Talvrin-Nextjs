import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const fields = [
  {
    number: "01",
    title: "Source identity",
    body: "Named organization, issuer, regulator, publisher, or provider.",
    note: 'Never a generic "web source".',
  },
  {
    number: "02",
    title: "Source class",
    body: "Primary, official, licensed, institutional, or other governed class.",
    note: "Class visible and consistent.",
  },
  {
    number: "03",
    title: "Original title",
    body: "Human-readable source title.",
    note: "Never paraphrased into a generic headline.",
  },
  {
    number: "04",
    title: "Publication time",
    body: "Displayed with timezone where material.",
    note: "No one-date simplification.",
  },
  {
    number: "05",
    title: "Effective / reference period",
    body: "Separate from publication time when information applies to another period.",
    note: "Never merged with publication date.",
  },
  {
    number: "06",
    title: "Jurisdiction",
    body: "Explicit when legally, economically, or market-structurally relevant.",
    note: "No blanket cross-jurisdiction equivalence.",
  },
  {
    number: "07",
    title: "Version / supersession",
    body: "Revised, amended, corrected, or superseded state exposed where applicable.",
    note: "No silent source replacement.",
  },
  {
    number: "08",
    title: "Rights / access state",
    body: "Respects permitted use, licensing, and entitlements.",
    note: "Never exposes restricted content.",
  },
  {
    number: "09",
    title: "Evidence relationship",
    body: "Supports, contradicts, updates, or contextualizes the question.",
    note: "Helps reviewability, not opaque synthesis.",
  },
  {
    number: "10",
    title: "Open source action",
    body: "Deep link or governed viewer route where permitted.",
    note: "Never a dead or generic link.",
  },
];

export default function EvidenceChainSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="amber">Evidence Chain</SectionEyebrow>
          <SectionHeading>
            Don&apos;t just show the conclusion. Preserve the path back to the evidence.
          </SectionHeading>
          <SectionLede className="max-w-[860px] sm:text-base sm:leading-7">
            Every evidence card carries source identity, class, timing, jurisdiction, version,
            rights, and relationship — never a generic &quot;source&quot; label.
          </SectionLede>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,411px)_minmax(0,785px)]">
          <Reveal
            delay={0.1}
            className="relative aspect-[411/575] w-full max-w-[411px] overflow-hidden rounded-2xl bg-ink"
          >
            <Image
              src="/images/solutions/investment-professionals/ip-evidence-chain-street.webp"
              alt="Three colleagues walking and talking on a city street"
              fill
              sizes="(min-width: 1280px) 411px, (min-width: 1024px) 340px, 100vw"
              className="object-cover"
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {fields.map((field, index) => (
              <Reveal
                key={field.number}
                delay={index * 0.03}
                className="border-b border-ink/10 py-3.5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-accent-amber">{field.number}</span>
                  <h3 className="text-base font-bold text-ink">{field.title}</h3>
                </div>
                <p className="mt-1 text-xs leading-5 text-slate-600">{field.body}</p>
                <p className="mt-0.5 text-xs leading-4 text-accent-amber">{field.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
