import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteHeader } from "@/components/site-header";
import type { ServicePageContent } from "@/lib/content/services";
import { CTASection } from "./cta-section";
import { EditorialContent } from "./editorial-content";
import { FAQSection } from "./faq-section";
import { GallerySection } from "./gallery-section";
import { HeroSection } from "./hero-section";
import { ProcessSection } from "./process-section";
import { RelatedServices } from "./related-services";
import { Testimonials } from "@/components/testimonials";

type ServicePageTemplateProps = {
  service: ServicePageContent;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const breadcrumbs = [
    { name: "Home", path: "" as const },
    { name: service.shortTitle, path: `/${service.slug}` as const },
  ];

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <SiteHeader overlay={false} />
      <main className="pt-32">
        <Breadcrumbs items={breadcrumbs} />
        <HeroSection service={service} />
        <EditorialContent service={service} />
        <GallerySection service={service} />

        <section className="site-container pb-20 lg:pb-28">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow text-[10px] uppercase tracking-[0.35em] text-[var(--accent-deep)]">
              {service.included.eyebrow}
            </p>
            <h2 className="font-editorial mt-5 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
              {service.included.heading}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {service.included.items.map((item) => (
              <article key={item.title} className="border-t border-[var(--line)] pt-8">
                <h3 className="font-editorial text-3xl leading-tight text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <ProcessSection service={service} />
        <FAQSection service={service} />
        {service.testimonials && service.testimonials.length > 0 && (
          <Testimonials 
            reviews={service.testimonials}
            heading="Real experiences from our clients"
            subheading="Client Reviews"
          />
        )}
        <RelatedServices service={service} />
        <CTASection service={service} />
      </main>
    </div>
  );
}
