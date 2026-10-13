import {
  DPAContent,
  DPACTA,
  DPAGlance,
  DPAHero,
  DPARelated,
} from "@/components/data-processing-addendum";

export default function Page() {
  return (
    <main>
      <DPAHero />
      <DPAGlance />
      <DPAContent />
      <DPARelated />
      <DPACTA />
    </main>
  );
}
