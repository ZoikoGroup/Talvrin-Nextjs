import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow } from "../global-markets/shared";

export default function DocsOnboardingSection() {
  return (
    <section className="bg-ink py-20 sm:py-[88px]">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,680px)_minmax(0,412px)] lg:justify-between">
        <Reveal>
          <SectionEyebrow tone="violet">Docs &amp; Onboarding</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
            Understand a changed workflow.
          </h2>
          <p className="mt-4 max-w-[680px] text-base leading-[25.6px] text-white/75">
            When a change affects how you use Talvrin, Documentation and Getting Started stay the
            authoritative places to learn current behavior. Release Notes explains what changed —
            not how every feature works today.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-start">
            <LinkButton href="/resources/documentation" variant="onDark" className="px-7 py-[15px] text-base">
              Open Documentation
            </LinkButton>
            <Link
              href="/resources/getting-started"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-[15px] text-base font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Getting Started
            </Link>
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          className="relative aspect-[412/251] w-full overflow-hidden rounded-2xl bg-stone-400"
        >
          <Image
            src="/images/resources/release-notes/release-notes-docs-onboarding.webp"
            alt="A group of colleagues sharing coffee and conversation"
            fill
            sizes="(min-width: 1024px) 412px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
