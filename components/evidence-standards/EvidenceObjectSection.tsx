import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";

type Tone = "neutral" | "rose" | "amber";

const toneClasses: Record<Tone, string> = {
  neutral: "text-muted",
  rose: "text-pink-800",
  amber: "text-accent-amber",
};

const fields: { field: string; description: string; requirement: string; tone: Tone }[] = [
  {
    field: "evidence_id",
    description: "Internal stable identifier; not necessarily public.",
    requirement: "Internal",
    tone: "neutral",
  },
  {
    field: "source_identity",
    description:
      "Named organization, publisher, issuer or authority — never generic \"web source\" when known.",
    requirement: "Required when known",
    tone: "rose",
  },
  {
    field: "source_class",
    description: "Primary / official / licensed / institutional / other governed class.",
    requirement: "Conditional",
    tone: "amber",
  },
  {
    field: "original_title",
    description: "Human-readable original source title.",
    requirement: "Where permitted",
    tone: "amber",
  },
  {
    field: "publication_time",
    description: "Source publication time plus timezone where material.",
    requirement: "Conditional",
    tone: "amber",
  },
  {
    field: "effective_reference_period",
    description: "Period to which the evidence applies, where different from publication time.",
    requirement: "Conditional",
    tone: "amber",
  },
  {
    field: "jurisdiction",
    description: "Relevant jurisdiction or market context.",
    requirement: "Conditional",
    tone: "amber",
  },
  {
    field: "version_state",
    description: "Current / prior / superseded / corrected / unknown or governed equivalent.",
    requirement: "Conditional",
    tone: "amber",
  },
  {
    field: "supersedes_ref",
    description: "Link to prior or next version where governed and rights/retention allow.",
    requirement: "Conditional",
    tone: "amber",
  },
  {
    field: "rights_access_state",
    description: "Permitted / restricted / unavailable / governed equivalent.",
    requirement: "Required for actions",
    tone: "rose",
  },
  {
    field: "evidence_relationship",
    description: "Supports / contradicts / updates / contextualizes a defined research object.",
    requirement: "Conditional",
    tone: "amber",
  },
  {
    field: "open_source_action",
    description: "Deep link or governed viewer route, only when permitted and available.",
    requirement: "Conditional",
    tone: "amber",
  },
  {
    field: "provenance_layer",
    description: "Source / normalization / Talvrin analysis / AI-assisted / user note.",
    requirement: "Required if mixed",
    tone: "rose",
  },
  {
    field: "change_state",
    description: "New / updated / unchanged / superseded / materiality pending / unavailable.",
    requirement: "Conditional",
    tone: "amber",
  },
  {
    field: "limitations",
    description: "Human-readable limitation or unknown state.",
    requirement: "Mandatory if material",
    tone: "rose",
  },
  {
    field: "last_reviewed",
    description: "Governed review timestamp for Talvrin’s interpretation, not source publication time.",
    requirement: "Conditional",
    tone: "amber",
  },
];

export default function EvidenceObjectSection() {
  return (
    <section id="evidence-object" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="The Evidence Object, One Contract"
            title="The minimum fields a public evidence object can expose."
          >
            Every field is conditional on registry support and publication approval. No field is
            invented to make an item look more complete than the governed source record allows.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-4">
          <dl className="overflow-hidden rounded-2xl border border-ink/10 bg-surface pb-5 sm:pt-7">
            {fields.map((row) => (
              <div
                key={row.field}
                className="grid grid-cols-1 gap-1.5 border-b border-ink/10 px-5 py-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)] md:gap-4"
              >
                <dt className="break-all font-mono text-sm font-bold text-ink">{row.field}</dt>
                <dd className="text-sm leading-5 text-muted">{row.description}</dd>
                <dd
                  className={clsx(
                    "text-xs font-bold uppercase tracking-wide md:pt-0.5",
                    toneClasses[row.tone]
                  )}
                >
                  {row.requirement}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15} className="mt-3">
          <div role="note" className="rounded-2xl bg-ink p-6 sm:p-7">
            <h3 className="text-xs font-bold uppercase tracking-wide text-accent-amber">No-score rule</h3>
            <p className="mt-2.5 text-[15px] leading-6 text-white/80 sm:text-base">
              The supplied Talvrin sources do not establish an evidence confidence score, source trust
              score, quality score or completeness score. Designers and engineers must not invent one.
              A future governed methodology would require its own approved definition, calibration and
              publication gate.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
