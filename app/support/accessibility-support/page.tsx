import type { Metadata } from "next";
import HeroSection from "@/components/accessibility-support/HeroSection";
import SubNav from "@/components/accessibility-support/SubNav";
import BarrierFlow from "@/components/accessibility-support/BarrierFlow";
import AccountSection from "@/components/accessibility-support/AccountSection";
import RelatedSection from "@/components/accessibility-support/RelatedSection";
import FAQSection from "@/components/accessibility-support/FAQSection";

export const metadata: Metadata = {
  title: "Accessibility Support | Talvrin Support",
  description:
    "Get help when an accessibility barrier blocks your access. Tell us what you were trying to do and what blocked you — no disability or medical information required.",
};

export default function AccessibilitySupportPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <HeroSection />
      <SubNav />
      <BarrierFlow />
      <AccountSection />
      <RelatedSection />
      <FAQSection />
    </div>
  );
}
