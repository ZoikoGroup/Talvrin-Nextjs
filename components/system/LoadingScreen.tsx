"use client";

import { motion } from "framer-motion";

const bars = [
  { height: 28, delay: 0 },
  { height: 44, delay: 0.12 },
  { height: 60, delay: 0.24 },
  { height: 38, delay: 0.36 },
  { height: 52, delay: 0.48 },
];

export default function LoadingScreen() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px 420px at 20% 20%, rgba(108,92,231,0.18), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 80% 80%, rgba(185,129,50,0.12), rgba(185,129,50,0) 60%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-8">
        <div className="flex h-16 items-end gap-2.5" role="status" aria-label="Loading">
          {bars.map((bar, index) => (
            <motion.span
              key={index}
              className="w-3 rounded-full bg-gradient-to-t from-brand to-accent-violet"
              style={{ height: bar.height, transformOrigin: "bottom" }}
              animate={{ scaleY: [0.35, 1, 0.35] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: bar.delay,
              }}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-amber">Talvrin</p>
          <p className="mt-2 text-sm text-white/55">Loading verified evidence…</p>
        </div>
      </div>
    </div>
  );
}
