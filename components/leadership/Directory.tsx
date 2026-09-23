import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function Directory() {
  return (
    <section className="w-full bg-[#F6F5FB] py-20 lg:py-28">
      <Container className="max-w-[1320px]">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-wide text-[#6C5CE7] font-['IBM_Plex_Sans']">
              LEADERSHIP DIRECTORY
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 font-['IBM_Plex_Sans'] sm:text-4xl lg:text-5xl max-w-3xl">
              <span className="block whitespace-normal sm:whitespace-nowrap">
                Current leadership profiles are published
              </span>
              <span className="block whitespace-normal sm:whitespace-nowrap">
                only after approval.
              </span>
            </h2>
            <p className="mt-5 max-w-3xl text-sm sm:text-base text-[#5D5A72] font-['IBM_Plex_Sans'] leading-relaxed">
              <span className="block whitespace-normal sm:whitespace-nowrap">
                Every profile requires approved identity, role, entity scope, and biography before
              </span>
              <span className="block whitespace-normal sm:whitespace-nowrap">
                publication. No leader has an approved public record at this time.
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-12 w-full flex justify-center">
            <div className="relative aspect-[1084/320] w-full max-w-[1084px] overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-xs">
              <Image
                src="/Leadership/io.png"
                alt="Current leadership profiles"
                fill
                sizes="(min-width: 1024px) 1084px, 100vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
