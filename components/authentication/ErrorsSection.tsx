import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const credentialIssues = [
  {
    title: "Credential missing",
    body: "Explain that authenticated access requires the approved proof method; link method setup.",
  },
  {
    title: "Credential invalid / malformed",
    body: "Show a safe generic message with a correction path — never echo credential or parser detail.",
  },
  {
    title: "Credential expired",
    body: "Explain expiry only where the method has expiry semantics, then route to renew.",
  },
  {
    title: "Credential revoked",
    body: "Explain access is no longer valid and route to the approved replacement process.",
  },
];

const serviceIssues = [
  {
    title: "Service unavailable",
    body: "Use the authoritative status handoff if mapped, with safe retry guidance.",
  },
  {
    title: "Rate / abuse control",
    body: "Shown only if documented, and always distinguished from an authentication rejection.",
  },
  {
    title: "Clock / signature mismatch",
    body: "Surfaced only if the method actually uses time or signature semantics.",
  },
  {
    title: "Docs source stale",
    body: "An explicit currentness warning replaces a silently outdated method description.",
  },
];

function IssueColumn({
  heading,
  headingClass,
  issues,
  delay,
}: {
  heading: string;
  headingClass: string;
  issues: { title: string; body: string }[];
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="overflow-hidden rounded-2xl border border-ink/10">
      <p className={`px-6 py-4 text-sm font-bold uppercase tracking-wide text-white ${headingClass}`}>
        {heading}
      </p>
      <ul className="bg-white px-6 pb-2">
        {issues.map((issue) => (
          <li key={issue.title} className="border-b border-ink/10 py-4 last:border-b-0">
            <h3 className="text-base font-bold text-ink">{issue.title}</h3>
            <p className="mt-1 text-sm leading-5 text-slate-600">{issue.body}</p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function ErrorsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="amber">Errors &amp; Recovery</SectionEyebrow>
          <SectionHeading>
            A credential problem is not the same as a permission, entitlement, or outage problem.
          </SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-6">
            Each failure class is diagnosed and communicated separately. None are ever labeled
            &ldquo;bad credentials&rdquo; by default.
          </SectionLede>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <IssueColumn
            heading="Credential-layer issues"
            headingClass="bg-accent-violet"
            issues={credentialIssues}
            delay={0}
          />

          <Reveal
            delay={0.15}
            className="relative aspect-[3/2] overflow-hidden rounded-2xl sm:order-last sm:col-span-2 sm:aspect-[16/7] lg:order-none lg:col-span-1 lg:aspect-auto"
          >
            <Image
              src="/images/developers/authentication/authentication-errors-notebook.webp"
              alt="Developer writing notes at a desk"
              fill
              sizes="(min-width: 1024px) 411px, 100vw"
              className="object-cover"
            />
          </Reveal>

          <IssueColumn
            heading="Service & data issues"
            headingClass="bg-green-600"
            issues={serviceIssues}
            delay={0.1}
          />
        </div>
      </Container>
    </section>
  );
}
