import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG } from "./shared";

export default function AuthorityBoundaries() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,640px)_minmax(0,640px)] lg:justify-between lg:gap-10">
        <Reveal>
          <p className="text-[13px] font-bold uppercase tracking-[1.04px] text-accent-amber">
            Authority &amp; Boundaries
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[32px] lg:text-[38px] lg:leading-[44.84px]">
            This page is not a client roster.
          </h2>
          <p className="mt-2 text-base leading-7 text-muted lg:text-[17px] lg:leading-[27.2px]">
            Global Institutions describes how Talvrin&rsquo;s evidence architecture is designed to
            support institutional research — not which institutions currently use it. No client
            names, logos, counts or awards appear here unless individually cleared for
            publication. What an organization can actually access is governed case by case, and
            stated plainly rather than implied.
          </p>
        </Reveal>

        <Reveal
          delay={0.15}
          className="relative aspect-[640/274.6] w-full overflow-hidden rounded-2xl bg-surface"
        >
          <Image
            src={`${IMG}/global-institutions-authority-boundaries-team.webp`}
            alt="Colleagues collaborating around a laptop in an office"
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
