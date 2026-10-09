"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const solutions = [
  {
    title: "Individual Investors",
    description:
      "Personal evidence-led research for self-directed investors.",
  },
  {
    title: "Investment Professionals",
    description:
      "Individual professional research and monitoring workflows.",
  },
  {
    title: "Research Teams",
    description:
      "Team-level repeatable and shared research workflows.",
  },
  {
    title: "Wealth & Advisory Research",
    description:
      "Professional research supporting client research processes.",
  },
  {
    title: "Financial Institutions",
    description:
      "Institution-specific governed research across professional workflows.",
  },
  {
    title: "Asset Managers",
    description:
      "Asset-management research infrastructure across investment workflows.",
  },
];

export default function AdjacentSolutions() {
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
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-6"
            );

            entry.target.classList.add(
              "opacity-100",
              "translate-y-0"
            );
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#F7F6FE]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 md:px-8 lg:px-8 xl:px-20 lg:py-16 xl:py-[96px]">
        {/* Eyebrow */}
        <p
          data-reveal
          className="
            translate-y-6
            m-0
            opacity-0
            font-['IBM_Plex_Sans']
            text-[12px]
            font-bold
            leading-[16px]
            tracking-[0.04em]
            text-indigo-500
            transition-all
            duration-700
            ease-out
          "
        >
          ADJACENT SOLUTIONS
        </p>

        {/* Heading */}
        <h2
          data-reveal
          className="
            translate-y-6
            m-0
            w-full
            pt-3
            opacity-0
            font-['IBM_Plex_Sans']
            text-[30px]
            font-bold
            leading-[38px]
            tracking-[-1px]
            text-[#171735]
            transition-all
            duration-700
            ease-out
            sm:text-[38px]
            sm:leading-[44px]
            lg:text-[48px]
            lg:leading-[48px]
          "
          style={{
            transitionDelay: "80ms",
          }}
        >
          Not evaluating at organization scale? Find the right fit.
        </h2>

        {/* Layout */}
        <div
          className="
            mt-8
            sm:mt-10
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
            xl:grid-cols-[repeat(3,minmax(0,1fr))_288px]
          "
        >
          {/* Cards 1–6 */}
          {solutions.map((solution, index) => (
            <article
              key={solution.title}
              data-reveal
              className="
                translate-y-6
                flex
                min-h-[130px]
                rounded-[10px]
                border
                border-[#171735]/10
                bg-white
                px-[18px]
                py-[17px]
                opacity-0
                transition-all
                duration-700
                ease-out
              "
              style={{
                transitionDelay: `${120 + index * 70}ms`,
              }}
            >
              <div className="flex h-full w-full flex-col items-start">
                <h3
                  className="
                    m-0
                    font-['IBM_Plex_Sans']
                    text-[16px]
                    font-bold
                    leading-[20px]
                    text-[#171735]
                  "
                >
                  {solution.title}
                </h3>

                <p
                  className="
                    m-0
                    mt-[8px]
                    w-full
                    font-['IBM_Plex_Sans']
                    text-[12px]
                    font-normal
                    leading-[17px]
                    text-[#65657A]
                  "
                >
                  {solution.description}
                </p>

                <span
                  className="
                    mt-auto
                    pt-3
                    font-['IBM_Plex_Sans']
                    text-[11px]
                    font-semibold
                    leading-[16px]
                    text-indigo-500
                  "
                >
                  Learn more →
                </span>
              </div>
            </article>
          ))}

          {/* Image - explicitly column 4 + both rows */}
          <div
            data-reveal
            className="
              relative
              min-h-[260px]
              sm:min-h-[300px]
              translate-y-6
              overflow-hidden
              rounded-[10px]
              bg-white
              opacity-0
              transition-all
              duration-700
              ease-out
              sm:col-span-2
              lg:col-span-1
              lg:col-start-4
              lg:row-start-1
              lg:row-end-3
              lg:min-h-0
            "
            style={{
              transitionDelay: "540ms",
            }}
          >
            <Image
              src="/images/solutions/enterprise/image7.png"
              alt="Enterprise research team"
              fill
              priority
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 288px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}