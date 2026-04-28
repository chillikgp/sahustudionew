"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/site";

type SiteHeaderProps = {
  overlay?: boolean;
};

export function SiteHeader({ overlay = true }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = overlay
    ? "text-white/80 hover:text-white"
    : "text-[var(--ink-soft)] hover:text-[var(--ink)]";

  const headerClass = overlay
    ? "absolute inset-x-0 top-0 z-30"
    : "fixed inset-x-0 top-0 z-40 border-b border-[var(--line)] bg-[rgba(248,242,234,0.88)] backdrop-blur-xl";

  const logoClass = overlay ? "" : "grayscale opacity-90";

  return (
    <>
      <header className={headerClass}>
        <div className="site-container flex items-center justify-center py-5 md:py-8">
          <div className="hidden w-full lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-12">
            {/* Left Navigation */}
            <nav className="flex items-center justify-end gap-10">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`eyebrow text-[11px] uppercase tracking-[0.22em] ${linkClass}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Center Logo */}
            <Link
              href="/"
              className="flex flex-col items-center px-4"
              aria-label="Sahu Studio home"
            >
              <div className="relative h-14 w-14 lg:h-16 lg:w-16">
                <Image
                  src="/images/brand-logo.png"
                  alt={siteConfig.name}
                  fill
                  className={`object-contain transition-all duration-500 ${logoClass}`}
                  priority
                  unoptimized
                />
              </div>
            </Link>

            {/* Right Navigation */}
            <nav className="flex items-center gap-10">
              {navLinks.slice(3).map((link) =>
                link.href.startsWith("mailto:") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`eyebrow text-[11px] uppercase tracking-[0.22em] ${linkClass}`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`eyebrow text-[11px] uppercase tracking-[0.22em] ${linkClass}`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
              {/* Search Icon */}
              <button
                type="button"
                className={`${linkClass}`}
                aria-label="Search"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </nav>
          </div>

          {/* Mobile Header Structure */}
          <div className="flex w-full items-center justify-between lg:hidden">
            <Link href="/" aria-label="Sahu Studio home">
              <div className="relative h-12 w-12">
                <Image
                  src="/images/brand-logo.png"
                  alt={siteConfig.name}
                  fill
                  className={`object-contain transition-all duration-500 ${logoClass}`}
                  unoptimized
                />
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.24em] ${
                overlay
                  ? "border-white/20 bg-white/8 text-white"
                  : "border-[var(--line)] bg-white/60 text-[var(--ink)]"
              }`}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-[rgba(25,18,14,0.88)] backdrop-blur-2xl lg:hidden">
          <div className="site-container flex min-h-screen flex-col py-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="relative h-12 w-12">
                  <Image
                    src="/images/brand-logo.png"
                    alt={siteConfig.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <p className="eyebrow mt-1 text-[10px] tracking-[0.3em] text-white/60">
                  {siteConfig.name}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/80"
              >
                Close
              </button>
            </div>
            <nav className="mt-16 flex flex-col gap-6">
              {navLinks.map((link) =>
                link.href.startsWith("mailto:") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-editorial text-4xl leading-tight text-white/92"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-editorial text-4xl leading-tight text-white/92"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
