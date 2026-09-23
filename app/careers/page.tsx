import Hero from "@/components/careers/Hero";
import Navigation from "@/components/careers/Navigation";
import Building from "@/components/careers/Building";
import Principles from "@/components/careers/Principles";
import OpenRoles from "@/components/careers/OpenRoles";
import CandidateInfo from "@/components/careers/CandidateInfo";
import CompanyContext from "@/components/careers/CompanyContext";
import FAQ from "@/components/careers/FAQ";
import CTA from "@/components/careers/CTA";

export const metadata = {
  title: "Careers | Talvrin",
  description:
    "Help build a source-linked research and monitoring platform. Explore current approved opportunities at Talvrin.",
};

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16 md:pt-0 bg-white">
      <Hero />
      <Navigation />
      <Building />
      <Principles />
      <OpenRoles />
      <CandidateInfo />
      <CompanyContext />
      <FAQ />
      <CTA />
    </main>
  );
}
