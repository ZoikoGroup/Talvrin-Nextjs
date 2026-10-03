import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const fields = [
  {
    title: "Source identity",
    body: "Who published the information — a named organization, publisher, or issuer whenever known.",
  },
  {
    title: "Source class",
    body: "What kind of source it is, using governed classification only.",
  },
  {
    title: "Publication time",
    body: "When it was published, with timezone shown when material.",
  },
  {
    title: "Effective / reference period",
    body: "When the information applies — kept separate from publication time when they differ.",
  },
  {
    title: "Version / supersession",
    body: "Whether the document has changed, shown when revision history is supported.",
  },
  {
    title: "Rights / access state",
    body: "What you're permitted to access — never exposed beyond permitted use.",
  },
];

export default function EvidenceChainSection() {
  return (
    <section id="evidence" className="scroll-mt-32 bg-ink py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Understand the Evidence Chain</SectionEyebrow>
          <SectionHeading inverted>The source should never disappear behind the answer.</SectionHeading>
          <p className="mt-3 max-w-[720px] text-base leading-[25.6px] text-white/75 sm:text-lg">
            Where applicable, inspect who published the information, when, what period it applies
            to, which jurisdiction matters, whether a newer version supersedes it, and what access
            rights apply.
          </p>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fields.slice(0, 2).map((field, index) => (
            <Reveal
              key={field.title}
              delay={index * 0.05}
              className="rounded-xl bg-[#1d1a3d] px-5 py-[22px]"
            >
              <p className="text-[15px] font-bold text-white">{field.title}</p>
              <p className="mt-2 text-sm leading-[21.7px] text-white/70">{field.body}</p>
            </Reveal>
          ))}

          <Reveal
            delay={0.15}
            className="relative row-span-3 hidden min-h-[260px] overflow-hidden rounded-xl bg-[#1d1a3d] lg:block"
          >
            <Image
              src="/images/getting-started/getting-started-evidence-chain-office.webp"
              alt="An analyst reviewing a source document in a glass-walled office"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          {fields.slice(2).map((field, index) => (
            <Reveal
              key={field.title}
              delay={(index + 2) * 0.05}
              className="rounded-xl bg-[#1d1a3d] px-5 py-[22px]"
            >
              <p className="text-[15px] font-bold text-white">{field.title}</p>
              <p className="mt-2 text-sm leading-[21.7px] text-white/70">{field.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="pt-[14px]">
          <Link
            href="/trust/ai-principles"
            className="text-sm font-semibold text-accent-violet hover:text-white"
          >
            Read the full AI boundary →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
