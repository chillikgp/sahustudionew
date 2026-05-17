import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { ResourceBottomSection } from "@/components/resource-page/resource-bottom-section";
import { SiteHeader } from "@/components/site-header";
import {
  getAllResourceFrontmatter,
  getResourceFrontmatter,
} from "@/lib/content/resources";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

type ResourceRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllResourceFrontmatter().map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({
  params,
}: ResourceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceFrontmatter(slug);

  if (!resource) {
    return {};
  }

  return buildMetadata({
    title: resource.title,
    description: resource.description,
    path: `/resources/${resource.slug}`,
    keywords: ["photography resource", "passport photo guide", resource.title],
  });
}

function renderMdxBody(body: string) {
  function renderInlineLinks(text: string) {
    const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

    return parts.map((part, index) => {
      const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

      if (!link) {
        return part;
      }

      return (
        <Link
          key={`${link[2]}-${index}`}
          href={link[2]}
          className="text-[var(--ink)] underline decoration-[var(--accent-deep)]/35 underline-offset-4 transition-colors hover:text-[var(--accent-deep)] hover:decoration-[var(--accent-deep)]"
        >
          {link[1]}
        </Link>
      );
    });
  }

  return body.split(/\n{2,}/).map((block) => {
    const image = block.match(/^!\[([^\]]+)\]\(([^)]+)\)$/);

    if (image) {
      return (
        <figure key={block} className="py-2">
          <div className="relative aspect-[16/10] overflow-hidden bg-[var(--canvas)]">
            <Image
              src={image[2]}
              alt={image[1]}
              fill
              sizes="(max-width: 1024px) 100vw, 56rem"
              className="object-cover"
              priority
            />
          </div>
          <figcaption className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
            {image[1]}
          </figcaption>
        </figure>
      );
    }

    if (block.startsWith("# ")) {
      return (
        <h1
          key={block}
          className="font-editorial text-5xl leading-tight text-[var(--ink)] md:text-7xl"
        >
          {block.replace(/^# /, "")}
        </h1>
      );
    }

    if (block.startsWith("## ")) {
      return (
        <h2
          key={block}
          className="font-editorial pt-6 text-4xl leading-tight text-[var(--ink)]"
        >
          {block.replace(/^## /, "")}
        </h2>
      );
    }

    return (
      <p key={block} className="text-lg leading-relaxed text-[var(--ink-soft)]">
        {renderInlineLinks(block)}
      </p>
    );
  });
}

export default async function ResourcePage({ params }: ResourceRouteProps) {
  const { slug } = await params;
  const resource = getResourceFrontmatter(slug);

  if (!resource) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", path: "" as const },
    { name: "Resources", path: "/resources" as const },
    { name: resource.title, path: `/resources/${resource.slug}` as const },
  ];

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <SiteHeader overlay={false} />
      <main className="pt-32">
        <Breadcrumbs items={breadcrumbs} />
        <article className="site-container max-w-4xl py-16 lg:py-24">
          <div className="space-y-8">{renderMdxBody(resource.body)}</div>
          <ResourceBottomSection resource={resource} />
        </article>
      </main>
    </div>
  );
}
