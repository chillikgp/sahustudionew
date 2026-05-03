import Image from "next/image";
import { siteConfig, showcasePhotos } from "@/data/site";

export function InstagramTeaser() {
  // Use first 8 images for the teaser gallery
  const teaserPhotos = showcasePhotos.slice(0, 8);

  return (
    <section className="bg-[var(--ink)] pt-10 pb-6 text-[var(--paper-strong)] border-t border-white/5">
      <div className="site-container mb-8">
        <div className="flex items-center justify-between gap-6">
          <div>
            <h2 className="font-editorial text-3xl md:text-4xl leading-none">
              From Our Weddings
            </h2>
            <p className="mt-2 eyebrow text-[9px] tracking-[0.2em] text-white/30 uppercase">
              Visual storytelling & quiet chemistries
            </p>
          </div>
          <a 
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-white/10 bg-white/5 px-6 py-3 text-[9px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
          >
            Follow @sahustudio1982
          </a>
        </div>
      </div>

      {/* Edge-to-edge horizontal scroll */}
      <div className="flex gap-[2px] overflow-x-auto pb-2 md:grid md:grid-cols-4 lg:grid-cols-8 md:overflow-visible md:pb-0 scrollbar-hide">
        {teaserPhotos.map((photo, i) => (
          <a 
            key={photo.src}
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square min-w-[200px] flex-shrink-0 overflow-hidden md:min-w-0 group"
          >
            <Image
              src={photo.src}
              alt={`Wedding moment ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
