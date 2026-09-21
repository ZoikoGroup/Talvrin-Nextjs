import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function ChangesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F5FB] py-20 sm:py-28">
      <Container className="relative">
        {/* Header content */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-amber-700">
              CHANGES + RELATIONSHIPS
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              AI can explain a change. It does not redefine what counts as
              material.
            </h2>
          </Reveal>
        </div>

        {/* 50/50 Split Grid layout */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Left Column: Card container */}
          <Reveal delay={0.2} className="flex">
            <div className="flex w-full flex-col justify-between rounded-2xl border border-ink/10 bg-white p-8 shadow-sm">
              <div>
                <h3 className="text-xl font-bold text-ink">
                  Change detected: FOMC balance-sheet language
                </h3>
                <p className="mt-1 text-xs text-ink/60">
                  Previous: 30 Jul 2026 statement → Current: 28 Aug 2026
                  statement
                </p>

                <div className="mt-8">
                  <span className="text-xs font-bold uppercase tracking-[1px] text-amber-700">
                    AI-ASSISTED EXPLANATION
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-ink/80">
                    The August statement narrows the description of the
                    balance-sheet reduction pace relative to July. This is a
                    wording change; Talvrin does not assign a materiality rating
                    — that determination belongs to the governed Monitoring
                    contract.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/review-changes"
                  className="inline-flex items-center justify-center rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-ink/90"
                >
                  Review Changes
                </Link>
                <Link
                  href="/explore-monitoring"
                  className="inline-flex items-center justify-center text-sm font-semibold text-[#6C5CE7] hover:underline"
                >
                  Explore Monitoring →
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Featured Image matching height */}
          <Reveal delay={0.3} className="flex w-full">
            <div className="relative h-full min-h-[330px] w-full overflow-hidden rounded-2xl border border-ink/10 bg-ink/5 shadow-md">
              <Image
                src="/images/product/ai-assistance/changes.png"
                alt="Two professionals in a meeting reviewing document changes together"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
