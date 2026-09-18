import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-brand-tint to-white py-20 sm:py-28">
      <Container className="text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">
            The Evidence Layer for Global Public Markets
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            Research you can verify, at the speed markets move.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
            Talvrin brings evidence, monitoring, and AI assistance together so investment
            professionals can move from question to sourced answer in minutes, not days.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href="/request-access" variant="primary">
            Request Access
          </LinkButton>
          <LinkButton href="/product/platform-overview" variant="secondary">
            Explore the Platform
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}
