import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import IssuePicker from "./IssuePicker";

const IMAGE_DIR = "/images/support/account-support";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-[116px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(800px 600px at 12% 0%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%)",
        }}
      />
      <Container className="relative">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,761px)_minmax(0,461px)] lg:justify-between">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent-amber">
                Account Support
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-6">
              <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.56px] text-white sm:text-5xl lg:text-6xl lg:leading-[61.6px]">
                Get help with account access and account issues.
              </h1>
            </Reveal>

            <Reveal delay={0.2} className="mt-6">
              <p className="max-w-[720px] text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                Get help with account access and account-related issues through the safest currently
                approved path. This page routes your issue — it does not collect credentials or act as
                a sign-in system.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-6">
              <div
                role="note"
                className="flex max-w-[720px] items-start gap-3 rounded-xl border border-white/18 bg-white/8 px-5 py-4"
              >
                <span aria-hidden="true" className="pt-px text-white">
                  ⚑
                </span>
                <p className="text-[15px] leading-6 text-white sm:text-base">
                  <strong className="font-bold">
                    Never share your password, verification codes, recovery codes, API secrets, or
                    private keys
                  </strong>{" "}
                  with support. We will never ask you for them here.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={0.2}
            className="relative mx-auto aspect-[461/384] w-full max-w-[461px] overflow-hidden rounded-2xl bg-white lg:mx-0"
          >
            <Image
              src={`${IMAGE_DIR}/account-support-hero-handshake.webp`}
              alt="Two colleagues exchanging a document in an office"
              fill
              priority
              sizes="(min-width: 1024px) 461px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.35} className="mt-12">
          <IssuePicker
            media={
              <div className="relative mt-8 aspect-[1268/432] min-h-[200px] w-full overflow-hidden rounded-[10px] border border-white/18 bg-white/4">
                <Image
                  src={`${IMAGE_DIR}/account-support-team-briefing.webp`}
                  alt="A presenter sharing a chart on a tablet with colleagues around a meeting table"
                  fill
                  sizes="(min-width: 1310px) 1268px, 100vw"
                  className="object-cover"
                />
              </div>
            }
          />
        </Reveal>
      </Container>
    </section>
  );
}
