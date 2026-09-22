import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="bg-[#F6F5FB] py-20 lg:py-28 border-t border-slate-900/10">
      <Container className="lg:max-w-[1332px]">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-wider text-[#6C5CE7] font-['IBM_Plex_Sans']">
              LEARN MORE ABOUT THE ORGANIZATION
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 font-['IBM_Plex_Sans'] sm:text-4xl lg:text-[44px] lg:leading-[52px] max-w-2xl">
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Explore the company behind Talvrin,
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                review open opportunities, or contact
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                the appropriate team.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/zoiko-financial-group"
              className="inline-flex h-[48px] items-center justify-center rounded-[8px] bg-[#171335] px-7 text-sm font-semibold text-[#F6F5FB] font-['IBM_Plex_Sans'] hover:bg-slate-800 transition-colors shadow-xs"
            >
              About Zoiko Markets
            </Link>
            <Link
              href="/careers"
              className="inline-flex h-[48px] items-center justify-center rounded-[8px] border border-slate-900/10 bg-white px-7 text-sm font-semibold text-slate-900 font-['IBM_Plex_Sans'] hover:bg-slate-50 transition-colors shadow-xs"
            >
              Explore Careers
            </Link>
          </Reveal>

          <Reveal delay={0.3} className="mt-6">
            <Link
              href="/request-access"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#6C5CE7] font-['IBM_Plex_Sans'] hover:underline"
            >
              <span>Contact Talvrin</span>
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
