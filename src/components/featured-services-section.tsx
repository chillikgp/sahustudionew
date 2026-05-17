import Image from "next/image";
import Link from "next/link";
import { getFeaturedServicePages } from "@/lib/content/services";

export function FeaturedServicesSection() {
  const services = getFeaturedServicePages(6);

  if (services.length === 0) {
    return null;
  }

  return (
    <section className="bg-[var(--paper)] py-20 lg:py-28">
      <div className="site-container">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow text-[10px] uppercase tracking-[0.35em] text-[var(--accent-deep)]">
            Additional Services
          </p>
          <h2 className="font-editorial mt-4 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            Practical studio work, held to the same standard
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
            Alongside weddings and films, Sahu Studio supports families and
            professionals with precise, locally grounded studio services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/${service.slug}`} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--canvas)]">
                <Image
                  src={service.hero.image.src}
                  alt={service.hero.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-6">
                <p className="eyebrow text-[9px] uppercase tracking-[0.28em] text-[var(--ink-muted)]">
                  {service.location.area}
                </p>
                <h3 className="font-editorial mt-2 text-3xl leading-tight text-[var(--ink)] group-hover:text-[var(--accent-deep)]">
                  {service.shortTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {service.seo.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
