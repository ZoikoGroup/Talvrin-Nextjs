import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const rights = [
  {
    title: "Access / retrieve",
    body: "Jurisdiction, authentication, rate limits, technical restrictions and contractual access rights.",
  },
  {
    title: "Store / archive",
    body: "Whether raw copies, excerpts, extracted values and hashes may be retained, and for how long.",
  },
  {
    title: "Display / quote",
    body: "Permission for public or subscriber display, attribution, screenshot/image use, passage length and translation.",
  },
  {
    title: "Redistribute / API",
    body: "Rights for exports, downstream customers, third-party sharing and API transport — distinct from on-screen viewing.",
  },
  {
    title: "Geography / termination",
    body: "Contractual territory, customer type, expiry, revocation and deletion/purge duties.",
  },
  {
    title: "Derive / calculate",
    body: "Whether normalized values, indexes, analytics, indicators and cross-source transformations are permitted.",
  },
];

const manifest = [
  ["Supported scope", "Country/market, authority, source type, dataset families, time range and language, as actually onboarded."],
  ["Publication cadence", "Expected frequency and when it was last checked, per source — noting occasional, delayed or manual updates."],
  ["Known limits", "Issuers, jurisdictions, archives, subscription-only sources, paywalled publications or rights gaps that aren’t covered."],
  ["Freshness language", "“Last checked [time]” means Talvrin checked — not proof the underlying body published nothing new."],
  ["Confidence framing", "No blended “source trust,” completeness or reliability score. Concrete verification and coverage indicators only."],
];

const exceptions = [
  {
    label: "Missing source",
    quote: "We could not verify the original record for this claim. It is not presented as a verified fact.",
  },
  {
    label: "License restriction",
    quote: "This material cannot be reproduced here under its available usage rights.",
  },
  {
    label: "Conflicting evidence",
    quote: "Authoritative records differ. The discrepancy is shown and the disputed value is not used in calculations.",
  },
  {
    label: "Editorial correction",
    quote: "This item was corrected on [date]. View the change and the underlying records.",
  },
];

export default function RightsCoverageSection() {
  return (
    <section id="rights-coverage" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Rights &amp; Coverage</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[640px]">
            Source authority doesn&apos;t grant a legal license.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600">
            Display and calculation each require their own separate, verified
            permission — evaluated against six distinct rights before any use.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {rights.map((item, index) => (
            <Reveal
              key={item.title}
              delay={0.04 * (index + 2)}
              className="rounded-xl border border-ink/10 bg-surface p-5"
            >
              <h3 className="text-sm font-bold text-ink sm:text-base">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{item.body}</p>
            </Reveal>
          ))}
          <Reveal
            delay={0.3}
            className="relative hidden w-full overflow-hidden rounded-xl border border-ink/10 bg-surface xl:col-start-4 xl:row-span-2 xl:row-start-1 xl:block"
          >
            <Image
              src="/images/research/source-methodology/sm-rights-office-table.webp"
              alt="A manager talking with two colleagues around an office table covered in papers"
              fill
              sizes="308px"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-7 rounded-2xl bg-ink px-5 py-6 sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-widest text-accent-amber">
            Commercial licensing gate
          </p>
          <p className="mt-2 text-sm leading-6 text-white/85 sm:text-[15px]">
            We don&apos;t publish source-derived content — even if it&apos;s
            freely discoverable online — unless its actual permitted uses cover
            the proposed treatment. A blocked permission means we suppress the
            content or route to the official original; it&apos;s never read as
            implied consent.
          </p>
        </Reveal>

        <div className="mt-12 sm:mt-14">
          <Reveal>
            <SectionEyebrow>Coverage Manifest</SectionEyebrow>
            <h3 className="mt-3 text-xl font-bold text-ink">What&apos;s published, and what isn&apos;t yet.</h3>
          </Reveal>
          <dl className="mt-4">
            {manifest.map(([label, value], index) => (
              <Reveal
                key={label}
                delay={0.04 * (index + 1)}
                className="grid grid-cols-1 gap-x-4 gap-y-1 border-b border-ink/10 py-5 md:grid-cols-[200px_minmax(0,1fr)]"
              >
                <dt className="text-sm font-semibold text-ink">{label}</dt>
                <dd className="text-sm leading-6 text-gray-600">{value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <div className="mt-12 sm:mt-14">
          <Reveal>
            <SectionEyebrow tone="amber">When Things Aren&apos;t Clean</SectionEyebrow>
            <h3 className="mt-3 text-xl font-bold text-ink">Exceptions, in the exact words we show you.</h3>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
            {exceptions.map((item, index) => (
              <Reveal
                key={item.label}
                delay={0.05 * (index + 1)}
                className="rounded-xl border border-ink/10 bg-surface p-5"
              >
                <figure>
                  <figcaption className="text-[11px] font-bold uppercase tracking-widest text-accent-amber">
                    {item.label}
                  </figcaption>
                  <blockquote className="mt-2 text-sm italic leading-6 text-slate-700">
                    “{item.quote}”
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
