"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const rightsCards = [
  {
    title: "Access",
    description:
      "Entitlement controls determine what may be viewed.",
  },
  {
    title: "Redistribution",
    description:
      "Separate from access; internal/external use depends on rights policy.",
  },
  {
    title: "AI processing",
    description:
      "Requires approved source, data, and AI policy.",
  },
  {
    title: "Public exposure",
    description:
      "Restricted content never leaks into public HTML, demos, or analytics.",
  },
  {
    title: "Export",
    description:
      "Requires both capability and source rights.",
  },
  {
    title: "Regional handling",
    description:
      "Requires explicit policy and architecture authority.",
  },
];

export default function Rights() {
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
        className="w-full overflow-hidden bg-white"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 md:px-10 lg:px-[82px] lg:py-[96px]">
          {/* Eyebrow */}
          <p
            data-reveal
            className="reveal m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600"
          >
            RIGHTS &amp; DATA USE
          </p>

          {/* Heading */}
          <div
            data-reveal
            className="reveal reveal-1 w-full max-w-[1000px] pt-3"
          >
            <h2 className="m-0 font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[1.1] tracking-[-1px] text-slate-900 sm:text-[42px] lg:text-5xl lg:leading-[48.72px]">
              Access is not redistribution, export, or
              <br className="hidden lg:block" />
              AI use.
            </h2>
          </div>

          {/* Content */}
          <div className="mt-10 grid w-full grid-cols-1 gap-4 lg:grid-cols-[240px_240px_240px_minmax(0,499px)] lg:gap-x-[19.6px] lg:gap-y-4">
            {/* Access */}
            <RightsCard card={rightsCards[0]} index={0} />

            {/* Redistribution */}
            <RightsCard card={rightsCards[1]} index={1} />

            {/* AI processing */}
            <RightsCard card={rightsCards[2]} index={2} />

            {/* Image */}
            <div
              data-reveal
              className="reveal reveal-image relative order-first h-[320px] w-full overflow-hidden rounded-2xl bg-violet-50 outline outline-1 outline-offset-[-1px] outline-slate-900/10 lg:order-none lg:col-start-4 lg:row-start-1 lg:row-span-2"
            >
              <Image
                src="/images/solutions/enterprise/image5.png"
                alt="Rights and data use"
                fill
                sizes="(max-width: 1023px) 100vw, 499px"
                className="object-cover"
              />
            </div>

            {/* Public exposure */}
            <RightsCard card={rightsCards[3]} index={3} />

            {/* Export */}
            <RightsCard card={rightsCards[4]} index={4} />

            {/* Regional handling */}
            <RightsCard card={rightsCards[5]} index={5} />
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
          transition-delay: 180ms;
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

type RightsCardProps = {
  card: {
    title: string;
    description: string;
  };
  index: number;
};

function RightsCard({ card, index }: RightsCardProps) {
  return (
    <div
      data-reveal
      className="reveal flex min-h-[140px] w-full flex-col items-start gap-2 rounded-2xl bg-violet-50 p-6 outline outline-1 outline-offset-[-1px] outline-slate-900/10"
      style={{
        transitionDelay: `${120 + index * 60}ms`,
      }}
    >
      <h3 className="m-0 w-full font-['IBM_Plex_Sans'] text-base font-bold text-slate-900">
        {card.title}
      </h3>

      <p className="m-0 w-full font-['IBM_Plex_Sans'] text-sm font-normal leading-5 text-gray-600">
        {card.description}
      </p>
    </div>
  );
}