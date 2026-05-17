import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SiteHeader } from "@/components/site-header";
import { getAllResourceFrontmatter } from "@/lib/content/resources";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Photography Resources",
  description:
    "Practical studio guides from Sahu Studio for passport photos, document photography, portraits, and photography preparation.",
  path: "/resources",
  keywords: ["photography resources", "passport photo guide", "studio photography guide"],
});

export default function ResourcesIndexPage() {
  const resources = getAllResourceFrontmatter();
  const breadcrumbs = [
    { name: "Home", path: "" as const },
    { name: "Resources", path: "/resources" as const },
  ];

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <SiteHeader overlay={false} />
      <main className="pt-32">
        <Breadcrumbs items={breadcrumbs} />
        <section className="site-container py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-[10px] uppercase tracking-[0.35em] text-[var(--accent-deep)]">
              Studio Resources
            </p>
            <h1 className="font-editorial mt-5 text-5xl leading-tight text-[var(--ink)] md:text-7xl">
              Useful guides, kept calm and practical
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-[var(--ink-soft)]">
              Editorial resources for clients preparing for document photographs,
              portraits, family sessions, and studio services.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {resources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="group border border-[var(--line)] p-8 hover:border-[var(--accent-deep)]"
              >
                <h2 className="font-editorial text-3xl text-[var(--ink)] group-hover:text-[var(--accent-deep)]">
                  {resource.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
