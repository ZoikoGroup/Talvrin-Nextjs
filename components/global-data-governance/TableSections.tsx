import { ReactNode } from "react";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { DotList } from "../evidence-standards/shared";
import { DarkNote, Row, RowTable } from "./shared";

/** Coverage, Rights, Localization, Change Model and AI share: intro, row table, optional footer. */
function TableSection({
  id,
  className,
  eyebrow,
  tone,
  title,
  lede,
  rows,
  tableTone,
  labelClassName,
  footer,
}: {
  id: string;
  className: string;
  eyebrow: string;
  tone?: "violet" | "amber";
  title: string;
  lede: ReactNode;
  rows: Row[];
  tableTone: "surface" | "white";
  labelClassName?: string;
  footer?: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-32 py-20 sm:py-24 ${className}`}>
      <Container>
        <Reveal>
          <SectionIntro eyebrow={eyebrow} tone={tone} title={title}>
            {lede}
          </SectionIntro>
        </Reveal>
        <Reveal delay={0.1} className="mt-4">
          <RowTable rows={rows} tone={tableTone} labelClassName={labelClassName} />
        </Reveal>
        {footer && (
          <Reveal delay={0.15} className="mt-3">
            {footer}
          </Reveal>
        )}
      </Container>
    </section>
  );
}

const pairs = (items: [string, string][]): Row[] =>
  items.map(([label, detail]) => ({ label, cells: [detail] }));

const linkClass = "text-white underline-offset-2 hover:underline";

export function CoverageSection() {
  const states: [string, string, string][] = [
    [
      "Deep coverage",
      "High-confidence, production-supported depth for a named market/domain.",
      "May be named prominently only when the registry confirms current state.",
    ],
    ["Supported", "Production-supported but narrower.", "Shown accurately with scope/limitations as appropriate."],
    [
      "Limited / beta",
      "Available with explicit limitations.",
      "Persistent limitation label; no implication of parity with Deep Coverage.",
    ],
    [
      "Planned",
      "Roadmap only.",
      "Not current coverage; published only when roadmap disclosure is approved.",
    ],
    [
      "Architecture-ready",
      "Platform can support the category in principle.",
      "Internal/architectural concept; generally not marketed as coverage.",
    ],
    ["Unknown", "No approved coverage state.", "Does not publish a positive availability claim."],
  ];
  return (
    <TableSection
      id="coverage"
      className="bg-white"
      eyebrow="Architecture-Ready Is Not Live Coverage"
      title="Six coverage states, released with discipline."
      lede="Talvrin distinguishes Deep Coverage, Supported, Limited/Beta and Planned states from architecture readiness. No regional or governance claim is inferred merely because the platform is capable of supporting it."
      tableTone="surface"
      rows={states.map(([label, meaning, rule]) => ({
        label: (
          <span className="inline-block rounded-full bg-ink/5 px-2.5 py-[5px] text-xs font-bold uppercase tracking-wide text-ink">
            {label}
          </span>
        ),
        cells: [meaning, rule],
      }))}
      footer={
        <DarkNote label="No map inference">
          A world map, office location or global brand statement must never be used as evidence of
          live market, data residency, legal or service coverage.
        </DarkNote>
      }
    />
  );
}

export function RightsSection() {
  return (
    <TableSection
      id="rights"
      className="bg-surface"
      eyebrow="Jurisdiction Is Part of Context"
      tone="amber"
      title="Source identity, rights and jurisdiction travel together."
      lede={
        <>
          A global interface never flattens materially different jurisdiction or rights states into
          one generic &quot;source available&quot; badge.
        </>
      }
      tableTone="white"
      labelClassName="text-base font-bold text-ink"
      rows={pairs([
        ["Source identity", "Named publisher/organization/issuer and source class stay visible where material."],
        [
          "Jurisdiction metadata",
          "The jurisdiction associated with the evidence is preserved, not just the interface locale.",
        ],
        ["Publication/effective time", "When information was published is distinguished from when it applies."],
        ["Version/supersession", "Revised/superseded source states are exposed where meaning may change."],
        [
          "Rights/access state",
          "Restricted source content is never exposed or redistributed beyond permitted use.",
        ],
        ["Coverage state", "Source availability does not automatically equal supported product coverage."],
        [
          "Monitoring",
          "A source or policy change can trigger reassessment; not every change is labeled \"material\" without governed criteria.",
        ],
        [
          "Traceability",
          "Public explanation links to Evidence Standards/Data Sources/Data Rights rather than duplicating those contracts.",
        ],
      ])}
      footer={
        <DarkNote>
          Provenance and classification are the dedicated subject of{" "}
          <Link href="/trust/evidence-standards" className={linkClass}>
            Evidence Standards →
          </Link>
          . Source identity and availability live in{" "}
          <Link href="/trust/data-sources" className={linkClass}>
            Data Sources →
          </Link>
          . Licensing and permitted use live in{" "}
          <Link href="/trust/data-rights" className={linkClass}>
            Data Rights →
          </Link>
          .
        </DarkNote>
      }
    />
  );
}

export function LocalizationSection() {
  return (
    <TableSection
      id="localization"
      className="bg-surface"
      eyebrow="Localized Only Where It Materially Differs"
      tone="amber"
      title="No synthetic country pages. No cosmetic region selector."
      lede="A localized variant is created only where language, regulation, coverage, support, privacy/legal content or market context materially differs."
      tableTone="white"
      rows={pairs([
        [
          "Country-neutral core",
          "The canonical global narrative stays country-neutral when the same facts apply everywhere.",
        ],
        [
          "Localized variants",
          "Created only where language, regulation, coverage, support, privacy/legal content or market context materially differs.",
        ],
        ["hreflang", "Implemented only for true alternates; each variant stays current and mutually consistent."],
        ["Region selector", "Shown only if it changes real content/availability; never a cosmetic selector."],
        [
          "IP/location",
          "May assist routing where lawful/approved, but never silently rewrites substantive governance claims without visible context.",
        ],
        ["Dates/times", "Locale-aware display, while preserving unambiguous source/effective timestamps."],
        ["Currency/numbers", "Locale-aware presentation; underlying value semantics unchanged."],
        ["Unicode/RTL", "Components support international names, text expansion and future right-to-left layouts."],
        ["Synthetic SEO pages", "Prohibited. Thin country pages are not created solely for keyword capture."],
      ])}
      footer={
        <DarkNote label="SEO / UX rule">
          Regional pages exist because the experience materially differs, not because a country
          keyword has search volume.
        </DarkNote>
      }
    />
  );
}

export function ChangeModelSection() {
  return (
    <TableSection
      id="change-model"
      className="bg-surface"
      eyebrow="Owner, Evidence, Status, Date — Every Time"
      tone="amber"
      title="Policy and coverage changes follow a traceable review path."
      lede="Material changes require accountable owner approval and traceable versioning. Superseded claims never remain indexable as current guidance without clear historical labeling."
      tableTone="white"
      rows={pairs([
        [
          "New jurisdictional requirement",
          "Create/update governed record; determine affected claims/capabilities; review before public change.",
        ],
        [
          "Source-rights change",
          "Re-evaluate permitted use, display and downstream access; link to Data Rights.",
        ],
        ["Privacy/legal notice change", "Update regional route/version; preserve currentness metadata."],
        ["Coverage launch/withdrawal", "Update coverage registry; avoid stale \"available globally\" text."],
        ["Security assurance change", "Security owner reviews the claim; retire unsupported wording."],
        ["Operational limitation", "Route to Service Status / coverage limitation; not buried in FAQ."],
        ["AI policy change", "Reassess affected AI claims and separation from evidence."],
        [
          "Content-only wording change",
          "Does not reset \"last reviewed\" unless substantive governance meaning changed.",
        ],
      ])}
      footer={
        <div className="pt-5">
          <DotList
            tone="violet"
            items={[
              "Material changes require accountable owner approval and traceable versioning.",
              "Superseded claims must not remain indexable as current guidance without clear historical labeling.",
              "If a control is withdrawn, the public page does not keep a dead CTA or stale promise.",
            ]}
          />
        </div>
      }
    />
  );
}

export function AiSection() {
  return (
    <TableSection
      id="ai"
      className="bg-white"
      eyebrow="AI Does Not Become the Authority"
      title="AI may accelerate research. It does not flatten jurisdiction."
      lede="Generated explanation stays visually and semantically distinct from evidence, and must preserve jurisdiction, effective-date and version differences rather than smoothing them away."
      tableTone="surface"
      rows={pairs([
        ["Search / discovery", "May help locate evidence, subject to source rights and applicable availability."],
        ["Summarization", "Must preserve source provenance and rights boundaries."],
        ["Comparison", "Must not flatten jurisdiction, effective-date or version differences."],
        ["Change identification", "Can surface deltas; materiality remains governed."],
        ["Explanation", "Generated interpretation stays visually and semantically distinct from evidence."],
        [
          "Regional language",
          "Localization must not change factual/legal meaning; regional legal copy requires an approved source.",
        ],
        ["Recommendations", "Must not be framed as investment advice or buy/sell/hold authority."],
        [
          "Training / data use",
          "Model-training, data-retention or opt-out practices are not stated unless authoritative policy establishes them.",
        ],
      ])}
      footer={
        <DarkNote label="AI boundary">
          AI may accelerate research, but it does not become the evidence or the authority for
          jurisdictional governance. Full AI boundaries are the dedicated subject of{" "}
          <Link href="/trust/ai-principles" className={linkClass}>
            AI Principles →
          </Link>
          .
        </DarkNote>
      }
    />
  );
}
