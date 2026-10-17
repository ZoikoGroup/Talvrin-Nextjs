import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

export default function SavedResearchSection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow>Research / Saved Research Handoff</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[640px]">
            Return to a saved U.K. Gilts research view, with changes clearly
            surfaced.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600 sm:text-lg">
            A saved research view keeps its source-linked state so unknown or
            outdated evidence is never silently presented as current. This page
            explains the handoff; the authenticated Research Workspace owns the
            actual saved object.
          </p>
        </Reveal>

        <Reveal
          delay={0.25}
          className="mt-8 rounded-2xl border border-ink/10 bg-white px-6 py-6 sm:mt-10 sm:px-7"
        >
          <p className="text-sm leading-6 text-gray-600">
            Saved Research does not claim autosave, guaranteed persistence, or
            export rights beyond what the authenticated product grants.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            href="/product/saved-research"
            className="mt-8 inline-block text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
          >
            Learn About Saved Research →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
