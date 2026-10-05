import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { EmptyNote, SectionIntro } from "./shared";

const changeTypes = [
  { title: "Added", body: "A newly available customer-facing capability or public surface." },
  { title: "Changed", body: "Meaningful behavior, workflow, field, content model or UX change." },
  { title: "Fixed", body: "A resolved defect or incorrect behavior." },
  { title: "Removed", body: "No longer available, with an effective date and replacement guidance." },
  {
    title: "Coverage / Availability",
    body: "A change to released market, dataset, jurisdiction or capability availability.",
  },
  {
    title: "Deprecated",
    body: "Still available but scheduled for retirement or replacement, with an approved timeline.",
  },
];

function ChangeTypeCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-ink/10 bg-surface px-[22px] py-6">
      <h3 className="text-base font-bold text-ink">{title}</h3>
      <p className="flex-1 text-[13px] leading-5 text-muted">{body}</p>
      <EmptyNote>No entries filed yet.</EmptyNote>
    </div>
  );
}

export default function ChangeTypesSection() {
  return (
    <section id="change-types" className="scroll-mt-32 bg-white py-20 sm:py-[88px]">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Change Types" tone="amber" title="A small, governed vocabulary for what changed.">
            Every entry, once published, uses one of these types — shown as a text label, never by
            color alone.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {changeTypes.slice(0, 3).map((type, index) => (
            <Reveal key={type.title} delay={index * 0.05} className="h-full">
              <ChangeTypeCard {...type} />
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative hidden overflow-hidden rounded-2xl border border-ink/10 lg:row-span-2 lg:block"
          >
            <Image
              src="/images/resources/release-notes/release-notes-change-types.webp"
              alt="Colleagues in conversation at a busy industry event"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          {changeTypes.slice(3).map((type, index) => (
            <Reveal key={type.title} delay={(index + 3) * 0.05} className="h-full">
              <ChangeTypeCard {...type} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
