"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";

const regions = ["All", "Americas", "Europe", "Asia-Pacific"];

const categories = [
  "Inflation",
  "Labor",
  "Growth",
  "Survey & PMI",
  "Trade",
  "Central Bank",
  "Fiscal & Other",
];

const statuses = [
  "All",
  "Upcoming",
  "Released",
  "Revised",
  "Delayed",
  "Canceled",
  "Time TBD",
];

export default function EventExplorer() {
  const [region, setRegion] = useState("All");
  const [category, setCategory] = useState<string[]>([]);
  const [status, setStatus] = useState("All");

  const toggleCategory = (item: string) => {
    setCategory((current) =>
      current.includes(item)
        ? current.filter((value) => value !== item)
        : [...current, item],
    );
  };

  const resetFilters = () => {
    setRegion("All");
    setCategory([]);
    setStatus("All");
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-24 xl:px-16">
        <div className="w-full max-w-[1320px]">
          {/* =========================================================
              SECTION HEADER
          ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <div className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500">
              UPCOMING AND RECENT ECONOMIC EVENTS
            </div>

            {/* Heading */}
            <h2 className="max-w-[780px] pt-3 font-['IBM_Plex_Sans'] text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900 sm:text-[38px] md:text-[44px] lg:text-5xl lg:leading-[48.72px]">
              Set the date and time zone before
              <br className="hidden sm:block" />
              scanning events.
            </h2>

            {/* Description */}
            <p className="max-w-[800px] pt-5 font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600">
              Every scheduled time makes its zone explicit. List view is the
              accessible baseline; a calendar grid is never the only way in.
            </p>
          </motion.div>

        {/* =========================================================
            FILTER / CALENDAR CONTROLS
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: "easeOut",
          }}
          className="mt-16 rounded-2xl bg-violet-50 px-5 py-8 sm:px-7 sm:py-10 lg:py-14"
        >
          {/* =====================================================
              TOP CONTROLS
          ===================================================== */}
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end">
            {/* DATE */}
            <div className="flex flex-col gap-2">
              <label className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
                DATE
              </label>

              <div className="flex flex-wrap items-center gap-2.5">
                {/* Previous */}
                <button
                  type="button"
                  aria-label="Previous day"
                  className="flex size-10 items-center justify-center rounded-lg bg-white outline outline-1 outline-slate-900/20 transition hover:bg-slate-50"
                >
                  <ChevronLeft className="size-4 text-slate-900" />
                </button>

                {/* Today */}
                <button
                  type="button"
                  className="h-10 rounded-lg bg-white px-4 font-['IBM_Plex_Sans'] text-sm font-semibold text-slate-900 outline outline-1 outline-slate-900/20 transition hover:bg-slate-50"
                >
                  Today
                </button>

                {/* Next */}
                <button
                  type="button"
                  aria-label="Next day"
                  className="flex size-10 items-center justify-center rounded-lg bg-white outline outline-1 outline-slate-900/20 transition hover:bg-slate-50"
                >
                  <ChevronRight className="size-4 text-slate-900" />
                </button>

                {/* Date picker */}
                <button
                  type="button"
                  className="flex h-10 items-center gap-2 rounded-lg bg-white px-3 font-['IBM_Plex_Sans'] text-sm text-slate-900 outline outline-1 outline-slate-900/20 transition hover:bg-slate-50"
                >
                  <span>28-09-2026</span>
                  <CalendarDays className="size-4" />
                </button>
              </div>
            </div>

            {/* TIME ZONE */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="timezone"
                className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600"
              >
                ACTIVE TIME ZONE
              </label>

              <select
                id="timezone"
                defaultValue="Eastern Time (ET)"
                className="h-10 min-w-60 rounded-lg border-0 bg-white px-4 font-['IBM_Plex_Sans'] text-sm text-slate-900 outline outline-1 outline-slate-900/20 focus:outline-indigo-500"
              >
                <option>Eastern Time (ET)</option>
                <option>Pacific Time (PT)</option>
                <option>Central European Time (CET)</option>
                <option>India Standard Time (IST)</option>
                <option>Coordinated Universal Time (UTC)</option>
              </select>
            </div>

            {/* VIEW */}
            <div className="flex flex-col gap-2">
              <span className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
                VIEW
              </span>

              <div className="flex overflow-hidden rounded-lg outline outline-1 outline-slate-900/20">
                <button
                  type="button"
                  className="h-10 bg-slate-900 px-4 font-['IBM_Plex_Sans'] text-sm font-semibold text-violet-50"
                >
                  List
                </button>

                <button
                  type="button"
                  className="h-10 bg-white px-4 font-['IBM_Plex_Sans'] text-sm font-semibold text-gray-600 transition hover:bg-slate-50"
                >
                  Week
                </button>
              </div>
            </div>
          </div>

          {/* =====================================================
              DATE TITLE
          ===================================================== */}
          <div className="pt-8">
            <h3 className="font-['IBM_Plex_Sans'] text-sm font-semibold text-slate-900">
              Monday, September 28, 2026
            </h3>
          </div>

          {/* =====================================================
              FILTERS
          ===================================================== */}
          <div className="space-y-5 pt-6">
            {/* REGION */}
            <FilterGroup title="JURISDICTION / REGION">
              {regions.map((item) => (
                <FilterButton
                  key={item}
                  active={region === item}
                  onClick={() => setRegion(item)}
                >
                  {item}
                </FilterButton>
              ))}
            </FilterGroup>

            {/* CATEGORY */}
            <FilterGroup title="CATEGORY">
              {categories.map((item) => (
                <FilterButton
                  key={item}
                  active={category.includes(item)}
                  onClick={() => toggleCategory(item)}
                >
                  {item}
                </FilterButton>
              ))}
            </FilterGroup>

            {/* STATUS */}
            <FilterGroup title="STATUS">
              {statuses.map((item) => (
                <FilterButton
                  key={item}
                  active={status === item}
                  onClick={() => setStatus(item)}
                >
                  {item}
                </FilterButton>
              ))}
            </FilterGroup>

            {/* RESET */}
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 pt-1 font-['IBM_Plex_Sans'] text-sm font-semibold text-indigo-500 transition-opacity hover:opacity-70"
            >
              <RotateCcw className="size-3.5" />
              Reset filters
            </button>
          </div>
        </motion.div>

        {/* =========================================================
            RESULT COUNT
        ========================================================= */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-8 font-['IBM_Plex_Sans'] text-sm font-normal text-gray-600"
        >
          0 of 0 registry-governed events shown for Monday, September 28,
          2026
        </motion.p>

        {/* =========================================================
            EMPTY STATUS
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-2xl bg-slate-900 px-6 py-9 outline outline-1 outline-slate-900/10"
        >
          {/* Label */}
          <div className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
            STATUS
          </div>

          {/* Title */}
          <h3 className="pt-1 font-['IBM_Plex_Sans'] text-base font-semibold leading-6 text-violet-50">
            There are no published economic events for Monday, September 28,
            2026 yet.
          </h3>

          {/* Description */}
          <p className="max-w-[900px] pb-2.5 font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-violet-50/60">
            When the calendar goes live, every row will follow the exact field
            contract below — never a fabricated time, value or source.
          </p>

          {/* Reset */}
          <button
            type="button"
            onClick={resetFilters}
            className="rounded-lg bg-violet-50 px-5 py-2.5 font-['IBM_Plex_Sans'] text-sm font-semibold text-slate-900 transition-transform duration-200 hover:-translate-y-0.5"
          >
            Reset filters
          </button>
        </motion.div>

        {/* =========================================================
            SAVED FIGMA IMAGE
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative mt-12 h-[200px] overflow-hidden rounded-2xl bg-violet-50 sm:h-[280px] md:h-[340px] lg:h-[384px]"
        >
          <Image
            src="/images/research/economic-calendar/image.png"
            alt="Economic calendar interface"
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
          />
        </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   FILTER GROUP
================================================================ */

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
        {title}
      </div>

      <div className="flex flex-wrap gap-2.5">{children}</div>
    </div>
  );
}

/* ===============================================================
   FILTER BUTTON
================================================================ */

function FilterButton({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 font-['IBM_Plex_Sans'] text-xs font-bold outline outline-1 outline-offset-[-1px] transition-all duration-200",
        active
          ? "bg-indigo-500/10 text-indigo-500 outline-indigo-500/40"
          : "bg-white text-gray-600 outline-slate-900/20 hover:bg-slate-50",
      ].join(" ")}
    >
      {children}
    </button>
  );
}