"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const workflowSteps = [
  {
    name: "ASK",
  },
  {
    name: "DISCOVER",
  },
  {
    name: "INSPECT",
  },
  {
    name: "UNDERSTAND",
  },
  {
    name: "BUILD",
  },
  {
    name: "MONITOR",
  },
  {
    name: "REASSESS",
  },
];

const workflowContent = [
  {
    name: "ASK",
    description:
      "Start with a market, issuer, security, event, policy issue, filing, or research question.",
  },
  {
    name: "DISCOVER",
    description:
      "Find governed evidence and context, using source, coverage, and rights controls.",
  },
  {
    name: "INSPECT",
    description:
      "Review underlying source — timing, period, jurisdiction, version, and rights exposed.",
  },
  {
    name: "MONITOR",
    description:
      "Watch relevant evidence and assumptions, surfacing meaningful changes, not generic noise.",
  },
  {
    name: "REASSESS",
    description:
      "Return when evidence changes, with the prior basis of the view still inspectable.",
  },
  {
    name: "UNDERSTAND",
    description:
      "Connect evidence to the question, kept separate from analysis, AI, and user content.",
  },
];

export default function Workflow() {
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
        id="how-it-works"
        ref={sectionRef}
        className="w-full scroll-mt-20 overflow-hidden bg-slate-900 text-violet-50"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 md:px-8 lg:px-8 xl:px-20 lg:py-16 xl:py-[96px]">
          {/* =========================================
              HEADER
          ========================================= */}
          <div className="flex w-full flex-col items-start">
            <p
              data-reveal
              className="reveal-element m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500"
            >
              ORGANIZATION-SCALE RESEARCH WORKFLOW
            </p>

            <h2
              data-reveal
              className="reveal-element reveal-delay-1 m-0 max-w-[800px] pt-3 font-['IBM_Plex_Sans'] text-[30px] font-bold leading-[1.12] tracking-[-1px] text-violet-50 sm:text-[38px] md:text-[42px] lg:text-5xl lg:leading-[48.72px]"
            >
              A durable research object, repeatable across teams and markets.
            </h2>
          </div>

          {/* =========================================
              WORKFLOW PILLS
              
              BUILD is included HERE only.
          ========================================= */}
          <div
            data-reveal
            className="reveal-element reveal-delay-2 mt-8 sm:mt-9 flex w-full flex-wrap items-center gap-x-2.5 gap-y-3"
          >
            {workflowSteps.map((step, index) => (
              <div
                key={step.name}
                className="flex items-center gap-2.5"
              >
                <div className="inline-flex items-center rounded-full border border-violet-50/20 bg-violet-50/5 px-3.5 py-2 sm:px-4 sm:py-2.5">
                  <span className="font-['IBM_Plex_Sans'] text-xs font-semibold text-violet-50">
                    {step.name}
                  </span>
                </div>

                {index < workflowSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-[6px] w-[14px] bg-violet-50/30 sm:block"
                  />
                )}
              </div>
            ))}
          </div>

          {/* =========================================
              WORKFLOW CONTENT

              NOTE:
              BUILD does NOT appear here because
              Figma has no BUILD description box.
          ========================================= */}
          <div className="mt-8 sm:mt-10 grid w-full grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[240px_240px_240px_minmax(0,495px)] lg:gap-y-7">
            {/* ASK */}
            <WorkflowItem
              step={workflowContent[0]}
              index={0}
            />

            {/* DISCOVER */}
            <WorkflowItem
              step={workflowContent[1]}
              index={1}
            />

            {/* INSPECT */}
            <WorkflowItem
              step={workflowContent[2]}
              index={2}
            />

            {/* IMAGE */}
            <div
              data-reveal
              className="reveal-element reveal-delay-3 relative min-h-[192px] w-full overflow-hidden rounded-2xl bg-white sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-[192px]"
            >
              <Image
                src="/images/solutions/enterprise/image2.png"
                alt="Talvrin research workflow"
                fill
                sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 25vw, 495px"
                className="object-cover"
              />
            </div>

            {/* MONITOR */}
            <WorkflowItem
              step={workflowContent[3]}
              index={5}
            />

            {/* REASSESS */}
            <WorkflowItem
              step={workflowContent[4]}
              index={6}
            />

            {/* UNDERSTAND */}
            <WorkflowItem
              step={workflowContent[5]}
              index={3}
            />
          </div>
        </div>
      </section>

      {/* =========================================
          SCROLL REVEAL ANIMATION
      ========================================= */}
      <style jsx>{`
        .reveal-element {
          opacity: 0;
          transform: translateY(32px);
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

type WorkflowItemProps = {
  step: {
    name: string;
    description: string;
  };
  index: number;
};

function WorkflowItem({ step, index }: WorkflowItemProps) {
  return (
    <div
      data-reveal
      className={`reveal-element ${
        index % 3 === 1
          ? "reveal-delay-1"
          : index % 3 === 2
            ? "reveal-delay-2"
            : ""
      } flex w-full flex-col items-start gap-1.5`}
    >
      <p className="m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
        {step.name}
      </p>

      <p className="m-0 w-full max-w-[240px] lg:max-w-none xl:max-w-[240px] font-['IBM_Plex_Sans'] text-sm font-normal leading-5 text-violet-50/75">
        {step.description}
      </p>
    </div>
  );
}