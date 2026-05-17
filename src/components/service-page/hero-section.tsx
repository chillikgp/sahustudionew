import Image from "next/image";
import Link from "next/link";
import type { ServicePageContent } from "@/lib/content/services";

type HeroSectionProps = {
  service: ServicePageContent;
};

export function HeroSection({ service }: HeroSectionProps) {
  return (
    <header className="site-container grid gap-12 pt-12 pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20 lg:pb-28">
      <div className="reveal-up max-w-3xl">
        <p className="eyebrow text-[10px] uppercase tracking-[0.36em] text-[var(--accent-deep)]">
          {service.hero.eyebrow}
        </p>
        <h1 className="font-editorial mt-6 text-5xl leading-[1.02] text-[var(--ink)] md:text-7xl lg:text-8xl">
          {service.hero.title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)] md:text-xl">
          {service.hero.dek}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={service.hero.primaryCta.href}
            className="shimmer-button inline-flex bg-[var(--ink)] px-7 py-4 text-[10px] uppercase tracking-[0.26em] text-[var(--paper)] hover:bg-[var(--accent-deep)]"
          >
            {service.hero.primaryCta.label}
          </Link>
          {service.hero.secondaryCta && (
            <Link
              href={service.hero.secondaryCta.href}
              className="inline-flex border border-[var(--line-deep)] px-7 py-4 text-[10px] uppercase tracking-[0.26em] text-[var(--ink)] hover:border-[var(--ink)]"
            >
              {service.hero.secondaryCta.label}
            </Link>
          )}
        </div>
      </div>

      <div className="reveal-up">
        <div className="relative aspect-[4/5] overflow-hidden bg-[var(--paper)]">
          <Image
            src={service.hero.image.src}
            alt={service.hero.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
            priority
          />
        </div>
        <p className="mt-5 text-[10px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
          {service.location.area}, {service.location.city}
        </p>
      </div>
    </header>
  );
}
