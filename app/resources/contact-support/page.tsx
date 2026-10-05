import {
  ChooseIssueType,
  CommercialAccess,
  ContactSupportHero,
  ContactSupportNavigation,
  SelfService,
  ServiceStatus,
  SupportRequest,
  TrustAndEscalation,
} from "@/components/contact-support";

export default function ContactSupportPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <ContactSupportHero />

      <ContactSupportNavigation />

      <ServiceStatus />

      <SelfService />

      <ChooseIssueType />

      <SupportRequest />

      <TrustAndEscalation />

      <CommercialAccess />
    </main>
  );
}
