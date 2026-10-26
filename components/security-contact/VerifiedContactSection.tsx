import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const governance = [
  "Every visible contact method comes from one approved Security Intake Channel Registry — never a guessed email, form, or provider URL.",
  "An unverified or retired channel is shown honestly and never rendered as active.",
  "No PGP key, hotline, bug-bounty program, or safe-harbor term appears without separately approved authority.",
];

export default function VerifiedContactSection() {
  return (
    <section id="contact-method" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[700px]">
          <SectionEyebrow>Verified Contact Method</SectionEyebrow>
          <SectionHeading>No approved security contact channel is connected for this build.</SectionHeading>
          <SectionLede>
            Rather than guess an email address, web form, or portal, this page shows that honestly. Once
            an approved Security Intake Channel Registry is connected, the verified channel will appear
            here with its purpose, authentication requirement, and secure-detail capability — never
            invented.
          </SectionLede>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mt-8 aspect-[900/231] w-full overflow-hidden rounded-[14px] border border-ink/12 bg-white"
        >
          <Image
            src={`${IMG}/security-contact-verified-contact-team.webp`}
            alt="Two colleagues in discussion in a bright office"
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.15} className="mt-8">
          <div className="rounded-xl border border-ink/10 bg-white px-[22.8px] pb-5 pt-7">
            <p className="text-xs font-bold uppercase tracking-[0.72px] text-muted">How this is governed</p>
            <ul className="mt-2 flex flex-col gap-2">
              {governance.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-[21.7px] text-ink">
                  <span aria-hidden="true" className="text-accent-violet">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
