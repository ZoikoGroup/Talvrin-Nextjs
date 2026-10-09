"use client";

import { useEffect, useRef, useState } from "react";

const faqItems = [
  {
    question: "What does Talvrin mean by Market Coverage?",
    answer:
      "Market Coverage is the public record of which markets or domains Talvrin currently supports, how deeply they are supported, and which capabilities, source classes, timeliness, rights, and limitations apply.",
  },
  {
    question: "What is Deep Coverage?",
    answer:
      "Deep Coverage indicates that the current coverage registry confirms a broader set of research capabilities, source availability, and operational support for the market.",
  },
  {
    question: "What is Supported coverage?",
    answer:
      "Supported coverage means the market is currently released and available, with the specific capabilities and limitations defined by its coverage record.",
  },
  {
    question: "What does Limited or Beta mean?",
    answer:
      "Limited or Beta means the market has some released support, but coverage, capabilities, sources, or operational readiness remain constrained.",
  },
  {
    question: "Does Planned mean I can use the market now?",
    answer:
      "No. Planned records describe intended future coverage and are excluded from current support until the registry marks them as released.",
  },
  {
    question: "What does Architecture-ready mean?",
    answer:
      "Architecture-ready indicates that the market has been considered in the product architecture, but it does not by itself mean that the market is currently released for use.",
  },
  {
    question: "Which markets does Talvrin cover?",
    answer:
      "Current market availability is determined by the governed coverage registry. The explorer above provides the current released records and their individual coverage states.",
  },
  {
    question: "How are jurisdictions handled?",
    answer:
      "Jurisdictional support is handled separately from market coverage and includes the relevant operational, legal, source, rights, and regional constraints.",
  },
];

export default function AnswerFirstFaq() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [openIndex, setOpenIndex] = useState(0);

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
        threshold: 0.08,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
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
          sm:px-6
          md:px-8
          lg:px-8
          xl:px-20
          py-12
          sm:py-16
          lg:py-20
          xl:py-[95.62px]
        "
      >
        {/* TOP CONTENT */}
        <div className="w-full max-w-[1280px]">
          {/* EYEBROW */}
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
            <div
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                tracking-wide
                text-indigo-500
              "
            >
              ANSWER-FIRST FAQ
            </div>
          </div>

          {/* HEADING */}
          <div
            data-reveal
            className="
              mt-3
              max-w-[760px]
              translate-y-8
              opacity-0
              transition-all
              duration-700
              ease-out
            "
            style={{
              transitionDelay: "80ms",
            }}
          >
            <h2
              className="
                m-0
                font-['IBM_Plex_Sans']
                text-[30px]
                font-bold
                leading-[38px]
                tracking-[-0.8px]
                text-slate-900
                sm:text-[38px]
                sm:leading-[44px]
                lg:text-5xl
                lg:leading-[48.3px]
              "
            >
              Frequently asked, answered first.
            </h2>
          </div>

          {/* FAQ + IMAGE */}
          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-[minmax(0,1fr)_340px]
              xl:grid-cols-[840px_389px]
              lg:gap-8
              xl:gap-[51px]
            "
          >
            {/* FAQ LIST */}
            <div
              data-reveal
              className="
                translate-y-8
                opacity-0
                transition-all
                duration-700
                ease-out
              "
              style={{
                transitionDelay: "160ms",
              }}
            >
              <div className="w-full max-w-[840px]">
                {faqItems.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={item.question}
                      className="
                        border-b
                        border-slate-900/10
                      "
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenIndex(
                            isOpen ? -1 : index
                          )
                        }
                        className="
                          flex
                          w-full
                          items-center
                          justify-between
                          gap-6
                          py-5
                          text-left
                          focus:outline-none
                        "
                        aria-expanded={isOpen}
                      >
                        <span
                          className="
                            font-['IBM_Plex_Sans']
                            text-base
                            font-semibold
                            leading-6
                            text-slate-900
                          "
                        >
                          {item.question}
                        </span>

                        <span
                          className="
                            shrink-0
                            font-['IBM_Plex_Sans']
                            text-xl
                            font-normal
                            leading-none
                            text-gray-600
                          "
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {/* ANSWER */}
                      <div
                        className={`
                          grid
                          transition-[grid-template-rows,opacity]
                          duration-300
                          ease-out
                          ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }
                        `}
                      >
                        <div className="overflow-hidden">
                          <div
                            className="
                              max-w-[720px]
                              pb-5
                              font-['IBM_Plex_Sans']
                              text-base
                              font-normal
                              leading-6
                              text-gray-600
                            "
                          >
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* IMAGE */}
            <div
              data-reveal
              className="
                h-[320px]
                sm:h-[420px]
                lg:h-[565px]
                w-full
                overflow-hidden
                rounded-2xl
                bg-orange-800
                translate-y-8
                opacity-0
                transition-all
                duration-1000
                ease-out
                lg:w-auto
                xl:w-[389px]
              "
              style={{
                transitionDelay: "280ms",
              }}
            >
              <img
                src="/images/markets/market-coverage/image4.png"
                alt="Talvrin research team"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}