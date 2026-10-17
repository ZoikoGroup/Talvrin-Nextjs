"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  "ASK",
  "DISCOVER",
  "INSPECT",
  "BUILD",
  "MONITOR",
  "REASSESS",
];

const stepDetails = [
  {
    step: "ASK",
    description:
      "Start with the question: did a new rule or notice change the disclosure requirement for this market?",
  },
  {
    step: "DISCOVER",
    description:
      "Find the issuing regulator and its verified source families — rules, consultations, notices, guidance — using jurisdiction and family filters.",
  },
  {
    step: "INSPECT",
    description:
      "Open the original publication and review issuer, publication date, effective date and version — never hidden behind a summary.",
  },
  {
    step: "BUILD",
    description:
      "Form a current research view from the evidence, with source fact kept separate from interpretation and any compliance inference.",
  },
  {
    step: "MONITOR",
    description:
      "Keep the view connected to new publications, amendments and supersessions going forward.",
  },
  {
    step: "REASSESS",
    description:
      "Return when a material new document changes the base, with exactly what changed shown clearly.",
  },
];

export default function RelatedRegulatoryResearch() {
  return (
    <section id="workflow" className="w-full bg-[#171335] py-16 md:py-24 text-[#F6F5FB]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-[#6C5CE7]">
              RELATED REGULATORY RESEARCH — QUESTION TO EVIDENCE
            </span>
            <span className="inline-flex items-center rounded-full bg-[rgba(246,245,251,0.08)] px-2.5 py-0.5 font-sans text-[11px] font-bold uppercase tracking-[0.05em] text-[rgba(246,245,251,0.65)]">
              CONCEPTUAL WORKFLOW — NOT A LIVE FEATURE
            </span>
          </div>

          <h2 className="max-w-[800px] font-sans text-[30px] font-bold leading-[1.16] text-[#F6F5FB] sm:text-[36px] md:text-[42px] md:leading-[48.72px]">
            Did a new rule change the disclosure
            <br />
            requirement for this market?
          </h2>
          <p className="max-w-[780px] pt-1 font-sans text-[16px] font-normal leading-[1.6] text-[rgba(246,245,251,0.72)] sm:text-[17px] sm:leading-[27.2px]">
            An illustrative walk from question to evidence to a monitored view —
            with context, assumptions and contrary evidence kept visible, not a
            compliance determination or live product output.
          </p>
        </div>

        {/* Step Flow Bar */}
        <div className="mt-10 flex flex-wrap items-center gap-2.5 sm:gap-3">
          {steps.map((step, idx) => (
            <div key={step} className="flex items-center gap-2.5 sm:gap-3">
              <span className="inline-flex items-center rounded-full border border-[rgba(246,245,251,0.2)] bg-[rgba(246,245,251,0.06)] px-4 py-2 font-sans text-[13px] font-semibold text-[#F6F5FB]">
                {step}
              </span>
              {idx < steps.length - 1 && (
                <div className="relative h-[6px] w-[14px] shrink-0 opacity-40">
                  <Image
                    src="/images/markets/regulators/workflow-arrow.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Details Grid: 5 columns on desktop matching Figma */}
        <div className="mt-11 grid grid-cols-1 gap-x-7 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {stepDetails.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="flex flex-col gap-1.5"
            >
              <span className="font-sans text-[12px] font-bold tracking-[0.06em] text-[#B98132]">
                {item.step}
              </span>
              <p className="font-sans text-[14px] font-normal leading-[21px] text-[rgba(246,245,251,0.75)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
