import Image from "next/image";
import type { ServicePageContent } from "@/lib/content/services";

type GallerySectionProps = {
  service: ServicePageContent;
};

export function GallerySection({ service }: GallerySectionProps) {
  if (!service.gallery?.images.length) {
    return null;
  }

  return (
    <section className="site-container py-20 lg:py-28">
      <div className="mb-12 max-w-3xl">
        <p className="eyebrow text-[10px] uppercase tracking-[0.35em] text-[var(--accent-deep)]">
          {service.gallery.eyebrow}
        </p>
        <h2 className="font-editorial mt-5 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
          {service.gallery.heading}
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {service.gallery.images.map((image, index) => (
          <figure
            key={image.src}
            className={index === 0 ? "md:col-span-2" : undefined}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--paper)] md:aspect-[3/4]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={index === 0 ? "(max-width: 768px) 100vw, 55vw" : "(max-width: 768px) 100vw, 28vw"}
                className="object-cover"
                loading="lazy"
              />
            </div>
            {image.caption && (
              <figcaption className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
