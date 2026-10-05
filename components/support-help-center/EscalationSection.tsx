import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow } from "../global-markets/shared";
import { IMAGE_DIR } from "./shared";

export default function EscalationSection() {
  return (
    <section id="support" className="scroll-mt-32 bg-ink py-20 sm:py-[88px]">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,720px)_minmax(0,426px)] lg:justify-between">
        <Reveal>
          <SectionEyebrow tone="violet">Support Escalation</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
            Still need help?
          </h2>
          <p className="mt-4 max-w-[600px] text-base leading-[25.6px] text-white/75">
            If the guidance above doesn&apos;t resolve the issue, reach the Talvrin support team
            directly.
          </p>
          <p className="mt-3 max-w-[600px] text-sm leading-6 text-white/60">
            Account access, accessibility barriers, bug reports and security reports each route to
            their own Support destination above.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <LinkButton href="/support/contact-support" variant="onDark" className="px-7 py-[15px] text-base">
              Contact Support
            </LinkButton>
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-flex cursor-not-allowed flex-wrap items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-[15px] text-base font-semibold text-white/50"
            >
              Check Service Status
              <span className="rounded-full bg-accent-amber/25 px-2 py-[3px] text-[10px] font-bold tracking-[0.4px] text-accent-amber">
                NOT YET AVAILABLE
              </span>
            </button>
          </div>

          <p className="mt-4 max-w-[560px] text-xs leading-5 text-white/50">
            Before contacting support, avoid including passwords, API keys, tokens or other sensitive
            credentials in your message.
          </p>
        </Reveal>

        <Reveal
          delay={0.15}
          className="relative mx-auto aspect-[426/356] w-full max-w-[426px] overflow-hidden rounded-2xl bg-white lg:mx-0"
        >
          <Image
            src={`${IMAGE_DIR}/help-center-escalation-support.webp`}
            alt="A support specialist smiling while explaining something beside a laptop"
            fill
            sizes="(min-width: 1024px) 426px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
