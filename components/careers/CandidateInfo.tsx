import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function CandidateInfo() {
  return (
    <section id="candidate-support" className="w-full bg-[#171335] py-20 lg:py-24 relative overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(108,92,231,0.15)_0%,transparent_50%)]" />
      <Container className="relative z-10 max-w-[1200px]">
        <div className="flex flex-col items-start max-w-[760px]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-wider text-[#B98132] font-['IBM_Plex_Sans']">
              CANDIDATE INFORMATION AND SUPPORT
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#F6F5FB] font-['IBM_Plex_Sans'] sm:text-4xl lg:text-[44px] lg:leading-[50px]">
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Every job page explains its process,
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                how information is used, and how to
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                get support.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* 4 Columns Grid: 3 Cards + 1 Image */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Card 1: Hiring Process */}
          <Reveal delay={0.1} className="h-full">
            <div className="h-full p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#B4A8FF] font-['IBM_Plex_Sans']">
                  HIRING PROCESS
                </p>
                <p className="mt-4 text-sm text-[#F6F5FB]/75 font-['IBM_Plex_Sans'] leading-6">
                  <span className="block whitespace-normal lg:whitespace-nowrap">Each job page explains the</span>
                  <span className="block whitespace-normal lg:whitespace-nowrap">approved process for that role,</span>
                  <span className="block whitespace-normal lg:whitespace-nowrap">including stages, assessments,</span>
                  <span className="block whitespace-normal lg:whitespace-nowrap">and expected communications</span>
                  <span className="block whitespace-normal lg:whitespace-nowrap">when available.</span>
                </p>
              </div>
              <Link
                href="#open-roles"
                className="mt-6 inline-flex items-center text-xs sm:text-sm font-semibold text-[#F6F5FB] font-['IBM_Plex_Sans'] hover:text-[#B4A8FF] transition-colors group"
              >
                <span>View a role for details</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block ml-1 -mt-0.5 shrink-0 transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </Reveal>

          {/* Card 2: Candidate Privacy */}
          <Reveal delay={0.2} className="h-full">
            <div className="h-full p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#B4A8FF] font-['IBM_Plex_Sans']">
                  CANDIDATE PRIVACY
                </p>
                <p className="mt-4 text-sm text-[#F6F5FB]/75 font-['IBM_Plex_Sans'] leading-6">
                  <span className="block whitespace-normal lg:whitespace-nowrap">How application information is</span>
                  <span className="block whitespace-normal lg:whitespace-nowrap">used, retained, and protected is</span>
                  <span className="block whitespace-normal lg:whitespace-nowrap">described in the approved</span>
                  <span className="block whitespace-normal lg:whitespace-nowrap">Candidate Privacy Notice.</span>
                </p>
              </div>
              <Link
                href="/request-access"
                className="mt-6 inline-flex items-center text-xs sm:text-sm font-semibold text-[#F6F5FB] font-['IBM_Plex_Sans'] hover:text-[#B4A8FF] transition-colors group"
              >
                <span>Read the Candidate Privacy Notice</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block ml-1 -mt-0.5 shrink-0 transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </Reveal>

          {/* Card 3: Accessibility & Accommodations */}
          <Reveal delay={0.3} className="h-full">
            <div className="h-full p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#B4A8FF] font-['IBM_Plex_Sans']">
                  <span className="block">ACCESSIBILITY &amp;</span>
                  <span className="block">ACCOMMODATIONS</span>
                </p>
                <p className="mt-4 text-sm text-[#F6F5FB]/75 font-['IBM_Plex_Sans'] leading-6">
                  <span className="block whitespace-normal lg:whitespace-nowrap">Request an accessibility</span>
                  <span className="block whitespace-normal lg:whitespace-nowrap">accommodation for any stage of</span>
                  <span className="block whitespace-normal lg:whitespace-nowrap">the process through a confidential,</span>
                  <span className="block whitespace-normal lg:whitespace-nowrap">approved support route.</span>
                </p>
              </div>
              <Link
                href="/request-access"
                className="mt-6 inline-flex items-center text-xs sm:text-sm font-semibold text-[#F6F5FB] font-['IBM_Plex_Sans'] hover:text-[#B4A8FF] transition-colors group"
              >
                <span>Request an Accommodation</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block ml-1 -mt-0.5 shrink-0 transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </Reveal>

          {/* Card 4: Image */}
          <Reveal delay={0.4} className="h-full">
            <div className="relative aspect-[288/240] h-full min-h-[260px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-900">
              <Image
                src="/Careers/image 104 (1).png"
                alt="Candidate Support"
                fill
                sizes="(min-width: 1024px) 288px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}