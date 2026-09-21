import Reveal from "@/components/ui/Reveal";

export default function CorporateHome() {
  return (
    <>
      {/* Corporate Home */}
      <section className="bg-[#171335] py-24 lg:py-32">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-0">
          <Reveal>
            <p className="text-xs font-bold tracking-wide text-[#B98132] uppercase">
              CORPORATE HOME
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-[47.20px] text-violet-50">
              Talvrin and Zoiko Markets
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-violet-50/70">
              Talvrin is a trading name of Zoiko Markets, a Zoiko Financial Group company, developed as a global platform with governance and<br />
              coverage architecture designed to support expansion internationally.
            </p>
          </Reveal>
          
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Reveal delay={0.2}>
              <p className="text-xs font-bold tracking-wide text-[#F6F5FB]/50 uppercase">
                GLOBAL HEADQUARTERS
              </p>
              <p className="mt-2 text-base font-normal leading-6 text-[#F6F5FB]/85">
                1401 21st Street, Suite R<br />Sacramento, CA 95811, USA
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-xs font-bold tracking-wide text-[#F6F5FB]/50 uppercase">
                EUROPEAN HEADQUARTERS
              </p>
              <p className="mt-2 text-base font-normal leading-6 text-[#F6F5FB]/85">
                167-169 Great Portland Street, 5th Floor<br />London W1W 5PF, UK
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.4} className="mt-10 flex flex-wrap gap-6">
            <a href="#" className="text-sm font-semibold text-[#B4A8FF] hover:underline">
              About Zoiko Markets &rarr;
            </a>
            <a href="#" className="text-sm font-semibold text-[#B4A8FF] hover:underline">
              About Zoiko Financial Group &rarr;
            </a>
            <a href="#" className="text-sm font-semibold text-[#B4A8FF] hover:underline">
              Contact &rarr;
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}