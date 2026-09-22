export default function Hero() {
  return (
    <div className="w-full  h-[710px] relative bg-slate-900 overflow-hidden flex justify-center">
      <div className="w-[1440px] h-full relative shrink-0">
            <div className="w-[1439.80px] h-[710.10px] left-0 top-0 absolute bg-radial-[at_12%_0%] from-indigo-500/20 to-indigo-500/0 to 65%" />
            <div className="w-[784.80px] left-[84px] top-[131.90px] absolute inline-flex flex-col justify-start items-start gap-6">
                <div className="self-stretch justify-center text-yellow-600 text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide">ZOIKO FINANCIAL GROUP</div>
                <div className="self-stretch justify-center text-violet-50 text-6xl font-bold font-['IBM_Plex_Sans'] leading-[61.60px]">Parent organization of<br/>Zoiko Markets.</div>
                <div className="justify-center text-violet-50/90 text-lg font-semibold font-['IBM_Plex_Sans'] leading-8">Zoiko Financial Group is the parent organization of Zoiko Markets. Talvrin is a<br/>trading name of Zoiko Markets.</div>
                <div className="justify-center text-violet-50/70 text-lg font-normal font-['IBM_Plex_Sans'] leading-7">This page explains that verified corporate relationship and provides routes to the<br/>company and product information connected to it.</div>
                <div className="size- inline-flex justify-start items-center gap-4">
                    <div className="size- px-7 py-4 bg-violet-50 rounded-lg inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-slate-900 text-base font-semibold font-['IBM_Plex_Sans']">About Zoiko Markets</div>
                    </div>
                    <div className="size- px-7 py-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-violet-50/30 inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-violet-50 text-base font-semibold font-['IBM_Plex_Sans']">Explore Talvrin</div>
                    </div>
                    <div className="size- inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-indigo-300 text-base font-semibold font-['IBM_Plex_Sans']">Contact Talvrin <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-1 -mt-0.5 shrink-0"><path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                    </div>
                </div>
            </div>
            <div className="w-[491px] h-96 left-[868.80px] top-[122px] absolute bg-white rounded-2xl overflow-hidden">
                <img className="w-[491px] h-[614px] left-[0.20px] top-[-89px] absolute object-cover" src="/zoiko-financial-group/image 90 (1).png" />
            </div>
              </div>
    </div>
  );
}