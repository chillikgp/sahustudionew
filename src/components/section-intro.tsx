import type { ReactNode } from "react";

type SectionIntroProps = {
  label: string;
  title: ReactNode;
  description: string;
};

export function SectionIntro({
  label,
  title,
  description,
}: SectionIntroProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow text-xs tracking-[0.24em] text-[var(--accent-deep)]">
        {label}
      </p>
      <h2 className="font-editorial mt-3 text-4xl leading-[0.96] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">
        {description}
      </p>
    </div>
  );
}
