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

// Folder name is case-sensitive on the Linux server.
export const IMG = "/images/global/Americas";

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
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,620px)_minmax(0,471px)] lg:justify-between lg:gap-10">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Global / Americas</SectionEyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Americas
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 max-w-[500px] text-lg leading-8 text-white/70">
              Market coverage across the Americas: source evidence and jurisdiction transparency.
            </p>
            <p className="mt-3 max-w-[620px] text-base leading-6 text-white/60">
              Talvrin is building a source-linked research and monitoring workspace for global
              public markets. This page explains the Americas&apos; place in that architecture
              without naming unsupported active countries.
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

        <Reveal
          delay={0.2}
          className="relative aspect-[471/392] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src={`${IMG}/americas-hero-meeting.webp`}
            alt="Colleagues talking over documents in a meeting"
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

export function AuthoritySection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-2.5">
        <Reveal>
          <SectionEyebrow tone="amber">Authority &amp; boundaries</SectionEyebrow>
          <SectionHeading>Americas is not one legal regime.</SectionHeading>
          <SectionLede className="max-w-[635px]">
            North, Central and South America, plus the Caribbean, span dozens of distinct legal and
            regulatory jurisdictions. Talvrin&apos;s research architecture is designed to extend
            across all of them, but that design choice is not a coverage claim. This page states,
            jurisdiction by jurisdiction, what is actually released, pending, or not yet available.
          </SectionLede>
        </Reveal>
        <Reveal delay={0.15} className="relative aspect-[635/275] w-full overflow-hidden rounded-2xl">
          <Image
            src={`${IMG}/americas-authority-team.webp`}
            alt="Business team reviewing work together"
            fill
            sizes="(min-width: 1024px) 635px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}

const subAreas = [
  {
    name: "North America",
    body: "Jurisdiction and source context for the United States, Canada and Mexico.",
    link: { label: "View North America ↓", href: "#north-america" },
  },
  {
    name: "Latin America & Caribbean",
    body: "Jurisdiction and source context for Central America, South America and the Caribbean.",
    link: { label: "View Latin America ↓", href: "#latin-america" },
  },
];

export function RegionOverviewSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_417px] lg:gap-6">
        <div>
          <Reveal>
            <SectionEyebrow>Region overview</SectionEyebrow>
            <SectionHeading>Three sub-areas, each its own approval object.</SectionHeading>
            <SectionLede>
              North America, Latin America &amp; the Caribbean, and cross-border institutions are
              tracked separately below. None inherits another&apos;s status.
            </SectionLede>
          </Reveal>
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {subAreas.map((a, i) => (
              <Reveal
                key={a.name}
                as="li"
                delay={i * 0.08}
                className="flex flex-col gap-3.5 rounded-2xl border border-ink/10 bg-white p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-ink">{a.name}</h3>
                  <StatusPill>PENDING APPROVAL</StatusPill>
                </div>
                <p className="flex-1 text-sm leading-5 text-slate-600">{a.body}</p>
                <a
                  href={a.link.href}
                  className="text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
                >
                  {a.link.label}
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
        <SidePhoto
          src="americas-regions-office.webp"
          alt="Colleagues working together in a bright office"
          className="aspect-[417/407]"
        />
      </Container>
    </section>
  );
}

const fields = [
  {
    name: "record_id",
    body: "Stable opaque identifier for the jurisdiction record, never inferred from its display label.",
  },
  {
    name: "jurisdiction_id",
    body: "Authority-aligned jurisdiction reference where approved; not itself a legal conclusion.",
  },
  { name: "source_id", body: "Original publisher or source identity, with inspectable provenance." },
  { name: "source_class", body: "Official, licensed, public, or other controlled source-class taxonomy." },
  { name: "published_at", body: "Source publication time, including time zone." },
  { name: "effective_period", body: "Applicable economic or legal period, where meaningful." },
  { name: "last_verified_at", body: "Actual governance verification timestamp, not the page build time." },
  { name: "claim_owner", body: "The product, data-rights, or editorial approver responsible for the claim." },
];

function FieldCard({ name, body }: { name: string; body: string }) {
  return (
    <div className="flex h-full flex-col gap-1.5 rounded-2xl border border-ink/10 bg-surface p-5">
      <h3>
        <code className="font-mono text-xs font-bold text-ink">{name}</code>
      </h3>
      <p className="text-sm leading-5 text-slate-600">{body}</p>
    </div>
  );
}

export function RecordFieldsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Jurisdiction discovery</SectionEyebrow>
          <SectionHeading>What a jurisdiction record actually carries.</SectionHeading>
          <SectionLede>
            Country and sub-region detail is available as text and lists below — not only through a
            map — so the same information reaches keyboard and screen-reader visitors. Every
            Americas jurisdiction or source record is described by the same fields, whether or not
            it is published yet.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fields.slice(0, 4).map((f, i) => (
            <Reveal key={f.name} delay={i * 0.05}>
              <FieldCard {...f} />
            </Reveal>
          ))}
          <div className="grid grid-cols-1 gap-5 sm:col-span-2 sm:grid-cols-2">
            {fields.slice(4).map((f, i) => (
              <Reveal key={f.name} delay={i * 0.05}>
                <FieldCard {...f} />
              </Reveal>
            ))}
          </div>
          <SidePhoto src="americas-record-desk.webp" alt="" className="sm:col-span-2" />
        </div>
      </Container>
    </section>
  );
}

function JurisdictionCards({
  items,
  cardClass,
}: {
  items: { name: string; body: string }[];
  cardClass: string;
}) {
  return (
    <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
      {items.map((j, i) => (
        <Reveal
          key={j.name}
          as="li"
          delay={i * 0.08}
          className={clsx("flex flex-col gap-3 rounded-2xl border border-ink/10 p-5", cardClass)}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-base font-bold text-ink">{j.name}</h3>
            <StatusPill>NOT CURRENTLY AVAILABLE</StatusPill>
          </div>
          <p className="text-sm leading-5 text-slate-600">{j.body}</p>
        </Reveal>
      ))}
    </ul>
  );
}

export function NorthAmericaSection() {
  return (
    <section id="north-america" className="scroll-mt-24 bg-surface py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_419px] lg:gap-6">
        <div>
          <Reveal>
            <SectionEyebrow>North America</SectionEyebrow>
            <SectionHeading>United States, Canada and Mexico sit in separate jurisdictions.</SectionHeading>
            <SectionLede>
              Federal, state and provincial authority differs across the three. U.S. availability,
              if and when published, will not imply Canada or Mexico — each carries its own record.
            </SectionLede>
          </Reveal>
          <JurisdictionCards
            cardClass="bg-white"
            items={[
              {
                name: "United States",
                body: "Federal and state jurisdiction context; no dataset or market record is published yet.",
              },
              {
                name: "Canada",
                body: "Federal and provincial jurisdiction context; no dataset or market record is published yet.",
              },
            ]}
          />
        </div>
        <SidePhoto
          src="americas-north-laptop.webp"
          alt="Smiling man working at a laptop during a meeting"
          className="aspect-[419/369]"
        />
      </Container>
    </section>
  );
}

export function LatinAmericaSection() {
  return (
    <section id="latin-america" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_419px] lg:gap-6">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Latin America &amp; the Caribbean</SectionEyebrow>
            <SectionHeading>Grouped by sub-region until country-level records are approved.</SectionHeading>
            <SectionLede>
              Central America, South America and the Caribbean are shown as sub-regions rather than
              individual country entries, so nothing here implies a specific, unverified national
              dataset.
            </SectionLede>
          </Reveal>
          <JurisdictionCards
            cardClass="bg-surface"
            items={[
              {
                name: "Central America",
                body: "Sub-region grouping; no jurisdiction-level or source record is published yet.",
              },
              {
                name: "South America",
                body: "Sub-region grouping; no jurisdiction-level or source record is published yet.",
              },
            ]}
          />
        </div>
        <SidePhoto
          src="americas-latam-presenter.webp"
          alt="Presenter explaining slides to an audience"
          className="aspect-[419/369]"
        />
      </Container>
    </section>
  );
}

const SUPPORTED = "bg-accent-violet/10 border-accent-violet/30 text-accent-violet";
const NOT_AVAILABLE = "bg-surface border-slate-600/20 text-slate-600";

const languages = [
  {
    label: "SUPPORTED",
    badge: SUPPORTED,
    body: "English interface — available sitewide, independent of regional source coverage.",
  },
  ...["Spanish", "Portuguese", "French"].map((lang) => ({
    label: "NOT CURRENTLY AVAILABLE",
    badge: NOT_AVAILABLE,
    body: `${lang}-language sources — not yet verified for any Americas jurisdiction.`,
  })),
];

export function LanguageSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow>Source &amp; language coverage</SectionEyebrow>
          <SectionHeading>Local languages only where verified.</SectionHeading>
          <SectionLede>
            Interface language is separate from source-language support. Each row below carries
            its own status; neither inherits the other&apos;s.
          </SectionLede>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <LabelledRows rows={languages} />
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
            See what&apos;s released before you assume Americas coverage.
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
