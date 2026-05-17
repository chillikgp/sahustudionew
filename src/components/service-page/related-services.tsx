import Image from "next/image";
import Link from "next/link";
import type { ServicePageContent } from "@/lib/content/services";

type RelatedServicesProps = {
  service: ServicePageContent;
};

export function RelatedServices({ service }: RelatedServicesProps) {
  const hasResources = Boolean(service.relatedResources?.length);

  return (
    <section className="site-container py-20 lg:py-28">
      <div className="mb-12 max-w-3xl">
        <p className="eyebrow text-[10px] uppercase tracking-[0.35em] text-[var(--accent-deep)]">
          Continue Exploring
        </p>
        <h2 className="font-editorial mt-5 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
          Related studio services and resources
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {service.relatedServices.map((related) => (
          <Link
            key={related.href}
            href={related.href}
            className="group grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-center"
          >
            {related.image && (
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--paper)]">
                <Image
                  src={related.image}
                  alt={related.title ?? "Related service"}
                  fill
                  sizes="(max-width: 768px) 100vw, 28vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}
            <div>
              <h3 className="font-editorial text-3xl leading-tight text-[var(--ink)] group-hover:text-[var(--accent-deep)]">
                {related.title}
              </h3>
              {related.description && (
                <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {related.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {hasResources && (
        <div className="mt-14 grid gap-4 border-t border-[var(--line)] pt-10 md:grid-cols-2">
          {service.relatedResources?.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="group border border-[var(--line)] p-6 hover:border-[var(--accent-deep)]"
            >
              <p className="eyebrow text-[9px] uppercase tracking-[0.28em] text-[var(--ink-muted)]">
                Resource
              </p>
              <h3 className="font-editorial mt-3 text-2xl text-[var(--ink)] group-hover:text-[var(--accent-deep)]">
                {resource.title}
              </h3>
              {resource.description && (
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {resource.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
