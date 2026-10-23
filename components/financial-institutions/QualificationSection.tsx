import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const stages = [
  {
    title: "1. Explore",
    body: "Research proposition, Source Methodology, relevant guide and high-level supported scope.",
    owner: "Product owner ensures public claim truth.",
  },
  {
    title: "2. Qualify",
    body: "Enquiry collects high-level needs: markets, team function, integration, geography and usage.",
    owner: "Commercial intake — no automatic acceptance.",
  },
  {
    title: "3. Assess",
    body: "Nonpublic scope check against current product release, data rights, regional suitability and security posture.",
    owner: "Product, rights, security and legal signoff.",
  },
  {
    title: "4. Demonstrate",
    body: "Approved product demo or synthetic evidence specimen — no fabricated live capabilities.",
    owner: "Sales engineering owns approved demo content.",
  },
  {
    title: "5. Contract",
    body: "Data licences, entitlements, terms, privacy/security schedules, usage policy and support model.",
    owner: "Legal / procurement / commercial owners.",
  },
];

const routes = [
  { need: "Company-wide commercial model", label: "Enterprise", href: "/solutions/enterprise" },
  {
    need: "A single institution’s asset-management team",
    label: "Asset Managers",
    href: "/asset-managers",
  },
  {
    need: "Advisory service research context",
    label: "Wealth & Advisory Research",
    href: "/solutions/wealth-advisory-research",
  },
  {
    need: "Evidence quality or integrity questions",
    label: "Source Methodology",
    href: "/research/source-methodology",
  },
  {
    need: "Approved API, SSO or integrations",
    label: "API & Integrations",
    href: "/resources/api-integrations",
  },
  { need: "Policy, privacy or legal issues", label: "Legal & Policies", href: "/company/legal" },
];

export default function QualificationSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow>Institutional qualification</SectionEyebrow>
          <SectionHeading>A gateway to diligence — never an automatic approval.</SectionHeading>
          <SectionLede>
            Six stages take a conversation from first interest to entitled access, each with a
            named responsible owner.
          </SectionLede>
        </Reveal>

        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {stages.map((s, i) => (
            <Reveal
              key={s.title}
              as="li"
              delay={i * 0.05}
              className="flex flex-col rounded-2xl border border-ink/10 bg-white p-5"
            >
              <p className="text-xs font-bold tracking-wide text-accent-amber">{s.title}</p>
              <p className="mt-2 flex-1 border-b border-ink/10 pb-3 text-[13px] leading-5 text-ink-soft">
                {s.body}
              </p>
              <p className="mt-3 text-xs leading-[18px] text-slate-600">{s.owner}</p>
            </Reveal>
          ))}
          <Reveal
            as="li"
            delay={0.3}
            className="relative hidden overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src={`${IMG}/fi-qualification-boardroom.webp`}
              alt="Professional standing at the head of a boardroom table"
              fill
              sizes="200px"
              className="object-cover"
            />
          </Reveal>
        </ol>

        <Reveal delay={0.1} className="mt-14">
          <p className="text-xs font-bold uppercase tracking-wide text-ink">
            Not what you need? Route to the right page
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {routes.map((r) => (
              <li key={r.need}>
                <Link
                  href={r.href}
                  className="group flex h-full flex-col gap-1 rounded-xl border border-ink/10 bg-white px-5 py-4 transition-colors hover:border-accent-violet/40"
                >
                  <span className="text-sm font-bold text-ink">{r.need}</span>
                  <span className="text-[13px] text-accent-violet group-hover:underline">
                    {r.label} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 rounded-2xl border border-ink/10 bg-white px-6 py-6">
          <p className="text-xs font-bold uppercase tracking-wide text-pink-800">
            Transaction boundary
          </p>
          <p className="mt-2 text-sm leading-[22px] text-slate-600">
            No &ldquo;get instant institutional account&rdquo; promise unless identity, pricing,
            data rights, entitlements, terms, payment and tenant provisioning have all been verified
            and operationally approved.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
