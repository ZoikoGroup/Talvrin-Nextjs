import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const families = [
  {
    title: "Decision / Policy Statement",
    body: "Primary official evidence; highest source prominence.",
  },
  {
    title: "Minutes / Account",
    body: "Linked to the relevant meeting or decision where identity is clear.",
  },
  {
    title: "Press Conference / Transcript",
    body: "Uses the official source or a permitted transcript, distinguished from any Talvrin summary.",
  },
  {
    title: "Speech / Testimony",
    body: "Displays speaker, role, title, date/time, venue and official source where available.",
  },
  {
    title: "Schedule Notice",
    body: "Treated as operational evidence, not a policy conclusion.",
  },
  {
    title: "Correction / Revised Document",
    body: "Preserves the prior version relationship when the source identifies a correction or supersession.",
  },
  {
    title: "Third-Party Commentary",
    body: "Never mixed into the official evidence stream unless clearly separated and governed as analysis.",
  },
  {
    title: "Policy Report / Projections",
    body: "Linked as a separate evidence object with reference period and publication timing exposed.",
  },
];

function FamilyCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="h-full rounded-[14px] border border-ink/8 bg-surface p-[23px]">
      <h3 className="text-[16px] font-bold text-ink">{title}</h3>
      <p className="mt-[10px] text-sm leading-[21.7px] text-slate-600">{body}</p>
    </div>
  );
}

export default function SourceFamilyDirectory() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Source Family Directory</SectionEyebrow>
          <SectionHeading>Official documents before interpretation.</SectionHeading>
          <p className="mt-5 max-w-[800px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            Statements, decisions, releases, minutes, speeches and reports appear as separate
            source families — only when verified — rather than collapsing into undifferentiated
            &ldquo;news.&rdquo;
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {families.slice(0, 4).map((family, index) => (
            <Reveal key={family.title} delay={index * 0.05}>
              <FamilyCard {...family} />
            </Reveal>
          ))}
          <Reveal className="relative min-h-[260px] overflow-hidden rounded-[14px] border border-ink/8 bg-surface lg:row-span-2">
            <Image
              src="/images/markets-central-banks/markets-central-banks-source-family-hallway.webp"
              alt="Two colleagues reviewing official source documents in a corridor"
              fill
              sizes="(min-width: 1024px) 20vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          {families.slice(4).map((family, index) => (
            <Reveal key={family.title} delay={index * 0.05}>
              <FamilyCard {...family} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
