import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const states = [
  {
    title: "Not approved",
    body: "Default state — internal specification only. No public nav, teaser or endpoint.",
    current: true,
  },
  {
    title: "Internal build",
    body: "Private documentation and test credentials inside protected environments only.",
  },
  {
    title: "Limited pilot",
    body: "Invite-only access for approved tenants under specific pilot terms.",
  },
  {
    title: "Public release",
    body: "Overview, reference and console available according to entitlement.",
  },
];

const gates = [
  { title: "Contract", body: "Approved interface spec — versioning, errors, types, retries." },
  { title: "Rights", body: "Written entitlement and licensing evaluation per data class." },
  { title: "Security", body: "Threat model, tenant isolation and penetration-test sign-off." },
  { title: "Source fidelity", body: "Provenance, source versions and correction handling verified." },
  { title: "Operations", body: "Rate limits, monitoring, revocation and incident ownership." },
  { title: "Documentation", body: "Accurate reference, examples, limitations and support process." },
  { title: "Commercial", body: "Packaging, terms, pricing path and sales readiness approved." },
  { title: "Privacy / region", body: "Data-protection assessment and jurisdiction routing reviewed." },
  { title: "Accessibility", body: "WCAG 2.2 AA public UI and error states tested." },
  { title: "Release", body: "Named Product, Engineering, Security and Legal sign-off recorded." },
];

export default function ReleaseGovernanceSection() {
  return (
    <section id="release-governance" className="scroll-mt-32 bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">Release governance</SectionEyebrow>
          <SectionHeading>
            One capability registry decides what&apos;s real — navigation never invents status.
          </SectionHeading>
          <SectionLede>
            Every capability moves through the same five states. Product, Engineering and
            Compliance share one authoritative record; nothing here is published ahead of it.
          </SectionLede>
        </Reveal>

        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {states.map((state, i) => (
            <Reveal
              key={state.title}
              as="li"
              delay={i * 0.06}
              className={
                state.current
                  ? "flex flex-col gap-2 rounded-xl border border-accent-amber bg-accent-amber/10 p-4"
                  : "flex flex-col gap-2 rounded-xl border border-ink/10 bg-surface p-4"
              }
            >
              <div className="flex items-center gap-2">
                {state.current && (
                  <span aria-hidden="true" className="size-2 rounded-full bg-accent-amber" />
                )}
                <h3
                  className={
                    state.current ? "text-sm font-bold text-ink" : "text-sm font-bold text-muted"
                  }
                >
                  {state.title}
                </h3>
              </div>
              <p
                className={
                  state.current ? "text-xs leading-5 text-slate-600" : "text-xs leading-5 text-slate-500"
                }
              >
                {state.body}
              </p>
              {state.current && (
                <p className="pt-0.5 text-xs font-bold uppercase tracking-wide text-yellow-800">
                  Current state
                </p>
              )}
            </Reveal>
          ))}
          <Reveal
            as="li"
            delay={0.3}
            className="relative hidden aspect-[228/146] overflow-hidden rounded-xl border border-ink/10 lg:block lg:aspect-auto"
          >
            <Image
              src={`${IMG}/api-governance-review.webp`}
              alt=""
              fill
              sizes="228px"
              className="object-cover"
            />
          </Reveal>
        </ol>

        <Reveal delay={0.1}>
          <h3 className="mt-14 text-lg font-bold text-ink">
            Ten gates must pass before any capability can claim &ldquo;live.&rdquo;
          </h3>
        </Reveal>

        <Reveal
          delay={0.15}
          className="mt-5 overflow-hidden rounded-2xl border border-ink/10 bg-ink/10"
        >
          <ul className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
            {gates.map((gate, i) => (
              <li key={gate.title} className="flex gap-3 bg-surface px-5 py-4">
                <span className="pt-0.5 text-xs font-bold text-accent-violet">
                  G{String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{gate.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{gate.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
