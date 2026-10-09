"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const revealElements =
      section.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#171335] text-violet-50"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,578px)_minmax(0,578px)] lg:justify-between lg:gap-16 xl:gap-20">
            {/* ========================================
                LEFT CONTENT
            ======================================== */}
            <div
              data-reveal
              className="hero-content flex w-full max-w-[578px] flex-col items-start gap-5"
            >
              {/* Eyebrow */}
              <div className="w-full">
                <p className="m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500">
                  SOLUTIONS / ENTERPRISE
                </p>
              </div>

              {/* Heading */}
              <div className="w-full pt-[3.2px] pb-[0.6px]">
                <h1 className="m-0 w-full font-['IBM_Plex_Sans'] text-[42px] font-bold leading-[1.08] tracking-[-1.5px] text-violet-50 sm:text-[48px] sm:leading-[1.1] md:text-[54px] md:leading-[1.12] lg:text-[60px] lg:leading-[63.8px]">
                  Scale serious public-
                  <br className="hidden lg:block" />
                  market research
                  <br className="hidden lg:block" />
                  across teams and
                  <br className="hidden lg:block" />
                  markets without
                  <br className="hidden lg:block" />
                  losing the evidence
                  <br className="hidden lg:block" />
                  behind the view.
                </h1>
              </div>

              {/* Description */}
              <div className="w-full max-w-[560px] pt-[3.4px]">
                <p className="m-0 font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-violet-50/70 sm:text-[17px] sm:leading-8 lg:text-lg lg:leading-8">
                  Talvrin Enterprise connects organization-scale research to
                  inspectable evidence, preserves the reasoning behind a view,
                  and monitors meaningful changes under governed coverage,
                  rights, and trust controls.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex w-full flex-col items-stretch gap-3 pt-3 sm:w-auto sm:flex-row sm:items-start sm:gap-4">
                {/* Request Access */}
                <a
                  href="/request-access"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-lg bg-violet-50 px-7 py-4 font-['IBM_Plex_Sans'] text-base font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  Request Access
                </a>

                {/* See How It Works */}
                <a
                  href="#how-it-works"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-lg border border-violet-50/30 px-7 py-4 font-['IBM_Plex_Sans'] text-base font-semibold text-violet-50 transition-all duration-300 hover:-translate-y-1 hover:border-violet-50/60"
                >
                  See How It Works →
                </a>
              </div>

              {/* Disclaimer */}
              <div className="w-full">
                <p className="m-0 font-['IBM_Plex_Sans'] text-xs font-normal leading-5 text-violet-50/60 sm:text-sm sm:leading-6">
                  Research and intelligence — not generic enterprise software.
                  No trade execution. No manufactured investment
                  recommendations.
                </p>
              </div>
            </div>

            {/* ========================================
                RIGHT IMAGE
            ======================================== */}
            <div
              data-reveal
              className="hero-image relative mx-auto aspect-[578/722] w-full max-w-[578px] lg:mx-0 lg:ml-auto"
            >
              <Image
                src="/images/solutions/enterprise/hero.png"
                alt="Talvrin Enterprise research team"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 578px"
                className="rounded-[14px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SCROLL REVEAL ANIMATION
      ======================================== */}
      <style jsx>{`
        .hero-content,
        .hero-image {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 0.9s ease,
            transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero-image {
          transform: translateY(50px) scale(0.97);
          transition-delay: 0.15s;
        }

        .hero-content.is-visible,
        .hero-image.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Tablet */
        @media (max-width: 1023px) {
          .hero-content {
            max-width: 760px;
          }

          .hero-image {
            width: 100%;
            max-width: 578px;
          }
        }

        /* Mobile */
        @media (max-width: 639px) {
          .hero-content,
          .hero-image {
            transform: translateY(25px);
          }

          .hero-image {
            transform: translateY(25px) scale(0.98);
          }

          .hero-content.is-visible,
          .hero-image.is-visible {
            transform: translateY(0) scale(1);
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .hero-content,
          .hero-image {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
}