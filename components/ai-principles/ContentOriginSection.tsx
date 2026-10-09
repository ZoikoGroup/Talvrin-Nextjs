import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { Pill } from "./shared";

const layers = [
  {
    label: "Source evidence",
    tone: "ink" as const,
    what: "Original authoritative, official, licensed, institutional, or otherwise governed source material.",
    treatment:
      "Highest evidentiary clarity; source identity, timing, jurisdiction, version and rights state visible where material.",
  },
  {
    label: "Talvrin normalization",
    tone: "neutral" as const,
    what: "Structured transformation or metadata applied to make source evidence usable.",
    treatment: "Clearly labeled as Talvrin-derived structure; never presented as the source itself.",
  },
  {
    label: "Talvrin analysis",
    tone: "neutral" as const,
    what: "Human- or system-authored analytical framing owned by Talvrin.",
    treatment:
      "Kept separate from source fact; shows author/editor and supporting sources where applicable.",
  },
  {
    label: "AI-assisted output",
    tone: "violet" as const,
    what: "Generated or model-assisted summary, comparison, explanation, organization, or change signal.",
    treatment:
      "Persistent AI-assisted label; source links stay separately inspectable; label never depends on color alone.",
  },
  {
    label: "User-created content",
    tone: "amber" as const,
    what: "Notes, hypotheses, saved reasoning, tags, or other user-authored material.",
    treatment: "Clearly user-owned; never reclassified as source evidence.",
  },
];

export default function ContentOriginSection() {
  return (
    <section id="content-origin" className="scroll-mt-32 bg-ink py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Content-Origin Model"
            inverted
            title="Five layers. Every one stays textually labeled — never color-only."
          >
            This is the reusable public mental model behind every Talvrin AI-assisted surface, not just
            this page.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <dl className="rounded-2xl bg-surface px-2 pb-2 pt-4 sm:pt-11">
            {layers.map((layer) => (
              <div
                key={layer.label}
                className="grid grid-cols-1 gap-3 border-b border-ink/10 px-4 py-5 last:border-b-0 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-5"
              >
                <dt className="pt-0.5">
                  <Pill tone={layer.tone}>{layer.label}</Pill>
                </dt>
                <dd className="text-sm leading-5 text-ink-soft">{layer.what}</dd>
                <dd className="text-sm leading-5 text-muted">{layer.treatment}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
