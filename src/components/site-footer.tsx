import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer
      id="footer"
      className="border-t border-white/10 bg-[var(--ink)] py-12 text-[var(--paper-strong)]"
    >
      <div className="site-container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow text-[10px] tracking-[0.28em] text-white/55">
            Sahu Studio
          </p>
          <h2 className="font-editorial mt-3 text-4xl leading-none sm:text-5xl">
            {siteConfig.tagline}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-white/65">
            Crafted for Delhi NCR weddings, intimate destination weekends, and
            celebrations where heritage deserves refined storytelling.
          </p>
        </div>

        <div className="text-sm leading-8 text-white/70">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
            {siteConfig.email}
          </a>
          <p>{siteConfig.location}</p>
          <p>{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
