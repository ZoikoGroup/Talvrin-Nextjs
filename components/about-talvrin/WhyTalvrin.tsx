import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function WhyTalvrin() {
  return (
    <>
            {/* Why Talvrin Exists */}
            <section id="why-talvrin" className="bg-[#F6F5FB] py-16 lg:py-24">
              <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                <div className="w-full lg:w-[840px] shrink-0 space-y-6">
                  <Reveal>
                    <p className="text-[#6C5CF7] text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide uppercase">
                      WHY TALVRIN EXISTS
                    </p>
                    <h2 className="mt-5 text-[32px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.2] lg:leading-[48px] text-[#171335]">
                      Financial information is abundant.
                      <br className="hidden sm:inline" />
                      Defensible understanding is not.
                    </h2>
                    <p className="mt-6 text-[15px] sm:text-[15.5px] text-[#5D5A72] leading-[26px]">
                      Public markets produce an extraordinary volume of filings, releases, policy decisions and commentary.<br className="hidden md:inline" />
                      The challenge is no longer finding information &mdash; it&apos;s knowing what matters, where it came from, and<br className="hidden md:inline" />
                      whether a conclusion reached yesterday still holds today.
                    </p>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="mt-8 w-full max-w-[840px] lg:w-[840px] min-h-[107px] px-7 py-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 flex flex-col justify-center items-start shadow-sm">
                      <p className="text-slate-900 text-base sm:text-lg font-semibold font-['IBM_Plex_Sans'] leading-7">
                        Talvrin exists because serious financial research needs a stronger bridge between information<br />
                        and judgment. That bridge is evidence.
                      </p>
                    </div>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center text-[14px] font-semibold text-[#6C5CF7] group hover:text-[#5b4be0] hover:underline transition-colors"
                      >
                        Read Talvrin Evidence Standards
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5 transition-transform group-hover:translate-x-1">
                          <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </Reveal>
                </div>
                <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
                  <Reveal delay={0.4}>
                    <div className="overflow-hidden rounded-2xl bg-white w-[280px] sm:w-[320px] lg:w-[340px] h-[420px] shadow-sm">
                      <Image
                        src="/about-talvrin/image 61.png"
                        alt="Why Talvrin Exists"
                        width={340}
                        height={420}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </Reveal>
                </div>
              </Container>
            </section>
    </>
  );
}
