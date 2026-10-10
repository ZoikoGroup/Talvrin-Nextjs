"use client";

import { useEffect, useRef } from "react";

const capabilities = [
  {
    capability: "Research / evidence / monitoring concepts",
    status: "SOURCE-SUPPORTED",
    supported: true,
    note: "Actual released product behavior still verified before publication.",
  },
  {
    capability: "Coverage / rights / trust governance",
    status: "SOURCE-SUPPORTED",
    supported: true,
    note: "Registry-backed current values required.",
  },
  {
    capability: "Collaboration mechanics",
    status: "NOT ESTABLISHED",
    supported: false,
    note: "Capability / permission source required.",
  },
  {
    capability: "SSO / SCIM / RBAC / admin",
    status: "NOT ESTABLISHED",
    supported: false,
    note: "Explicit enterprise product / security authority required.",
  },
  {
    capability: "Audit logs / retention / legal hold",
    status: "NOT ESTABLISHED",
    supported: false,
    note: "Capability plus legal / policy authority required.",
  },
  {
    capability: "API / integrations / export",
    status: "NOT ESTABLISHED",
    supported: false,
    note: "Live capability plus security and rights authority required.",
  },
  {
    capability: "Data residency / private deployment",
    status: "NOT ESTABLISHED",
    supported: false,
    note: "Architecture and contractual authority required.",
  },
  {
    capability: "Private AI / model isolation / zero retention",
    status: "NOT ESTABLISHED",
    supported: false,
    note: "AI, security, and privacy authority required.",
  },
  {
    capability: "SLAs / support tiers / implementation",
    status: "NOT ESTABLISHED",
    supported: false,
    note: "Operational and commercial authority required.",
  },
  {
    capability: "Pricing / plans / contract terms",
    status: "NOT ESTABLISHED",
    supported: false,
    note: "Approved commercial source required.",
  },
];

export default function CapabilityTruth() {
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
        threshold: 0.08,
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
        className="w-full overflow-hidden bg-slate-900 text-violet-50"
      >
        <div className="mx-auto w-full max-w-[1320px] px-4 py-12 sm:px-6 md:px-8 lg:px-8 xl:px-20 lg:py-16 xl:py-[96px]">
          {/* Header */}
          <div className="w-full">
            <p
              data-reveal
              className="reveal m-0 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600"
            >
              ENTERPRISE CAPABILITY TRUTH
            </p>

            <h2
              data-reveal
              className="reveal reveal-1 m-0 w-full max-w-[800px] pt-3 font-['IBM_Plex_Sans'] text-[30px] font-bold leading-[1.12] tracking-[-1px] text-violet-50 sm:text-[38px] md:text-[42px] lg:text-5xl lg:leading-[48.72px]"
            >
              Verified capabilities, shown plainly.{" "}
              <br className="hidden xl:block" />
              Nothing else.
            </h2>

            <p
              data-reveal
              className="reveal reveal-2 m-0 w-full max-w-[780px] pt-4 pb-8 sm:pb-10 font-['IBM_Plex_Sans'] text-sm sm:text-base font-normal leading-6 sm:leading-7 text-violet-50/70"
            >
              Enterprise pages commonly imply admin, identity, and integration
              controls by convention. This one states exactly what is
              source-supported today, and what is not established.
            </p>
          </div>

          {/* Capability table */}
          <div className="w-full">
            {capabilities.map((item, index) => (
              <div
                key={item.capability}
                data-reveal
                className="reveal grid w-full grid-cols-1 gap-2.5 sm:gap-3 border-b-[0.8px] border-violet-50/10 py-3.5 sm:py-4 md:grid-cols-[minmax(0,1.2fr)_170px_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_192px_minmax(0,1fr)] md:items-start md:gap-4"
                style={{
                  transitionDelay: `${180 + index * 55}ms`,
                }}
              >
                {/* Capability */}
                <div className="min-w-0">
                  <p className="m-0 font-['IBM_Plex_Sans'] text-sm font-semibold leading-6 text-violet-50 sm:text-base">
                    {item.capability}
                  </p>
                </div>

                {/* Status */}
                <div className="flex min-w-0 items-start md:w-48">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-[5px] font-['IBM_Plex_Sans'] text-[10px] font-bold tracking-[0.04em] ${
                      item.supported
                        ? "bg-violet-300 text-slate-900"
                        : "bg-violet-50/10 text-violet-50"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Note */}
                <div className="min-w-0">
                  <p className="m-0 font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-violet-50/60">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(26px);
          transition:
            opacity 0.7s ease,
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-1 {
          transition-delay: 80ms;
        }

        .reveal-2 {
          transition-delay: 160ms;
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