import type { ServicePageContent } from "@/lib/content/services";

type FAQSectionProps = {
  service: ServicePageContent;
};

export function FAQSection({ service }: FAQSectionProps) {
  return (
    <section className="site-container border-y border-[var(--line)] py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="eyebrow text-[10px] uppercase tracking-[0.35em] text-[var(--accent-deep)]">
            Questions
          </p>
          <h2 className="font-editorial mt-5 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            Before you visit
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {service.faqs.map((faq) => (
            <article key={faq.question} className="space-y-3">
              <h3 className="font-editorial text-2xl leading-tight text-[var(--ink)]">
                {faq.question}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
