import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "./shared";

export default function PermissionsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <Reveal className="flex flex-col gap-3 rounded-2xl bg-surface p-6 sm:p-8">
            <SectionEyebrow tone="amber">Permissions &amp; Security</SectionEyebrow>
            <h3 className="text-xl font-bold text-ink">Least privilege, not assumed trust.</h3>
            <p className="text-base leading-6 text-slate-600">
              Every requested permission will map to a documented capability or operational reason,
              shown before authorization — never preselected or bundled. Credentials, tokens, and
              connection identifiers will never appear in analytics, client logs, or public error
              text.
            </p>
            <p className="mt-auto pt-1.5 text-sm font-semibold text-accent-violet">
              Authentication (not yet released)
            </p>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-3 rounded-2xl bg-surface p-6 sm:p-8">
            <SectionEyebrow tone="violet">Lifecycle, Version &amp; Operations</SectionEyebrow>
            <h3 className="text-xl font-bold text-ink">
              Connection state shown only when it&apos;s real.
            </h3>
            <p className="text-base leading-6 text-slate-600">
              Once an integration is released, its lifecycle state, contract version, and
              operational status will stay visible in its catalog card and profile — with deprecated
              or withdrawn integrations losing their Connect action, never just a color change.
            </p>
            <p className="mt-auto pt-1.5 text-sm font-semibold text-accent-violet">
              Developer Status (not yet released)
            </p>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative aspect-[406/363] w-full overflow-hidden rounded-2xl bg-surface lg:aspect-auto"
          >
            <Image
              src="/images/developers/integrations/integrations-permissions-team.webp"
              alt="Team reviewing dashboards together at a standing desk"
              fill
              sizes="(min-width: 1024px) 406px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-6 flex flex-col gap-3 rounded-2xl bg-surface p-6 sm:p-8">
          <SectionEyebrow tone="amber">Change Communication &amp; Disconnection</SectionEyebrow>
          <h3 className="text-xl font-bold text-ink">
            No fabricated uptime — and disconnect is never hidden.
          </h3>
          <p className="max-w-[880px] text-base leading-6 text-slate-600">
            A public Developer Status source is not currently available, so no integration here
            carries an operational badge. Once one exists, this catalog will link to it directly.
            Disconnecting a connection will always be discoverable in-product and its effect
            explained — it will never require contacting sales unless a genuine contractual process
            applies.
          </p>
          <Link
            href="/resources/contact-support"
            className="pt-1.5 text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
          >
            Contact Support →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
