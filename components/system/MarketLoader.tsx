"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const candles = [
  { body: 22, wick: 34, up: true },
  { body: 34, wick: 46, up: true },
  { body: 18, wick: 30, up: false },
  { body: 42, wick: 56, up: true },
  { body: 28, wick: 40, up: false },
  { body: 46, wick: 60, up: true },
  { body: 24, wick: 36, up: true },
];

const statusLines = [
  "Loading verified evidence…",
  "Connecting to sources…",
  "Building your research view…",
];

export default function MarketLoader() {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStatusIndex((i) => (i + 1) % statusLines.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative h-20 w-56 overflow-hidden" role="status" aria-label="Loading">
        <div className="absolute inset-x-0 top-1/2 h-px bg-white/8" />
        <div className="flex h-full items-end justify-between px-1">
          {candles.map((candle, index) => (
            <div key={index} className="relative flex w-3 flex-col items-center">
              <motion.span
                className="w-px bg-white/25"
                style={{ height: candle.wick, transformOrigin: "bottom" }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: [0, 1, 1, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.12,
                  times: [0, 0.25, 0.85, 1],
                }}
              />
              <motion.span
                className={`absolute bottom-0 w-2.5 rounded-[1px] ${candle.up ? "bg-emerald-400" : "bg-[#F0605A]"}`}
                style={{ height: candle.body, transformOrigin: "bottom" }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: [0, 1, 1, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.12,
                  times: [0, 0.3, 0.85, 1],
                }}
              />
            </div>
          ))}
        </div>

        <motion.span
          className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-brand-light to-transparent"
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-accent-amber">Talvrin</p>
        <div className="mt-2 h-5">
          <AnimatePresence mode="wait">
            <motion.p
              key={statusIndex}
              className="text-sm text-white/55"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {statusLines[statusIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
