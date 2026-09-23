import Hero from "@/components/leadership/Hero";
import Directory from "@/components/leadership/Directory";
import PublicResponsibility from "@/components/leadership/PublicResponsibility";
import CorporateIdentity from "@/components/leadership/CorporateIdentity";
import Destination from "@/components/leadership/Destination";
import FAQ from "@/components/leadership/FAQ";
import CTA from "@/components/leadership/CTA";

export const metadata = {
  title: "Leadership | Talvrin",
  description: "Leadership information and summary of executive management for Talvrin.",
};

export default function LeadershipPage() {
  return (
    <div className="flex min-h-screen flex-col pt-16 md:pt-0">
      <Hero />
      <Directory />
      <PublicResponsibility />
      <CorporateIdentity />
      <Destination />
      <FAQ />
      <CTA />
    </div>
  );
}
