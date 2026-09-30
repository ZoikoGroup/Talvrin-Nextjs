"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const cards = [
  {
    title: "Global by architecture",
    description:
      "Talvrin may describe itself as engineered for global, multi-market, multi-jurisdiction research.",
  },
  {
    title: "Coverage before claims",
    description:
      "Actual released markets, datasets, and capabilities come from governed coverage state.",
  },
  {
    title: "Coverage dimensions",
    description:
      "Geography, asset class, issuer type, source class, language, jurisdiction, timeliness, rights level, research capability.",
  },
  {
    title: "Deployment geography",
    description:
      "Hosting or residency is never inferred from research coverage.",
  },
  {
    title: "Jurisdiction context",
    description:
      "Kept visible where source meaning or rights materially differ.",
  },
  {
    title: (
      <>
        Architecture-ready ≠
        <br />
        released
      </>
    ),
    description:
      "Theoretical support is never marketed as live enterprise availability.",
  },
];

export default function Coverage() {
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
        className="w-full overflow-hidden bg-violet-50"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 md:px-10 lg:px-20 lg:py-[96px]">
          {/* Heading */}
          <div className="w-full">
            <p
              data-reveal
              className="reveal m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500"
            >
              COVERAGE &amp; JURISDICTION
            </p>

            <h2
              data-reveal
              className="reveal reveal-1 m-0 w-full max-w-[760px] pt-3 font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[1.1] tracking-[-1px] text-slate-900 sm:text-[42px] lg:text-5xl lg:leading-[48.72px]"
            >
              Global by architecture. Released
              <br className="hidden lg:block" />
              with discipline.
            </h2>
          </div>

          {/* Main content */}
          <div className="mt-10 grid w-full grid-cols-1 gap-5 lg:grid-cols-[240px_240px_240px_minmax(0,500px)] lg:gap-x-20 lg:gap-y-4">
            {/* Card 1 */}
            <CoverageCard card={cards[0]} index={0} />

            {/* Card 2 */}
            <CoverageCard card={cards[1]} index={1} />

            {/* Card 3 */}
            <CoverageCard card={cards[2]} index={2} />

            {/* Image */}
            <div
              data-reveal
              className="reveal reveal-3 relative order-first h-[320px] w-full overflow-hidden rounded-2xl bg-white outline outline-1 outline-offset-[-1px] outline-slate-900/10 lg:order-none lg:col-start-4 lg:row-start-1 lg:row-span-2"
            >
              <Image
                src="/images/solutions/enterprise/image4.png"
                alt="Coverage and jurisdiction"
                fill
                sizes="(max-width: 1023px) 100vw, 500px"
                className="object-cover"
              />
            </div>

            {/* Card 4 */}
            <CoverageCard card={cards[3]} index={3} />

            {/* Card 5 */}
            <CoverageCard card={cards[4]} index={4} />

            {/* Card 6 */}
            <CoverageCard card={cards[5]} index={5} />
          </div>

          {/* Coverage Doctrine */}
          <div
            data-reveal
            className="reveal reveal-4 mt-5 w-full rounded-2xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-slate-900/10"
          >
            <p className="m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-slate-900">
              COVERAGE DOCTRINE
            </p>

            <p className="m-0 pt-2 font-['IBM_Plex_Sans'] text-base font-normal leading-6 text-gray-600">
              Architecture-ready is not the same as released. Enterprise
              deployment geography is never inferred from research coverage,
              and theoretical support is never marketed as live availability.
            </p>
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

        .reveal-3 {
          transition-delay: 180ms;
        }

        .reveal-4 {
          transition-delay: 260ms;
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

type CoverageCardProps = {
  card: {
    title: React.ReactNode;
    description: string;
  };
  index: number;
};

function CoverageCard({ card, index }: CoverageCardProps) {
  return (
    <div
      data-reveal
      className="reveal flex min-h-[176px] w-full flex-col items-start gap-2.5 rounded-2xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-slate-900/10"
      style={{
        transitionDelay: `${120 + index * 70}ms`,
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