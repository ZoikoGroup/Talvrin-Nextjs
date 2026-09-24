import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const blocks = [
  {
    title: "Identity bar",
    body: "Public label, approved method/path, current version, lifecycle state, and a stable anchor link.",
    note: "If method or path isn't source-defined, it is omitted — never substituted.",
  },
  {
    title: "Purpose & prerequisites",
    body: "A direct summary plus every access, authentication, and environment prerequisite, shown above the first example.",
    note: "Prerequisites are visible before a developer can copy any code.",
  },
  {
    title: "Parameters",
    body: "Name, location, requirement, type, allowed values, and defaults from the contract.",
    note: "Responsive stacked rendering on narrow viewports; no data lost to a hidden column.",
  },
  {
    title: "Evidence context",
    body: "Source, time, jurisdiction, and generated-vs-evidence fields, mapped to real contract fields only.",
    note: "No field name or semantic is manufactured to fill this section.",
  },
  {
    title: "Errors & limits",
    body: "Approved error codes, conditions, and remediation; rate/quota limits only if governed.",
    note: "Sections with no defined contract content are omitted entirely, not left blank.",
  },
  {
    title: "Lifecycle & related links",
    body: "Introduced/changed/deprecated context, plus links to Authentication, SDKs, Status, and Changelog.",
    note: "Every related link requires an approved route before it renders.",
  },
];

export default function ReferenceContractSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="violet">Reference Documentation Contract</SectionEyebrow>
          <SectionHeading inverted>
            Every operation renders from one governed structure — never free-hand prose.
          </SectionHeading>
          <SectionLede inverted className="max-w-[760px] sm:text-base sm:leading-6">
            This is the shape a released reference page will take. Blocks that a contract
            doesn&apos;t define are omitted, not invented.
          </SectionLede>
        </Reveal>

        {/* Three block columns with the photo filling a fourth column across both rows. */}
        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,302px)]">
          {blocks.map((block, index) => (
            <Reveal
              key={block.title}
              delay={index * 0.04}
              className="flex flex-col gap-2.5 rounded-2xl bg-[#1b1745] p-6"
            >
              <h3 className="text-base font-bold text-white">{block.title}</h3>
              <p className="text-base leading-6 text-white/75">{block.body}</p>
              <p className="mt-auto border-t border-white/10 pt-4 text-xs leading-5 text-white/60">
                {block.note}
              </p>
            </Reveal>
          ))}

          <Reveal
            delay={0.24}
            className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-[#1b1745] sm:col-span-2 lg:col-span-3 lg:aspect-[16/5] xl:col-span-1 xl:col-start-4 xl:row-span-2 xl:row-start-1 xl:aspect-auto"
          >
            <Image
              src="/images/developers/API-documentation/api-documentation-contract-analyst.webp"
              alt="Analyst standing beside a screen in a bright office"
              fill
              sizes="(min-width: 1280px) 302px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
