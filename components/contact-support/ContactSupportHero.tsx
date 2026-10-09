"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ContactSupportHero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hero.classList.add("is-visible");
        } else {
          hero.classList.remove("is-visible");
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="
        contact-support-hero
        relative
        w-full
        overflow-hidden
        bg-[#17133D]
        text-violet-50
      "
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_72%_48%,rgba(105,82,190,0.20),transparent_32%),radial-gradient(circle_at_20%_35%,rgba(77,61,157,0.14),transparent_30%)]
        "
      />

      {/* Main container */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          py-14
          sm:px-8
          sm:py-16
          lg:px-8
          lg:py-20
          xl:px-0
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-8
            xl:grid-cols-[minmax(0,1fr)_462px]
            xl:gap-12
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div
            className="
              scroll-reveal
              scroll-reveal-left
              flex
              w-full
              max-w-[751px]
              flex-col
              items-start
              gap-6
            "
          >
            {/* Eyebrow */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                pt-[0.6px]
              "
            >
              <span
                className="
                  font-['IBM_Plex_Sans']
                  text-xs
                  font-bold
                  uppercase
                  tracking-wide
                  text-yellow-600
                "
              >
                CONTACT SUPPORT
              </span>
            </div>

            {/* Heading */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                pt-[0.6px]
              "
            >
              <h1
                className="
                  w-full
                  max-w-[751px]
                  font-['IBM_Plex_Sans']
                  text-[36px]
                  font-bold
                  leading-[42px]
                  tracking-[-0.02em]
                  text-violet-50

                  sm:text-[44px]
                  sm:leading-[50px]

                  lg:text-[46px]
                  lg:leading-[52px]

                  xl:text-[56px]
                  xl:leading-[61.6px]
                "
              >
                Get the right help for your
                <br className="hidden sm:block" />
                Talvrin question.
              </h1>
            </div>

            {/* Description */}
            <div
              className="
                flex
                w-full
                max-w-[720px]
                flex-col
                items-start
              "
            >
              <p
                className="
                  font-['IBM_Plex_Sans']
                  text-[16px]
                  font-normal
                  leading-7
                  text-violet-50/90

                  sm:text-[17px]
                  sm:leading-[30px]

                  lg:text-lg
                  lg:leading-8
                "
              >
                Use Talvrin self-service resources first, check current
                service information when relevant, or contact the approved
                support path for unresolved product, access, evidence,
                coverage or trust-related issues.
              </p>
            </div>

            {/* Buttons */}
            <div
              className="
                flex
                w-full
                flex-col
                items-stretch
                gap-3
                pt-2

                sm:flex-row
                sm:items-center
                sm:gap-4
              "
            >
              {/* Primary button */}
              <Link
                href="/help-center"
                className="
                  inline-flex
                  min-h-[52px]
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  bg-violet-50
                  px-7
                  py-4
                  font-['IBM_Plex_Sans']
                  text-base
                  font-semibold
                  text-slate-900
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-0.5
                  hover:bg-white
                  hover:shadow-lg
                  focus:outline-none
                  focus:ring-2
                  focus:ring-violet-50/60
                  focus:ring-offset-2
                  focus:ring-offset-[#17133D]

                  sm:w-auto
                "
              >
                Find Help in the Help Center
              </Link>

              {/* Secondary button */}
              <Link
                href="#support-request"
                className="
                  inline-flex
                  min-h-[52px]
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-violet-50/30
                  px-6
                  py-3.5
                  font-['IBM_Plex_Sans']
                  text-base
                  font-semibold
                  text-violet-50
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-0.5
                  hover:border-violet-50/60
                  hover:bg-violet-50/10
                  focus:outline-none
                  focus:ring-2
                  focus:ring-violet-50/40
                  focus:ring-offset-2
                  focus:ring-offset-[#17133D]

                  sm:w-auto
                "
              >
                Contact Support
              </Link>
            </div>

            {/* Disclaimer */}
            <div
              className="
                flex
                w-full
                max-w-[640px]
                flex-col
                items-start
                pt-1
              "
            >
              <p
                className="
                  font-['IBM_Plex_Sans']
                  text-sm
                  font-normal
                  leading-6
                  text-violet-50/60
                "
              >
                Talvrin Support helps with the platform and related services.
                It does not provide investment recommendations, trade
                execution, or guaranteed market outcomes.
              </p>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ====================================================== */}
          <div
            className="
              scroll-reveal
              scroll-reveal-right
              flex
              w-full
              justify-center
              lg:justify-end
            "
          >
            <div
              className="
                relative
                aspect-square
                w-full
                max-w-[340px]
                overflow-hidden
                sm:max-w-[420px]
                lg:max-w-[380px]
                xl:max-w-[462px]
              "
            >
              <Image
                src="/images/resources/contact-support/hero.png"
                alt="Talvrin contact support"
                width={462}
                height={462}
                priority
                className="
                  h-auto
                  w-full
                  max-w-[462px]
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  hover:scale-[1.025]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}