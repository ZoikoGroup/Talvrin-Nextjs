import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const states = [
  {
    label: "Deep Coverage",
    body: "High-confidence, production-supported research depth for the named category.",
  },
  { label: "Supported", body: "Production-supported but narrower in depth than Deep Coverage." },
  {
    label: "Limited / Beta",
    body: "Available with explicit, visible limitations near the category action.",
  },
  {
    label: "Planned",
    body: "Roadmap only — never presented as current coverage, with no clickable Explore action.",
  },
  {
    label: "Architecture-Ready",
    body: "Platform can support the category structurally; no public coverage claim implied.",
  },
];

export default function ReleasedCategoriesSection() {
  return (
    <section id="coverage-truth" className="scroll-mt-24 bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="violet">Released Asset Categories</SectionEyebrow>
          <SectionHeading inverted>
            Only categories confirmed by the Asset and Coverage registries appear here.
          </SectionHeading>
          <SectionLede inverted className="max-w-[820px] sm:text-base sm:leading-7">
            No public fund or other-asset category is currently released for Talvrin Markets. Rather
            than pad this page with generic ETF, mutual-fund, REIT, commodity, FX, crypto, or
            derivative content, the current state is stated plainly below.
          </SectionLede>
        </Reveal>

        {/* The design's banner box is 1279 x 288, so the frame keeps that exact
            ratio at every width. */}
        <Reveal
          delay={0.15}
          className="relative mt-9 aspect-[1279/288] w-full overflow-hidden rounded-2xl border border-white/20 bg-white/5"
        >
          <Image
            src="/images/markets/funds-other-assets/funds-released-categories-meeting.webp"
            alt="Colleagues talking together in a bright office meeting"
            fill
            sizes="(min-width: 1310px) 1279px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-xs font-bold uppercase tracking-wide text-white/50">
            Possible coverage states, when a category is released
          </p>
        </Reveal>

        <div className="mt-2">
          {states.map((state, index) => (
            <Reveal
              key={state.label}
              delay={index * 0.04}
              className="grid grid-cols-1 gap-3 border-b border-white/10 py-4 md:grid-cols-[176px_minmax(0,1fr)] md:items-center md:gap-4"
            >
              <span className="w-fit rounded-md border border-white/20 bg-white/5 px-4 py-1.5 text-center text-xs font-bold uppercase text-white md:w-full">
                {state.label}
              </span>
              <p className="text-base text-white/80">{state.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
