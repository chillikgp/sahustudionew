"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { showcasePhotos } from "@/data/site";
import { Lightbox } from "./lightbox";
import { SectionIntro } from "./section-intro";

export function PhotoShowcase() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const lightboxImages = useMemo(
    () =>
      showcasePhotos.map((photo) => ({
        src: photo.src,
        alt: photo.alt,
        caption: photo.caption,
      })),
    [],
  );

  return (
    <section id="photos" className="bg-[var(--ink)] py-5 lg:py-8">
      <div className="site-container">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-4">
          {showcasePhotos.map((photo, index) => (
            <div 
              key={photo.src}
              className="break-inside-avoid mb-4 reveal-up"
            >
              <button
                type="button"
                onClick={() => setCurrentIndex(index)}
                className="group relative w-full overflow-hidden bg-[var(--paper)]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="w-full h-auto transition duration-700 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={photo.blurDataURL}
                  loading="lazy"
                />
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {currentIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={currentIndex}
          onClose={() => setCurrentIndex(null)}
          onNext={() =>
            setCurrentIndex((currentIndex + 1) % lightboxImages.length)
          }
          onPrevious={() =>
            setCurrentIndex(
              (currentIndex - 1 + lightboxImages.length) % lightboxImages.length,
            )
          }
        />
      )}
    </section>
  );
}
