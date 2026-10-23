import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

// Listed in reading order; the design's grid shows them as 01 02 04 / 06 03 05.
const pillars = [
  {
    n: "01",
    title: "Source-linked evidence",
    body: "Issuer filings, exchange records, official statistics and cited source anchors behind every claim.",
  },
  {
    n: "02",
    title: "Reproducible analysis",
    body: "Reported versus calculated metrics stay clearly labelled, with formula and version visible.",
  },
  {
    n: "03",
    title: "Change awareness*",
    body: "Specific source updates, corrections and watchlist-linked changes where shipped.",
  },
  {
    n: "04",
    title: "Team governance*",
    body: "Saved briefs, sharing, roles and review states only where supported.",
  },
  {
    n: "05",
    title: "Scope & rights context",
    body: "Visibility of export and display permissions and source-usage restrictions.",
  },
  {
    n: "06",
    title: "Human decision",
    body: "Research informs judgment; the institution retains the decision and its responsibility.",
  },
];

export default function PillarsSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">How Talvrin supports institutional research</SectionEyebrow>
          <SectionHeading inverted>
            Six pillars, shown only where the capability is actually released.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_500px]">
          <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal
                key={p.n}
                as="li"
                delay={(i % 3) * 0.06}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-xs font-bold tracking-wide text-indigo-300">{p.n}</span>
                <h3 className="mt-2.5 text-base font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-[22px] text-white/70">{p.body}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal
            delay={0.2}
            className="relative hidden overflow-hidden rounded-2xl border border-white/10 lg:block"
          >
            <Image
              src={`${IMG}/fi-pillars-discussion.webp`}
              alt="Four colleagues in conversation at a busy event"
              fill
              sizes="500px"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-xs leading-5 text-white/50">
            * Displayed only when released and supported for your scope; otherwise Talvrin shows
            the verified baseline capability.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
