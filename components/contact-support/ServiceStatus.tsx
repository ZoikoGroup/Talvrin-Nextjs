export default function ServiceStatus() {
  return (
    <section
      className="
        w-full
        border-b
        border-slate-900/10
        bg-white
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1200px]
          flex-col
          items-start
          gap-3.5
          px-5
          py-7

          sm:px-8

          lg:px-8
          xl:px-0
        "
      >
        {/* Status Badge */}
        <div className="flex flex-col items-start pt-0.5">
          <div
            className="
              flex
              items-center
              rounded-[99px]
              bg-yellow-600/10
              px-2.5
              py-[5px]
            "
          >
            <span
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                leading-[14px]
                tracking-wide
                text-yellow-800
              "
            >
              STATUS NOT PUBLISHED
            </span>
          </div>
        </div>

        {/* Status Description */}
        <div className="flex w-full flex-col items-start pr-0 lg:pr-2">
          <p
            className="
              max-w-[1200px]
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-gray-600
            "
          >
            A dedicated Service Status page is not yet available on this
            build. If a current outage may explain your issue, describe what
            you&apos;re seeing in your support request below rather than
            assuming a known incident.
          </p>
        </div>
      </div>
    </section>
  );
}