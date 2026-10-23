import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const jurisdictions = [
  "United States",
  "United Kingdom",
  "EU / EEA",
  "Canada",
  "Australia",
  "India, Singapore & other jurisdictions",
];

export default function JurisdictionSection() {
  return (
    <section className="bg-white py-16 sm:py-[88px]">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,780px)_minmax(0,384px)] lg:justify-between">
        <div>
          <Reveal>
            <SectionEyebrow>Jurisdiction &amp; legal entity</SectionEyebrow>
            <SectionHeading>One global brand; requirements are assessed by jurisdiction.</SectionHeading>
            <SectionLede>
              Talvrin is a trading name of Zoiko Markets, a Zoiko Financial Group company. Presence
              in a jurisdiction below means applicability is assessed — it is not a blanket
              compliance claim, and it does not by itself establish a local legal entity,
              registered office or regulatory authorization.
            </SectionLede>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {jurisdictions.map((j) => (
                <li
                  key={j}
                  className="rounded-full border border-ink/10 bg-surface px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  {j}
                </li>
              ))}
            </ul>
            <Link
              href="/legal/legal-notices"
              className="mt-6 inline-block text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
            >
              See corporate identity &amp; registered details →
            </Link>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-square w-full overflow-hidden rounded-2xl"
        >
          <Image
            src={`${IMG}/legal-jurisdiction-team.webp`}
            alt="Colleagues gathered around a laptop, smiling and pointing at the screen"
            fill
            sizes="(min-width: 1024px) 384px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
