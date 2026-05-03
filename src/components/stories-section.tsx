import Image from "next/image";
import Link from "next/link";
import { stories } from "@/data/stories";
import { SectionIntro } from "./section-intro";

export function StoriesSection() {
  return (
    <section id="stories" className="relative z-20 bg-[var(--paper)] py-20 lg:py-32">
      <div className="site-container">
        <div className="reveal-up">
          <p className="eyebrow text-[10px] uppercase tracking-[0.4em] text-[var(--ink-muted)]">
            Journal
          </p>
          <h2 className="font-editorial mt-3 text-4xl leading-[1.1] text-[var(--ink)] sm:text-6xl">
            Wedding stories that feel <br />
            <span className="italic">lived-in and lasting</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">
            A curated collection of visual essays. Each story explores the unique 
            rhythms, architecture, and quiet chemistries of our couples.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="mt-20 grid gap-20 lg:grid-cols-12 lg:gap-12">
          {stories.slice(0, 3).map((story, index) => {
            const isFeatured = index === 0;
            
            return (
              <article
                key={story.slug}
                className={`reveal-up ${
                  isFeatured 
                    ? "lg:col-span-7" 
                    : "lg:col-span-5 flex flex-col justify-center"
                }`}
              >
                <div className={`group relative w-full overflow-hidden ${
                  isFeatured ? "aspect-[3/2]" : "aspect-[4/5]"
                }`}>
                  <Image
                    src={story.coverImage.src}
                    alt={story.coverImage.alt}
                    fill
                    sizes={isFeatured ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 100vw, 35vw"}
                    className="object-cover transition duration-1000 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
                </div>

                <div className={`${isFeatured ? "mt-10" : "mt-8"} space-y-5`}>
                  <div className="flex items-center gap-4">
                    <span className="h-px w-8 bg-[var(--line-deep)]" />
                    <p className="eyebrow text-[10px] uppercase tracking-[0.3em] text-[var(--accent-deep)]">
                      {story.city}
                    </p>
                  </div>

                  <div>
                    <h3 className={`font-editorial ${isFeatured ? "text-5xl" : "text-4xl"} leading-none text-[var(--ink)]`}>
                      {story.coupleNames}
                    </h3>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                      {story.venue}
                    </p>
                  </div>

                  <p className="max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">
                    {story.teaser}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/wedding-stories/${story.slug}`}
                      className="shimmer-button inline-flex items-center bg-[var(--ink)] px-8 py-4 text-[10px] uppercase tracking-[0.3em] text-[var(--paper)] transition-all hover:bg-[var(--accent-deep)]"
                    >
                      Read the story
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
