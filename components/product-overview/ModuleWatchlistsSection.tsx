import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function ModuleWatchlistsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F5FB] py-20 sm:py-28">
      <Container className="relative">
        {/* 3-Column Layout matching the visual reference */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Title & Description (4 cols) */}
          <div className="flex flex-col lg:col-span-5">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[1.2px] text-[#6C5CE7]">
                MODULE 04 · WATCHLISTS
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl">
                Keep important research interests visible.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-sm leading-relaxed text-ink/70 sm:text-base">
                Organize the markets, issuers, securities, topics, or research
                objects you need to return to — without turning a watchlist into
                a recommendation.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-8">
              <Link
                href="/watchlists"
                className="inline-flex items-center text-sm font-semibold text-[#6C5CE7] transition-colors hover:text-ink"
              >
                Explore Watchlists →
              </Link>
            </Reveal>
          </div>

          {/* Middle Column: "What This Is Not" Card (4 cols) */}
          <Reveal delay={0.2} className="flex lg:col-span-3">
            <div className="flex w-full flex-col justify-between rounded-2xl border border-ink/10 bg-white p-6 sm:p-8 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-[1px] text-ink">
                  WHAT THIS IS NOT
                </span>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  Not a ranking, screener, or recommendation engine. Watchlist
                  inclusion is organization only — it does not endorse or
                  predict any outcome, and does not imply limits, imports, or
                  automation not yet released.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Featured Image (4 cols) */}
          <Reveal delay={0.3} className="flex lg:col-span-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 bg-[#F6F5FB] shadow-md sm:aspect-[16/11]">
              <Image
                src="/images/product/overview/watchlists.png"
                alt="Three professionals smiling and collaborating together around a desk workspace"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
