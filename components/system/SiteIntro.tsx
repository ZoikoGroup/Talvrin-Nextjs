"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MarketLoader from "./MarketLoader";

const MIN_DISPLAY_MS = 5000;

export default function SiteIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), MIN_DISPLAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink"
          initial={false}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(600px 420px at 20% 20%, rgba(108,92,231,0.18), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 80% 80%, rgba(185,129,50,0.12), rgba(185,129,50,0) 60%)",
            }}
          />
          <div className="relative">
            <MarketLoader />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
