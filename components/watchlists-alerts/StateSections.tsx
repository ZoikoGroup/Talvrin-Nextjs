import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, StateRows, type BadgeTone } from "./shared";

const triage: { label: string; tone: BadgeTone; body: string }[] = [
  { label: "NEW", tone: "amber", body: "An alert has not yet been opened." },
  { label: "SEEN", tone: "violet", body: "Opened, but not yet marked reviewed." },
  { label: "NEEDS REVIEW", tone: "rose", body: "Flagged for a closer look against the saved research view." },
  { label: "REVIEWED", tone: "ink", body: "Checked against evidence and the saved view, with an audit stamp." },
  { label: "DISMISSED", tone: "slate", body: "Set aside — reversible, and never implying a required trade." },
];

export function TriageSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow>Module · Triage</SectionEyebrow>
          <SectionHeading>Review a change before updating your view.</SectionHeading>
          <SectionLede>
            An alert state is a triage concept, not a financial-urgency signal — being read is not
            the same as being reviewed.
          </SectionLede>
        </Reveal>
        <Reveal delay={0.1} className="mt-4 rounded-2xl bg-surface px-7 pb-2 pt-6">
          <StateRows rows={triage} />
        </Reveal>
      </Container>
    </section>
  );
}

const roles = [
  { role: "Owner", body: "Holds responsibility for a shared watchlist and its rules." },
  { role: "Editor", body: "Can adjust constituents, rules and delivery preferences." },
  { role: "Viewer", body: "Reads shared alerts and history without editing them." },
];

export function TeamOwnershipSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
        <Reveal>
          <SectionEyebrow>Module · Team ownership</SectionEyebrow>
          <SectionHeading>Keep team follow-up accountable.</SectionHeading>
          <SectionLede>
            Shared watchlists require per-tenant authorization, and access changes take effect
            immediately — no cross-tenant visibility into another team&apos;s follow-up.
          </SectionLede>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl bg-surface p-6">
          <p className="pb-3.5 text-xs font-bold uppercase tracking-wide text-slate-600">
            Role concepts
          </p>
          <dl>
            {roles.map((r) => (
              <div key={r.role} className="flex gap-3 border-t border-ink/10 py-2.5">
                <dt className="min-w-24 text-sm font-bold text-ink">{r.role}</dt>
                <dd className="text-sm text-slate-600">{r.body}</dd>
              </div>
            ))}
          </dl>
          <p className="border-t border-ink/10 pt-3.5 text-xs text-slate-600">
            Illustrative role concepts, where entitlement and access controls support them.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

const availability: { label: string; tone: BadgeTone; body: string }[] = [
  { label: "UNAVAILABLE", tone: "slate", body: "The feature or market is not yet released for this account." },
  { label: "SIGNED OUT", tone: "ink", body: "Sign in to view or manage any real watchlist or alert." },
  { label: "UNAUTHORIZED", tone: "rose", body: "Your role does not currently grant access to this object." },
  { label: "QUOTA EXCEEDED", tone: "amber", body: "A plan-defined limit on watchlists or rules has been reached." },
  {
    label: "CHANNEL OFFLINE",
    tone: "violet",
    body: "A delivery channel is temporarily unavailable; no alert is silently lost.",
  },
];

export function AvailabilitySection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Module · Availability &amp; privacy</SectionEyebrow>
          <SectionHeading inverted>Availability varies by entitlement and released coverage.</SectionHeading>
          <SectionLede inverted>
            This page is a read-only educational view before launch. Tool routes for creating or
            managing a watchlist are reserved for authenticated, approved users, with server-side
            authorization, anti-enumeration and encryption governing every request.
          </SectionLede>
        </Reveal>
        <Reveal delay={0.1} className="mt-4 rounded-2xl bg-surface px-7 pb-2 pt-6">
          <StateRows rows={availability} outlined />
        </Reveal>
      </Container>
    </section>
  );
}
