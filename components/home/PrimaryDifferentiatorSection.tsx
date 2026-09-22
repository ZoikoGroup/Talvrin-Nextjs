import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const chain = [
  "Question",
  "Source Discovery",
  "Authority / Rights Check",
  "Time + Jurisdiction Context",
  "Evidence",
  "Interpretation",
  "Research View",
  "Monitoring",
];

const evidenceFields = [
  { label: "Source identity", value: "Federal Reserve" },
  { label: "Source class", value: "Primary source" },
  { label: "Original title", value: "Federal Open Market Committee Statement" },
  { label: "Publication time", value: "28 Aug 2026 · 14:00 ET" },
  { label: "Effective / reference period", value: "FOMC meeting cycle, Jul–Aug 2026" },
  { label: "Jurisdiction", value: "United States" },
  { label: "Version / supersession", value: "Current — not superseded" },
  { label: "Rights / access state", value: "Public · permitted use" },
];

export default function PrimaryDifferentiatorSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px 420px at 12% 8%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 92% 88%, rgba(185,129,50,0.12), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative">
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Primary Differentiator</SectionEyebrow>
          <SectionHeading inverted>Don&rsquo;t just show me the answer. Show me why.</SectionHeading>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-nowrap items-center justify-between overflow-x-auto">
          {chain.map((step, index) => (
            <div key={step} className="flex shrink-0 items-center gap-1.5">
              <span className="whitespace-nowrap rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/85">
                {step}
              </span>
              {index < chain.length - 1 && (
                <span className="text-white/30" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-14">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-violet">
            Example Evidence Card
          </p>
        </Reveal>

        <div className="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch">
          <Reveal delay={0.25} className="flex flex-col rounded-2xl border border-white/12 bg-white p-7">
            <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {evidenceFields.map((field) => (
                <div key={field.label}>
                  <p className="text-xs text-slate-500">{field.label}</p>
                  <p className="mt-1 text-sm font-semibold text-ink">{field.value}</p>
                </div>
              ))}
            </div>
            <Link
              href="/product/evidence"
              className="mt-auto inline-block border-t border-ink/8 pt-5 text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
            >
              Open source document →
            </Link>
          </Reveal>

          <Reveal
            delay={0.3}
            className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/12 lg:min-h-0"
          >
            <Image
              src="/images/home/home-differentiator-analyst.png"
              alt="Analyst reviewing a data visualization overlay on a laptop"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
