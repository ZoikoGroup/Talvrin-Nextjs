import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "./shared";

const principles = [
  { title: "Evidence provenance", body: "Important research outputs remain traceable to supporting material." },
  {
    title: "Data rights",
    body: "Licensing, entitlement, redistribution, and permitted-use controls are respected.",
  },
  { title: "Security", body: "Accounts, workspaces, services, and secrets are protected." },
  { title: "Privacy", body: "Unnecessary collection is minimized and clear controls are provided." },
  { title: "Responsible AI", body: "Generated interpretation remains distinguishable from evidence." },
  {
    title: "Operational transparency",
    body: "Coverage, availability, and service status are communicated truthfully.",
  },
];

export default function TrustPrivacySection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Trust, Privacy & Research-Intent Protection"
            title="Your research questions deserve privacy, not profiling."
          >
            Research questions, securities of interest, notes, and saved views can reveal sensitive
            financial intent. Behavioral analytics do not collect this content by default.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-5">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <span aria-hidden="true" className="block h-0.5 w-7 bg-accent-violet" />
              <h3 className="mt-4 text-base font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-[22px] text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
