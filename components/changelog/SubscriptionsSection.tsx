import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function SubscriptionsSection() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <SectionEyebrow tone="violet">Subscriptions &amp; Feeds</SectionEyebrow>
          <SectionHeading>No subscribe button until delivery is real.</SectionHeading>
          <p className="mt-4 max-w-[560px] text-base leading-6 text-slate-600">
            Email alerts, RSS or Atom feeds, and webhooks for changes aren&apos;t available yet.
            Check this page, or the affected documentation, for current guidance.
          </p>
        </Reveal>

        <Reveal
          delay={0.15}
          className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl sm:aspect-[640/203]"
        >
          <Image
            src="/images/developers/changelog/changelog-subscriptions-portrait.webp"
            alt="Colleague smiling in a bright office lobby"
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
