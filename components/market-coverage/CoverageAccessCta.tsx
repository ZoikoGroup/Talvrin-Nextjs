"use client";

import { useEffect, useRef } from "react";

export default function CoverageAccessCta() {
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
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        overflow-hidden
        border-t
        border-slate-900/10
        bg-white
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[490.8px]
          w-full
          max-w-[1440px]
          items-start
          justify-center
          px-6
          py-[88.8px]
          sm:px-8
          md:px-10
          lg:px-20
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[700px]
            translate-y-8
            flex-col
            items-center
            gap-4
            opacity-0
            text-center
            transition-all
            duration-800
            ease-out
          "
          data-reveal
        >
          {/* HEADING */}
          <div
            data-reveal
            className="
              flex
              w-full
              translate-y-8
              flex-col
              items-center
              opacity-0
              transition-all
              duration-700
              ease-out
            "
          >
            <h2
              className="
                m-0
                text-center
                font-['IBM_Plex_Sans']
                text-[36px]
                font-bold
                leading-[1.1]
                tracking-[-0.8px]
                text-slate-900
                sm:text-[42px]
                lg:text-5xl
                lg:leading-[48.3px]
              "
            >
              See the current state before you
              <br className="hidden sm:block" />
              commit to a workflow.
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div
            data-reveal
            className="
              flex
              w-full
              translate-y-8
              flex-col
              items-center
              opacity-0
              transition-all
              duration-700
              ease-out
            "
            style={{
              transitionDelay: "100ms",
            }}
          >
            <p
              className="
                m-0
                text-center
                font-['IBM_Plex_Sans']
                text-base
                font-normal
                leading-7
                text-gray-600
              "
            >
              Request access to Talvrin, backed by a coverage page that
              never overstates what is actually
              <br className="hidden sm:block" />
              released.
            </p>
          </div>

          {/* BUTTONS */}
          <div
            data-reveal
            className="
              flex
              w-full
              translate-y-8
              flex-col
              items-center
              justify-center
              gap-4
              pt-3.5
              opacity-0
              transition-all
              duration-700
              ease-out
              sm:flex-row
            "
            style={{
              transitionDelay: "180ms",
            }}
          >
            {/* REQUEST ACCESS */}
            <a
              href="/request-access"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                bg-slate-900
                px-7
                py-4
                font-['IBM_Plex_Sans']
                text-base
                font-semibold
                text-violet-50
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-slate-800
                focus:outline-none
                focus:ring-2
                focus:ring-slate-900/30
                focus:ring-offset-2
              "
            >
              Request Access
            </a>

            {/* BACK TO EXPLORER */}
            <a
              href="#coverage-explorer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                border
                border-slate-900/25
                px-7
                py-4
                font-['IBM_Plex_Sans']
                text-base
                font-semibold
                text-slate-900
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-slate-900/5
                focus:outline-none
                focus:ring-2
                focus:ring-slate-900/20
                focus:ring-offset-2
              "
            >
              Back to Coverage Explorer
            </a>
          </div>

          {/* DISCLAIMER */}
          <div
            data-reveal
            className="
              flex
              w-full
              translate-y-8
              flex-col
              items-center
              pt-0.5
              opacity-0
              transition-all
              duration-700
              ease-out
            "
            style={{
              transitionDelay: "260ms",
            }}
          >
            <p
              className="
                m-0
                text-center
                font-['IBM_Plex_Sans']
                text-sm
                font-normal
                leading-5
                text-gray-600
              "
            >
              Research and intelligence platform. No trade execution,
              suitability ranking, asset allocation, or manufactured
              <br className="hidden sm:block" />
              investment recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}