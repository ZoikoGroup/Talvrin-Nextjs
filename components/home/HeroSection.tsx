import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <Image
        src="/images/home/home-hero-background.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,580px)_minmax(0,560px)] lg:gap-x-12">
        <div>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent-amber">
              Evidence-led research for global public markets
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[44px]">
              See the evidence.
              <br />
              Before you trust the view.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg text-white/72">
              Talvrin brings source-linked market evidence, research, and continuous monitoring
              into one workspace — helping investors and finance professionals reach defensible
              conclusions faster and see when the underlying evidence changes.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <LinkButton href="/request-access" variant="brand">
              Request Access
            </LinkButton>
            <LinkButton href="/sign-in" variant="onDark">
              Sign In
            </LinkButton>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 text-sm text-white/50">
              Research and intelligence. No trade execution. No stock tips.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Image
            src="/images/home/home-hero-workspace-mockup.png"
            alt="Talvrin research workspace answering &ldquo;What changed in Apple's latest filing?&rdquo; with source-verified evidence"
            width={672}
            height={448}
            priority
            className="h-auto w-full"
          />
        </Reveal>
      </Container>
    </section>
  );
}
