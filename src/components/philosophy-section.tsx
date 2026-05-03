interface PhilosophySectionProps {
  eyebrow: string;
  title: string;
  body: string;
  dark?: boolean;
}

export function PhilosophySection({ eyebrow, title, body, dark = false }: PhilosophySectionProps) {
  return (
    <section className={`py-24 lg:py-32 ${dark ? "bg-black" : ""}`}>
      <div className="site-container">
        <div className={`max-w-4xl py-12 border-y ${dark ? "border-white/10" : "border-[var(--line-deep)]"} reveal-up`}>
          <p className="eyebrow text-[10px] uppercase tracking-[0.4em] text-[var(--accent-deep)] mb-6">
            {eyebrow}
          </p>
          <h2 className={`font-editorial text-4xl md:text-5xl leading-[1.1] mb-8 ${dark ? "text-white" : "text-[var(--ink)]"}`}>
            {title}
          </h2>
          <p className={`text-lg md:text-xl leading-relaxed opacity-90 ${dark ? "text-white/70" : "text-[var(--ink-soft)]"}`}>
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
