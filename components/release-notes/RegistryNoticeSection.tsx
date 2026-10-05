import Container from "../ui/Container";

export default function RegistryNoticeSection() {
  return (
    <div role="status" className="border-b border-ink/8 bg-white py-7">
      <Container className="flex flex-col items-start gap-3.5">
        <span className="rounded-full bg-accent-amber/10 px-2.5 py-[5px] text-xs font-bold uppercase tracking-[0.6px] text-[#8a5a00]">
          Release Registry Not Yet Published
        </span>
        <p className="max-w-[1200px] text-sm leading-6 text-muted">
          Talvrin hasn&apos;t published an approved public Release Registry on this build yet, so
          nothing below lists an invented release, date or version. Browse change types and product
          areas, or go straight to Documentation and Support.
        </p>
      </Container>
    </div>
  );
}
