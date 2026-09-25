import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "./shared";

export default function DeveloperStatusSection() {
  return (
    <section className="bg-ink py-12 sm:py-16">
      <Container>
        <Reveal className="grid grid-cols-1 overflow-hidden rounded-2xl bg-[#1b1745] lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
          <div className="p-6 sm:p-8">
            <SectionEyebrow tone="violet">Developer Status</SectionEyebrow>
            <h2 className="mt-3 text-lg font-bold text-white">Not yet mapped to this method.</h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Status is linked only once the authentication service has an approved public status
              mapping. A released method can be temporarily degraded without being deprecated — the
              two facts are never conflated.
            </p>
          </div>

          <div className="relative aspect-[2/1] w-full lg:aspect-auto lg:min-h-[260px]">
            <Image
              src="/images/developers/authentication/authentication-developer-status-portrait.webp"
              alt="Colleague listening during a conversation in an office"
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
