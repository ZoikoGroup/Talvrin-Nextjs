import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#171335] py-16 lg:min-h-[625px] lg:py-0 lg:flex lg:items-center"
      style={{ backgroundColor: "rgba(23, 19, 53, 1)" }}
    >
      {/* Radial Gradients matching Figma */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(108,92,231,0.2)_0%,transparent_65%),radial-gradient(circle_at_85%_90%,rgba(185,129,50,0.12)_0%,transparent_60%)]" />

      {/* Frame is 1440px wide with max-w-[1332px] content container */}
      <Container className="relative z-10 lg:max-w-[1332px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_386px] lg:gap-12 xl:gap-16">
          <div className="flex flex-col">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-widest text-[#B98132] font-['IBM_Plex_Sans']">
                FAQS
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-4 text-4xl font-bold leading-[1.125] text-[#F6F5FB] font-['IBM_Plex_Sans'] sm:text-5xl lg:text-[56px]">
                Direct answers about<br className="hidden sm:inline" /> Talvrin.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-[720px] text-[17px] sm:text-lg leading-[31px] text-[#F6F5FB]/75 font-['IBM_Plex_Sans'] font-normal">
                Get clear answers about what Talvrin is, who it is for, how evidence and AI are<br className="hidden sm:inline" />
                handled, how research stays connected to change, and where to find deeper<br className="hidden sm:inline" />
                product, Trust or support guidance.
              </p>
            </Reveal>

            {/* CTA Buttons: 55px tall, rounded-[10px], identical heights and matching Figma */}
            <Reveal
              delay={0.3}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4"
            >
              <Link
                href="#featured"
                className="inline-flex h-[55px] items-center justify-center rounded-[10px] bg-[#F6F5FB] px-7 text-[17px] font-semibold text-[#171335] font-['IBM_Plex_Sans'] transition-colors hover:bg-white"
              >
                Browse FAQs
              </Link>
              <Link
                href="/product/overview"
                className="inline-flex h-[55px] items-center justify-center rounded-[10px] border border-[#F6F5FB]/[0.22] px-7 text-[17px] font-semibold text-[#F6F5FB] font-['IBM_Plex_Sans'] transition-colors hover:bg-[#F6F5FB]/10"
              >
                Explore the Platform
              </Link>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-6 max-w-[640px] text-[13px] leading-[21px] text-[#F6F5FB]/60 font-['IBM_Plex_Sans']">
                These answers summarize Talvrin product truth. Methodology, Trust, legal, coverage and operational<br className="hidden md:inline" />
                pages remain authoritative for deeper or changing information.
              </p>
            </Reveal>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Reveal
              delay={0.2}
              className="relative aspect-[386/400] w-full max-w-[386px] overflow-hidden rounded-2xl lg:-translate-x-[175px]"
            >
              <Image
                src="/faq/image 319.png"
                alt="Analyst reviewing Talvrin research answers"
                width={386}
                height={400}
                priority
                className="h-full w-full object-cover rounded-2xl"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

