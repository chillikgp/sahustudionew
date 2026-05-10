"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { featuredFilm, filmCollection } from "@/data/site";
import { SiteHeader } from "@/components/site-header";
import { trackEvent } from "@/lib/gtag";
import { PhilosophySection } from "@/components/philosophy-section";
import { ExploreMore } from "@/components/explore-more";
import { Breadcrumbs } from "@/components/breadcrumbs";

function YouTubePlayer({ 
  youtubeId, 
  poster, 
  alt, 
  isActive, 
  onPlay 
}: { 
  youtubeId: string; 
  poster: string; 
  alt: string; 
  isActive: boolean;
  onPlay: () => void;
}) {
  if (isActive) {
    return (
      <div className="relative aspect-video w-full bg-black shadow-2xl">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onPlay}
      className="group relative aspect-video w-full overflow-hidden transition-all duration-700"
    >
      <Image
        src={poster}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-cover transition duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}

export function FilmsPageContent() {
  const [activeFilmId, setActiveFilmId] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="bg-black text-white">
      <SiteHeader overlay={true} />

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <video
          ref={videoRef}
          src={featuredFilm.videoSrc}
          poster={featuredFilm.poster}
          className="h-full w-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        <div className="site-container absolute inset-0 flex items-center">
          <div className="reveal-up max-w-4xl">
            <p className="eyebrow text-[10px] uppercase tracking-[0.4em] text-white/50 mb-6">
              Selected Cinematography
            </p>
            <h1 className="font-editorial text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8">
              {featuredFilm.title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-12">
              {featuredFilm.summary}
            </p>
            <div className="reveal-up mt-12 flex flex-wrap gap-6">
              <button 
                onClick={() => {
                  setActiveFilmId(featuredFilm.id);
                  trackEvent("video_play", "engagement", featuredFilm.title);
                }}
                className="shimmer-button inline-flex items-center bg-white px-10 py-5 text-[10px] uppercase tracking-[0.3em] text-black transition-all hover:bg-white/90"
              >
                Watch Full Film
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[var(--canvas)] pt-10 text-[var(--ink)]">
        <Breadcrumbs
          items={[
            { name: "Home", path: "" },
            { name: "Wedding Films", path: "/wedding-films" },
          ]}
        />
      </div>

      {/* Film Listing Section */}
      <section className="py-32 lg:py-48">
        <div className="site-container space-y-32 lg:space-y-64">
          {filmCollection.map((film, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeFilmId === film.id;

            return (
              <article 
                key={film.id}
                className={`flex flex-col gap-12 lg:gap-24 items-center reveal-up ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Video Area */}
                <div className="w-full lg:w-[60%] shadow-2xl">
                  <YouTubePlayer
                    youtubeId={film.youtubeId}
                    poster={film.poster}
                    alt={film.posterAlt}
                    isActive={isActive}
                    onPlay={() => {
                      setActiveFilmId(film.id);
                      trackEvent("video_play", "engagement", film.title);
                    }}
                  />
                </div>

                {/* Content Area */}
                <div className="w-full lg:w-[40%] space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="h-px w-8 bg-white/20" />
                      <p className="eyebrow text-[10px] uppercase tracking-[0.4em] text-white/40">
                        {film.collection}
                      </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                      {film.duration}
                    </span>
                  </div>

                  <h2 className="font-editorial text-4xl md:text-6xl text-white leading-tight">
                    {film.title}
                  </h2>
                  
                  <p className="text-lg text-white/60 leading-relaxed max-w-lg">
                    {film.summary}
                  </p>

                  <div className="pt-4">
                    <button 
                      onClick={() => {
                        setActiveFilmId(film.id);
                        trackEvent("video_play", "engagement", film.title);
                      }}
                      className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/80 transition-all hover:text-white hover:gap-6"
                    >
                      <span>Watch Film</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[var(--canvas)] py-24 text-[var(--ink)] lg:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow text-[10px] uppercase tracking-[0.35em] text-[var(--accent-deep)]">
              Cinematic Direction
            </p>
            <h2 className="font-editorial mt-5 text-4xl leading-tight md:text-5xl">
              Wedding films built from atmosphere, movement, and memory
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
            <p>
              Our wedding films are designed to feel immersive without becoming theatrical for the sake of it. We begin with the couple&apos;s rhythm, the venue language, the music of the celebration, and the emotional weight of each ceremony. A haldi may need warmth and motion; a reception may ask for grandeur; a quiet vow or family blessing needs restraint.
            </p>
            <p>
              The film team works alongside the photography team, so portraits, rituals, entrances, speeches, and candid family moments share one visual direction. This keeps the final wedding film elegant, emotionally clear, and faithful to the atmosphere of the day.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Explore */}
      <PhilosophySection 
        eyebrow="The Art of Cinematography"
        title="Films that let you feel your wedding again"
        body="Our wedding films are crafted to capture emotion, movement, and atmosphere. With a cinematic approach and natural storytelling, we create films that feel immersive, timeless, and deeply personal."
        dark={true}
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
            eyebrow: "Real Weddings",
            title: "Wedding Stories",
            cta: "View Stories",
            href: "/wedding-stories",
            image: "/images/stories/story-01-cover.jpg"
          }
        ]}
      />
    </div>
  );
}
