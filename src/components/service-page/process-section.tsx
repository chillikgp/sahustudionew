import type { ServicePageContent } from "@/lib/content/services";

type ProcessSectionProps = {
  service: ServicePageContent;
};

export function ProcessSection({ service }: ProcessSectionProps) {
  return (
    <section className="bg-[var(--ink)] py-24 text-[var(--paper)] lg:py-32">
      <div className="site-container">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow text-[10px] uppercase tracking-[0.35em] text-white/45">
            {service.process.eyebrow}
          </p>
          <h2 className="font-editorial mt-5 text-4xl leading-tight md:text-6xl">
            {service.process.heading}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {service.process.steps.map((step, index) => (
            <article key={step.title} className="border-t border-white/15 pt-8">
              <p className="font-editorial text-4xl text-white/25">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 font-editorial text-3xl leading-tight">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/62">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
