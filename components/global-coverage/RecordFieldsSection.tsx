import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const fields = [
  {
    name: "record_id",
    body: "Stable opaque identifier for the coverage record, never inferred from its display label.",
  },
  {
    name: "jurisdiction_id",
    body: "Authority-aligned jurisdiction reference where approved; not itself a legal conclusion.",
  },
  { name: "source_id", body: "Original publisher or source identity, with inspectable provenance." },
  {
    name: "source_class",
    body: "Official, licensed, public, or other controlled source-class taxonomy.",
  },
  { name: "published_at", body: "Source publication time, including time zone." },
  { name: "effective_period", body: "Applicable economic or legal period, where meaningful." },
  {
    name: "last_verified_at",
    body: "Actual governance verification timestamp, not the page build time.",
  },
  {
    name: "claim_owner",
    body: "The product, data-rights, or editorial approver responsible for the claim.",
  },
];

function FieldCard({ name, body }: { name: string; body: string }) {
  return (
    <div className="flex h-full flex-col gap-1.5 rounded-2xl border border-ink/10 bg-white p-5">
      <h3>
        <code className="font-mono text-xs font-bold text-ink">{name}</code>
      </h3>
      <p className="text-sm leading-[22px] text-slate-600">{body}</p>
    </div>
  );
}

export default function RecordFieldsSection() {
  const [first4, rest] = [fields.slice(0, 4), fields.slice(4)];

  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow>Jurisdiction &amp; source evidence</SectionEyebrow>
          <SectionHeading>What a coverage record actually carries.</SectionHeading>
          <SectionLede>
            Every geographic or source record in the registry is described by the same fields,
            whether or not it is published yet.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {first4.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.05}>
              <FieldCard {...f} />
            </Reveal>
          ))}

          {/* Remaining four fields sit in a 2x2 block beside the image on desktop. */}
          <div className="grid grid-cols-1 gap-5 sm:col-span-2 sm:grid-cols-2">
            {rest.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.05}>
                <FieldCard {...f} />
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative hidden overflow-hidden rounded-2xl border border-ink/10 sm:col-span-2 lg:block"
          >
            <Image
              src={`${IMG}/coverage-record-desk.webp`}
              alt=""
              fill
              sizes="628px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
