import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function CtaSection() {
  return (
    <section className="bg-ink py-20 sm:py-24" style={{ backgroundColor: "rgba(23, 19, 53, 1)" }}>
      <Container className="!max-w-[1200px] !px-4 sm:!px-6 lg:!px-0">
        <Reveal className="mx-auto flex max-w-[640px] flex-col items-center gap-5 text-center">
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-white sm:text-4xl font-['IBM_Plex_Sans']">
            Ready to put the guidance to work?
          </h2>

          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <Link
              href="/resources/getting-started"
              className="inline-flex h-[55px] items-center justify-center rounded-[10px] bg-[#F6F5FB] px-7 text-[17px] font-semibold text-[#171335] font-['IBM_Plex_Sans'] transition-colors hover:bg-white"
            >
              Getting Started
            </Link>
            <Link
              href="/request-access"
              className="inline-flex h-[55px] items-center justify-center rounded-[10px] border border-[#F6F5FB]/[0.22] px-7 text-[17px] font-semibold text-[#F6F5FB] font-['IBM_Plex_Sans'] transition-colors hover:bg-[#F6F5FB]/10"
            >
              Request Access
            </Link>
          </div>

          <p className="pt-1 text-xs sm:text-[13px] leading-[21px] text-[#F6F5FB]/60 font-['IBM_Plex_Sans']">
            Research and intelligence platform. No trade execution. No manufactured investment<br className="hidden sm:inline" /> recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
