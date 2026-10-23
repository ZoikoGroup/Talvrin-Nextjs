import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const controls = [
  {
    title: "Authentication",
    body: "OAuth 2.0 authorization-code + PKCE for user-delegated access; short-lived tokens bound to audience, client and scope.",
  },
  {
    title: "Object authorization",
    body: "Every evidence, job and tenant object read or export is tested against broken object-level authorization.",
  },
  {
    title: "Transport & network",
    body: "TLS everywhere, a strict CORS allow-list, and SSRF defenses on any callback destination.",
  },
  {
    title: "Error safety",
    body: "Stable, non-secret reason codes; sensitive failures never leak credentials or internal detail.",
  },
  {
    title: "Replay & webhook safety",
    body: "Signed events, TTLs, clock-skew checks and idempotent replay prevention where webhooks are released.",
  },
  {
    title: "Rate & resource use",
    body: "Per-tenant and per-client quotas, bounded pagination and backoff — no denial of service via unbounded jobs.",
  },
];

export default function SecurityOperationsSection() {
  return (
    <section id="security-operations" className="scroll-mt-32 bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">Security &amp; operations</SectionEyebrow>
          <SectionHeading>
            Security and reliability are part of the product promise, not hidden infrastructure.
          </SectionHeading>
          <SectionLede>
            These are minimum design references for the eventual external perimeter — not claims
            that a certification or audit has already been obtained.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_285px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {controls.map((c, i) => (
              <Reveal
                key={c.title}
                as="article"
                delay={(i % 3) * 0.06}
                className="flex flex-col gap-2.5 rounded-2xl border border-ink/10 bg-white p-6"
              >
                <h3 className="text-base font-bold text-ink">{c.title}</h3>
                <p className="text-sm leading-[22px] text-slate-600">{c.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative hidden overflow-hidden rounded-2xl border border-ink/10 lg:block"
          >
            <Image
              src={`${IMG}/api-security-briefing.webp`}
              alt="Presenter speaking to colleagues in a meeting room"
              fill
              sizes="285px"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-6 rounded-xl border border-ink/10 bg-white px-5 py-4">
          <p className="text-[13px] font-bold leading-5 text-slate-600">
            <span className="text-ink">Design references:</span> OpenAPI Specification 3.1.1 ·
            OAuth Security BCP (IETF RFC 9700) · OWASP API Security Top 10 (2023) · WCAG 2.2 AA —
            implementation references, not certification claims.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
