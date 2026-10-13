import {
  PrivacyNoticeContent,
  PrivacyNoticeCTA,
  PrivacyNoticeGlance,
  PrivacyNoticeHero,
  PrivacyNoticeRelated,
} from "@/components/privacy-notice";

export default function Page() {
  return (
    <main>
      <PrivacyNoticeHero />
      <PrivacyNoticeGlance />
      <PrivacyNoticeContent />
      <PrivacyNoticeRelated />
      <PrivacyNoticeCTA />
    </main>
  );
}
