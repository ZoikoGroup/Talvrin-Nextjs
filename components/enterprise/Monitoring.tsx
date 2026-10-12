"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const changes = [
  {
    status: "NEW",
    statusClass: "bg-yellow-600/10 text-yellow-600",
    title: "Regulator guidance affecting reporting-period disclosures",
    impact: "Potential impact — governed",
  },
  {
    status: "UPDATED",
    statusClass: "bg-indigo-500/10 text-indigo-500",
    title: "Official statistics revised, reference period changed",
    impact: "Version relationship shown",
  },
  {
    status: "UNCHANGED",
    statusClass: "bg-gray-600/10 text-gray-600",
    title: "Central-bank policy stance",
    impact: "No material change",
  },
];

export default function Monitoring() {
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
        className="w-full overflow-hidden bg-white text-slate-900"
      >
        <div className="mx-auto w-full max-w-[1320px] px-4 py-12 sm:px-6 md:px-8 lg:px-8 xl:px-20 lg:py-16 xl:py-[96px]">
          {/* Eyebrow */}
          <p
            data-reveal
            className="reveal-element m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600"
          >
            CONTINUOUS MONITORING
          </p>

          {/* Heading */}
          <div
            data-reveal
            className="reveal-element reveal-delay-1 w-full max-w-[760px] pt-3"
          >
            <h2 className="m-0 font-['IBM_Plex_Sans'] text-[30px] font-bold leading-[1.12] tracking-[-1px] text-slate-900 sm:text-[38px] md:text-[42px] lg:text-5xl lg:leading-[48.72px]">
              Monitoring maintains research{" "}
              <br className="hidden xl:block" />
              continuity — not alert volume.
            </h2>
          </div>

          {/* Main content */}
          <div className="mt-8 sm:mt-10 grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,720px)_minmax(0,535px)] lg:gap-6">
            {/* Research View */}
            <div
              data-reveal
              className="reveal-element reveal-delay-2 w-full rounded-2xl bg-violet-50 px-6 py-10 sm:px-8 sm:pt-14 sm:pb-8"
            >
              <div className="w-full">
                <h3 className="m-0 font-['IBM_Plex_Sans'] text-lg font-bold text-slate-900 sm:text-xl">
                  Research View: Regulatory Policy Outlook
                </h3>
              </div>

              <div className="pt-1">
                <p className="m-0 font-['IBM_Plex_Sans'] text-xs font-normal text-gray-600">
                  Last reviewed: 08 September 2026
                </p>
              </div>

              <div className="pt-5 pb-3">
                <p className="m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
                  SINCE LAST REVIEW
                </p>
              </div>

              {/* Changes */}
              <div className="w-full">
                {changes.map((change) => (
                  <div
                    key={change.status}
                    className="flex w-full flex-col gap-3 border-b-[0.8px] border-slate-900/10 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5"
                  >
                    <div className="flex min-w-0 items-start gap-2.5">
                      <span
                        className={`shrink-0 rounded-md px-2.5 py-1 font-['IBM_Plex_Sans'] text-xs font-bold ${change.statusClass}`}
                      >
                        {change.status}
                      </span>

                      <p className="m-0 min-w-0 font-['IBM_Plex_Sans'] text-sm font-medium leading-6 text-slate-900 sm:text-base">
                        {change.title}
                      </p>
                    </div>

                    <p className="m-0 shrink-0 font-['IBM_Plex_Sans'] text-xs font-normal text-gray-600 sm:text-right">
                      {change.impact}
                    </p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col items-start gap-4 pt-6 sm:flex-row sm:items-center">
                <a
                  href="/product/research-workspace"
                  className="inline-flex min-h-[44px] items-center rounded-lg bg-slate-900 px-5 py-3 font-['IBM_Plex_Sans'] text-sm font-semibold text-violet-50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Review the Research View
                </a>

                <a
                  href="/product/evidence"
                  className="font-['IBM_Plex_Sans'] text-sm font-semibold text-indigo-500 transition-colors duration-300 hover:text-indigo-600"
                >
                  Open Evidence →
                </a>
              </div>
            </div>

            {/* Image */}
            <div
              data-reveal
              className="reveal-element reveal-delay-3 relative w-full overflow-hidden rounded-2xl bg-white aspect-[535/398]"
            >
              <Image
                src="/images/solutions/enterprise/image3.png"
                alt="Continuous monitoring research view"
                fill
                sizes="(max-width: 1023px) 100vw, 535px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Disclaimer */}
          <div
            data-reveal
            className="reveal-element reveal-delay-4 w-full max-w-[720px] pt-6"
          >
            <p className="m-0 font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-gray-600">
              Monitoring is a research-continuity workflow tied to evidence.
              It is never an operational incident, surveillance, compliance,
              or trade signal — evidence-change alerts and market-price alerts
              remain separate concepts.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .reveal-element {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.75s ease,
            transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal-element.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-delay-1 {
          transition-delay: 80ms;
        }

        .reveal-delay-2 {
          transition-delay: 160ms;
        }

        .reveal-delay-3 {
          transition-delay: 240ms;
        }

        .reveal-delay-4 {
          transition-delay: 320ms;
        }

        @media (max-width: 767px) {
          .reveal-element {
            transform: translateY(20px);
          }
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