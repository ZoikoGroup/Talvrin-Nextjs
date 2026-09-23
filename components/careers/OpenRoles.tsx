export default function OpenRoles() {
  return (
    <div className="w-full  h-[667.20px] relative bg-white flex justify-center">
      <div className="w-[1440px] h-full relative shrink-0">
        <div className="w-[1000px] max-w-[1000px] left-[212.40px] top-[96px] absolute inline-flex flex-col justify-start items-start gap-3">
            <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-yellow-600 text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide">OPEN ROLES</div>
            </div>
            <div className="w-[760px] max-w-[760px] flex flex-col justify-start items-start">
                <div className="justify-center text-slate-900 text-4xl font-bold font-['IBM_Plex_Sans'] leading-[47.20px]">Explore current approved opportunities.</div>
            </div>
            <div className="w-[760px] max-w-[760px] pt-1 flex flex-col justify-start items-start">
                <div className="justify-center text-gray-600 text-base font-normal font-['IBM_Plex_Sans'] leading-7">Each role page provides the verified responsibilities, requirements, location, workplace model,<br/>employment terms, and application route.</div>
            </div>
            <div className="self-stretch pt-5 inline-flex justify-start items-start gap-3">
                <div className="flex-1 self-stretch min-w-60 px-4 py-3.5 bg-violet-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-900/20 inline-flex flex-col justify-start items-start overflow-hidden">
                    <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                        <div className="self-stretch justify-center text-neutral-500 text-base font-normal font-['IBM_Plex_Sans']">Search job titles or keywords</div>
                    </div>
                </div>
                <div className="size- px-5 py-3.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-900/20 inline-flex flex-col justify-center items-center">
                    <div className="text-center justify-center text-slate-900 text-base font-semibold font-['IBM_Plex_Sans']">Clear All Filters</div>
                </div>
            </div>
            <div className="self-stretch pt-2 flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-gray-600 text-sm font-semibold font-['IBM_Plex_Sans']">Showing 0 of 0 current openings</div>
            </div>
            <div className="self-stretch px-8 pt-12 pb-9 bg-violet-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 flex flex-col justify-start items-start gap-2">
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-yellow-600 text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide">STATUS</div>
                </div>
                <div className="self-stretch pt-0.5 flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-slate-900 text-base font-semibold font-['IBM_Plex_Sans'] leading-7">There are currently no published openings.</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-gray-600 text-base font-normal font-['IBM_Plex_Sans'] leading-6">If new opportunities become available, they will be listed on this page. Every listed role will include a canonical job page with verified terms<br/>and a secure application route.</div>
                </div>
            </div>
        </div>
          </div>
    </div>
  );
}