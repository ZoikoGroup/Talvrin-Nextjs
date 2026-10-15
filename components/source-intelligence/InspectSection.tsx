import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const surfaces = [
  {
    title: "Preview surface",
    shows: "The rendered source, an approved excerpt, or a metadata-only view depending on rights.",
    fallback: "Metadata and access state stay visible; restricted content never appears in the DOM.",
  },
  {
    title: "Citation strip",
    shows: "Original title, publisher, publication date and version alongside the preview.",
    fallback: "Fields show “Not provided” rather than a placeholder that looks confirmed.",
  },
  {
    title: "Permission state",
    shows: "Public, permitted, restricted or unavailable — stated plainly before any content loads.",
    fallback: "A rights-safe explanation replaces the content, never a broken or empty-looking panel.",
  },
];

export default function InspectSection() {
  return (
    <section className="bg-ink py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Inspect the Evidence</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading inverted className="max-w-[800px]">
            Opening a source should feel like reading it, not guessing at it.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-white/70">
            Where rights permit, a researcher moves from interpretation to the
            original material. Where they do not, Talvrin shows the permitted
            metadata and nothing more.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {surfaces.map((surface, index) => (
            <Reveal
              key={surface.title}
              delay={0.05 * (index + 2)}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-base font-bold text-white">{surface.title}</h3>
              <p className="mt-3 text-xs font-bold tracking-wide text-indigo-300">SHOWS</p>
              <p className="mt-1 text-sm leading-5 text-white/70">{surface.shows}</p>
              <p className="mt-3 text-xs font-bold tracking-wide text-white/40">IF UNAVAILABLE</p>
              <p className="mt-1 text-sm leading-5 text-white/60">{surface.fallback}</p>
            </Reveal>
          ))}
          <Reveal
            delay={0.3}
            className="relative aspect-[315/257] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:aspect-auto lg:min-h-[257px]"
          >
            <Image
              src="/images/product/source-intelligence/source-intelligence-inspect-presentation.webp"
              alt="Presenter walking colleagues through a screen in a bright meeting room"
              fill
              sizes="(min-width: 1024px) 315px, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
