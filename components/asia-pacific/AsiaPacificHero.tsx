import React from "react";
import Image from "next/image";

export default function AsiaPacificHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#171335] text-white flex items-center justify-center p-6 sm:p-12 md:p-16 overflow-hidden">
      {/* Background Gradients */}
      {/* Top Left Radial Gradient */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none rounded-full blur-3xl opacity-100"
        style={{
          background: "radial-gradient(circle, #6C5CE738 0%, #6C5CE700 70%)",
        }}
      />

      {/* Bottom Right Radial Gradient */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none rounded-full blur-3xl opacity-100"
        style={{
          background: "radial-gradient(circle, #B9813224 0%, #B9813200 70%)",
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center my-auto">
        {/* Left Column - Text Content */}
        <div className="flex flex-col items-start justify-center">
          {/* Subtitle / Category Breadcrumb */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#C89241] uppercase mb-3">
            GLOBAL / ASIA-PACIFIC
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Asia-Pacific
          </h1>

          {/* Sub-heading / Tagline */}
          <h2 className="text-lg sm:text-xl font-medium text-slate-300 mb-4 leading-relaxed">
            Asia-Pacific markets: jurisdiction, language and evidence source
            coverage.
          </h2>

          {/* Body Paragraph */}
          <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed mb-8 max-w-xl">
            Talvrin is building a source-linked research and monitoring
            workspace for global public markets. This page explains
            Asia-Pacific's place in that architecture without naming unsupported
            active countries, calendars or languages.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10 items-center">
            <a
              href="#"
              className="bg-slate-100 hover:bg-white text-[#171335] font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-md inline-flex items-center justify-center text-center"
            >
              View Current Market Coverage
            </a>
            <a
              href="#"
              className="bg-transparent hover:bg-white/5 border border-slate-700/80 text-white font-medium text-sm px-6 py-3 rounded-xl transition-all duration-200 inline-flex items-center justify-center text-center"
            >
              How Talvrin Works
            </a>
          </div>

          {/* Footer Note / Disclaimer */}
          <p className="text-[11px] leading-normal text-slate-500 max-w-lg">
            Market, source, language, and access availability depend on
            published verification. Research is not trade execution or
            investment advice. Security researcher? Use{" "}
            <a
              href="#"
              className="underline hover:text-slate-300 transition-colors"
            >
              Security Contact
            </a>{" "}
            for responsible disclosure.
          </p>
        </div>

        {/* Right Column - Image Card */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
          <Image
            src="/asia/1.png"
            alt="Asia-Pacific Team Workspace"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
