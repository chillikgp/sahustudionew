import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/schema";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="site-container">
      <ol className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.path || "home"} className="flex items-center gap-3">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span aria-current="page" className="text-[var(--ink)]">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path || "/"} className="hover:text-[var(--ink)]">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
