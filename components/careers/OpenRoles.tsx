import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function OpenRoles() {
  return (
    <section id="open-roles" className="w-full bg-white py-20 lg:py-24 border-b border-slate-900/10">
      <Container className="max-w-[1000px]">
        <div className="flex flex-col items-start w-full gap-3">
          <Reveal className="w-full">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-yellow-600 text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide">
                OPEN ROLES
              </div>
            </div>
            <div className="w-full max-w-[760px] flex flex-col justify-start items-start mt-3">
              <h2 className="justify-center text-slate-900 text-4xl font-bold font-['IBM_Plex_Sans'] leading-[47.20px]">
                Explore current approved opportunities.
              </h2>
            </div>
            <div className="w-full max-w-[760px] pt-1 flex flex-col justify-start items-start mt-2">
              <p className="justify-center text-gray-600 text-base font-normal font-['IBM_Plex_Sans'] leading-7">
                Each role page provides the verified responsibilities, requirements, location, workplace model,<br className="hidden sm:inline" />
                employment terms, and application route.
              </p>
            </div>
          </Reveal>

          {/* Search / Filter Controls */}
          <Reveal delay={0.2} className="w-full mt-4">
            <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-3 w-full">
              <div className="flex-1 self-stretch min-w-60 px-4 py-3.5 bg-violet-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-900/20 inline-flex flex-col justify-start items-start overflow-hidden">
                <input
                  type="text"
                  placeholder="Search job titles or keywords"
                  className="w-full bg-transparent text-neutral-500 text-base font-normal font-['IBM_Plex_Sans'] placeholder:text-neutral-500 focus:outline-hidden"
                />
              </div>
              <button className="px-5 py-3.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-900/20 inline-flex justify-center items-center text-center text-slate-900 text-base font-semibold font-['IBM_Plex_Sans'] hover:bg-slate-50 transition-colors shrink-0">
                Clear All Filters
              </button>
            </div>
            <div className="self-stretch pt-2 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-gray-600 text-sm font-semibold font-['IBM_Plex_Sans']">
                Showing 0 of 0 current openings
              </div>
            </div>
          </Reveal>

          {/* Empty State / Status Card */}
          <Reveal delay={0.3} className="w-full mt-2">
            <div className="self-stretch px-8 pt-12 pb-9 bg-violet-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 inline-flex flex-col justify-start items-start gap-2 w-full">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-yellow-600 text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide">
                  STATUS
                </div>
              </div>
              <div className="self-stretch pt-0.5 flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-slate-900 text-base font-semibold font-['IBM_Plex_Sans'] leading-7">
                  There are currently no published openings.
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-gray-600 text-base font-normal font-['IBM_Plex_Sans'] leading-6">
                  If new opportunities become available, they will be listed on this page. Every listed role will include a canonical job page with verified terms<br />and a secure application route.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}