import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow } from "./shared";

const COLUMNS = ["Name", "Provider", "Purpose", "Category", "Lifetime"];

export default function InventorySection() {
  return (
    <section className="border-b border-ink/10 bg-white py-14">
      <Container className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,900px)_minmax(0,384px)] lg:justify-between lg:gap-4">
        <div className="flex flex-col gap-3">
          <Reveal>
            <SectionEyebrow tone="amber">Inventory register</SectionEyebrow>
            <h2 className="mt-3 text-xl font-bold leading-8 text-ink sm:text-2xl">
              Name, provider, purpose, category and lifetime — per item, once verified.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="overflow-x-auto rounded-xl border border-ink/10">
            <table className="w-full min-w-[560px] text-left">
              <caption className="sr-only">Cookie and similar technology inventory</caption>
              <thead className="bg-surface">
                <tr>
                  {COLUMNS.map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="border-b border-ink/10 px-4 py-3 text-xs font-bold uppercase tracking-wide text-muted"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={COLUMNS.length} className="px-4 py-7 text-center text-sm text-muted">
                    No approved technology inventory has been published yet.
                  </td>
                </tr>
              </tbody>
            </table>
          </Reveal>

          <Reveal
            delay={0.15}
            className="rounded-xl border border-accent-amber/25 bg-accent-amber/10 px-5 pb-5 pt-6"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-[#8a5a00]">Third-party providers</p>
            <p className="mt-2 text-sm leading-6 text-[#5c3d00]">
              No approved third-party vendor identities have been published for Cookies yet. Once a
              signed technology scan and vendor register are approved, each provider will be listed here
              by name, purpose, category, lifetime and linked notice — none is listed by assumption
              today.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="relative hidden aspect-[384/240] w-full overflow-hidden rounded-2xl bg-white lg:mt-[75px] lg:block lg:self-start"
        >
          <Image
            src={`${IMG}/inventory-office-reading.webp`}
            alt="A person reading in an office surrounded by stacks of books"
            fill
            sizes="384px"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
