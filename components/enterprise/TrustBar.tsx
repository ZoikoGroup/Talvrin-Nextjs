"use client";

import { useEffect, useRef } from "react";

const statements = [
  "ORGANIZATION SCALE, NOT SOFTWARE THEATER",
  "GOVERNED EVIDENCE, NOT ADMIN CONTROLS",
  "REVIEWABLE, NOT AUDITED",
  "MEMORY, NOT RECORDKEEPING",
  "MONITORED, NOT AUTOMATED",
  "CAPABILITY TRUTH, NOT FEATURE THEATER",
];

export default function TrustBar() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden border-t-[0.8px] border-b-[0.8px] border-slate-900/10 bg-white"
      >
        <div className="mx-auto flex min-h-[112px] w-full max-w-[1320px] items-center justify-center px-6 py-7 lg:px-8">
          <div className="flex w-full flex-wrap items-center justify-center gap-x-7 gap-y-4">
            {statements.map((statement, index) => (
              <div
                key={statement}
                data-reveal
                className="trust-item flex items-center gap-7"
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <span className="whitespace-nowrap text-center font-['IBM_Plex_Sans'] text-[11px] font-semibold tracking-[0.04em] text-slate-900 sm:text-xs">
                  {statement}
                </span>

                {index < statements.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden font-['IBM_Plex_Sans'] text-base font-normal text-slate-900/25 lg:inline"
                  >
                    ·
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .trust-item {
          opacity: 0;
          transform: translateY(14px);
          transition:
            opacity 0.6s ease,
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .trust-item.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1023px) {
          .trust-item {
            gap: 0;
          }
        }

        @media (max-width: 767px) {
          .trust-item {
            width: 100%;
            justify-content: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trust-item {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
}