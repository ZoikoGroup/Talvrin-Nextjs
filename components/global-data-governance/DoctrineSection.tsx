import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR } from "./shared";

const principles = [
  { title: "Jurisdiction", body: "Context can change meaning and the controls that apply." },
  { title: "Rights", body: "Licensing, entitlement and permitted use remain enforceable inputs." },
  {
    title: "Security",
    body: "Security claims remain evidence-gated and separate from governance narrative.",
  },
  {
    title: "Transparency",
    body: "Current state, limitations and last-reviewed dates are visible where material.",
  },
  { title: "Privacy", body: "Regional privacy experiences can differ where materially required." },
  { title: "Coverage", body: "Architecture-ready is not live coverage." },
];

export default function DoctrineSection() {
  return (
    <section id="doctrine" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Six Governance Doctrine Principles"
            title="Six principles govern every regional and jurisdictional claim."
          >
            These principles apply wherever Talvrin makes a jurisdiction-, rights-, privacy-,
            security- or coverage-related statement — not only on this page.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] xl:grid-cols-[minmax(0,760px)_minmax(0,500px)] xl:justify-between">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.04} className="h-full">
                <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-ink/10 bg-surface p-6">
                  <h3 className="text-base font-bold text-ink">{principle.title}</h3>
                  <p className="text-sm leading-5 text-muted">{principle.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative aspect-video overflow-hidden rounded-2xl border border-ink/10 bg-surface lg:aspect-auto lg:min-h-[313px]"
          >
            <Image
              src={`${IMAGE_DIR}/governance-doctrine-team.webp`}
              alt="A smiling professional talking with colleagues at a laptop"
              fill
              sizes="(min-width: 1280px) 500px, (min-width: 1024px) 400px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
