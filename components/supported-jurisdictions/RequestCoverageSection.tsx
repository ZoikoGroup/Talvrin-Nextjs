import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow } from "./shared";

export default function RequestCoverageSection() {
  return (
    <section id="request-coverage" className="scroll-mt-24 bg-ink py-16 sm:py-20">
      <Container>
        <Reveal className="mx-auto flex max-w-[720px] flex-col items-center gap-4 text-center">
          <SectionEyebrow>Request coverage</SectionEyebrow>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Interested in a jurisdiction not listed?
          </h2>
          <p className="text-base leading-6 text-white/70">
            Tell us which jurisdiction matters to your research. Submitting interest qualifies it
            for review — it does not reserve a place in a future release or promise a go-live date.
          </p>
          <LinkButton href="/company/contact" variant="onDark" className="mt-3 px-7 py-[15px] text-base">
            Request a Coverage Discussion
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}
