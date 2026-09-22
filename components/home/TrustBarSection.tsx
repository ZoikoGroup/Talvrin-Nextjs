import Reveal from "../ui/Reveal";

const features = [
  "SOURCE-LINKED",
  "TIME-AWARE",
  "JURISDICTION-AWARE",
  "GLOBAL-READY",
  "CONTINUOUSLY MONITORED",
  "AI-ASSISTED, NOT AI-AUTHORITATIVE",
];

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center gap-x-10 pr-10 sm:gap-x-12 sm:pr-12" aria-hidden="true">
      {features.map((feature) => (
        <div key={feature} className="flex items-center gap-x-10 sm:gap-x-12">
          <span className="whitespace-nowrap text-xs font-bold tracking-[1.2px] text-ink/80 sm:text-sm">
            {feature}
          </span>
          <span className="h-1 w-1 shrink-0 rounded-full bg-ink/30" />
        </div>
      ))}
    </div>
  );
}

export default function TrustBarSection() {
  return (
    <section className="relative overflow-hidden border-y border-ink/5 bg-white py-12 sm:py-10">
      <Reveal>
        <div className="sr-only">{features.join(" · ")}</div>
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <MarqueeTrack />
          <MarqueeTrack />
        </div>
      </Reveal>
    </section>
  );
}
