import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const points = [
  {
    title: "Accountability before prominence",
    desc: (
      <span className="block whitespace-normal sm:whitespace-nowrap">
        Explain responsibility, not status.
      </span>
    ),
  },
  {
    title: "Evidence before assertion",
    desc: (
      <span className="block whitespace-normal sm:whitespace-nowrap">
        Publish only reviewable biographical and role information.
      </span>
    ),
  },
  {
    title: "Human judgment remains responsible",
    desc: (
      <>
        <span className="block whitespace-normal sm:whitespace-nowrap">
          AI may assist work but does not become the accountable
        </span>
        <span className="block whitespace-normal sm:whitespace-nowrap">
          decision-maker.
        </span>
      </>
    ),
  },
  {
    title: "Transparency before persuasion",
    desc: (
      <>
        <span className="block whitespace-normal sm:whitespace-nowrap">
          Correct uncertainty and changes instead of preserving stale
        </span>
        <span className="block whitespace-normal sm:whitespace-nowrap">
          claims.
        </span>
      </>
    ),
  },
];

export default function PublicResponsibility() {
  return (
    <section className="w-full bg-white py-20 lg:py-28 border-t border-slate-900/10">
      <Container className="max-w-[1320px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-wide text-[#6C5CE7] font-['IBM_Plex_Sans']">
                HOW LEADERSHIP IS REPRESENTED
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 font-['IBM_Plex_Sans'] sm:text-4xl lg:text-5xl">
                Public responsibility, kept
                <br />
                reviewable.
              </h2>
              <p className="mt-5 max-w-2xl text-sm sm:text-base text-[#5D5A72] font-['IBM_Plex_Sans'] leading-relaxed mb-10">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Talvrin leadership content should make public responsibility clear, keep material claims reviewable, and
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  preserve the distinction between evidence, generated interpretation, and human judgment.
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.2} className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {points.map((pt, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 font-['IBM_Plex_Sans']">
                      {pt.title}
                    </h3>
                    <div className="text-xs sm:text-sm text-[#5D5A72] font-['IBM_Plex_Sans'] leading-relaxed">
                      {pt.desc}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <Reveal delay={0.4} className="w-full max-w-[460px]">
              <div className="relative aspect-[392/357] w-full overflow-hidden rounded-2xl border border-slate-900/10 shadow-xs">
                <Image
                  src="/Leadership/image 98 (1).png"
                  alt="How leadership is represented"
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
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
