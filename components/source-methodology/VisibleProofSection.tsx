import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const fields = [
  ["Reported figure", "Value shown elsewhere in the product, plus its status: verified, revised or disputed."],
  ["Source", "Official issuer report, exchange release or statistical series — full title and origin."],
  ["Pinpoint", "Document ID, page/table/paragraph, source URL and access date."],
  ["Measurement", "Unit, scale, fiscal/observation period, and whether it’s reported or estimated."],
  ["Timeline", "Published at, valid for, verified/recorded at, and superseded by — where relevant."],
  ["Derivation", "Reported directly, or a method version with input record IDs and calculation precision."],
  ["Limitations", "Coverage scope, any conflict, revision/rights notice, and the last verification state."],
  ["Actions", "Open original ↗ · See method · Report an issue"],
];

export default function VisibleProofSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Visible Proof</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[760px]">
            Every published figure opens into its own evidence record.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[820px] text-base leading-7 text-gray-600">
            You should be able to inspect the origin and limits of an important
            figure without needing an internal admin tool.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 lg:grid-cols-2 lg:gap-[18px]">
          <Reveal delay={0.1} className="rounded-2xl bg-ink p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[11px] font-bold uppercase tracking-widest text-white/60">
                View evidence
              </p>
              <span className="rounded-full bg-accent-violet/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-indigo-200">
                Expandable sheet
              </span>
            </div>
            <dl className="mt-4 flex flex-col gap-4">
              {fields.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[11px] font-bold uppercase tracking-widest text-white/55">{label}</dt>
                  <dd className="mt-1 text-sm leading-6 text-white/90">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-base font-bold text-ink">Sample evidence journey</h3>
              <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-red-700">
                Illustrative — not a live fact
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-[15px]">
              A static, accessible walkthrough with structural placeholders only
              — demonstrating transparency without inventing financial data or
              promising live coverage.
            </p>
            <div className="relative mt-5 aspect-[631/390] w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface lg:aspect-auto lg:min-h-[340px] lg:flex-1">
              <Image
                src="/images/research/source-methodology/sm-visible-proof-whiteboard.webp"
                alt="A presenter pointing to a process diagram on a whiteboard while two colleagues work on laptops"
                fill
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
