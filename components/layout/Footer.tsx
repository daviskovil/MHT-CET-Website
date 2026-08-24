import Image from "next/image";
import Link from "next/link";
import { APP_URLS, SOCIAL_URLS } from "@/lib/urls";

const PRODUCT_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "For Institutes", href: "/institutes" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Study Guides", href: "/study-guides" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: SOCIAL_URLS.instagram },
  { label: "YouTube", href: SOCIAL_URLS.youtube },
  { label: "Telegram", href: SOCIAL_URLS.telegram },
];

function FooterHeading({ children }: { children: string }) {
  return (
    <h3 className="font-display text-xs font-bold uppercase tracking-wide text-ink">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/8 bg-lavender">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <span className="flex items-center gap-2.5 font-display text-lg font-bold text-ink">
            <Image src="/logo-icon.png" alt="" width={32} height={32} className="h-8 w-8" />
            MHTCET<span className="text-primary"> Simu</span>
          </span>
          <p className="mt-3 text-sm text-muted">
            Maharashtra&#x2019;s most advanced MHT CET exam simulator.
          </p>
          <ul className="mt-5 flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="font-display text-xs font-semibold text-muted transition-colors hover:text-primary"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Product</FooterHeading>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {PRODUCT_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={APP_URLS.register}
                rel="noopener noreferrer"
                className="text-muted hover:text-ink"
              >
                Start Practising
              </a>
            </li>
          </ul>
        </div>

        <div>
          <FooterHeading>Company</FooterHeading>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://koventerprises.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted/70 hover:text-ink"
              >
                KOV Enterprises LLP
              </a>
            </li>
          </ul>
        </div>

        <div>
          <FooterHeading>Legal</FooterHeading>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="text-muted/70">
              &#xA9; 2026 MHTCET Simu. All rights reserved.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/8">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted sm:px-6 lg:px-8">
          <span>
            A{" "}
            <a
              href="https://koventerprises.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              KOV Enterprises LLP
            </a>{" "}
            product
          </span>
        </div>
      </div>
    </footer>
  );
}
