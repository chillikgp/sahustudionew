"use client";

import Link from "next/link";
import { siteConfig, navLinks } from "@/data/site";
import { trackEvent } from "@/lib/gtag";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--ink)] pt-12 pb-8 text-[var(--paper-strong)] border-t border-white/5">
      {/* SECTION: Core Footer Grid (Compact) */}
      <div className="site-container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="font-editorial text-3xl leading-none">{siteConfig.name}</h3>
              <p className="mt-1 eyebrow text-[9px] tracking-[0.2em] text-white/30 uppercase">Since 1982</p>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              Luxury wedding photography and cinematic films capturing timeless moments across Delhi NCR and beyond.
            </p>
            <div className="flex gap-5">
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="eyebrow text-[9px] tracking-[0.3em] text-white/30 mb-6 uppercase">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">Home</Link></li>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="eyebrow text-[9px] tracking-[0.3em] text-white/30 mb-6 uppercase">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/wedding-photography-delhi-ncr" className="text-sm text-white/50 hover:text-white transition-colors italic font-editorial text-base">Wedding Photographer Delhi</Link></li>
              <li><Link href="/wedding-stories" className="text-sm text-white/50 hover:text-white transition-colors italic font-editorial text-base">Pre Wedding Shoot</Link></li>
              <li><Link href="/wedding-photography-delhi-ncr" className="text-sm text-white/50 hover:text-white transition-colors italic font-editorial text-base">Candid Photography</Link></li>
              <li><Link href="/wedding-films" className="text-sm text-white/50 hover:text-white transition-colors italic font-editorial text-base">Cinematic Films</Link></li>
              <li><Link href="/wedding-photography-delhi-ncr" className="text-sm text-white/50 hover:text-white transition-colors italic font-editorial text-base">Destination Weddings</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <div>
              <h4 className="eyebrow text-[9px] tracking-[0.3em] text-white/30 mb-6 uppercase">Get in Touch</h4>
              <div className="space-y-4">
                <a 
                  href={siteConfig.socials.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackEvent("whatsapp_click", "lead", "footer")}
                  className="inline-flex items-center gap-2 bg-[var(--accent)] px-6 py-3 text-[9px] uppercase tracking-[0.25em] text-white font-medium hover:bg-[var(--accent-deep)] transition-all"
                >
                  Chat on WhatsApp
                </a>
                <div className="space-y-1">
                  <a 
                    href={siteConfig.socials.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={() => trackEvent("phone_click", "lead", "footer_phone")}
                    className="block text-base text-white/80 hover:text-white transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-[10px] text-white/40">{siteConfig.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: Bottom Strip (Compact) */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
            {siteConfig.copyright}. All rights reserved.
          </p>
          <a
            href={siteConfig.socials.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors"
          >
            Karkardooma, Delhi NCR
          </a>
        </div>
      </div>
    </footer>
  );
}
