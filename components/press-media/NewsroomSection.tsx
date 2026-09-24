import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function NewsroomSection() {
  return (
    <section id="newsroom" className="scroll-mt-32 bg-surface py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,760px)_minmax(0,494px)] lg:gap-12">
        <div>
          <Reveal>
            <SectionEyebrow tone="violet">Latest from the Newsroom</SectionEyebrow>
            <SectionHeading>
              Read approved Talvrin updates and source-linked perspectives.
            </SectionHeading>
          </Reveal>

          <Reveal
            delay={0.1}
            className="mt-6 rounded-2xl border border-ink/10 bg-white px-6 pb-9 pt-10 sm:px-8 sm:pt-12"
          >
            <SectionEyebrow tone="amber">Status</SectionEyebrow>
            <p className="mt-2 text-base font-semibold leading-7 text-ink">
              No Newsroom publications are currently available to feature here.
            </p>
            <p className="mt-1 text-base leading-6 text-slate-600">
              Canonical Talvrin publications, with visible dates and sources, appear in the
              Newsroom once approved.
            </p>
            <Link
              href="/company/newsroom"
              className="mt-4 inline-block text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
            >
              View All Newsroom Publications →
            </Link>
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="relative aspect-[494/341] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/company/press-media/press-media-newsroom-reporters.webp"
            alt="Reporters with cameras and microphones at a media event"
            fill
            sizes="(min-width: 1024px) 494px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
