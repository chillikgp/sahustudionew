import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SiteHeader } from "@/components/site-header";
import { StoryGallery } from "@/components/story-gallery";
import { stories, storySlugs, storiesBySlug, type Story } from "@/data/stories";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  imageGallerySchema,
  storyArticleSchema,
} from "@/lib/schema";

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

  return buildMetadata({
    title: `${story.coupleNames} at ${story.venue}`,
    description: story.seoDescription,
    path: `/wedding-stories/${story.slug}`,
    type: "article",
    keywords: [
      ...story.tags,
      `${story.city} wedding photography`,
      `${story.venue} wedding`,
      story.category,
      ...story.functionsCovered,
    ],
    image: {
      src: story.coverImage.src,
      width: 1600,
      height: 1200,
      alt: story.coverImage.alt,
    },
  });
}

function getRelatedStories(story: Story) {
  return stories
    .filter((candidate) => candidate.slug !== story.slug)
    .sort((a, b) => {
      const aScore =
        Number(a.category === story.category) +
        Number(a.city === story.city) +
        a.tags.filter((tag) => story.tags.includes(tag)).length;
      const bScore =
        Number(b.category === story.category) +
        Number(b.city === story.city) +
        b.tags.filter((tag) => story.tags.includes(tag)).length;

      return bScore - aScore;
    })
    .slice(0, 2);
}

function buildEditorialParagraphs(story: Story) {
  const ceremonies = story.functionsCovered.join(", ");

  return [
    `${story.coupleNames}'s ${story.category.toLowerCase()} story was shaped by the atmosphere of ${story.venue} in ${story.city}, where the celebration moved through ${ceremonies}. Our approach was to let the location breathe in the photographs: the architecture, the changing light, the textures of the decor, and the small gestures that often become the most treasured memories.`,
    `For this visual essay, the photography direction stayed cinematic but restrained. We looked for frames that balanced scale with intimacy: a quiet portrait before the next ceremony, families gathering between rituals, hands adjusting jewellery, laughter during the lighter moments, and the couple returning to each other in the middle of a busy day. That rhythm gives the gallery its emotional shape.`,
    `The cultural details mattered as much as the grand scenes. Indian weddings are layered with sound, colour, blessings, movement, and family history, and each ceremony asks for a different pace. The ${story.category.toLowerCase()} coverage was planned to preserve those details without interrupting the natural flow of the celebration, so the final story feels polished, personal, and true to the people who lived it.`,
  ];
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = storiesBySlug[slug];

  if (!story) {
    notFound();
  }

  const pagePath = `/wedding-stories/${story.slug}` as const;
  const breadcrumbs = [
    { name: "Home", path: "" },
    { name: "Wedding Stories", path: "/wedding-stories" },
    { name: story.coupleNames, path: pagePath },
  ] as const;
  const relatedStories = getRelatedStories(story);
  const editorialParagraphs = buildEditorialParagraphs(story);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([...breadcrumbs]),
          storyArticleSchema(story),
          imageGallerySchema(story),
        ]}
      />
      <SiteHeader overlay={false} />
      <main className="bg-[var(--canvas)] pt-32 text-[var(--ink)]">
        <Breadcrumbs items={[...breadcrumbs]} />
        {/* Editorial Top Header */}
        <header className="pt-12 pb-20 lg:pb-32">
          <div className="site-container">
            <Link
              href="/wedding-stories"
              className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--ink-muted)] hover:text-[var(--ink)]"
            >
              <span className="h-px w-4 bg-[var(--line-deep)] transition-all group-hover:w-8" />
              Back to stories
            </Link>

            <div className="mt-16 grid items-start gap-12 lg:grid-cols-12">
              <div className="reveal-up lg:col-span-8">
                <p className="eyebrow text-[10px] uppercase tracking-[0.4em] text-[var(--accent-deep)]">
                  Visual Essay
                </p>
                <h1 className="font-editorial mt-8 text-6xl leading-[0.9] sm:text-8xl lg:text-9xl">
                  {story.coupleNames}
                  <span className="block italic text-[var(--ink-muted)]">
                    at {story.venue}
                  </span>
                </h1>
                <p className="mt-12 max-w-2xl text-xl leading-relaxed text-[var(--ink-soft)] lg:text-2xl">
                  {story.summary}
                </p>
              </div>

              <aside className="reveal-up space-y-12 lg:col-span-4 lg:pt-28">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
                  <div>
                    <h4 className="eyebrow text-[10px] uppercase tracking-[0.3em] text-[var(--ink-muted)]">Location</h4>
                    <p className="font-editorial mt-2 text-2xl">{story.city}</p>
                  </div>
                  <div>
                    <h4 className="eyebrow text-[10px] uppercase tracking-[0.3em] text-[var(--ink-muted)]">Timeline</h4>
                    <p className="mt-2 text-sm uppercase tracking-[0.1em] text-[var(--ink-soft)]">
                      {story.functionsCovered.join(" • ")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[var(--line-deep)] px-3 py-1.5 text-[9px] uppercase tracking-widest text-[var(--ink-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </header>

        {/* Story Content Blocks */}
        <article className="pb-32">
          {/* Main Portrait Section */}
          <section className="site-container">
            <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="reveal-up relative aspect-[4/5] overflow-hidden bg-[var(--paper)]">
                <Image
                  src={story.coverImage.src}
                  alt={story.coverImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="reveal-up space-y-16 lg:pt-20">
                <div className="space-y-6">
                  <p className="eyebrow text-[10px] uppercase tracking-[0.4em] text-[var(--accent-deep)]">
                    The Narrative
                  </p>
                  <p className="text-xl leading-relaxed text-[var(--ink-soft)] opacity-90 lg:text-2xl">
                    {story.narrative}
                  </p>
                </div>

                {story.testimonial && (
                  <blockquote className="relative space-y-6 pt-12">
                    <span className="font-editorial absolute -left-4 -top-4 text-8xl text-[var(--accent-deep)] opacity-10 leading-none">“</span>
                    <p className="font-editorial text-3xl leading-snug text-[var(--ink)] lg:text-4xl">
                      {story.testimonial.quote}
                    </p>
                    <footer className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[var(--ink-muted)]">
                      <span className="h-px w-4 bg-[var(--line-deep)]" />
                      {story.testimonial.author}
                    </footer>
                  </blockquote>
                )}
              </div>
            </div>
          </section>

          {/* Deep Dive Section */}
          <section className="site-container mt-32 grid gap-12 lg:grid-cols-3">
            {story.sections.map((section) => (
              <div key={section.heading} className="reveal-up space-y-6 border-t border-[var(--line-deep)] pt-12">
                <h2 className="font-editorial text-4xl leading-none text-[var(--ink)]">
                  {section.heading}
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-[var(--ink-soft)] opacity-90">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="site-container mt-28 grid gap-12 border-y border-[var(--line)] py-20 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow text-[10px] uppercase tracking-[0.35em] text-[var(--accent-deep)]">
                Editorial Note
              </p>
              <h2 className="font-editorial mt-4 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
                The venue, ceremonies, and feeling behind the frames
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
              {editorialParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Film Highlight Section */}
          <section className="mt-40 bg-[var(--ink)] py-32 text-[var(--paper)]">
            <div className="site-container">
              <div className="reveal-up mb-20 max-w-4xl">
                <p className="eyebrow text-[10px] uppercase tracking-[0.4em] text-white/40">
                  The Film
                </p>
                <h2 className="font-editorial mt-6 text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">
                  {story.filmTitle}
                </h2>
                <p className="mt-8 max-w-2xl text-xl opacity-80 lg:text-2xl">
                  {story.filmSummary}
                </p>
              </div>

              <div className="reveal-up relative aspect-video w-full overflow-hidden">
                <video
                  className="h-full w-full object-cover"
                  controls
                  preload="metadata"
                  poster={story.filmPoster}
                  src={story.filmSrc}
                  suppressHydrationWarning
                />
              </div>
            </div>
          </section>

          {/* Final Large Gallery Section */}
          <section id="gallery" className="site-container mt-40 space-y-20">
            <div className="reveal-up max-w-4xl">
              <p className="eyebrow text-[10px] uppercase tracking-[0.4em] text-[var(--accent-deep)]">
                The Gallery
              </p>
              <h2 className="font-editorial mt-8 text-6xl leading-[0.9] sm:text-7xl lg:text-8xl text-[var(--ink)]">
                Captured <span className="italic">Moments</span>
              </h2>
              <p className="mt-10 max-w-2xl text-xl leading-relaxed text-[var(--ink-soft)] lg:text-2xl">
                A curated selection of frames—quiet portraits, family energy, and 
                those unscripted thresholds where emotion lives.
              </p>
            </div>
            
            <StoryGallery images={story.gallery} />
          </section>

          <section className="site-container mt-32">
            <div className="mb-12 max-w-3xl">
              <p className="eyebrow text-[10px] uppercase tracking-[0.35em] text-[var(--accent-deep)]">
                Related Stories
              </p>
              <h2 className="font-editorial mt-4 text-5xl leading-tight text-[var(--ink)]">
                Continue through the archive
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {relatedStories.map((related) => (
                <Link
                  key={related.slug}
                  href={`/wedding-stories/${related.slug}`}
                  className="group grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-center"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[var(--paper)]">
                    <Image
                      src={related.coverImage.src}
                      alt={related.coverImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 28vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <p className="eyebrow text-[10px] uppercase tracking-[0.3em] text-[var(--ink-muted)]">
                      {related.city} / {related.category}
                    </p>
                    <h3 className="font-editorial mt-3 text-4xl leading-tight text-[var(--ink)] group-hover:text-[var(--accent-deep)]">
                      {related.coupleNames}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                      {related.teaser}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
