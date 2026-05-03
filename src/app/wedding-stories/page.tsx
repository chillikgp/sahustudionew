import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { stories } from "@/data/stories";
import { siteConfig } from "@/data/site";
import { PhilosophySection } from "@/components/philosophy-section";
import { ExploreMore } from "@/components/explore-more";

export const metadata: Metadata = {
  title: "Wedding Stories in Delhi NCR | Sahu Studio",
  description: "Explore real wedding stories, destination celebrations, and pre-wedding shoots captured by Sahu Studio.",
  alternates: {
    canonical: `${siteConfig.url}/wedding-stories`,
  },
};

export default function StoriesPage() {
  // Sort stories: featured first, then by implicit order (most recent at top of array)
  const sortedStories = [...stories].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": sortedStories.map((story, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `${siteConfig.url}/wedding-stories/${story.slug}`
    }))
  };

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader overlay={false} />

      <main className="pt-32 pb-20">
        {/* Header Section */}
        <header className="site-container mb-16">
          <span className="eyebrow text-[11px] tracking-[0.3em] text-[var(--accent)] block mb-4 delayed-reveal">
            Journal
          </span>
          <h1 className="font-editorial text-5xl md:text-7xl leading-[1.1] text-[var(--ink)] mb-8 reveal-up">
            Wedding <span className="headline-emphasis">Stories</span>
          </h1>
          <div className="max-w-2xl delayed-reveal">
            <p className="text-lg md:text-xl text-[var(--ink-soft)] leading-relaxed mb-6">
              A curated archive of real weddings, destination celebrations, and pre-wedding stories. 
              Each essay explores the unique rhythms, architecture, and quiet chemistries of our couples 
              across <span className="text-[var(--ink)] font-medium">Delhi NCR</span> and beyond.
            </p>
            <p className="text-sm text-[var(--ink-muted)] leading-relaxed italic">
              Explore our journey in <span className="text-[var(--ink)]">wedding photography</span>, 
              <span className="text-[var(--ink)]">cinematic wedding films</span>, and 
              <span className="text-[var(--ink)]">pre-wedding stories</span> that capture the soul of the celebration.
            </p>
          </div>
        </header>

        {/* Stories Grid */}
        <section className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {sortedStories.map((story) => (
              <Link 
                key={story.slug} 
                href={`/wedding-stories/${story.slug}`}
                className="group flex flex-col reveal-up"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden mb-6">
                  <Image
                    src={story.coverImage.src}
                    alt={story.coverImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    unoptimized
                  />
                  {story.featured && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[8px] uppercase tracking-widest text-[var(--ink)]">
                      Featured Story
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-6 bg-[var(--line-deep)]" />
                    <span className="eyebrow text-[9px] tracking-[0.2em] text-[var(--accent-deep)] uppercase">
                      {story.city}
                    </span>
                    <span className="text-[var(--line-deep)]">/</span>
                    <span className="eyebrow text-[9px] tracking-[0.2em] text-[var(--ink-muted)] uppercase">
                      {story.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-editorial text-3xl text-[var(--ink)] leading-tight group-hover:text-[var(--accent-deep)] transition-colors">
                      {story.coupleNames}
                    </h3>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[var(--ink-muted)]">
                      {story.venue}
                    </p>
                  </div>

                  <p className="text-base text-[var(--ink-soft)] leading-relaxed line-clamp-3">
                    {story.teaser}
                  </p>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--ink)] font-medium group-hover:gap-4 transition-all">
                      Read Story
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        {/* Philosophy & Explore */}
        <PhilosophySection 
          eyebrow="The Story Behind Every Frame"
          title="Every wedding has a rhythm. We tell it with honesty."
          body="Our wedding stories go beyond visuals. They capture the pace, emotions, and atmosphere of each celebration. From quiet moments to vibrant rituals, we document weddings as they unfold naturally, creating narratives that feel lived-in and timeless."
        />

        <ExploreMore 
          cards={[
            {
              eyebrow: "Photography",
              title: "Wedding Photography",
              cta: "View Photos",
              href: "/wedding-photography-delhi-ncr",
              image: "/images/showcase/showcase-01.jpg"
            },
            {
              eyebrow: "Cinematography",
              title: "Wedding Films",
              cta: "Watch Films",
              href: "/wedding-films",
              image: "/images/video/feature-video.jpg"
            }
          ]}
        />
      </main>
    </div>
  );
}
