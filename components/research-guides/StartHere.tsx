"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

type Foundation = {
  number: string;
  title: string;
  description: string;
  href: string;
};

const foundations: Foundation[] = [
  {
    number: "01",
    title: "Frame the question",
    description: "Specify entity, market, measurement, comparison and date scope.",
    href: "#",
  },
  {
    number: "02",
    title: "Verify a source",
    description: "Reconcile a claim against its original filing, period and basis.",
    href: "#",
  },
  {
    number: "03",
    title: "Cite a claim",
    description: "Capture the exact document, pinpoint and retrieval record.",
    href: "#",
  },
];

export default function StartHere() {
  return (
    <section className="w-full border-b-[0.8px] border-[rgba(23,19,53,0.08)] bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-14 sm:px-10 lg:px-[120px] lg:py-16">
        <Reveal className="flex flex-col items-start gap-3">
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.08em] text-[#6c5ce7]">
            Start Here
          </p>
          <h2 className="font-sans text-[24px] font-bold leading-[1.2] text-[#171335] sm:text-[28px] sm:leading-[33.6px]">
            Three foundations before any worked example.
          </h2>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4">
          {foundations.map((item, idx) => (
            <Reveal
              key={item.number}
              delay={idx * 0.06}
              className="flex h-full flex-col items-start gap-[9.5px] rounded-[14px] border border-[rgba(23,19,53,0.1)] bg-[#f6f5fb] p-[24.8px]"
              as="div"
            >
              <span className="flex size-9 items-center justify-center rounded-[9px] bg-[rgba(108,92,231,0.12)] font-sans text-[14px] font-bold text-[#6c5ce7]">
                {item.number}
              </span>
              <h3 className="font-sans text-[16px] font-bold text-[#171335]">{item.title}</h3>
              <p className="font-sans text-[13px] font-normal leading-[19.5px] text-[#5d5a72]">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-auto pt-1 font-sans text-[13px] font-bold text-[#6c5ce7] hover:underline"
              >
                Read guide →
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
