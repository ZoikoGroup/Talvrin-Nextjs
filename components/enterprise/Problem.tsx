"use client";

import { useEffect, useRef } from "react";

const problems = [
  {
    title: "Fragmented source gathering",
    consequence:
      "Teams duplicate work and reconstruct evidence repeatedly.",
    response:
      "Evidence-linked research objects replace scattered reconstruction.",
  },
  {
    title: "Authority blur",
    consequence:
      "Source facts, commentary, AI, and notes can become visually equivalent.",
    response:
      "Explicit authority and provenance layers stay distinct.",
  },
  {
    title: "Lost reasoning",
    consequence:
      "The basis of a view disappears across files, tabs, and personnel changes.",
    response:
      "Institutional memory preserves research-view continuity.",
  },
  {
    title: "Weak reviewability",
    consequence:
      "Leaders and governance teams struggle to inspect why a view was formed.",
    response:
      "Evidence relationships and version context stay inspectable.",
  },
  {
    title: "Global complexity",
    consequence:
      "Jurisdiction, source rights, timing, and coverage differ across markets.",
    response:
      "Coverage, rights, and jurisdiction states remain visible.",
  },
  {
    title: "Change overload",
    consequence:
      "Teams repeatedly monitor too many sources manually.",
    response:
      "Research-object monitoring focuses on meaningful evidence changes.",
  },
];

export default function Problem() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="w-full overflow-hidden bg-violet-50"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 md:px-10 lg:px-20 lg:py-[95px]">
          {/* ========================================
              SECTION HEADER
          ======================================== */}
          <div className="flex w-full flex-col items-start">
            {/* Eyebrow */}
            <p
              data-reveal
              className="reveal-element m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500"
            >
              THE PROBLEM AT SCALE
            </p>

            {/* Heading */}
            <h2
              data-reveal
              className="reveal-element reveal-delay-1 m-0 max-w-[780px] pt-3 font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[1.1] tracking-[-1px] text-slate-900 sm:text-[42px] lg:text-5xl lg:leading-[48.72px]"
            >
              Fragmented research becomes an organizational liability.
            </h2>

            {/* Description */}
            <p
              data-reveal
              className="reveal-element reveal-delay-2 m-0 max-w-[780px] pt-5 font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600"
            >
              Across teams and markets, duplicated work, authority blur, and
              lost reasoning compound faster than any one analyst can fix.
            </p>
          </div>

          {/* ========================================
              COMPARISON TABLE
          ======================================== */}
          <div className="mt-10 w-full lg:mt-10">
            {/* Column headers */}
            <div
              data-reveal
              className="reveal-element hidden grid-cols-[224px_minmax(0,1fr)_minmax(0,1fr)] gap-4 pb-3 lg:grid"
            >
              <div />

              <div className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
                ENTERPRISE CONSEQUENCE
              </div>

              <div className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
                TALVRIN RESPONSE
              </div>
            </div>

            {/* Rows */}
            <div className="w-full">
              {problems.map((problem, index) => (
                <div
                  key={problem.title}
                  data-reveal
                  className={`reveal-element ${
                    index % 3 === 0
                      ? "reveal-delay-1"
                      : index % 3 === 1
                        ? "reveal-delay-2"
                        : "reveal-delay-3"
                  } grid grid-cols-1 gap-4 border-b-[0.8px] border-slate-900/10 py-5 lg:grid-cols-[224px_minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-4`}
                >
                  {/* Problem label */}
                  <div className="flex w-fit min-w-[224px] items-center justify-center rounded-md border border-slate-900/20 bg-white px-5 py-2">
                    <span className="text-center font-['IBM_Plex_Sans'] text-xs font-bold leading-4 text-slate-900">
                      {problem.title}
                    </span>
                  </div>

                  {/* Enterprise consequence */}
                  <div className="w-full">
                    <p className="m-0 font-['IBM_Plex_Sans'] text-base font-normal leading-6 text-slate-700">
                      {problem.consequence}
                    </p>
                  </div>

                  {/* Talvrin response */}
                  <div className="w-full">
                    <p className="m-0 font-['IBM_Plex_Sans'] text-sm font-normal leading-5 text-gray-600">
                      {problem.response}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SCROLL ANIMATION
      ======================================== */}
      <style jsx>{`
        .reveal-element {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.7s ease,
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal-delay-1 {
          transition-delay: 0.08s;
        }

        .reveal-delay-2 {
          transition-delay: 0.16s;
        }

        .reveal-delay-3 {
          transition-delay: 0.24s;
        }

        .reveal-element.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal-element {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
}