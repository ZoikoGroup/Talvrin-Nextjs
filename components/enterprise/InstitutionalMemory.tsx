"use client";

import { useEffect, useRef } from "react";

const memoryRows = [
  {
    title: "Research continuity",
    description: "Return to prior research view and evidence relationships.",
    limitation: "Indefinite retention.",
  },
  {
    title: "Reasoning durability",
    description: "Preserve the basis of a view beyond one analyst or file.",
    limitation: "Regulated records management.",
  },
  {
    title: "Version history",
    description: "Keep revised and superseded source relationships visible.",
    limitation: "Immutable audit log.",
  },
  {
    title: "Reusability",
    description:
      "Research may be revisited and reused according to released capabilities.",
    limitation: "Enterprise library, search, or sharing mechanics.",
  },
  {
    title: "Change continuity",
    description: "See how later evidence relates to earlier research state.",
    limitation: "Automated policy or compliance decisions.",
  },
];

export default function InstitutionalMemory() {
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
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start px-4 py-12 sm:px-6 md:px-8 lg:px-8 xl:px-20 lg:py-16 xl:py-[96px]">
          {/* Header */}
          <div className="flex w-full flex-col items-start">
            <p
              data-reveal
              className="reveal-element m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500"
            >
              INSTITUTIONAL MEMORY
            </p>

            <div
              data-reveal
              className="reveal-element reveal-delay-1 w-full max-w-[760px] pt-3"
            >
              <h2 className="m-0 font-['IBM_Plex_Sans'] text-[30px] font-bold leading-[1.12] tracking-[-1px] text-slate-900 sm:text-[38px] md:text-[42px] lg:text-5xl lg:leading-[48.72px]">
                Preserve reasoning beyond{" "}
                <br className="hidden xl:block" />
                individuals, files, and personnel{" "}
                <br className="hidden xl:block" />
                changes.
              </h2>
            </div>

            <div
              data-reveal
              className="reveal-element reveal-delay-2 w-full max-w-[780px] pt-4 pb-8 sm:pb-10"
            >
              <p className="m-0 font-['IBM_Plex_Sans'] text-sm sm:text-base font-normal leading-6 sm:leading-7 text-gray-600">
                Research continuity across an organization — never a
                regulated-recordkeeping or indefinite-retention claim.
              </p>
            </div>
          </div>

          {/* Memory rows */}
          <div className="w-full">
            {memoryRows.map((row, index) => (
              <div
                key={row.title}
                data-reveal
                className="reveal-element flex w-full flex-col gap-3 sm:gap-4 border-b-[0.8px] border-slate-900/10 py-4 sm:py-5 md:grid md:grid-cols-[180px_minmax(0,1fr)_minmax(0,1fr)] xl:grid-cols-[224px_minmax(0,1fr)_minmax(0,1fr)] md:items-start"
                style={{
                  transitionDelay: `${index * 80 + 150}ms`,
                }}
              >
                {/* Label */}
                <div className="flex min-w-0 md:pr-0">
                  <div className="inline-flex min-h-[32px] w-fit max-w-full items-center justify-center rounded-md bg-white px-5 sm:px-8 py-1.5 outline outline-1 outline-offset-[-1px] outline-slate-900/20 md:min-w-44 xl:min-w-56">
                    <span className="text-center font-['IBM_Plex_Sans'] text-xs font-bold text-slate-900">
                      {row.title}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="flex min-w-0 md:px-0">
                  <p className="m-0 font-['IBM_Plex_Sans'] text-base font-normal leading-6 text-slate-700">
                    {row.description}
                  </p>
                </div>

                {/* Limitation */}
                <div className="flex min-w-0">
                  <p className="m-0 font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-gray-600">
                    {row.limitation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .reveal-element {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.7s ease,
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
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