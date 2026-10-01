"use client";

import { useEffect, useRef } from "react";

const governanceItems = [
  {
    title: "Last verified",
    description:
      "A timestamp tied to an actual coverage-registry verification event — never a cosmetic page-updated date.",
  },
  {
    title: "Effective from",
    description:
      "When a status or scope change actually applies, if distinct from when it was published.",
  },
  {
    title: "Status changed",
    description:
      "Previous and current states are recorded; public history is shown only where release-note policy approves.",
  },
  {
    title: "Scope expanded / reduced",
    description:
      "A material change to dimensions triggers a page and cache update, plus a release note where approved.",
  },
  {
    title: "Rights changed",
    description:
      "Access can change without changing the market label, and is propagated without delay.",
  },
  {
    title: "Source outage / degradation",
    description:
      "A temporary service notice is used rather than silently changing long-term coverage state.",
  },
];

export default function CurrentnessChangeGovernance() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements =
      section.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

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
        rootMargin: "0px 0px -60px 0px",
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
      className="w-full bg-white overflow-hidden"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          sm:px-8
          md:px-10
          lg:px-20
          py-[80px]
          lg:py-[95.63px]
        "
      >
        {/* CONTENT WRAPPER */}
        <div className="w-full max-w-[1280px]">
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
                text-yellow-600
              "
            >
              CURRENTNESS &amp; CHANGE GOVERNANCE
            </div>
          </div>

          {/* HEADING */}
          <div
            data-reveal
            className="
              mt-3
              max-w-[760px]
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
                text-[36px]
                font-bold
                leading-[1.1]
                tracking-[-0.8px]
                text-slate-900
                sm:text-[42px]
                lg:text-5xl
                lg:leading-[48.72px]
              "
            >
              Coverage changes propagate — it is
              <br className="hidden lg:block" />
              never left stale on one page.
            </h2>
          </div>

          {/* GOVERNANCE GRID */}
          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-x-8
              gap-y-0
              sm:grid-cols-2
              lg:grid-cols-5
              lg:gap-x-[32px]
            "
          >
            {governanceItems.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                className="
                  min-w-0
                  translate-y-8
                  opacity-0
                  transition-all
                  duration-700
                  ease-out
                  py-0
                "
                style={{
                  transitionDelay: `${160 + index * 90}ms`,
                }}
              >
                {/* TITLE */}
                <div
                  className="
                    font-['IBM_Plex_Sans']
                    text-[13px]
                    font-bold
                    leading-[17px]
                    text-slate-900
                  "
                >
                  {item.title}
                </div>

                {/* DESCRIPTION */}
                <div
                  className="
                    mt-1.5
                    font-['IBM_Plex_Sans']
                    text-[13px]
                    font-normal
                    leading-[17px]
                    text-gray-600
                  "
                >
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}