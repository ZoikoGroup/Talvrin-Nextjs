import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const items = [
  {
    title: "Passwords or passphrases",
    note: "Never request or intentionally collect, anywhere on this page.",
  },
  {
    title: "One-time codes or recovery codes",
    note: "Never request, including during follow-up.",
  },
  {
    title: "Payment or banking credentials",
    note: "Never request, regardless of how the issue is described.",
  },
  {
    title: "API keys, tokens, private keys, signing secrets",
    note: "Describe that one exists — don't paste the value itself.",
  },
];

export default function SafetyNoticeSection() {
  return (
    <section id="safety-notice" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[680px]">
          <SectionEyebrow tone="amber">Safety Notice</SectionEyebrow>
          <SectionHeading>Never send us these, under any circumstances.</SectionHeading>
          <SectionLede>
            This applies everywhere on this page, including the report form below and any future
            secure-detail channel.
          </SectionLede>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3.5 lg:grid-cols-3">
          <Reveal>
            <div className="flex h-full flex-col gap-1.5 rounded-xl border border-accent-amber/30 bg-surface p-5">
              <p className="text-[15px] font-bold text-ink">{items[0].title}</p>
              <p className="text-[13px] leading-[19.5px] text-muted">{items[0].note}</p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex h-full flex-col gap-1.5 rounded-xl border border-accent-amber/30 bg-surface p-5">
              <p className="text-[15px] font-bold text-ink">{items[1].title}</p>
              <p className="text-[13px] leading-[19.5px] text-muted">{items[1].note}</p>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative hidden overflow-hidden rounded-xl border border-accent-amber/30 bg-surface lg:row-span-2 lg:block"
          >
            <Image
              src={`${IMG}/security-contact-safety-notice-team.webp`}
              alt="Two colleagues in conversation at an office desk"
              fill
              sizes="(min-width: 1024px) 291px, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-1.5 rounded-xl border border-accent-amber/30 bg-surface p-5">
              <p className="text-[15px] font-bold text-ink">{items[2].title}</p>
              <p className="text-[13px] leading-[19.5px] text-muted">{items[2].note}</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex h-full flex-col gap-1.5 rounded-xl border border-accent-amber/30 bg-surface p-5">
              <p className="text-[15px] font-bold text-ink">{items[3].title}</p>
              <p className="text-[13px] leading-[19.5px] text-muted">{items[3].note}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-3.5">
          <div className="rounded-xl border border-ink/10 bg-surface px-[22.8px] py-5">
            <p className="text-sm leading-[22.4px] text-ink">
              Also minimize personal and confidential data, warn us before sharing third-party
              confidential material you&apos;re not authorized to disclose, and describe exploit details
              or proof-of-concept only through an approved secure-detail channel once one exists — never
              in a general open-text field.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
