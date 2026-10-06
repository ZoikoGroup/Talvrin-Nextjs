import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";

type Tone = "green" | "amber" | "rose" | "neutral";

const toneClasses: Record<Tone, string> = {
  green: "border-green-700/30 text-green-700",
  amber: "border-accent-amber/30 text-accent-amber",
  rose: "border-pink-800/30 text-pink-800",
  neutral: "border-muted/30 text-muted",
};

const states: { label: string; tone: Tone; meaning: string; behavior: string }[] = [
  {
    label: "Permitted",
    tone: "green",
    meaning: "The current approved use or display action is allowed for this context.",
    behavior: "The permitted action and applicable metadata are exposed.",
  },
  {
    label: "Limited",
    tone: "amber",
    meaning: "Some uses or actions are allowed for this source; others are not.",
    behavior: "The available action and the limitation are both named — never an ambiguous lock icon alone.",
  },
  {
    label: "Restricted",
    tone: "rose",
    meaning: "The requested action is not allowed in the current context.",
    behavior: "No restricted payload is exposed; the next safe action is explained if one exists.",
  },
  {
    label: "Entitlement required",
    tone: "amber",
    meaning: "Access depends on a user, workspace or provider entitlement.",
    behavior: "The requirement is explained without implying it can be bypassed or purchased unless true.",
  },
  {
    label: "Unavailable",
    tone: "neutral",
    meaning: "The approved source or action is not available in this context.",
    behavior: "Source metadata or fallback is shown only if permitted.",
  },
  {
    label: "Unknown / unresolved",
    tone: "rose",
    meaning: "Rights state is not safely resolved.",
    behavior: "Fails closed for restricted actions; never defaults to permitted.",
  },
];

export default function RightsStatesSection() {
  return (
    <section id="rights-states" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Behavior Classes, Not Contract Text"
            tone="amber"
            title="Six behavior classes drive what happens next."
          >
            These are behavior classes, not a contractual rights taxonomy — the public state shown for
            any source or action maps to the approved Rights Registry.
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
                      "inline-block w-fit rounded-md border bg-white px-4 py-1.5 text-center text-xs font-bold uppercase md:w-full",
                      toneClasses[state.tone]
                    )}
                  >
                    {state.label}
                  </span>
                </dt>
                <dd className="text-sm leading-5 text-ink-soft md:pt-1">{state.meaning}</dd>
                <dd className="text-sm leading-5 text-muted md:pt-1">{state.behavior}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
