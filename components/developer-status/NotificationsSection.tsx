import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionHeading } from "./shared";

export default function NotificationsSection() {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <Container className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          {/* This dark section uses the lighter indigo the design calls for, not the shared violet. */}
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
            Status Notifications
          </p>
          <SectionHeading inverted>Subscriptions aren&apos;t available yet.</SectionHeading>
          <p className="mt-4 max-w-[520px] text-base leading-6 text-white/70">
            We won&apos;t collect contact details until status alerts can actually be delivered.
            When they launch, only working channels will be shown.
          </p>
        </Reveal>

        <Reveal
          delay={0.15}
          className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl bg-white/10 sm:aspect-[637/203]"
        >
          <Image
            src="/images/developers/developer-status/developer-status-notifications-analyst.webp"
            alt="Analyst walking outside an office building with a laptop"
            fill
            sizes="(min-width: 1024px) 637px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
