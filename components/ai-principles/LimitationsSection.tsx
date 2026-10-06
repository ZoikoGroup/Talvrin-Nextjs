import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";

type Tone = "neutral" | "amber" | "rose";

const toneClasses: Record<Tone, string> = {
  neutral: "border-ink/20 text-ink",
  amber: "border-accent-amber/30 text-accent-amber",
  rose: "border-pink-800/30 text-pink-800",
};

const states: { label: string; tone: Tone; message: string; handling: string }[] = [
  {
    label: "Evidence sufficient",
    tone: "neutral",
    message: "Bounded AI assistance with source links and a visible interpretation label.",
    handling: "Source inspection stays available; context is preserved.",
  },
  {
    label: "Partial evidence",
    tone: "amber",
    message: "\"Available evidence is incomplete for this question.\"",
    handling: "Known gaps and covered sources are shown; nothing is filled in with confident unsupported text.",
  },
  {
    label: "Conflicting evidence",
    tone: "amber",
    message: "\"The available sources do not support a single conclusion.\"",
    handling: "The conflict is presented as-is; users can inspect each source.",
  },
  {
    label: "Source restricted",
    tone: "rose",
    message: "\"Some relevant material cannot be displayed under current access rights.\"",
    handling: "Protected text is never leaked; the entitlement state is explained at an appropriate level.",
  },
  {
    label: "Source unavailable",
    tone: "rose",
    message: "\"This source cannot be reached right now.\"",
    handling:
      "The UI never substitutes cached or AI-recalled content for a source it can't actually show.",
  },
  {
    label: "Stale / review needed",
    tone: "neutral",
    message: "Affected claims are withdrawn or replaced by an approved neutral fallback.",
    handling:
      "A material model, provider, policy, or data-flow change triggers review before republishing.",
  },
  {
    label: "AI service unavailable",
    tone: "neutral",
    message:
      "Principle and boundary content remain readable; any interactive demo degrades to a static explanation.",
    handling: "No broken spinner and no silent fallback to fabricated output.",
  },
  {
    label: "Unable to ground",
    tone: "rose",
    message:
      "\"Talvrin cannot support a reliable evidence-linked response from the available source set.\"",
    handling: "Abstention is preferred over invented detail; a next research step is offered instead.",
  },
];

export default function LimitationsSection() {
  return (
    <section id="limitations" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Uncertainty Stays Visible"
            tone="amber"
            title="Fluent output can still be incomplete, context-sensitive, or wrong."
          >
            No decorative confidence percentages without an approved, validated methodology.
            Plain-language states instead.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <dl>
            {states.map((state) => (
              <div
                key={state.label}
                className="grid grid-cols-1 gap-3 border-b border-ink/10 py-4 md:grid-cols-[190px_minmax(0,1fr)_minmax(0,1fr)] md:gap-4"
              >
                <dt>
                  <span
                    className={clsx(
                      "inline-block w-fit rounded-md border bg-surface px-4 py-1.5 text-center text-xs font-bold uppercase md:w-full",
                      toneClasses[state.tone]
                    )}
                  >
                    {state.label}
                  </span>
                </dt>
                <dd className="text-sm leading-5 text-ink-soft md:pt-1">{state.message}</dd>
                <dd className="text-sm leading-5 text-muted md:pt-1">{state.handling}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
