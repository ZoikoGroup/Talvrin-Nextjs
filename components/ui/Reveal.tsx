"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds, useful when revealing a list of siblings. */
  delay?: number;
  /** Distance (px) the content travels in on entry. */
  distance?: number;
  as?: "div" | "section" | "li" | "article";
};

const easing = [0.16, 1, 0.3, 1] as const;

/**
 * Fades and slides content up into place the first time it scrolls into
 * view. This is a section-level entrance animation, not a page loader.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  distance = 32,
  as = "div",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: easing },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
