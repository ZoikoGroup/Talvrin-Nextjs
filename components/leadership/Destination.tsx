import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const destinations = [
  {
    tag: "RECRUITMENT",
    title: "Explore Careers",
    href: "/careers",
  },
  {
    tag: "MEDIA",
    title: "Press and Media",
    href: "/request-access",
  },
  {
    tag: "ENQUIRY",
    title: "Contact Talvrin",
    href: "/request-access",
  },
];

export default function Destination() {
  return (
    <section className="w-full bg-[#F6F5FB] py-20 lg:py-28 border-y border-slate-900/10">
      <Container className="max-w-[1320px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-wide text-[#6C5CE7] font-['IBM_Plex_Sans']">
                CONTINUE WITH THE RIGHT TEAM
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 font-['IBM_Plex_Sans'] sm:text-4xl lg:text-5xl max-w-xl">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Use the destination that matches
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  your purpose.
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-sm sm:text-base text-[#5D5A72] font-['IBM_Plex_Sans'] leading-relaxed mb-10">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Leadership profiles do not publish personal contact information unless specifically
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  approved.
                </span>
              </p>
            </Reveal>

            {/* 3 Cards */}
            <Reveal delay={0.2} className="w-full">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                {destinations.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex flex-col justify-between gap-3 p-5 sm:p-6 bg-white outline outline-1 outline-offset-[-1px] outline-slate-900/10 rounded-2xl flex-1 shadow-xs hover:shadow-md transition-shadow group"
                  >
                    <p className="text-xs font-bold text-[#B98132] font-['IBM_Plex_Sans'] tracking-wider uppercase">
                      {item.tag}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#171335] font-['IBM_Plex_Sans'] group-hover:text-[#6C5CE7] transition-colors flex items-center gap-1.5">
                      <span>{item.title}</span>
                      <span aria-hidden="true">→</span>
                    </p>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: 411px Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <Reveal delay={0.4} className="w-full max-w-[411px]">
              <div className="relative aspect-[411/341] w-full max-w-[411px] overflow-hidden rounded-2xl border border-slate-900/10 shadow-xs bg-white">
                <Image
                  src="/Leadership/image 100 (1).png"
                  alt="Continue with the right team"
                  fill
                  sizes="(min-width: 1024px) 411px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
