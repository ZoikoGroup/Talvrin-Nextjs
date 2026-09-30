"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const outcomes = [
  {
    title: "Scalable workflows",
    description:
      "Create repeatable research processes across teams, markets, and jurisdictions.",
    note: "No workflow automation mechanics by assumption.",
  },
  {
    title: "Governed evidence",
    description:
      "Keep conclusions tied to sources, rights, jurisdiction, and versions.",
    note: "No compliance certification implication.",
  },
  {
    title: "Reviewability",
    description: "Make it easier to inspect the basis of a view.",
    note: "No formal approval, audit, or attestation claim.",
  },
  {
    title: "Better collaboration",
    description: "Give teams a shared evidence base.",
    note: "No comments, co-editing, sharing, or permissions unless released.",
  },
  {
    title: "Durable research quality",
    description:
      "Improve quality, traceability, durability, and repeatability.",
    note: "No ROI or productivity percentage without evidence.",
  },
  {
    title: "Institutional memory",
    description:
      "Preserve evidence and reasoning beyond individual analysts or documents.",
    note: "No legal retention or archive promise.",
  },
];

export default function Outcomes() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll<HTMLElement>("[data-reveal]");

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
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 md:px-10 lg:px-20 lg:py-24">
          {/* Section heading */}
          <div className="mb-10 flex w-full flex-col items-start lg:mb-[66px]">
            <p
              data-reveal
              className="reveal-element m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600"
            >
              ENTERPRISE OUTCOMES
            </p>

            <h2
              data-reveal
              className="reveal-element reveal-delay-1 mt-5 max-w-[780px] font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[1.08] tracking-[-1px] text-slate-900 sm:text-[42px] sm:leading-[1.08] lg:text-5xl lg:leading-[48.72px]"
            >
              Seven source-backed outcomes for organization-scale research.
            </h2>
          </div>

          {/* Outcomes grid */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[240px_240px_240px_minmax(0,1fr)] lg:gap-5">
            {/* Card 1 */}
            <OutcomeCard
              {...outcomes[0]}
              index={0}
            />

            {/* Card 2 */}
            <OutcomeCard
              {...outcomes[1]}
              index={1}
            />

            {/* Card 3 */}
            <OutcomeCard
              {...outcomes[2]}
              index={2}
            />

            {/* Large image */}
            <div
              data-reveal
              className="reveal-element reveal-delay-3 relative min-h-[360px] overflow-hidden rounded-2xl border border-slate-900/10 bg-violet-50 sm:min-h-[400px] lg:row-span-2 lg:min-h-[452px]"
            >
              <Image
                src="/images/solutions/enterprise/image.png"
                alt="Enterprise research and evidence"
                fill
                sizes="(max-width: 1023px) 100vw, 498px"
                className="object-cover"
              />
            </div>

            {/* Card 4 */}
            <OutcomeCard
              {...outcomes[3]}
              index={4}
            />

            {/* Card 5 */}
            <OutcomeCard
              {...outcomes[4]}
              index={5}
            />

            {/* Card 6 */}
            <OutcomeCard
              {...outcomes[5]}
              index={6}
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        .reveal-element {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 0.75s ease,
            transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal-delay-1 {
          transition-delay: 0.08s;
        }

        .reveal-delay-2 {
          transition-delay: 0.16s;
        }

        .reveal-delay-3 {
          transition-delay: 0.24s;
        }

        .reveal-element.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal-element {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
}

type OutcomeCardProps = {
  title: string;
  description: string;
  note: string;
  index: number;
};

function OutcomeCard({
  title,
  description,
  note,
  index,
}: OutcomeCardProps) {
  return (
    <article
      data-reveal
      className={`reveal-element ${
        index % 3 === 1 ? "reveal-delay-1" : ""
      } ${
        index % 3 === 2 ? "reveal-delay-2" : ""
      } flex min-h-[216px] w-full flex-col rounded-2xl border border-slate-900/10 bg-violet-50 p-6`}
    >
      {/* Title */}
      <div className="pb-2.5">
        <h3 className="m-0 font-['IBM_Plex_Sans'] text-base font-bold leading-5 text-slate-900">
          {title}
        </h3>
      </div>

      {/* Description */}
      <div className="flex flex-1 pb-3.5">
        <p className="m-0 font-['IBM_Plex_Sans'] text-sm font-normal leading-5 text-gray-600">
          {description}
        </p>
      </div>

      {/* Note */}
      <div className="border-t-[0.8px] border-slate-900/10 pt-3">
        <p className="m-0 font-['IBM_Plex_Sans'] text-xs font-normal leading-4 text-yellow-600">
          {note}
        </p>
      </div>
    </article>
  );
}