import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function FinalCtaSection() {
  return (
    <section className="w-full bg-[#F6F5FB] py-20 lg:py-28">
      <Container className="max-w-[1320px] text-center">
        <div className="mx-auto max-w-4xl flex flex-col items-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171335] font-['IBM_Plex_Sans'] leading-tight lg:leading-[48.72px]">
              Strengthen the research
              <br />
              infrastructure behind investment
              <br />
              workflows.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-5">
            <p className="max-w-2xl text-sm sm:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed text-[#5D5A72]">
              Without losing the evidence behind the view. Explore how Talvrin fits your organization&apos;s
              <br className="hidden sm:inline" /> research process.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-access"
              className="inline-flex h-[48px] sm:h-[52px] items-center justify-center rounded-[10px] bg-[#171335] px-7 sm:px-8 text-sm sm:text-base font-semibold text-[#F6F5FB] font-['IBM_Plex_Sans'] transition-colors hover:bg-slate-800 shadow-xs"
            >
              Request Access
            </Link>
            <Link
              href="/product/overview"
              className="inline-flex h-[48px] sm:h-[52px] items-center justify-center rounded-[10px] border border-slate-900/20 bg-white px-7 sm:px-8 text-sm sm:text-base font-semibold text-[#171335] font-['IBM_Plex_Sans'] transition-colors hover:bg-slate-900/5 shadow-xs"
            >
              See How It Works
            </Link>
          </Reveal>

          <Reveal delay={0.3} className="mt-6">
            <p className="text-xs font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
              Research and intelligence. No portfolio management. No trade execution. No manufactured investment
              <br className="hidden sm:inline" /> recommendations.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
