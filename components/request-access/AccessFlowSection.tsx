"use client";

import { FormEvent, ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

type PathId = "self-directed" | "professional" | "other" | "research-team";

type AccessPath = {
  id: PathId;
  title: string;
  description: string;
  /** Whether the form asks for an organization, and whether it's required. */
  organization?: "optional" | "required";
  emailHint: string;
};

const paths: AccessPath[] = [
  {
    id: "self-directed",
    title: "Self-Directed Investor",
    description: "Personal, evidence-led public-market research.",
    emailHint: "A personal email is accepted — Talvrin serves self-directed investors, not only business users.",
  },
  {
    id: "professional",
    title: "Investment Professional",
    description: "Professional research and analysis workflows.",
    organization: "optional",
    emailHint: "A work email helps us route your request, but a personal email is also accepted.",
  },
  {
    id: "other",
    title: "Other",
    description: "Not sure, or an emerging use case.",
    emailHint: "Any email you regularly check is fine.",
  },
  {
    id: "research-team",
    title: "Research Team",
    description: "Collaborative research and shared institutional memory.",
    organization: "required",
    emailHint: "Use the email of the person coordinating your team's request.",
  },
];

type SubmitStatus =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent"; reference: string }
  | { state: "error"; message: string };

const fieldClass =
  "w-full rounded-lg border border-ink/20 bg-surface px-3.5 py-3 text-base text-ink placeholder:text-neutral-500 focus:border-ink/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet/40";

function Field({
  id,
  label,
  required,
  optional,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
        {required && " *"}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {children}
    </div>
  );
}

export default function AccessFlowSection() {
  const [pathId, setPathId] = useState<PathId>("self-directed");
  const [status, setStatus] = useState<SubmitStatus>({ state: "idle" });
  const path = paths.find((p) => p.id === pathId) ?? paths[0];
  const sending = status.state === "sending";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const text = (key: string) => String(data.get(key) ?? "").trim();

    setStatus({ state: "sending" });
    try {
      const response = await fetch("/api/request-access", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          path: pathId,
          name: text("name"),
          email: text("email"),
          organization: text("organization"),
          country: text("country"),
          use: text("use"),
          privacy: data.get("privacy") === "on",
          updates: data.get("updates") === "on",
          website: text("website"),
        }),
      });
      const result = (await response.json().catch(() => ({}))) as {
        reference?: string;
        safeMessage?: string;
      };
      if (!response.ok || !result.reference) {
        setStatus({
          state: "error",
          message: result.safeMessage ?? "We couldn't send your request. Please try again in a few minutes.",
        });
        return;
      }
      form.reset();
      setStatus({ state: "sent", reference: result.reference });
    } catch {
      setStatus({
        state: "error",
        message: "We couldn't reach the server. Check your connection and try again.",
      });
    }
  }

  return (
    <>
      <section id="choose-path" className="scroll-mt-32 bg-surface py-20 sm:py-24">
        <Container className="max-w-[1032px]">
          <Reveal>
            <SectionEyebrow tone="amber">Audience &amp; Routing</SectionEyebrow>
            <SectionHeading>Choose your access path.</SectionHeading>
            <SectionLede>
              Your choice updates the form below so it only asks what&apos;s actually needed for your route. You
              can change it at any time.
            </SectionLede>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,493px)]">
            <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <legend className="sr-only">Access path</legend>
              {paths.map((option) => {
                const selected = option.id === pathId;
                return (
                  <label
                    key={option.id}
                    className={clsx(
                      "flex cursor-pointer flex-col gap-2 rounded-xl border bg-white p-5 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent-violet/40",
                      selected ? "border-accent-violet" : "border-ink/10 hover:border-ink/25"
                    )}
                  >
                    <span className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        name="access-path"
                        value={option.id}
                        checked={selected}
                        onChange={() => {
                          setPathId(option.id);
                          setStatus({ state: "idle" });
                        }}
                        className="size-4 shrink-0 accent-accent-violet"
                      />
                      <span className="text-base font-bold text-ink">{option.title}</span>
                    </span>
                    <span className="text-xs leading-5 text-muted">{option.description}</span>
                  </label>
                );
              })}
            </fieldset>

            <Reveal
              delay={0.15}
              className="relative min-h-[240px] overflow-hidden rounded-xl border border-ink/10 bg-white"
            >
              <Image
                src={`${IMG}/request-access-path-boardroom.png`}
                alt="Colleagues reviewing documents together in a city-view meeting room"
                fill
                sizes="(min-width: 1024px) 493px, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="request-form" className="scroll-mt-32 bg-white py-20 sm:py-24">
        <Container className="grid max-w-[1132px] grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,720px)_minmax(0,340px)] lg:justify-between">
          <div>
            <Reveal>
              <SectionEyebrow>Request Access</SectionEyebrow>
              <SectionHeading>Tell us how you plan to use Talvrin.</SectionHeading>
              <p className="mt-4 max-w-[680px] text-base leading-6 text-muted">
                Access is currently controlled. Submitting this form starts a qualification review — it does not
                guarantee approval or a response time.
              </p>
            </Reveal>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
              <p className="text-xs text-muted">
                Fields marked with an asterisk (*) are required. Selected path:{" "}
                <strong className="font-bold text-ink">{path.title}</strong> —{" "}
                <a href="#choose-path" className="text-accent-violet hover:underline">
                  change
                </a>
                .
              </p>

              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field id="access-name" label="Name" required>
                    <input id="access-name" name="name" type="text" required autoComplete="name" className={fieldClass} />
                  </Field>
                  <Field id="access-email" label="Email" required>
                    <input
                      id="access-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="Personal or work email"
                      className={fieldClass}
                    />
                  </Field>
                </div>
                <p className="text-xs text-muted">{path.emailHint}</p>
              </div>

              {path.organization && (
                <Field
                  id="access-organization"
                  label="Organization"
                  required={path.organization === "required"}
                  optional={path.organization === "optional"}
                >
                  <input
                    id="access-organization"
                    name="organization"
                    type="text"
                    required={path.organization === "required"}
                    autoComplete="organization"
                    className={fieldClass}
                  />
                </Field>
              )}

              <Field id="access-country" label="Country or region" optional>
                <input id="access-country" name="country" type="text" autoComplete="country-name" className={fieldClass} />
              </Field>

              <div className="flex flex-col gap-1.5">
                <Field id="access-use" label="What would you use Talvrin for?" optional>
                  <textarea
                    id="access-use"
                    name="use"
                    rows={3}
                    placeholder="A short, plain-language description."
                    className={fieldClass}
                  />
                </Field>
                <p className="text-xs text-muted">
                  Never include portfolio size, holdings, net worth, or other financial-profile data — it isn&apos;t
                  needed to request access.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <label className="flex items-start gap-2.5 text-sm leading-5 text-ink">
                  <input type="checkbox" name="privacy" required className="mt-0.5 size-4 shrink-0 accent-ink" />
                  <span>
                    I have read the{" "}
                    <Link href="/legal/privacy-notice" className="text-accent-violet hover:underline">
                      Privacy Notice
                    </Link>
                    . *
                  </span>
                </label>
                <label className="flex items-start gap-2.5 text-sm leading-5 text-muted">
                  <input type="checkbox" name="updates" className="mt-0.5 size-4 shrink-0 accent-ink" />
                  Send me occasional Talvrin updates (optional — not required to request access).
                </label>
              </div>

              {/* Honeypot for bots; hidden from people and assistive tech. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="access-website">Website</label>
                <input id="access-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="flex flex-col gap-2 rounded-xl border border-ink/10 bg-surface px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.6px] text-muted">Why we ask</p>
                <p className="text-sm leading-6 text-ink">
                  Name and email let us respond and, if approved, provision access. Everything else exists only to
                  route your request to the right path — none of it is used to gatekeep theater, and none of it
                  reaches analytics as entered text.
                </p>
              </div>

              <div className="flex flex-col items-stretch gap-4 pt-1 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={sending}
                  aria-busy={sending}
                  className="rounded-lg bg-ink px-6 py-3.5 text-base font-semibold text-surface transition-colors hover:bg-ink-2 disabled:cursor-wait disabled:opacity-70"
                >
                  {sending ? "Sending…" : "Request Access"}
                </button>
                <Link
                  href="/legal/privacy-notice"
                  className="text-center text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
                >
                  Read the Privacy Notice →
                </Link>
              </div>

              <div aria-live="polite">
                {status.state === "sent" && (
                  <p role="status" className="rounded-lg border border-ink/10 bg-surface px-4 py-3 text-sm text-ink">
                    Request received. Your reference is{" "}
                    <strong className="font-bold">{status.reference}</strong>. We&apos;ll review it and reply by
                    email — approval and response time aren&apos;t guaranteed.
                  </p>
                )}
                {status.state === "error" && (
                  <p role="alert" className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </div>

          <Reveal
            delay={0.15}
            className="relative hidden aspect-[340/591] overflow-hidden rounded-2xl bg-surface lg:mt-56 lg:block"
          >
            <Image
              src={`${IMG}/request-access-form-researcher.png`}
              alt="A researcher taking notes at a tidy desk"
              fill
              sizes="340px"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
