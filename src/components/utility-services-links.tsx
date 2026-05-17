import Link from "next/link";
import { getFeaturedServicePages } from "@/lib/content/services";

export function UtilityServicesLinks() {
  const services = getFeaturedServicePages(4);

  if (services.length === 0) {
    return null;
  }

  return (
    <section className="site-container py-16">
      <div className="grid gap-10 border-y border-[var(--line)] py-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="eyebrow text-[10px] uppercase tracking-[0.35em] text-[var(--accent-deep)]">
            Studio Services
          </p>
          <h2 className="font-editorial mt-4 text-4xl leading-tight text-[var(--ink)]">
            Additional ways to work with Sahu Studio
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group border-t border-[var(--line)] pt-5"
            >
              <h3 className="font-editorial text-2xl text-[var(--ink)] group-hover:text-[var(--accent-deep)]">
                {service.shortTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                {service.seo.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
