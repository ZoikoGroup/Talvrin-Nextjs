"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const dimensions = [
  {
    title: "Geography / Market",
    description:
      "Which market or domain the coverage record is about, using stable registry entity names.",
  },
  {
    title: "Asset Class",
    description:
      "Which asset class or market family is included, from an approved taxonomy.",
  },
  {
    title: "Issuer Type",
    description:
      "Which issuer or entity types are covered, shown only where the registry models it.",
  },
  {
    title: "Institution / Source Class",
    description:
      "Which primary, official, licensed, or institutional source types are available.",
  },
  {
    title: "Language",
    description:
      "Which source and content languages are supported, separate from interface localization.",
  },
  {
    title: "Jurisdiction",
    description:
      "Which legal or operational jurisdiction context applies, linked to Supported Jurisdictions.",
  },
  {
    title: "Data Timeliness",
    description:
      "Live, delayed, snapshot, or another approved state — never averaged across a whole market.",
  },
  {
    title: "Rights Level",
    description:
      "Open, entitlement-required, restricted, or another governed access state.",
  },
  {
    title: "Research Capability",
    description:
      "Which Talvrin research workflows are actually available for this record.",
  },
];

export default function CoverageDimensions() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements =
      section.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-8"
            );
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    const handleScroll = () => {
      const image = imageRef.current;

      if (!image) return;

      const rect = image.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const progress =
        (viewportHeight - rect.top) /
        (viewportHeight + rect.height);

      const clampedProgress = Math.max(
        0,
        Math.min(1, progress)
      );

      const translateY =
        (0.5 - clampedProgress) * 30;

      const scale =
        1.04 - clampedProgress * 0.04;

      image.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
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
          px-4
          py-12
          sm:px-6
          md:px-8
          lg:px-8
          xl:px-20
          lg:py-16
          xl:py-[95px]
        "
      >
        {/* EYEBROW */}
        <p
          data-reveal
          className="
            translate-y-8
            opacity-0
            transition-all
            duration-700
            ease-out
            m-0
            font-['IBM_Plex_Sans']
            text-xs
            font-bold
            leading-4
            tracking-wide
            text-indigo-500
          "
        >
          HOW COVERAGE IS MEASURED
        </p>

        {/* HEADING */}
        <h2
          data-reveal
          className="
            translate-y-8
            opacity-0
            transition-all
            duration-700
            ease-out
            m-0
            max-w-[780px]
            pt-3
            font-['IBM_Plex_Sans']
            text-[30px]
            font-bold
            leading-[38px]
            tracking-[-0.8px]
            text-slate-900
            sm:text-[38px]
            sm:leading-[44px]
            lg:text-5xl
            lg:leading-[48.72px]
          "
          style={{
            transitionDelay: "80ms",
          }}
        >
          Nine dimensions describe every
          <br className="hidden sm:block" />
          coverage record.
        </h2>

        {/* DESCRIPTION */}
        <p
          data-reveal
          className="
            translate-y-8
            opacity-0
            transition-all
            duration-700
            ease-out
            m-0
            max-w-[800px]
            pt-4
            font-['IBM_Plex_Sans']
            text-[14px]
            font-normal
            leading-6
            text-gray-600
            sm:text-base
            sm:leading-7
          "
          style={{
            transitionDelay: "160ms",
          }}
        >
          A market is never reduced to a single yes or no.
          These dimensions apply consistently across every
          record in the explorer below.
        </p>

        {/* CARDS */}
        <div
          className="
            mt-8
            sm:mt-9
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-3
            xl:grid-cols-5
          "
        >
          {dimensions.map((dimension, index) => (
            <article
              key={dimension.title}
              data-reveal
              className="
                group
                min-h-[176px]
                translate-y-8
                opacity-0
                rounded-2xl
                border
                border-slate-900/10
                bg-white
                px-5
                py-5
                transition-all
                duration-700
                ease-out
                hover:-translate-y-1
                hover:border-slate-900/20
              "
              style={{
                transitionDelay: `${220 + index * 70}ms`,
              }}
            >
              <h3
                className="
                  m-0
                  font-['IBM_Plex_Sans']
                  text-base
                  font-bold
                  leading-5
                  text-slate-900
                "
              >
                {dimension.title}
              </h3>

              <p
                className="
                  m-0
                  mt-2
                  font-['IBM_Plex_Sans']
                  text-sm
                  font-normal
                  leading-5
                  text-gray-600
                "
              >
                {dimension.description}
              </p>
            </article>
          ))}
        </div>

        {/* IMAGE */}
        <div
          className="
            relative
            mt-12
            h-[320px]
            w-full
            overflow-hidden
            rounded-2xl
            bg-slate-900
            sm:h-[400px]
            md:h-[480px]
            lg:h-[320px]
          "
        >
          <div
            ref={imageRef}
            data-reveal
            className="
              absolute
              inset-[-35px_0]
              translate-y-8
              opacity-0
              transition-opacity
              duration-1000
              ease-out
            "
            style={{
              willChange: "transform, opacity",
            }}
          >
            <Image
              src="/images/markets/market-coverage/image1.png"
              alt="Talvrin coverage research team"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}