import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const states = [
  {
    label: "Verified Supported",
    badge: "bg-accent-violet/10 border-accent-violet/30 text-accent-violet",
    meaning:
      "Legal, operational and data-rights context has been reviewed and confirmed for at least one coverage dimension.",
    display:
      "Shown with a named owner, review date and source class; limitations stay visible next to the claim.",
  },
  {
    label: "In Assessment",
    badge: "bg-accent-amber/10 border-accent-amber/30 text-accent-amber",
    meaning: "Active legal and data-rights review is underway but not concluded.",
    display: "Never shown as current access; carries no promised completion date.",
  },
  {
    label: "Architecture-ready",
    badge: "bg-surface border-slate-600/25 text-slate-600",
    meaning:
      "Talvrin’s platform can extend to the jurisdiction in principle, but no coverage claim follows from that alone.",
    display: "Not published as a jurisdiction record on this page.",
  },
  {
    label: "Temporarily restricted",
    badge: "bg-pink-800/10 border-pink-800/25 text-pink-800",
    meaning:
      "A previously confirmed jurisdiction has had access or rights paused, usually pending a licensing or legal review.",
    display:
      "Transactional actions are removed; the prior status and reason are preserved, never silently deleted.",
  },
];

export default function VocabularySection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow>Coverage vocabulary</SectionEyebrow>
          <SectionHeading className="max-w-[740px]">
            Global by architecture does not mean every market is available.
          </SectionHeading>
          <SectionLede className="max-w-[740px]">
            Four distinct states separate legal, operational and data-rights readiness. None is a
            softer or stronger version of another.
          </SectionLede>
        </Reveal>

        <dl className="mt-10">
          {states.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.05}
              className="grid grid-cols-1 gap-3 border-b border-ink/10 py-5 lg:grid-cols-[208px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-4"
            >
              <dt>
                <span
                  className={clsx(
                    "inline-block rounded-md border px-4 py-1.5 text-center text-xs font-bold uppercase lg:block",
                    s.badge
                  )}
                >
                  {s.label}
                </span>
              </dt>
              <dd className="text-base text-slate-700">{s.meaning}</dd>
              <dd className="text-sm text-slate-600">{s.display}</dd>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={0.1} className="mt-8 rounded-2xl bg-surface px-7 py-6">
          <p className="text-xs font-bold uppercase tracking-wide text-ink">Semantic lock</p>
          <p className="mt-2 text-base leading-6 text-slate-600">
            Verified Supported is not implied by global architecture. In Assessment is not a
            softer form of Verified Supported. Choosing a jurisdiction on this page never grants
            legal residency or data entitlement.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
