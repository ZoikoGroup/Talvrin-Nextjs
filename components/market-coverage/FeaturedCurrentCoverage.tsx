"use client";

import { useEffect, useRef } from "react";

type CoverageItem = {
  title: string;
  source: string;
  verified: string;
};

const coverageItems: CoverageItem[] = [
  {
    title: "U.S. Treasuries",
    source: "Official / Primary - U.S. Treasury, Federal Reserve",
    verified: "28 Aug 2026",
  },
  {
    title: "U.K. Gilts",
    source: "Official / Primary - HM Treasury, Bank of England, UK DMO",
    verified: "28 Aug 2026",
  },
];

export default function FeaturedCurrentCoverage() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const revealElements =
      section.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;

          element.classList.remove("opacity-0");
          element.classList.remove("translate-y-8");
          element.classList.add("opacity-100");
          element.classList.add("translate-y-0");

          observer.unobserve(element);
        });
      },
      {
        threshold: 0.1,
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
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-slate-900"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 md:px-10 lg:px-20 lg:py-[96px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_461px] lg:gap-[45px]">
          {/* LEFT CONTENT */}
          <div className="min-w-0">
            {/* LABEL */}
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
              <p
                className="
                  m-0
                  font-['IBM_Plex_Sans']
                  text-xs
                  font-bold
                  tracking-wide
                  text-indigo-500
                "
              >
                FEATURED CURRENT COVERAGE
              </p>
            </div>

            {/* HEADING */}
            <div
              data-reveal
              className="
                mt-6
                translate-y-8
                opacity-0
                transition-all
                duration-700
                ease-out
              "
            >
              <h2
                className="
                  m-0
                  max-w-[780px]
                  font-['IBM_Plex_Sans']
                  text-[36px]
                  font-bold
                  leading-[1.1]
                  tracking-[-1px]
                  text-violet-50
                  sm:text-[42px]
                  lg:text-5xl
                  lg:leading-[48.72px]
                "
              >
                Talvrin&apos;s initial Deep Coverage wedge.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div
              data-reveal
              className="
                mt-4
                translate-y-8
                opacity-0
                transition-all
                duration-700
                ease-out
              "
            >
              <p
                className="
                  m-0
                  max-w-[780px]
                  font-['IBM_Plex_Sans']
                  text-base
                  font-normal
                  leading-7
                  text-violet-50/70
                "
              >
                U.S. Treasuries and U.K. Gilts are featured here only because
                the current registry confirms Deep Coverage - not because they
                look globally representative.
              </p>
            </div>

            {/* COVERAGE CARDS */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {coverageItems.map((item, index) => (
                <article
                  key={item.title}
                  data-reveal
                  className="
                    translate-y-8
                    rounded-2xl
                    border
                    border-violet-50/10
                    bg-violet-50/5
                    p-7
                    opacity-0
                    transition-all
                    duration-700
                    ease-out
                  "
                  style={{
                    transitionDelay: `${200 + index * 100}ms`,
                  }}
                >
                  {/* CARD HEADER */}
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className="
                        m-0
                        font-['IBM_Plex_Sans']
                        text-xl
                        font-bold
                        leading-6
                        text-violet-50
                      "
                    >
                      {item.title}
                    </h3>

                    <span
                      className="
                        shrink-0
                        rounded-full
                        bg-indigo-500/20
                        px-3
                        py-1.5
                        font-['IBM_Plex_Sans']
                        text-xs
                        font-bold
                        text-indigo-300
                      "
                    >
                      Deep Coverage
                    </span>
                  </div>

                  {/* SOURCE */}
                  <p
                    className="
                      m-0
                      mt-3.5
                      font-['IBM_Plex_Sans']
                      text-sm
                      font-normal
                      leading-5
                      text-violet-50/70
                    "
                  >
                    {item.source}
                  </p>

                  {/* DIVIDER */}
                  <div className="mt-5 border-t border-violet-50/10 pt-3">
                    <p
                      className="
                        m-0
                        font-['IBM_Plex_Sans']
                        text-xs
                        font-normal
                        text-violet-50/60
                      "
                    >
                      Last verified: {item.verified}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-reveal
            className="
              h-[360px]
              translate-y-8
              overflow-hidden
              rounded-2xl
              bg-white
              opacity-0
              transition-all
              duration-1000
              ease-out
              sm:h-[400px]
              lg:h-[461px]
              lg:w-[461px]
            "
            style={{
              transitionDelay: "300ms",
            }}
          >
            <img
              src="/images/markets/market-coverage/image2.png"
              alt="Talvrin research team"
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}