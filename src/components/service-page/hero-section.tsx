import Image from "next/image";
import Link from "next/link";
import type { ServicePageContent } from "@/lib/content/services";

type HeroSectionProps = {
  service: ServicePageContent;
};

export function HeroSection({ service }: HeroSectionProps) {
  if (service.hero.layout === "product") {
    return (
      <header className="site-container grid gap-12 pt-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16 lg:pb-28">
        <div className="reveal-up">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--canvas)] md:aspect-[5/4]">
            <Image
              src={service.hero.image.src}
              alt={service.hero.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
              priority
            />
          </div>
          {service.hero.thumbnails && service.hero.thumbnails.length > 0 && (
            <div className="mt-4 grid grid-cols-4 gap-3">
              {service.hero.thumbnails.slice(0, 4).map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-square overflow-hidden bg-[var(--canvas)]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 22vw, 11vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="reveal-up border-t border-[var(--line)] pt-8 lg:sticky lg:top-32">
          <p className="eyebrow text-[10px] uppercase tracking-[0.36em] text-[var(--accent-deep)]">
            {service.hero.eyebrow}
          </p>
          <h1 className="font-editorial mt-5 text-5xl leading-[1.04] text-[var(--ink)] md:text-6xl">
            {service.hero.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--ink-soft)]">
            {service.hero.dek}
          </p>

          {service.hero.product && (
            <div className="mt-8 space-y-6">
              {service.hero.product.priceLabel && (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                    Starting From
                  </p>
                  <p className="font-editorial mt-1 text-4xl text-[var(--ink)]">
                    {service.hero.product.priceLabel}
                  </p>
                  {service.hero.product.note && (
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                      {service.hero.product.note}
                    </p>
                  )}
                </div>
              )}

              {service.hero.product.specs && (
                <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-[var(--line)] py-6">
                  {service.hero.product.specs.map((spec) => (
                    <div key={spec.label}>
                      <dt className="text-[9px] uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium leading-relaxed text-[var(--ink)]">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {service.hero.product.options && (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                    Available Formats
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.hero.product.options.map((option) => (
                      <span
                        key={option}
                        className="border border-[var(--line-deep)] px-4 py-2 text-xs text-[var(--ink)]"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

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
          <p className="mt-6 text-[10px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
            {service.location.area}, {service.location.city}
          </p>
        </div>
      </header>
    );
  }

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
