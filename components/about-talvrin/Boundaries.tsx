export default function Boundaries() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-0 flex flex-col items-start gap-3">
        
        {/* Section Tag */}
        <div className="w-full flex flex-col justify-start items-start">
          <span className="text-gray-600 text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide uppercase">
            BOUNDARIES
          </span>
        </div>

        {/* Heading */}
        <div className="w-full flex flex-col justify-start items-start">
          <h2 className="text-slate-900 text-4xl font-bold font-['IBM_Plex_Sans'] leading-[47.20px]">
            What Talvrin is not.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full pt-2 flex flex-col justify-start items-start">
          <p className="text-gray-600 text-base font-normal font-['IBM_Plex_Sans'] leading-7">
            Talvrin&apos;s boundaries are as important as its capabilities. It is designed as a research and market-intelligence platform, not as an<br />
            investment recommendation engine.
          </p>
        </div>

        {/* Boundary Cards Grid */}
        <div className="w-full pt-7 grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <div className="p-5 bg-violet-50 rounded-xl flex flex-col justify-start items-start">
            <p className="text-gray-600 text-base font-medium font-['IBM_Plex_Sans'] leading-6">
              Not a brokerage or trade-execution<br />
              platform.
            </p>
          </div>

          <div className="p-5 bg-violet-50 rounded-xl flex flex-col justify-start items-start">
            <p className="text-gray-600 text-base font-medium font-['IBM_Plex_Sans'] leading-6">
              Not a stock-tipping or social-trading<br />
              service.
            </p>
          </div>

          <div className="p-5 bg-violet-50 rounded-xl flex flex-col justify-start items-start">
            <p className="text-gray-600 text-base font-medium font-['IBM_Plex_Sans'] leading-6">
              Not a promise to predict markets or<br />
              eliminate uncertainty.
            </p>
          </div>

          <div className="p-5 bg-violet-50 rounded-xl flex flex-col justify-start items-start">
            <p className="text-gray-600 text-[15px] font-medium font-['IBM_Plex_Sans'] leading-6 tracking-tight">
              Not a source of guaranteed investment<br />
              outcomes.
            </p>
          </div>

          <div className="p-5 bg-violet-50 rounded-xl flex flex-col justify-start items-start">
            <p className="text-gray-600 text-[15px] font-medium font-['IBM_Plex_Sans'] leading-6 tracking-tight">
              Not a substitute for professional<br />
              judgment or appropriate regulated advice.
            </p>
          </div>

          <div className="p-5 bg-violet-50 rounded-xl flex flex-col justify-start items-start">
            <p className="text-gray-600 text-[15px] font-medium font-['IBM_Plex_Sans'] leading-6 tracking-tight">
              Not an AI system whose generated text<br />
              is treated as primary evidence.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}