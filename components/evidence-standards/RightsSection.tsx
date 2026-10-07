import Link from "next/link";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";

const states = [
  {
    label: "Permitted",
    pill: "bg-green-700/20 text-green-500",
    shows: "Shows permitted metadata/content according to rights policy.",
    action: "Opens the governed viewer or deep link if available.",
  },
  {
    label: "Restricted",
    pill: "bg-accent-amber/20 text-accent-amber",
    shows: "Shows only permitted metadata and a clear restricted state.",
    action: "No unauthorized content exposure; only the approved next action is offered.",
  },
  {
    label: "Unavailable",
    pill: "bg-pink-800/30 text-pink-400",
    shows: "Explains the source/action is unavailable without pretending evidence never existed.",
    action: "Disables or removes the broken action while retaining permitted context.",
  },
  {
    label: "Unknown / unresolved",
    pill: "bg-white/10 text-white/80",
    shows: "Does not assume access rights.",
    action: "No public open action until resolved by rights governance.",
  },
];

export default function RightsSection() {
  return (
    <section id="rights" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Transparency Does Not Override Rights"
            title="Evidence can be inspectable without ignoring data rights."
          >
            Rights/access state constrains what can be displayed, linked, quoted, cached, exported or
            made available to a user. Restricted content is never exposed beyond permitted use.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-4">
          <dl className="rounded-2xl bg-ink px-2 pb-2 pt-4 sm:pt-11">
            {states.map((state) => (
              <div
                key={state.label}
                className="grid grid-cols-1 gap-2 border-b border-white/10 px-2 py-5 last:border-b-0 sm:px-4 lg:grid-cols-[240px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-5"
              >
                <dt>
                  <span
                    className={clsx(
                      "inline-block rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide",
                      state.pill
                    )}
                  >
                    {state.label}
                  </span>
                </dt>
                <dd className="text-sm leading-5 text-white/80">{state.shows}</dd>
                <dd className="text-sm leading-5 text-white/55">{state.action}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15} className="mt-3">
          <p className="rounded-2xl bg-surface px-6 py-5 text-sm leading-6 text-muted">
            Licensing, entitlement, permitted-use and redistribution principles are the dedicated
            subject of{" "}
            <Link href="/trust/data-rights" className="text-accent-violet hover:text-brand">
              Data Rights →
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
