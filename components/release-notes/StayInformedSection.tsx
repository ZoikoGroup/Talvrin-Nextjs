import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow } from "../global-markets/shared";

export default function StayInformedSection() {
  return (
    <section id="stay-informed" className="scroll-mt-32 bg-ink py-20 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          <SectionEyebrow tone="violet">Stay Informed</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
            Want to know when something changes?
          </h2>
          <p className="mt-4 max-w-[600px] text-base leading-[25.6px] text-white/75">
            A subscription channel will appear here once an approved notification service exists.
            Until then, check back on this page or watch Documentation for updated guidance.
          </p>
          <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/resources/documentation" variant="onDark" className="px-7 py-[15px] text-base">
              Browse Documentation
            </LinkButton>
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-flex cursor-not-allowed flex-wrap items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-[15px] text-base font-semibold text-white/50"
            >
              Subscribe to Updates
              <span className="rounded-full bg-accent-amber/25 px-2 py-[3px] text-[10px] font-bold tracking-[0.4px] text-accent-amber">
                NOT YET AVAILABLE
              </span>
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
