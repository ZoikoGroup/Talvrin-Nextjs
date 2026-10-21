"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

type Row = { label: string; text: string; caution?: boolean };
type ClassCard = { code: string; title: string; rows: Row[] };

const tabs: { label: string; cards: ClassCard[] }[] = [
  {
    label: "Source authority",
    cards: [
      {
        code: "H0",
        title: "Originating record",
        rows: [
          {
            label: "Can support",
            text: "Confirmed facts directly from the issuer, regulator, exchange, central bank or statistics agency.",
          },
          {
            label: "Cannot establish",
            text: "That the record is complete, final, or free of ordinary filing error.",
          },
          {
            label: "When we may exclude it",
            text: "Identity, version, rights or content checks fail.",
            caution: true,
          },
        ],
      },
      {
        code: "H1",
        title: "Custodied original",
        rows: [
          {
            label: "Can support",
            text: "The same fact, held by a recognized archive or custodian with a verified chain back to the original.",
          },
          {
            label: "Cannot establish",
            text: "A new or separate fact — authority still traces to the H0 original.",
          },
          {
            label: "When we may exclude it",
            text: "Custody chain or content integrity can’t be verified.",
            caution: true,
          },
        ],
      },
      {
        code: "H2",
        title: "Licensed data",
        rows: [
          {
            label: "Can support",
            text: "Structured or historical data, for the specific uses its commercial license actually covers.",
          },
          {
            label: "Cannot establish",
            text: "Any use beyond what is actually licensed — a feed license is never assumed to include redistribution.",
          },
          {
            label: "When we may exclude it",
            text: "Derivation lineage is unclear, or the proposed use falls outside the license terms.",
            caution: true,
          },
        ],
      },
      {
        code: "H3",
        title: "Attributed secondary",
        rows: [
          {
            label: "Can support",
            text: "Discovery leads and clearly labeled third-party commentary or interpretation.",
          },
          {
            label: "Cannot establish",
            text: "A verified, material financial fact — secondary sources can’t replace an original.",
          },
          {
            label: "When we may exclude it",
            text: "Always, as a standalone source for a verified material financial claim.",
            caution: true,
          },
        ],
      },
    ],
  },
  {
    label: "Evidence type",
    cards: [
      {
        code: "E1",
        title: "Reported value",
        rows: [
          { label: "What it is", text: "A figure stated directly in the source, in its original unit, scale and period." },
          { label: "How it’s shown", text: "As reported, with a pinpoint to the page, table or paragraph it came from." },
          { label: "Never treated as", text: "Restated or adjusted unless the source itself says so.", caution: true },
        ],
      },
      {
        code: "E2",
        title: "Derived value",
        rows: [
          { label: "What it is", text: "A value calculated from one or more reported inputs using a versioned method." },
          { label: "How it’s shown", text: "With the method version, input record IDs and calculation precision." },
          { label: "Never treated as", text: "A figure the source itself published.", caution: true },
        ],
      },
      {
        code: "E3",
        title: "Estimate",
        rows: [
          { label: "What it is", text: "A forecast, projection or provisional figure published by an identified party." },
          { label: "How it’s shown", text: "Labeled an estimate, with who made it and when — even after actuals arrive." },
          { label: "Never treated as", text: "A reported actual, or silently replaced by one.", caution: true },
        ],
      },
      {
        code: "E4",
        title: "Interpretation",
        rows: [
          { label: "What it is", text: "Commentary, explanation or summary that adds meaning beyond the source text." },
          { label: "How it’s shown", text: "Separately from source fact, with its author or AI assistance labeled." },
          { label: "Never treated as", text: "Evidence for a verified financial claim.", caution: true },
        ],
      },
    ],
  },
  {
    label: "Verification state",
    cards: [
      {
        code: "V1",
        title: "Verified",
        rows: [
          { label: "Means", text: "Identity, version, rights and content checks passed for this source version." },
          { label: "Does not mean", text: "The underlying fact is complete, final or error-free." },
          { label: "Can change when", text: "The source is revised, corrected or retracted.", caution: true },
        ],
      },
      {
        code: "V2",
        title: "Revised",
        rows: [
          { label: "Means", text: "A newer admissible version replaced an earlier one for the current view." },
          { label: "Does not mean", text: "The earlier value was wrong at the time it was published." },
          { label: "Can change when", text: "A further revision or correction is issued.", caution: true },
        ],
      },
      {
        code: "V3",
        title: "Disputed",
        rows: [
          { label: "Means", text: "Official records differ and the conflict is not yet resolved." },
          { label: "Does not mean", text: "Either value is chosen, averaged or preferred." },
          { label: "Can change when", text: "An authority resolves or supersedes the conflicting record.", caution: true },
        ],
      },
      {
        code: "V4",
        title: "Unverified",
        rows: [
          { label: "Means", text: "Required checks have not been completed or could not be completed." },
          { label: "Does not mean", text: "The claim is false — only that it isn’t presented as verified." },
          { label: "Can change when", text: "An admissible original is found and checks pass.", caution: true },
        ],
      },
    ],
  },
];

export default function SourceClassesSection() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const keys: Record<string, number> = {
      ArrowRight: (active + 1) % tabs.length,
      ArrowLeft: (active - 1 + tabs.length) % tabs.length,
      Home: 0,
      End: tabs.length - 1,
    };
    const next = keys[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="source-classes" className="scroll-mt-20 bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Source Classes &amp; Evidence Dimensions</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[800px]">
            Authority, content and validation are three separate questions.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[800px] text-base leading-7 text-gray-600">
            A source&apos;s authority, what kind of content it is, and whether it
            has been validated never collapse into one score. Each is shown on
            its own terms.
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-8 sm:mt-10">
          <div
            role="tablist"
            aria-label="Evidence dimensions"
            className="grid w-full grid-cols-3 gap-1 rounded-xl border border-ink/10 bg-white p-1 sm:inline-flex sm:w-auto"
          >
            {tabs.map((tab, index) => {
              const selected = index === active;
              return (
                <button
                  key={tab.label}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  id={`${baseId}-tab-${index}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={onKeyDown}
                  className={clsx(
                    "rounded-lg px-2 py-2.5 text-xs font-semibold leading-tight transition-colors sm:whitespace-nowrap sm:px-[18px] sm:text-sm",
                    selected ? "bg-ink text-white" : "text-slate-700 hover:bg-ink/5"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active}`}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[18px]"
        >
          {tabs[active].cards.map((card) => (
            <article key={card.code} className="flex flex-col rounded-2xl border border-ink/10 bg-white p-5 sm:p-6">
              <h3 className="flex items-center gap-3 text-base font-bold text-ink">
                <span className="rounded-full bg-accent-violet/10 px-2.5 py-0.5 text-[11px] font-bold text-accent-violet">
                  {card.code}
                </span>
                {card.title}
              </h3>
              <dl className="mt-3 flex flex-col gap-3">
                {card.rows.map((row) => (
                  <div key={row.label}>
                    <dt
                      className={clsx(
                        "text-[11px] font-bold uppercase tracking-wide",
                        row.caution ? "text-accent-amber" : "text-slate-700"
                      )}
                    >
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-600">{row.text}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <Reveal
          delay={0.1}
          className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-ink/10 bg-white sm:aspect-[16/6] lg:aspect-[1280/274]"
        >
          <Image
            src="/images/research/source-methodology/sm-source-classes-meeting.webp"
            alt="Colleagues in a meeting with a laptop and notebook on the table"
            fill
            sizes="(min-width: 1310px) 1246px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <p className="mt-8 max-w-[800px] text-sm leading-6 text-gray-600">
          Internal classifications support consistent checks across every
          source; the public interface never shows them as opaque codes without
          this plain-language context.
        </p>
      </Container>
    </section>
  );
}
