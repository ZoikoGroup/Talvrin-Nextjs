import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#171335] py-16 lg:pt-[108px] lg:pb-[100px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(108,92,231,0.2)_0%,transparent_65%),radial-gradient(circle_at_85%_90%,rgba(185,129,50,0.12)_0%,transparent_60%)]"
      />
      <Container className="relative z-10 max-w-[1320px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-[40px]">
          <div className="flex flex-col items-start">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-wide text-[#B98132] font-['IBM_Plex_Sans']">
                LEADERSHIP
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-[#F6F5FB] font-['IBM_Plex_Sans'] sm:text-5xl lg:text-[56px]">
                Leadership
              </h1>
              <p className="mt-6 max-w-[620px] text-base sm:text-lg leading-relaxed text-[#F6F5FB]/75 font-['IBM_Plex_Sans'] font-normal">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Leadership information is being prepared for publication. For approved company
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  information or enquiries, visit About Zoiko Markets or Contact Talvrin.
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/zoiko-financial-group"
                className="inline-flex h-[52px] items-center justify-center rounded-[10px] bg-[#F6F5FB] px-7 text-base font-semibold text-[#171335] font-['IBM_Plex_Sans'] transition-colors hover:bg-white shadow-xs"
              >
                About Zoiko Markets
              </Link>
              <Link
                href="/request-access"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#B4A8FF] font-['IBM_Plex_Sans'] hover:underline"
              >
                <span>Contact Talvrin</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#B4A8FF]"
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
            </Reveal>
          </div>

          <div className="w-full flex justify-center lg:justify-end">
            <Reveal delay={0.3} className="w-full max-w-[540px]">
              <div className="relative aspect-[494/360] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src="/Leadership/image 96 (1).png"
                  alt="Leadership Meeting"
                  fill
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}