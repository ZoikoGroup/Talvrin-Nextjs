import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "./shared";

export default function LatestReleasesSection() {
  return (
    <section id="latest-releases" className="scroll-mt-32 bg-surface py-20 sm:py-[76px]">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Latest Releases" title="No public release entries are available to display yet.">
            Talvrin publishes a release note only once it is validated against an approved Release
            Registry. Once entries exist, they&apos;ll appear here newest first — each with its
            release date, change type, affected area, scope and any required action.
          </SectionIntro>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mt-8 aspect-[1280/292] min-h-[200px] w-full overflow-hidden rounded-2xl border border-ink/25 bg-white"
        >
          <Image
            src="/images/resources/release-notes/release-notes-latest-team.webp"
            alt="A team gathered around a table discussing recent changes"
            fill
            sizes="(min-width: 1310px) 1280px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
