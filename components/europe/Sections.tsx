import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import {
  LabelledRows,
  SectionEyebrow,
  SectionHeading,
  SectionLede,
} from "../global-coverage/shared";

const IMG = "/images/global/europe";

function StatusPill({ children }: { children: ReactNode }) {
  return (
    <span className="shrink-0 rounded-full border border-slate-600/25 bg-surface px-2.5 py-[5px] text-xs font-bold text-slate-600">
      {children}
    </span>
  );
}

function SidePhoto({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <Reveal
      delay={0.2}
      className={clsx("relative hidden overflow-hidden rounded-2xl border border-ink/10 lg:block", className)}
    >
      <Image src={`${IMG}/${src}`} alt={alt} fill sizes="420px" className="object-cover" />
    </Reveal>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(640px 440px at 16% 6%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 88% 88%, rgba(185,129,50,0.10), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,645px)_minmax(0,471px)] lg:justify-between lg:gap-10">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Global / Europe</SectionEyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Europe
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 max-w-[520px] text-lg leading-8 text-white/70">
              European market research coverage: countries, institutions and source provenance.
            </p>
            <p className="mt-3 max-w-[620px] text-base leading-6 text-white/60">
              Talvrin is building a source-linked research and monitoring workspace for global
              public markets. This page explains Europe&apos;s place in that architecture without
              naming unsupported active countries or institutions.
            </p>
          </Reveal>

          <Reveal
            delay={0.25}
            className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <LinkButton href="/markets/market-coverage" variant="onDark" className="px-7 py-[15px] text-base">
              View Current Market Coverage
            </LinkButton>
            <Link
              href="/how-talvrin-works"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-base font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              How Talvrin Works
            </Link>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mt-6 max-w-[620px] text-xs leading-[18px] text-white/50">
              Market, source, language, and access availability depend on published verification.
              Research is not trade execution or investment advice. Security researcher? Use{" "}
              <Link
                href="/support/security-contact"
                className="text-white/75 underline transition-colors hover:text-white"
              >
                Security Contact
              </Link>{" "}
              for responsible disclosure.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative aspect-[471/392] w-full overflow-hidden rounded-2xl">
          <Image
            src={`${IMG}/europe-hero-team.webp`}
            alt="Team laughing together around a meeting table"
            fill
            priority
            sizes="(min-width: 1024px) 471px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}

const nonNegotiables = [
  "Europe is not one legal regime.",
  "EU and Europe are not interchangeable.",
  "EEA, UK and Switzerland differ.",
  "Multilingual UI only after translation approval.",
];

export function AuthoritySection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-2.5">
        <Reveal>
          <SectionEyebrow tone="amber">Authority &amp; boundaries</SectionEyebrow>
          <SectionHeading>Europe is not one legal regime.</SectionHeading>
          <SectionLede className="max-w-[635px]">
            The European Union, the wider European Economic Area, the United Kingdom and
            Switzerland sit under distinct legal and regulatory regimes. Talvrin&apos;s research
            architecture is designed to extend across all of them, but that design choice is not a
            coverage claim. This page states, jurisdiction by jurisdiction, what is actually
            released, pending, or not yet available.
          </SectionLede>
        </Reveal>

        <Reveal delay={0.15} className="rounded-2xl bg-surface p-7">
          <p className="pb-4 text-xs font-bold uppercase tracking-wide text-ink">Non-negotiable</p>
          <ul>
            {nonNegotiables.map((n) => (
              <li key={n} className="flex gap-3 border-t border-ink/10 py-3">
                <span aria-hidden="true" className="font-bold text-accent-violet">
                  —
                </span>
                <span className="text-base leading-6 text-slate-700">{n}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

const groupings = [
  {
    name: "European Union",
    body: "Jurisdiction and source context for European Union member states, by sub-region.",
    link: { label: "View European Union ↓", href: "#european-union" },
  },
  {
    name: "UK & EFTA",
    body: "Jurisdiction and source context for the United Kingdom, Switzerland, Norway and Iceland.",
    link: { label: "View UK & EFTA ↓", href: "#research-availability" },
  },
];

export function ScopeSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-6">
        <div>
          <Reveal>
            <SectionEyebrow>Europe and regional scope</SectionEyebrow>
            <SectionHeading>Three groupings, each its own approval object.</SectionHeading>
            <SectionLede>
              European Union member states, non-EU Europe, and cross-border or supranational
              institutions are tracked separately below. None inherits another&apos;s status.
            </SectionLede>
          </Reveal>
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {groupings.map((g, i) => (
              <Reveal
                key={g.name}
                as="li"
                delay={i * 0.08}
                className="flex flex-col gap-3.5 rounded-2xl border border-ink/10 bg-white p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-ink">{g.name}</h3>
                  <StatusPill>PENDING APPROVAL</StatusPill>
                </div>
                <p className="flex-1 pb-5 text-sm leading-5 text-slate-600">{g.body}</p>
                <a
                  href={g.link.href}
                  className="text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
                >
                  {g.link.label}
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
        <SidePhoto
          src="europe-scope-meeting.webp"
          alt="Presenter leading a meeting in a bright conference room"
          className="aspect-[420/426]"
        />
      </Container>
    </section>
  );
}

const subRegions = ["Western Europe", "Northern Europe", "Southern Europe"];

export function EuDistinctionSection() {
  return (
    <section id="european-union" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_312px] lg:gap-6">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">EU versus non-EU distinction</SectionEyebrow>
            <SectionHeading>Membership status is not a data status.</SectionHeading>
            <SectionLede>
              EU membership, EEA participation and bilateral arrangements are political and legal
              facts, not a measure of what Talvrin has published. Each jurisdiction below carries
              its own independent record regardless of grouping.
            </SectionLede>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 text-sm font-bold uppercase tracking-wide text-accent-violet">
              European Union — by sub-region
            </p>
          </Reveal>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {subRegions.map((r, i) => (
              <Reveal
                key={r}
                as="li"
                delay={i * 0.06}
                className="flex flex-col gap-3 rounded-2xl border border-ink/10 bg-surface p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-ink">{r}</h3>
                  <StatusPill>NOT CURRENTLY AVAILABLE</StatusPill>
                </div>
                <p className="text-sm leading-5 text-slate-600">
                  EU sub-region grouping; no jurisdiction-level or source record is published yet.
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
        <SidePhoto
          src="europe-eu-office.webp"
          alt="Colleagues working at desks in an open-plan office"
          className="aspect-[312/424]"
        />
      </Container>
    </section>
  );
}

const SUPPORTED = "bg-accent-violet/10 border-accent-violet/30 text-accent-violet";
const NOT_AVAILABLE = "bg-surface border-slate-600/20 text-slate-600";

const availability = [
  {
    label: "SUPPORTED",
    badge: SUPPORTED,
    body: "English interface — available sitewide, independent of regional source coverage.",
  },
  ...[
    "European Union jurisdiction research — not yet verified for any member state.",
    "United Kingdom and Swiss research — not yet verified.",
    "Non-English source languages — not yet verified for any European jurisdiction.",
  ].map((body) => ({ label: "NOT CURRENTLY AVAILABLE", badge: NOT_AVAILABLE, body })),
];

export function AvailabilitySection() {
  return (
    <section id="research-availability" className="scroll-mt-24 bg-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Research availability</SectionEyebrow>
          <SectionHeading>What&apos;s available today, stated plainly.</SectionHeading>
          <SectionLede>
            Interface language is separate from source-language support, and from any single
            jurisdiction&apos;s research status. Each row below carries its own status; none
            inherits another&apos;s.
          </SectionLede>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <LabelledRows rows={availability} />
        </Reveal>
      </Container>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="bg-ink py-16 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            See what&apos;s released before you assume European coverage.
          </h2>
          <p className="text-base leading-7 text-white/70">
            Request access to Talvrin, backed by jurisdiction and source pages that never overstate
            what is actually published.
          </p>
          <div className="mt-3 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/request-access" variant="onDark" className="px-7 py-[15px] text-base">
              Request Access
            </LinkButton>
            <Link
              href="/global/coverage"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-base font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Back to Global Coverage
            </Link>
          </div>
          <p className="text-sm text-white/60">
            Research and intelligence platform. No trade execution, suitability ranking, asset
            allocation, or manufactured investment recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
