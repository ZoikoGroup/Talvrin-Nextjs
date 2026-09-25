import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const checkpoints = [
  {
    title: "Choose SDK",
    body: "A released registry record with its compatibility and lifecycle — adoption is allowed only once approved-public.",
  },
  {
    title: "Confirm environment",
    body: "Runtime and platform compatibility checked against a current, tested mapping before anything installs.",
  },
  {
    title: "Verify distribution",
    body: "Authoritative package or repository identity, with host and namespace ownership validated first.",
  },
  {
    title: "Install",
    body: "A version-aware command or documented method, using an install artifact tested for that exact version.",
  },
  {
    title: "Authenticate",
    body: "The canonical approved Authentication path, with a nonfunctional placeholder and a clean secret scan.",
  },
  {
    title: "First request",
    body: "A test-backed sample tied to the exact API contract — CI passes, nothing fabricated.",
  },
  {
    title: "Inspect response",
    body: "Object semantics with provenance, timing, and rights guidance verified against the underlying contract.",
  },
  {
    title: "Handle failure",
    body: "Troubleshooting categorized by SDK, auth, access, data, or service class, each diagnosed separately.",
  },
  {
    title: "Continue",
    body: "Deep links into API Documentation, Data APIs, or Integrations that resolve to approved published routes.",
  },
  {
    title: "Upgrade / operate",
    body: "Version, migration, changelog, and status handoffs — all under approved lifecycle mappings.",
  },
];

export default function QuickStartSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="violet">Installation &amp; Quick Start</SectionEyebrow>
          <SectionHeading>
            Ten checkpoints between choosing an SDK and your first verified response.
          </SectionHeading>
          <SectionLede className="max-w-[760px] sm:text-base sm:leading-6">
            Each checkpoint is gated on its own approval — none skip ahead because an earlier one
            succeeded.
          </SectionLede>
        </Reveal>

        <ol className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {checkpoints.map((checkpoint, index) => (
            <Reveal
              as="li"
              key={checkpoint.title}
              delay={index * 0.03}
              className="flex overflow-hidden rounded-xl bg-white shadow-[0px_1px_2px_0px_rgba(23,19,53,0.05)]"
            >
              <span
                className="flex w-14 shrink-0 items-center justify-center bg-ink font-mono text-xl font-bold text-white"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div className="flex flex-col gap-1.5 border-l-2 border-ink/20 px-5 py-4">
                <h3 className="text-base font-bold text-ink">{checkpoint.title}</h3>
                <p className="text-sm leading-5 text-slate-600">{checkpoint.body}</p>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={0.3}
            className="relative aspect-[3/2] overflow-hidden rounded-xl sm:col-span-2 sm:aspect-[16/5] lg:col-span-1 lg:aspect-auto lg:min-h-[144px] xl:col-span-2"
          >
            <Image
              src="/images/developers/SDKs/sdks-quick-start-pair.webp"
              alt="Two colleagues talking on a sofa"
              fill
              sizes="(min-width: 1280px) 630px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </ol>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-[780px] text-sm text-slate-600">
            Quick-start lock: without a source-approved universal starter request, this page uses a
            conceptual sequence and points to an approved API reference — never an invented
            endpoint.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
