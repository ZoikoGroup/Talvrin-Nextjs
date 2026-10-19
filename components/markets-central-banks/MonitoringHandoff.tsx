import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const states = [
  {
    tag: "New",
    tone: "bg-accent-amber/14 text-accent-amber",
    body: "New official decision, statement, minutes or speech enters released coverage.",
  },
  {
    tag: "Updated",
    tone: "bg-accent-violet/14 text-accent-violet",
    body: "Existing source or document metadata changes, or a new version is published.",
  },
  {
    tag: "Corrected",
    tone: "bg-[rgba(168,66,66,0.12)] text-[#a84242]",
    body: "The official source issues a correction; the prior state remains traceable where possible.",
  },
  {
    tag: "Superseded",
    tone: "bg-[rgba(168,66,66,0.12)] text-[#a84242]",
    body: "A newer official version replaces an earlier document.",
  },
  {
    tag: "Schedule changed",
    tone: "bg-accent-amber/14 text-accent-amber",
    body: "Meeting or publication timing changes from the prior governed schedule.",
  },
  {
    tag: "Canceled / delayed",
    tone: "bg-slate-500/12 text-slate-600",
    body: "The official schedule indicates a cancellation or delay.",
  },
  {
    tag: "Source unavailable",
    tone: "bg-slate-500/12 text-slate-600",
    body: "A known source cannot currently be accessed; evidence is not silently removed.",
  },
  {
    tag: "Materiality pending",
    tone: "bg-slate-500/12 text-slate-600",
    body: "A change exists but has not yet been classified for research materiality — significance is never overstated.",
  },
];

export default function MonitoringHandoff() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Monitoring Handoff</SectionEyebrow>
          <SectionHeading>
            Follow approved research and source scope — no automatic notification claim.
          </SectionHeading>
          <p className="mt-5 max-w-[780px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            Eight explicit change states, so a correction, supersession or schedule change never
            disappears silently.
          </p>
        </Reveal>

        <div className="mt-9 divide-y divide-ink/8 rounded-2xl border border-ink/8 bg-white px-7">
          {states.map((state, index) => (
            <Reveal key={state.tag} delay={index * 0.03}>
              <div className="flex flex-wrap items-center gap-3 py-4">
                <span className={`inline-flex items-center rounded-md px-[10px] py-[4px] text-[11px] font-bold uppercase ${state.tone}`}>
                  {state.tag}
                </span>
                <p className="text-[15px] font-medium text-ink">{state.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
