import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const fields = [
  { label: "$ DISPLAY NAME", value: "Not established by supplied sources." },
  {
    label: "$ LANGUAGE / RUNTIME FAMILY",
    value: "No language, framework, or runtime is confirmed for any SDK.",
  },
  {
    label: "$ PACKAGE IDENTITY",
    value: "No package, module, or namespace name is assumed or invented.",
  },
  {
    label: "$ DISTRIBUTION CHANNEL",
    value: "Resolves only from an allowlisted, ownership-verified host — never a guessed mirror.",
  },
  {
    label: "$ RECOMMENDED VERSION",
    value: "Resolves only from the approved SDK Registry once a version is governed.",
  },
  {
    label: "$ LIFECYCLE STATE",
    value: "Released, beta, deprecated, or withdrawn — set by the registry, not by this page.",
  },
];

export default function RegistryContractSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="violet">Registry &amp; Publication Contract</SectionEyebrow>
          <SectionHeading inverted>
            Every field below resolves from one approved SDK Registry version.
          </SectionHeading>
          <SectionLede inverted className="max-w-[760px] sm:text-base sm:leading-6">
            Until that registry publishes a record, this page describes the contract only — never a
            guessed language, package name, or distribution channel.
          </SectionLede>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,920px)_minmax(0,335px)] lg:items-start lg:gap-8">
          <Reveal
            delay={0.1}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f0c29]"
          >
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-3">
              <span className="size-2 rounded-sm bg-red-500" aria-hidden="true" />
              <span className="size-2 rounded-sm bg-orange-300" aria-hidden="true" />
              <span className="size-2 rounded-sm bg-green-500" aria-hidden="true" />
              <span className="pl-2 font-mono text-xs text-white/40">registry.contract</span>
            </div>

            <dl className="py-2">
              {fields.map((field) => (
                <div
                  key={field.label}
                  className="flex flex-col gap-1.5 border-b border-l-[3px] border-b-white/5 border-l-accent-amber px-5 py-4 sm:px-7"
                >
                  <dt className="font-mono text-xs text-orange-300">{field.label}</dt>
                  <dd className="pl-4 text-sm leading-6 text-white/75">{field.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-white sm:aspect-[2/1] lg:aspect-[335/550]"
          >
            <Image
              src="/images/developers/SDKs/sdks-registry-contract-speaker.webp"
              alt="Colleague explaining a point during a meeting"
              fill
              sizes="(min-width: 1024px) 335px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
