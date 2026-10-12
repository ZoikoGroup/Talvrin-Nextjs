
import {
  CookieNoticeHero,
  CookieNoticeGlance,
  CookiePreferencesSection,
  CookieNoticeContent,
  CookieNoticeRelated,
  CookieNoticeCTA,
} from "@/components/cookie-notice";

export default function CookieNoticePage() {
  return (
    <main>
      <CookieNoticeHero />
      <CookieNoticeGlance />
      <CookiePreferencesSection />
      <CookieNoticeContent />
      <CookieNoticeRelated />
      <CookieNoticeCTA />
    </main>
  );
}
