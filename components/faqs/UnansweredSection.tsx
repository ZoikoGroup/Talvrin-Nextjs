import { ReactNode } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";
import clsx from "clsx";

type UnansweredRow = {
  label: string;
  detail: ReactNode;
};

const rows: UnansweredRow[] = [
  {
    label: "Pricing & plans",
    detail: (
      <>
        Not confirmed by an approved pricing source; routes to an approved pricing or contact destination once one<br className="hidden md:inline" /> exists.
      </>
    ),
  },
  {
    label: "Launch & availability date",
    detail: "Never invented — see Release Notes or an official announcement once approved.",
  },
  {
    label: "Support SLA & hours",
    detail: "Never invented — Contact Support or an approved support policy is authoritative.",
  },
  {
    label: "API availability",
    detail: "Never inferred from navigation alone — see approved developer Documentation only once released.",
  },
  {
    label: "Security certification",
    detail: "Never inferred here — the Security / Trust Center is authoritative once published.",
  },
  {
    label: "Exact market & data coverage",
    detail: "Uses the governed Coverage authority rather than a summary from architecture alone.",
  },
  {
    label: "Regulatory / legal status",
    detail: "Handled by approved legal authority only; this FAQ does not provide legal interpretation.",
  },
  {
    label: "Customer outcomes & performance",
    detail: "Testimonials, savings, returns or adoption figures are never invented here.",
  },
];

export default function UnansweredSection() {
  return (
    <section
      className="scroll-mt-32 bg-[#F6F5FB] py-20 sm:py-24"
      style={{ backgroundColor: "rgba(246, 245, 251, 1)" }}
    >
      <Container className="max-w-[1000px]">
        <Reveal>
          <SectionEyebrow tone="amber">
            QUESTIONS THIS FAQ DOESN&apos;T ANSWER
          </SectionEyebrow>
          <SectionHeading size="md">Some questions stay unresolved on purpose.</SectionHeading>
          <SectionLede>
            Rather than improvise, these areas route to their own authoritative source once one is approved and<br className="hidden md:inline" /> published.
          </SectionLede>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <div className="flex flex-col rounded-2xl border border-ink/10 bg-white px-8 py-4">
            {rows.map((row, idx) => (
              <div
                key={row.label}
                className={clsx(
                  "flex flex-col gap-2 py-4 sm:flex-row sm:gap-5",
                  idx !== rows.length - 1 && "border-b border-ink/10"
                )}
              >
                <h3 className="w-full shrink-0 text-sm font-bold text-ink sm:w-56 font-['IBM_Plex_Sans']">
                  {row.label}
                </h3>
                <p className="min-w-0 flex-1 text-sm leading-5 text-muted font-['IBM_Plex_Sans']">{row.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
