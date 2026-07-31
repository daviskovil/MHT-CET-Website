"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { APP_URLS } from "@/lib/urls";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "For Institutes", href: "/institutes" },
  { label: "Study Guides", href: "/study-guides" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-ink/8 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-ink"
        >
          <Image src="/logo-icon.png" alt="" width={32} height={32} className="h-8 w-8 flex-shrink-0" priority />
          <span>
            MHTCET<span className="text-primary"> Simu</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-4 py-2 font-display text-sm font-semibold transition-colors ${
                    active ? "bg-lavender text-teal-dark" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={APP_URLS.login}
            rel="noopener noreferrer"
            className="font-display text-sm font-semibold text-ink hover:text-primary"
          >
            Sign In
          </a>
          <Button href={APP_URLS.register} external arrow={false}>
            Register Free
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/8 bg-white md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block min-h-11 rounded-full px-4 py-3 font-display text-sm font-semibold ${
                      active ? "bg-lavender text-teal-dark" : "text-ink hover:bg-ink/[0.03]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-3 border-t border-ink/8 px-4 py-4">
            <a
              href={APP_URLS.login}
              rel="noopener noreferrer"
              className="rounded-full border border-ink/15 px-4 py-3 text-center font-display text-sm font-semibold text-ink"
            >
              Sign In
            </a>
            <Button href={APP_URLS.register} external arrow={false} className="w-full justify-center">
              Register Free
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
