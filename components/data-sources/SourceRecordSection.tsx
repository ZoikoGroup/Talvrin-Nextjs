import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";

type Requirement = "Conditional" | "Required" | "Recommended" | "Required if differs";

const requirementTone: Record<Requirement, string> = {
  Conditional: "text-muted",
  Required: "text-pink-800",
  "Required if differs": "text-pink-800",
  Recommended: "text-accent-amber",
};

const fields: { field: string; description: string; requirement: Requirement }[] = [
  {
    field: "record_id",
    description: "Stable public slug/ID only when a canonical public record exists.",
    requirement: "Conditional",
  },
  {
    field: "source_display_name",
    description: "Approved public source/publisher/issuer name.",
    requirement: "Required",
  },
  {
    field: "source_class",
    description: "Primary / official / licensed / institutional / other governed.",
    requirement: "Required",
  },
  {
    field: "source_description",
    description: "Concise, factual explanation of what the source is; no unsupported endorsement.",
    requirement: "Recommended",
  },
  { field: "jurisdiction", description: "Displayed where material and approved.", requirement: "Conditional" },
  { field: "market_domain", description: "Approved market/domain dimensions.", requirement: "Conditional" },
  {
    field: "coverage_state",
    description: "Registry-backed released coverage state.",
    requirement: "Conditional",
  },
  {
    field: "rights_access_state",
    description: "Public-safe state controlling source-open behavior.",
    requirement: "Required if differs",
  },
  {
    field: "availability_state",
    description: "Authoritative public-safe state, if supported.",
    requirement: "Conditional",
  },
  {
    field: "last_verified_at",
    description: "Registry verification timestamp/date.",
    requirement: "Recommended",
  },
  {
    field: "version_behavior",
    description: "How revisions/supersession are represented.",
    requirement: "Conditional",
  },
  {
    field: "source_url_or_viewer",
    description: "Original deep link or governed viewer route, only when permitted.",
    requirement: "Conditional",
  },
];

export default function SourceRecordSection() {
  return (
    <section id="source-record" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Data Source Record v1 — Public Projection"
            tone="amber"
            title="The minimum fields a public source record can expose."
          >
            Every field is conditional on registry support and publication approval. A source record
            is never reduced to a generic &quot;web source&quot; label.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-4">
          <dl className="overflow-hidden rounded-2xl border border-ink/10 bg-white sm:pt-7">
            {fields.map((row) => (
              <div
                key={row.field}
                className="grid grid-cols-1 gap-1.5 border-b border-ink/10 px-5 py-4 last:border-b-0 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)] md:gap-4"
              >
                <dt className="break-all font-mono text-sm font-bold text-ink">{row.field}</dt>
                <dd className="text-sm leading-5 text-muted">{row.description}</dd>
                <dd className={clsx("text-xs font-bold uppercase tracking-wide md:pt-0.5", requirementTone[row.requirement])}>
                  {row.requirement}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
