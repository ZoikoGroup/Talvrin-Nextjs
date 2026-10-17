"use client";

import { motion } from "framer-motion";

const principles = [
  "EVIDENCE-FIRST",
  "SOURCE-VERIFIED",
  "JURISDICTION-EXPLICIT",
  "TIME-SEPARATED",
  "RIGHTS-AWARE",
  "NON-ADVISORY",
];

export default function RegulatorsPrinciples() {
  return (
    <div className="w-full border-y border-[rgba(23,19,53,0.08)] bg-white py-5">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 sm:gap-x-8 md:gap-x-10 lg:gap-x-12">
        {principles.map((item, idx) => (
          <div key={item} className="flex items-center gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="font-sans text-[12px] font-semibold tracking-[0.06em] text-[#171335] sm:text-[13px]"
            >
              {item}
            </motion.span>
            {idx < principles.length - 1 && (
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[rgba(23,19,53,0.25)]"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
