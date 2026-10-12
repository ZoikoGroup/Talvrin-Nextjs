"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function DocumentationHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;

    if (!hero || !image) return;

    let frame = 0;

    const updateParallax = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.bottom < 0 || rect.top > viewportHeight) {
          return;
        }

        const progress =
          (viewportHeight - rect.top) /
          (viewportHeight + rect.height);

        const clamped = Math.max(0, Math.min(1, progress));
        const movement = (clamped - 0.5) * -24;

        image.style.transform = `translate3d(0, ${movement}px, 0)`;
      });
    };

    window.addEventListener("scroll", updateParallax, {
      passive: true,
    });

    updateParallax();

    return () => {
      window.removeEventListener("scroll", updateParallax);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-[#171331] text-violet-50"
    >
      {/* MAIN RADIAL BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(99,102,241,0.20)_0%,rgba(99,102,241,0)_65%)]"
      />

      {/* SUBTLE RIGHT SIDE GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-280px] top-[-120px] h-[600px] w-[600px] rounded-full bg-indigo-500/[0.025] blur-[120px]"
      />

      {/* HERO INNER */}
      <div className="relative mx-auto flex min-h-auto w-full max-w-[1440px] items-center px-5 py-12 sm:px-8 sm:py-16 md:px-10 lg:min-h-[640px] lg:px-8 lg:py-16 xl:px-20 xl:py-20">
        {/* CONTENT GRID */}
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8 xl:grid-cols-[minmax(0,720px)_384px] xl:justify-between xl:gap-12">
          {/* LEFT CONTENT */}
          <div className="flex w-full max-w-[1000px] flex-col items-start gap-5">
            {/* EYEBROW */}
            <div className="flex w-full flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-yellow-600 [font-family:'IBM_Plex_Sans',sans-serif]">
                DOCUMENTATION
              </span>
            </div>

            {/* HEADING */}
            <div className="flex w-full max-w-[1000px] flex-col items-start">
              <h1 className="m-0 w-full text-[34px] font-bold leading-[1.12] tracking-[-0.025em] text-violet-50 [font-family:'IBM_Plex_Sans',sans-serif] sm:text-[44px] lg:text-[46px] lg:leading-[1.12] xl:text-[60px] xl:leading-[61.6px]">
                Understand the workflow.
                <br className="hidden sm:block" />
                {" "}Inspect the evidence. Know what to do next.
              </h1>
            </div>

            {/* DESCRIPTION */}
            <div className="flex w-full max-w-[640px] flex-col items-start">
              <p className="m-0 w-full text-[15px] font-normal leading-7 text-violet-50/90 [font-family:'IBM_Plex_Sans',sans-serif] sm:text-[16px] lg:text-[17px] lg:leading-7 xl:text-[18px] xl:leading-8">
                Use Talvrin Documentation to learn product concepts,
                complete research tasks, understand evidence and
                monitoring behavior, and find the right Trust or Support
                path when a question depends on governance, availability
                or account-specific context.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex w-full flex-col items-stretch gap-3 pt-1 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
              <a
                href="#documentation"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-violet-50 px-6 py-3 text-[15px] font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white [font-family:'IBM_Plex_Sans',sans-serif]"
              >
                Browse documentation
              </a>

              <a
                href="#platform"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-violet-50/30 px-6 py-3 text-[15px] font-semibold text-violet-50 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-50/50 hover:bg-violet-50/[0.04] [font-family:'IBM_Plex_Sans',sans-serif]"
              >
                Explore the Platform
              </a>
            </div>

            {/* SUPPORTING TEXT */}
            <div className="flex w-full max-w-[640px] flex-col items-start pt-0">
              <p className="m-0 text-[13px] font-normal leading-6 text-violet-50/60 [font-family:'IBM_Plex_Sans',sans-serif] sm:text-sm">
                Talvrin is a research and intelligence platform.
                Documentation explains product behavior; underlying
                evidence remains separately inspectable.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            ref={imageRef}
            className="relative mx-auto w-[240px] shrink-0 will-change-transform sm:w-[280px] lg:mx-0 lg:w-[320px] xl:w-[384px]"
          >
            <div className="relative w-full overflow-hidden bg-transparent py-2 lg:py-4">
              <Image
                src="/images/resources/documentation/hero.png"
                alt="Talvrin documentation"
                width={384}
                height={536}
                priority
                sizes="(max-width: 639px) 240px, (max-width: 1023px) 280px, (max-width: 1279px) 320px, 384px"
                className="block h-auto w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}