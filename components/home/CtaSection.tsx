import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function CtaSection() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            See the evidence layer for yourself.
          </h2>
          <p className="max-w-xl text-sm text-slate-400 sm:text-base">
            Request access to explore how Talvrin turns raw market information into
            verifiable, sourced research.
          </p>
          <LinkButton href="/request-access" variant="onDark">
            Request Access
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}
