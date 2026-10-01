"use client";

import { useEffect, useRef } from "react";

const capabilities = [
  {
    title: "Research Workspace",
    description:
      "Available for Deep Coverage and Supported records; limited for Limited/Beta; not applicable to Planned.",
  },
  {
    title: "Evidence",
    description:
      "Available wherever a record lists Evidence as a released capability in the explorer above.",
  },
  {
    title: "Monitoring",
    description:
      "Available only for Deep Coverage and Supported records today; not yet enabled for Limited/Beta or Planned.",
  },
  {
    title: "Watchlists",
    description:
      "Not inferred from market coverage alone — availability depends on the separate product capability registry.",
  },
  {
    title: "Alerts",
    description:
      "Not inferred from market coverage alone — trigger and channel capability is governed separately.",
  },
  {
    title: "AI Assistance",
    description:
      "Available only where a record explicitly lists it above; never implied by coverage status alone.",
  },
];

export default function ResearchCapabilityCoverage() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const elements =
      section.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;

          element.classList.remove(
            "opacity-0",
            "translate-y-8"
          );

          element.classList.add(
            "opacity-100",
            "translate-y-0"
          );

          observer.unobserve(element);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-violet-50"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          py-20
          sm:px-8
          md:px-10
          lg:px-20
          lg:py-[95.83px]
        "
      >
        {/* CONTENT */}
        <div className="w-full">
          {/* EYEBROW */}
          <div
            data-reveal
            className="
              translate-y-8
              opacity-0
              transition-all
              duration-700
              ease-out
            "
          >
            <div
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                tracking-wide
                text-indigo-500
              "
            >
              RESEARCH CAPABILITY COVERAGE
            </div>
          </div>

          {/* HEADING */}
          <div
            data-reveal
            className="
              mt-3
              max-w-[780px]
              translate-y-8
              opacity-0
              transition-all
              duration-700
              ease-out
            "
            style={{
              transitionDelay: "80ms",
            }}
          >
            <h2
              className="
                m-0
                font-['IBM_Plex_Sans']
                text-4xl
                font-bold
                leading-[1.08]
                tracking-[-1px]
                text-slate-900
                sm:text-[42px]
                lg:text-5xl
                lg:leading-[48.72px]
              "
            >
              A released market does not
              <br className="hidden lg:block" />
              automatically mean every workflow
              <br className="hidden lg:block" />
              works there.
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div
            data-reveal
            className="
              mt-5
              max-w-[780px]
              translate-y-8
              opacity-0
              transition-all
              duration-700
              ease-out
            "
            style={{
              transitionDelay: "160ms",
            }}
          >
            <p
              className="
                m-0
                font-['IBM_Plex_Sans']
                text-base
                font-normal
                leading-7
                text-gray-600
              "
            >
              Capability is modeled per coverage record, not implied by the
              page as a whole.
            </p>
          </div>

          {/* CAPABILITY ROWS */}
          <div className="mt-10 w-full">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                data-reveal
                className="
                  grid
                  translate-y-8
                  grid-cols-1
                  gap-3
                  border-b
                  border-slate-900/10
                  py-4
                  opacity-0
                  transition-all
                  duration-700
                  ease-out
                  md:grid-cols-[192px_minmax(0,1fr)]
                  md:gap-4
                "
                style={{
                  transitionDelay: `${240 + index * 80}ms`,
                }}
              >
                {/* TITLE */}
                <div
                  className="
                    min-w-0
                    font-['IBM_Plex_Sans']
                    text-base
                    font-semibold
                    text-slate-900
                    md:pr-8
                  "
                >
                  {capability.title}
                </div>

                {/* DESCRIPTION */}
                <div
                  className="
                    min-w-0
                    font-['IBM_Plex_Sans']
                    text-sm
                    font-normal
                    leading-5
                    text-gray-600
                  "
                >
                  {capability.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}