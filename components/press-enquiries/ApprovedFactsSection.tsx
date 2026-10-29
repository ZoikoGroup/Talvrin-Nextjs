import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, StatusPill } from "./shared";

const inScope = [
  "Professional coverage requests from journalists, editors, and producers",
  "Approved, on-the-record company facts and statements",
  "Brand asset and imagery permission requests",
  "Corrections to a prior public statement",
];

const facts: { text: string; supported: boolean }[] = [
  { text: "Talvrin is a trading name of Zoiko Markets, a Zoiko Financial Group company.", supported: true },
  {
    text: "Category: an evidence-first research and intelligence platform for global public markets — not a trading venue, broker, or adviser.",
    supported: true,
  },
  {
    text: "AI assists research discovery and summarization; it is never presented as a spokesperson or decision authority.",
    supported: true,
  },
  { text: "Named press spokesperson, publication calendar, and guaranteed response time", supported: false },
  { text: "Headcount, founding date, and funding figures", supported: false },
];

export default function ApprovedFactsSection() {
  return (
    <section id="approved-facts" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container className="max-w-[1132px]">
        <Reveal>
          <SectionEyebrow tone="amber">Official Category and Approved Facts</SectionEyebrow>
          <SectionHeading>What a press enquiry is — and what it isn&apos;t.</SectionHeading>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Reveal className="rounded-xl border border-ink/10 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.6px] text-teal-700">In scope here</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-ink marker:text-ink/40">
              {inScope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative min-h-[200px] overflow-hidden rounded-xl border border-ink/10 bg-white"
          >
            <Image
              src="/images/company/press-media/press-media-quick-facts-press.webp"
              alt="A spokesperson addressing an audience with a microphone"
              fill
              sizes="(min-width: 1024px) 541px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-8 max-w-[720px] text-base leading-6 text-muted">
            These facts are source-approved. Anything not listed is marked directly as not established,
            rather than implied.
          </p>
        </Reveal>

        <Reveal className="mt-6">
          <ul className="flex flex-col gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10">
            {facts.map((fact) => (
              <li
                key={fact.text}
                className="flex flex-col gap-3 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="max-w-[640px] text-base font-semibold text-ink">{fact.text}</p>
                <StatusPill tone={fact.supported ? "teal" : "amber"} className="px-2.5 text-xs">
                  {fact.supported ? "Source-supported" : "Not established"}
                </StatusPill>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-4 text-xs leading-5 text-muted">
          Full quick facts and quotable boilerplate live on{" "}
          <Link href="/company/press-media" className="text-accent-violet hover:underline">
            Press and Media
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
