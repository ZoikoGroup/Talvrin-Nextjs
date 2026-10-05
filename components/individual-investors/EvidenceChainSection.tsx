import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMAGE_DIR, SectionIntro } from "./shared";

const fields = [
  { title: "Source identity", body: "Named organization, issuer, regulator, central bank, authority, or licensed provider." },
  { title: "Source class", body: "Primary, official, licensed, institutional, or other governed class." },
  { title: "Original title", body: "Readable original document or release title." },
  { title: "Publication timing", body: "Timestamp and timezone where material." },
  { title: "Reference period", body: "Separate from publication time when evidence applies to another period." },
  { title: "Jurisdiction", body: "Visible where meaning depends on market, legal, or economic context." },
  { title: "Version / supersession", body: "Revisions and replacement relationships remain visible where applicable." },
  { title: "Rights / access state", body: "Restricted material is never exposed beyond permitted use." },
  {
    title: "Evidence relationship",
    body: "Why the evidence supports, challenges, updates, or contextualizes the question.",
  },
  { title: "Open source action", body: "Routes to the original or governed viewer where permitted." },
];

export default function EvidenceChainSection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Evidence Chain" tone="amber" title="The source should never disappear behind the answer.">
            Every evidence card carries source identity, timing, jurisdiction, version, rights, and
            relationship — never a generic &quot;source&quot; label.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-[60px]">
          <Reveal
            delay={0.1}
            className="relative mx-auto aspect-[420/465] w-full max-w-[420px] overflow-hidden rounded-2xl bg-ink lg:mx-0"
          >
            <Image
              src={`${IMAGE_DIR}/individual-investors-evidence-chain-team.webp`}
              alt="A team annotating printed financial reports around a shared table"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </Reveal>

          <ol className="grid grid-cols-1 content-start gap-x-6 sm:grid-cols-2">
            {fields.map((field, index) => (
              <Reveal as="li" key={field.title} delay={index * 0.03}>
                <div className="flex h-full flex-col gap-1 border-b border-ink/10 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-accent-amber">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-bold text-ink">{field.title}</h3>
                  </div>
                  <p className="max-w-[300px] text-[13px] leading-5 text-muted">{field.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
