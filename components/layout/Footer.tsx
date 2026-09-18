import { ArrowRight } from "lucide-react";
import {
  footerDisclosures,
  footerLegalLinks,
  footerNav,
  officeLocations,
  socialLinks,
} from "@/lib/navigation";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import SocialIcon from "../ui/SocialIcon";
import Reveal from "../ui/Reveal";
import { EyebrowLabel } from "./shared";
import FooterColumn from "./FooterColumn";

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <Container>
        <Reveal className="grid grid-cols-1 gap-10 border-b border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              The evidence layer for global public markets.
            </p>
            <p className="mt-4 max-w-xs text-xs text-slate-500">
              Talvrin is a trading name of Zoiko Markets, a Zoiko Financial Group company.
            </p>
          </div>

          {officeLocations.map((office) => (
            <div key={office.title}>
              <EyebrowLabel>{office.title}</EyebrowLabel>
              <address className="mt-4 space-y-0.5 text-sm not-italic text-slate-400">
                {office.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            </div>
          ))}

          <div>
            <EyebrowLabel>Follow</EyebrowLabel>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex size-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand hover:text-white"
                >
                  <SocialIcon name={social.label as "LinkedIn" | "X" | "YouTube"} className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={0.05}
          className="grid grid-cols-2 gap-x-6 gap-y-10 border-b border-white/10 py-14 sm:grid-cols-3 lg:grid-cols-7"
        >
          {footerNav.map((group) => (
            <FooterColumn key={group.label} group={group} />
          ))}
        </Reveal>

        <Reveal
          delay={0.1}
          className="grid grid-cols-1 gap-8 border-b border-white/10 py-10 md:grid-cols-2 lg:grid-cols-4"
        >
          {footerDisclosures.map((item) => (
            <div key={item.title}>
              <EyebrowLabel variant="disclosure">{item.title}</EyebrowLabel>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">{item.body}</p>
            </div>
          ))}
        </Reveal>

        <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Zoiko Markets. All rights reserved.</p>
            <p>Talvrin is a trading name of Zoiko Markets, a Zoiko Financial Group company.</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] leading-none font-normal text-[#6C5CE7]">
            {footerLegalLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
            <span>English / Global</span>
            <a
              href="/support/system-status"
              className="inline-flex items-center gap-1 transition-colors hover:text-white"
            >
              System Status <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
