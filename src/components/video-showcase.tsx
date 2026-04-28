"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { featuredFilm, filmCollection } from "@/data/site";

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
      <div className="relative aspect-video w-full bg-black">
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
      className="group relative aspect-video w-full overflow-hidden transition-all duration-500 hover:scale-[1.01]"
    >
      <Image
        src={poster}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}

export function VideoShowcase() {
  const [activeFilmId, setActiveFilmId] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Performance Optimization: Autoplay/Pause based on viewport visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {}); // Handle potential autoplay blocks
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = videoRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div id="films" className="relative">
      {/* 1. Featured Hero - Sticky Curtain Reveal (Desktop only adaptive height) */}
      <section className="relative min-h-[140vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
          {/* Autoplay Background Video */}
          <div className="relative h-full w-full overflow-hidden">
            <video
              ref={videoRef}
              src={featuredFilm.videoSrc}
              poster={featuredFilm.poster}
              className="h-full w-full object-cover scale-[1.02]"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>

          <div className="site-container absolute inset-0 flex items-center">
            <div className="reveal-up max-w-3xl text-white">
              <p className="eyebrow text-[10px] uppercase tracking-[0.4em] text-white/60">
                Selected Cinematography
              </p>
              <h2 className="font-editorial mt-6 text-6xl leading-[0.95] sm:text-8xl lg:text-9xl">
                {featuredFilm.title}
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 lg:text-xl">
                {featuredFilm.summary}
              </p>
              <div className="mt-12">
                 <button 
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${featuredFilm.youtubeId}`, '_blank')}
                  className="shimmer-button inline-flex items-center bg-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] text-black transition-all hover:bg-white/90"
                 >
                   Watch Full Film
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Supporting Grid - Rising Curtain (Z-index 20) */}
      <section className="relative z-20 bg-black text-white">
        {/* Soft Gradient Mask for Curtain Reveal */}
        <div className="absolute inset-x-0 -top-40 h-40 bg-gradient-to-t from-black to-transparent lg:block hidden" />

        <div className="site-container py-20 lg:py-32">
          <div className="grid gap-20 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-32">
            {filmCollection.map((film, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeFilmId === film.id;

              return (
                <article
                  key={film.id}
                  className={`reveal-up transition-all duration-700 ${
                    activeFilmId && !isActive ? "opacity-30" : "opacity-100"
                  } ${
                    isEven ? "lg:col-span-7" : "lg:col-span-5 lg:mt-24"
                  }`}
                >
                  <YouTubePlayer
                    youtubeId={film.youtubeId}
                    poster={film.poster}
                    alt={film.posterAlt}
                    isActive={isActive}
                    onPlay={() => setActiveFilmId(film.id)}
                  />

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="h-px w-6 bg-white/20" />
                        <p className="eyebrow text-[10px] uppercase tracking-[0.3em] text-white/60">
                          {film.collection}
                        </p>
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                        {film.duration}
                      </p>
                    </div>

                    <h3 className="font-editorial text-4xl leading-tight text-white">
                      {film.title}
                    </h3>
                    <p className="max-w-xl text-lg leading-relaxed text-white/70">
                      {film.summary}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
