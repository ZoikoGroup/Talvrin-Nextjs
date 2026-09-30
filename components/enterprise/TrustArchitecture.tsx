"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const trustItems = [
  {
    title: "Evidence provenance",
    description: "Trace important outputs back to supporting material.",
  },
  {
    title: "Data rights",
    description:
      "Respect licensing, redistribution, access, and permitted use.",
  },
  {
    title: "Regional governance",
    description:
      "Support jurisdiction-sensitive execution and data controls where verified.",
  },
  {
    title: "Privacy",
    description: "Minimize unnecessary collection and provide clear controls.",
  },
  {
    title: "AI governance",
    description:
      "Keep model output subordinate to evidence and policy controls.",
  },
  {
    title: "Security",
    description: "Protect identities, workspaces, services, and secrets.",
  },
];

export default function TrustArchitecture() {
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
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 md:px-10 lg:px-20 lg:py-[96px]">
          {/* Header */}
          <div className="w-full">
            <p
              data-reveal
              className="reveal m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600"
            >
              TRUST ARCHITECTURE
            </p>

            <h2
              data-reveal
              className="reveal reveal-1 m-0 w-full max-w-[1000px] pt-3 font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[1.1] tracking-[-1px] text-slate-900 sm:text-[42px] lg:text-5xl lg:leading-[48.72px]"
            >
              Organization-scale research requires
              <br className="hidden lg:block" />
              verified trust, not badges.
            </h2>
          </div>

          {/* Content */}
          <div className="mt-10 grid w-full grid-cols-1 gap-8 lg:grid-cols-[minmax(0,780px)_minmax(0,498px)] lg:items-center lg:gap-5">
            {/* Trust items */}
            <div className="grid w-full grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
              {trustItems.map((item, index) => (
                <div
                  key={item.title}
                  data-reveal
                  className="reveal flex w-full flex-col items-start gap-2"
                  style={{
                    transitionDelay: `${140 + index * 70}ms`,
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="h-0.5 w-7 bg-indigo-500"
                  />

                  <h3 className="m-0 pt-1.5 font-['IBM_Plex_Sans'] text-base font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="m-0 font-['IBM_Plex_Sans'] text-sm font-normal leading-5 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Image */}
            <div
              data-reveal
              className="reveal reveal-image relative h-[240px] w-full overflow-hidden rounded-2xl bg-white outline outline-1 outline-offset-[-1px] outline-slate-900/10"
            >
              <Image
                src="/images/solutions/enterprise/image6.png"
                alt="Talvrin trust architecture"
                fill
                sizes="(max-width: 1023px) 100vw, 498px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.75s ease,
            transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-1 {
          transition-delay: 80ms;
        }

        .reveal-image {
          transition-delay: 220ms;
        }

        @media (max-width: 1023px) {
          .reveal {
            transform: translateY(22px);
          }
        }

        @media (max-width: 639px) {
          .reveal {
            transform: translateY(18px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .reveal.is-visible {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
}