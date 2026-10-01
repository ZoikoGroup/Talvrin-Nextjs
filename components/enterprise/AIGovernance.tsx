"use client";

import { useEffect, useRef } from "react";

const governanceRows = [
  {
    assist: "Discovery of governed evidence",
    notBecome: "Authoritative source",
  },
  {
    assist: "Organization and comparison",
    notBecome: "Enterprise policy engine",
  },
  {
    assist: "Summarization",
    notBecome: "Guaranteed fact",
  },
  {
    assist: "Change identification",
    notBecome: "Compliance, risk, or incident authority",
  },
  {
    assist: "Relationship explanation",
    notBecome: "Organization-wide investment recommendation",
  },
  {
    assist: "Contradiction surfacing",
    notBecome: "Substitute for source inspection",
  },
  {
    assist: "Stating an unable-to-ground response",
    notBecome: "Generic confident filler",
  },
];

export default function AIGovernance() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements =
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
        className="w-full overflow-hidden bg-violet-50 text-slate-900"
      >
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 md:px-10 lg:px-20 lg:py-[96px]">
          {/* Header */}
          <div className="w-full">
            <p
              data-reveal
              className="reveal m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500"
            >
              AI GOVERNANCE
            </p>

            <div
              data-reveal
              className="reveal reveal-1 w-full max-w-[760px] pt-3"
            >
              <h2 className="m-0 font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[1.1] tracking-[-1px] text-slate-900 sm:text-[42px] lg:text-5xl lg:leading-[48.72px]">
                AI assists the research. It does not
                <br className="hidden lg:block" />
                become organizational authority.
              </h2>
            </div>
          </div>

          {/* Table */}
          <div className="mt-10 w-full">
            {/* Column headings */}
            <div
              data-reveal
              className="reveal reveal-2 grid w-full grid-cols-1 gap-4 pb-3 md:grid-cols-2"
            >
              <div className="w-full">
                <p className="m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
                  AI MAY ASSIST WITH
                </p>
              </div>

              <div className="w-full">
                <p className="m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
                  AI MUST NOT BECOME
                </p>
              </div>
            </div>

            {/* Rows */}
            <div className="w-full">
              {governanceRows.map((row, index) => (
                <div
                  key={row.assist}
                  data-reveal
                  className="reveal grid w-full grid-cols-1 gap-3 border-b-[0.8px] border-slate-900/10 py-4 md:grid-cols-2 md:gap-4"
                  style={{
                    transitionDelay: `${180 + index * 60}ms`,
                  }}
                >
                  {/* AI may assist */}
                  <div className="flex min-w-0 items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="shrink-0 pt-[0.8px] font-['Segoe_UI_Symbol'] text-base font-normal leading-6 text-indigo-500"
                    >
                      ✓
                    </span>

                    <p className="m-0 font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-slate-900 sm:text-base">
                      {row.assist}
                    </p>
                  </div>

                  {/* AI must not become */}
                  <div className="flex min-w-0 items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="shrink-0 pt-[0.8px] font-['Segoe_UI_Symbol'] text-base font-normal leading-6 text-pink-800"
                    >
                      ✕
                    </span>

                    <p className="m-0 font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-gray-600 sm:text-base">
                      {row.notBecome}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom statement */}
          <div
            data-reveal
            className="reveal reveal-last w-full max-w-[780px] pt-6"
          >
            <p className="m-0 font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-gray-600">
              Fluent output is not authoritative merely because it is
              persuasive. Underlying evidence remains independently
              inspectable; interpretation, judgment, and responsibility remain
              human.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.75s ease,
            transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-1 {
          transition-delay: 80ms;
        }

        .reveal-2 {
          transition-delay: 140ms;
        }

        .reveal-last {
          transition-delay: 260ms;
        }

        @media (max-width: 1023px) {
          .reveal {
            transform: translateY(22px);
          }
        }

        @media (max-width: 639px) {
          .reveal {
            transform: translateY(18px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .reveal.is-visible {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
}