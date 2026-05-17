import type { ServicePageContent } from "@/lib/content/services";

type EditorialContentProps = {
  service: ServicePageContent;
};

export function EditorialContent({ service }: EditorialContentProps) {
  return (
    <section className="site-container border-y border-[var(--line)] py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="eyebrow text-[10px] uppercase tracking-[0.35em] text-[var(--accent-deep)]">
            {service.editorial.eyebrow}
          </p>
          <h2 className="font-editorial mt-5 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            {service.editorial.heading}
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
          {service.editorial.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
