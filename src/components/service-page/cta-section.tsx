import Link from "next/link";
import type { ServicePageContent } from "@/lib/content/services";

type CTASectionProps = {
  service: ServicePageContent;
};

export function CTASection({ service }: CTASectionProps) {
  return (
    <section className="bg-[var(--canvas-strong)] py-24 lg:py-32">
      <div className="site-container max-w-4xl text-center">
        <p className="eyebrow text-[10px] uppercase tracking-[0.35em] text-[var(--accent-deep)]">
          {service.cta.eyebrow}
        </p>
        <h2 className="font-editorial mt-5 text-5xl leading-tight text-[var(--ink)] md:text-7xl">
          {service.cta.heading}
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">
          {service.cta.body}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href={service.cta.primaryCta.href}
            className="shimmer-button inline-flex bg-[var(--ink)] px-7 py-4 text-[10px] uppercase tracking-[0.26em] text-[var(--paper)] hover:bg-[var(--accent-deep)]"
          >
            {service.cta.primaryCta.label}
          </Link>
          {service.cta.secondaryCta && (
            <Link
              href={service.cta.secondaryCta.href}
              className="inline-flex border border-[var(--line-deep)] px-7 py-4 text-[10px] uppercase tracking-[0.26em] text-[var(--ink)] hover:border-[var(--ink)]"
            >
              {service.cta.secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
