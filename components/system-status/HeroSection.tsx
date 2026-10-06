import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import StatusSourceCard from "./StatusSourceCard";
import { IMAGE_DIR } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-[103px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(800px 560px at 12% 0%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-8 xl:grid-cols-[minmax(0,712px)_minmax(0,552px)] xl:justify-between">
        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent-amber">Support</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.56px] text-white sm:text-5xl lg:text-6xl lg:leading-[61.6px]">
              System Status
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-[680px] text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              A public view of operational health, active incidents, and planned maintenance for
              approved Talvrin customer-facing services.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <StatusSourceCard />
          </Reveal>

          <Reveal delay={0.4}>
            <p className="max-w-[680px] text-sm leading-6 text-white/60">
              Operational status is separate from your account access, data entitlements, and
              feature or API lifecycle. Looking for developer API status specifically? See{" "}
              <Link href="/developers/status" className="text-white/90 hover:text-white hover:underline">
                Developer Status →
              </Link>
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[552/499] w-full max-w-[552px] overflow-hidden rounded-2xl bg-white lg:mx-0 lg:mt-1"
        >
          <Image
            src={`${IMAGE_DIR}/system-status-hero-meeting.webp`}
            alt="A team reviewing work together around a meeting table"
            fill
            priority
            sizes="(min-width: 1280px) 552px, (min-width: 1024px) 400px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
