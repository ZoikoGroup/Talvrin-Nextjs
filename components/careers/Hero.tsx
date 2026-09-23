export default function Hero() {
  return (
    <div className="w-full  h-[591px] relative bg-slate-900 overflow-hidden flex justify-center">
      <div className="w-[1440px] h-full relative shrink-0">
        <div className="w-[1439.80px] h-[590.50px] left-0 top-0 absolute bg-radial-[at_12%_0%] from-indigo-500/20 to-indigo-500/0 to 65%" />
        <div className="w-[720.40px] left-[80px] top-[157px] absolute inline-flex flex-col justify-start items-start gap-6">
            <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-yellow-600 text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide">CAREERS</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-violet-50 text-6xl font-bold font-['IBM_Plex_Sans'] leading-[61.60px]">Careers at Talvrin</div>
            </div>
            <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
                <div className="justify-center text-violet-50/90 text-lg font-normal font-['IBM_Plex_Sans'] leading-8">Help build a source-linked research and monitoring platform designed to make<br/>public-market evidence easier to find, understand, verify, and continuously monitor.</div>
            </div>
            <div className="self-stretch pt-2 inline-flex justify-start items-center gap-4">
                <div className="size- px-7 py-4 bg-violet-50 rounded-lg inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-slate-900 text-base font-semibold font-['IBM_Plex_Sans']">View Open Roles</div>
                </div>
                <div className="size- inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-indigo-300 text-base font-semibold font-['IBM_Plex_Sans']">About Talvrin <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-1 -mt-0.5 shrink-0"><path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                </div>
            </div>
        </div>
        <div className="w-[494px] h-96 left-[866px] top-[115.50px] absolute bg-white rounded-2xl overflow-hidden">
            <img className="w-[537px] h-96 left-[-21px] top-[0.50px] absolute object-cover" src="/Careers/image 102 (1).png" />
        </div>
          </div>
    </div>
  );
}