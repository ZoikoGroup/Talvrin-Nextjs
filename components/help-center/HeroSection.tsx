import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "./shared";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        backgroundColor: "rgba(23, 19, 53, 1)",
        backgroundImage: `
          radial-gradient(circle 800px at 12% 0%, rgba(108, 92, 231, 0.22) 0%, rgba(108, 92, 231, 0) 70%),
          radial-gradient(circle 600px at 85% 90%, rgba(185, 129, 50, 0.12) 0%, rgba(185, 129, 50, 0) 70%)
        `,
      }}
    >
      <Container className="!max-w-[1200px] !px-4 sm:!px-6 lg:!px-0 relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,440px)]">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">HELP CENTER</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[54px] font-['IBM_Plex_Sans']">
              Find the guidance you need to<br className="hidden sm:inline" /> use Talvrin with confidence.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="mt-6 max-w-[720px] text-base sm:text-[17px] leading-[28px] font-['IBM_Plex_Sans']"
              style={{ color: "rgba(246, 245, 251, 0.85)" }}
            >
              Get task-based help for understanding Talvrin, working with evidence, building<br className="hidden sm:inline" />
              research views, monitoring change, and finding the right next step. Talvrin is a<br className="hidden sm:inline" />
              research and market-intelligence platform; Help Center content is not investment<br className="hidden sm:inline" />
              advice.
            </p>
          </Reveal>

          {/* CTA Buttons: 55px tall, rounded-[10px], identical heights and matching Figma */}
          <Reveal
            delay={0.3}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              href="#quick-paths"
              className="inline-flex h-[55px] items-center justify-center rounded-[10px] bg-[#F6F5FB] px-7 text-[17px] font-semibold text-[#171335] font-['IBM_Plex_Sans'] transition-colors hover:bg-white"
            >
              Browse help topics
            </Link>
            <Link
              href="/resources/getting-started"
              className="inline-flex h-[55px] items-center justify-center rounded-[10px] border border-[#F6F5FB]/[0.22] px-7 text-[17px] font-semibold text-[#F6F5FB] font-['IBM_Plex_Sans'] transition-colors hover:bg-[#F6F5FB]/10"
            >
              Start with Getting Started
            </Link>
            <Link
              href="/resources/contact-support"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/75 font-['IBM_Plex_Sans'] transition-colors hover:text-white"
            >
              <span>or Contact Support</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:translate-x-0.5"
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

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-[660px] text-xs sm:text-[13px] leading-[21px] text-[#F6F5FB]/60 font-['IBM_Plex_Sans']">
              Help content is maintained by Talvrin content and product owners. Feature availability and support<br className="hidden md:inline" />
              channels follow current published product state.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[368/460] w-full max-w-[400px] overflow-hidden rounded-2xl justify-self-center lg:justify-self-end lg:-translate-x-[150px]"
        >
          <Image
            src="/help-center/image 332.png"
            alt="Talvrin Help Center guidance overview"
            fill
            priority
            sizes="(min-width: 1024px) 400px, 100vw"
            className="object-cover rounded-2xl"
          />
        </Reveal>
      </Container>
    </section>
  );
}
