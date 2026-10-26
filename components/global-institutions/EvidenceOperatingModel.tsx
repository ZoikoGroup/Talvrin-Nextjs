import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const fields = [
  {
    key: "record_id",
    body: "Stable opaque identifier; never inferred from a display label.",
  },
  {
    key: "jurisdiction_id",
    body: "Authority-aligned jurisdiction reference where approved; not itself a legal conclusion.",
  },
  {
    key: "source_id",
    body: "Original publisher or source identity, with inspectable provenance.",
  },
  {
    key: "source_class",
    body: "Official, licensed, public, or other controlled source-class taxonomy.",
  },
  {
    key: "published_at",
    body: "Source publication time, including time zone.",
  },
  {
    key: "effective_period",
    body: "Applicable economic or legal period, where meaningful.",
  },
  {
    key: "rights_status",
    body: "Permitted, restricted, or not evaluated — not itself a user-facing legal guarantee.",
  },
  {
    key: "availability_status",
    body: "Published status only: supported, limited, not currently available, or unknown.",
  },
  {
    key: "last_verified_at",
    body: "Actual governance verification timestamp, not the page build time.",
  },
  {
    key: "claim_owner",
    body: "The product, data-rights, or editorial approver responsible for the claim.",
  },
];

export default function EvidenceOperatingModel() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionEyebrow>Evidence Operating Model</SectionEyebrow>
          <SectionHeading>Every record carries the same governed fields.</SectionHeading>
          <SectionLede>
            These fields describe how Talvrin structures evidence for institutional review,
            whether or not a given record is published yet. None of them is itself a coverage or
            legal claim.
          </SectionLede>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {fields.map((f, i) => (
            <Reveal
              key={f.key}
              delay={(i % 4) * 0.05}
              className="h-full rounded-[14px] border border-ink/8 bg-white p-5"
            >
              <code className="block text-[13px] font-bold text-ink">{f.key}</code>
              <p className="mt-1.5 text-sm leading-[21.7px] text-muted">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
