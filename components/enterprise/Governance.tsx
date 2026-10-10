"use client";

import { useEffect, useRef } from "react";

const governanceLayers = [
  {
    title: "Source identity / class",
    behavior: "Named source and authority classification.",
    guardrail: "No generic source labels.",
  },
  {
    title: "Time / period",
    behavior: "Publication and effective/reporting periods remain distinct.",
    guardrail: "No false chronology.",
  },
  {
    title: "Jurisdiction",
    behavior: "Visible where meaning or rights differ.",
    guardrail: "No blanket equivalence across regions.",
  },
  {
    title: "Version / supersession",
    behavior: "Preserve current/prior relationships.",
    guardrail: "No silent replacement.",
  },
  {
    title: "Rights / access",
    behavior: "Respect licensing and permitted use.",
    guardrail:
      "Enterprise access is not unrestricted redistribution.",
  },
  {
    title: "Evidence relationship",
    behavior: "Supports / contradicts / updates / contextualizes.",
    guardrail: "No opaque synthesis.",
  },
  {
    title: "Interpretation provenance",
    behavior:
      "Talvrin analysis, AI, and user content remain distinct.",
    guardrail: "No generated output styled as authority.",
  },
];

export default function Governance() {
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
        className="w-full overflow-hidden bg-white text-slate-900"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 md:px-8 lg:px-8 xl:px-20 lg:py-16 xl:py-[96px]">
          {/* =========================================
              HEADER
          ========================================= */}
          <div className="flex w-full flex-col items-start">
            {/* Eyebrow */}
            <p
              data-reveal
              className="reveal-element m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600"
            >
              EVIDENCE GOVERNANCE
            </p>

            {/* Heading */}
            <h2
              data-reveal
              className="reveal-element reveal-delay-1 m-0 max-w-[780px] pt-3 font-['IBM_Plex_Sans'] text-[30px] font-bold leading-[1.12] tracking-[-1px] text-slate-900 sm:text-[38px] md:text-[42px] lg:text-5xl lg:leading-[48.72px]"
            >
              Seven layers keep evidence governed at organizational scale.
            </h2>

            {/* Description */}
            <p
              data-reveal
              className="reveal-element reveal-delay-2 m-0 max-w-[780px] pt-4 font-['IBM_Plex_Sans'] text-sm sm:text-base font-normal leading-6 sm:leading-7 text-gray-600"
            >
              Source identity, timing, jurisdiction, version, rights,
              relationship, and interpretation provenance stay
              distinguishable — never collapsed into one undifferentiated
              view.
            </p>
          </div>

          {/* =========================================
              TABLE
          ========================================= */}
          <div className="mt-8 sm:mt-10 w-full">
            {/* Desktop column headings */}
            <div
              data-reveal
              className="reveal-element hidden grid-cols-[170px_minmax(0,1fr)_minmax(0,1fr)] xl:grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)] gap-4 pb-3 lg:grid"
            >
              <div />

              <div className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
                REQUIRED BEHAVIOR
              </div>

              <div className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
                ENTERPRISE GUARDRAIL
              </div>
            </div>

            {/* Governance rows */}
            <div className="w-full">
              {governanceLayers.map((layer, index) => (
                <div
                  key={layer.title}
                  data-reveal
                  className={`reveal-element ${
                    index % 3 === 0
                      ? "reveal-delay-1"
                      : index % 3 === 1
                        ? "reveal-delay-2"
                        : "reveal-delay-3"
                  } grid grid-cols-1 gap-3 border-b-[0.8px] border-slate-900/10 py-4 sm:py-5 lg:grid-cols-[170px_minmax(0,1fr)_minmax(0,1fr)] xl:grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-4`}
                >
                  {/* Layer name */}
                  <div className="flex w-fit max-w-full min-w-[160px] sm:min-w-[192px] items-center justify-center rounded-md border border-slate-900/20 bg-violet-50 px-4 sm:px-5 py-1.5">
                    <span className="text-center font-['IBM_Plex_Sans'] text-xs font-bold leading-4 text-slate-900">
                      {layer.title}
                    </span>
                  </div>

                  {/* Required behavior */}
                  <div className="w-full">
                    <p className="m-0 font-['IBM_Plex_Sans'] text-base font-normal leading-6 text-slate-700">
                      {layer.behavior}
                    </p>
                  </div>

                  {/* Enterprise guardrail */}
                  <div className="w-full">
                    <p className="m-0 font-['IBM_Plex_Sans'] text-sm font-normal leading-5 text-gray-600">
                      {layer.guardrail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SCROLL REVEAL
      ========================================= */}
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