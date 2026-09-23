import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="w-full bg-white py-20 lg:py-24 border-t border-slate-900/10">
      <Container className="max-w-[1200px]">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-wider text-[#6C5CE7] font-['IBM_Plex_Sans']">
              CONTINUE WITH THE RIGHT DESTINATION
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 font-['IBM_Plex_Sans'] sm:text-4xl lg:text-[44px] lg:leading-[50px] max-w-2xl">
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Review the company behind the
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Talvrin trading name, explore the
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                product, or contact the team with a
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                corporate enquiry.
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-xs sm:text-sm text-[#5D5A72] font-['IBM_Plex_Sans'] leading-relaxed">
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Talvrin is designed for research and market intelligence, not investment recommendations or trade
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                execution.
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/zoiko-financial-group"
              className="inline-flex h-[48px] items-center justify-center rounded-[8px] bg-[#171335] px-7 text-sm font-semibold text-[#F6F5FB] font-['IBM_Plex_Sans'] hover:bg-slate-800 transition-colors shadow-xs"
            >
              About Zoiko Markets
            </Link>
            <Link
              href="/product/overview"
              className="inline-flex h-[48px] items-center justify-center rounded-[8px] border border-slate-900/10 bg-white px-7 text-sm font-semibold text-slate-900 font-['IBM_Plex_Sans'] hover:bg-slate-50 transition-colors shadow-xs"
            >
              Explore Talvrin
            </Link>
          </Reveal>

          <Reveal delay={0.3} className="mt-6">
            <Link
              href="/request-access"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#6C5CE7] font-['IBM_Plex_Sans'] hover:underline"
            >
              <span>Contact Talvrin</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block shrink-0 transition-transform group-hover:translate-x-1 text-[#6C5CE7]"><path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
