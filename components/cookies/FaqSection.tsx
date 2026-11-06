import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const FAQS = [
  {
    q: "What are cookies?",
    a: "Cookies are small text files a website stores in your browser. Similar technologies, such as local storage, work the same way. TALVRIN groups all of them into the four categories above.",
  },
  {
    q: "Which categories can I control?",
    a: "Analytics and Preferences & Functionality are optional and stay off until you turn them on in Cookie Preferences. Strictly Necessary is always active, and Marketing isn’t deployed today, so there is nothing to switch on.",
  },
  {
    q: "Does rejecting optional cookies affect the service?",
    a: "No. TALVRIN works fully without optional cookies. Turning Preferences & Functionality off only means interface choices, such as layout settings, may reset between visits.",
  },
  {
    q: "Where are my choices saved?",
    a: "Your choice is stored in this browser on this device, with a version number, timestamp and anonymous reference id. It isn’t synced to other browsers or devices, and you can change it any time in Cookie Preferences.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-surface py-16 sm:py-[72px]">
      <Container className="max-w-[948px]">
        <Reveal className="pb-4">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <SectionHeading>Common questions, answered plainly.</SectionHeading>
        </Reveal>

        <div className="mt-3 flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <details className="group overflow-hidden rounded-xl border border-ink/10 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent-violet [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span aria-hidden="true" className="text-sm font-semibold text-muted group-open:hidden">
                    +
                  </span>
                  <span aria-hidden="true" className="hidden text-sm font-semibold text-muted group-open:inline">
                    −
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-6 text-muted">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
