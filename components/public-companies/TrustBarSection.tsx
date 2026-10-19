import Container from "../ui/Container";

const badges = [
  "EVIDENCE-FIRST",
  "SOURCE-VERIFIED",
  "IDENTITY-VERIFIED",
  "VERSION-AWARE",
  "RIGHTS-AWARE",
  "NON-ADVISORY",
];

export default function TrustBarSection() {
  return (
    <section className="border-y border-[#171335]/[0.08] bg-white py-[26px]">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8 lg:gap-x-9">
          {badges.map((badge, idx) => (
            <div key={badge} className="flex items-center gap-6 sm:gap-8 lg:gap-9">
              <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#171335]">
                {badge}
              </span>
              {idx < badges.length - 1 && (
                <span className="text-base text-[#171335]/25" aria-hidden="true">
                  ·
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
