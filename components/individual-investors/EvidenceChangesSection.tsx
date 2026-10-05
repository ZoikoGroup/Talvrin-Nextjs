import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { IMAGE_DIR, SectionIntro } from "./shared";
import Link from "next/link";

const changes = [
  {
    tag: "New",
    tagClass: "bg-accent-amber/12 text-[#8a5a00]",
    text: "New relevant governed evidence enters the research object",
    note: "Source and relationship shown",
  },
  {
    tag: "Updated",
    tagClass: "bg-accent-violet/12 text-[#5a48d8]",
    text: "Existing evidence changes or a source publishes an update",
    note: "Context and lineage exposed",
  },
  {
    tag: "Unchanged",
    tagClass: "bg-ink/8 text-muted",
    text: "Important evidence remains materially unchanged",
    note: "Lower visual priority",
  },
];

export default function EvidenceChangesSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Know When Evidence Changes"
            title="Talvrin highlights meaningful evidence, not notification noise."
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,720px)_minmax(0,1fr)]">
          <Reveal delay={0.1} className="h-full">
            {/* Illustrative product preview — not live data. */}
            <div
              aria-label="Illustrative research view preview"
              className="flex h-full flex-col rounded-2xl border border-ink/10 bg-surface p-6 sm:p-8"
            >
              <h3 className="text-lg font-bold text-ink sm:text-xl">
                Research View: U.S. Treasury Yield Outlook
              </h3>
              <p className="mt-1 text-sm text-muted">Last reviewed: 12 September 2026</p>

              <p className="mt-6 text-xs font-bold uppercase tracking-wide text-muted">
                Since last review
              </p>
              <ul className="mt-2">
                {changes.map((change) => (
                  <li
                    key={change.tag}
                    className="flex flex-col gap-1.5 border-b border-ink/10 py-3 sm:flex-row sm:items-center sm:gap-3"
                  >
                    <span
                      className={`w-fit shrink-0 rounded-md px-2 py-1 text-[11px] font-bold uppercase tracking-wide ${change.tagClass}`}
                    >
                      {change.tag}
                    </span>
                    <span className="flex-1 text-[15px] font-medium text-ink">{change.text}</span>
                    <span className="shrink-0 text-[13px] text-muted">{change.note}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <LinkButton href="/product/watchlists" className="px-6 py-3">
                  Reassess the Research View
                </LinkButton>
                <Link
                  href="/product/evidence"
                  className="text-center text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
                >
                  Open Evidence →
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.2}
            className="relative min-h-[280px] overflow-hidden rounded-2xl border border-ink/10"
          >
            <Image
              src={`${IMAGE_DIR}/individual-investors-evidence-changes-meeting.webp`}
              alt="A group discussing a strategy whiteboard around a meeting table"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mt-6 max-w-[720px]">
          <p className="text-sm leading-6 text-muted">
            Monitoring means staying connected to evidence and surfacing changes that may call for
            reassessment — never a trade signal, a guarantee of materiality, or a prediction of price
            direction.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
