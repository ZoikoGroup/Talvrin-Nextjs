import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const blockers = [
  "Any SDK, package, version, runtime, or endpoint claim without an authoritative source and owner.",
  "An install command pointing to an unverified namespace or host.",
  "Draft, private, or withdrawn records shown in the catalog as adoptable.",
  "“Latest,” “stable,” “official,” or “LTS” used without a governed definition.",
  "A code sample containing real credentials, customer identifiers, or valid-looking secret material.",
  "A quick start inventing an endpoint, parameter, or response that doesn’t exist.",
  "Installation or authentication success described as granting entitlement, rights, or market coverage.",
  "Release without a registry snapshot, package-ownership check, and accessibility or security review.",
];

export default function BlockersSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="violet">Publication Blockers</SectionEyebrow>
          <SectionHeading>
            Eight conditions block release before design opinion enters the conversation.
          </SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,920px)_minmax(0,336px)] lg:items-start lg:gap-8">
          <Reveal delay={0.1} className="overflow-hidden rounded-2xl bg-[#0f0c29]">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
              <p className="font-mono text-sm text-white/50">sdk-page — problems</p>
              <span className="flex size-6 items-center justify-center rounded-full bg-red-500/80 text-xs font-bold text-white">
                {blockers.length}
              </span>
            </div>

            <ul>
              {blockers.map((blocker) => (
                <li
                  key={blocker}
                  className="flex items-start gap-3 border-b border-white/5 px-5 py-4 last:border-b-0 sm:px-6"
                >
                  <span className="mt-0.5 shrink-0 text-red-400" aria-hidden="true">
                    ✕
                  </span>
                  <p className="font-mono text-sm leading-5 text-white/80">{blocker}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl sm:aspect-[2/1] lg:aspect-[336/490]"
          >
            <Image
              src="/images/developers/SDKs/sdks-blockers-meeting.webp"
              alt="Colleagues talking in a bright open-plan office"
              fill
              sizes="(min-width: 1024px) 336px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
