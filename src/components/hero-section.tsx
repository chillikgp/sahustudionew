import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[var(--ink)] text-white">
      <SiteHeader />
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-poster.jpg"
          alt="Cinematic wedding decor with chandeliers and soft underwater-inspired lighting"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero/hero-poster.jpg"
          suppressHydrationWarning
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,11,16,0.15)_0%,rgba(9,11,16,0.4)_48%,rgba(9,11,16,0.62)_100%)]" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-18 text-center">
        {/* Central logo and tagline removed for clean hero aesthetic */}

        <div className="absolute inset-x-0 bottom-8 flex justify-center">
          <a
            href="#about"
            className="delayed-reveal flex flex-col items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-white/72 hover:text-white"
          >
            <span>Scroll</span>
            <span className="text-3xl leading-none">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
