import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function CTASection() {
  return (
    // The design has no separate "Other Routes" section; this closing CTA carries the alternative route.
    <section id="other-routes" className="scroll-mt-32 bg-ink py-16 sm:py-20">
      <Container>
        <Reveal className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center">
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-surface sm:text-[34px] lg:text-[42px] lg:leading-[48.3px]">
            Ask only what&apos;s necessary.
            <br />
            Promise only what&apos;s true.
          </h2>
          <p className="max-w-[640px] text-base leading-7 text-surface/70">
            Every access state, field, and next step on this page is tied to the current approved product
            configuration — never invented.
          </p>

          <div className="mt-2 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="#request-form"
              className="inline-flex items-center justify-center rounded-lg bg-surface px-7 py-4 text-center text-base font-semibold text-ink transition-colors hover:bg-white"
            >
              Request Access
            </Link>
            <Link
              href="/company/contact"
              className="inline-flex items-center justify-center rounded-lg border border-surface/30 px-7 py-4 text-center text-base font-semibold text-surface transition-colors hover:border-surface/60 hover:bg-surface/5"
            >
              Contact Talvrin
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
