import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const cardFields = [
  { name: "public_name", type: '"string"' },
  { name: "language", type: '"string"' },
  { name: "package_id", type: '"string"' },
  { name: "version", type: '"string"' },
  { name: "lifecycle", type: '"released" | "beta" | "deprecated" | "withdrawn"' },
  { name: "compatibility", type: "string[]" },
  { name: "detail_link", type: "url" },
];

export default function CatalogSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">SDK Discovery &amp; Catalog</SectionEyebrow>
          <SectionHeading>
            The catalog renders from a snapshot — right now, that snapshot is empty.
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-surface py-2 pl-3.5 pr-4 text-sm text-slate-600">
            <span className="size-2 shrink-0 rounded-sm bg-slate-500" aria-hidden="true" />0 SDKs
            currently meet the bar for publication in any language.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,707px)_minmax(0,544px)] lg:items-start lg:gap-8">
          <Reveal
            delay={0.15}
            className="overflow-x-auto rounded-2xl bg-[#0f0c29] px-6 pb-10 pt-7 sm:px-8"
          >
            <p className="font-mono text-xs tracking-wide text-white/40">
              ILLUSTRATIVE FIELD CONTRACT — NOT A LIVE SCHEMA
            </p>

            <pre className="mt-4 font-mono text-sm leading-7 text-white/40">
              <code>
                <span className="text-indigo-300">interface</span>{" "}
                <span className="text-white">SDKCard</span> {"{"}
                {cardFields.map((field) => (
                  <span key={field.name}>
                    {"\n  "}
                    <span className="text-green-300">{field.name}</span>:{" "}
                    <span className="text-orange-300">{field.type}</span>
                  </span>
                ))}
                {"\n}"}
              </code>
            </pre>

            <p className="mt-4 text-xs text-white/40">
              Every field is registry-sourced. A missing field renders as unknown, never a plausible
              default.
            </p>
          </Reveal>

          <Reveal
            delay={0.2}
            className="relative aspect-[544/430] w-full overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/developers/SDKs/sdks-catalog-conversation.webp"
              alt="Two colleagues in conversation in a lounge area"
              fill
              sizes="(min-width: 1024px) 544px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
