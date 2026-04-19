import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoryGallery } from "@/components/story-gallery";
import { siteConfig } from "@/data/site";
import { storySlugs, storiesBySlug } from "@/data/stories";

type StoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return storySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = storiesBySlug[slug];

  if (!story) {
    return {};
  }

  const title = `${story.coupleNames} at ${story.venue}`;

  return {
    title,
    description: story.seoDescription,
    alternates: {
      canonical: `${siteConfig.url}/stories/${story.slug}`,
    },
    openGraph: {
      type: "article",
      title,
      description: story.seoDescription,
      url: `${siteConfig.url}/stories/${story.slug}`,
      images: [
        {
          url: story.coverImage.src,
          width: 1600,
          height: 1200,
          alt: story.coverImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: story.seoDescription,
      images: [story.coverImage.src],
    },
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = storiesBySlug[slug];

  if (!story) {
    notFound();
  }

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${story.coupleNames} at ${story.venue}`,
    description: story.seoDescription,
    image: [`${siteConfig.url}${story.coverImage.src}`],
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/hero/hero-poster.jpg`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/stories/${story.slug}`,
    articleSection: "Wedding Stories",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <SiteHeader overlay={false} />
      <main className="bg-[var(--canvas)] pt-28 text-[var(--ink)]">
        <section className="border-b border-[var(--line)] pb-16">
          <div className="site-container">
            <Link
              href="/#stories"
              className="eyebrow inline-flex text-xs tracking-[0.2em] text-[var(--ink-muted)] hover:text-[var(--ink)]"
            >
              Back to stories
            </Link>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-6">
                <p className="eyebrow text-xs tracking-[0.26em] text-[var(--accent-deep)]">
                  Wedding Story
                </p>
                <h1 className="font-editorial max-w-4xl text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                  {story.coupleNames}
                  <span className="block text-[var(--ink-soft)]">
                    at {story.venue}
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">
                  {story.summary}
                </p>
              </div>
              <dl className="grid gap-5 rounded-[2rem] border border-[var(--line)] bg-[rgba(255,253,248,0.55)] p-6 sm:grid-cols-2">
                <div>
                  <dt className="eyebrow text-[11px] tracking-[0.22em] text-[var(--ink-muted)]">
                    Venue
                  </dt>
                  <dd className="mt-2 font-editorial text-2xl">{story.venue}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-[11px] tracking-[0.22em] text-[var(--ink-muted)]">
                    City
                  </dt>
                  <dd className="mt-2 font-editorial text-2xl">{story.city}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-[11px] tracking-[0.22em] text-[var(--ink-muted)]">
                    Functions covered
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
                    {story.functionsCovered.join(" • ")}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-[11px] tracking-[0.22em] text-[var(--ink-muted)]">
                    Tags
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {story.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--line)] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <article className="site-container section-space space-y-16">
          <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--paper)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={story.coverImage.src}
                  alt={story.coverImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="rounded-[2rem] border border-[var(--line)] bg-[rgba(255,253,248,0.55)] p-7">
                <p className="eyebrow text-xs tracking-[0.22em] text-[var(--accent-deep)]">
                  Narrative
                </p>
                <p className="mt-4 text-lg leading-8 text-[var(--ink-soft)]">
                  {story.narrative}
                </p>
              </div>

              {story.testimonial && (
                <blockquote className="rounded-[2rem] bg-[var(--ink)] p-8 text-[var(--paper-strong)] shadow-[var(--shadow-soft)]">
                  <p className="font-editorial text-3xl leading-tight">
                    “{story.testimonial.quote}”
                  </p>
                  <footer className="mt-5 text-sm uppercase tracking-[0.22em] text-white/70">
                    {story.testimonial.author}
                  </footer>
                </blockquote>
              )}
            </div>
          </section>

          <section className="grid gap-10 lg:grid-cols-3">
            {story.sections.map((section) => (
              <div
                key={section.heading}
                className="rounded-[2rem] border border-[var(--line)] bg-[rgba(255,253,248,0.55)] p-7"
              >
                <h2 className="font-editorial text-3xl">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-[var(--ink-soft)]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl">
              <p className="eyebrow text-xs tracking-[0.24em] text-[var(--accent-deep)]">
                Highlight film
              </p>
              <h2 className="font-editorial mt-3 text-4xl sm:text-5xl">
                {story.filmTitle}
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--ink-soft)]">
                {story.filmSummary}
              </p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--ink)] shadow-[var(--shadow-soft)]">
              <video
                className="aspect-video w-full object-cover"
                controls
                preload="metadata"
                poster={story.filmPoster}
                src={story.filmSrc}
                suppressHydrationWarning
              />
            </div>
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl">
              <p className="eyebrow text-xs tracking-[0.24em] text-[var(--accent-deep)]">
                Gallery
              </p>
              <h2 className="font-editorial mt-3 text-4xl sm:text-5xl">
                Moments from the celebration
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--ink-soft)]">
                A curated edit of portraits, rituals, family energy, and the
                in-between frames that made this celebration feel personal.
              </p>
            </div>
            <StoryGallery images={story.gallery} />
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
