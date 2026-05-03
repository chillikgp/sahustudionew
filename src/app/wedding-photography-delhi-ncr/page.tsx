import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { GalleryGrid } from "@/components/gallery-grid";
import { PhilosophySection } from "@/components/philosophy-section";
import { ExploreMore } from "@/components/explore-more";

export const metadata: Metadata = {
  title: "Wedding Photography in Delhi NCR | Sahu Studio",
  description: "Explore candid wedding photography, pre-wedding shoots, and cinematic moments captured across Delhi NCR by Sahu Studio.",
};

export default function PhotosPage() {
  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <SiteHeader overlay={false} />

      <main className="pt-32 pb-20">
        {/* Header Section */}
        <header className="site-container mb-12">
          <span className="eyebrow text-[11px] tracking-[0.3em] text-[var(--accent)] block mb-4 delayed-reveal">
            Photography
          </span>
          <h1 className="font-editorial text-5xl md:text-7xl leading-[1.1] text-[var(--ink)] mb-6 reveal-up">
            Wedding Photography in <br className="hidden md:block" />
            <span className="headline-emphasis">Delhi NCR</span>
          </h1>
          <div className="max-w-2xl delayed-reveal">
            <p className="text-lg md:text-xl text-[var(--ink-soft)] leading-relaxed mb-6">
              A curated collection of candid moments, timeless portraits, and cinematic wedding storytelling. 
              Captured with an editorial eye and a focus on authentic human emotions across the heart of Delhi NCR.
            </p>
            <p className="text-sm text-[var(--ink-muted)] leading-relaxed italic">
              Specializing in candid photography, pre-wedding storytelling, and royal wedding celebrations 
              that honor both tradition and contemporary elegance.
            </p>
          </div>
        </header>

        {/* Gallery Section */}
        <GalleryGrid />

        {/* Philosophy & Explore */}
        <PhilosophySection 
          eyebrow="The Studio Philosophy"
          title="Photography that feels honest, timeless, and deeply personal"
          body="As a leading wedding photographer in Delhi NCR, Sahu Studio focuses on capturing real emotions through candid photography. From intimate pre-wedding shoots to grand celebrations, every frame is crafted to preserve your story with authenticity and elegance."
        />

        <ExploreMore 
          cards={[
            {
              eyebrow: "Real Weddings",
              title: "Wedding Stories",
              cta: "View Stories",
              href: "/wedding-stories",
              image: "/images/stories/story-01-cover.jpg"
            },
            {
              eyebrow: "Cinematography",
              title: "Wedding Films",
              cta: "Watch Films",
              href: "/wedding-films",
              image: "/images/video/feature-video.jpg"
            }
          ]}
        />
      </main>
    </div>
  );
}
