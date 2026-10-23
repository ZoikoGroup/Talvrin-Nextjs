import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

// Regions are pending approval, so they are deliberately not links.
const regions = [
  {
    name: "Americas",
    body: "Jurisdiction and source context for North, Central and South American markets.",
  },
  { name: "Europe", body: "Jurisdiction and source context for European markets and institutions." },
  { name: "Asia-Pacific", body: "Jurisdiction and source context for Asia-Pacific markets." },
  { name: "Africa", body: "Jurisdiction and source context for African markets." },
  { name: "Global Institutions", body: "Cross-border and multilateral institutional source context." },
  {
    name: "Language & Region",
    body: "Interface language and regional display settings, separate from source-language support.",
  },
];

export default function RegionsSection() {
  return (
    <section id="regions" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Region &amp; destination discovery</SectionEyebrow>
          <SectionHeading>Each region is its own approval object, not a tab on this page.</SectionHeading>
          <SectionLede>
            Country and region detail is available as text and lists below — not only through a
            map — so the same information reaches keyboard and screen-reader visitors.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_304px]">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {regions.map((r, i) => (
              <Reveal
                key={r.name}
                as="li"
                delay={(i % 3) * 0.06}
                className="flex flex-col gap-3.5 rounded-2xl border border-ink/10 p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-ink">{r.name}</h3>
                  <span className="shrink-0 rounded-full border border-slate-600/25 bg-surface px-2.5 py-[5px] text-xs font-bold text-slate-600">
                    PENDING APPROVAL
                  </span>
                </div>
                <p className="flex-1 text-sm leading-[22px] text-slate-600">{r.body}</p>
                <p className="text-sm text-slate-600">Not yet published</p>
              </Reveal>
            ))}
          </ul>

          <Reveal
            delay={0.2}
            className="relative hidden overflow-hidden rounded-2xl border border-ink/10 lg:block"
          >
            <Image
              src={`${IMG}/coverage-regions-laptop.webp`}
              alt="Man smiling while working on a laptop"
              fill
              sizes="304px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
