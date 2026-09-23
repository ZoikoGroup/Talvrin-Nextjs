export default function Navigation() {
  return (
    <div className="w-full  h-12 relative bg-white border-b-[0.80px] border-slate-900/10 overflow-hidden flex justify-center">
      <div className="w-[1440px] h-full relative shrink-0">
        <div className="w-[1320px] h-12 max-w-[1320px] px-14 left-[52.40px] top-0 absolute inline-flex justify-start items-start gap-1">
            <div className="self-stretch px-3.5 py-4 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-gray-600 text-sm font-semibold font-['IBM_Plex_Sans']">Mission</div>
            </div>
            <div className="self-stretch px-3.5 py-4 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-gray-600 text-sm font-semibold font-['IBM_Plex_Sans']">Principles</div>
            </div>
            <div className="self-stretch px-3.5 py-4 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-gray-600 text-sm font-semibold font-['IBM_Plex_Sans']">Open Roles</div>
            </div>
            <div className="self-stretch px-3.5 py-4 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-gray-600 text-sm font-semibold font-['IBM_Plex_Sans']">Candidate Support</div>
            </div>
            <div className="self-stretch px-3.5 py-4 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-gray-600 text-sm font-semibold font-['IBM_Plex_Sans']">FAQ</div>
            </div>
        </div>
          </div>
    </div>
  );
}