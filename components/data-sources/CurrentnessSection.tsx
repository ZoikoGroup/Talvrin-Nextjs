import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";

const states = [
  { label: "Current / verified", detail: "Source record has a current governed verification state." },
  {
    label: "Updated",
    detail: "Source metadata or availability changed; history preserved where material.",
  },
  { label: "Superseded", detail: "A newer source/version supersedes the prior record or item." },
  { label: "Restricted", detail: "Access is limited; content is never exposed beyond permitted use." },
  {
    label: "Temporarily unavailable",
    detail: "Authoritative service/source state indicates a temporary availability problem.",
  },
  { label: "Unknown", detail: "Required source state is not confirmed; never promoted to clear/supported." },
  {
    label: "Retired / removed",
    detail: "Record no longer public/current; redirect/history behavior preserved where governance requires.",
  },
];

export default function CurrentnessSection() {
  return (
    <section id="currentness" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Uncertainty Stays Visible"
            title="Seven currentness states — none defaults to supported."
          >
            Unknown currentness is never promoted to clear or verified. Restricted access never exposes
            content beyond permitted use.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-4">
          <dl className="rounded-2xl bg-ink px-2 pb-2 pt-4 sm:pt-11">
            {states.map((state) => (
              <div
                key={state.label}
                className="grid grid-cols-1 gap-2 border-b border-white/10 px-2 py-5 last:border-b-0 sm:px-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-4"
              >
                <dt>
                  <span className="inline-block rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    {state.label}
                  </span>
                </dt>
                <dd className="text-sm leading-5 text-white/75 md:pt-1">{state.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
