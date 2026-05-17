import Link from "next/link";
import {
  getResourceFrontmatter,
  type ResourceFrontmatter,
} from "@/lib/content/resources";
import { getServicePage } from "@/lib/content/services";

type ResourceBottomSectionProps = {
  resource: ResourceFrontmatter;
};

function serviceHref(slugOrHref: string) {
  return slugOrHref.startsWith("/") ? slugOrHref : `/${slugOrHref}`;
}

function resourceHref(slugOrHref: string) {
  return slugOrHref.startsWith("/")
    ? slugOrHref
    : `/resources/${slugOrHref}`;
}

export function ResourceBottomSection({ resource }: ResourceBottomSectionProps) {
  const relatedServices = resource.relatedServices
    .slice(0, 3)
    .map((slugOrHref) => {
      const slug = slugOrHref.replace(/^\//, "");
      const service = getServicePage(slug);

      return service
        ? {
            title: service.shortTitle,
            description: service.seo.description,
            href: `/${service.slug}`,
          }
        : {
            title: slugOrHref.replace(/^\//, "").replaceAll("-", " "),
            href: serviceHref(slugOrHref),
          };
    });
  const relatedResources = resource.relatedResources
    .slice(0, 3)
    .map((slugOrHref) => {
      const slug = slugOrHref.replace(/^\/resources\//, "").replace(/^\//, "");
      const related = getResourceFrontmatter(slug);

      return related
        ? {
            title: related.title,
            description: related.description,
            href: `/resources/${related.slug}`,
          }
        : {
            title: slug.replaceAll("-", " "),
            href: resourceHref(slugOrHref),
          };
    });
  const hasRelated = relatedServices.length > 0 || relatedResources.length > 0;

  if (!resource.cta && !hasRelated) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-[var(--line)] pt-12">
      {resource.cta && (
        <div className="bg-[var(--canvas)] px-6 py-10 md:px-10">
          <p className="eyebrow text-[10px] uppercase tracking-[0.35em] text-[var(--accent-deep)]">
            Studio Support
          </p>
          <h2 className="font-editorial mt-4 text-4xl leading-tight text-[var(--ink)]">
            {resource.cta.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)]">
            {resource.cta.description}
          </p>
          <Link
            href={resource.cta.href}
            className="shimmer-button mt-8 inline-flex bg-[var(--ink)] px-7 py-4 text-[10px] uppercase tracking-[0.26em] text-[var(--paper)] hover:bg-[var(--accent-deep)]"
          >
            {resource.cta.label}
          </Link>
        </div>
      )}

      {hasRelated && (
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {relatedServices.length > 0 && (
            <div>
              <p className="eyebrow text-[10px] uppercase tracking-[0.32em] text-[var(--accent-deep)]">
                Related Services
              </p>
              <div className="mt-5 space-y-4">
                {relatedServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block border-t border-[var(--line)] pt-4 group"
                  >
                    <h3 className="font-editorial text-2xl text-[var(--ink)] group-hover:text-[var(--accent-deep)]">
                      {service.title}
                    </h3>
                    {service.description && (
                      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                        {service.description}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedResources.length > 0 && (
            <div>
              <p className="eyebrow text-[10px] uppercase tracking-[0.32em] text-[var(--accent-deep)]">
                Related Resources
              </p>
              <div className="mt-5 space-y-4">
                {relatedResources.map((related) => (
                  <Link
                    key={related.href}
                    href={related.href}
                    className="block border-t border-[var(--line)] pt-4 group"
                  >
                    <h3 className="font-editorial text-2xl text-[var(--ink)] group-hover:text-[var(--accent-deep)]">
                      {related.title}
                    </h3>
                    {related.description && (
                      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                        {related.description}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
