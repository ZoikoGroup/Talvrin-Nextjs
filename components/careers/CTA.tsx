export default function CTA() {
  return (
    <div className="w-full  h-[506.70px] relative bg-violet-50 border-t-[0.80px] border-slate-900/10 flex justify-center">
      <div className="w-[1440px] h-full relative shrink-0">
        <div className="w-[680px] max-w-[680px] pb-[0.80px] left-[372.40px] top-[88.80px] absolute inline-flex flex-col justify-start items-center gap-4">
            <div className="self-stretch flex flex-col justify-start items-center">
                <div className="text-center justify-center text-indigo-500 text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide">EXPLORE THE RIGHT NEXT STEP</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-center">
                <div className="text-center justify-center text-slate-900 text-4xl font-bold font-['IBM_Plex_Sans'] leading-10">Review current opportunities,<br/>understand the company behind<br/>Talvrin, or use the approved<br/>candidate-support route.</div>
            </div>
            <div className="self-stretch pt-[2.70px] pb-2 inline-flex justify-center items-start gap-4">
                <div className="self-stretch px-7 py-4 bg-slate-900 rounded-lg inline-flex flex-col justify-start items-center">
                    <div className="text-center justify-center text-violet-50 text-base font-semibold font-['IBM_Plex_Sans']">View Open Roles</div>
                </div>
                <div className="self-stretch px-7 py-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-900/25 inline-flex flex-col justify-start items-center">
                    <div className="text-center justify-center text-slate-900 text-base font-semibold font-['IBM_Plex_Sans']">About Zoiko Markets</div>
                </div>
            </div>
            <div className="text-center justify-center text-indigo-500 text-sm font-semibold font-['IBM_Plex_Sans']">Candidate Support <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-1 -mt-0.5 shrink-0"><path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
        </div>
          </div>
    </div>
  );
}
