import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import HelpSearch from "./HelpSearch";
import { IMAGE_DIR, outlineOnDark } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-[121px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(700px 500px at 12% 0%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 95% 100%, rgba(185,129,50,0.08), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,785px)_minmax(0,451px)] lg:justify-between">
        <div>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent-amber">
              Support / Help Center
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-6">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.56px] text-white sm:text-5xl lg:text-[56px] lg:leading-[61.6px]">
              Find the guidance you need to use Talvrin with confidence.
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="mt-6">
            <p className="max-w-[720px] text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Search approved help content or browse by topic to find guidance, fix a problem, and
              reach the right Support destination.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-8">
            <HelpSearch />
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-5 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <a href="#topics" className={outlineOnDark}>
              Browse help topics
            </a>
            <Link
              href="/support/contact-support"
              className="text-center text-[15px] font-semibold text-white/75 transition-colors hover:text-white"
            >
              or Contact Support →
            </Link>
          </Reveal>

          <Reveal delay={0.4} className="mt-7 max-w-[660px]">
            <p className="text-sm leading-6 text-white/60">
              Help content is maintained by Talvrin content and product owners. Feature availability
              and support channels follow current published product state.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[451/509] w-full max-w-[451px] overflow-hidden rounded-2xl bg-white lg:mx-0"
        >
          <Image
            src={`${IMAGE_DIR}/help-center-hero-handshake.webp`}
            alt="A smiling professional shaking hands with a colleague in a bright office"
            fill
            priority
            sizes="(min-width: 1024px) 451px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
